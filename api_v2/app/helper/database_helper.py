import sqlite3
import json
import time

class DatabaseHelper:
    def __init__(self, db_name):
        self.db_name = db_name
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()

    def create_table(self, table_name, columns):
        columns_str = ', '.join(columns)
        self.cursor.execute(f"CREATE TABLE {table_name} ({columns_str})")
        self.conn.commit()

    def insert(self, table_name, data):

        print('insert',table_name, data)

        # 開始計時
        start_time = time.time()

        columns = ', '.join(data.keys())
        placeholders = ', '.join(['?'] * len(data))
        self.cursor.execute(f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})", list(data.values()))

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        self.conn.commit()

    def update(self, table_name, data, where):

        print('update',table_name, data, where)

        # 開始計時
        start_time = time.time()

        where_str = ' AND '.join([f"{key} = ?" for key in where.keys()])
        columns = ', '.join([f"{key} = ?" for key in data.keys()])
        self.cursor.execute(f"UPDATE {table_name} SET {columns} WHERE {where_str}", list(data.values()) + list(where.values()))

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        self.conn.commit()

    def select(self,  table_name, columns, where={}):

        print('select',table_name, columns, where)

        # 開始計時
        start_time = time.time()

        where_str = 'AND '.join([f"{key} = ?" for key in where.keys()])
        columns_str = ', '.join(columns)
        params = list(where.values())
        # params = list(map(lambda x: f"'{x}'", params))
        sql = f"SELECT {columns_str} FROM {table_name}" + (f" WHERE {where_str}" if where_str else "")
        self.cursor.execute(sql , params)
        rows = self.cursor.fetchall()

        # 獲取表格的欄位名稱
        column_names = [description[0] for description in self.cursor.description]

        # 將每一行轉換為 JSON 物件
        json_objects = []
        for row in rows:
            json_object = dict(zip(column_names, row))
            json_objects.append(json_object)

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        return json_objects        
    
    def selectByDays(self, table_name, columns, where):

        print('select',table_name, columns, where)

        # 開始計時
        start_time = time.time()

        columns_str = ', '.join(columns)

        sql = f"SELECT {columns_str} FROM {table_name} WHERE date IN ({','.join(['?'] * len(where))})"
        self.cursor.execute(sql , where)
        rows = self.cursor.fetchall()

        # 獲取表格的欄位名稱
        column_names = [description[0] for description in self.cursor.description]

        # 將每一行轉換為 JSON 物件
        json_objects = []
        for row in rows:
            json_object = dict(zip(column_names, row))
            json_objects.append(json_object)

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        return json_objects   
    
    def selectLike(self,  table_name, columns, where={}):

        print('select like', table_name, columns, where)

        # 開始計時
        start_time = time.time()

        where_str = 'AND '.join([f"{key} LIKE ? " for key in where.keys()])
        columns_str = ', '.join(columns)
        params = list(map(lambda x: f'%{x}%' , where.values()))
        # params = list(map(lambda x: f"'{x}'", params))
        sql = f"SELECT {columns_str} FROM {table_name}" + (f" WHERE {where_str}" if where_str else "")
        self.cursor.execute(sql , params)
        rows = self.cursor.fetchall()

        # 獲取表格的欄位名稱
        column_names = [description[0] for description in self.cursor.description]

        # 將每一行轉換為 JSON 物件
        json_objects = []
        for row in rows:
            json_object = dict(zip(column_names, row))
            json_objects.append(json_object)

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        return json_objects     
    

    def delete(self, table_name, where):

        print('delete', table_name, where)

        # 開始計時
        start_time = time.time()

        where_str = 'AND '.join([f"{key} = ?" for key in where.keys()])
        params = list(where.values())
        sql = f"DELETE FROM {table_name} " + (f" WHERE {where_str}" if where_str else "")
        self.cursor.execute(sql , params)

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        self.conn.commit()

    def execute(self, sql):

        print('execute', sql)

        # 開始計時
        start_time = time.time()

        self.cursor.execute(sql)

        # 結束計時
        end_time = time.time()

        # 計算耗時
        elapsed_time = end_time - start_time
        print(f"執行時間: {elapsed_time:.2f} 秒")

        self.conn.commit()

    def close(self):
        self.conn.close()
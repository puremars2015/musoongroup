from datetime import datetime, timedelta

# 設定開始與結束日期
start_date = datetime(2024, 11, 4)
end_date = datetime(2025, 11, 6)

# 建立 SQL 語句模板
sql_template = """INSERT INTO louvre_office_hour (
    date, morning_cinic_1, morning_cinic_2, morning_cinic_3, 
    afternoon_cinic_1, afternoon_cinic_2, night_clinic_1
) VALUES {values};"""

# 產生日期範圍內的所有值
current_date = start_date
values_list = []

while current_date <= end_date:
    # 格式化日期為 'YYYY/M/D'，避免零填充
    formatted_date = f"{current_date.year}/{current_date.month}/{current_date.day}"
    # 新增一組值到列表
    values_list.append(f"('{formatted_date}', '', '', '', '', '', '')")
    # 日期加一天
    current_date += timedelta(days=1)

# 將所有值用逗號連接
values_str = ','.join(values_list)

# 使用模板將值插入 SQL 語句中
sql = sql_template.format(values=values_str)

# 輸出 SQL 語句或寫入檔案
print(sql)

with open('insert_office_hours.sql', 'w', encoding='utf-8') as f:
    f.write(sql)

print("SQL 語句已生成並寫入 insert_office_hours.sql 檔案")

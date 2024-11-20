import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-down-load-excel',
  templateUrl: './down-load-excel.component.html',
  styleUrls: ['./down-load-excel.component.css']
})
export class DownLoadExcelComponent {

  tableId: string = '';
  fileName: string = '';

  constructor() {}

  export() {
    this.exportAsExcel(this.tableId, this.fileName);
  }

  exportAsExcel(tableId: string, fileName: string) {
    // 從DOM中獲取表格
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // 創建一個工作簿
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // 寫入Excel文件
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}

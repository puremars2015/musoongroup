import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {


  constructor() { }

  ExportWithSinglePage(htmlDocTable: any, excelName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(htmlDocTable);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, excelName);
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonthReportImportService {

  constructor(private http: HttpClient) { }

  EX_MonthReport_Query(Monthly:any, InvoiceNo:any, ItemNo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}MonthReportImport/EX_MonthReport_Query?Monthly=${Monthly}&InvoiceNo=${InvoiceNo}&ItemNo=${ItemNo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

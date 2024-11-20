import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  Query(function_code: string, condition: string[]): Observable<any> {
    let url = `${environment.apiURL}Report/QueryReport`;
    let r = this.http.post<any>(url, { function_code: function_code, condition: condition });
    return r;
  }

  CreateReportSetting(function_params: any): Observable<any> {
    let url = `${environment.apiURL}Report/CreateReportSetting`;
    let r = this.http.post<any>(url, { 
      function_code: function_params.function_code, 
      function_name: function_params.function_name, 
      function_group: function_params.function_group, 
      encode_sql:function_params.encode_sql ,
      sql: function_params.sql
    });
    return r;
  }

  LoadReportSetting(function_code: string): Observable<any> {
    let url = `${environment.apiURL}Report/LoadReportSetting?function_code=${function_code}`;
    let r = this.http.get<any>(url);
    return r;
  }

  LoadReportList(): Observable<any> {
    let url = `${environment.apiURL}Report/LoadReportList`;
    let r = this.http.get<any>(url);
    return r;
  }
}

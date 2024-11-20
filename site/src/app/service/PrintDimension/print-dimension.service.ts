import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintDimensionService {

  constructor(private http: HttpClient) { }
  EX_Dimension_Query(PackingBy:any): Observable<any> {
    let url = `${environment.apiURL}PrintDimension/EX_Dimension_Query?PackingBy=${PackingBy}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Dimension_Save(ID:any, PackingBy:any, PackingByDesc:any, Length:any, Width:any, Height:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintDimension/EX_Dimension_Save?ID=${ID}&PackingBy=${PackingBy}&PackingByDesc=${PackingByDesc}&Length=${Length}&Width=${Width}&Height=${Height}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintContactPersonService {

  constructor(private http: HttpClient) { }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintContactPerson/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_ContactPerson_Query(): Observable<any> {
    let url = `${environment.apiURL}PrintContactPerson/EX_ContactPerson_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_ContactPerson_Save(ID:any, EmpNo:any, EmpName:any, TelNo:any, ExtNo:any, FaxNo:any, PersonSealFile:any, IsActive:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintContactPerson/EX_ContactPerson_Save?ID=${ID}&EmpNo=${EmpNo}&EmpName=${EmpName}&TelNo=${TelNo}&ExtNo=${ExtNo}&FaxNo=${FaxNo}&PersonSealFile=${PersonSealFile}&IsActive=${IsActive}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;  
    let u = encodeURI(url);
    let r = this.http.get<any>(u);
    return r;
  }
}

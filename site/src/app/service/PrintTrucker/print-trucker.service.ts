import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintTruckerService {

  constructor(private http: HttpClient) { }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintTrucker/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  SP_EX_Trucker_Query(): Observable<any> {
    let url = `${environment.apiURL}PrintTrucker/SP_EX_Trucker_Query?`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Trucker_Save(ID:any, TruckerName:any, Contact:any, TelNo:any, FaxNo:any, IsActive:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintTrucker/EX_Trucker_Save?ID=${ID}&TruckerName=${TruckerName}&Contact=${Contact}&TelNo=${TelNo}&FaxNo=${FaxNo}&IsActive=${IsActive}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

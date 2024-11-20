import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonConfigService {

  constructor(private http: HttpClient) { }

  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}CommonConfig/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query2(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}CommonConfig/EX_Config_Query2?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Save(ID:any, ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}CommonConfig/EX_Config_Save?ID=${ID}&ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Save2(ID:any, ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}CommonConfig/EX_Config_Save2?ID=${ID}&ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SysconfigService {

  constructor(private http: HttpClient) { }

  IM_Config_ItemType_GET(): Observable<any> {
    let url = `${environment.apiURL}Sysconfig/IM_Config_ItemType_GET`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Query_Sysconfig(ItemType:any, ItemValue:any, ItemValue2:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}Sysconfig/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Add(ItemType:any, ItemValue:any, ItemValue2:any, ItemDesc:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}Sysconfig/IM_Config_Add?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Update(ID:any, ItemValue:any, ItemValue2:any, ItemDesc:any, IsActive:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}Sysconfig/IM_Config_Update?ID=${ID}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&ItemDesc=${ItemDesc}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

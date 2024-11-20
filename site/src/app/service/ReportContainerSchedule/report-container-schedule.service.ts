import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportContainerScheduleService {

  constructor(private http: HttpClient) { }
  EX_Trucker_Query(): Observable<any> {
    let url = `${environment.apiURL}ReportContainerSchedule/EX_Trucker_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Query(ItemType:any,ItemValue:any,ItemValue2:any,ItemDesc:any,IsActive:any): Observable<any> {
    let url = `${environment.apiURL}ReportContainerSchedule/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  Report_ContainerSchedule_Query(InDateS:any,InDateE:any,Site:any,Trailer:any,ContainerLocation:any): Observable<any> {
    let url = `${environment.apiURL}ReportContainerSchedule/Report_ContainerSchedule_Query?InDateS=${InDateS}&InDateE=${InDateE}&Site=${Site}&Trailer=${Trailer}&ContainerLocation=${ContainerLocation}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

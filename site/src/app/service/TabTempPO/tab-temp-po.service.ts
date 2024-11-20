import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabTempPOService {

  constructor(private http: HttpClient) { }

  IM_TempPO_Query(GOOD_NO:any,PART_NO:any, DESCRIPTION:any): Observable<any> {
    let url = `${environment.apiURL}TabTempPO/IM_TempPO_Query?GOOD_NO=${GOOD_NO}&PART_NO=${PART_NO}&DESCRIPTION=${DESCRIPTION}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_TempPO_Update(ID:any, ARRIVE_DATE:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabTempPO/IM_TempPO_Update?ID=${ID}&ARRIVE_DATE=${ARRIVE_DATE}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_TempPO_Del(ID:any): Observable<any> {
    let url = `${environment.apiURL}TabTempPO/IM_TempPO_Del?ID=${ID}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

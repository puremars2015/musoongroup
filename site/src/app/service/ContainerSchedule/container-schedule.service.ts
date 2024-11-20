import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContainerManagementQuery {

  constructor(private http: HttpClient) { }

  ContainerManagement(QueryStatus:any,GOOD_NO:any,Site:any,ARRIVE_DATE_From:any,ARRIVE_DATE_To:any,RELEASE_DATE_From:any,RELEASE_DATE_To:any): Observable<any> {
    let url = `${environment.apiURL}ContainerSchedule/ContainerManagementQuery?QueryStatus=${QueryStatus}&GOOD_NO=${GOOD_NO}&Site=${Site}&ARRIVE_DATE_From=${ARRIVE_DATE_From}&ARRIVE_DATE_To=${ARRIVE_DATE_To}&RELEASE_DATE_From=${RELEASE_DATE_From}&RELEASE_DATE_To=${RELEASE_DATE_To}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ContainerUpdate(ID:any,RETURN_DATE:any,REAL_IN_DATE:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ContainerSchedule/ContainerUpdate?ID=${ID}&RETURN_DATE=${RETURN_DATE}&REAL_IN_DATE=${REAL_IN_DATE}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabContainerService {

  constructor(private http: HttpClient) { }

  IM_Config_Query(ItemType:any, ItemValue:any,ItemValue2:any,ItemDesc:any,IsActive:any): Observable<any> {
    let url = `${environment.apiURL}TabContainer/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_MATCH_Query(LOV_TYPE:any,LOV_VALUE:any,MATCH_STRING:any): Observable<any> {
    let url = `${environment.apiURL}TabContainer/FEMS_LOV_DATA_MATCH_Query?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}&MATCH_STRING=${MATCH_STRING}`;
    let r = this.http.get<any>(url);
    return r;
  }
  SP_EX_Trucker_Query(): Observable<any> {
    let url = `${environment.apiURL}TabContainer/SP_EX_Trucker_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Container_Query(GOOD_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabContainer/IM_Container_Query?GOOD_NO=${GOOD_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Container_Save(ID:any, CONTAINER_NO:any, GOOD_NO:any, SIZE:any, IN_DATE:any, RETURN_DATE:any, GOIN_LOCATIONOD_NO:any, MEMO:any, IN_PLANT_EXT_DUE_DATE:any, OUT_PLANT_EXT_DUE_DATE:any,  REAL_IN_DATE:any,  TRAILER:any,  IS_TRANSFER_OUT:any, IN_PLANT_DUE_DATE:any,  OUT_PLANT_DUE_DATE:any,  IN_CALENDAR_DAY:any,  OUT_WORK_DAY:any,  EMP_NO:any, CONTAINER_UPDATE_FROM:any, ReeferContainer:any): Observable<any> {
    let url = `${environment.apiURL}TabContainer/IM_Container_Save?ID=${ID}&CONTAINER_NO=${CONTAINER_NO}&GOOD_NO=${GOOD_NO}&SIZE=${SIZE}&IN_DATE=${IN_DATE}&RETURN_DATE=${RETURN_DATE}&GOIN_LOCATIONOD_NO=${GOIN_LOCATIONOD_NO}&MEMO=${MEMO}&IN_PLANT_EXT_DUE_DATE=${IN_PLANT_EXT_DUE_DATE}&OUT_PLANT_EXT_DUE_DATE=${OUT_PLANT_EXT_DUE_DATE}&REAL_IN_DATE=${REAL_IN_DATE}&TRAILER=${TRAILER}&IS_TRANSFER_OUT=${IS_TRANSFER_OUT}&IN_PLANT_DUE_DATE=${IN_PLANT_DUE_DATE}&OUT_PLANT_DUE_DATE=${OUT_PLANT_DUE_DATE}&IN_CALENDAR_DAY=${IN_CALENDAR_DAY}&OUT_WORK_DAY=${OUT_WORK_DAY}&EMP_NO=${EMP_NO}&CONTAINER_UPDATE_FROM=${CONTAINER_UPDATE_FROM}&ReeferContainer=${ReeferContainer}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Container_Del(ID:any): Observable<any> {
    let url = `${environment.apiURL}TabContainer/IM_Container_Del?ID=${ID}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

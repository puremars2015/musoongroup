import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContainerInfoQueryService {

  constructor(private http: HttpClient) { }

  IM_Config_Query(ItemType:any, ItemValue:any,ItemValue2:any,ItemDesc:any,IsActive:any): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_ContactCorp_Query(): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/EX_ContactCorp_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_ContactPerson_Query(): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/EX_ContactPerson_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Trucker_Query(): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/EX_Trucker_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_ContainerInfo_Query(GOOD_NO:any,Site:any, CONTAINER_NO:any,BROKER:any,IN_DATE:any, IN_LOCATION:any, CONTAINER_FIELD:any, TRAILER_INFO_IsPRINT:any,REAL_IN_DATE:any): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/IM_ContainerInfo_Query?GOOD_NO=${GOOD_NO}&Site=${Site}&CONTAINER_NO=${CONTAINER_NO}&BROKER=${BROKER}&IN_DATE=${IN_DATE}&IN_LOCATION=${IN_LOCATION}&CONTAINER_FIELD=${CONTAINER_FIELD}&TRAILER_INFO_IsPRINT=${TRAILER_INFO_IsPRINT}&REAL_IN_DATE=${REAL_IN_DATE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Container_Save(ID:any, CONTAINER_NO:any, GOOD_NO:any, SIZE:any, IN_DATE:any, RETURN_DATE:any, IN_LOCATION:any, MEMO:any, IN_PLANT_EXT_DUE_DATE:any, OUT_PLANT_EXT_DUE_DATE:any,  REAL_IN_DATE:any,  TRAILER:any,  IS_TRANSFER_OUT:any, IN_PLANT_DUE_DATE:any,  OUT_PLANT_DUE_DATE:any,  IN_CALENDAR_DAY:any,  OUT_WORK_DAY:any,  EMP_NO:any, CONTAINER_UPDATE_FROM:any, ReeferContainer:any): Observable<any> {
    let url = `${environment.apiURL}ContainerInfoQuery/IM_Container_Save?ID=${ID}&CONTAINER_NO=${CONTAINER_NO}&GOOD_NO=${GOOD_NO}&SIZE=${SIZE}&IN_DATE=${IN_DATE}&RETURN_DATE=${RETURN_DATE}&IN_LOCATION=${IN_LOCATION}&MEMO=${MEMO}&IN_PLANT_EXT_DUE_DATE=${IN_PLANT_EXT_DUE_DATE}&OUT_PLANT_EXT_DUE_DATE=${OUT_PLANT_EXT_DUE_DATE}&REAL_IN_DATE=${REAL_IN_DATE}&TRAILER=${TRAILER}&IS_TRANSFER_OUT=${IS_TRANSFER_OUT}&IN_PLANT_DUE_DATE=${IN_PLANT_DUE_DATE}&OUT_PLANT_DUE_DATE=${OUT_PLANT_DUE_DATE}&IN_CALENDAR_DAY=${IN_CALENDAR_DAY}&OUT_WORK_DAY=${OUT_WORK_DAY}&EMP_NO=${EMP_NO}&CONTAINER_UPDATE_FROM=${CONTAINER_UPDATE_FROM}&ReeferContainer=${ReeferContainer}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

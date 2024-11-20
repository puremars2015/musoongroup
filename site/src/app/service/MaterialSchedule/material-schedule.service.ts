import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialScheduleService {

  constructor(private http: HttpClient) { }
  IM_Config_Query(ItemType:any, ItemValue:any, ItemValue2:any, ItemDesc:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}MaterialSchedule/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PO_MaterialSchedule_Query(QueryStatus:any, PART_NO:any, VENDOR_NAME:any, VENDOR_Invoice:any, Site:any, ETD_From:any, ETD_To:any, ETA_From:any, ETA_To:any, CLEAR_DATE_From:any, CLEAR_DATE_To:any, RELEASE_DATE_From:any, RELEASE_DATE_To:any, ENTRY_DATE_From:any, ENTRY_DATE_To:any, CREATION_DATE_From:any, CREATION_DATE_To:any, PO_NUMBER:any, GOOD_NUMBER:any): Observable<any> {
    let url = `${environment.apiURL}MaterialSchedule/ERP_PO_MaterialSchedule_Query?QueryStatus=${QueryStatus}&PART_NO=${PART_NO}&VENDOR_NAME=${VENDOR_NAME}&VENDOR_Invoice=${VENDOR_Invoice}&Site=${Site}&ETD_From=${ETD_From}&ETD_To=${ETD_To}&ETA_From=${ETA_From}&ETA_To=${ETA_To}&CLEAR_DATE_From=${CLEAR_DATE_From}&CLEAR_DATE_To=${CLEAR_DATE_To}&RELEASE_DATE_From=${RELEASE_DATE_From}&RELEASE_DATE_To=${RELEASE_DATE_To}&ENTRY_DATE_From=${ENTRY_DATE_From}&ENTRY_DATE_To=${ENTRY_DATE_To}&CREATION_DATE_From=${CREATION_DATE_From}&CREATION_DATE_To=${CREATION_DATE_To}&PO_NUMBER=${PO_NUMBER}&GOOD_NUMBER=${GOOD_NUMBER}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PO_MaterialSchedule_BatchUpdateVENDOR_Invoice(ID_Join:any, VENDOR_Invoice:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}MaterialSchedule/ERP_PO_MaterialSchedule_BatchUpdateVENDOR_Invoice?ID_Join=${ID_Join}&VENDOR_Invoice=${VENDOR_Invoice}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_GOOD_FILE_Add(GOOD_NO:any, FILENAME:any, UPLOAD_PATH:any, PO_FLAG:any, SHIPMENT_ID:any, PONO:any, CREATE_EMP:any): Observable<any> {
    let url = `${environment.apiURL}MaterialSchedule/IM_GOOD_FILE_Add?GOOD_NO=${GOOD_NO}&FILENAME=${FILENAME}&UPLOAD_PATH=${UPLOAD_PATH}&PO_FLAG=${PO_FLAG}&SHIPMENT_ID=${SHIPMENT_ID}&PONO=${PONO}&CREATE_EMP=${CREATE_EMP}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PO_MaterialSchedule_Update(ID:any, CLEAR_DATE:any, ENTRY_DATE:any, CHECK_DATE:any, VENDOR_Invoice:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}MaterialSchedule/ERP_PO_MaterialSchedule_Update?ID=${ID}&CLEAR_DATE=${CLEAR_DATE}&ENTRY_DATE=${ENTRY_DATE}&CHECK_DATE=${CHECK_DATE}&VENDOR_Invoice=${VENDOR_Invoice}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

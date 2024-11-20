import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  constructor(private http: HttpClient) { }

  IM_CarrierConfig_Query(CARRIER_NAME:any, SUPPLIER_SITE_CODE:any, SUPPLIER_NAME:any): Observable<any> {
    let url = `${environment.apiURL}Carrier/IM_CarrierConfig_Query?CARRIER_NAME=${CARRIER_NAME}&SUPPLIER_SITE_CODE=${SUPPLIER_SITE_CODE}&SUPPLIER_NAME=${SUPPLIER_NAME}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_CarrierConfig_Add(CARRIER_NAME:any, FROM_PORT:any, CONTACT_PERSON:any, CONTACT_TEL:any, CONTACT_EMAIL:any, TRANS_TYPE:any, MEMO:any, IN_WORK_DAY:any, IN_CALENDAR_DAY:any, OUT_WORK_DAY:any, OUT_CALENDAR_DAY:any, SUPPLIER_SITE_CODE:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}Carrier/IM_CarrierConfig_Add?CARRIER_NAME=${CARRIER_NAME}&FROM_PORT=${FROM_PORT}&CONTACT_PERSON=${CONTACT_PERSON}&CONTACT_TEL=${CONTACT_TEL}&CONTACT_EMAIL=${CONTACT_EMAIL}&TRANS_TYPE=${TRANS_TYPE}&MEMO=${MEMO}&IN_WORK_DAY=${IN_WORK_DAY}&IN_CALENDAR_DAY=${IN_CALENDAR_DAY}&OUT_WORK_DAY=${OUT_WORK_DAY}&OUT_CALENDAR_DAY=${OUT_CALENDAR_DAY}&SUPPLIER_SITE_CODE=${SUPPLIER_SITE_CODE}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_Query(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}Carrier/FEMS_LOV_DATA_Query?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

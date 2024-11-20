import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportGoodsService {

  constructor(private http: HttpClient) { }
  FEMS_LOV_DATA_DISTRICT_TRUCKER(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}ReportGoods/FEMS_LOV_DATA_DISTRICT_TRUCKER?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Query(ItemType:any, ItemValue:any,ItemValue2:any, ItemDesc:any,IsActive:any): Observable<any> {
    let url = `${environment.apiURL}ReportGoods/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_DISTRICT_FREIGHT_TERM(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}ReportGoods/FEMS_LOV_DATA_DISTRICT_FREIGHT_TERM?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_DISTRICT_SERVICE_MODE(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}ReportGoods/FEMS_LOV_DATA_DISTRICT_SERVICE_MODE?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  Report_IM_Good_Query(GOOD_NO:any,BROKER:any,FORWARD:any,PART_NO:any,ARRIVE_DATE_From:any,ARRIVE_DATE_To:any,BROKER_DATE_From:any,BROKER_DATE_To:any,TRANSTYPE:any,TRANSTYPE_SERVICE_MODE:any,TRAILER:any,DELIVERY_CONDITION:any,Site:any): Observable<any> {
    let url = `${environment.apiURL}ReportGoods/Report_IM_Good_Query?GOOD_NO=${GOOD_NO}&BROKER=${BROKER}&FORWARD=${FORWARD}&PART_NO=${PART_NO}&ARRIVE_DATE_From=${ARRIVE_DATE_From}&ARRIVE_DATE_To=${ARRIVE_DATE_To}&BROKER_DATE_From=${BROKER_DATE_From}&BROKER_DATE_To=${BROKER_DATE_To}&TRANSTYPE=${TRANSTYPE}&TRANSTYPE_SERVICE_MODE=${TRANSTYPE_SERVICE_MODE}&TRAILER=${TRAILER}&DELIVERY_CONDITION=${DELIVERY_CONDITION}&Site=${Site}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportdataGoodsinfoService {

  constructor(private http: HttpClient) { }

  IM_Good_ImportData(GOOD_NO:any,SAIL_DATE:any,ARRIVE_DATE:any,RELEASE_DATE:any,BROKER:any,FORWARD:any,FROM_COUNTRY:any,FROM_PORT:any,DEPT_CODE:any,PRODUCT_TYPE:any,TRANSTYPE:any,TRANSTYPE_SERVICE_MODE:any,FLIGHT_SHIP_NAME:any,RELEASE_DATE_To:any,HAWB_NO:any,CARTON:any,VOLUME_WEIGHT:any,TOTAL_INVOICE_AMOUNT:any,TAXED_PRICE:any,MEMO:any,BROKER_DATE:any,CONTAINER_FIELD:any,CARRIER_NAME:any,DELIVERY_CONDITION:any,EXPORTER:any,GOODS_LOCATION:any,DISCHARGE_PORT:any,APP_NO:any,APP_TYPE:any,APP_GROSS_WEIGHT:any,APP_EXCHANGE_RATE:any,APP_CURRENCY:any,BusinessTax:any,CustomsDuty:any,TradeFee:any,FARE_CONTAINER:any,FARE_INDUSTRY:any,QueryStatus:any,SpecialItemType:any,ApplicationType:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ImportdataGoodsinfo/IM_Good_ImportData?GOOD_NO=${GOOD_NO}&SAIL_DATE=${SAIL_DATE}&ARRIVE_DATE=${ARRIVE_DATE}&RELEASE_DATE=${RELEASE_DATE}&BROKER=${BROKER}&FORWARD=${FORWARD}&FROM_COUNTRY=${FROM_COUNTRY}&FROM_PORT=${FROM_PORT}&DEPT_CODE=${DEPT_CODE}&PRODUCT_TYPE=${PRODUCT_TYPE}&TRANSTYPE=${TRANSTYPE}&TRANSTYPE_SERVICE_MODE=${TRANSTYPE_SERVICE_MODE}&FLIGHT_SHIP_NAME=${FLIGHT_SHIP_NAME}&RELEASE_DATE_To=${RELEASE_DATE_To}&HAWB_NO=${HAWB_NO}&CARTON=${CARTON}&VOLUME_WEIGHT=${VOLUME_WEIGHT}&TOTAL_INVOICE_AMOUNT=${TOTAL_INVOICE_AMOUNT}&TAXED_PRICE=${TAXED_PRICE}&MEMO=${MEMO}&BROKER_DATE=${BROKER_DATE}&CONTAINER_FIELD=${CONTAINER_FIELD}&CARRIER_NAME=${CARRIER_NAME}&DELIVERY_CONDITION=${DELIVERY_CONDITION}&EXPORTER=${EXPORTER}&GOODS_LOCATION=${GOODS_LOCATION}&DISCHARGE_PORT=${DISCHARGE_PORT}&APP_NO=${APP_NO}&APP_TYPE=${APP_TYPE}&APP_GROSS_WEIGHT=${APP_GROSS_WEIGHT}&APP_EXCHANGE_RATE=${APP_EXCHANGE_RATE}&APP_CURRENCY=${APP_CURRENCY}&BusinessTax=${BusinessTax}&CustomsDuty=${CustomsDuty}&TradeFee=${TradeFee}&FARE_CONTAINER=${FARE_CONTAINER}&FARE_INDUSTRY=${FARE_INDUSTRY}&QueryStatus=${QueryStatus}&SpecialItemType=${SpecialItemType}&ApplicationType=${ApplicationType}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_ImportData_APP_Detail(GOOD_NO:any,APP_NO:any,ITEMNO:any,PART_NO:any,DESCRIPTION:any,QTY:any,WEIGHT:any,UNIT:any,TARIFF:any,TAX_RULE:any,TaxedAmt:any,IsMappingInsert:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ImportdataGoodsinfo/IM_ImportData_APP_Detail?GOOD_NO=${GOOD_NO}&APP_NO=${APP_NO}&ITEMNO=${ITEMNO}&PART_NO=${PART_NO}&DESCRIPTION=${DESCRIPTION}&QTY=${QTY}&WEIGHT=${WEIGHT}&UNIT=${UNIT}&TARIFF=${TARIFF}&TAX_RULE=${TAX_RULE}&TaxedAmt=${TaxedAmt}&IsMappingInsert=${IsMappingInsert}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Container_ImportData(GOOD_NO:any,CONTAINER_NO:any,SIZE:any,IN_LOCATION:any,TRAILER:any,IN_DATE:any,RETURN_DATE:any,REAL_IN_DATE:any,IN_PLANT_EXT_DUE_DATE:any,OUT_PLANT_EXT_DUE_DATE:any,MEMO:any,IS_TRANSFER_OUT:any,OUT_PLANT_DUE_DATE:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ImportdataGoodsinfo/IM_Container_ImportData?GOOD_NO=${GOOD_NO}&CONTAINER_NO=${CONTAINER_NO}&SIZE=${SIZE}&IN_LOCATION=${IN_LOCATION}&TRAILER=${TRAILER}&IN_DATE=${IN_DATE}&RETURN_DATE=${RETURN_DATE}&REAL_IN_DATE=${REAL_IN_DATE}&IN_PLANT_EXT_DUE_DATE=${IN_PLANT_EXT_DUE_DATE}&OUT_PLANT_EXT_DUE_DATE=${OUT_PLANT_EXT_DUE_DATE}&MEMO=${MEMO}&IS_TRANSFER_OUT=${IS_TRANSFER_OUT}&OUT_PLANT_DUE_DATE=${OUT_PLANT_DUE_DATE}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_GoodContainer_ImportData(GOOD_NO:any,CONTAINER_NO:any,SIZE:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ImportdataGoodsinfo/IM_GoodContainer_ImportData?GOOD_NO=${GOOD_NO}&CONTAINER_NO=${CONTAINER_NO}&SIZE=${SIZE}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_ImportData_APP_Detail_Industry(GOOD_NO:any,ITEMNO:any,INDUSTRY_APPROVED_NO:any,INDUSTRY_REFUND_NO:any,EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ImportdataGoodsinfo/IM_ImportData_APP_Detail_Industry?GOOD_NO=${GOOD_NO}&ITEMNO=${ITEMNO}&INDUSTRY_APPROVED_NO=${INDUSTRY_APPROVED_NO}&INDUSTRY_REFUND_NO=${INDUSTRY_REFUND_NO}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

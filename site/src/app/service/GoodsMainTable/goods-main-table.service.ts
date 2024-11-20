import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsMainTableService {

  constructor(private http: HttpClient) { }

  FEMSLOVDATAGOODS(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMSLOVDATAGOODS?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }

  EXCONFIGQUERY(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/EXCONFIGQUERY?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }

  FEMS_LOV_DATA_COSTCENTER(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_COSTCENTER?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_BROKER(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_BROKER?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_FORWARDER(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_FORWARDER?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_AP_SupplierInfo_Query(SUPPLIER_SITE_CODE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/ERP_AP_SupplierInfo_Query?SUPPLIER_SITE_CODE=${SUPPLIER_SITE_CODE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_DISCHARGE_PORT(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_DISCHARGE_PORT?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_FREIGHT_TERM(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_FREIGHT_TERM?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_SERVICE_MODE(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_SERVICE_MODE?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_CarrierConfig_Query(CARRIER_NAME:any,SUPPLIER_SITE_CODE:any,SUPPLIER_NAME:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/IM_CarrierConfig_Query?CARRIER_NAME=${CARRIER_NAME}&SUPPLIER_SITE_CODE=${SUPPLIER_SITE_CODE}&SUPPLIER_NAME=${SUPPLIER_NAME}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_SPECIAL_ITEM_TYPE(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_SPECIAL_ITEM_TYPE?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_SHIP_TO_COUNTRY(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_SHIP_TO_COUNTRY?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_SHIP_TO_PORT(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_SHIP_TO_PORT?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_EXPENSE_TYPE(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_EXPENSE_TYPE?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Query(ItemType:any, ItemValue:any, ItemValue2:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_CURRENCY(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_CURRENCY?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_DISTRICT(LOV_TYPE:any,LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/FEMS_LOV_DATA_DISTRICT?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_GoodMainForm_Query(GOOD_NO:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/IM_GoodMainForm_Query?GOOD_NO=${GOOD_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Good_Update(GOOD_NO: any, MAWB_NO: any, HAWB_NO: any, GOODS_LOCATION: any, CARTON: any, CONTAINER_FIELD: any, DEPT_CODE: any, DELIVERY_CONDITION: any, BROKER: any, FORWARD: any, EXPORTER: any, SAIL_DATE: any, ARRIVE_DATE: any, RELEASE_DATE: any, BROKER_DATE: any, DISCHARGE_PORT: any, TRANSTYPE: any, TRANSTYPE_SERVICE_MODE: any, CARRIER_NAME: any, PRODUCT_TYPE: any, ENTRY_DATE: any, STORAGE_DATE: any, SpecialItemType: any, TOTAL_INVOICE_AMOUNT: any, TAXED_PRICE: any, FROM_COUNTRY: any, FROM_PORT: any, FLIGHT_SHIP_NAME: any, VOLUME_WEIGHT: any, MEMO: any, CREATE_DATE: any, SameDay: any, ApplicationType: any, APP_NO: any, APP_TYPE: any, APP_GROSS_WEIGHT: any, APP_EXCHANGE_RATE: any, APP_CURRENCY: any, District: any, Site: any, BusinessTax: any, CustomsDuty: any, TradeFee: any, EMP_NO: any, FARE_CONTAINER: any, FARE_INDUSTRY: any, CHARGABLE_WEIGHT: any, BUSINESS: any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/IM_Good_Update?GOOD_NO=${GOOD_NO}&MAWB_NO=${MAWB_NO}&HAWB_NO=${HAWB_NO}&GOODS_LOCATION=${GOODS_LOCATION}&CARTON=${CARTON}&CONTAINER_FIELD=${CONTAINER_FIELD}&DEPT_CODE=${DEPT_CODE}&DELIVERY_CONDITION=${DELIVERY_CONDITION}&BROKER=${BROKER}&FORWARD=${FORWARD}&EXPORTER=${EXPORTER}&SAIL_DATE=${SAIL_DATE}&ARRIVE_DATE=${ARRIVE_DATE}&RELEASE_DATE=${RELEASE_DATE}&BROKER_DATE=${BROKER_DATE}&DISCHARGE_PORT=${DISCHARGE_PORT}&TRANSTYPE=${TRANSTYPE}&TRANSTYPE_SERVICE_MODE=${TRANSTYPE_SERVICE_MODE}&CARRIER_NAME=${CARRIER_NAME}&PRODUCT_TYPE=${PRODUCT_TYPE}&ENTRY_DATE=${ENTRY_DATE}&STORAGE_DATE=${STORAGE_DATE}&SpecialItemType=${SpecialItemType}&TOTAL_INVOICE_AMOUNT=${TOTAL_INVOICE_AMOUNT}&TAXED_PRICE=${TAXED_PRICE}&FROM_COUNTRY=${FROM_COUNTRY}&FROM_PORT=${FROM_PORT}&FLIGHT_SHIP_NAME=${FLIGHT_SHIP_NAME}&VOLUME_WEIGHT=${VOLUME_WEIGHT}&MEMO=${MEMO}&CREATE_DATE=${CREATE_DATE}&SameDay=${SameDay}&ApplicationType=${ApplicationType}&APP_NO=${APP_NO}&APP_TYPE=${APP_TYPE}&APP_GROSS_WEIGHT=${APP_GROSS_WEIGHT}&APP_EXCHANGE_RATE=${APP_EXCHANGE_RATE}&APP_CURRENCY=${APP_CURRENCY}&District=${District}&Site=${Site}&BusinessTax=${BusinessTax}&CustomsDuty=${CustomsDuty}&TradeFee=${TradeFee}&EMP_NO=${EMP_NO}&FARE_CONTAINER=${FARE_CONTAINER}&FARE_INDUSTRY=${FARE_INDUSTRY}&CHARGABLE_WEIGHT=${CHARGABLE_WEIGHT}&BUSINESS=${BUSINESS}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Good_RePick_Set(GOOD_NO:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainTable/IM_Good_RePick_Set?GOOD_NO=${GOOD_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddGoodPoService {

  constructor(private http: HttpClient) { }

  Sample(): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKind/GetGoodKinds`;
    let r = this.http.get<any>(url);
    return r;
  }
  GoodPo(PO_NUMBER: any, ETA_From: any,ETA_To:any,Site:any,VENDOR:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/GetGoodsByPO?PO_NUMBER=${PO_NUMBER}&ETA_FROM=${ETA_From}&ETA_TO=${ETA_To}&Site=${Site}&VENDOR=${VENDOR}`;
    let r = this.http.get<any>(url);
    return r;
  }
  GoodNoAdd(GoodsKind: any, AddCount: any,EmpNo:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/GetGoodNoAdd?GoodsKind=${GoodsKind}&AddCount=${AddCount}&EmpNo=${EmpNo}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IMTempPOSave(GOOD_NO:any,PO_FLAG:any, ShipmentID:any, PONO:any, DESTINATION_ORGANIZATION_CODE:any,PART_NO:any, DESCRIPTION:any, QTY_LINE:any, QTY_Shipment:any,UNIT:any, VENDOR_CODE:any, VENDOR:any, VENDOR_Invoice:any, PAYMENT_TERM:any,BDFlag:any,DESTINATION_SUBINVENTORY:any, CURRENCY_CODE:any, UNIT_PRICE:any, Applicant:any, EPUR_PI_UID:any,ARRIVE_DATE:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/GetIMTempPoSave?GOOD_NO=${GOOD_NO}&PO_FLAG=${PO_FLAG}&ShipmentID=${ShipmentID}&PONO=${PONO}&DESTINATION_ORGANIZATION_CODE=${DESTINATION_ORGANIZATION_CODE}&PART_NO=${PART_NO}&DESCRIPTION=${DESCRIPTION}&QTY_LINE=${QTY_LINE}&QTY_Shipment=${QTY_Shipment}&UNIT=${UNIT}&VENDOR_CODE=${VENDOR_CODE}&VENDOR=${VENDOR}&VENDOR_Invoice=${VENDOR_Invoice}&PAYMENT_TERM=${PAYMENT_TERM}&BDFlag=${BDFlag}&DESTINATION_SUBINVENTORY=${DESTINATION_SUBINVENTORY}&CURRENCY_CODE=${CURRENCY_CODE}&UNIT_PRICE=${UNIT_PRICE}&Applicant=${Applicant}&EPUR_PI_UID=${EPUR_PI_UID}&ARRIVE_DATE=${ARRIVE_DATE}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IMTempPOSaveArray(data:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/GetIMTempPoSaveArray`;
    let r = this.http.post<any>(url,data);
    return r;
  }
  IMTempPOSaveArray2(data2:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/GetIMTempPoSaveArray2`;
    let r = this.http.post<any>(url,data2);
    return r;
  }
  GetGoodNO(): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/GetgoodNO`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_GOOD_FILE_AddGood_Query(PONO_Join:any, ShipmentID_Join:any, IsNewGood:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/IM_GOOD_FILE_AddGood_Query?PONO_Join=${PONO_Join}&ShipmentID_Join=${ShipmentID_Join}&IsNewGood=${IsNewGood}`;
    let r = this.http.get<any>(url);
    return r;
  }
  TempPO_Query(GOOD_NO:any, PART_NO:any, DESCRIPTION:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKindPO/IM_TempPO_Query?GOOD_NO=${GOOD_NO}&PART_NO=${PART_NO}&DESCRIPTION=${DESCRIPTION}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

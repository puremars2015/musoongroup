import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabAppDetailService {

  constructor(private http: HttpClient) { }

  IM_Config_Query(ItemType:any, ItemValue:any,ItemValue2:any,ItemDesc:any,IsActive:any): Observable<any> {
    let url = `${environment.apiURL}TabAppDetail/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_APP_Detail_Query(GOOD_NO:any,ITEMNO:any): Observable<any> {
    let url = `${environment.apiURL}TabAppDetail/IM_APP_Detail_Query?GOOD_NO=${GOOD_NO}&ITEMNO=${ITEMNO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_APP_Detail_Save(ID:any, GOOD_NO:any,ITEMNO:any,PART_NO:any,DESCRIPTION:any, QTY:any,WEIGHT:any,UNIT:any,TARIFF:any,TAX_RULE:any,TaxedAmt:any, INDUSTRY_APPROVED_NO:any,INDUSTRY_REFUND_NO:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabAppDetail/IM_APP_Detail_Save?ID=${ID}&GOOD_NO=${GOOD_NO}&ITEMNO=${ITEMNO}&PART_NO=${PART_NO}&DESCRIPTION=${DESCRIPTION}&QTY=${QTY}&WEIGHT=${WEIGHT}&UNIT=${UNIT}&TARIFF=${TARIFF}&TAX_RULE=${TAX_RULE}&TaxedAmt=${TaxedAmt}&INDUSTRY_APPROVED_NO=${INDUSTRY_APPROVED_NO}&INDUSTRY_REFUND_NO=${INDUSTRY_REFUND_NO}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_APP_Detail_Del(ID:any): Observable<any> {
    let url = `${environment.apiURL}TabAppDetail/IM_APP_Detail_Del?ID=${ID}`;
    let r = this.http.get<any>(url);
    return r;
  }  
}

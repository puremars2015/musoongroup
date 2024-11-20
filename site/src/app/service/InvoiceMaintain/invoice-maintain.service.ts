import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceMaintainService {

  constructor(private http: HttpClient) { }

  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PUBLIC_DATA_Query_ShipMethod(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/ERP_PUBLIC_DATA_Query_ShipMethod?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_Invoice_Query?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query2(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_Invoice_Query2?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PUBLIC_DATA_Query_PRODUCT(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/ERP_PUBLIC_DATA_Query_PRODUCT?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_GoodsNo_Save(Org:any, ApplicationType:any, ProductType:any, Modify_Emp:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_GoodsNo_Save?Org=${Org}&ApplicationType=${ApplicationType}&ProductType=${ProductType}&Modify_Emp=${Modify_Emp}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_Invoice_Save?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}
    &BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Notice_Update_TradeTerm(strGoodsNo:any, strTradeTerm:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_Notice_Update_TradeTerm?strGoodsNo=${strGoodsNo}&strTradeTerm=${strTradeTerm}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Notice_Query(GoodsNo:any, ShippingWay:any, ApplicationType:any, ApplicationNo:any, IsFEMS:any, InvoiceNo:any, SourceNo:any, GoodsDateFrom:any, GoodsDateTo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_Notice_Query?GoodsNo=${GoodsNo}&ShippingWay=${ShippingWay}&ApplicationType=${ApplicationType}&ApplicationNo=${ApplicationNo}&IsFEMS=${IsFEMS}&InvoiceNo=${InvoiceNo}&SourceNo=${SourceNo}&GoodsDateFrom=${GoodsDateFrom}&GoodsDateTo=${GoodsDateTo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabInvoiceService {

  constructor(private http: HttpClient) { }

  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PUBLIC_DATA_Query2(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_PUBLIC_DATA_Query2?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_GL_EXCHANGERATE_Query(RATE_TYPE_ABBR:any, CONVERSION_DATE:any,FROM_CURRENCY_CODE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_GL_EXCHANGERATE_Query?RATE_TYPE_ABBR=${RATE_TYPE_ABBR}&CONVERSION_DATE=${CONVERSION_DATE}&FROM_CURRENCY_CODE=${FROM_CURRENCY_CODE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Customer_Site_Query(ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Customer_Site_Query?ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Query?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query_Invoice_No(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Query_Invoice_No?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query_All(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Query_All?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query_Other(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Query_Other?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Line_Query(InvoiceNo:any, InvoiceLineNo:any, ID:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Line_Query?InvoiceNo=${InvoiceNo}&InvoiceLineNo=${InvoiceLineNo}&ID=${ID}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_OM_CUSTOMER_SITE_Query(ACCOUNT_NUMBER:any, PARTY_SITE_NUMBER:any, STATUS:any, OU_CODE:any, BU_CODE:any, CUSTOMER_NO:any, CUSTOMER_SHIPTO_NO:any, CUSTOMER_SHIPTO_BILLTO_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_OM_CUSTOMER_SITE_Query?ACCOUNT_NUMBER=${ACCOUNT_NUMBER}&PARTY_SITE_NUMBER=${PARTY_SITE_NUMBER}&STATUS=${STATUS}&OU_CODE=${OU_CODE}&BU_CODE=${BU_CODE}&CUSTOMER_NO=${CUSTOMER_NO}&CUSTOMER_SHIPTO_NO=${CUSTOMER_SHIPTO_NO}&CUSTOMER_SHIPTO_BILLTO_NO=${CUSTOMER_SHIPTO_BILLTO_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_OM_CUSTOMER_SITE_Query_ShipToCode(ACCOUNT_NUMBER:any, PARTY_SITE_NUMBER:any, STATUS:any, OU_CODE:any, BU_CODE:any, CUSTOMER_NO:any, CUSTOMER_SHIPTO_NO:any, CUSTOMER_SHIPTO_BILLTO_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_OM_CUSTOMER_SITE_Query_ShipToCode?ACCOUNT_NUMBER=${ACCOUNT_NUMBER}&PARTY_SITE_NUMBER=${PARTY_SITE_NUMBER}&STATUS=${STATUS}&OU_CODE=${OU_CODE}&BU_CODE=${BU_CODE}&CUSTOMER_NO=${CUSTOMER_NO}&CUSTOMER_SHIPTO_NO=${CUSTOMER_SHIPTO_NO}&CUSTOMER_SHIPTO_BILLTO_NO=${CUSTOMER_SHIPTO_BILLTO_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_GL_EXCHANGERATE_Query2(RATE_TYPE_ABBR:any, CONVERSION_DATE:any,FROM_CURRENCY_CODE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_GL_EXCHANGERATE_Query2?RATE_TYPE_ABBR=${RATE_TYPE_ABBR}&CONVERSION_DATE=${CONVERSION_DATE}&FROM_CURRENCY_CODE=${FROM_CURRENCY_CODE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_GIB_PART_Query(ORGANIZATION_CODE:any, GIB_ITEM_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/ERP_GIB_PART_Query?ORGANIZATION_CODE=${ORGANIZATION_CODE}&GIB_ITEM_NO=${GIB_ITEM_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, ORGANIZATION_CODE:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Save?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&ORGANIZATION_CODE=${ORGANIZATION_CODE}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}&BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save_Cost(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, ORGANIZATION_CODE:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Save_Cost?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&ORGANIZATION_CODE=${ORGANIZATION_CODE}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}&BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save_Discount(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, ORGANIZATION_CODE:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Save_Discount?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&ORGANIZATION_CODE=${ORGANIZATION_CODE}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}&BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save_Currency(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, ORGANIZATION_CODE:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Save_Currency?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&ORGANIZATION_CODE=${ORGANIZATION_CODE}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}&BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Line_Save(InvoiceNo:any, InvoiceLineNo:any, ItemNo:any, ItemDescription:any, Unit:any, Quantity:any, Price:any, FOC:any, BDFlag:any, BOMNo:any, Location:any, TaxCode:any, ExtraDesc1:any, ExtraDesc2:any, Modify_Emp:any, ID:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabInvoice/EX_Goods_Invoice_Line_Save?InvoiceNo=${InvoiceNo}&InvoiceLineNo=${InvoiceLineNo}&ItemNo=${ItemNo}&ItemDescription=${ItemDescription}&Unit=${Unit}&Quantity=${Quantity}&Price=${Price}&FOC=${FOC}&BDFlag=${BDFlag}&BOMNo=${BOMNo}&Location=${Location}&TaxCode=${TaxCode}&ExtraDesc1=${ExtraDesc1}&ExtraDesc2=${ExtraDesc2}&Modify_Emp=${Modify_Emp}&ID=${ID}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r; 
  }
}

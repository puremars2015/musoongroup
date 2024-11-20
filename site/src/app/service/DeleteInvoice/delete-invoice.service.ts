import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteInvoiceService {

  constructor(private http: HttpClient) { }

  EX_Goods_Invoice_Query(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any , ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}DeleteInvoice/EX_Goods_Invoice_Query?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}InvoiceMaintain/EX_Goods_Invoice_Save?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}
    &BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

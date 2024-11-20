import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintLCDocumentService {

  constructor(private http: HttpClient) { }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintLCDocuments/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_CrystalReport_Query(GoodsNo:any, ID:any, EmpNo:any, InvoiceNo:any, InvoiceNoS:any, InvoiceNoE:any, PackingNo:any, LCNo:any, Monthly:any, ContainerNo:any, ContainerLocation:any, Trucker:any, ContainerDateS:any, ContainerDateE:any, AccountNo:any, BillToCode:any, ShipToCode:any, SourceNoS:any, SourceNoE:any, ContactType:any, ActionFlag:any, ShippingWay:any): Observable<any> {
    let url = `${environment.apiURL}PrintLCDocuments/ERP_PUBLIC_DATA_Query?GoodsNo=${GoodsNo}&ID=${ID}&EmpNo=${EmpNo}&InvoiceNo=${InvoiceNo}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&PackingNo=${PackingNo}&LCNo=${LCNo}&Monthly=${Monthly}&ContainerNo=${ContainerNo}&ContainerLocation=${ContainerLocation}&Trucker=${Trucker}&ContainerDateS=${ContainerDateS}&ContainerDateE=${ContainerDateE}&AccountNo=${AccountNo}&BillToCode=${BillToCode}&ShipToCode=${ShipToCode}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&ContactType=${ContactType}&ActionFlag=${ActionFlag}&ShippingWay=${ShippingWay}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Packing_Query(PackingNo:any, GoodsNo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintLCDocuments/EX_Goods_Packing_Query?PackingNo=${PackingNo}&GoodsNo=${GoodsNo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintLCDocuments/EX_Goods_Invoice_Query?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Line_Query(InvoiceNo:any, InvoiceLineNo:any, ID:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintLCDocuments/EX_Goods_Invoice_Query?InvoiceNo=${InvoiceNo}&InvoiceLineNo=${InvoiceLineNo}&ID=${ID}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Notice_Query(GoodsNo:any, ShippingWay:any, ApplicationType:any, ApplicationNo:any, IsFEMS:any, InvoiceNo:any, SourceNo:any, GoodsDateFrom:any, GoodsDateTo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintLCDocuments/EX_Goods_Notice_Query?GoodsNo=${GoodsNo}&ShippingWay=${ShippingWay}&ApplicationType=${ApplicationType}&ApplicationNo=${ApplicationNo}&IsFEMS=${IsFEMS}&InvoiceNo=${InvoiceNo}&SourceNo=${SourceNo}&GoodsDateFrom=${GoodsDateFrom}&GoodsDateTo=${GoodsDateTo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

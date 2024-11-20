import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintInvoiceService {

  constructor(private http: HttpClient) { }
  EX_ContactCorp_Query(): Observable<any> {
    let url = `${environment.apiURL}PrintInvoice/EX_ContactCorp_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_CrystalReport_Query(GoodsNo:any, ID:any, EmpNo:any, InvoiceNo:any, InvoiceNoS:any, InvoiceNoE:any, PackingNo:any, LCNo:any, Monthly:any, ContainerNo:any, ContainerLocation:any, Trucker:any, ContainerDateS:any, ContainerDateE:any, AccountNo:any, BillToCode:any, ShipToCode:any, SourceNoS:any, SourceNoE:any, ContactType:any, ActionFlag:any, ShippingWay:any): Observable<any> {
    let url = `${environment.apiURL}PrintInvoice/ERP_PUBLIC_DATA_Query?GoodsNo=${GoodsNo}&ID=${ID}&EmpNo=${EmpNo}&InvoiceNo=${InvoiceNo}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&PackingNo=${PackingNo}&LCNo=${LCNo}&Monthly=${Monthly}&ContainerNo=${ContainerNo}&ContainerLocation=${ContainerLocation}&Trucker=${Trucker}&ContainerDateS=${ContainerDateS}&ContainerDateE=${ContainerDateE}&AccountNo=${AccountNo}&BillToCode=${BillToCode}&ShipToCode=${ShipToCode}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&ContactType=${ContactType}&ActionFlag=${ActionFlag}&ShippingWay=${ShippingWay}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintInvoice/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}PrintInvoice/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

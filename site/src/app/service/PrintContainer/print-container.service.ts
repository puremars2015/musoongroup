import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintContainerService {

  constructor(private http: HttpClient) { }
  EX_ContactCorp_Query(): Observable<any> {
    let url = `${environment.apiURL}PrintContainer/EX_ContactCorp_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_CrystalReport_Query(GoodsNo:any, ID:any, EmpNo:any, InvoiceNo:any, InvoiceNoS:any, InvoiceNoE:any, PackingNo:any, LCNo:any, Monthly:any, ContainerNo:any, ContainerLocation:any, Trucker:any, ContainerDateS:any, ContainerDateE:any, AccountNo:any, BillToCode:any, ShipToCode:any, SourceNoS:any, SourceNoE:any, ContactType:any, ActionFlag:any, ShippingWay:any): Observable<any> {
    let url = `${environment.apiURL}PrintContainer/EX_CrystalReport_Query?GoodsNo=${GoodsNo}&ID=${ID}&EmpNo=${EmpNo}&InvoiceNo=${InvoiceNo}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&PackingNo=${PackingNo}&LCNo=${LCNo}&Monthly=${Monthly}&ContainerNo=${ContainerNo}&ContainerLocation=${ContainerLocation}&Trucker=${Trucker}&ContainerDateS=${ContainerDateS}&ContainerDateE=${ContainerDateE}&AccountNo=${AccountNo}&BillToCode=${BillToCode}&ShipToCode=${ShipToCode}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&ContactType=${ContactType}&ActionFlag=${ActionFlag}&ShippingWay=${ShippingWay}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintContainer/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Trucker_Query(): Observable<any> {
    let url = `${environment.apiURL}PrintContainer/EX_Trucker_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
}

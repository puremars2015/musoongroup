import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabPackingListService {

  constructor(private http: HttpClient) { }

  EX_Goods_Packing_Query(PackingNo:any, GoodsNo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Packing_Query?PackingNo=${PackingNo}&GoodsNo=${GoodsNo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Invoice_Query?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Dimension_Query(PackingBy:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Dimension_Query?PackingBy=${PackingBy}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Packing_Query_PackingNo(PackingNo:any, GoodsNo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Packing_Query_PackingNo?PackingNo=${PackingNo}&GoodsNo=${GoodsNo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Packing_Line_Query(PackingNo:any, PackingLineNo:any, ID:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Packing_Line_Query?PackingNo=${PackingNo}&PackingLineNo=${PackingLineNo}&ID=${ID}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Query_PackingNo(GoodsNo:any, InvoiceNo:any, Org:any, SourceType:any, SourceNo:any, BillToName:any, ShipToName:any, PaymentTerm:any, ShippingWay:any, InvoiceDateF:any, InvoiceDateT:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Invoice_Query_PackingNo?GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&Org=${Org}&SourceType=${SourceType}&SourceNo=${SourceNo}&BillToName=${BillToName}&ShipToName=${ShipToName}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&InvoiceDateF=${InvoiceDateF}&InvoiceDateT=${InvoiceDateT}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Packing_Line_Save(PackingNo:any, PackingLineNo:any, PackingByDesc:any, PackingFrom:any, PackingTo:any, Code:any, ItemNo:any, ItemDescription:any, Unit:any, Quantity:any, CartonQuantity:any, Length:any, Width:any, Height:any, DIMUnit:any, NetWeight:any, GrossWeight:any, WeightUnit:any, ExtraDesc1:any, ExtraDesc2:any, ID:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Packing_Line_Save?PackingNo=${PackingNo}&PackingLineNo=${PackingLineNo}&PackingByDesc=${PackingByDesc}&PackingFrom=${PackingFrom}&PackingTo=${PackingTo}&Code=${Code}&ItemNo=${ItemNo}&ItemDescription=${ItemDescription}&Unit=${Unit}&Quantity=${Quantity}&CartonQuantity=${CartonQuantity}&Length=${Length}&Width=${Width}&Height=${Height}&DIMUnit=${DIMUnit}&NetWeight=${NetWeight}&GrossWeight=${GrossWeight}&WeightUnit=${WeightUnit}&ExtraDesc1=${ExtraDesc1}&ExtraDesc2=${ExtraDesc2}&ID=${ID}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Dimension_Query2(PackingBy:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Dimension_Query2?PackingBy=${PackingBy}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_GIB_PART_Query(ORGANIZATION_CODE:any, GIB_ITEM_NO:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/ERP_GIB_PART_Query?ORGANIZATION_CODE=${ORGANIZATION_CODE}&GIB_ITEM_NO=${GIB_ITEM_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Packing_Line_Query_Detail(PackingNo:any, PackingLineNo:any, ID:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Packing_Line_Query_Detail?PackingNo=${PackingNo}&PackingLineNo=${PackingLineNo}&ID=${ID}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Packing_Save(PackingNo:any, GoodsNo:any, InvoiceNo:any, CodeRate:any, ShippingMark:any, PackingRemark:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabPackingList/EX_Goods_Packing_Save?PackingNo=${PackingNo}&GoodsNo=${GoodsNo}&InvoiceNo=${InvoiceNo}&CodeRate=${CodeRate}&ShippingMark=${ShippingMark}&PackingRemark=${PackingRemark}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

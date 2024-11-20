import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsQueryEXService {
  GoodNo:string ='';
  constructor(private http: HttpClient) { }
  setGoodsNo(value:string) {
    this.GoodNo = value;
    console.warn(this.GoodNo );
  }
  getGoodsNo(): string {
    console.warn(this.GoodNo );
    return this.GoodNo;
  }
  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQueryEX/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQueryEX/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Notice_Query(GoodsNo:any, ShippingWay:any, ApplicationType:any, ApplicationNo:any, IsFEMS:any, InvoiceNo:any, GoodsDateFrom:any, GoodsDateTo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQueryEX/EX_Goods_Notice_Query?GoodsNo=${GoodsNo}&ShippingWay=${ShippingWay}&ApplicationType=${ApplicationType}&ApplicationNo=${ApplicationNo}&IsFEMS=${IsFEMS}&InvoiceNo=${InvoiceNo}&GoodsDateFrom=${GoodsDateFrom}&GoodsDateTo=${GoodsDateTo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  ERP_PUBLIC_DATA_Query_V2(parameter:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQueryEX/ERP_PUBLIC_DATA_Query_V2`;
    let r = this.http.post<any>(url,parameter);
    return r;
  } 
}

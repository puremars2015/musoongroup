import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsCompareService {
  constructor(private http: HttpClient) { }

  Test(): Observable<any> {
    const data = [{"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":1,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"50.D92A4.006","Goods_ItemDescription":"BTF/ROLLER/EWV/TC/V:1435MM/T:1475MM/ASPF/YS43-44 _BOM NO.1050147","Goods_Unit":"MTR","Goods_Quantity":9188.1,"Goods_StatisticsMode":2,"Goods_ExchangeRate":32.59,"Goods_IM_LineNo":11},{"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":2,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"50.D92A4.226","Goods_ItemDescription":"TPF/ROLLER/EWV/TC/V:1435MM/T:1475MM/ASPF/YS43-44 _BOM NO.1050147","Goods_Unit":"MTR","Goods_Quantity":9368.3,"Goods_StatisticsMode":"02","Goods_ExchangeRate":32.59,"Goods_IM_LineNo":11},{"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":3,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"50.KADA3.573","Goods_ItemDescription":"ROLL/IPS TV/SAG2/TH/1330MM/ASPF/ Z-TAC/T42-43_BOM NO.1050147","Goods_Unit":"MTR","Goods_Quantity":418,"Goods_StatisticsMode":"02","Goods_ExchangeRate":32.59,"Goods_IM_LineNo":11},{"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":4,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"XS.0203B.003","Goods_ItemDescription":"SKID/1490/1690MML*790MMW*1000MMH/五金類/富士長鐵 (N/C)(非保稅) (MADE IN JAPAN)","Goods_Unit":"PCE","Goods_Quantity":16,"Goods_StatisticsMode":"9P","Goods_ExchangeRate":32.59,"Goods_IM_AppNo":"BC  05341M0350","Goods_IM_LineNo":13},{"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":5,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"XS.0203B.003","Goods_ItemDescription":"SKID/1490/1690MML*790MMW*1000MMH/五金類/富士長鐵 (N/C)(非保稅) (MADE IN JAPAN)","Goods_Unit":"PCE","Goods_Quantity":11,"Goods_StatisticsMode":"9P","Goods_ExchangeRate":32.59,"Goods_IM_AppNo":"BD  05341M0402","Goods_IM_LineNo":8},{"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":6,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"XS.0203A.005","Goods_ItemDescription":"CORE/FRP/13/152.4MM*330.2MM*1620MM","Goods_Unit":"PCE","Goods_Quantity":27,"Goods_StatisticsMode":"9E","Goods_ExchangeRate":32.59,"Goods_IM_LineNo":11}];
    // const data = {name: "test", age: "20"}
    // const data = {"Goods_GoodsNo":"YG3UF150000","Goods_GoodsLineNo":1,"Goods_ApplicationNo":"BD  05341E0950","Goods_GoodsDate":42524,"Goods_ItemNo":"50.D92A4.006","Goods_ItemDescription":"BTF/ROLLER/EWV/TC/V:1435MM/T:1475MM/ASPF/YS43-44 _BOM NO.1050147","Goods_Unit":"MTR","Goods_Quantity":9188.1,"Goods_StatisticsMode":2,"Goods_ExchangeRate":32.59,"Goods_IM_LineNo":11};
    // const data = { args: { ReqArray: ReqArray } } 

    
    let url = `${environment.apiURL}GoodsCompare/Demo`;
    let r = this.http.post<any>(url,data);
    return r;
  }


  EX_Goods_Notice_Query(GoodsNo:any, ShippingWay:any, ApplicationType:any, ApplicationNo:any, IsFEMS:any, InvoiceNo:any, SourceNo:any, GoodsDateFrom:any, GoodsDateTo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_Goods_Notice_Query?GoodsNo=${GoodsNo}&ShippingWay=${ShippingWay}&ApplicationType=${ApplicationType}&ApplicationNo=${ApplicationNo}&IsFEMS=${IsFEMS}&InvoiceNo=${InvoiceNo}&SourceNo=${SourceNo}&GoodsDateFrom=${GoodsDateFrom}&GoodsDateTo=${GoodsDateTo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_GoodsCompare_Query(GoodsNo:any, GoodsLineNo:any, IM_AppNo:any, IM_LineNo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_GoodsCompare_Query?GoodsNo=${GoodsNo}&GoodsLineNo=${GoodsLineNo}&IM_AppNo=${IM_AppNo}&IM_LineNo=${IM_LineNo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_GoodsCompare_Save(GoodsNo:any, GoodsLineNo:any, ApplicationNo:any, GoodsDate:any, ItemNo:any, ItemDescription:any, BOMNo:any, Unit:any, Quantity:any, StatisticsMode:any, ExchangeRate:any, IM_AppNo:any, IM_LineNo:any, ImportType:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_GoodsCompare_Save?GoodsNo=${GoodsNo}&GoodsLineNo=${GoodsLineNo}&ApplicationNo=${ApplicationNo}&GoodsDate=${GoodsDate}&ItemNo=${ItemNo}&ItemDescription=${ItemDescription}&BOMNo=${BOMNo}&Unit=${Unit}&Quantity=${Quantity}&StatisticsMode=${StatisticsMode}&ExchangeRate=${ExchangeRate}&IM_AppNo=${IM_AppNo}&IM_LineNo=${IM_LineNo}&ImportType=${ImportType}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_GoodsCompare_SaveV2(reqArray:any): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_GoodsCompare_SaveV2`;
    let r = this.http.post<any>(url,reqArray);
    return r;
  }
  EX_Goods_Notice_Save(parameter:any): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_Goods_Notice_Save`;
    let r = this.http.post<any>(url,parameter);
    return r;
  } 
  EX_GoodsCompare_Marge(): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_GoodsCompare_Marge`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_StatisticsMode9P_Query(IM_AppNo:any, IM_LineNo:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsCompare/EX_StatisticsMode9P_Query?IM_AppNo=${IM_AppNo}&IM_LineNo=${IM_LineNo}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

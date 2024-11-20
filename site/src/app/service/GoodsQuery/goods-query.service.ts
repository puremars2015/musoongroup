import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsQueryService {
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
  GoodsQuery(GOOD_NO:any,APP_NO:any,Status:any,Exporter:any,PONo:any,UploadFEMS:any,ChkFileLess_APP:any,ChkFileLess_Industry:any,Site:any,ARRIVE_DATE_From:any,ARRIVE_DATE_To:any,PART_NO:any,IN_DATE_From:any,IN_DATE_To:any, ChkFileLess_APPDetail:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQuery/Goodsquery?GOOD_NO=${GOOD_NO}&APP_NO=${APP_NO}&Status=${Status}&Exporter=${Exporter}&PONo=${PONo}&UploadFEMS=${UploadFEMS}&ChkFileLess_APP=${ChkFileLess_APP}&ChkFileLess_Industry=${ChkFileLess_Industry}&Site=${Site}&ARRIVE_DATE_From=${ARRIVE_DATE_From}&ARRIVE_DATE_To=${ARRIVE_DATE_To}&PART_NO=${PART_NO}&IN_DATE_From=${IN_DATE_From}&IN_DATE_To=${IN_DATE_To}&ChkFileLess_APPDetail=${ChkFileLess_APPDetail}`;
    let r = this.http.get<any>(url);
    return r;
  }
  GoodExportGood(Good_NO_Join:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQuery/Goodexportgood?Good_NO_Join=${Good_NO_Join}`;
    let r = this.http.get<any>(url);
    return r;
  }
  GoodExportAppDetail(Good_NO_Join:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQuery/Goodexportappdetail?Good_NO_Join=${Good_NO_Join}`;
    let r = this.http.get<any>(url);
    return r;
  }
  GoodExportContainer(Good_NO_Join:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQuery/Goodexportcontainer?Good_NO_Join=${Good_NO_Join}`;
    let r = this.http.get<any>(url);
    return r;
  }
  GoodExportFile(Good_NO_Join:any): Observable<any> {
    let url = `${environment.apiURL}GoodsQuery/Goodexportfile?Good_NO_Join=${Good_NO_Join}`;
    let r = this.http.get<any>(url);
    return r;
  }
  
}

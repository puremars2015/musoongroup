import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddGoodsKindService {

  constructor(private http: HttpClient) { }

  Sample(): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKind/GetGoodKinds`;
    let r = this.http.get<any>(url);
    return r;
  }

  GoodNo(goodsKind: any, addCount: any,empNo:any): Observable<any> {
    let url = `${environment.apiURL}AddGoodsKind/GetGoodKindsSP?goodsKind=${goodsKind}&addCount=${addCount}&empNo=${empNo}`;
    let r = this.http.get<any>(url);
    return r;
  }

  // Hello(): Observable<any> {
  //   let url = `${environment.apiURL}AddGoodsKind/GetGoodKinds`;
  //   let r = this.http.get<any>(url);
  //   return r;
  // }
}

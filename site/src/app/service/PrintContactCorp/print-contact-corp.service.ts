import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintContactCorpService {

  constructor(private http: HttpClient) { }
  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}PrintContactCorp/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_ContactCorp_Query(): Observable<any> {
    let url = `${environment.apiURL}PrintContactCorp/EX_ContactCorp_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_ContactCorp_Save(ID:any, Code:any, Org:any, TaxId:any, ChineseCorpName:any, ChineseCorpAddress:any, EnglishCorpName:any, EnglishCorpAddress:any, TelNo:any, FaxNo:any, InvoiceSealFile:any, CorpSealFile:any, FinanceSealFile:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}PrintContactCorp/EX_ContactCorp_Save?ID=${ID}&Code=${Code}&Org=${Org}&TaxId=${TaxId}&ChineseCorpName=${ChineseCorpName}&ChineseCorpAddress=${ChineseCorpAddress}&EnglishCorpName=${EnglishCorpName}&EnglishCorpAddress=${EnglishCorpAddress}&TelNo=${TelNo}&FaxNo=${FaxNo}&InvoiceSealFile=${InvoiceSealFile}&CorpSealFile=${CorpSealFile}&FinanceSealFile=${FinanceSealFile}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

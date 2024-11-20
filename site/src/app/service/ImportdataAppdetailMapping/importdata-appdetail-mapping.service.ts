import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportdataAppdetailMappingService {

  constructor(private http: HttpClient) { }

  IM_ImportData_APP_Detail_ForMapping(GOOD_NO:any, APP_NO:any, ITEMNO:any, PART_NO:any, DESCRIPTION:any, QTY:any, WEIGHT:any, UNIT:any, TARIFF:any, TAX_RULE:any, TaxedAmt:any,IsMappingInsert:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}ImportdataAppdetailMapping/IM_ImportData_APP_Detail_ForMapping?GOOD_NO=${GOOD_NO}&APP_NO=${APP_NO}&ITEMNO=${ITEMNO}&PART_NO=${PART_NO}&DESCRIPTION=${DESCRIPTION}&QTY=${QTY}&WEIGHT=${WEIGHT}&UNIT=${UNIT}&TARIFF=${TARIFF}&TAX_RULE=${TAX_RULE}&TaxedAmt=${TaxedAmt}&IsMappingInsert=${IsMappingInsert}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
  
}

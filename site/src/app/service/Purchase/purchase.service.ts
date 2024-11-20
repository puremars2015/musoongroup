import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  GetPO(): Observable<any> {
    let url = `${environment.apiURL}Purchase/GetPO`;
    let r = this.http.get<any>(url);
    return r;
  }

  GetPOBySupplier(supplier:string): Observable<any> {
    let url = `${environment.apiURL}Purchase/GetPOBySupplier?supplier=${supplier}`;
    let r = this.http.get<any>(url);
    return r;
  }

  GetImportMaterial(): Observable<any> {
    let url = `${environment.apiURL}Purchase/GetImportMaterial`;
    let r = this.http.get<any>(url);
    return r;
  }

  GetImportMaterialVN(): Observable<any> {
    let url = `${environment.apiURL}Purchase/GetImportMaterialVN`;
    let r = this.http.get<any>(url);
    return r;
  }

  GetMaterialDetail(selectedPo: string, selectedElno: string): Observable<any> {
    let url = `${environment.apiURL}Purchase/GetImportMaterial`;
    let r = this.http.get<any>(url, { params: { selectedPo: selectedPo, selectedElno: selectedElno } });
    return r;
  }
}

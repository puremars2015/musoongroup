import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembraneService {

  constructor(private http: HttpClient) { }

  Read(site: string): Observable<any> {
    let url = `${environment.apiURL}Spunlace/GetWorkOrderList?site=${site}`;
    let r = this.http.get<any>(url);
    return r;
  }

  ReadDetail(site: string, wo: string): Observable<any> {
    let url = `${environment.apiURL}Spunlace/GetWorkOrderDetail?site=${site}&wo=${wo}`;
    let r = this.http.get<any>(url);
    return r;
  }

  Update(site: string, wo:string, data: any): Observable<any> {
    let url = `${environment.apiURL}Spunlace/Update?site=${site}&wo=${wo}`;
    let r = this.http.put<any>(url, data);
    return r;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {


  constructor(private http: HttpClient) { }

  /**
   * ${environment.apiURL}musoon/meet_us
   * @param org 
   * @param api 
   * @param requestBody 
   * @returns 
   */
  Create(org:string, api: string, requestBody: any): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}`;
    let r = this.http.post<any>(url, requestBody);
    return r;
  }

  UploadFile(org:string, api: string, file: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let url = `${environment.apiURL}${org}/${api}`;
    let r = this.http.post<any>(url, formData);
    return r;
  }

  Read(org:string, api: string): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}`;
    let r = this.http.get<any>(url);
    return r;
  }

  ReadById(org:string, api: string, id: number): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}/${id}`;
    let r = this.http.get<any>(url);
    return r;
  }

  ReadLike(org:string, api: string, queryParams: any): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}`;
    let r = this.http.post<any>(url, queryParams);
    return r;
  }

  ReadList(org:string, api: string, dateList: string[]): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}/search_week`;
    let r = this.http.post<any>(url, dateList);
    return r;
  }

  Update(org:string, api: string, data: any): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}`;
    let r = this.http.put<any>(url,data);
    return r;
  }

  UpdateListData(org:string, api: string, dataList: any[]): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}/update_week`;
    let r = this.http.put<any>(url,dataList);
    return r;
  }

  Remove(org:string, api: string, id: number): Observable<any> {
    let url = `${environment.apiURL}${org}/${api}/${id}`;
    let r = this.http.delete<any>(url);
    return r;
  }

  Login(username: string, password: string): Observable<any> {
    let url = `${environment.apiURL}login`;
    let r = this.http.post<any>(url, {username: username, password: password});
    return r;
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchStatusService {

  constructor(private http: HttpClient) { }

  FetchStatus(): Observable<any> {
    let url = `${environment.apiURL}SysMonitor/GetBatchStatus`;
    let r = this.http.get<any>(url);
    return r;
  }
}

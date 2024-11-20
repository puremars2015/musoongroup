import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackingRecord } from 'src/app/model/TrackingRecord';

@Injectable({
  providedIn: 'root'
})
export class CpTrackingService {

  constructor(
    private http: HttpClient //將HttpClient注入
  ) { }

  getPosts(id: string): Observable<TrackingRecord> {
    return this.http.post<TrackingRecord>('http://localhost:5013/api/pe-track/GetCPIO', {
      "id":id
    });
  }
}

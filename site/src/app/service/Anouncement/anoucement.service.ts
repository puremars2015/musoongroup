import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnoucementService {


  get MES() {
    return 'MES';
  }

  get IMPORT_EXPORT() {
    return 'IMPORT_EXPORT';
  }

  constructor(private http: HttpClient) { }

  getAnoucement(system_name: string) {
    let url = `${environment.apiURL}Anouncement/GetAnouncement?system_name=${system_name}`;
    let r = this.http.get<any>(url);
    return r;
  }

}

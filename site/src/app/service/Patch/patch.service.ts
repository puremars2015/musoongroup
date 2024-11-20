import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatchService {

  constructor(private http: HttpClient) { }

  GetPatch(): Observable<any> {
    let url = `${environment.apiURL}Patch/GetPatchNo`;
    let r = this.http.get<any>(url);
    return r;
  }

}

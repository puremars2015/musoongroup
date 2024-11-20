import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonShipmentToService {

  constructor(private http: HttpClient) { }

  FEMS_LOV_DATA_Query(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}CommonShipmentTo/FEMS_LOV_DATA_Query?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Shipment_Query(ShipmentType:any): Observable<any> {
    let url = `${environment.apiURL}CommonShipmentTo/EX_Shipment_Query?ShipmentType=${ShipmentType}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Shipment_Save(ID:any, ShipmentType:any, ShipmentDesc:any, ShipFrom:any, ShipToPort:any, ShipToCountry:any, District:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}CommonShipmentTo/EX_Shipment_Save?ID=${ID}&ShipmentType=${ShipmentType}&ShipmentDesc=${ShipmentDesc}&ShipFrom=${ShipFrom}&ShipToPort=${ShipToPort}&ShipToCountry=${ShipToCountry}&District=${District}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Shipment_Delete(ID:any, ShipmentType:any, ShipmentDesc:any, ShipFrom:any, ShipToPort:any, ShipToCountry:any, District:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}CommonShipmentTo/EX_Shipment_Delete?ID=${ID}&ShipmentType=${ShipmentType}&ShipmentDesc=${ShipmentDesc}&ShipFrom=${ShipFrom}&ShipToPort=${ShipToPort}&ShipToCountry=${ShipToCountry}&District=${District}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

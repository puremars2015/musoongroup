import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialScheduleContainerinfoAddService {

  constructor(private http: HttpClient) { }
  IM_Config_Query(ItemType:any, ItemValue:any, ItemValue2:any, ItemDesc:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}MaterialScheduleContainerinfoAdd/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_Query(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}MaterialScheduleContainerinfoAdd/FEMS_LOV_DATA_Query?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Container_POShipment_BatchSave(ERP_PO_MaterialSchedule_ID_Join:any, CONTAINER_NO:any, SIZE:any, IN_DATE:any, IN_LOCATION:any, EMP_NO:any): Observable<any> {
    let url = `${environment.apiURL}MaterialScheduleContainerinfoAdd/IM_Container_POShipment_BatchSave?ERP_PO_MaterialSchedule_ID_Join=${ERP_PO_MaterialSchedule_ID_Join}&CONTAINER_NO=${CONTAINER_NO}&SIZE=${SIZE}&IN_DATE=${IN_DATE}&IN_LOCATION=${IN_LOCATION}&EMP_NO=${EMP_NO}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

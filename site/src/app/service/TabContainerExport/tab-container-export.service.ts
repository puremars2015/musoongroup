import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabContainerExportService {

  constructor(private http: HttpClient) { }

  EX_Goods_Container_Query(ContainerNo:any, GoodsNo:any, ContainerLocation:any, ContainerDate:any, ContainerSize:any, ContainerCod:any, InDate:any, OutDate:any, ID:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabContainerExport/EX_Goods_Container_Query?ContainerNo=${ContainerNo}&GoodsNo=${GoodsNo}&ContainerLocation=${ContainerLocation}&ContainerDate=${ContainerDate}&ContainerSize=${ContainerSize}&ContainerCod=${ContainerCod}&InDate=${InDate}&OutDate=${OutDate}&ID=${ID}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  SP_EX_Trucker_Query(): Observable<any> {
    let url = `${environment.apiURL}TabContainerExport/SP_EX_Trucker_Query`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabContainerExport/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_Query(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}TabContainerExport/FEMS_LOV_DATA_Query?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Container_Save(ContainerNo:any, GoodsNo:any, Trucker:any, ContainerLocation:any, Customer:any, SO:any, VSLName:any, Carrier:any, DestinationPort:any, CloseDate:any, ContainerPlaceIn:any, ContainerPlaceOut:any, ID:any, ContainerDate:any, ContainerSize:any, CFSCount:any, InToOut:any, InDate:any, ContainerCode:any, ShippingMark:any, OutDate:any, Modify_Emp:any, ActionFlag:any, ReeferContainer:any): Observable<any> {
    let url = `${environment.apiURL}TabContainerExport/EX_Goods_Container_Save?ContainerNo=${ContainerNo}&GoodsNo=${GoodsNo}&Trucker=${Trucker}&ContainerLocation=${ContainerLocation}&Customer=${Customer}&SO=${SO}&VSLName=${VSLName}&Carrier=${Carrier}&DestinationPort=${DestinationPort}&CloseDate=${CloseDate}&ContainerPlaceIn=${ContainerPlaceIn}&ContainerPlaceOut=${ContainerPlaceOut}&ID=${ID}&ContainerDate=${ContainerDate}&ContainerSize=${ContainerSize}&CFSCount=${CFSCount}&InToOut=${InToOut}&InDate=${InDate}&ContainerCode=${ContainerCode}&ShippingMark=${ShippingMark}&OutDate=${OutDate}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}&ReeferContainer=${ReeferContainer}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Container_Query_ADD(ContainerNo:any, GoodsNo:any, ContainerLocation:any, ContainerDate:any, ContainerSize:any, ContainerCod:any, InDate:any, OutDate:any, ID:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}TabContainerExport/EX_Goods_Container_Query_ADD?ContainerNo=${ContainerNo}&GoodsNo=${GoodsNo}&ContainerLocation=${ContainerLocation}&ContainerDate=${ContainerDate}&ContainerSize=${ContainerSize}&ContainerCod=${ContainerCod}&InDate=${InDate}&OutDate=${OutDate}&ID=${ID}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

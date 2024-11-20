import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpunlaceService {

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

  GetJumboLotNumber(site: string, own_date: Date): Observable<any> {
    let url = `${environment.apiURL}Spunlace/GetJumboLotNumber?site=${site}&own_date=${own_date}`;
    let r = this.http.get<any>(url);
    return r;
  }
  
  GetWorkOrder(): Observable<any> {
    let url = `${environment.apex}ords/wpo_mts/WIP_WORKORDER/Query`;
    let r = this.http.get<any>(url);
    return r;
  }

  async GetWorkOrderGroupByOrder(): Promise<any[]> {
    const data = await firstValueFrom(this.GetWorkOrder());
    console.log(data);
    const result = Object.values(data.items.reduce((acc:any, cur: any) => {
      // 創建一個唯一鍵來識別相同的name和gender組合
      const key = `${cur.organization_code}_${cur.wip_entity_name}`;
      if (!acc[key]) {
        // 如果這是第一次遇到該組合，創建一個新的物件
        acc[key] = {
          organization_code: cur.organization_code,
          organization_id: cur.organization_id,
          wip_entity_name: cur.wip_entity_name,
          wip_entity_id: cur.wip_entity_id,
          status: cur.status,
          job_type: cur.job_type,
          assembly_item: cur.assembly_item,
          description: cur.description,
          class_code: cur.class_code,
          schedule_start_date: cur.schedule_start_date,
          schedule_end_date: cur.schedule_end_date,
          start_quantity: cur.start_quantity,
          net_quantity: cur.net_quantity,
          primary_uom_code: cur.primary_uom_code,
          component:[
            {
              componenet_item: cur.componenet_item,
              mtl_desc: cur.mtl_desc,
              required_quantity: cur.required_quantity
            }
          ]
        };
      } else {
        // 如果已經有了該組合，將年齡添加到age數組中
        acc[key].component.push({
          componenet_item: cur.componenet_item,
          mtl_desc: cur.mtl_desc,
          required_quantity: cur.required_quantity
        });
      }
      return acc;
    }, {})); // 使用一個空物件作為初始累加器值
    console.log(result);
    return result;
  }

  async GetSpunlaceWorkOrder(site: string): Promise<any> {
    let data = await this.GetWorkOrderGroupByOrder();
    data = data.filter(x=>x.organization_code == site);
    return data;
  }
}

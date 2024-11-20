import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsMainEXTableService {

  constructor(private http: HttpClient) { }

  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Shipment_Query(ShipmentType:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/EX_Shipment_Query?ShipmentType=${ShipmentType}`;
    let r = this.http.get<any>(url);
    return r;
  }
  FEMS_LOV_DATA_Query(LOV_TYPE:any, LOV_VALUE:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/FEMS_LOV_DATA_Query?LOV_TYPE=${LOV_TYPE}&LOV_VALUE=${LOV_VALUE}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Notice_Save(GoodsNo:any, ProductType:any, ShippingWay:any, ApplicationNo:any, ShipmentFrom:any, ShipmentTo:any, GoodsDate:any, Broker:any, SupervisionNo:any, ETDDate:any, ETADate:any, ATADate:any, TradeTerm:any, FreightCharge:any, BLType:any, Brand:any, Forwarder:any, WarehouseDate:any, WarehousePlace:any, NoticeRemark:any, CostCenter:any, ApplicationPledge:any, MAWBNo:any, HAWBNo:any, GW:any, VW:any, FlightNo:any, DHLNo:any, BLNo:any, ReleaseDate:any, OneCustoms:any, IsFEMS:any, Modify_Emp:any, Certificate:any, HSCode:any, StatisticsMode:any, StatisticsModeDesc:any, ActionFlag:any, DisChargePort:any, BUSINESS:any, IsDangerousGoods:any, BrokerId:any, ForwarderId:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/EX_Goods_Notice_Save?GoodsNo=${GoodsNo}&ProductType=${ProductType}&ShippingWay=${ShippingWay}&ApplicationNo=${ApplicationNo}&ShipmentFrom=${ShipmentFrom}&ShipmentTo=${ShipmentTo}&GoodsDate=${GoodsDate}&Broker=${Broker}&SupervisionNo=${SupervisionNo}&ETDDate=${ETDDate}&ETADate=${ETADate}&ATADate=${ATADate}&TradeTerm=${TradeTerm}&FreightCharge=${FreightCharge}&BLType=${BLType}&Brand=${Brand}&Forwarder=${Forwarder}&WarehouseDate=${WarehouseDate}&WarehousePlace=${WarehousePlace}&NoticeRemark=${NoticeRemark}&CostCenter=${CostCenter}&ApplicationPledge=${ApplicationPledge}&MAWBNo=${MAWBNo}&HAWBNo=${HAWBNo}&GW=${GW}&VW=${VW}&FlightNo=${FlightNo}&DHLNo=${DHLNo}&BLNo=${BLNo}&ReleaseDate=${ReleaseDate}&OneCustoms=${OneCustoms}&IsFEMS=${IsFEMS}&Modify_Emp=${Modify_Emp}&Certificate=${Certificate}&HSCode=${HSCode}&StatisticsMode=${StatisticsMode}&StatisticsModeDesc=${StatisticsModeDesc}&ActionFlag=${ActionFlag}&DisChargePort=${DisChargePort}&BUSINESS=${BUSINESS}&IsDangerousGoods=${IsDangerousGoods}&BrokerId=${BrokerId}&ForwarderId=${ForwarderId}`;
    let r = this.http.get<any>(url);
    return r;
  }
  IM_Config_Query(ItemType:any, ItemValue:any, ItemValue2:any, ItemDesc:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/IM_Config_Query?ItemType=${ItemType}&ItemValue=${ItemValue}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Goods_Invoice_Save(InvoiceNo:any, GoodsNo:any, InvoiceDate:any, Org:any, AccountNo:any, TradeTerm:any, PaymentTerm:any, ShippingWay:any, BillToCode:any, BillToName:any, BillToAddress:any, BillToTelNo:any, BillToCountry:any, ShipToCode:any, ShipToName:any, ShipToAddress:any, ShipToTelNo:any, ShipToCountry:any, Currency:any, ExchangeRate:any, ShippingMark:any, InvoiceRemark:any, Modify_Emp:any, Print_Emp:any, ItemType:any, ItemDesc:any, ItemAmount:any, SourceNoS:any, SourceNoE:any, InvoiceNoS:any, InvoiceNoE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}GoodsMainEXTable/EX_Goods_Invoice_Save?InvoiceNo=${InvoiceNo}&GoodsNo=${GoodsNo}&InvoiceDate=${InvoiceDate}&Org=${Org}&AccountNo=${AccountNo}&TradeTerm=${TradeTerm}&PaymentTerm=${PaymentTerm}&ShippingWay=${ShippingWay}&BillToCode=${BillToCode}
    &BillToName=${BillToName}&BillToAddress=${BillToAddress}&BillToTelNo=${BillToTelNo}&BillToCountry=${BillToCountry}&ShipToCode=${ShipToCode}&ShipToName=${ShipToName}&ShipToAddress=${ShipToAddress}&ShipToTelNo=${ShipToTelNo}&ShipToCountry=${ShipToCountry}&Currency=${Currency}&ExchangeRate=${ExchangeRate}&ShippingMark=${ShippingMark}&InvoiceRemark=${InvoiceRemark}&Modify_Emp=${Modify_Emp}&Print_Emp=${Print_Emp}&ItemType=${ItemType}&ItemDesc=${ItemDesc}&ItemAmount=${ItemAmount}&SourceNoS=${SourceNoS}&SourceNoE=${SourceNoE}&InvoiceNoS=${InvoiceNoS}&InvoiceNoE=${InvoiceNoE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LCDocumentMaintainService {

  constructor(private http: HttpClient) { }

  ERP_PUBLIC_DATA_Query(TYPE_CODE:any, VALUE_ID:any, VALUE:any, VALUE_DESC:any, ENABLED_FLAG:any, ATTRIBUTE1:any, ATTRIBUTE2:any, ATTRIBUTE3:any, ATTRIBUTE4:any, ATTRIBUTE5:any, IsActive:any): Observable<any> {
    let url = `${environment.apiURL}LCDocumentMaintain/ERP_PUBLIC_DATA_Query?TYPE_CODE=${TYPE_CODE}&VALUE_ID=${VALUE_ID}&VALUE=${VALUE}&VALUE_DESC=${VALUE_DESC}&ENABLED_FLAG=${ENABLED_FLAG}&ATTRIBUTE1=${ATTRIBUTE1}&ATTRIBUTE2=${ATTRIBUTE2}&ATTRIBUTE3=${ATTRIBUTE3}&ATTRIBUTE4=${ATTRIBUTE4}&ATTRIBUTE5=${ATTRIBUTE5}&IsActive=${IsActive}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_Config_Query(ItemType:any, ItemTypeName:any, ItemValue1:any, ItemValue2:any, ItemDesc:any, IsActive:any, IsMaintain:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}LCDocumentMaintain/EX_Config_Query?ItemType=${ItemType}&ItemTypeName=${ItemTypeName}&ItemValue1=${ItemValue1}&ItemValue2=${ItemValue2}&ItemDesc=${ItemDesc}&IsActive=${IsActive}&IsMaintain=${IsMaintain}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_LCDocument_Save(LCNo:any, IssueDate:any, ExpiryDate:any, ExpiryCountry:any, PresentationPeriod:any, AdvisingBank:any, Currency:any, PartialShipmentAllow:any, TransshipmentAllow:any, PaymentTerm:any, BeneficiaryName:any, BeneficiaryAddress:any, BeneficiaryTelNo:any, BeneficiaryFaxNo:any, ApplicantName:any, ApplicantAddress:any, ApplicantTelNo:any, ApplicantFaxNo:any, NotifyNameParty1:any, NotifyAddressParty1:any, NotifyNameParty2:any, NotifyAddressParty2:any, ItemDescription:any, TotalAmount:any, LCRemark:any, CopyLCNo:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}LCDocumentMaintain/EX_LCDocument_Save?LCNo=${LCNo}&IssueDate=${IssueDate}&ExpiryDate=${ExpiryDate}&ExpiryCountry=${ExpiryCountry}&PresentationPeriod=${PresentationPeriod}&AdvisingBank=${AdvisingBank}&Currency=${Currency}&PartialShipmentAllow=${PartialShipmentAllow}&TransshipmentAllow=${TransshipmentAllow}&PaymentTerm=${PaymentTerm}&BeneficiaryName=${BeneficiaryName}&BeneficiaryAddress=${BeneficiaryAddress}&BeneficiaryTelNo=${BeneficiaryTelNo}&BeneficiaryFaxNo=${BeneficiaryFaxNo}&ApplicantName=${ApplicantName}&ApplicantAddress=${ApplicantAddress}&ApplicantTelNo=${ApplicantTelNo}&ApplicantFaxNo=${ApplicantFaxNo}&NotifyNameParty1=${NotifyNameParty1}&NotifyAddressParty1=${NotifyAddressParty1}&NotifyNameParty2=${NotifyNameParty2}&NotifyAddressParty2=${NotifyAddressParty2}&ItemDescription=${ItemDescription}&TotalAmount=${TotalAmount}&LCRemark=${LCRemark}&CopyLCNo=${CopyLCNo}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

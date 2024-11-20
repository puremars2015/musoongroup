import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LCDocumentQueryService {
  LcNo:any=null;
  IssueDate:any=null;
  ExpiryDate:any=null;
  ExpiryCountry:any=null;
  PresentationPeriod:any=null;
  Currency:any=null;
  TotalAmount:any=null;
  constructor(private http: HttpClient) { }
  setlcNo(lcNo:any,issueDate:any,expiryDate:any,expiryCountry:any,presentationPeriod:any,currency:any,totalAmount:any) {
    this.LcNo = lcNo;
    this.IssueDate = issueDate;
    this.ExpiryDate = expiryDate;
    this.ExpiryCountry = expiryCountry;
    this.PresentationPeriod = presentationPeriod;
    this.Currency = currency;
    this.TotalAmount = totalAmount;
    console.warn(this.LcNo,this.IssueDate,this.ExpiryDate,this.ExpiryCountry,this.PresentationPeriod,this.Currency,this.TotalAmount);
  }

  getLcNo(): string {
    console.warn(this.LcNo);
    return this.LcNo;
  }
  
  getIssueDate(): any {
    console.warn(this.IssueDate);
    return this.IssueDate;
  }
  
  getExpiryDate(): any {
    console.warn(this.ExpiryDate);
    return this.ExpiryDate;
  }
  
  getExpiryCountry(): any {
    console.warn(this.ExpiryCountry);
    return this.ExpiryCountry;
  }
  
  getPresentationPeriod(): any {
    console.warn(this.PresentationPeriod);
    return this.PresentationPeriod;
  }
  
  getCurrency(): any {
    console.warn(this.Currency);
    return this.Currency;
  }
  
  getTotalAmount(): any {
    console.warn(this.TotalAmount);
    return this.TotalAmount;
  }
  EX_LCDocument_Query(LCNo:any, IssueDateS:any, IssueDateE:any, ExpiryDateS:any, ExpiryDateE:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}LCDocumentQuery/EX_LCDocument_Query?LCNo=${LCNo}&IssueDateS=${IssueDateS}&IssueDateE=${IssueDateE}&ExpiryDateS=${ExpiryDateS}&ExpiryDateE=${ExpiryDateE}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
  EX_LCDocument_Save(LCNo:any, IssueDate:any, ExpiryDate:any, ExpiryCountry:any, PresentationPeriod:any, AdvisingBank:any, Currency:any, PartialShipmentAllow:any, TransshipmentAllow:any, PaymentTerm:any, BeneficiaryName:any, BeneficiaryAddress:any, BeneficiaryTelNo:any, BeneficiaryFaxNo:any, ApplicantName:any, ApplicantAddress:any, ApplicantTelNo:any, ApplicantFaxNo:any, NotifyNameParty1:any, NotifyAddressParty1:any, NotifyNameParty2:any, NotifyAddressParty2:any, ItemDescription:any, TotalAmount:any, LCRemark:any, CopyLCNo:any, Modify_Emp:any, ActionFlag:any): Observable<any> {
    let url = `${environment.apiURL}LCDocumentQuery/EX_LCDocument_Save?LCNo=${LCNo}&IssueDate=${IssueDate}&ExpiryDate=${ExpiryDate}&ExpiryCountry=${ExpiryCountry}&PresentationPeriod=${PresentationPeriod}&AdvisingBank=${AdvisingBank}&Currency=${Currency}&PartialShipmentAllow=${PartialShipmentAllow}&TransshipmentAllow=${TransshipmentAllow}&PaymentTerm=${PaymentTerm}&BeneficiaryName=${BeneficiaryName}&BeneficiaryAddress=${BeneficiaryAddress}&BeneficiaryTelNo=${BeneficiaryTelNo}&BeneficiaryFaxNo=${BeneficiaryFaxNo}&ApplicantName=${ApplicantName}&ApplicantAddress=${ApplicantAddress}&ApplicantTelNo=${ApplicantTelNo}&ApplicantFaxNo=${ApplicantFaxNo}&NotifyNameParty1=${NotifyNameParty1}&NotifyAddressParty1=${NotifyAddressParty1}&NotifyNameParty2=${NotifyNameParty2}&NotifyAddressParty2=${NotifyAddressParty2}&ItemDescription=${ItemDescription}&TotalAmount=${TotalAmount}&LCRemark=${LCRemark}&CopyLCNo=${CopyLCNo}&Modify_Emp=${Modify_Emp}&ActionFlag=${ActionFlag}`;
    let r = this.http.get<any>(url);
    return r;
  }
}

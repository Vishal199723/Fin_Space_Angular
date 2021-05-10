import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';
import { MailData } from 'src/app/ViewModels/MailData';

@Injectable({
  providedIn: 'root'
})
export class MailService {


  constructor(private http:HttpClient,private _urls: AppGlobals ) { }

  GetInboxMessages(cid) {
    return this.http.get(this._urls.weburl + "/api/MailBox/GetInboxMessages/" + cid);
  }
  getPropsid(id){
    return this.http.get(this._urls.weburl + "/api/MailBox/GetPropsdetails/" + id);
  }
  getsentmails(cid) {
    return this.http.get(this._urls.weburl + "/api/ComposeMail/GetSentItems/" + cid);
  }
  getdeletedmails(cid) {
    return this.http.get(this._urls.weburl + "/api/ComposeMail/GetDeletedItems/" + cid);
  }
  deletedmail(cid) {
    return this.http.get(this._urls.weburl + "/api/ComposeMail/DeleteSelectedMail/" + cid);
  }
  getmaildetails(id){
    return this.http.get(this._urls.weburl + "/api/ComposeMail/GetMailDetails/" + id);
  }
  getUserTickets(cid){
    return this.http.get(this._urls.weburl + "/api/ComposeMail/GetUserTickets/" + cid);
  }
  getUsersformail(cid){
    return this.http.get(this._urls.weburl + "/api/ComposeMail/GetUsersforMail/" + cid);
  }

  sendMail(data: MailData) {
    return this.http.post(this._urls.weburl + "/api/MailBox/PostSendmail/" , data);
  }
  GetStatusList(rid){
    return this.http.get(this._urls.weburl + "/api/MailBox/GetStatusList/" + rid);
  }
  GetStatusListWithMailID(rid){
    return this.http.get(this._urls.weburl + "/api/MailBox/GetStatusListWithMailID/" + rid);
  }
  getParticularUsers(rid){
    return this.http.get(this._urls.weburl + "/api/MailBox/GetParticularUsers/" + rid);
  }
  getParticularUsersforEmp(ticketid){
    return this.http.get(this._urls.weburl + "/api/MailBox/GetParticularUsersforEMP/" + ticketid);
  }
  GetServiceRequestTypesList(){
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/GetRequestTypeMasters");
  }
  Getloansecuritylist(){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GeLoanSecurityMaster");
  }
  loanapplicationdata(id){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetLoanApplicationData/"+id);
  }
  loanapplicationdatafordisburment(id){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetLoanApplicationDataforDisbursment/"+id);
  }
  getuserdocumnets(cid){
    return this.http.get(this._urls.weburl + "/api/SBAccount/GetCustomerDocuments/"+cid);
  }
  getusersanctionedamount(cid){
    return this.http.get(this._urls.weburl + "/api/SBAccount/GetCustomerSanctionedAmount/"+cid);
  }
  getdisbursmentamount(cid){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetDisbursmentamount/"+cid);
  }
  getdocumnetforview(cid){
    return this.http.post(this._urls.weburl + "/api/SBAccount/GetdocforView",cid);
  }
  ppuloanapplicationdata(id){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetPPULoanApplicationData/"+id);
  }
  getppusanctionedamount(cid){
    return this.http.get(this._urls.weburl + "/api/SBAccount/GetPPUCustomerSanctionedAmount/"+cid);
  }

  postupdatespStatusList(cid){
    return this.http.post(this._urls.weburl + "/api/AdminDashboard/PostUpdateSPMailStatus",cid);
  }
  postupdatebaStatusList(cid){
    return this.http.post(this._urls.weburl + "/api/AdminDashboard/PostUpdateBAMailStatus",cid);
  }
}

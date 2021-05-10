import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class WorkflowtransService {

  constructor(private http: HttpClient, private _urls: AppGlobals) { }


  getCustomerAllDetails(id) {
    return this.http.post(this._urls.weburl + "/api/CustomerRequests/GetAgentsCustomersAllDetails/", id);
  }
  updateWorkflowofcMail(data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostUpdateWorkflowOfcMail/', data);
  }
  updateWorkflowMail(data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostUpdateWorkflowMail/', data);
  }
  updateMailStatus(Id) {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/PostChangeMailStatus/' + Id);
  }
  getSBAMailData (custid) {
    return this.http.get(this._urls.weburl + '/api/Transaction/GetSBAMailData/' + custid);
  }
  getreglist() {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/Getregcustlist');
  }
  getloandislist() {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/Getdiscustlist');
  }
  getloanapplist () {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/GetLoanAppcustlist');
  }
  getloandoclist() {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/GetLoanDoccustlist');
  }
  sendSBAWorkflowMail(data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostSBAWorkflowMail', data);
  };
  saveLoanApplicationDetails(data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostSaveLoanApplicationDetails', data);
  };
  saveLoanDocumentDetails (data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostSaveLoanDocumentationDetails', data);
  };
  saveLoanDisbursementDetails (data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostSaveLoanDisbursementDetails', data);
  };
  sendtoPPU(data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostUpdatePPUWorkflowOfcMail/', data);
  }
  updatePPUWorkflowofcMail(data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostPPUUpdateWorkflowOfcMail/', data);
  }
  getppuloanapplist () {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/GetPPULoanAppcustlist');
  }
  saveppuLoanDocumentDetails (data) {
    return this.http.post(this._urls.weburl + '/api/WorkFlow/PostSavePPULoanDocumentationDetails', data);
  };
  getppucustlist () {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/GetPPUcustlist');
  }
  getppuDoccustlist () {
    return this.http.get(this._urls.weburl + '/api/WorkFlow/GetPPUlaondocapprovedcustlist');
  }
  sendnewmail(det){
    return this.http.get(this._urls.weburl + '/api/ComposeMail/PostSaveNewMail',det);
  }
  baloanapprovedlist(Id) {
    return this.http.get(this._urls.weburl + '/api/AllMasterData/GetBAcommissionDetails/' + Id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class CustomerDashboardService {

 
  constructor(private http:HttpClient,private _urls:AppGlobals) { }
  GetLoanTypes(){
    return this.http.get(this._urls.weburl + "/api/CustomerDashboard/GetAllLoanTypes/");
  }
  GetRequestedServices(id){
    return this.http.get(this._urls.weburl + "/api/CustomerRequests/GetCustomerServices/" + id);
  }
  GetCompletedServices(id){
    return this.http.get(this._urls.weburl + "/api/CustomerRequests/GetCustomerCompletedServices/" + id);

  }
  GetFullDetails(id){
    return this.http.get(this._urls.weburl + "/api/EmployeeTasks/GetFullServiceDetails/" + id);
  }
  GetTrackDetails(id){
    return this.http.get(this._urls.weburl + "/api/CustomerDashboard/GetTrackDetails/" + id);
  }
  GetPendingApplication(id){
    return this.http.get(this._urls.weburl + "/api/CustomerRequests/GetPendingApplications/" + id);

  }
}

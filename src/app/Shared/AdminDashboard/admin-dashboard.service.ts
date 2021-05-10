import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient,private _urls:AppGlobals) { }
  GetRequestedServices(){
    return this.http.get(this._urls.weburl + "/api/AdminDashboard/GetCustomerRequestedServices/");
  }
  GetRegisteredUsers(){
    return this.http.get(this._urls.weburl + "/api/AdminDashboard/GetAllUsers/");
  }
  GetNewServices(data){
    return this.http.post(this._urls.weburl + "/api/OtherUserDashboard/PostUserNewServices" , data);

  }
  GetPendingServices(data){
    return this.http.post(this._urls.weburl + "/api/OtherUserDashboard/PostUserPendingServices" , data);

  }
  GetCompletedServices(data){
    return this.http.post(this._urls.weburl + "/api/OtherUserDashboard/PostUserCompletedServices" , data);

  }
  GetPPUNewServices(data){
    return this.http.post(this._urls.weburl + "/api/PPUUserDashboard/PostUserPPUNewServices" , data);

  }
  GetPPUPendingServices(data){
    return this.http.post(this._urls.weburl + "/api/PPUUserDashboard/PostUserPPUPendingServices" , data);

  }
  GetPPUCompletedServices(data){
    return this.http.post(this._urls.weburl + "/api/PPUUserDashboard/PostUserCompletedServices" , data);

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class TicketManagerService {

  constructor(private http:HttpClient,private _urls: AppGlobals) { }
  GetNewServices(){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetServiceDetails/");
  }
  GetAssignedServices(){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetAssignedDetails/");
  }
  GetPendingServicesForAdmin(){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetPendingServicesForAdmin/");

  }

  getallcompletedservicesforadmin(){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetCompletedServicesForAdmin/");
  }
  
  GetResolvedServices(){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetCompletedServices/");
  }
  
  saveAssignedTasks(id){
    return this.http.post(this._urls.weburl +"/api/CustomerRequests/PostSaveAssignedTasks/", id);
  }

  saveAcceptTasks(id){
    return this.http.post(this._urls.weburl +"/api/CustomerRequests/PostAcceptTasks/", id);
  }
  GetBAAssignedServices(id){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetAssignedDetailsforBA/" + id);

  }
  GetBAResolvedServices(id){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetCompletedServicesforBA/" + id);

  }

  GetSPPendingServicesForAdmin(id){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetPendingSPServicesForAdmin/" + id);
  }
  GetCompletedSPServicesForAdmin(id){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetCompletedSPServicesForAdmin/" + id);
  }
  getSPList(){
    return this.http.get(this._urls.weburl +"/api/CustomerRequests/GetSPList/");
  }
  
}

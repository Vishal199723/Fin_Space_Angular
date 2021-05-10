import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class RequestTypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  getAllServiceRequestTypes(){
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/GetRequestTypeMasters/");

  }
  getServiceRequestTypes(id){
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/GetParticularRequestTypeMasters/" + id);

  }
  SaveServiceRequestName(data){
    return this.http.post(this._urls.weburl + "/api/ServiceRequestType/PostServiceRequestTypeMaster", data);

  }
  UpdateServiceRequestName(data){
    return this.http.post(this._urls.weburl + "/api/ServiceRequestType/PutServiceRequestTypeMaster", data);

  }
  deleteServiceRequestName(id){
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/DeleteServiceRequestTypeMaster/" + id);

  }

  getEmployeeUniqueId(){
    return this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetEmployeeId/");
  }

  getSPEmployees(id){
    return this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetSPEmployees/" + id);
  }
  
  DeleteSPEmployee(id){
    return this.http.delete(this._urls.weburl + "/api/ServiceProviderEmployee/DeleteSPEmployee/" + id);
  }

  getWorkflowStates(id){
    return this.http.get(this._urls.weburl + "/api/MailBox/GetWorkflowStates/" + id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { ServicerequestVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestTypeService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveservicerequest(servicerequest: ServicerequestVM) {
    return this.http.post(this._urls.weburl + "/api/ServiceRequestType/PostSaveServiceRequest", servicerequest);
  }

  getloansTypes() {
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/GetAllRoles");
  }
  getservicerequests() {
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/GetRequestTypeMasters");
  } 
   getloantypesdata(id){
    return this.http.get(this._urls.weburl + "/api/ServiceRequestType/Getloantypesdata/" + id);
  }
  UpdateservicerequestRow(id:ServicerequestVM){
    return this.http.post(this._urls.weburl + "/api/ServiceRequestType/PutServiceRequest" , id);
  }

  deleteservicerequestdata(id:number){
    return this.http.get(this._urls.weburl +"/api/ServiceRequestType/DeleteServiceRequestData/"+ id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  getAllServiceTypes(){
    return this.http.get(this._urls.weburl + "/api/ServiceTypeMasters/GetServiceTypeMasters/");
  }
  getInterestpayouttypes(id){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetInterestpayoutdata/" + id);
  }
  SaveServiceName(data){
    return this.http.post(this._urls.weburl + "/api/ServiceTypeMasters/PostServiceTypeMaster", data);
  }

  UpdateServiceName(data){
    return this.http.post(this._urls.weburl + "/api/ServiceTypeMasters/PutServiceTypeMaster", data);
  }

  deleteServiceName(id){
    return this.http.get(this._urls.weburl + "/api/ServiceTypeMasters/DeleteServiceTypeMaster/" + id);
  }

  getRoles(){
    return this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetRoles/");
  }

  getGroups(){
    return this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetGroups/");
  }
  getacceptedrequestsforemp(uid){
    return this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetAcceptedListForEmp/"+uid);
  }
  getRoleBasedGroups(id){
    return this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetRoleBasedGroups/" + id);
  }

  getlocations(){
    return this.http.get(this._urls.weburl + "/api/AppetiteForRiskMaster/GetAllPincodes/");
  }
}

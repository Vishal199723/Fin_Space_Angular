import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { department, Designation } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient, private _urls: AppGlobals) { }
  saveDesignation(data:Designation){
    return this.http.post(this._urls.weburl +"/api/Designation/PostSaveDesignation",data);
  }

  getDesignations(){
    return this.http.get(this._urls.weburl +"/api/Designation/GetAllDesignations");
  }

  deleteDesignation(id: number){
    return this.http.get(this._urls.weburl +"/api/Designation/DeleteDesignationData/"+ id);
  }

  UpdateDesignation(data:Designation){
    return this.http.post(this._urls.weburl +"/api/Designation/PutDesignation",data);
  }

  saveDepartments(userRole: department) {
    return this.http.post(this._urls.weburl + "/api/Department/PostSaveDepartment", userRole);
  }

  getUserRoles() {
    return this.http.get(this._urls.weburl + "/api/Department/GetAllDepartments");
  }

  UpdateDepartments(id:department){
    return this.http.post(this._urls.weburl + "/api/Department/PutDepartment" , id);
  }

  deleteDepartments(id:number){
    return this.http.get(this._urls.weburl +"/api/Department/DeleteDepartmentData/"+ id);
  }
}

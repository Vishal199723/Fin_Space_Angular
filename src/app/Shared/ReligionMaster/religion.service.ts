import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { maritalstatus, religion } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveUserRole(userRole: religion) {
    return this.http.post(this._urls.weburl + "/api/Religion/PostSaveReligion", userRole);
  }

  getUserReligion() {
    return this.http.get(this._urls.weburl + "/api/Religion/GetAllReligion");
  }

  UpdateUserRoleRow(id:religion){
    return this.http.post(this._urls.weburl + "/api/Religion/PutReligion" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/Religion/DeleteReligionData/"+ id);
  }

  savemaritalstatus(userRole: maritalstatus) {
    return this.http.post(this._urls.weburl + "/api/MaritalStatus/PostSaveMaritalStatus", userRole);
  }

  getsatus() {
    return this.http.get(this._urls.weburl + "/api/MaritalStatus/GetAllMaritalStatus");
  }

  Updatemaritalstatus(id:maritalstatus){
    return this.http.post(this._urls.weburl + "/api/MaritalStatus/PutMaritalStatus", id);
  }

  deletestatusdata(id:number){
    return this.http.get(this._urls.weburl +"/api/MaritalStatus/DeleteMaritalStatusData/"+ id);
  }
}

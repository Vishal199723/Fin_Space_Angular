import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class AssignRightService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveUserRight(userRight) {
    return this.http.post(this._urls.weburl + "/api/AssignRightMaster/PostSaveRights", userRight);
  }

  getUserRights() {
    return this.http.get(this._urls.weburl + "/api/AssignRightMaster/GetAllRights");
  }

  UpdateUserRightRow(id){
    return this.http.post(this._urls.weburl + "/api/AssignRightMaster/PostUpdateRights" , id);
  }

  deleteRightdata(id:number){
    return this.http.get(this._urls.weburl +"/api/AssignRightMaster/GetDeleteRightsData/"+ id);
  }
}

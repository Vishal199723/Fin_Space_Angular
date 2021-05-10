import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRole } from 'src/app/ViewModels/UserRole';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveUserRole(userRole: UserRole) {
    return this.http.post(this._urls.weburl + "/api/Role/PostSaveRole", userRole);
  }

  getUserRoles() {
    return this.http.get(this._urls.weburl + "/api/Role/GetAllRoles");
  }

  UpdateUserRoleRow(id:UserRole){
    return this.http.post(this._urls.weburl + "/api/Role/PutRole" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/Role/DeleteRoleData/"+ id);
  }
}

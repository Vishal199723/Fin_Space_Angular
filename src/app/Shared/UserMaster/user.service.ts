import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  getAllUsers(){
    return this.http.get(this._urls.weburl + "/api/User/GetAllUsers/");
  }
   deleteUser(id){
    return this.http.delete(this._urls.weburl + "/api/User/DeleteUserData/" + id);
  }
  UpdateUserRow(id:any){
    return this.http.post(this._urls.weburl + "/api/User/PostUpdateUserDetails" , id);
  }

  // getDistricts(){
  //   return this.http.get('http://18.219.90.232:8080/digitalwallet/proxy/location/districts');
  // }
  getRights(){
    return this.http.get(this._urls.weburl +"/api/AssignRightMaster/GetAllRights/");

  }
}

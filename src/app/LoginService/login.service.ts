import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';
import { Auditdata, UserEMail, UEMail } from '../ViewModels/Auditdata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private _urls: AppGlobals) { }
  userAuthentication(userName: any, password: any) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded;', 'No-Auth': 'True' });
    return this.http.post(this._urls.weburl + '/token', data, { headers: reqHeader });
  }
  getuserdetails(data){
    return this.http.get(this._urls.weburl + "/api/User/GetUserDetailsToRedirectPage/" + data);
  }
  getallmenus() {
    return this.http.get(this._urls.weburl + "/api/User/GetMenuMasters/");
  }
  getallmastermenus(roleid) {
    return this.http.get(this._urls.weburl + "/api/User/GetMasterMenuData/" + roleid);
  }
  getallmastermenusforadmin(roleid){
    return this.http.get(this._urls.weburl + "/api/User/GetMasterDataforAdmin/" + roleid);

  }
 getsmartcontractmenu(roleid) {
    return this.http.get(this._urls.weburl + "/api/User/GetSmartContractMenu/" + roleid);
  }
    getAdminDashboard(roleid){
    return this.http.get(this._urls.weburl + "/api/User/GetAdminDashboard/" + roleid);
  }
  getAuditDashboard(roleid){
    return this.http.get(this._urls.weburl + "/api/User/GetAuditDashboard/" + roleid);
  }
  getuserDashboard(roleid){
    return this.http.get(this._urls.weburl + "/api/User/GetUserDashboard/" + roleid);
  }

  getFileDownloadedOrNot(uid){
    return this.http.get(this._urls.weburl + "/api/User/GetFileDownloadedOrNot/" + uid);

  }
  UpdateFileDownloaded(uid){
    return this.http.get(this._urls.weburl + "/api/User/GetUpdateFileDownloaded/" + uid);
  }

  getesignmenu(cid){
    return this.http.get(this._urls.weburl + "/api/HaspitService/GetEsignMenu/" + cid);
  }
  
  getRemainingAttempts(data: UEMail){
    return this.http.post(this._urls.weburl + "/api/Account/GetRemainingAttempts" , data);
  }

  saveAuditData(data: Auditdata) {
    return this.http.post(this._urls.weburl + "/api/Signup/PostAuditData", data);
  }
 
  Logout(data: UserEMail) {
    return this.http.post(this._urls.weburl + "/api/Account/PostLogOut", data);
  }

  getmenubasedonreole(roleid){
    return this.http.get(this._urls.weburl + "/api/Account/GetUserMenus/" + roleid);

  }
  CheckSession(data: any) {
    return this.http.post(this._urls.weburl +"/api/UserSession/ChechSession", data);
  }
}

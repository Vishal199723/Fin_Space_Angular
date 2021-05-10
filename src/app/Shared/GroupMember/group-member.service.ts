import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class GroupMemberService {

  constructor(private http:HttpClient,private _urls:AppGlobals) { }
  saveGroupMembers(data) {
    return this.http.post(this._urls.weburl + "/api/GroupMember/PostSaveGroupMembers", data);
  }

  getGroupMembers() {
    return this.http.get(this._urls.weburl + "/api/GroupMember/GetAllGroupMembers");
  }

  UpdateGroupMembersRow(data){
    return this.http.post(this._urls.weburl + "/api/GroupMember/PutGroupMembers" , data);
  }

  deleteGroupMembersdata(id:number){
    return this.http.get(this._urls.weburl +"/api/GroupMember/DeleteGroupMembersData/"+ id);
  }
  getUserbyRole(id){
    return this.http.get(this._urls.weburl + "/api/GroupMember/GetUserByRole/" + id);

  }
}

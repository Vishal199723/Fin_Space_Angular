import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class GroupMasterService {

  constructor(private http:HttpClient,private _urls:AppGlobals) { }
  saveGroups(data) {
    return this.http.post(this._urls.weburl + "/api/GroupMaster/PostSaveGroupMaster", data);
  }

  getGroups() {
    return this.http.get(this._urls.weburl + "/api/GroupMaster/GetAllGroups");
  }

  UpdateGroupRow(data){
    return this.http.post(this._urls.weburl + "/api/GroupMaster/PutGroupMaster" , data);
  }

  deleteGroupdata(id:number){
    return this.http.get(this._urls.weburl +"/api/GroupMaster/DeleteGroupMasterData/"+ id);
  }
}

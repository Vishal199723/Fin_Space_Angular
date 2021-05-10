import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { ProtectionVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class ProtectionNeedService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveprotectionneed(protectionneed: ProtectionVM) {
    return this.http.post(this._urls.weburl + "/api/ProtectionNeed/PostSaveProtection", protectionneed);
  }

  getprotectionneeds() {
    return this.http.get(this._urls.weburl + "/api/ProtectionNeed/GetAllProtections");
  }

  UpdateprotectionneedRow(id:ProtectionVM){
    return this.http.post(this._urls.weburl + "/api/ProtectionNeed/PutProtection" , id);
  }

  deleteProtectionsdata(id:number){
    return this.http.get(this._urls.weburl +"/api/ProtectionNeed/DeleteProtectionData/"+ id);
  }
}

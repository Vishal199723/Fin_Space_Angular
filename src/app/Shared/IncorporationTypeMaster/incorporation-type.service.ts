import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Incorporation } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class IncorporationTypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveIncorporationtype(Incorporationtype: Incorporation) {
    return this.http.post(this._urls.weburl + "/api/IncorporationType/PostIncorporation", Incorporationtype);
  }

  getIncorporationtypes() {
    return this.http.get(this._urls.weburl + "/api/IncorporationType/GetIncorporation");
  }

  UpdateIncorporationtypeRow(id:Incorporation){
    return this.http.post(this._urls.weburl + "/api/IncorporationType/PutIncorporation" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/IncorporationType/DeleteIncorporation/"+ id);
  }
}

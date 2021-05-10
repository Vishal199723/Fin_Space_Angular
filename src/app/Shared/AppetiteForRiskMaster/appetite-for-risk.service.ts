import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { AppetiteForRisk } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class AppetiteForRiskService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveappetiterisk(appetiterisk: AppetiteForRisk) {
    return this.http.post(this._urls.weburl + "/api/AppetiteForRiskMaster/PostSaveAppetiteForRisk", appetiterisk);
  }

  getappetiterisks() {
    return this.http.get(this._urls.weburl + "/api/AppetiteForRiskMaster/GetAllAppetiteForRisk");
  }

  UpdateappetiteriskRow(id:AppetiteForRisk){
    return this.http.post(this._urls.weburl + "/api/AppetiteForRiskMaster/PutAppetiteForRisk" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/AppetiteForRiskMaster/DeleteAppetiteForRiskData/"+ id);
  }
}

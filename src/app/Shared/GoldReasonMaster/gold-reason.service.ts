import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { GoldReason } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class GoldReasonService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savereasons(reasons: GoldReason) {
    return this.http.post(this._urls.weburl + "/api/GoldReason/PostGoldReason", reasons);
  }

  getreasonss() {
    return this.http.get(this._urls.weburl + "/api/GoldReason/GetGoldReason");
  }

  UpdatereasonsRow(id:GoldReason){
    return this.http.post(this._urls.weburl + "/api/GoldReason/PutGoldReason" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/GoldReason/DeleteGoldReason/"+ id);
  }
}

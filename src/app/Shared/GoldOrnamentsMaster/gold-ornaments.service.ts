import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Goldornaments } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class GoldOrnamentsService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveGoldOrnament(GoldOrnament: Goldornaments) {
    return this.http.post(this._urls.weburl + "/api/GoldOrnaments/PostSaveGoldOrnament", GoldOrnament);
  }

  getGoldOrnaments() {
    return this.http.get(this._urls.weburl + "/api/GoldOrnaments/GetAllGolds");
  }

  UpdateGoldOrnamentRow(id:Goldornaments){
    return this.http.post(this._urls.weburl + "/api/GoldOrnaments/PutGoldOrnament" , id);
  }

  deleteGolddata(id:number){
    return this.http.get(this._urls.weburl +"/api/GoldOrnaments/DeleteGoldOrnamentData/"+ id);
  }
}

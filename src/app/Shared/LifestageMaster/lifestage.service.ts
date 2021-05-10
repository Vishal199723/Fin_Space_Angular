import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { lifestageVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class LifestageService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savelifestage(lifestage: lifestageVM) {
    return this.http.post(this._urls.weburl + "/api/LifeStage/PostSaveLifeStage", lifestage);
  }

  getlifestages() {
    return this.http.get(this._urls.weburl + "/api/LifeStage/GetLifeStages");
  }

  UpdatelifestageRow(id:lifestageVM){
    return this.http.post(this._urls.weburl + "/api/LifeStage/PutLifeStage" , id);
  }
  deletelifestage(id:number){
    return this.http.get(this._urls.weburl +"/api/LifeStage/DeleteLifeStage/"+ id);
  }
}

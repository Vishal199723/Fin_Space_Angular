import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Gender } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http:HttpClient, private _urls: AppGlobals) { }
  saveGender(data:Gender){
    return this.http.post(this._urls.weburl +"/api/GenderMaster/PostSaveGender",data);
  }

  getGender(){
    return this.http.get(this._urls.weburl +"/api/GenderMaster/GetGenders");
  }

  deleteGender(id: number){
    return this.http.get(this._urls.weburl +"/api/GenderMaster/DeleteGenderData/"+ id);
  }

  UpdateGender(data:Gender){
    return this.http.post(this._urls.weburl +"/api/GenderMaster/PutGender",data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Occupation } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  constructor(private http:HttpClient, private _urls: AppGlobals) { }
  saveOccupation(data:Occupation){
    return this.http.post(this._urls.weburl +"/api/Occupation/PostSaveOccupation",data);
  }

  getOcupaitons(){
    return this.http.get(this._urls.weburl +"/api/Occupation/GetOccupations");
  }

  deleteOccupation(id: number){
    return this.http.get(this._urls.weburl +"/api/Occupation/DeleteOccupationData/"+ id);
  }

  UpdateOccupation(data:Occupation){
    return this.http.post(this._urls.weburl +"/api/Occupation/PutOccupation",data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Qualification } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  constructor(private http:HttpClient, private _urls: AppGlobals) { }
  saveQualification(data:Qualification){
    return this.http.post(this._urls.weburl +"/api/Qualification/PostSaveQualification",data);
  }

  getQualifications(){
    return this.http.get(this._urls.weburl +"/api/Qualification/GetQualifications");
  }

  deleteQualification(id: number){
    return this.http.get(this._urls.weburl +"/api/Qualification/DeleteQualificationData/"+ id);
  }

  UpdateQualification(data:Qualification){
    return this.http.post(this._urls.weburl +"/api/Qualification/PutQualification",data);
  }
}

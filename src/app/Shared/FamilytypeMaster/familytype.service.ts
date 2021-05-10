import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { familytype } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class FamilytypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savefamilytype(family: familytype) {
    return this.http.post(this._urls.weburl + "/api/FamilyTypeMaster/PostSavefamilytype", family);
  }

  Getfamilytype() {
    return this.http.get(this._urls.weburl + "/api/FamilyTypeMaster/GetAllfamilytype");
  }

  updatefamilytypeRow(id:familytype){
    return this.http.post(this._urls.weburl + "/api/FamilyTypeMaster/Putfamilytype" , id);
  }

  deletefamilydata(id:number){
    return this.http.get(this._urls.weburl +"/api/FamilyTypeMaster/DeletefamilyData/"+ id);
  }
}

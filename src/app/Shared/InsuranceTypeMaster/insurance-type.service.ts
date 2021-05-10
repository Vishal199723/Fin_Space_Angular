import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Insurance } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class InsuranceTypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveinsurancetype(insurancetype: Insurance) {
    return this.http.post(this._urls.weburl + "/api/InsuranceType/PostSaveInsurance", insurancetype);
  }

  getinsurancetypes() {
    return this.http.get(this._urls.weburl + "/api/InsuranceType/GetAllInsurance");
  }

  UpdateinsurancetypeRow(id:Insurance){
    return this.http.post(this._urls.weburl + "/api/InsuranceType/PutInsurance" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/InsuranceType/DeleteInsurance/"+ id);
  }
}

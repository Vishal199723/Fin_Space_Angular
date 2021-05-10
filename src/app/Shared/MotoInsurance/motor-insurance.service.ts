import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class MotorInsuranceService {

  constructor(private http:HttpClient,private _urls :AppGlobals ) { }
  getFuelTypes(){
    return(this.http.get(this._urls.weburl + "/api/C_MotorInsurance/GetFuelTypes"));
  }
  SaveMotorInsurance(data){
    return this.http.post(this._urls.weburl + "/api/C_MotorInsurance/PostSaveMotorInsuranceDetails", data);

  }
  GetDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_MotorInsurance/GetBasicDetailsDraftforMotorInsurance/" + id);
  }
  getmotorinsurancedetails(id){
    return this.http.get(this._urls.weburl + "/api/C_MotorInsurance/GetMotorInsuranceDetails/" + id);

  }
}

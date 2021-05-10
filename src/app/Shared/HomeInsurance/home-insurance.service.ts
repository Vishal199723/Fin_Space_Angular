import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class HomeInsuranceService {

  constructor(private http: HttpClient, private _urls: AppGlobals) { }

  SaveHomeInsurance(data) {
    return this.http.post(this._urls.weburl + "/api/C_HomeInsurance/PostSaveHomeInsuranceDetails", data);
  }
  GetDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_HomeInsurance/GetBasicDetailsDraftforHomeInsurance/" + id);

  }
  gethomeinsurancedetails(id){
    return this.http.get(this._urls.weburl + "/api/C_HomeInsurance/GetHomeInsuranceDetails/" + id);

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class LifeInsuranceService {

  constructor(private http: HttpClient,
     private _urls: AppGlobals) { }

    getAppetiteRisks() {
      return this.http.get(this._urls.weburl + "/api/AllMasterData/GetAppetiteRisks");
    }
    getProjectWorkSpans() {
      return this.http.get(this._urls.weburl + "/api/AllMasterData/GetProjectWorkSpans");
    }
    getLifeStage() {
      return this.http.get(this._urls.weburl + "/api/AllMasterData/GetLifeStages");
    }
    getProtectionNeeds() {
      return this.http.get(this._urls.weburl + "/api/AllMasterData/GetProtectionNeeds");
    }

    GetDraftdata(id){
      return this.http.get(this._urls.weburl + "/api/C_LifeInsurance/GetDraftforLifeInsurance/" + id);
    }

    getlifeInsuranceData(id){
      return this.http.get(this._urls.weburl + "/api/C_LifeInsurance/GetDataforLifeInsurance/" + id);
    }
}

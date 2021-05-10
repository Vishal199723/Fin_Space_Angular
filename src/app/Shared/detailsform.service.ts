import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class DetailsformService {

  constructor(private http:HttpClient,private _urls: AppGlobals) { }
  getgenderdata(){
    return this.http.get(this._urls.weburl +"/api/Country/GetGender");
  }

  getmaritalstatus(){
    return this.http.get(this._urls.weburl +"/api/Country/Getmaritalstatus");
  }

  getAllreligion(){
    return this.http.get(this._urls.weburl +"/api/Country/GetReligion");
  }

  getAllqualification(){
    return this.http.get(this._urls.weburl +"/api/Country/Getqualification");
  }
  getALLfanilytype(){
    return this.http.get(this._urls.weburl +"/api/Country/GetFamilyType");
  }

  getALldesignation(){
    return this.http.get(this._urls.weburl +"/api/Country/Getdesignation");
  }

  getAlloccupatiom(){
    return this.http.get(this._urls.weburl +"/api/Country/GetOccupation");
  }

  getALLmoveable(){
    return this.http.get(this._urls.weburl +"/api/Country/Getmoveableasset");
  }

  getALLfixedasset(){
    return this.http.get(this._urls.weburl +"/api/Country/GetFixedasset");
  }
  getALLcaste(){
    return this.http.get(this._urls.weburl +"/api/Country/GetAllcaste");
  }
  getbankaccounttype(){
    return this.http.get(this._urls.weburl +"/api/Country/Getbanktype");
  }
  getALLgoldrason(){
    return this.http.get(this._urls.weburl +"/api/AllMasterData/Getgoldreasons");
  }
  getALLdisbursement(){
    return this.http.get(this._urls.weburl +"/api/AllMasterData/GetAlldisbursement");
  }
  getallornaments(){
    return this.http.get(this._urls.weburl +"/api/AllMasterData/Getgoldornaments");
  }
}

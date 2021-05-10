import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Depositetype } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class DepositTypeService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savedepositetype(depositetype: Depositetype) {
    return this.http.post(this._urls.weburl + "/api/DepositTypeMaster/PostSaveDeposit", depositetype);
  }

  getdepositetypes() {
    return this.http.get(this._urls.weburl + "/api/DepositTypeMaster/GetAllDeposits");
  }

  UpdatedepositetypeRow(id:Depositetype){
    return this.http.post(this._urls.weburl + "/api/DepositTypeMaster/PutDeposit" , id);
  }

  deleteDepositdata(id:number){
    return this.http.get(this._urls.weburl +"/api/DepositTypeMaster/DeleteDepositData/"+ id);
  }
}

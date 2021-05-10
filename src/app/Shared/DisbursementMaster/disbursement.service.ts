import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Disbursement } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class DisbursementService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveDisbursement(Disbursement: Disbursement) {
    return this.http.post(this._urls.weburl + "/api/DisbursementMaster/PostSaveDisbursement", Disbursement);
  }

  getDisbursements() {
    return this.http.get(this._urls.weburl + "/api/DisbursementMaster/GetAllDisbursements");
  }

  UpdateDisbursementRow(id:Disbursement){
    return this.http.post(this._urls.weburl + "/api/DisbursementMaster/PutDisbursement" , id);
  }

  deletedisbursementdata(id:number){
    return this.http.get(this._urls.weburl +"/api/DisbursementMaster/DeleteDisbursementData/"+ id);
  }
}

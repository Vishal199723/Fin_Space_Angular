import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { loantypeVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class LoantypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveloantype(loantype: loantypeVM) {
    return this.http.post(this._urls.weburl + "/api/Loantype/PostSaveLoantype", loantype);
  }

  getloantypes() {
    return this.http.get(this._urls.weburl + "/api/Loantype/GetLoantype");
  }

  UpdateloantypeRow(id:loantypeVM){
    return this.http.post(this._urls.weburl + "/api/Loantype/PutLoantype" , id);
  }

   deleteloandata(id:number){
    return this.http.get(this._urls.weburl +"/api/Loantype/DeleteLoantype/"+ id);
  }
}

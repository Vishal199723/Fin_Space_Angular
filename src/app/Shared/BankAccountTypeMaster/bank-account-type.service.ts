import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { bankaccount } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class BankAccountTypeService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveBankaccount(Bankaccount: bankaccount) {
    return this.http.post(this._urls.weburl + "/api/BankAccountTypeMaster/PostSaveBankAccount", Bankaccount);
  }

  getBankaccounts() {
    return this.http.get(this._urls.weburl + "/api/BankAccountTypeMaster/GetAllBankAccount");
  }

  UpdateBankaccountRow(id:bankaccount){
    return this.http.post(this._urls.weburl + "/api/BankAccountTypeMaster/PutBankAccount" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/BankAccountTypeMaster/DeleteBankAccountData/"+ id);
  }
}

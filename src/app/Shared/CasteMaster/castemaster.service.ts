import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { CasteVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class CastemasterService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savecastedata(userRole: CasteVM) {
    return this.http.post(this._urls.weburl + "/api/CasteMaster/PostSavecaste", userRole);
  }

  getcastemaster() {
    return this.http.get(this._urls.weburl + "/api/CasteMaster/GetAllCaste");
  }

  UpdateUsercasteRow(id:CasteVM){
    return this.http.post(this._urls.weburl + "/api/CasteMaster/Putcaste" , id);
  }

  deletecastedata(id:number){
    return this.http.get(this._urls.weburl +"/api/CasteMaster/DeletecasteData/"+ id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Interset } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class IntersetPayoutService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveintersetpayout(intersetpayout: Interset) {
    return this.http.post(this._urls.weburl + "/api/IntersetPayout/PostSaveInterestpayout", intersetpayout);
  }

  getintersetpayouts() {
    return this.http.get(this._urls.weburl + "/api/IntersetPayout/GetInterestpayout");
  }

  UpdateintersetpayoutRow(id:Interset){
    return this.http.post(this._urls.weburl + "/api/IntersetPayout/PutInterestpayout" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/IntersetPayout/DeleteInterestpayout/"+ id);
  }
}

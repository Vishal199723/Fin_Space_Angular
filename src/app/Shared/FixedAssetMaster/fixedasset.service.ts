import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { fixedasset } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class FixedassetService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savefixedasset(fixedasset: fixedasset) {
    return this.http.post(this._urls.weburl + "/api/FixedAsset/PostSaveFixedAsset", fixedasset);
  }

  getfixedassets() {
    return this.http.get(this._urls.weburl + "/api/FixedAsset/GetAllFixedAsset");
  }

  UpdatefixedassetRow(id:fixedasset){
    return this.http.post(this._urls.weburl + "/api/FixedAsset/PutFixedAsset" , id);
  }

  deletefixeddata(id:number){
    return this.http.get(this._urls.weburl +"/api/FixedAsset/DeleteFixedAssetData/"+ id);
  }
}

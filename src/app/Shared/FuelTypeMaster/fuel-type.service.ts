import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Fueltype } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveFueltype(Fueltype: Fueltype) {
    return this.http.post(this._urls.weburl + "/api/FuelType/PostSaveFuelType", Fueltype);
  }

  getFueltypes() {
    return this.http.get(this._urls.weburl + "/api/FuelType/GetAllFuelType");
  }

  UpdateFueltypeRow(id:Fueltype){
    return this.http.post(this._urls.weburl + "/api/FuelType/PutFuelType" , id);
  }

  deletefueldata(id:number){
    return this.http.get(this._urls.weburl +"/api/FuelType/DeleteFuelTypeData/"+ id);
  }
}

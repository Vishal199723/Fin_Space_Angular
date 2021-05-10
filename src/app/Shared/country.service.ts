import { Injectable } from '@angular/core';
import { Country } from '../ViewModels/Country';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient,private _urls: AppGlobals) { }
  saveCountry(data:Country){
    return this.http.post(this._urls.weburl +"/api/Country/PostSaveCountry",data);
  }

  getAllCountries(){
    return this.http.get(this._urls.weburl +"/api/Country/GetAllCountries");
  }

  deleteCountry(id: number){
    return this.http.get(this._urls.weburl +"/api/Country/DeleteCountryData/"+ id);
  }

  UpdateCountry(data:Country){
    return this.http.post(this._urls.weburl +"/api/Country/PutCountry",data);
  }

  getAllDepartments(){
    return this.http.get(this._urls.weburl +"/api/Department/GetAllDepartments");
  }

  Updatedepartment(data){
    return this.http.post(this._urls.weburl +"/api/Department/PutDepartment",data);
  }

  saveDepartment(data){
    return this.http.post(this._urls.weburl +"/api/Department/SaveDepartment",data);
  }

  deleteDepartment(id: number){
    return this.http.get(this._urls.weburl +"/api/Department/DeleteDepartment/"+ id);
  }


  getAllCommissionDetails(){
    return this.http.get(this._urls.weburl +"/api/BACommission/GetAllCommissionDetails");
  }
  getAllBAs(){
    return this.http.get(this._urls.weburl +"/api/BACommission/GetAllBAs");
  }
  getAllSPs(){
    return this.http.get(this._urls.weburl +"/api/BACommission/GetAllSPS");
  }
  deletecommission(id){
    return this.http.get(this._urls.weburl +"/api/BACommission/DeleteCommissionDetails/"+ id);
  }
  saveCommissionData(data){
    return this.http.post(this._urls.weburl +"/api/BACommission/PostCommissionDetails",data);
  }
  updateCommissionData(data){
    return this.http.post(this._urls.weburl +"/api/BACommission/PutCommissionDetails",data);
  }
  getAllproducts(){
    return this.http.get(this._urls.weburl +"/api/BACommission/GetAllProducts");
  }
  getAllsubproducts(id){
    return this.http.get(this._urls.weburl +"/api/BACommission/GetAllsubProducts/"+ id);
  }
}

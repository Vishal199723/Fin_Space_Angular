import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderProductsService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  getserviceproducts() {
    return this.http.get(this._urls.weburl + "/api/ServiceProviderProducts/GetServiceProviderproducts");
  } 
  getservicesdata() {
    return this.http.get(this._urls.weburl + "/api/ServiceProviderProducts/GetAllServiceProvider");
  }
 
  deleteserviceproductdata(id:number){
    return this.http.get(this._urls.weburl +"/api/ServiceProviderProducts/DeleteServiceProviderData/"+ id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { ProductVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveproduct(userRole: ProductVM) {
    return this.http.post(this._urls.weburl + "/api/ProductMaster/PostSaveProduct", userRole);
  }

  getproducts() {
    return this.http.get(this._urls.weburl + "/api/ProductMaster/GetAllProducts");
  }

  UpdateproductRow(id:ProductVM){
    return this.http.post(this._urls.weburl + "/api/ProductMaster/PutProduct" , id);
  }

  deleteproductdata(id:number){
    return this.http.get(this._urls.weburl +"/api/ProductMaster/DeleteProductData/"+ id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { SpsubproductVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class SubProductMasterService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savesubproduct(subproduct: SpsubproductVM) {
    return this.http.post(this._urls.weburl + "/api/SpSubproducts/PostSaveSubproducts", subproduct);
  }


  getsubproducts() {
    return this.http.get(this._urls.weburl + "/api/SpSubproducts/GetAllSubproducts");
  } 
  getloantypesdata(id){
    return this.http.get(this._urls.weburl + "/api/SpSubproducts/Getloanproductdata/" + id);
  }
  UpdatesubproductRow(id:SpsubproductVM){
    return this.http.post(this._urls.weburl + "/api/SpSubproducts/PutSubproducts" , id);
  }

  deletesubproductdata(id:number){
    return this.http.get(this._urls.weburl +"/api/SpSubproducts/DeleteSubproductsData/"+ id);
  }
}

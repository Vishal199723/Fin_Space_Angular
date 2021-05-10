import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { Menumaster } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class MenumasterService {
  constructor(private http:HttpClient, private _urls: AppGlobals) { }
  saveMenuMaster(data:Menumaster){
    return this.http.post(this._urls.weburl +"/api/MenuMaster/PostSavemenu",data);
  }

  getMenuMasterData(){
    return this.http.get(this._urls.weburl +"/api/MenuMaster/GetAllmenus");
  }
  deleteMenuMaster(id:number){
    return this.http.get(this._urls.weburl +"/api/MenuMaster/DeletemenuData/"+ id);
  }
  UpdateMenuMaster(data:Menumaster){
    return this.http.post(this._urls.weburl +"/api/MenuMaster/Putmenu",data);
  }
}

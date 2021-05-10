import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { movableVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class MovableassetService {


  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savemovableasset(movableasset: movableVM) {
    return this.http.post(this._urls.weburl + "/api/Movableasset/PostSaveMovableasset", movableasset);
  }

  getmovableassets() {
    return this.http.get(this._urls.weburl + "/api/Movableasset/GetAllMovableasset");
  }

  UpdatemovableassetRow(id:movableVM){
    return this.http.post(this._urls.weburl + "/api/Movableasset/PutMovableasset" , id);
  }

  deleteassetdata(id:number){
    return this.http.get(this._urls.weburl +"/api/Movableasset/DeleteMovableasset/"+ id);
  }
}

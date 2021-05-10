import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateVM } from 'src/app/ViewModels/StateVM';

@Injectable({
  providedIn: 'root'
})
export class StateService {
 //readonly rootUrl = "https://haspit.com/haspitapi";
 readonly rootUrl = "https://haspit.com/haspitapi";

  //readonly rootUrl = "http://localhost/haspitusrmapi";

  constructor(private http: HttpClient) { }
  saveUserState(state: StateVM) {
    return this.http.post(this.rootUrl + "/api/StateMaster/PostSaveState", state);
  }

  getStates() {
    return this.http.get(this.rootUrl + "/api/StateMaster/GetStates");
  }

  UpdateStateRow(id:StateVM){
    return this.http.post(this.rootUrl + "/api/StateMaster/PutState" , id);
  }

  deleteStatedata(id:number){
    return this.http.get(this.rootUrl +"/api/StateMaster/DeleteState/"+ id);
  }
}

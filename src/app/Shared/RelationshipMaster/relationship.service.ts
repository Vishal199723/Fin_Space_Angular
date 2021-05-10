import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { relationshipVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {


  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saverelationship(relationship: relationshipVM) {
    return this.http.post(this._urls.weburl + "/api/Relationship/PostSaveRelationship", relationship);
  }

  getrelationships() {
    return this.http.get(this._urls.weburl + "/api/Relationship/GetAllRelationships");
  }

  UpdaterelationshipRow(id:relationshipVM){
    return this.http.post(this._urls.weburl + "/api/Relationship/PutRelationship" , id);
  }

  deleteRelationsdata(id:number){
    return this.http.get(this._urls.weburl +"/api/Relationship/DeleteRelationshipData/"+ id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { workspanVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class ProjectWorkSpanService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveprojectwork(projectwork: workspanVM) {
    return this.http.post(this._urls.weburl + "/api/ProjectWorkSpan/PostSaveWorkSpan", projectwork);
  }

  getprojectworks() {
    return this.http.get(this._urls.weburl + "/api/ProjectWorkSpan/GetAllWorkSpan");
  }

  UpdateprojectworkRow(id:workspanVM){
    return this.http.post(this._urls.weburl + "/api/ProjectWorkSpan/PutWorkSpan" , id);
  }

  deleteworkspandata(id:number){
    return this.http.get(this._urls.weburl +"/api/ProjectWorkSpan/DeleteWorkSpanData/"+ id);
  }
}

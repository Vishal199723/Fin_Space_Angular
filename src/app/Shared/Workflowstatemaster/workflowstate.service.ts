import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { workflowstatetVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class WorkflowstateService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveworkflowstate(workflowstate: workflowstatetVM) {
    return this.http.post(this._urls.weburl + "/api/Workflowstate/PostSaveWorkflowstate", workflowstate);
  }

 
  getworkflowstates() {
    return this.http.get(this._urls.weburl + "/api/Workflowstate/GetAllWorkflowstate");
  } 

  UpdateworkflowstateRow(id:workflowstatetVM){
    return this.http.post(this._urls.weburl + "/api/Workflowstate/PutWorkflowstate" , id);
  }

  deleteworkflowstatedata(id:number){
    return this.http.get(this._urls.weburl +"/api/Workflowstate/DeleteWorkflowstateData/"+ id);
  }
}

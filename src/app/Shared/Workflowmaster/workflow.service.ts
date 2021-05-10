import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { workflowVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveworkflow(workflow: workflowVM) {
    return this.http.post(this._urls.weburl + "/api/WorkflowMaster/PostSaveWorkflows", workflow);
  }

  getworkflows() {
    return this.http.get(this._urls.weburl + "/api/WorkflowMaster/GetAllWorkflows/");
  }

  UpdateworkflowRow(id:workflowVM){
    return this.http.post(this._urls.weburl + "/api/WorkflowMaster/PutWorkflows" , id);
  }

  deleteWorkflowsdata(id:number){
    return this.http.get(this._urls.weburl +"/api/WorkflowMaster/DeleteWorkflowsData/"+ id);
  }
}

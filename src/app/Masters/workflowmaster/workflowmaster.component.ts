import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { WorkflowService } from 'src/app/Shared/Workflowmaster/workflow.service';
import { workflowVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-workflowmaster',
  templateUrl: './workflowmaster.component.html',
  styleUrls: ['./workflowmaster.component.css']
})
export class WorkflowmasterComponent implements OnInit {
  Workflows: any;
  wid:any;
  workfolwname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  workfolwdesc:string;
  constructor(private messageService: MessageService,private workflowservice: WorkflowService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetWorkflows();
    this.workfolwname = "";
    this.roleDesc = "";
  }
  Updateworkflow(form: NgForm) {
    this.spinner.show();
    const inputRequest1: workflowVM = {
      WorkflowMasterId: this.wid ,
      WorkflowName: form.controls["workfolwname"].value,
      WorkflowDescription: form.controls["workfolwdesc"].value,
      HostId:"",
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      
    }
    this.workflowservice.UpdateworkflowRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetWorkflows();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetWorkflows();
          this.spinner.hide();
        }
      }
    );
  }
  SaveworkflowD(form: NgForm) {
    this.spinner.show();
    const inputRequest: workflowVM = {
      WorkflowMasterId: 0,
      WorkflowName: form.controls["workfolwname"].value,
      WorkflowDescription: form.controls["workfolwdesc"].value,
      HostId:"",
      CreatedBy:"",
      CreatedOn:"",
 
    }
    this.workflowservice.saveworkflow(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetWorkflows();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetWorkflows();
          this.spinner.hide();
        }
      }
    );
  }
  GetWorkflows() {
    this.spinner.show();
    this.workflowservice.getworkflows().subscribe((response: any) => {
      this.Workflows = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.wid = data.workflowMasterId;
    this.workfolwname = data.workflowName;
    this.workfolwdesc = data.workflowDescription;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.workfolwname != "") {
      this.workfolwname = "";
    }
  }
  deleteWorkflows(data:any){
    this.rolid = data.workflowMasterId;
  }
  deleteWorkflowsRow(){  
    this.spinner.show();
      this.workflowservice.deleteWorkflowsdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetWorkflows();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetWorkflows();
          this.spinner.hide();
          } 
        });
    }

}


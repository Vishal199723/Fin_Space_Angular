import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { WorkflowService } from 'src/app/Shared/Workflowmaster/workflow.service';
import { WorkflowstateService } from 'src/app/Shared/Workflowstatemaster/workflowstate.service';
import { workflowstatetVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-workflowstatemaster',
  templateUrl: './workflowstatemaster.component.html',
  styleUrls: ['./workflowstatemaster.component.css']
})
export class WorkflowstatemasterComponent implements OnInit {
  workflowstates: any;
  staid:any;
  workstatename: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;

  Serviceid: any;
  ServieTypeList: any;
  loansList: any;
  dataList: any;
  lid: any;
  workstatedesc:any;
  workid: number;
  RolesList: any;
  roleid: any;
  Workflows: any;
  constructor(private messageService: MessageService,private workflowservice: WorkflowService,private roleservice: RoleService, private Wkstateservice: WorkflowstateService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getworkflowstates();
    this.GetRoles();
    this. GetWorkflowdata();
    this.workstatename = "";
    this.roleDesc = "";

  }

  onSelectworkflow(data:any){
    this.workid = data
  }
  GetService(id) {
    for (let index = 0; index < this.ServieTypeList.length; index++) {
      if (this.ServieTypeList[index].servieTypeId == id) {
        return this.ServieTypeList[index].serviceName;
      }
    }
  }
  GetRoles() {
    this.spinner.show();
    this.roleservice.getUserRoles().subscribe((Data: any) => {  
      this.RolesList = Data;
      this.spinner.hide();
    })
  }
  GetRoleName(id) {
    for (let index = 0; index < this.RolesList.length; index++) {
      if (this.RolesList[index].id == id) {
        return this.RolesList[index].roleName;
      }
    }
  }
  GetWorkflowdata() {
    this.spinner.show();
    this.workflowservice.getworkflows().subscribe((response: any) => {
      this.Workflows = response;
      this.spinner.hide();
    });
  }
  Getworkflow(id) {
    for (let index = 0; index < this.Workflows.length; index++) {
      if (this.Workflows[index].workflowMasterId == id) {
        return this.Workflows[index].workflowName;
      }
    }
  }
  onSelectRole(data: any) {
    this.roleid = data
  }

  Updateworkflowstate(form: NgForm) {
    this.spinner.show();
    const inputRequest1: workflowstatetVM = {
      WorkflowId: this.workid ,
      RoleId:this.roleid,
      WorkflowStateId:this.staid,
      WorkflowStateName: form.controls["workstatename"].value,
      WorkflowStateDescription: form.controls["workstatedesc"].value,
      HostId:"",
    CreatedBy:"",
    CreatedOn:"",
  
    }
    this.Wkstateservice.UpdateworkflowstateRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getworkflowstates();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getworkflowstates();
          this.spinner.hide();
        }
      }
    );
  }
  SaveworkflowstateD(form: NgForm) {
    this.spinner.show();
    const inputRequest: workflowstatetVM = {
      WorkflowStateId:0,
      WorkflowId: this.workid ,
      RoleId:this.roleid,    
      WorkflowStateName: form.controls["workstatename"].value,
      WorkflowStateDescription: form.controls["workstatedesc"].value,
      HostId:null,
      CreatedBy:"",
      CreatedOn:"",
     
    }
    this.Wkstateservice.saveworkflowstate(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getworkflowstates();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getworkflowstates();
          this.spinner.hide();
        }
      }
    );
  }
  Getworkflowstates() {
    this.spinner.show();
    this.Wkstateservice.getworkflowstates().subscribe((response: any) => {
      this.workflowstates = response;
      this.spinner.hide();
    });
  }
  editworkflowstate(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.staid = data.workflowStateId;
    this.workid = data.workflowId;
    this.roleid = data.roleId;
    this.workstatename = data.workflowStateName;
    this.workstatedesc = data.workflowStateDescription;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.workstatename != "") {
      this.workstatename = "";
    }
  }

  deleteworkflowstate(data:any){
    this.rolid =  data.workflowStateId;
  }
  deleteworkflowstateRow(){  
    this.spinner.show();
      this.Wkstateservice.deleteworkflowstatedata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getworkflowstates();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getworkflowstates();
          this.spinner.hide();
          } 
        });
      }
    }
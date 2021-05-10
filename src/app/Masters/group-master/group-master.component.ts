import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { NgForm } from '@angular/forms';
import { GroupMasterService } from 'src/app/Shared/GroupMaster/group-master.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-group-master',
  templateUrl: './group-master.component.html',
  styleUrls: ['./group-master.component.css']
})
export class GroupMasterComponent implements OnInit {
  Roles: any;
  roleid: any;
  notify: string;
  dismissalert: boolean;
  showSave: boolean=false;
  showUpdate: boolean=false;
  deleteid: any;
  GroupName: string;
  GroupDesc: string;
  groupid: any;
  Groups: any;
  p:number=1
  constructor(private messageService: MessageService,private spinner:NgxSpinnerService,private roleService:RoleService,private groupservice:GroupMasterService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetRoles();
    this.GetGroups();
    this.GroupName="";
    this.GroupDesc="";
  }
  GetRoles() {
    this.spinner.show();
    this.roleService.getUserRoles().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  } 
   GetGroups() {
    this.spinner.show();
    this.groupservice.getGroups().subscribe((response: any) => {
      this.Groups = response;
      this.spinner.hide();
    });
  }
  onSelectRole(id){
    this.roleid=id;
  }
  GetRoleName(id){
    for (let index = 0; index < this.Roles.length; index++) {
      if(this.Roles[index].id==id){
       return this.Roles[index].roleName;
      }
  }
  }
  UpdateGroups(form: NgForm) {
    this.spinner.show();
    const inputRequest1 = {
      GroupId: this.groupid ,
      GroupName: form.controls["GroupName"].value,
      GroupDesc: form.controls["GroupDesc"].value,
      RoleId:this.roleid,

    }
    this.groupservice.UpdateGroupRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "Group Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetGroups();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroups();
          this.spinner.hide();
        }
      }
    );
  }
  SaveGroups(form: NgForm) {
    this.spinner.show();
    const inputRequest = {
      Id: 0,
      RoleId:this.roleid,
      GroupName: form.controls["GroupName"].value,
      GroupDesc: form.controls["GroupDesc"].value,
    }
    this.groupservice.saveGroups(inputRequest).subscribe(
      (data: any) => {
        if (data =="success") {
          this.notify = "Group Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroups();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroups();
          this.spinner.hide();
        }
      }
    );
  }

  editGroup(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.groupid = data.groupId
    this.roleid = data.roleId;
    this.GroupName = data.groupName;
    this.GroupDesc = data.groupDesc;

  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.GroupName != "") {
      this.GroupName = "";
    }
    if (this.GroupDesc != "") {
      this.GroupDesc = "";
    }
  }
  deleteGroup(data:any){
    this.deleteid = data.groupId;
  }
  deleteGroupRow(){  
    this.spinner.show();
      this.groupservice.deleteGroupdata(this.deleteid).subscribe(
        (data: any) => {
          if (data == "success") {
            this.notify = "Group Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetGroups();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroups();
          this.spinner.hide();
          } 
        });
    }
}

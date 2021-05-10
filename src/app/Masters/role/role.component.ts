import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRole } from 'src/app/ViewModels/UserRole';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  userRole: UserRole;
  Roles: any;
  roleid:any;
  roleName: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private roleService: RoleService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetRoles();
    this.roleName = "";
    this.roleDesc = "";
  }
  UpdateUserRole(form: NgForm) {
    this.spinner.show();
    const inputRequest1: UserRole = {
      Id: this.roleid ,
      RoleName: form.controls["roleName"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.roleService.UpdateUserRoleRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "Role Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRoles();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRoles();
          this.spinner.hide();
        }
      }
    );
  }
  SaveUserRoleD(form: NgForm) {
    this.spinner.show();
    const inputRequest: UserRole = {
      Id: 0,
      RoleName: form.controls["roleName"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.roleService.saveUserRole(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Role Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRoles();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRoles();
          this.spinner.hide();
        }
      }
    );
  }
  GetRoles() {
    this.spinner.show();
    this.roleService.getUserRoles().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.roleid = data.id;
    this.roleName = data.roleName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.roleName != "") {
      this.roleName = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.roleService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Role Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRoles();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRoles();
          this.spinner.hide();
          } 
        });
    }

}

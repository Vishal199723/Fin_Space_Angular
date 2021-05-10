import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenumasterService } from 'src/app/Shared/MenuMaster/menumaster.service';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { Menumaster } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-menu-master',
  templateUrl: './menu-master.component.html',
  styleUrls: ['./menu-master.component.css']
})
export class MenuMasterComponent implements OnInit {

    MenusList: any;
    MenuId: any; ocpid: any;
    updmenu: boolean;
    svemenu: boolean;
    RolesList: any; roleid: any;
    MenuFileName: any; MenuName: any;
    MenuURL: any; ParentMenuId: any;
    ccid: any; MenuIdentity: any;
    menuid: any;
    p: number = 1;
    public dismissalert = false;
    notify: string
    constructor(private menumasterService: MenumasterService, private roleservice: RoleService, private spinner: NgxSpinnerService) { }
  
    ngOnInit() {
      this.MenuMasters();
      this.GetRoles();
      this.MenuId = "";
      this.MenuFileName = "";
      this.MenuName = "";
      this.MenuURL = "";
      this.ParentMenuId = "";
      this.svemenu = true;
    }
    MenuMasters() {
      //this.spinner.show();
  
      this.menumasterService.getMenuMasterData().subscribe((Data: Menumaster[]) => {
        this.spinner.hide();
        this.MenusList = Data;
  
      })
    }
  
    GetRoles() {
      this.spinner.show();
      this.roleservice.getUserRoles().subscribe((Data: any) => {
        this.spinner.hide();
        this.RolesList = Data;
  
      })
    }
  
    onSelectRole(data: any) {
      this.roleid = data
    }
  
    addMenu() {
      this.svemenu = true;
      this.updmenu = false;
      this.ccid = "";
      this.roleid = "";
      if (this.MenuFileName != "") {
        this.MenuFileName = "";
        this.MenuFileName = "";
        this.MenuName = "";
        this.MenuURL = "";
        this.ParentMenuId = "";
        this.MenuId = "";
        this.roleid = "";
      }
    }
  
    editMenu(data:any) {
      this.svemenu = false;
      this.updmenu = true;
      this.MenuFileName = data.menuFileName
      this.MenuId = data.menuID
      this.MenuIdentity = data.menuIdentity
      this.MenuName = data.menuName
      this.MenuURL = data.menuURL
      this.ParentMenuId = data.parent_MenuID
      this.ccid = this.GetRoleName(data.User_Role);
      this.roleid = data.User_Role;
    }
  
    GetRoleName(cid: any): any {
      for (let index = 0; index < this.RolesList.length; index++) {
        if (cid == this.RolesList[index].RoleId) {
          return this.RolesList[index];
        }
      }
    }
  
    SaveMenuK(form: NgForm) {
      this.spinner.show();
  
      const inputRequest: Menumaster = {
        MenuIdentity: 0,
        MenuID: form.controls["MenuId"].value,
        MenuFileName: form.controls["MenuFileName"].value,
        MenuName: form.controls["MenuName"].value,
        MenuURL: form.controls["MenuURL"].value,
        Parent_MenuID: form.controls["ParentMenuId"].value,
        USE_YN: true,
        User_Role: this.roleid,
        CreatedBy: "",
        CreatedOn: "",
        ModifiedBy: "",
        ModifiedOn: "",
      }
      this.menumasterService.saveMenuMaster(inputRequest).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Saved Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.MenuMasters();
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.MenuMasters();
            this.spinner.hide();
          }
        });
    }
  
  
    UpdateMenu(form: NgForm) {
      this.spinner.show();
  
      const inputRequest1: Menumaster = {
        MenuIdentity: this.MenuIdentity,
        MenuID: form.controls["MenuId"].value,
        MenuFileName: form.controls["MenuFileName"].value,
        MenuName: form.controls["MenuName"].value,
        MenuURL: form.controls["MenuURL"].value,
        Parent_MenuID: form.controls["ParentMenuId"].value,
        USE_YN: true,
        User_Role: this.roleid,
        CreatedBy: "",
        CreatedOn: "",
        ModifiedBy: "",
        ModifiedOn: "",
      }
      this.menumasterService.UpdateMenuMaster(inputRequest1).subscribe(
        (data: any) => {
          if (data == "success") {
            this.notify = "Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.MenuMasters();
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.MenuMasters();
            this.spinner.hide();
  
          }
        }
      );
    }
  
    deleteMenu(data:any) {
      this.menuid = data.menuIdentity;
    }
  
  
    deletemenudata() {
      this.spinner.show();
  
      this.menumasterService.deleteMenuMaster(this.menuid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRoles();
            this.MenuMasters();
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.MenuMasters();
            this.spinner.hide();
          }
        });
    }
  }
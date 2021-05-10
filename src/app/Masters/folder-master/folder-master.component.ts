import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { FolderMasterService } from 'src/app/Shared/FolderMaster/folder-master.service';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { FolderMaster } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-folder-master',
  templateUrl: './folder-master.component.html',
  styleUrls: ['./folder-master.component.css']
})
export class FolderMasterComponent implements OnInit {

  FolderList: any[];
  savefolder: boolean;
  updatefolder: boolean;
  FolderName: string;
  Role: string;
  FolderId: any;
  fid: any;
  Foldername: string;

  p: number = 1
  public dismissalert = false;
  notify: string
  RoleList: any;
  roleid: any;
  constructor(private foldermasterservice: FolderMasterService, private spinner: NgxSpinnerService, private roleService: RoleService) { }

  ngOnInit() {
    this.Folders();
    this.Roles();
    this.Foldername = "";
    this.Role = "";
    this.savefolder = true;
  }
  Folders() {
    this.spinner.show();
    this.foldermasterservice.getAllFolders().subscribe((Data: FolderMaster[]) => {
      this.FolderList = Data;
      this.spinner.hide();
    });
  }
  onSelectRole(id) {
    this.roleid = id
  }

  ClickAddFolder() {
    this.savefolder = true;
    this.updatefolder = false;
    if (this.Foldername != "") {
      this.Foldername = "";
      this.Role = "";
    }
  }

  ClickEditFolder(data:any) {
    this.savefolder = false;
    this.updatefolder = true;
    this.Foldername = data.folderName;
    this.FolderId = data.id;
    this.Role =data.role;
  }

  Roles() {
    this.spinner.show();
    this.roleService.getUserRoles().subscribe((Data: any) => {
      this.RoleList = Data;
      this.spinner.hide();
    });
  }
  GetRole(id){
    for (let index = 0; index < this.RoleList.length; index++) {
      if(this.RoleList[index].id ==id){
        return this.RoleList[index].roleName;
      }
    }
  }
  SaveNewFolder(form: NgForm) {
    const inputRequest: FolderMaster = {
      Id: 0,
      FolderName: form.controls["Foldername"].value,
      Role: this.roleid,
      CreatedBy: "",
      CreatedOn: "",
    
    }
    this.spinner.show();
    this.foldermasterservice.saveFolder(inputRequest).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Folder Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Folders();
          this.spinner.hide();

        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Folders();
          this.spinner.hide();
        }
      });
  }

  UpdateNewFolder(form: NgForm) {
    const inputRequest1: FolderMaster = {
      Id: this.FolderId,
      FolderName: form.controls["Foldername"].value,
      Role: this.roleid,
      CreatedBy: "",
      CreatedOn: "",
 
    }
    this.spinner.show();
    this.foldermasterservice.UpdateFolder(inputRequest1).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Folder Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Folders();
          this.spinner.hide();

        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Folders();
          this.spinner.hide();
        }
      });
  }

  ClickDeleteFolder(data:any) {
    this.fid = data.id;
  }

  deletefolder() {
    this.spinner.show();
    this.foldermasterservice.deleteFolder(this.fid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Folder Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Folders();
          this.spinner.hide();

        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Folders();
          this.spinner.hide();
        }
      });
  }
}

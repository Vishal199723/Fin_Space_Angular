import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupMemberService } from 'src/app/Shared/GroupMember/group-member.service';
import { GroupMasterService } from 'src/app/Shared/GroupMaster/group-master.service';
import { NgForm } from '@angular/forms';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { UserService } from 'src/app/Shared/UserMaster/user.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-group-member-master',
  templateUrl: './group-member-master.component.html',
  styleUrls: ['./group-member-master.component.css']
})
export class GroupMemberMasterComponent implements OnInit {
  showSave: boolean;
  showUpdate: boolean;
  notify: string;
  dismissalert: boolean;
  Groups: any;
  GroupMembers: any;
  groupid: any;
  Users: any;
  grpmemberid: any;
  userid: any;
  deleteid: any;
  Roles: any;
  RoleId: any;
  rolename: any;
  createdon: any;
  p: number = 1
  UserList: any;
  constructor(private messageService: MessageService,private spinner: NgxSpinnerService, private groupmemeberservice: GroupMemberService, private groupservice: GroupMasterService,
    private roleservice: RoleService, private userservice: UserService) { 
      this.messageService.sendSession('true');

    }

  ngOnInit() {
    this.GetGroups();
    this.GetRoles();
    this.GetGroupMembers();
    this.GetAllUsers();
    this.groupid = null;
    this.RoleId = null;
    this.userid = null;
  }
  GetGroups() {
    this.spinner.show();
    this.groupservice.getGroups().subscribe((response: any) => {
      this.Groups = response;
      this.spinner.hide();
    });
  }
  GetRoles() {
    this.spinner.show();
    this.roleservice.getUserRoles().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  }
  GetAllUsers() {
    this.spinner.show();
    this.userservice.getAllUsers().subscribe((response: any) => {
      this.UserList = response;
      this.spinner.hide();
    });
  }
  GetGroupMembers() {
    this.spinner.show();
    this.groupmemeberservice.getGroupMembers().subscribe((response: any) => {
      this.GroupMembers = response;
      this.spinner.hide();
    });
  }
  GetUserName(id) {
    // for (let i = 0; i < this.UserList.length; i++) {
    //   if (this.UserList[i].userId == id) {
    //     return this.UserList[i].userName
    //   }

    // }
  }
  GetUsersByRole(rid) {
    this.spinner.show();
    this.groupmemeberservice.getUserbyRole(rid).subscribe((response: any) => {
      this.Users = response;
      this.spinner.hide();
    });
  }
  GetRoleName(id) {
    for (let index = 0; index < this.Roles.length; index++) {
      if (this.Roles[index].id == id) {
        return this.Roles[index].roleName;
      }
    }
  }
  GetGroupName(id) {
    for (let i = 0; i < this.Groups.length; i++) {
      if (this.Groups[i].groupId == id) {
        return this.Groups[i].groupName
      }

    }
  }
  onSelectGroup(id) {
    this.groupid = id;
    for (let i = 0; i < this.Groups.length; i++) {
      if (this.Groups[i].groupId == id) {
        this.RoleId = this.Groups[i].roleId
        break;
      }

    }
    for (let index = 0; index < this.Roles.length; index++) {
      if (this.Roles[index].id == this.RoleId) {
        this.rolename = this.Roles[index].roleName;
        break;
      }
    }
    this.GetUsersByRole(this.RoleId);
  }
  onSelectUser(id) {
    this.userid = id;
  }
  UpdateGroupMembers(form: NgForm) {
    this.spinner.show();
    const inputRequest1 = {
      GroupMemberId: this.grpmemberid,
      GroupId: this.groupid,
      UserId: this.userid,
      RoleId: this.RoleId,
      CreatedOn: this.createdon
    }
    this.groupmemeberservice.UpdateGroupMembersRow(inputRequest1).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Group Member Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroupMembers();
          this.spinner.hide();
          this.groupid = null;
          this.RoleId = null;
          this.userid = null;
        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroupMembers();
          this.spinner.hide();
        }
      }
    );
  }
  SaveGroupMembers(form: NgForm) {
    this.spinner.show();
    const inputRequest = {
      Id: 0,
      GroupId: this.groupid,
      UserId: this.userid,
      RoleId: this.RoleId,

    }
    this.groupmemeberservice.saveGroupMembers(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Group Member Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroupMembers();
          this.spinner.hide();
          this.groupid = null;
          this.RoleId = null;
          this.userid = null;
        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroupMembers();
          this.spinner.hide();
        }
      }
    );
  }

  editGroupmember(data: any) {
    this.showSave = false;
    this.showUpdate = true;
    this.groupid = data.groupId;
    this.grpmemberid = data.groupMemberId
    this.userid = data.userId;
    this.createdon = data.createdOn;
    for (let i = 0; i < this.Groups.length; i++) {
      if (this.Groups[i].groupId == this.groupid) {
        this.RoleId = this.Groups[i].roleId
        break;
      }

    }
    for (let index = 0; index < this.Roles.length; index++) {
      if (this.Roles[index].id == this.RoleId) {
        this.rolename = this.Roles[index].roleName;
        break;
      }
    }
    this.GetUsersByRole(this.RoleId);
  }
  addClick() {
    this.showSave = true;
    this.showUpdate = false;
    if (this.userid != null) {
      this.userid = null;
    }
    if (this.groupid != null) {
      this.groupid = null;
    }
  }
  deleteGroupMember(data: any) {
    this.deleteid = data.groupMemberId;
  }
  deleteGroupMembersRow() {
    this.spinner.show();
    this.groupmemeberservice.deleteGroupMembersdata(this.deleteid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Group Member Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroupMembers();
          this.spinner.hide();
          this.groupid = null;
          this.RoleId = null;
          this.userid = null;
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGroupMembers();
          this.spinner.hide();
        }
      });
  }
}

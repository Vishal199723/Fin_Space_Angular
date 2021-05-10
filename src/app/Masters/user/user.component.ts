import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Shared/RoleMaster/role.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/Shared/UserMaster/user.service';
import { UserManagement } from 'src/app/ViewModels/UserManagement';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Signup } from 'src/app/ViewModels/SignupVM';
import { DatePipe } from '@angular/common';
import { EmailValidation } from 'src/app/ViewModels/EmailValidation';
import { SignupService } from 'src/app/Shared/Signup/signup.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  RoleList: any;
  selectedrole: any;
  UserList: any;
  p: number = 1;
  showSave: boolean;
  showUpdate: boolean;
  fname: any;
  lname: any;
  email: any;
  staddress: string;
  staddress2: string;
  city: string;
  state: string;
  phnno: string;
  username: string;
  userid: number;
  Image: any;
  roleid: number;
  dismissalert: boolean;
  notify: string;
  selectedfile: any;
  uid: any;
  files1: any;
  SelectedFiles: string;
  pincode: string;
  DateTime: Date;
  validateemail: any;
  mailresult: any;
  validmail: boolean;
  DistrictList: any;
  validatephnumber: any;
  mobileresult: any;
  validmobile: boolean;
  AllRights: any;
  selectedItems: any;
  dropdownSettings: IDropdownSettings;

  constructor(private messageService: MessageService,private spinner: NgxSpinnerService, private roleService: RoleService, private userservice: UserService,
    private httpService: HttpClient, private datepipe: DatePipe, private signupservice: SignupService) { 
      this.messageService.sendSession('true');
      this.GetRightTypes();

    }

  ngOnInit() {
    this.Roles();
    this.Users();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'assignRigntType',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search',
      noDataAvailablePlaceholderText: 'No data available',
    }
  }
  GetRightTypes() {
    this.spinner.show();
    this.userservice.getRights().subscribe((data: any) => {
      this.AllRights = data;
      this.spinner.hide();
    })
  }
  Roles() {
    this.spinner.show();
    this.roleService.getUserRoles().subscribe((Data: any) => {
      this.RoleList = Data;
      this.spinner.hide();
    });
  }
  Users() {
    this.spinner.show();
    this.userservice.getAllUsers().subscribe((Data: any) => {
      this.UserList = Data;
      this.spinner.hide();
    });
  }
  onItemSelect(item: any) {
    var aa=this.selectedItems;
  }
  onSelectAll(items: any) {
    var aa=this.selectedItems;

  }
  onItemDeSelectAll(items: any) {
    var aa=this.selectedItems;

  }
  onItemDeSelect(items) {
    var aa=this.selectedItems;

  }
  // Districts() {
   
  //   this.userservice.getDistricts().subscribe((Data: any) => {
  //     this.DistrictList = Data;
  //   });
  // }
  onSelectRole(id) {
    this.roleid = id
  }
  Validatemail() {
    this.validateemail = this.email;
    this.spinner.show();
    const data: EmailValidation = {
      Email: this.validateemail
    }
    this.signupservice.validateemail(data).subscribe((Data: any) => {
      this.mailresult = Data;
      if (this.mailresult == "exist") {
        this.validmail = true;
      }
      else {
        this.validmail = false;

      }
      this.spinner.hide();

    })
  }
  addUser() {
    this.showSave = true;
    this.showUpdate = false;
    this.roleid = null;
    this.fname = null;
    this.lname = null;
    this.email = null;
    this.staddress = "";
    this.staddress2 = "";
    this.city = "";
    this.state = "";
    this.phnno = "";
    this.username = "";
    this.pincode = "";
  }
  //edit User
  EditUser(data: any) {
    this.showSave = false;
    this.showUpdate = true;
    this.userid = data.userId;
    this.fname = data.firstName;
    this.lname = data.lastName;
    this.username = data.userName;
    this.email = data.email;
    this.phnno = data.phoneNumber;
    this.Image = data.userImage;
    this.roleid = data.role;
    this.city = data.city;
    this.state = data.state;
    this.pincode = data.pincode
    this.selectedItems=data.userRights

  }
  getalldata() {
    var pin = this.pincode;
    this.httpService.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      console.log(data);
      if(data[0].Status == "404"){
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if(data[0].Message.includes('Number of pincode')){
        this.state = data[0].PostOffice[0].State;
        this.city = data[0].PostOffice[0].Block;
      }
      else{
        alert("Enter valid Pincode");
      }
    })
  }
  Validatephnumber(){
    this.validatephnumber = this.phnno;
    this.spinner.show();
    const data: EmailValidation = {
      Email: this.validatephnumber
    }
    this.signupservice.validatemobile(data).subscribe((Data: any) => {
      this.spinner.hide();
      this.mobileresult = Data;
      if (this.mobileresult == "exist") {
        this.validmobile = true;
      }
      else {
        this.validmobile = false;

      }
      this.spinner.hide();

    })
  }
  //Update User
  UpdateUser(form: NgForm) {
    this.spinner.show();
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    if(this.selectedrole==null || this.selectedrole==undefined){
      this.selectedrole=this.roleid
    }
    const inputRequest = {
      UserId: this.userid,
      FirstName: this.fname,
      LastName: this.lname,
      Email: this.email,
      StreetaddressLineOne: this.staddress,
      StreetaddressLineTwo: this.staddress2,
      City: this.city,
      Pincode: this.pincode,
      State: this.state,
      PhoneNumber: this.phnno,
      UserName: this.username,
      Password: null,
      CreatedOn:latest_date,
      Role:this.selectedrole,
      UserRights:this.selectedItems

    }
  
    this.userservice.UpdateUserRow(inputRequest).subscribe(
      (data: any) => {
          if (data =="ok") {
            this.notify = "User Details Updated Succesfully"
            this.selectedItems=[]
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Users();
            this.Roles();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          this.selectedItems=[]
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Roles();
          this.Users();
          this.spinner.hide();
        }
      }
    );
  }
  onChange(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    console.log(this.files1);
    fileslist = this.files1[0];

    this.SelectedFiles = fileslist;

  }
  //save User
  SaveUser(form: NgForm) {
    this.spinner.show();
    const frmData = new FormData();

    const inputRequest = {
      FirstName: this.fname,
      LastName: this.lname,
      Email: this.email,
      StreetaddressLineOne: this.staddress,
      StreetaddressLineTwo: this.staddress2,
      City: this.city,
      Pincode: this.pincode,
      State: this.state,
      PhoneNumber: this.phnno,
      UserName: this.username,
      Password: null,
      Role: this.roleid,
      UserRights:this.selectedItems

    }
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    frmData.append("RegData", JSON.stringify(inputRequest));
    frmData.append("CreatedOn", latest_date);

    frmData.append("logo", this.SelectedFiles);
    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/PostSaveUserDetails/', frmData).subscribe(
      (data: any) => {
        this.spinner.hide();
        if (data != null) {
          this.notify = "User Saved Succesfully"
          this.selectedItems=[]
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Users();
          this.spinner.hide();

        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          this.selectedItems=[]
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Users();
          this.spinner.hide();
        }
      }
    );
  }
  //delete User
  deleteUser(data: any) {
    this.uid = data.id;
  }
  deleteUserRow() {
    this.spinner.show();
    this.userservice.deleteUser(this.uid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "User Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Users();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Users();
          this.spinner.hide();
        }
      });
  }
  GetRole(id){
    for (let index = 0; index < this.RoleList.length; index++) {
      if(this.RoleList[index].id ==id){
        return this.RoleList[index].roleName;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssignRightService } from 'src/app/Shared/AssignRightMaster/assign-right.service';

@Component({
  selector: 'app-assign-right-master',
  templateUrl: './assign-right-master.component.html',
  styleUrls: ['./assign-right-master.component.css']
})
export class AssignRightMasterComponent implements OnInit {
  notify: string;
  dismissalert: boolean;
  RightName: string;
  rightid: any;
  createdby: any;
  createdon: any;
  Rights: any;
  showSave: boolean;
  showUpdate: boolean;
  rightName: any;
  deleterightid: any;
  p:number=1
  constructor(private spinner:NgxSpinnerService,private assignrightservice:AssignRightService) { }

  ngOnInit() {
    this.GetRights();
    this.RightName = "";
  }
  UpdateUserRight(form: NgForm) {
    this.spinner.show();
    const inputRequest1 = {
      Id: this.rightid ,
      AssignRigntType: form.controls["rightName"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.assignrightservice.UpdateUserRightRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == 1) {
            this.notify = "Right Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRights();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRights();
          this.spinner.hide();
        }
      }
    );
  }
  SaveUserRight(form: NgForm) {
    this.spinner.show();
    const inputRequest = {
      Id: 0,
      AssignRigntType: form.controls["rightName"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.assignrightservice.saveUserRight(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Right Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRights();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRights();
          this.spinner.hide();
        }
      }
    );
  }
  GetRights() {
    this.spinner.show();
    this.assignrightservice.getUserRights().subscribe((response: any) => {
      this.Rights = response;
      this.spinner.hide();
    });
  }
  editRight(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.rightid = data.id;
    this.rightName = data.assignRigntType;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.rightName != "") {
      this.rightName = "";
    }
  }
  deleteRight(data:any){
    this.deleterightid = data.id;
  }
  deleteRightRow(){  
    this.spinner.show();
      this.assignrightservice.deleteRightdata(this.deleterightid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Right Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRights();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRights();
          this.spinner.hide();
          } 
        });
    }
}

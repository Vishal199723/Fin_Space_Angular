import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRole } from 'src/app/ViewModels/UserRole';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';

import { familytype } from 'src/app/ViewModels/Masters';
import { FamilytypeService } from 'src/app/Shared/FamilytypeMaster/familytype.service';

@Component({
  selector: 'app-familytypemaster',
  templateUrl: './familytypemaster.component.html',
  styleUrls: ['./familytypemaster.component.css']
})
export class FamilytypemasterComponent implements OnInit {

  

  userRole: UserRole;
  Roles: any;
  familyid:any;
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
  familytype: string;
  familyDesc: string;
  family: any;
  constructor(private messageService: MessageService,private familyservice: FamilytypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getfamilytype();
    this.familytype = "";
    this.familyDesc = "";
  }
  updatefamilytype(form: NgForm) {
    this.spinner.show();
    const inputRequest1: familytype = {
      FamilyTypeId: this.familyid ,
      FamilyType: form.controls["familytype"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.familyservice.updatefamilytypeRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getfamilytype();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfamilytype();
          this.spinner.hide();
        }
      }
    );
  }
  savefamilytype(form: NgForm) {
    this.spinner.show();
    const inputRequest: familytype = {
      FamilyTypeId: 0,
      FamilyType: form.controls["familytype"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.familyservice.savefamilytype(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfamilytype();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfamilytype();
          this.spinner.hide();
        }
      }
    );
  }
  Getfamilytype() {
    this.spinner.show();
    this.familyservice.Getfamilytype().subscribe((response: any) => {
      this.family = response;
      this.spinner.hide();
    });
  }
  editfamily(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.familyid = data.familyTypeId;
    this.familytype = data.familyType;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.familytype != "") {
      this.familytype = "";
    }
  }
  deletefamily(data:any){
    this.rolid = data.familyTypeId;
  }
  deletefamilyRow(){  
    this.spinner.show();
      this.familyservice.deletefamilydata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getfamilytype();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfamilytype();
          this.spinner.hide();
          } 
        });
    }

}



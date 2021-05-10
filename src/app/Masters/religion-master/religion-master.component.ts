import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ReligionService } from 'src/app/Shared/ReligionMaster/religion.service';
import { religion } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-religion-master',
  templateUrl: './religion-master.component.html',
  styleUrls: ['./religion-master.component.css']
})
export class ReligionMasterComponent implements OnInit {


  Religion: any;
  relid:any;
  religionname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private religionservice: ReligionService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetReligion();
    this.religionname = "";
    this.roleDesc = "";
  }
  UpdateUserRole(form: NgForm) {
    this.spinner.show();
    const inputRequest1: religion = {
      ReligionId: this.relid ,
      ReligionName: form.controls["religionname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.religionservice.UpdateUserRoleRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetReligion();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetReligion();
          this.spinner.hide();
        }
      }
    );
  }
  SaveUserRoleD(form: NgForm) {
    this.spinner.show();
    const inputRequest: religion = {
      ReligionId: 0,
      ReligionName: form.controls["religionname"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.religionservice.saveUserRole(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetReligion();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetReligion();
          this.spinner.hide();
        }
      }
    );
  }
  GetReligion() {
    this.spinner.show();
    this.religionservice.getUserReligion().subscribe((response: any) => {
      this.Religion = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.relid = data.religionId;
    this.religionname = data.religionName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.religionname != "") {
      this.religionname = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.religionId;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.religionservice.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetReligion();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetReligion();
          this.spinner.hide();
          } 
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ReligionService } from 'src/app/Shared/ReligionMaster/religion.service';
import { maritalstatus } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-maritalstatus-master',
  templateUrl: './maritalstatus-master.component.html',
  styleUrls: ['./maritalstatus-master.component.css']
})
export class MaritalstatusMasterComponent implements OnInit {


  Status: any;
  msid:any;
  statusname: string;
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
    this.GetStatus();
    this.statusname = "";
    this.roleDesc = "";
  }
  UpdateUserRole(form: NgForm) {
    this.spinner.show();
    const inputRequest1: maritalstatus = {
      MaritalStatusId: this.msid ,
      MaritalStatus: form.controls["statusname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.religionservice.Updatemaritalstatus(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetStatus();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStatus();
          this.spinner.hide();
        }
      }
    );
  }
  SaveUserRoleD(form: NgForm) {
    this.spinner.show();
    const inputRequest: maritalstatus = {
      MaritalStatusId: 0,
      MaritalStatus: form.controls["statusname"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.religionservice.savemaritalstatus(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStatus();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStatus();
          this.spinner.hide();
        }
      }
    );
  }
  GetStatus() {
    this.spinner.show();
    this.religionservice.getsatus().subscribe((response: any) => {
      this.Status = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.msid = data.maritalStatusId;
    this.statusname = data.maritalStatus;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.statusname != "") {
      this.statusname = "";
    }
  }
  deleteRole(data:any){
    this.rolid =data.maritalStatusId;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.religionservice.deletestatusdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetStatus();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStatus();
          this.spinner.hide();
          } 
        });
    }

}


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { GoldReasonService } from 'src/app/Shared/GoldReasonMaster/gold-reason.service';
import { GoldReason } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-gold-reason-master',
  templateUrl: './gold-reason-master.component.html',
  styleUrls: ['./gold-reason-master.component.css']
})
export class GoldReasonMasterComponent implements OnInit {

  Roles: any;
  gid:any;
  reasons: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private goldreasonService: GoldReasonService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getgoldreason();
    this.reasons = "";
    this.roleDesc = "";
  }
  Updatereasons(form: NgForm) {
    this.spinner.show();
    const inputRequest1: GoldReason = {
      Id: this.gid ,
      Reasons: form.controls["reasons"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
     
    }
    this.goldreasonService.UpdatereasonsRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getgoldreason();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getgoldreason();
          this.spinner.hide();
        }
      }
    );
  }
  SavereasonsD(form: NgForm) {
    this.spinner.show();
    const inputRequest: GoldReason = {
      Id: 0,
      Reasons: form.controls["reasons"].value,
      CreatedBy:"",
      CreatedOn:"",
      
    }
    this.goldreasonService.savereasons(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getgoldreason();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getgoldreason();
          this.spinner.hide();
        }
      }
    );
  }
  Getgoldreason() {
    this.spinner.show();
    this.goldreasonService.getreasonss().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.gid = data.id;
    this.reasons = data.reasons;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.reasons != "") {
      this.reasons = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.goldreasonService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getgoldreason();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getgoldreason();
          this.spinner.hide();
          } 
        });
    }

}
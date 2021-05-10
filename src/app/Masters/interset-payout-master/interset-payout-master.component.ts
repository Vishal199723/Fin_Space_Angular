import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { DepositTypeService } from 'src/app/Shared/DeposittypeMaster/deposit-type.service';
import { IntersetPayoutService } from 'src/app/Shared/IntersetPayoutMaster/interset-payout.service';
import { Interset } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-interset-payout-master',
  templateUrl: './interset-payout-master.component.html',
  styleUrls: ['./interset-payout-master.component.css']
})
export class IntersetPayoutMasterComponent implements OnInit {

  Roles: any;
  roleid:any;
  Interest: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  did: any;
  deposities: any;
  depoid: any;
  ccid: any;
  constructor(private messageService: MessageService,private depositeService: DepositTypeService,private intersetService: IntersetPayoutService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getdeposits();
    this.Getinterest();
    this.Interest = "";
    this.roleDesc = "";
  }
  onSelectdeposite(data:any){
    this.depoid = +data;
  }
  Updateintersetpayout(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Interset = {
      Id: this.roleid ,
      Deposittype:this.depoid,
      Interestpayout: form.controls["Interest"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.intersetService.UpdateintersetpayoutRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getinterest();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinterest();
          this.spinner.hide();
        }
      }
    );
  }
  Getdeposits() {
    this.spinner.show();
    this.depositeService.getdepositetypes().subscribe((response: any) => {
      this.deposities = response;
      this.spinner.hide();
    });
  }
   
  GetName(id) {
    for (let index = 0; index < this.deposities.length; index++) {
      if (this.deposities[index].id == id) {
        return this.deposities[index].depositetype;
      }
    }
  }
  SaveintersetpayoutD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Interset = {
      Id: 0,
      Deposittype:this.depoid,
      Interestpayout: form.controls["Interest"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.intersetService.saveintersetpayout(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinterest();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinterest();
          this.spinner.hide();
        }
      }
    );
  }
  Getinterest() {
    this.spinner.show();
    this.intersetService.getintersetpayouts().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.roleid = data.id;
    this.Interest = data.interestpayout;
    this.ccid = data.deposittype;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    this.ccid = "";
    if (this.Interest != "") {
      this.Interest = "";

    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.intersetService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getinterest();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinterest();
          this.spinner.hide();
          } 
        });
    }

}

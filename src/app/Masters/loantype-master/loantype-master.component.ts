import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { LoantypeService } from 'src/app/Shared/LoantypeMaster/loantype.service';
import { loantypeVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-loantype-master',
  templateUrl: './loantype-master.component.html',
  styleUrls: ['./loantype-master.component.css']
})
export class LoantypeMasterComponent implements OnInit {

  Loantypes: any;
  Loanid:any;
  loantype: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private loanService: LoantypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetLoantypes();
    this.loantype = "";
    this.roleDesc = "";
  }
  Updateloantype(form: NgForm) {
    this.spinner.show();
    const inputRequest1: loantypeVM = {
      LoanTypeId: this.Loanid ,
      LoanType: form.controls["loantype"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.loanService.UpdateloantypeRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetLoantypes();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetLoantypes();
          this.spinner.hide();
        }
      }
    );
  }
  SaveloantypeD(form: NgForm) {
    this.spinner.show();
    const inputRequest: loantypeVM = {
      LoanTypeId: 0,
      LoanType: form.controls["loantype"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.loanService.saveloantype(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetLoantypes();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetLoantypes();
          this.spinner.hide();
        }
      }
    );
  }
  GetLoantypes() {
    this.spinner.show();
    this.loanService.getloantypes().subscribe((response: any) => {
      this.Loantypes = response;
      this.spinner.hide();
    });
  }
  editloan(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.Loanid = data.loanTypeId;
    this.loantype = data.loanType;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.loantype != "") {
      this.loantype = "";
    }
  }
   deleteloan(data:any){
    this.rolid = data.loanTypeId;
  }
   deleteloanRow(){  
    this.spinner.show();
      this.loanService. deleteloandata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetLoantypes();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetLoantypes();
          this.spinner.hide();
          } 
        });
    }

}

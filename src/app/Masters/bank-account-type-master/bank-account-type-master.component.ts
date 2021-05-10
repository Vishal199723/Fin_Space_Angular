import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { BankAccountTypeService } from 'src/app/Shared/BankAccountTypeMaster/bank-account-type.service';
import { bankaccount } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-bank-account-type-master',
  templateUrl: './bank-account-type-master.component.html',
  styleUrls: ['./bank-account-type-master.component.css']
})
export class BankAccountTypeMasterComponent implements OnInit {

  Roles: any;
  batid:any;
  bankaccount: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  accounts: any;
  constructor(private messageService: MessageService,private bankaccountService: BankAccountTypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetBankaccount();
    this.bankaccount = "";
    this.roleDesc = "";
  }
  UpdateBankaccount(form: NgForm) {
    this.spinner.show();
    const inputRequest1: bankaccount = {
      BankAccTypeId: this.batid ,
      AccountType: form.controls["bankaccount"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.bankaccountService.UpdateBankaccountRow(inputRequest1).subscribe(
      (data: any) => {
          if (data =="success") {
            this.notify =  "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetBankaccount();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetBankaccount();
          this.spinner.hide();
        }
      }
    );
  }
  SaveBankaccountD(form: NgForm) {
    this.spinner.show();
    const inputRequest: bankaccount = {
      BankAccTypeId: 0,
      AccountType: form.controls["bankaccount"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.bankaccountService.saveBankaccount(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetBankaccount();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetBankaccount();
          this.spinner.hide();
        }
      }
    );
  }
  GetBankaccount() {
    this.spinner.show();
    this.bankaccountService.getBankaccounts().subscribe((response: any) => {
      this.accounts = response;
      this.spinner.hide();
    });
  }
  editBankaccount(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.batid = data.bankAccTypeId;
    this.bankaccount = data.accountType;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.bankaccount != "") {
      this.bankaccount = "";
    }
  }
  deleteRole(data:any){
    this.rolid =  data.bankAccTypeId;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.bankaccountService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetBankaccount();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetBankaccount();
          this.spinner.hide();
          } 
        });
    }

}


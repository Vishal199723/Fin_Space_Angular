import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { DepositTypeService } from 'src/app/Shared/DeposittypeMaster/deposit-type.service';
import { Depositetype } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-deposit-type',
  templateUrl: './deposit-type.component.html',
  styleUrls: ['./deposit-type.component.css']
})
export class DepositTypeComponent implements OnInit {


  Roles: any;
  depid:any;
  depositname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  deposities: any;
  constructor(private messageService: MessageService,private depositeService: DepositTypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getdeposits();
    this.depositname = "";
    this.roleDesc = "";
  }
  Updatedepositetype(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Depositetype = {
      Id: this.depid ,
      Depositetype: form.controls["depositname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.depositeService.UpdatedepositetypeRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getdeposits();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getdeposits();
          this.spinner.hide();
        }
      }
    );
  }
  SavedepositetypeD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Depositetype = {
      Id: 0,
      Depositetype: form.controls["depositname"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.depositeService.savedepositetype(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getdeposits();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getdeposits();
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
  editdeposit(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.depid = data.id;
    this.depositname = data.depositetype;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.depositname != "") {
      this.depositname = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deletedepositRow(){  
    this.spinner.show();
      this.depositeService.deleteDepositdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getdeposits();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getdeposits();
          this.spinner.hide();
          } 
        });
    }

}

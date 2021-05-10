import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { DisbursementService } from 'src/app/Shared/DisbursementMaster/disbursement.service';
import { Disbursement } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-disbursement-master',
  templateUrl: './disbursement-master.component.html',
  styleUrls: ['./disbursement-master.component.css']
})
export class DisbursementMasterComponent implements OnInit {


  disid:any;
  disbursementname: string;
   Desc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  disburs: any;
  constructor(private messageService: MessageService,private disbursementService: DisbursementService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetDisbursment();
    this.disbursementname = "";
    this. Desc = "";
  }
  UpdateDisbursement(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Disbursement = {
      Id: this.disid ,
      Disbursement: form.controls["disbursementname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
 
    }
    this.disbursementService.UpdateDisbursementRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetDisbursment();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDisbursment();
          this.spinner.hide();
        }
      }
    );
  }
  SaveDisbursementD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Disbursement = {
      Id: 0,
      Disbursement: form.controls["disbursementname"].value,
      CreatedBy:"",
      CreatedOn:"",
    }
    this.disbursementService.saveDisbursement(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDisbursment();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDisbursment();
          this.spinner.hide();
        }
      }
    );
  }
  GetDisbursment() {
    this.spinner.show();
    this.disbursementService.getDisbursements().subscribe((response: any) => {
      this. disburs= response;
      this.spinner.hide();
    });
  }
  editdisbursment(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.disid = data.id;
    this.disbursementname = data.disbursement;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.disbursementname != "") {
      this.disbursementname = "";
    }
  }
  deletedisbursement(data:any){
    this.rolid = data.id;
  }
  deletedisbursementRow(){  
    this.spinner.show();
      this.disbursementService.deletedisbursementdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetDisbursment();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDisbursment();
          this.spinner.hide();
          } 
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { FixedassetService } from 'src/app/Shared/FixedAssetMaster/fixedasset.service';
import { fixedasset } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-fixed-asset',
  templateUrl: './fixed-asset.component.html',
  styleUrls: ['./fixed-asset.component.css']
})
export class FixedAssetComponent implements OnInit {


  faid:any;
  fixedname: string;
   Desc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  fixed: any;
  constructor(private messageService: MessageService,private fixedassetService: FixedassetService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this. Getfixedasset();
    this.fixedname = "";
    this. Desc = "";
  }
  Updatefixedasset(form: NgForm) {
    this.spinner.show();
    const inputRequest1: fixedasset = {
      FixedAssetId: this.faid ,
      FixedAssetName: form.controls["fixedname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.fixedassetService.UpdatefixedassetRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this. Getfixedasset();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this. Getfixedasset();
          this.spinner.hide();
        }
      }
    );
  }
  SavefixedassetD(form: NgForm) {
    this.spinner.show();
    const inputRequest: fixedasset = {
      FixedAssetId: 0,
      FixedAssetName: form.controls["fixedname"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.fixedassetService.savefixedasset(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this. Getfixedasset();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this. Getfixedasset();
          this.spinner.hide();
        }
      }
    );
  }
   Getfixedasset() {
    this.spinner.show();
    this.fixedassetService.getfixedassets().subscribe((response: any) => {
      this. fixed = response;
      this.spinner.hide();
    });
  }
  editfixedasset(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.faid = data.fixedAssetId;
    this.fixedname = data.fixedAssetName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.fixedname != "") {
      this.fixedname = "";
    }
  }
  deletefixed(data:any){
    this.rolid = data.fixedAssetId;
  }
  deletefixedRow(){  
    this.spinner.show();
      this.fixedassetService.deletefixeddata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this. Getfixedasset();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this. Getfixedasset();
          this.spinner.hide();
          } 
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { AppetiteForRiskService } from 'src/app/Shared/AppetiteForRiskMaster/appetite-for-risk.service';
import { AppetiteForRisk } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-appetite-for-risk-master',
  templateUrl: './appetite-for-risk-master.component.html',
  styleUrls: ['./appetite-for-risk-master.component.css']
})
export class AppetiteForRiskMasterComponent implements OnInit {


  Roles: any;
  appetid:any;
  AppetiteForRiskname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  risks: any;
  constructor(private messageService: MessageService,private AppetiteForriskService: AppetiteForRiskService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetAppetiteForRisk();
    this.AppetiteForRiskname = "";
    this.roleDesc = "";
  }
  Updateappetiterisk(form: NgForm) {
    this.spinner.show();
    const inputRequest1: AppetiteForRisk = {
      Id: this.appetid ,
      AppetiteForRiskName: form.controls["AppetiteForRiskname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.AppetiteForriskService.UpdateappetiteriskRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetAppetiteForRisk();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetAppetiteForRisk();
          this.spinner.hide();
        }
      }
    );
  }
  SaveappetiteriskD(form: NgForm) {
    this.spinner.show();
    const inputRequest: AppetiteForRisk = {
      Id: 0,
      AppetiteForRiskName: form.controls["AppetiteForRiskname"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.AppetiteForriskService.saveappetiterisk(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetAppetiteForRisk();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetAppetiteForRisk();
          this.spinner.hide();
        }
      }
    );
  }
  GetAppetiteForRisk() {
    this.spinner.show();
    this.AppetiteForriskService.getappetiterisks().subscribe((response: any) => {
      this.risks = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.appetid = data.id;
    this.AppetiteForRiskname = data.appetiteForRiskName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.AppetiteForRiskname != "") {
      this.AppetiteForRiskname = "";
    }
  }
  deleteRole(data:any){
    this.rolid =  data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.AppetiteForriskService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetAppetiteForRisk();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetAppetiteForRisk();
          this.spinner.hide();
          } 
        });
    }

}

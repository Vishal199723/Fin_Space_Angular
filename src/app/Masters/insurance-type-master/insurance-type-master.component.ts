import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { InsuranceTypeService } from 'src/app/Shared/InsuranceTypeMaster/insurance-type.service';
import { Insurance } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-insurance-type-master',
  templateUrl: './insurance-type-master.component.html',
  styleUrls: ['./insurance-type-master.component.css']
})
export class InsuranceTypeMasterComponent implements OnInit {

  insurances: any;
  insid:any;
  insurance: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private insuranceService: InsuranceTypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getinsurance();
    this.insurance = "";
    this.roleDesc = "";
  }
  Updateinsurancetype(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Insurance = {
      InsuranceTypeId: this.insid ,
      InsuranceType: form.controls["insurance"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.insuranceService.UpdateinsurancetypeRow(inputRequest1).subscribe(
      (data: any) => {
          if (data =="success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getinsurance();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinsurance();
          this.spinner.hide();
        }
      }
    );
  }
  SaveinsurancetypeD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Insurance = {
      InsuranceTypeId: 0,
      InsuranceType: form.controls["insurance"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.insuranceService.saveinsurancetype(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinsurance();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinsurance();
          this.spinner.hide();
        }
      }
    );
  }
  Getinsurance() {
    this.spinner.show();
    this.insuranceService.getinsurancetypes().subscribe((response: any) => {
      this.insurances = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.insid = data.insuranceTypeId;
    this.insurance = data.insuranceType;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.insurance != "") {
      this.insurance = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.insuranceTypeId;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.insuranceService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getinsurance();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getinsurance();
          this.spinner.hide();
          } 
        });
    }

}

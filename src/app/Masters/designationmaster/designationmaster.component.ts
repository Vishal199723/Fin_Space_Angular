import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DesignationService } from 'src/app/Shared/DesignationMaster/designation.service';

import { Designation } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-designationmaster',
  templateUrl: './designationmaster.component.html',
  styleUrls: ['./designationmaster.component.css']
})
export class DesignationmasterComponent implements OnInit {

  itemsPerPage: number;
  currentPage: number;
  public dismissalert = false;
  notify: string;
  DesignationsList:any;
    DesignationList: any;
   ocpid: any;
    svedsgn: boolean;
    upddsgn: boolean;
    DesignationName: any;
    p: number = 1
  
  designationId:any;
    constructor(private designationService: DesignationService, private spinner: NgxSpinnerService) { }
  
    ngOnInit() {
      this.Designations();
    }
    Designations() {
      this.spinner.show();
      this.designationService.getDesignations().subscribe((Data: Designation[]) => {
        this.DesignationList = Data;
        this.spinner.hide();
  
      })
    }
  
    addDesignation() {
      this.svedsgn = true;
      this.upddsgn = false;
      if (this.DesignationName != "") {
        this.DesignationName = "";
      }
    }
  
    editDesignation(data:any) {
      this.svedsgn = false;
      this.upddsgn = true;
      this.DesignationName = data.designationName;
      this.designationId = data.id;
    }
  
    SaveDesignationK(form: NgForm) {
      const inputRequest: Designation = {
        DesignationId: 0,
        DesignationName: form.controls["DesignationName"].value,
        CreatedBy: "",
        CreatedOn: "",
        ModifiedBy: "",
        ModifiedOn: "",
      }
      this.spinner.show();
      this.designationService.saveDesignation(inputRequest).subscribe(
        (data: any) => {
          if (data == "success") {
            this.notify = "Designation Saved Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Designations();
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Designations();
            this.spinner.hide();
          }
        });
    }
  
    UpdateDesignation(form: NgForm) {
      const inputRequest1: Designation = {
        DesignationId: this.designationId,
        DesignationName: form.controls["DesignationName"].value,
        CreatedBy: "",
        CreatedOn: "",
        ModifiedBy: "",
        ModifiedOn: "",
      }
      this.spinner.show();
      this.designationService.UpdateDesignation(inputRequest1).subscribe(
        (data: any) => {
          if (data == "success") {
            this.notify = "Designation Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Designations();
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Designations();
            this.spinner.hide();
          }
        });
    }
  
  
    deleteDesignation(data:any) {
      this.ocpid = data.id;
    }
  
    deletedsgn() {
      this.spinner.show();
      this.designationService.deleteDesignation(this.ocpid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Designation Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Designations();
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Designations();
            this.spinner.hide();
          }
        });
    }
  
  }
  

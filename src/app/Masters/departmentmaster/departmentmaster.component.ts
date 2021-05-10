import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { CountryService } from 'src/app/Shared/country.service';
import { DesignationService } from 'src/app/Shared/DesignationMaster/designation.service';
import { department } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-departmentmaster',
  templateUrl: './departmentmaster.component.html',
  styleUrls: ['./departmentmaster.component.css']
})
export class DepartmentmasterComponent implements OnInit {
  p: number = 1;
  itemsPerPage: number;
  currentPage: number;
  public dismissalert = false;
  notify: string;
  DepartmentsList: any;
  idd: any;
  svebtn: boolean;
  updbtn: boolean;
  departmentName: string;
  Id: any;
  ocpid: any;
  DepartmentName: any;
  departmentid: any;
  depid: number;

  constructor(private messageService: MessageService,private spinner:NgxSpinnerService,private countryService:CountryService ,
    private designationService:DesignationService) {
    this.messageService.sendSession('true');
  }

  ngOnInit() {
    this.Departments();
    this.svebtn = true;
  }

  Departments() {
    this.spinner.show();
    this.countryService.getAllDepartments().subscribe((Data:any) => {
      this.DepartmentsList = Data;
      this.spinner.hide();

    })
  }

  
  adddepartment() {
    this.svebtn = true;
    this.updbtn = false;
    if (this.departmentName != "") {
      this.departmentName = "";
    }
  }

  editdepartment(data:any) {
    this.svebtn = false;
    this.updbtn = true;
    this.departmentName = data.departmentName;
    this.departmentid = data.id;
  }
  SaveDepartment(form: NgForm) {
    const inputRequest: department = {
      ID: 0,
      DepartmentName: form.controls["departmentName"].value,
 
    }
    this.spinner.show();
    this.designationService.saveDepartments(inputRequest).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Departments Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Departments();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Departments();
          this.spinner.hide();
        }
      });
  }

  UpdateDepartment(form: NgForm) {
    const inputRequest1: department = {
      ID: this.departmentid,
      DepartmentName: form.controls["departmentName"].value,
  
    }
    this.spinner.show();
    this.designationService.UpdateDepartments(inputRequest1).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Departments Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Departments();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Departments();
          this.spinner.hide();
        }
      });
  }


  deletedepartment(data:any) {
    this.ocpid = data.id;
  }

  deletedep() {
    this.spinner.show();
    this.designationService.deleteDepartments(this.ocpid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Departments Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Departments();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Departments();
          this.spinner.hide();
        }
      });
  }


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenderService } from 'src/app/Shared/GenderMaster/gender.service';
import { Gender } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-gender-master',
  templateUrl: './gender-master.component.html',
  styleUrls: ['./gender-master.component.css']
})
export class GenderMasterComponent implements OnInit {

  GenderList: any;
  genderName: any;
  genderId: any; genid: any;
  updgen: boolean;
  svegen: boolean;
  p: number = 1
  public dismissalert = false;
  notify: string
  constructor(private genderService: GenderService, private spinner: NgxSpinnerService, ) { }

  ngOnInit() {
    this.Genders();
    this.genderName = "";
    this.svegen = true;
  }
  Genders() {
    this.spinner.show();
    this.genderService.getGender().subscribe((Data: Gender[]) => {
      this.GenderList = Data;
      this.spinner.hide();

    })
  }

  addGender() {
    this.svegen = true;
    this.updgen = false;
    if (this.genderName != "") {
      this.genderName = "";
    }
  }

  editgender(data:any) {
    this.svegen = false;
    this.updgen = true;
    this.genderName = data.genderName;
    this.genderId = data.genderId;
  }

  SaveGenderK(form: NgForm) {
    this.spinner.show();
    const inputRequest: Gender = {
      GenderId: 0,
      GenderName: form.controls["genderName"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.genderService.saveGender(inputRequest).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Gender Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Genders();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Genders();
          this.spinner.hide();
        }
      });
  }

  UpdateGender(form: NgForm) {
    this.spinner.show();

    const inputRequest1: Gender = {
      GenderId: this.genderId,
      GenderName: form.controls["genderName"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.genderService.UpdateGender(inputRequest1).subscribe(
      (data: any) => {
        if (data =="success") {
          this.notify = "Gender Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Genders();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Genders();
          this.spinner.hide();
        }
      });
  }


  deletegender(data:any) {
    this.genid = this.genderId;
  }

  deletegen() {
    this.spinner.show();

    this.genderService.deleteGender(this.genid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Gender Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Genders();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Genders();
          this.spinner.hide();
        }
      });
  }
}


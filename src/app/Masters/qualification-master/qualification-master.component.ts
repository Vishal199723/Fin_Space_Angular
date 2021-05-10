import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { QualificationService } from 'src/app/Shared/QualificationMaster/qualification.service';
import { Qualification } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-qualification-master',
  templateUrl: './qualification-master.component.html',
  styleUrls: ['./qualification-master.component.css']
})
export class QualificationMasterComponent implements OnInit {

  QualificationList: any;
  qualificationId: any; ocpid: any;
  updqln: boolean;
  sveqln: boolean;
  Qualificationdesc: any;
  QualificationName: any;
  p: number = 1
  public dismissalert = false;
  notify: string
  constructor(private qualificationService: QualificationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.Qualifications();
    this.QualificationName = "";
    this.Qualificationdesc = "";
    this.sveqln = true;
  }
  Qualifications() {
    this.spinner.show();

    this.qualificationService.getQualifications().subscribe((Data: Qualification[]) => {
      this.QualificationList = Data;
      this.spinner.hide();

    })
  }

  addQualification() {
    this.sveqln = true;
    this.updqln = false;
    if (this.QualificationName != "") {
      this.QualificationName = "";
      this.Qualificationdesc = "";
    }
  }

  editQualification(data:any) {
    this.sveqln = false;
    this.updqln = true;
    this.QualificationName = data.qualificationName;
    this.qualificationId = data.qualificationId;
  }

  SaveQualificationK(form: NgForm) {
    this.spinner.show();

    const inputRequest: Qualification = {
      QualificationId: 0,
      QualificationName: form.controls["QualificationName"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.qualificationService.saveQualification(inputRequest).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Qualification Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Qualifications();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Qualifications();
          this.spinner.hide();
        }
      });
  }

  UpdateQualification(form: NgForm) {
    this.spinner.show();

    const inputRequest1: Qualification = {
      QualificationId: this.qualificationId,
      QualificationName: form.controls["QualificationName"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.qualificationService.UpdateQualification(inputRequest1).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Qualification Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Qualifications();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Qualifications();
          this.spinner.hide();
        }
      });
  }


  deleteQualification(data:any) {
    this.ocpid = data.qualificationId;
  }

  deleteqln() {
    this.spinner.show();
    this.qualificationService.deleteQualification(this.ocpid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Qualification Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Qualifications();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Qualifications();
          this.spinner.hide();
        }
      });
  }
}


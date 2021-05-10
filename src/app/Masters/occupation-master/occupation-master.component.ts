import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { OccupationService } from 'src/app/Shared/OccupationMaster/occupation.service';
import { Occupation } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-occupation-master',
  templateUrl: './occupation-master.component.html',
  styleUrls: ['./occupation-master.component.css']
})
export class OccupationMasterComponent implements OnInit {

  OcupationList: any;
  occupationId: any; ocpid: any;
  updocp: boolean;
  sveocp: boolean;
 
  OccupationName: any;
  p: number = 1
  public dismissalert = false;
  notify: string
  constructor(private occupationService: OccupationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.Ocupaitons();
    this.OccupationName = "";
    this.sveocp = true;
  }
  Ocupaitons() {
    this.spinner.show();
    this.occupationService.getOcupaitons().subscribe((Data: Occupation[]) => {
      this.OcupationList = Data;
      this.spinner.hide();
    })
  }
  addOccupation() {
    this.sveocp = true;
    this.updocp = false;
    if (this.OccupationName != "") {
      this.OccupationName = "";
    }
  }
  editOccupation(data:any) {
    this.sveocp = false;
    this.updocp = true;
    this.OccupationName = data.occupationName;
    this.occupationId = data.occupationId;
  }
  
  SaveOccupationK(form: NgForm) {
    this.spinner.show();

    const inputRequest: Occupation = {
      OccupationId: 0,
      OccupationName: form.controls["OccupationName"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.occupationService.saveOccupation(inputRequest).subscribe(
      (data: any) => {
        if (data =="success") {
          this.notify = "Occupation Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Ocupaitons();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Ocupaitons();
          this.spinner.hide();
        }
      });
  }

  UpdateOccupation(form: NgForm) {
    this.spinner.show();

    const inputRequest1: Occupation = {
      OccupationId: this.occupationId,
      OccupationName: form.controls["OccupationName"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.occupationService.UpdateOccupation(inputRequest1).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Occupation Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Ocupaitons();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Ocupaitons();
          this.spinner.hide();
        }
      });
  }


  deleteOccupation(data:any) {
    this.ocpid =  data.occupationId;
  }

  deleteocp() {
    this.spinner.show();
    this.occupationService.deleteOccupation(this.ocpid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Occupation Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Ocupaitons();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Ocupaitons();
          this.spinner.hide();
        }
      });
  }

}


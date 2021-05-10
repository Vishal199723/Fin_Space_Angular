import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/ViewModels/Country';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { CountryService } from 'src/app/Shared/country.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  CountryList: any;
  countryId: any; ocpid: any;
  updcun: boolean;
  svecun: boolean;
  Countrydesc: any;
  CountryName: any;
  p: number = 1;
  itemsPerPage: number;
  currentPage: number;
  public dismissalert = false;
  notify: string
  CountryNamesList:Country[];
  countryid: any;
  Countrycode: string;
  CountryFlag: any;
  constructor(private messageService: MessageService,private spinner:NgxSpinnerService,private countryService:CountryService) {
    this.messageService.sendSession('true');

   }

  ngOnInit() {
    this.Countries();
    this.CountryName = "";
    this.Countrydesc = "";
    this.svecun = true;
  }
  Countries() {
    this.spinner.show();
    this.countryService.getAllCountries().subscribe((Data: Country[]) => {
      this.CountryList = Data;
      this.spinner.hide();

    })
  }

  addCountry() {
    this.svecun = true;
    this.updcun = false;
    if (this.CountryName != "") {
      this.CountryName = "";
      this.Countrydesc = "";
    }
  }

  editCountry(data: { CountryName: any; CountryId: any; CountryDesc: any; }) {
    this.svecun = false;
    this.updcun = true;
    this.CountryName = data.CountryName;
    this.countryId = data.CountryId;
    this.Countrydesc = data.CountryDesc
  }

  SaveCountry(form: NgForm) {
    const inputRequest: Country = {
      CountryId: 0,
      CountryName: form.controls["CountryName"].value,
      CountryDesc: form.controls["Countrydesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.spinner.show();
    this.countryService.saveCountry(inputRequest).subscribe(
      (data: any) => {
        if (data =="success") {
          this.notify = "Country added Successfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.Countries();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.Countries();
        }
      });
  }

  UpdateCountry(form: NgForm) {
    const inputRequest1: Country = {
      CountryId: this.countryId,
      CountryName: form.controls["CountryName"].value,
      CountryDesc: form.controls["Countrydesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
    }
    this.spinner.show();
    this.countryService.UpdateCountry(inputRequest1).subscribe(
      (data: any) => {
        if (data =="success") {
          this.notify = "Country Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Countries();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Countries();
          this.spinner.hide();
        }
      });
  }


  deleteCountry(data: { CountryId: any; }) {
    this.ocpid = data.CountryId;
  }

  deletecun() {
    this.spinner.show();
    this.countryService.deleteCountry(this.ocpid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Country Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Countries();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Countries();
          this.spinner.hide();
        }
      });
  }

}

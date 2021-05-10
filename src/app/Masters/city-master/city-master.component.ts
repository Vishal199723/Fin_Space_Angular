import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { DistrictService } from 'src/app/Shared/DistrictMaster/district.service';
import { CityService } from 'src/app/Shared/CityMaster/city.service';
import { CountryService } from 'src/app/Shared/country.service';
import { City } from 'src/app/ViewModels/City';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.scss']
})
export class CityMasterComponent implements OnInit {
  States: any;
  showSave: boolean;
  showUpdate: boolean;
  cityName: string;
  cityDesc: string;
  cityid: number;
  countryid: any;
  stateid: any;
  Countries: any;
  Cities: any;
  StatesFromCountry: any;
  Citlid: any;
  DistrictsFromState: any;
  districtid: any;
  p: number = 1
  public dismissalert = false;
  notify: string
  constructor(private messageService: MessageService,private districtService: DistrictService, private cityService: CityService, private countryService: CountryService, private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetCountries();
    this.GetCities();
  }
  GetCountries() {
    this.countryService.getAllCountries().subscribe((response: any) => {
      this.Countries = response;
    });
  }
  GetCities() {
    this.cityService.getAllCities().subscribe((response: any) => {
      this.Cities = response;
    });
  }

  // add city
  addClick() {
    this.showSave = true;
    this.showUpdate = false;
    this.countryid = null;
    this.stateid = null;
    this.districtid = null;
    this.cityName = "";
    if (this.cityName != "") {
      this.cityName = "";
      this.cityDesc = "";
    }
  }
  //edit city
  editCity(data: City) {
    this.showSave = false;
    this.showUpdate = true;
    this.countryid = data.CountryId;
    this.districtid = data.DistrictId;
    this.cityid = data.CityId;
    this.stateid = data.StateId;
    this.onSelectState(data.StateId);
    this.cityName = data.CityName;
    this.cityDesc = data.CityDesc;
    this.onSelectCountry(data.CountryId);
  }
  onSelectCountry(data: any) {
    this.countryid = data
    this.districtService.getStatesFromCountryId(this.countryid).subscribe((response: any) => {
      this.StatesFromCountry = response;
    });
  }
  onSelectState(data: any) {
    this.stateid = data
    this.districtService.DistrictsFromStateId(this.stateid).subscribe((response: any) => {
      this.DistrictsFromState = response;
    });
  }
  onSelectDistrict(data: any) {
    this.districtid = data
  }
  //Update City
  UpdateCity(form: NgForm) {
    this.spinner.show();
    const inputRequest1: City = {
      CityId: this.cityid,
      CountryId: this.countryid,
      StateId: this.stateid,
      DistrictId: this.districtid,
      CityName: form.controls["cityName"].value,
      CityDesc: form.controls["cityDesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: ""
    }
    this.cityService.UpdateCityRow(inputRequest1).subscribe(
      (data: any) => {
        if (data == 1) {
          this.notify = "City Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCities();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCities();
          this.spinner.hide();
         
        }
      }
    );
  }
  //save city
  SaveCity(form: NgForm) {
    this.spinner.show();
    const inputRequest: City = {
      CityId: 0,
      CountryId: this.countryid,
      StateId: this.stateid,
      DistrictId: this.districtid,
      CityName: form.controls["cityName"].value,
      CityDesc: form.controls["cityDesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: ""
    }
    this.cityService.saveCity(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "City Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCities();
          this.spinner.hide();
        }
      }
    );
  }
  //delete City
  deleteCity(data: City) {
    this.Citlid = data.CityId;
  }
  deleteCityRow() {
    this.spinner.show();
    this.cityService.deleteCity(this.Citlid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "City Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCities();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCities();
          this.spinner.hide();
        }
      });
  }
}

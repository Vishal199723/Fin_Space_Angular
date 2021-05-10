import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { CountryService } from 'src/app/Shared/country.service';
import { StateService } from 'src/app/Shared/StateMaster/state.service';
import { DistrictService } from 'src/app/Shared/DistrictMaster/district.service';
import { DistrictVM } from 'src/app/ViewModels/DistrictVM';
import { District } from 'src/app/ViewModels/District';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-district-master',
  templateUrl: './district-master.component.html',
  styleUrls: ['./district-master.component.scss']
})
export class DistrictMasterComponent implements OnInit {
  countryid: any;
  Countries: any;
  States: any;
  CountriesStates: any;
  showSave: boolean;
  showUpdate: boolean;
  districtid: number;
  districtDesc: string;
  districtName: string;
  ShowRegionName: any;
  Regions: any;
  sid: any;
  cid: any;
  rid: any;
  stateid: any;
  regionid: any;
  disdelid: any;
  RegionsFromCountry: any;
  StatesFromCountry: any;
  Districts: any;
  p: number = 1
  public dismissalert = false;
  notify: string
  constructor(private messageService: MessageService,private countryService: CountryService, private stateService: StateService, private spinner: NgxSpinnerService, private districtService: DistrictService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetCountries();
    this.GetDistricts();
    this.GetStates();
  }
  GetCountries() {
    this.countryService.getAllCountries().subscribe((response: any) => {
      this.Countries = response;
    });
  }
  GetDistricts() {
    this.districtService.getAllDistricts().subscribe((response: any) => {
      this.Districts = response;
    });
  }
  GetStates() {
    this.stateService.getStates().subscribe((response: any) => {
      this.States = response;
      this.spinner.hide();
    });
  }
  // add district
  addClick() {
    this.showSave = true;
    this.showUpdate = false;
    this.districtName = "";
    if (this.districtName != "") {
      this.districtName = "";
      this.districtDesc = "";
    }
  }
  //edit district
  editDistrict(data: DistrictVM) {
    this.showSave = false;
    this.showUpdate = true;
    this.districtid = data.DistrictId;
    this.stateid = data.StateId;
    this.regionid = data.RegionId;
    this.districtName = data.DistrictName;
    this.districtDesc = data.DistrictDesc;
    this.cid = data.CountryId;
    this.onSelectCountry(data.CountryId);
  }
  onSelectCountry(data: any) {
    this.countryid = data
    this.districtService.getStatesFromCountryId(this.countryid).subscribe((response: any) => {
      this.StatesFromCountry = response;
    });
    this.districtService.getRegionFromCountryId(this.countryid).subscribe((response: any) => {
      this.RegionsFromCountry = response;
    });
  }
  onSelectState(data: any) {
    this.stateid = data
  }
  onSelectRegion(data: any) {
    this.regionid = data
  }
  //Update District
  UpdateDistrict(form: NgForm) {
    this.spinner.show();
    const inputRequest1: District = {
      DistrictId: this.districtid,
      CountryId: this.countryid,
      StateId: this.stateid,
      RegionId: this.regionid,
      DistrictName: form.controls["districtName"].value,
      DistrictDesc: form.controls["districtDesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: ""
    }
    this.districtService.UpdateDistrictRow(inputRequest1).subscribe(
      (data: any) => {
        if (data == 1) {
          this.notify = "District Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDistricts();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDistricts();
          this.spinner.hide();

        }
      }
    );
  }
  //save district
  SaveDistrict(form: NgForm) {
    this.spinner.show();
    const inputRequest: District = {
      DistrictId: 0,
      CountryId: this.countryid,
      StateId: this.stateid,
      RegionId: this.regionid,
      DistrictName: form.controls["districtName"].value,
      DistrictDesc: form.controls["districtDesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: ""
    }
    this.districtService.saveDistrict(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " District Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDistricts();
          this.spinner.hide();
        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDistricts();
          this.spinner.hide();

        }
      }
    );
  }
  //delete
  deleteDistrict(data: District) {
    this.disdelid = data.DistrictId;
  }
  deletedistrictRow() {
    this.spinner.show();
    this.districtService.deleteDistrict(this.disdelid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "District Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDistricts();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDistricts();
          this.spinner.hide();

        }
      });
  }
}

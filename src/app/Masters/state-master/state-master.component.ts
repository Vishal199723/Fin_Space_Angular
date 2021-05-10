import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { StateVM } from 'src/app/ViewModels/StateVM';
import { StateService } from 'src/app/Shared/StateMaster/state.service';
import { CountryService } from 'src/app/Shared/country.service';
import { State } from 'src/app/ViewModels/State';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.scss']
})
export class StateMasterComponent implements OnInit {
  countryid: any;
  Countries: any;
  state: StateVM;
  States: any;
  stateid: any;
  stateName: string;
  stateDesc: any;
  staid: number;
  showSave: any;
  showUpdate: any;
  ccid: any;
  p:number = 1
  public dismissalert = false;
  notify: string
  constructor(private messageService: MessageService,private stateService: StateService, private countryService: CountryService, private spinner: NgxSpinnerService) {
    this.messageService.sendSession('true');

   }

  ngOnInit() {
    this.GetCountries();
    this.GetStates();
  }
  addClick() {
    this.showSave = true;
    this.showUpdate = false;
    this.ccid = "";
    if (this.stateName != "") {
      this.stateName = "";
      this.stateDesc = "";
    }
  }
  editState(data: State) {
    this.showSave = false;
    this.showUpdate = true;
    this.stateid = data.StateId;
    this.stateName = data.StateName;
    this.stateDesc = data.StateDesc;
    this.ccid = this.GetCountryName(data.CountryId);
    this.countryid = data.CountryId;
  }
  GetCountryName(cid: any): any {
    for (let index = 0; index < this.Countries.length; index++) {
      if (cid == this.Countries[index].CountryId) {
        return this.Countries[index];
      }
    }
  }
  onSelectCountry(data: any) {
    this.countryid = data
  }
  GetCountries() {
    this.countryService.getAllCountries().subscribe((response: any) => {
      this.Countries = response;
      this.spinner.hide();

    });
  }
  GetStates() {
    this.stateService.getStates().subscribe((response: any) => {
      this.States = response;
      this.spinner.hide();
    });
  }
  deleteState(data: StateVM) {
    this.staid = data.StateId;
  }
  UpdateState(form: NgForm) {
    this.spinner.show();
    const inputRequest1: StateVM = {
      StateId: this.stateid,
      CountryId: this.countryid,
      StateName: form.controls["stateName"].value,
      StateDesc: form.controls["stateDesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: ""
    }
    this.stateService.UpdateStateRow(inputRequest1).subscribe(
      (data: any) => {
        if (data == 1) {
          this.notify = "State Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStates();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStates();
          this.spinner.hide();
        }
      }
    );
  }
  SaveState(form: NgForm) {
    this.spinner.show();
    const inputRequest: StateVM = {
      StateId: 0,
      CountryId: this.countryid,
      StateName: form.controls["stateName"].value,
      StateDesc: form.controls["stateDesc"].value,
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: ""
    }
    this.stateService.saveUserState(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "State Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStates();
          this.spinner.hide();
         
        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStates();
          this.spinner.hide();
        }
      }
    );
  }
  deletestateRow() {
    this.spinner.show();
    this.stateService.deleteStatedata(this.staid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "State Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStates();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetStates();
          this.spinner.hide();
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { FuelTypeService } from 'src/app/Shared/FuelTypeMaster/fuel-type.service';
import { Fueltype } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-fuel-type-master',
  templateUrl: './fuel-type-master.component.html',
  styleUrls: ['./fuel-type-master.component.css']
})
export class FuelTypeMasterComponent implements OnInit {

  Roles: any;
  fuelid:any;
  fuelname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private fueltypeService: FuelTypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getfuels();
    this.fuelname = "";
    this.roleDesc = "";
  }
  UpdateFueltype(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Fueltype = {
      Id: this.fuelid ,
      FuelType: form.controls["fuelname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
    
    }
    this.fueltypeService.UpdateFueltypeRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getfuels();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfuels();
          this.spinner.hide();
        }
      }
    );
  }
  SaveFueltypeD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Fueltype = {
      Id: 0,
      FuelType: form.controls["fuelname"].value,
      CreatedBy:"",
      CreatedOn:"", 
    }
    this.fueltypeService.saveFueltype(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfuels();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfuels();
          this.spinner.hide();
        }
      }
    );
  }
  Getfuels() {
    this.spinner.show();
    this.fueltypeService.getFueltypes().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  }
  editfuel(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.fuelid = data.id;
    this.fuelname = data.fuelType;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.fuelname != "") {
      this.fuelname = "";
    }
  }
  deletefuel(data:any){
    this.rolid = data.id;
  }
  deletefuelRow(){  
    this.spinner.show();
      this.fueltypeService.deletefueldata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getfuels();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getfuels();
          this.spinner.hide();
          } 
        });
    }

}

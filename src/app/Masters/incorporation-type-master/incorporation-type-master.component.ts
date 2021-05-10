import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { IncorporationTypeService } from 'src/app/Shared/IncorporationTypeMaster/incorporation-type.service';
import { Incorporation } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-incorporation-type-master',
  templateUrl: './incorporation-type-master.component.html',
  styleUrls: ['./incorporation-type-master.component.css']
})
export class IncorporationTypeMasterComponent implements OnInit {
  incoroporations: any;
  incid:any;
  Incorporation: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private IncorporationService: IncorporationTypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getincorporation();
    this.Incorporation = "";
    this.roleDesc = "";
  }
  UpdateIncorporationtype(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Incorporation = {
      Id: this.incid ,
      IncorporationName: form.controls["Incorporation"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.IncorporationService.UpdateIncorporationtypeRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getincorporation();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getincorporation();
          this.spinner.hide();
        }
      }
    );
  }
  SaveIncorporationtypeD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Incorporation = {
      Id: 0,
      IncorporationName: form.controls["Incorporation"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.IncorporationService.saveIncorporationtype(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getincorporation();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getincorporation();
          this.spinner.hide();
        }
      }
    );
  }
  Getincorporation() {
    this.spinner.show();
    this.IncorporationService.getIncorporationtypes().subscribe((response: any) => {
      this.incoroporations = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.incid = data.id;
    this.Incorporation = data.incorporationName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.Incorporation != "") {
      this.Incorporation = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.IncorporationService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getincorporation();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getincorporation();
          this.spinner.hide();
          } 
        });
    }

}

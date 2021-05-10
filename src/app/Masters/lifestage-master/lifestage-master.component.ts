import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { LifestageService } from 'src/app/Shared/LifestageMaster/lifestage.service';
import { lifestageVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-lifestage-master',
  templateUrl: './lifestage-master.component.html',
  styleUrls: ['./lifestage-master.component.css']
})
export class LifestageMasterComponent implements OnInit {

  lifestage: any;
  lifeid:any;

  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private lifestageService: LifestageService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getlifestage();
    this.lifestage = "";
    this.roleDesc = "";
  }
  Updatelifestage(form: NgForm) {
    this.spinner.show();
    const inputRequest1: lifestageVM = {
      Id: this.lifeid ,
      LifeStageName: form.controls["lifestage"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
    
    }
    this.lifestageService.UpdatelifestageRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getlifestage();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getlifestage();
          this.spinner.hide();
        }
      }
    );
  }
  SavelifestageD(form: NgForm) {
    this.spinner.show();
    const inputRequest: lifestageVM = {
      Id: 0,
      LifeStageName: form.controls["lifestage"].value,
      CreatedBy:"",
      CreatedOn:"",
 
    }
    this.lifestageService.savelifestage(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getlifestage();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getlifestage();
          this.spinner.hide();
        }
      }
    );
  }
  Getlifestage() {
    this.spinner.show();
    this.lifestageService.getlifestages().subscribe((response: any) => {
      this.lifestage = response;
      this.spinner.hide();
    });
  }
  editloan(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.lifeid = data.id;
    this.lifestage = data.lifeStageName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.lifestage != "") {
      this.lifestage = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.lifestageService.deletelifestage(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getlifestage();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getlifestage();
          this.spinner.hide();
          } 
        });
    }

}

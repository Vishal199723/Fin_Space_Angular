import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ProtectionNeedService } from 'src/app/Shared/ProtectionNeedMaster/protection-need.service';
import { ProtectionVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-protection-need-master',
  templateUrl: './protection-need-master.component.html',
  styleUrls: ['./protection-need-master.component.css']
})
export class ProtectionNeedMasterComponent implements OnInit {

  Protections: any;
  protid:any;
  protection: any;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private protectionService: ProtectionNeedService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetProtections();
    this.protection = "";
    this.roleDesc = "";
  }
  Updateprotectionneed(form: NgForm) {
    this.spinner.show();
    const inputRequest1: ProtectionVM = {
      Id: this.protid ,
      ProtectionNeedName: form.controls["protection"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
     
    }
    this.protectionService.UpdateprotectionneedRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetProtections();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetProtections();
          this.spinner.hide();
        }
      }
    );
  }
  SaveprotectionneedD(form: NgForm) {
    this.spinner.show();
    const inputRequest: ProtectionVM = {
      Id: 0,
      ProtectionNeedName: form.controls["protection"].value,
      CreatedBy:"",
      CreatedOn:"",
     
    }
    this.protectionService.saveprotectionneed(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetProtections();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetProtections();
          this.spinner.hide();
        }
      }
    );
  }
  GetProtections() {
    this.spinner.show();
    this.protectionService.getprotectionneeds().subscribe((response: any) => {
      this.Protections = response;
      this.spinner.hide();
    });
  }
  editProtections(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.protid = data.id;
    this.protection = data.protectionNeedName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.protection != "") {
      this.protection = "";
    }
  }
  deleteProtections(data:any){
    this.rolid = data.id;
  }
  deleteProtectionsRow(){  
    this.spinner.show();
      this.protectionService.deleteProtectionsdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetProtections();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetProtections();
          this.spinner.hide();
          } 
        });
    }

}


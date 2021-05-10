import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { RelationshipService } from 'src/app/Shared/RelationshipMaster/relationship.service';
import { relationshipVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-relationship-master',
  templateUrl: './relationship-master.component.html',
  styleUrls: ['./relationship-master.component.css']
})
export class RelationshipMasterComponent implements OnInit {

  Relations: any;
  relationshipid:any;
  relationship: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private relationService: RelationshipService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetRelations();
    this.relationship = "";
    this.roleDesc = "";
  }
  Updaterelationship(form: NgForm) {
    this.spinner.show();
    const inputRequest1: relationshipVM = {
      Id: this.relationshipid ,
      RelationShip: form.controls["relationship"].value,
      CreatedBy:  this.createdby,
      LastUpdated:  this.createdon,
  
    }
    this.relationService.UpdaterelationshipRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRelations();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRelations();
          this.spinner.hide();
        }
      }
    );
  }
  SaverelationshipD(form: NgForm) {
    this.spinner.show();
    const inputRequest: relationshipVM = {
      Id: 0,
      RelationShip: form.controls["relationship"].value,
      CreatedBy:"",
      LastUpdated:"",
    
    }
    this.relationService.saverelationship(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRelations();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRelations();
          this.spinner.hide();
        }
      }
    );
  }
  GetRelations() {
    this.spinner.show();
    this.relationService.getrelationships().subscribe((response: any) => {
      this.Relations = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.relationshipid = data.id;
    this.relationship = data.relationShip;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.relationship != "") {
      this.relationship = "";
    }
  }
  deleteRelations(data:any){
    this.rolid = data.id;
  }
  deleteRelationsRow(){  
    this.spinner.show();
      this.relationService.deleteRelationsdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetRelations();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetRelations();
          this.spinner.hide();
          } 
        });
    }

}


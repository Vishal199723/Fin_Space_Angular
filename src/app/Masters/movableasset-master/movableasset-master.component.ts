import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { MovableassetService } from 'src/app/Shared/MovableassetMaster/movableasset.service';
import { movableVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-movableasset-master',
  templateUrl: './movableasset-master.component.html',
  styleUrls: ['./movableasset-master.component.css']
})
export class MovableassetMasterComponent implements OnInit {

  movables: any;
  movid:any;
  moveable: string;
   Desc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private movableassetService: MovableassetService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getmovables();
    this.moveable = "";
    this. Desc = "";
  }
  Updatemovableasset(form: NgForm) {
    this.spinner.show();
    const inputRequest1: movableVM = {
      MovableAssetId: this.movid ,
      MovableAssetName: form.controls["moveable"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.movableassetService.UpdatemovableassetRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getmovables();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getmovables();
          this.spinner.hide();
        }
      }
    );
  }
  SavemovableassetD(form: NgForm) {
    this.spinner.show();
    const inputRequest: movableVM = {
      MovableAssetId: 0,
      MovableAssetName: form.controls["moveable"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.movableassetService.savemovableasset(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getmovables();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getmovables();
          this.spinner.hide();
        }
      }
    );
  }
  Getmovables() {
    this.spinner.show();
    this.movableassetService.getmovableassets().subscribe((response: any) => {
      this.movables = response;
      this.spinner.hide();
    });
  }
  editassets(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.movid = data.movableAssetId;
    this.moveable = data.movableAssetName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.moveable != "") {
      this.moveable = "";
    }
  }
  deleteasset(data:any){
    this.rolid =data.movableAssetId;
  }
  deleteassetRow(){  
    this.spinner.show();
      this.movableassetService.deleteassetdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getmovables();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getmovables();
          this.spinner.hide();
          } 
        });
    }

}

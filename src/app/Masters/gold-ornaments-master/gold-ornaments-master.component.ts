import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { GoldOrnamentsService } from 'src/app/Shared/GoldOrnamentsMaster/gold-ornaments.service';
import { Goldornaments } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-gold-ornaments-master',
  templateUrl: './gold-ornaments-master.component.html',
  styleUrls: ['./gold-ornaments-master.component.css']
})
export class GoldOrnamentsMasterComponent implements OnInit {

  Roles: any;
  goldoid:any;
  goldornaments: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private goldornamentservice: GoldOrnamentsService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetGoldornaments();
    this.goldornaments = "";
    this.roleDesc = "";
  }
  UpdateGoldOrnament(form: NgForm) {
    this.spinner.show();
    const inputRequest1: Goldornaments = {
      Id: this.goldoid ,
      Goldornaments: form.controls["goldornaments"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
     
    }
    this.goldornamentservice.UpdateGoldOrnamentRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetGoldornaments();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGoldornaments();
          this.spinner.hide();
        }
      }
    );
  }
  SaveGoldOrnamentD(form: NgForm) {
    this.spinner.show();
    const inputRequest: Goldornaments = {
      Id: 0,
      Goldornaments: form.controls["goldornaments"].value,
      CreatedBy:"",
      CreatedOn:"",
      
    }
    this.goldornamentservice.saveGoldOrnament(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGoldornaments();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGoldornaments();
          this.spinner.hide();
        }
      }
    );
  }
  GetGoldornaments() {
    this.spinner.show();
    this.goldornamentservice.getGoldOrnaments().subscribe((response: any) => {
      this.Roles = response;
      this.spinner.hide();
    });
  }
  editgold(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.goldoid = data.id;
    this.goldornaments = data.goldornaments;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.goldornaments != "") {
      this.goldornaments = "";
    }
  }
  deleteGold(data:any){
    this.rolid = data.id;
  }
  deleteGoldRow(){  
    this.spinner.show();
      this.goldornamentservice.deleteGolddata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetGoldornaments();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetGoldornaments();
          this.spinner.hide();
          } 
        });
    }

}


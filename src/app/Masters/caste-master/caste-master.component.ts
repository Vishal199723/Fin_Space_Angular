import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRole } from 'src/app/ViewModels/UserRole';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { CasteVM } from 'src/app/ViewModels/Masters';
import { CastemasterService } from 'src/app/Shared/CasteMaster/castemaster.service';


@Component({
  selector: 'app-caste-master',
  templateUrl: './caste-master.component.html',
  styleUrls: ['./caste-master.component.css']
})
export class CasteMasterComponent implements OnInit {
    userRole: UserRole;
    Roles: any;
    casteid:any;
    castename: string;
    roleDesc: any;
    rolid: number;
    showSave:any;
    showUpdate:any;
    p:number = 1
    public dismissalert = false;
    notify: string
    createdby: any;
    createdon: any;
    constructor(private messageService: MessageService,private casteservice: CastemasterService,private spinner: NgxSpinnerService) { 
      this.messageService.sendSession('true');
  
    }
  
    ngOnInit() {
      this.Getcastes();
      this.castename = "";
      this.roleDesc = "";
    }
    UpdateUserRole(form: NgForm) {
      this.spinner.show();
      const inputRequest1: CasteVM = {
        Id: this.casteid ,
        CasteName: form.controls["castename"].value,
        CreatedBy:  this.createdby,
        CreatedOn:  this.createdon,
        ModifiedBy:"",
        ModifiedOn:""
      }
      this.casteservice.UpdateUsercasteRow(inputRequest1).subscribe(
        (data: any) => {
            if (data == "success") {
              this.notify =  "  Updated Succesfully"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.Getcastes();
              this.spinner.hide();
          
          }
          else{
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getcastes();
            this.spinner.hide();
          }
        }
      );
    }
    SaveUserRoleD(form: NgForm) {
      this.spinner.show();
      const inputRequest: CasteVM = {
        Id: 0,
        CasteName: form.controls["castename"].value,
        CreatedBy:"",
        CreatedOn:"",
        ModifiedBy:"",
        ModifiedOn:""
      }
      this.casteservice.savecastedata(inputRequest).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  "  Saved Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getcastes();
            this.spinner.hide();
           
          }
          else{
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getcastes();
            this.spinner.hide();
          }
        }
      );
    }
    Getcastes() {
      this.spinner.show();
      this.casteservice.getcastemaster().subscribe((response: any) => {
        this.Roles = response;
        this.spinner.hide();
      });
    }
    editRole(data:any){
      this.showSave = false;
      this.showUpdate = true;
      this.casteid = data.id;
      this.castename = data.casteName;
      this.createdby=data.createdBy;
      this.createdon=data.createdOn;
    }
    addClick(){
      this.showSave = true;
      this.showUpdate = false;
      if (this.castename != "") {
        this.castename = "";
      }
    }
    deleteRole(data:any){
      this.rolid = data.id;
    }
    deleteroleRow(){  
      this.spinner.show();
        this.casteservice.deletecastedata(this.rolid).subscribe(
          (data: any) => {
            if (data != null) {
              this.notify =  "  Deleted Succesfully"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.Getcastes();
              this.spinner.hide();
             
            }else{
              this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getcastes();
            this.spinner.hide();
            } 
          });
      }
  
  }
  

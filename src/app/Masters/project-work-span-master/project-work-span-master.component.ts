import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ProjectWorkSpanService } from 'src/app/Shared/ProjectWorkSpanMaster/project-work-span.service';
import { workspanVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-project-work-span-master',
  templateUrl: './project-work-span-master.component.html',
  styleUrls: ['./project-work-span-master.component.css']
})
export class ProjectWorkSpanMasterComponent implements OnInit {

  projectworks: any;
  pwid:any;
  projects: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private projectworkService: ProjectWorkSpanService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getprojectworks();
    this.projects = "";
    this.roleDesc = "";
  }
  Updateprojectwork(form: NgForm) {
    this.spinner.show();
    const inputRequest1: workspanVM = {
      Id: this.pwid ,
      ProjectWorkSpan: form.controls["projects"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
    
    }
    this.projectworkService.UpdateprojectworkRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getprojectworks();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getprojectworks();
          this.spinner.hide();
        }
      }
    );
  }
  SaveprojectworkD(form: NgForm) {
    this.spinner.show();
    const inputRequest: workspanVM = {
      Id: 0,
      ProjectWorkSpan: form.controls["projects"].value,
      CreatedBy:"",
      CreatedOn:"",
    
    }
    this.projectworkService.saveprojectwork(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getprojectworks();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getprojectworks();
          this.spinner.hide();
        }
      }
    );
  }
  Getprojectworks() {
    this.spinner.show();
    this.projectworkService.getprojectworks().subscribe((response: any) => {
      this.projectworks = response;
      this.spinner.hide();
    });
  }
  editworkspan(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.pwid = data.id;
    this.projects = data.projectWorkSpan;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.projects != "") {
      this.projects = "";
    }
  }
  deleteworkspan(data:any){
    this.rolid = data.id;
  }
  deleteworkspanRow(){  
    this.spinner.show();
      this.projectworkService.deleteworkspandata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getprojectworks();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getprojectworks();
          this.spinner.hide();
          } 
        });
    }

}


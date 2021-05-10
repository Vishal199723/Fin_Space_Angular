import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { MaturityinstructorService } from 'src/app/Shared/MaturityinstructorMaster/maturityinstructor.service';
import { InstructionVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-maturityinstructor-master',
  templateUrl: './maturityinstructor-master.component.html',
  styleUrls: ['./maturityinstructor-master.component.css']
})
export class MaturityinstructorMasterComponent implements OnInit {

  Instructors: any;
  matid:any;
  maturityname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  constructor(private messageService: MessageService,private instructorService: MaturityinstructorService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetInstructors();
    this.maturityname = "";
    this.roleDesc = "";
  }
  Updatematinstructor(form: NgForm) {
    this.spinner.show();
    const inputRequest1: InstructionVM = {
      Id: this.matid ,
      MaturityInstruction: form.controls["maturityname"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.instructorService.UpdatematinstructorRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == 1) {
            this.notify = "Role Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetInstructors();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetInstructors();
          this.spinner.hide();
        }
      }
    );
  }
  SavematinstructorD(form: NgForm) {
    this.spinner.show();
    const inputRequest: InstructionVM = {
      Id: 0,
      MaturityInstruction: form.controls["maturityname"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.instructorService.savematinstructor(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Role Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetInstructors();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetInstructors();
          this.spinner.hide();
        }
      }
    );
  }
  GetInstructors() {
    this.spinner.show();
    this.instructorService.getmatinstructors().subscribe((response: any) => {
      this.Instructors = response;
      this.spinner.hide();
    });
  }
  editInstructors(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.matid = data.id;
    this.maturityname = data.maturityInstruction;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.maturityname != "") {
      this.maturityname = "";
    }
  }
  deleteInstructors(data:any){
    this.rolid = data.id;
  }
  deleteInstructorsRow(){  
    this.spinner.show();
      this.instructorService.deleteInstructorsdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = "Role Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetInstructors();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetInstructors();
          this.spinner.hide();
          } 
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { CertificateService } from 'src/app/Shared/CertificateMaster/certificate.service';
import { certificate } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-certificate-master',
  templateUrl: './certificate-master.component.html',
  styleUrls: ['./certificate-master.component.css']
})
export class CertificateMasterComponent implements OnInit {

  Roles: any;
  roleid:any;
  Certificatename: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  certificaties: any;
  constructor(private messageService: MessageService,private certificateService: CertificateService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.GetCertificate();
    this.Certificatename = "";
    this.roleDesc = "";
  }
  UpdateCertificate(form: NgForm) {
    this.spinner.show();
    const inputRequest1: certificate = {
      Id: this.roleid ,
      CertificateName: form.controls["Certificatename"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.certificateService.UpdateCertificateRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify =  "  Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetCertificate();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCertificate();
          this.spinner.hide();
        }
      }
    );
  }
  SaveCertificateD(form: NgForm) {
    this.spinner.show();
    const inputRequest: certificate = {
      Id: 0,
      CertificateName: form.controls["Certificatename"].value,
      CreatedBy:"",
      CreatedOn:"",
      ModifiedBy:"",
      ModifiedOn:""
    }
    this.certificateService.saveCertificate(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify =  "  Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCertificate();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCertificate();
          this.spinner.hide();
        }
      }
    );
  }
  GetCertificate() {
    this.spinner.show();
    this.certificateService.getCertificates().subscribe((response: any) => {
      this.certificaties = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.roleid = data.id;
    this.Certificatename = data.certificateName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.Certificatename != "") {
      this.Certificatename = "";
    }
  }
  deleteRole(data:any){
    this.rolid = data.id;
  }
  deleteroleRow(){  
    this.spinner.show();
      this.certificateService.deleteRoledata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify =  "  Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.GetCertificate();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCertificate();
          this.spinner.hide();
          } 
        });
    }

}


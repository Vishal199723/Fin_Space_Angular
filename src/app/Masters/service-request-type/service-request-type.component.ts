import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoanDisApprovedlistComponent } from 'src/app/ApprovedList/loan-dis-approvedlist/loan-dis-approvedlist.component';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ServiceRequestTypeService } from 'src/app/Shared/ServiceRequestTypeMaster/service-request-type.service';
import { ServiceTypeService } from 'src/app/Shared/ServiceTypeMaster/service-type.service';
import { ServicerequestVM } from 'src/app/ViewModels/Masters';
import { ServiceProviderProductsMasterComponent } from '../service-provider-products-master/service-provider-products-master.component';

@Component({
  selector: 'app-service-request-type',
  templateUrl: './service-request-type.component.html',
  styleUrls: ['./service-request-type.component.css']
})
export class ServiceRequestTypeComponent implements OnInit {

  requests: any;
  serid:any;
  requestname: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  Loanid: any;
  Serviceid: any;
  ServieTypeList: any;
  loansList: any;
  dataList: any;
  lid: any;
  Serid: any;
  constructor(private messageService: MessageService,private Servicetypeservice: ServiceTypeService,private servicerequest: ServiceRequestTypeService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getrequests();
    this.ServiceTypes();
    //this.GetLoansTypes();
    this.requestname = "";
    this.roleDesc = "";

  }
  onSelectloantype(data: any) {
    this.Loanid = data
  }
  onSelectservice(data: any) {
    this.Serviceid = data
    this.servicerequest.getloantypesdata(this.Serviceid).subscribe((Data: any) => {
      this.loansList = Data;
    })
    }

    GetLoans(id) {
      for (let index = 0; index < this.loansList.length; index++) {
        if (this.loansList[index].id == id) {
          return this.loansList[index].type;
        }
      }
    }

  ServiceTypes() {
    this.spinner.show();
    this.Servicetypeservice.getAllServiceTypes().subscribe((Data: any) => {
      this.ServieTypeList = Data;
      this.spinner.hide();
    })
  }

  GetService(id) {
    for (let index = 0; index < this.ServieTypeList.length; index++) {
      if (this.ServieTypeList[index].servieTypeId == id) {
        return this.ServieTypeList[index].serviceName;
      }
    }
  }
  GetLoansTypes() {
    this.spinner.show();
    this.servicerequest.getloansTypes().subscribe((Data: any) => {
      this.dataList = Data;
      this.spinner.hide();
    })
  }
  Updateservicerequest(form: NgForm) {
    this.spinner.show();
    const inputRequest1: ServicerequestVM = {
      Id: this.serid ,
      LoanTypeId:this.Loanid,
      ServiceTypeId:this.Serviceid,
      RequestName: form.controls["requestname"].value,
      LastUpdated:  this.createdon,
  
    }
    this.servicerequest.UpdateservicerequestRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getrequests();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getrequests();
          this.spinner.hide();
        }
      }
    );
  }
  SaveservicerequestD(form: NgForm) {
    this.spinner.show();
    const inputRequest: ServicerequestVM = {
      Id: 0 ,
      LoanTypeId:this.Loanid,
      ServiceTypeId:this.Serviceid,
      RequestName: form.controls["requestname"].value,
      LastUpdated:  this.createdon,
    }
    this.servicerequest.saveservicerequest(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getrequests();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getrequests();
          this.spinner.hide();
        }
      }
    );
  }
  Getrequests() {
    this.spinner.show();
    this.servicerequest.getservicerequests().subscribe((response: any) => {
      this.requests = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.serid = data.id;
    this.Serid = this.GetService(data.serviceTypeId);
    this.lid = data.loanTypeId;
    this.requestname = data.requestName;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.requestname != "") {
      this.requestname = "";
    }
  }
  deleteservicerequest(data:any){
    this.rolid = data.id;
  }
  deleteservicerequestRow(){  
    this.spinner.show();
      this.servicerequest.deleteservicerequestdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getrequests();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getrequests();
          this.spinner.hide();
          } 
        });
      }
    }

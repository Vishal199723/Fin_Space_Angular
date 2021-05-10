import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceTypeService } from 'src/app/Shared/ServiceTypeMaster/service-type.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements OnInit {
  sveser: boolean;
  ServieTypeList: any[];
  updser: boolean;
  servietypeId: any;
  deleteid: any;
  public dismissalert = false;
  notify: string
  p:number=1;
  serviceName: string;
  constructor(private messageService: MessageService,private Servicetypeservice: ServiceTypeService, private spinner: NgxSpinnerService, ) {
    this.messageService.sendSession('true');

   }

  ngOnInit() {
    this.ServiceTypes();
    this.serviceName = "";
    this.sveser = true;
  }
  ServiceTypes() {
    this.spinner.show();
    this.Servicetypeservice.getAllServiceTypes().subscribe((Data: any) => {
      this.ServieTypeList = Data;
      this.spinner.hide();
    })
  }


  addServiceType() {
    this.sveser = true;
    this.updser = false;
    if (this.serviceName != "") {
      this.serviceName = "";
    }
  }

  editServiceName(data: { serviceName: any; servieTypeId: any }) {
    this.sveser = false;
    this.updser = true;
    this.serviceName = data.serviceName;
    this.servietypeId = data.servieTypeId;
  }

  SaveServiceType(form: NgForm) {
    const inputRequest = {
      Id: 0,
      ServiceName: form.controls["serviceName"].value,
      CreatedBy:"",
      LastUpdated: "",
    }
    this.spinner.show();
    this.Servicetypeservice.SaveServiceName(inputRequest).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = "Service Name added Successfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.ServiceTypes();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.ServiceTypes();
        }
      });
  }

  UpdateServiceType(form: NgForm) {
    const inputRequest1 = {
      ServieTypeId: this.servietypeId,
      ServiceName: form.controls["serviceName"].value,
     
    }
    this.spinner.show();
    this.Servicetypeservice.UpdateServiceName(inputRequest1).subscribe(
      (data: any) => {
        if (data == "1") {
          this.notify = "Service Type Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.ServiceTypes();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.ServiceTypes();
          this.spinner.hide();
        }
      });
  }


  deleteServiceName(data: { servieTypeId: any; }) {
    this.deleteid = data.servieTypeId;
  }

  deleteService() {
    this.spinner.show();
    this.Servicetypeservice.deleteServiceName(this.deleteid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Service Type Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.ServiceTypes();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.ServiceTypes();
          this.spinner.hide();
        }
      });
  }

 

}

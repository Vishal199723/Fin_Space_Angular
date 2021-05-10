import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-insurance-service-providers',
  templateUrl: './insurance-service-providers.component.html',
  styleUrls: ['./insurance-service-providers.component.css']
})
export class InsuranceServiceProvidersComponent implements OnInit {
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  message: boolean;
  isLoggedIn: boolean;
  selectedinsurancetype: string;
  Prividers: any;
  plist: boolean;
  spname: any;
  insuranceproducts: any;
  tickid: any;
  p: number = 1
  constructor(private messageService: MessageService,private spinner: NgxSpinnerService, private serviceprovservice: ServiceProviderService,
    private router: Router) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");

      this.message = true;
      this.isLoggedIn = true;
      this.selectedinsurancetype = localStorage.getItem("selectedinsurancetype");
  

    }
  }

  ngOnInit() {
    this.plist = false;
    this.GetProviders(5);

  }
  GetProviders(id) {
    this.spinner.show();
    this.serviceprovservice.GetAllProviders(id).subscribe((data: any) => {
      if (data != null) {
        this.Prividers = data;
        this.spinner.hide();
      }
    })
  }

  GetLoanProducts(id) {
    this.plist = true;
    this.spname = id.serviceProviderName;
    this.selectedinsurancetype = localStorage.getItem("selectedinsurancetype");
    var info = {
      Selectedloantype: this.selectedinsurancetype,
      SPID: id.userId
    }
    this.spinner.show();
    this.serviceprovservice.AllProductsForInsurance(info).subscribe((data: any) => {
      this.insuranceproducts = data;
      this.spinner.hide();
    })
  }

  openloanform(id) {
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedinsurancetype', id);
      this.router.navigate(['/signin']);
    }
    else {
      var info = {
        Information: this.selectedinsurancetype,
        ToServiceProvider: id.serviceProviderId,
        CusId: this.uid
      }
      this.spinner.show();
      this.serviceprovservice.insertticketdetailsforinsurance(info).subscribe((data: any) => {
        if (data != null) {
          this.tickid = data;
          localStorage.setItem('TicketId', this.tickid);
          if (this.selectedinsurancetype == "1") {
            this.router.navigate(['/HealthInsurance']);
          }
          else if (this.selectedinsurancetype == "2") {
            this.router.navigate(['/HomeInsurance']);
          }
          else if (this.selectedinsurancetype == "3") {
            this.router.navigate(['/lifeInsurance']);
          }
          else if (this.selectedinsurancetype == "4") {
            this.router.navigate(['/MotorInsurance']);
          }
          else if (this.selectedinsurancetype == "5") {
            this.router.navigate(['/AccidentInsurance']);
          }
          else if (this.selectedinsurancetype == "6") {
            this.router.navigate(['/termlifeinsurance']);
          }

        }
        this.spinner.hide();
        //this.ServiceRequestTypes(id);
      })
    }

  }
}

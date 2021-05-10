import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestTypeService } from '../Shared/ServiceRequestType/request-type.service';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-loan-serviceproviders',
  templateUrl: './loan-serviceproviders.component.html',
  styleUrls: ['./loan-serviceproviders.component.css']
})
export class LoanServiceprovidersComponent implements OnInit {
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  message: boolean;
  isLoggedIn: boolean;
  selectedloantype: string;
  Prividers: any;
  loanproducts: any;
  spname: any;
  plist: boolean;
  tickid: any;
  selectedSP: any;

  constructor(private messageService: MessageService,private route:ActivatedRoute,private serviceprovservice:ServiceProviderService,
    private spinner:NgxSpinnerService,private ServiceRequesttypeservice:RequestTypeService,private router: Router,) { 
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem("IsLoggedIn") == "true") {
        this.uid = localStorage.getItem("userId");
        this.useremail = localStorage.getItem("Email");
        this.username = localStorage.getItem("fullname");
        this.roleid = localStorage.getItem("role");
  
        this.message = true;
        this.isLoggedIn = true;
        this.selectedloantype = localStorage.getItem("selectedinsurancetype");
   
      } 
  
  }
  ngOnInit() {
    this.plist = false;
    this.GetProviders(4)
   }

  GetProviders(id){
    this.spinner.show();
    this.serviceprovservice.GetAllProviders(id).subscribe((data:any)=>{
      this.Prividers = data;
      this.spinner.hide();
      //this.ServiceRequestTypes(id);
    })
  }

  GetLoanProducts(id){
    this.plist = true;
    this.spname = id.serviceProviderName;
    this.selectedloantype = localStorage.getItem("selectedinsurancetype");
    var info = {
      Selectedloantype : this.selectedloantype,
      SPID: id.userId
    }
    this.spinner.show();
    this.serviceprovservice.Allproducts(info).subscribe((data:any)=>{
      this.loanproducts = data;
      console.log(this.loanproducts);
      this.spinner.hide();
      //this.ServiceRequestTypes(id);
    })
  }

  openloanform(id){
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedloantype', id);
      this.router.navigate(['/signin']);
    }
    else {
      var info = {
        Information: this.selectedloantype,
        ToServiceProvider: id.serviceProviderId,
        CusId: this.uid
      }
      this.spinner.show();
      this.serviceprovservice.insertticketdetails(info).subscribe((data: any) => {
        if (data != null) {
          this.tickid = data;
          localStorage.setItem('TicketId', this.tickid);
          if (this.selectedloantype == "1") {
            this.router.navigate(['/businessloanform']);
          }
          else if (this.selectedloantype == "2") {
            this.router.navigate(['/vehecleloanform']);
          }
          else if (this.selectedloantype == "3") {
            this.router.navigate(['/suretyloanform']);
          }
          else if (this.selectedloantype == "4") {
            this.router.navigate(['/smallscaleloanform']);
          }
          else if (this.selectedloantype == "5") {
            this.router.navigate(['/fixedassetloan']);
          }
          else if (this.selectedloantype == "6") {
            this.router.navigate(['/Projectloan']);
          }
          else if (this.selectedloantype == "1003") {
            this.router.navigate(['/homeloan']);
          }
          else if (this.selectedloantype == "1001") {
            this.router.navigate(['/Goldloan']);
          }
          else if (this.selectedloantype == "1002") {
            this.router.navigate(['/Educationloan']);
          }
          else if (this.selectedloantype == "1004") {
            this.router.navigate(['/fdform']);
          }
        }
        console.log(this.loanproducts);
        this.spinner.hide();
        //this.ServiceRequestTypes(id);
      })

    }
  }
}

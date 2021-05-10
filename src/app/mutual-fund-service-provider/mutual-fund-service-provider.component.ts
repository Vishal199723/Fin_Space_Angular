import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { RequestTypeService } from '../Shared/ServiceRequestType/request-type.service';

@Component({
  selector: 'app-mutual-fund-service-provider',
  templateUrl: './mutual-fund-service-provider.component.html',
  styleUrls: ['./mutual-fund-service-provider.component.css']
})
export class MutualFundServiceProviderComponent implements OnInit {
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
  p: number = 1;q: number = 1;

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
        //this.selectedloantype = localStorage.getItem("selectedloantype");
        this.selectedloantype = localStorage.getItem("selectedmutualfundtype");

      } 
  
  }
  ngOnInit() {
    this.plist = false;
    this.GetProviders(6)
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
    //this.selectedloantype = localStorage.getItem("selectedloantype");
    this.selectedloantype = localStorage.getItem("selectedmutualfundtype");

    var info = {
      Selectedloantype : this.selectedloantype,
      SPID: id.userId
    }
    this.spinner.show();
    this.serviceprovservice.AllFundsproducts(info).subscribe((data:any)=>{
      this.loanproducts = data;
      console.log(this.loanproducts);
      this.spinner.hide();
      //this.ServiceRequestTypes(id);
    })
  }

  openfundform(id){
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedmutualfundtype', this.selectedloantype);
      this.router.navigate(['/signin']);
    }
    else{
      var info = {
        Information : this.selectedloantype,
        ToServiceProvider: id.serviceProviderId,
        CusId : this.uid
      }
      this.spinner.show();
      this.serviceprovservice.insertmutualticketdetails(info).subscribe((data:any)=>{     
        if (data != null) {
          this.tickid = data;
          localStorage.setItem('TicketId', this.tickid);
          if(this.selectedloantype=="1"){
            this.router.navigate(['/fdform']); 
          }
          else if(this.selectedloantype=="2"){
            this.router.navigate(['/Mutualfund']); 
          }
                 
        }
        console.log(this.loanproducts);
        this.spinner.hide();
        //this.ServiceRequestTypes(id);
      })
    }
    // var info = {
    //   Information : this.selectedloantype,
    //   ToServiceProvider: id.serviceProviderId,
    //   CusId : this.uid
    // }
    // this.spinner.show();
    // this.serviceprovservice.insertmutualticketdetails(info).subscribe((data:any)=>{     
    //   if (data != null) {
    //     this.tickid = data;
    //     localStorage.setItem('TicketId', this.tickid);
    //       this.router.navigate(['/Mutualfund']);      
    //   }
    //   console.log(this.loanproducts);
    //   this.spinner.hide();
    //   //this.ServiceRequestTypes(id);
    // })

   
  }
}


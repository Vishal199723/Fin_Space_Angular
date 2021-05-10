import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestTypeService } from 'src/app/Shared/ServiceRequestType/request-type.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';
@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {

  value: any;
  Prividers: any;
  SelectedSP: any;
  ServieRequestTypeList: any;
  SelectedReequest: any;
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  message: boolean;
  isLoggedIn: boolean;
 

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
  
      }

    this.route.params.subscribe(params=>{
      if(params["id"]){
        this.value=(params["id"]);
        this.GetProviders(this.value);
      }
    })
  
  }

  ngOnInit() {
  }
 

  
  ServiceRequestTypes(id) {
    this.spinner.show();
    this.ServiceRequesttypeservice.getServiceRequestTypes(id).subscribe((Data: any) => {
      this.ServieRequestTypeList = Data;
      this.spinner.hide();

    })
  }
  GetProviders(id){
    this.spinner.show();
    this.serviceprovservice.GetAllProviders(id).subscribe((data:any)=>{
      this.Prividers = data;
      this.spinner.hide();
      this.ServiceRequestTypes(id);
    })
  }
  RequestService(item){
    this.SelectedSP = item.serviceProviderName;
    localStorage.setItem("SelectedSP",this.SelectedSP)
    localStorage.setItem("SelectedSPId",item.id)
    localStorage.setItem("SelectedSPUserId",item.id)

  }


  SendRequest(item){
    if(this.isLoggedIn == true){
      localStorage.setItem("productdata", JSON.stringify(item));
      localStorage.setItem('selectedinsurancetype', item.loanTypeId);
      localStorage.setItem('selectedinsuranceProducttype', item.serviceTypeId);
      localStorage.setItem('fromdashboardflow', "true");
      localStorage.setItem("SelectedSP",this.SelectedSP);
      localStorage.setItem("SelectedSPId",item.id);
      localStorage.setItem("SelectedSPUserId",item.id)
      this.router.navigate(['throughFlow']);
      //this.router.navigate(['/sendservicerequest/' + JSON.stringify(item)])
    }
    else{
      localStorage.setItem("productdata", JSON.stringify(item));
      this.router.navigate(['/signup']);
    }
  }

  // SendRequest(item){
  //   if(this.isLoggedIn == true){
  //     this.router.navigate(['/sendservicerequest/' + JSON.stringify(item)])
  //     localStorage.setItem("productdata", JSON.stringify(item));
  //   }
  //   else{
  //     localStorage.setItem("productdata", JSON.stringify(item));
  //     this.router.navigate(['/signup'])
  //   }
  // }
}

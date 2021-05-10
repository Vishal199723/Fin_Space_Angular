import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { RequestTypeService } from 'src/app/Shared/ServiceRequestType/request-type.service';
import { SignupService } from 'src/app/Shared/Signup/signup.service';

@Component({
  selector: 'app-through-router',
  templateUrl: './through-router.component.html',
  styleUrls: ['./through-router.component.css']
})
export class ThroughRouterComponent implements OnInit {
  BAList: any;
  selectedba: any;
  DateTime: Date;
  uid: string;
  RegisterThroughBA:any;
  Prividers: any;
  RegisterThroughSP:any;
  ServieRequestTypeList: any;
  selectedSp: any;
  Prividerlist: any;
  selectSp: any;
  selectedinsuranceProducttype: string;
  selectedProducttype: string;

  fromdashboard: string;
  tickid: any;
  selectedloantype: string;
  SelectedSPId: string;
  SelectedSPUserId: string;
  selectedloantypeidfromdashboard: string;
  product: string;

  constructor(private httpService: HttpClient,private router: Router,private spinner: NgxSpinnerService,private signupservice: SignupService, private datepipe: DatePipe,private serviceprovservice:ServiceProviderService,private ServiceRequesttypeservice:RequestTypeService) { 
    this.uid = localStorage.getItem("userId");
    this.selectedProducttype = localStorage.getItem("selectedinsuranceProducttype");
    this.fromdashboard = localStorage.getItem("fromdashboardflow");
    this.selectedloantype=localStorage.getItem('selectedloantype');
    this.SelectedSPId=localStorage.getItem('SelectedSPId');
    this.SelectedSPUserId=localStorage.getItem('SelectedSPUserId');
    this.selectedloantypeidfromdashboard=localStorage.getItem('selectedinsurancetype');

  }

  ngOnInit() {
    this.GetAllBusinessAssociates();
    this.GetProviders();
    this. GetProviderdata();
  }

  RedirectUser(){
     if (localStorage.getItem('IsLoggedIn') == "true") {
        localStorage.getItem('selectedloantype');
        this.router.navigate(['/loansp']);
    }
    else{
      this.router.navigate(['/signin']);
    }
  }
  GetAllBusinessAssociates() {
    this.spinner.show()
    this.signupservice.GetAllBA().subscribe((data => {
      this.spinner.hide()
      this.BAList = data;
    }))
  }
  GetProviderdata(){
    this.spinner.show();
    this.signupservice.GetAllserviceProviders().subscribe((data:any)=>{
      this.Prividerlist = data;
      this.spinner.hide();
    });
  }
  onSelectBA(id) {
    this.selectedba = id
  }
  onSelectlistSP(id)
  {
      this.selectSp = id;

  }
  SendMailToBA() {
    const frmData = new FormData();
    this.spinner.show();
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    const inputRequest = {
      BAId:this.selectedba,
      UID:this.uid,
      SPID:this.selectSp,
      lid : localStorage.getItem("selectedinsurancetype"),
      Selctedproducttype : localStorage.getItem("selectedinsuranceProducttype"),
    }
    frmData.append("CreatedOn", latest_date);
    frmData.append("RegData", JSON.stringify(inputRequest));
    this.spinner.show();

    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostSendMailToBA/', frmData).subscribe(
      data => {
        this.spinner.hide();
        alert("Selected Business Associate has be informed!")
        this.router.navigate(['/Ack']);
      });
  }
  // RedirectUserToDirect(){
  //   this.router.navigate(['/loansp']);
  // }


  RedirectUserToDirect(){
    this.product = localStorage.getItem("selectedinsurancetype")

    if(this.fromdashboard == "true"){
      var info = {
        Information: this.selectedloantypeidfromdashboard,
        ToServiceProvider: this.SelectedSPUserId,
        CusId: this.uid
      }
      this.spinner.show();
      this.serviceprovservice.insertticketdetails(info).subscribe((data: any) => {
        if (data != null) {
          this.tickid = data;
          localStorage.setItem('TicketId', this.tickid);
          if (this.selectedProducttype == "4") {
            if (this.selectedloantypeidfromdashboard == "1") {
              this.router.navigate(['/businessloanform']);
            }
            else if (this.selectedloantypeidfromdashboard == "2") {
              this.router.navigate(['/vehecleloanform']);
            }
            else if (this.selectedloantypeidfromdashboard == "3") {
              this.router.navigate(['/suretyloanform']);
            }
            else if (this.selectedloantypeidfromdashboard == "4") {
              this.router.navigate(['/smallscaleloanform']);
            }
            else if (this.selectedloantypeidfromdashboard == "5") {
              this.router.navigate(['/fixedassetloan']);
            }
            else if (this.selectedloantypeidfromdashboard == "6") {
              this.router.navigate(['/Projectloan']);
            }
            else if (this.selectedloantypeidfromdashboard == "1003") {
              this.router.navigate(['/homeloan']);
            }
            else if (this.selectedloantypeidfromdashboard == "1001") {
              this.router.navigate(['/Goldloan']);
            }
            else if (this.selectedloantypeidfromdashboard == "1002") {
              this.router.navigate(['/Educationloan']);
            }
            else if (this.selectedloantypeidfromdashboard == "1004") {
              this.router.navigate(['/fdform']);
            }
          }
          else if(this.selectedProducttype == "5"){
            if (this.selectedloantypeidfromdashboard == "1") {
              this.router.navigate(['/HealthInsurance']);
            }
            else if (this.selectedloantypeidfromdashboard == "2") {
              this.router.navigate(['/HomeInsurance']);
            }
            else if (this.selectedloantypeidfromdashboard == "3") {
              this.router.navigate(['/lifeInsurance']);
            }
            else if (this.selectedloantypeidfromdashboard == "4") {
              this.router.navigate(['/MotorInsurance']);
            }
            else if (this.selectedloantypeidfromdashboard == "5") {
              this.router.navigate(['/AccidentInsurance']);
            }
            else if (this.selectedloantypeidfromdashboard == "6") {
              this.router.navigate(['/termlifeinsurance']);
            }
          }
          else if(this.selectedProducttype == "6"){
            if(this.selectedloantypeidfromdashboard=="1"){
              this.router.navigate(['/fdform']); 
            }
            else if(this.selectedloantypeidfromdashboard=="2"){
              this.router.navigate(['/Mutualfund']); 
            }
          }
        }
        localStorage.removeItem("fromdashboardflow");
        this.spinner.hide();
      })
    }
    else if(this.selectedProducttype == "4"){
      localStorage.setItem('selectedinsurancetype', this.product);
      localStorage.setItem('selectedloantype', this.product);
      localStorage.setItem('selectedinsuranceProducttype', this.selectedProducttype );
      this.router.navigate(['/loansp']);
    }
    else if(this.selectedProducttype == "5"){
      localStorage.setItem('selectedinsurancetype', this.product);
      localStorage.setItem('selectedinsuranceProducttype', this.selectedProducttype );
      this.router.navigate(['/insurancesp']);
    }
    else if(this.selectedProducttype == "6"){
      localStorage.setItem('selectedinsurancetype', this.product);
      localStorage.setItem('selectedmutualfundtype', this.product);
      localStorage.setItem('selectedinsuranceProducttype', this.selectedProducttype );
      
      this.router.navigate(['/Mutualfundsp']);
    }
  }

  

  GetProviders(){
    this.spinner.show();
    let id  = localStorage.getItem("selectedinsuranceProducttype");
    this.serviceprovservice.GetAllProviders(id).subscribe((data:any)=>{
      this.Prividers = data;
      this.ServiceRequestTypes(id);
      this.spinner.hide();
    });
  }

  ServiceRequestTypes(id) {
    this.spinner.show();
    this.ServiceRequesttypeservice.getServiceRequestTypes(id).subscribe((Data: any) => {
      this.ServieRequestTypeList = Data;
      console.log(this.ServieRequestTypeList);
      this.spinner.hide();

    });
  }

  onSelectSP(id)
  {
      this.selectedSp = id;
      let item = this.Prividers.filter(data=> data.id == id);
      localStorage.setItem("SelectedSP",item[0].serviceProviderName);
  }

  SendMailToSP()
  {
    let id  = Number(localStorage.getItem("selectedinsurancetype"));
    if(this.selectedSp != null && id != null && id != 0)
    {

    localStorage.setItem("SelectedSPId",this.selectedSp);
   
     let item = this.ServieRequestTypeList.filter(data=> data.loanTypeId == id);

     localStorage.setItem("productdata", JSON.stringify(item[0]));
      this.router.navigate(['/sendservicerequest/' + JSON.stringify(item[0])]);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-send-service-request',
  templateUrl: './send-service-request.component.html',
  styleUrls: ['./send-service-request.component.css']
})
export class SendServiceRequestComponent implements OnInit {
  value: any;
  SelectedSP: any;
  SelectedService: any;
  SendRequestForm = new FormGroup({
    fullName: new FormControl(),
    contactnumber: new FormControl(),
    email: new FormControl(),
    address1: new FormControl(),
    address2: new FormControl(),
    info: new FormControl(),
    date: new FormControl(),
    servicetime: new FormControl(),
    postalcode:new FormControl(),
    country: new FormControl(),
    state: new FormControl(),
    district:new FormControl(),
  });
  fullName: any;
  contactnumber: any;
  email: any;
  address1: any;
  info: any;
  date: any;
  servicetime: any;
  submitted: boolean;
  LatestDate: any;
  notify: string;
  district:any
  state:any
  country:any
  postalcode:any
  address2:any
  dismissalert: boolean;
  AllUserData: any;
  get f() { return this.SendRequestForm.controls; }
  uid:any
  selectedspid:any
  constructor(private messageService: MessageService,private route: ActivatedRoute, private formBuilder: FormBuilder,private datepipe:DatePipe,private router: Router,
  private spinner:NgxSpinnerService,private serviceproviderservice:ServiceProviderService,private http:HttpClient) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.value = (params["id"]);
        this.SelectedService = JSON.parse(this.value);
      }
    })
    this.uid = localStorage.getItem("userId");

    this.SelectedSP = localStorage.getItem("SelectedSP");
   this.selectedspid =  localStorage.getItem("SelectedSPId")

    this.SendRequestForm = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      postalcode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      info: [''],
      date: ['', Validators.required],
      servicetime: [''],
      contactnumber: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999), Validators.pattern(/^[6-9]\d{9}$/)]],
      country:[],
      state:[],
      district:[]
    })
     this.LatestDate= new Date();
    this.date =this.datepipe.transform(this.LatestDate, 'dd-MM-yyyy hh:mm a');
  }

  ngOnInit() {
    this.GetUserDetails();
  }
  GetUserDetails(){
    this.spinner.show();
    this.serviceproviderservice.GetUserDetails(this.uid).subscribe((data:any)=>{
      this.spinner.hide();
      this.AllUserData=data;
      this.postalcode=this.AllUserData.postalCode;
      this.getalldata();
      this.fullName=this.AllUserData.userName;
      this.contactnumber=this.AllUserData.mobileNumber;
      this.address1=this.AllUserData.address1;
      this.address2=this.AllUserData.address2;
      this.email=this.AllUserData.email;
    })
  }
  getalldata() {
    this.spinner.show();
    var pin = this.postalcode;
    this.http.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      this.spinner.hide();
      console.log(data);
      this.spinner.hide();
      if(data[0].Status == "404"){
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if(data[0].Message.includes('Number of pincode')){
        this.state = data[0].PostOffice[0].State;
        this.country = data[0].PostOffice[0].Country;
        this.district = data[0].PostOffice[0].District;
      }
      else{
        alert("Enter valid Pincode");
      }
    })
  }
  sendRequestToServiceProvider(){
  this.submitted = true;
  if (this.SendRequestForm.invalid) {
    return;
  } 
  else{
    
    var data = {
            CusId: this.uid,
            Name: this.fullName,
            ContactNumber: this.contactnumber,
            Email: this.email,
            PostalCode:this.postalcode,
            Country:this.country,
            State:this.state,
            District:this.district,
            Address1: this.address1,
            Address2: this.address2,
            Information:this.SelectedService.requestName,
            ServiceDate: this.date,
            ServiceTime: this.date,
            ToServiceProvider: this.selectedspid,
            RequestType: this.SelectedService.id
        };
        this.spinner.show();

        this.serviceproviderservice.SendRequest(data).subscribe((data:any)=>{
          if(data!=null){
            this.notify = "Your Application is received your Application Numberv is " + data
            alert("Your Application is received  your  Application Number is " + data)
            this.router.navigate(['/customerdashboard']);
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            this.router.navigate(['/customerdashboard']);
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
  }
}
}

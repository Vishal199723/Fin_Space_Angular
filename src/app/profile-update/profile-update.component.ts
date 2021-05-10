import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignupService } from '../Shared/Signup/signup.service';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  uid: string;
  username: string;
  role: string;
  profileDetails: any;
  OTP:any
  EmailOTP:any
  signupForm = new FormGroup({
    FirstName: new FormControl(),
    LastName: new FormControl(),

  });
  editmobileForm = new FormGroup({
    MobileNumber: new FormControl()
  });
  editemailForm = new FormGroup({
    Email: new FormControl()
  });
  otpForm = new FormGroup({
    OTP: new FormControl()
  });
  otpEmailForm = new FormGroup({
    EmailOTP: new FormControl()
  });
  LastName: any;
  FirstName: any;
  DateTime: Date;
  MobileNumber: any;
  draggedfiles:any
  imageUrl:any
  selectimage:any
  enableotp: any=false;
  PreviousNumber: any;
  mobileotpnumber: any;
  NewNumber: any;
  PreviousEmail: any;
  Email: any;
  NewEmail: any;
  companylogo: any;
  logoexist: boolean;
  get f() { return this.signupForm.controls; }
  get m() { return this.editmobileForm.controls; }
  get o() { return this.otpForm.controls; }
  get e() { return this.otpEmailForm.controls; }
  get k() { return this.editemailForm.controls; }

  submitted = false;
  submittedmobile = false;
  submittedemail = false;
  submittedotp = false;
  submitteemaildotp = false;

  @ViewChild('closebutton') closebutton;
  @ViewChild('closeMobilebutton') closeMobilebutton;
  @ViewChild('closeEmailbutton') closeEmailbutton;

  constructor(private messageService: MessageService,private spinner: NgxSpinnerService, private signupservice: SignupService, private formBuilder: FormBuilder,
    private datepipe: DatePipe) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.role = localStorage.getItem("role");
    this.signupForm = formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
    })
    this.editmobileForm = formBuilder.group({
      MobileNumber: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999), Validators.pattern(/^[6-9]\d{9}$/)]],
    })
    this.editemailForm= formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
    })
    this.otpForm = formBuilder.group({
      OTP: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    })
    this.otpEmailForm = formBuilder.group({
      EmailOTP: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    })
    if( this.uid.includes("SVP")){
      this.GetCompanyLogo();
    }
  }

  ngOnInit() {
    this.GetProfileDetails();
  }
  GetProfileDetails() {
    this.spinner.show();
    this.signupservice.getProfileDetails(this.uid).subscribe((response: any) => {
      this.profileDetails = response;
      if (this.profileDetails != null) {
        this.LastName = this.profileDetails.lastName
        this.FirstName = this.profileDetails.firstName
        this.MobileNumber=this.profileDetails.mobileNumber
        this.Email=this.profileDetails.email
        this.PreviousNumber=this.profileDetails.mobileNumber
        this.PreviousEmail=this.profileDetails.email

      }
      this.spinner.hide();
    });
  }
  UpdatecustomerName() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return
    }
    else {
      this.closebutton.nativeElement.click();

      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      this.spinner.show();
      var data = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        CreatedOn: latest_date,
        UserId: this.uid
      }
      this.signupservice.UpdateFullName(data).subscribe((response: any) => {
        this.spinner.hide();
        this.GetProfileDetails();

      });
    }
  }
  SendMobileOTP(){
    this.submittedmobile=true
    if(this.editmobileForm.invalid){
      return;
    }
    else if(this.PreviousNumber==this.MobileNumber){
      alert("number is same as previous one please reenter the mobile number")
    }
    else {
      this.NewNumber=this.MobileNumber
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      this.spinner.show();
      var data = {
        MobileNumber: this.MobileNumber,
        CreatedOn: latest_date,
        UserId: this.uid
      }
      this.signupservice.SendMobileOTP(data).subscribe((response: any) => {
        if(response=='1'){
        this.enableotp=true
        this.MobileNumber = this.MobileNumber;
        }

        this.spinner.hide();

        //this.GetProfileDetails();

      });
    }
  }
  SendEmaileOTP(){
    this.submittedemail=true
    if(this.editemailForm.invalid){
      return;
    }
    else if(this.PreviousEmail==this.Email){
      alert("email is same as previous one please reenter the Email")
    }
    else {
      this.NewEmail=this.Email
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      this.spinner.show();
      var data = {
        Email: this.Email,
        CreatedOn: latest_date,
        UserId: this.uid,
        UserName:this.username

      }
      this.signupservice.SendMobileOTP(data).subscribe((response: any) => {
        if(response=='1'){
        this.enableotp=true

        }

        this.spinner.hide();
        this.Email = this.Email;
        //this.GetProfileDetails();

      });
    }
  }
  UpdatecustomerMobileNumber(){
    this.submittedotp=true
    if(this.otpForm.invalid){
      return;
    }
    else {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      this.spinner.show();
      var data = {
        MobileorEmail: this.NewNumber,
        OTP:this.OTP,
        CreatedOn: latest_date,
        UserId: this.uid
      }
      this.signupservice.ValidateOTP(data).subscribe((response: any) => {
        if(response=='0'){
          alert("Your Mobile Number has been updated!")
          this.closeMobilebutton.nativeElement.click();
        }
        else if(response=='1'){
          alert("Incorrect OTP")

        }
        else if(response=='2'){
          alert("OTP has been expired,Click Send OTP button to get new OTP")
        }

        this.spinner.hide();

        this.GetProfileDetails();

      });
    }
  }
  UpdatecustomerEmail(){
    this.submitteemaildotp=true
    if(this.otpEmailForm.invalid){
      return;
    }
    else {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      this.spinner.show();
      var data = {
        MobileorEmail: this.NewEmail,
        OTP:this.EmailOTP,
        CreatedOn: latest_date,
        UserId: this.uid,
        UserName:this.username
      }
      this.signupservice.ValidateEmailOTP(data).subscribe((response: any) => {
        if(response=='0'){
          alert("Your Email has been updated!")
          this.closeEmailbutton.nativeElement.click();
        }
        else if(response=='1'){
          alert("Incorrect OTP")

        }
        else if(response=='2'){
          alert("OTP has been expired,Click Send OTP button to get new OTP")
        }

        this.spinner.hide();

        this.GetProfileDetails();

      });
    }
  }
  GetCompanyLogo(){
    this.spinner.show();
    this.signupservice.getCompanyLogo(this.uid).subscribe((data:any)=>{
      this.companylogo=data
      this.logoexist=true;
      this.spinner.hide();

    })
  }
}

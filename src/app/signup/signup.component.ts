import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../LoginService/login.service';
import { Router } from '@angular/router';
import { MatStepper, DateAdapter } from '@angular/material';
import { Signup } from '../ViewModels/SignupVM';
import { MatStepperModule } from '@angular/material/stepper';
import * as $ from 'jquery';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmailValidation } from '../ViewModels/EmailValidation';
import { DatePipe } from '@angular/common';
import { SignupService } from '../Shared/Signup/signup.service';
import { Subject, Observable } from '../../../node_modules/rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { MessageService } from '../MessageService/meaagse.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  CountryList: any;
  RegistrationForm = new FormGroup({

    fname: new FormControl(),
    sname: new FormControl(),
    Surname: new FormControl(),
    email: new FormControl(),
    staddress: new FormControl(),
    staddress2: new FormControl(),
    city: new FormControl(),
    pincode: new FormControl(),
    phnno: new FormControl(),
    password: new FormControl(),
    cpassword: new FormControl(),
    otp: new FormControl(),
    RegisterThroughBA: new FormControl(),
  });
  sname: any
  submitted = false;
  validtrue = false;
  fname: any;
  surname: any;
  Surname: any
  email: any;
  staddress: any;
  staddress2: any;
  city: any;
  pincode: any;
  phnno: any;
  cpassword: any;
  checkemail: string;
  checkphone: string;
  checkpincode: string;
  password: any;
  files1: any;
  SelectedFiles: any;
  validfile: boolean;
  DateTime: Date;
  alldata: void;
  public dismissalert = false;
  notify: string
  validateemail: any;
  mailresult: any;
  validmail: boolean = false;
  validateusername: any;
  usernameresult: any;
  mobileview: boolean;
  files2: any;
  SignatureFile: any;
  SignatureFileTwo: any;
  ImageFile: any;
  validatephnumber: any;
  mobileresult: any;
  validmobile: boolean;
  imageurl: string | ArrayBuffer;
  signatureurl: string | ArrayBuffer;
  signatureurltwo: string | ArrayBuffer;
  houseno: any;
  buildingname: any;
  uimg: any;
  drawsign: boolean;
  choosesign: boolean;
  uploadign: boolean;
  sigimg: any;
  signatureImage: any;
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];


  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  public nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  sigres: Object;
  sgimg: string | Blob;
  imageres: Object;
  otp: any;
  senddata: {};
  validotp: boolean;
  otpresult: any;
  enableotp: boolean;
  displayotpmsg: string;
  imageverfiyid: Object;
  signatureverfiyid: Object;
  BAList: any;
  selectedba: any;
  imageurltwo: string | ArrayBuffer;
  userimage: any;
  imageChangedEvent: any;
  croppedImage: any;
  get f() { return this.RegistrationForm.controls; }
  RegisterThroughBA: any=false

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private router: Router, private httpService: HttpClient, private spinner: NgxSpinnerService,
    private datepipe: DatePipe, private signupservice: SignupService) {
      localStorage.setItem("Loder", "0");
    this.RegistrationForm = formBuilder.group({
      fname: ['', Validators.required],
      sname: ['', Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      // email: ['', Validators.pattern(/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/)],
      houseno: ['', Validators.required],
      buildingname: ['', Validators.required],
      staddress: ['', Validators.required],
      staddress2: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      phnno: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999), Validators.pattern(/^[6-9]\d{9}$/)]],
      password: ['', Validators.required],
      cpassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      otp: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      RegisterThroughBA: false
    })
    this.GetAllBusinessAssociates()
  }
  ngOnInit(): void {
    $(document).ready(function () {

      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;

      $(".next").click(function () {
        localStorage.setItem("userverification",null);
        localStorage.setItem("validatesign",null);
        var value = localStorage.getItem("validateval");
        var verify = false;
        var userverification = localStorage.getItem("userverification");
        var validatesign = localStorage.getItem("validatesign");
        if ((userverification == "null" || userverification == "true") && (validatesign == "true" || validatesign == "null"))
        {
          verify = true;
        }
        if (value == "true" && verify) {

          current_fs = $(this).parent();
          next_fs = $(this).parent().next();

          //Add Class Active
          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate({ opacity: 0 }, {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                'display': 'none',
                'position': 'relative'
              });
              next_fs.css({ 'opacity': opacity });
            },
            duration: 600
          });
          localStorage.setItem("validateval", "false");
        }
      });

      $(".previous").click(function () {
        localStorage.setItem("validateval", "true");

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              'display': 'none',
              'position': 'relative'
            });
            previous_fs.css({ 'opacity': opacity });
          },
          duration: 600
        });
      });

      $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
      });

      $(".submit").click(function () {
        return false;
      })

    });
    setTimeout(() => {
      if (document.getElementById("sign")) {
        var w = document.getElementById("signf").offsetWidth;
        var a = document.querySelector("canvas");
        console.log(w)
        a.width = w;
        a.height = 150;
        a.style.border = "1px dotted #1e5ee5";
      }
      if (document.querySelector('video')) {
        document.querySelector('video').style.width = "100%";
        document.querySelector('video').style.height = "100%";

      }
    }, 1000);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      this.mobileview = false;
    }
    else {
      this.mobileview = true;
    }
  };
  Validatemail() {
    this.validmail = false
    this.validateemail = this.RegistrationForm.controls["email"].value;
    if (this.validateemail.includes('@')) {
      this.senddata = {
        Email: this.validateemail,
        MobileNumber: null,
        UserName: this.fname,
        FirstName: this.fname
      }
    }
    else {
      this.senddata = {
        MobileNumber: this.validateemail,
        Email: null,
        UserName: this.fname,
        FirstName: this.fname
      }
    }
    this.spinner.show();

    this.signupservice.validateemailormobile(this.senddata).subscribe((Data: any) => {
      this.spinner.hide();
      this.mailresult = Data;
      if (this.mailresult == "exist") {
        localStorage.setItem("validateval", "false")
        this.validmail = true;
        setTimeout(() => {
          this.validmail = false;

        }, 2000);
        this.enableotp = false;
      }
      else {
        localStorage.setItem("validateval", "true")
        this.validmail = false;
        this.enableotp = true;

      }
      this.spinner.hide();

    })
  }

  Validateotp() {
    this.validateemail = this.RegistrationForm.controls["email"].value;
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    this.spinner.show();
    var data = {
      MobileorEmail: this.validateemail,
      OTP: this.otp,
      CreatedOn: latest_date,
      UserId: null
    }
    this.signupservice.ValidateOTPRegistration(data).subscribe((response: any) => {
      this.spinner.hide();
      this.otpresult = response;
      if (response == '0') {
        localStorage.setItem("validateval", "true")
        this.validotp = false;
      }

      else if (response == '1') {
        alert("Incorrect OTP")
        localStorage.setItem("validateval", "false")
        this.validotp = true;
        this.displayotpmsg = "Incorrect OTP"
      }
      else if (response == '2') {
        alert("OTP has been expired")
        localStorage.setItem("validateval", "false")
        this.validotp = true;
        this.displayotpmsg = "OTP has been expired"

      }

      this.spinner.hide();

    })
  }

  Validateone() {
    this.submitted = true;
    this.fname = this.RegistrationForm.controls["fname"].value;
    this.surname = this.RegistrationForm.controls["sname"].value;
    this.email = this.RegistrationForm.controls["email"].value;
    this.checkemail = this.RegistrationForm.controls["email"].status;
    if (this.RegistrationForm.invalid && (this.fname == undefined || this.surname == undefined || this.email == undefined || this.fname == "" || this.surname == "" || this.email == "" || this.checkemail == "INVALID" || this.imageres == "Matched" || this.sigres == "Matched")) {
      localStorage.setItem("validateval", "false")
      return;
    }
    else {
      localStorage.setItem("validateval", "true")
    }
  }
  Validatethree() {
    this.submitted = true;
    this.houseno = this.RegistrationForm.controls["houseno"].value;
    this.buildingname = this.RegistrationForm.controls["buildingname"].value;
    this.staddress = this.RegistrationForm.controls["staddress"].value;
    this.staddress2 = this.RegistrationForm.controls["staddress2"].value;
    this.city = this.RegistrationForm.controls["city"].value;
    this.pincode = this.RegistrationForm.controls["pincode"].value;
    this.checkpincode = this.RegistrationForm.controls["pincode"].status;

    if (this.RegistrationForm.invalid && (this.staddress == undefined || this.staddress2 == undefined || this.city == undefined || this.pincode == undefined || this.houseno == undefined || this.buildingname == undefined
      || this.staddress == "" || this.staddress2 == "" || this.city == "" || this.pincode == "" || this.houseno == "" || this.buildingname == undefined || this.checkpincode == "INVALID")) {
      localStorage.setItem("validateval", "false")
      return;
    }
    else {
      localStorage.setItem("validateval", "true")
    }
  }
  Validatefour() {
    this.submitted = true;
    this.cpassword = this.RegistrationForm.controls["cpassword"].value;
    this.password = this.RegistrationForm.controls["password"].value;
    this.phnno = this.RegistrationForm.controls["phnno"].value;
    this.checkphone = this.RegistrationForm.controls["phnno"].status;

    if (this.RegistrationForm.invalid && (this.password == undefined || this.password == "" ||
      this.cpassword == undefined || this.cpassword == "" )) {
      localStorage.setItem("validateval", "false")
      return;
    }
    else if (this.cpassword != this.password) {
      alert("Password do not match!!")
      localStorage.setItem("validateval", "false")

    }
    else {
      localStorage.setItem("validateval", "true")
    }
  }
  // 28.01.2021
  // RegisterUser() {
  //   if(this.email.includes('@')){
  //     this.phnno=null
  //   }
  //   else{
  //     this.phnno=this.email
  //     this.email=null
  //   }
  //   var aa = this.RegisterThroughBA;
  //   var value = localStorage.getItem("validateval")
  //   if (this.RegisterThroughBA == true && (this.selectedba == null || this.selectedba == undefined)) {
  //     alert("Please Select Business Associate")
  //   }
  //   else if (this.RegisterThroughBA == false && (this.selectedba != null || this.selectedba != undefined)) {
  //     alert("Please Select the checkbox ")
  //   }
  //  else if (value == "true" || value == "false") {
  //     const frmData = new FormData();
  //     this.spinner.show();
  //     this.DateTime = new Date();
  //     let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
  //     const inputRequest = {
  //       FirstName: this.fname,
  //       LastName: this.surname,
  //       Email: this.email,
  //       StreetaddressLineOne: this.staddress,
  //       StreetaddressLineTwo: this.staddress2,
  //       City: this.city,
  //       Pincode: this.pincode,
  //       PhoneNumber: this.phnno,
  //       Password: this.password,
  //       BuildingName: this.buildingname,
  //       HouseNo: this.houseno,
  //       RegisterThroughBA: this.RegisterThroughBA,
  //       SignatureVerfiyId: this.signatureverfiyid,
  //       ImageVerfiyId: this.imageverfiyid,
  //       BAId:this.selectedba

  //     }
  //     frmData.append("CreatedOn", latest_date);
  //     frmData.append("RegData", JSON.stringify(inputRequest));
  //     frmData.append("logo", this.SelectedFiles);
  //     frmData.append("signature", this.SignatureFile);

  //     this.spinner.show();
  //     this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostEnterPriseRegistration/', frmData).subscribe(
  //       data => {
  //         this.spinner.hide();
  //         this.router.navigate(['/signin']);
  //       });
  //   }
  //   else {
  //     return
  //   }
  // }




  // After New Flow 
  RegisterUser() {
    if(this.email.includes('@')){
      this.phnno=null
    }
    else{
      this.phnno=this.email
      this.email=null
    }
    var value = localStorage.getItem("validateval")
     if (value == "true" || value == "false") {
      const frmData = new FormData();
      this.spinner.show();
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      const inputRequest = {
        FirstName: this.fname,
        LastName: this.surname,
        Email: this.email,
        StreetaddressLineOne: this.staddress,
        StreetaddressLineTwo: this.staddress2,
        City: this.city,
        Pincode: this.pincode,
        PhoneNumber: this.phnno,
        Password: this.password,
        BuildingName: this.buildingname,
        HouseNo: this.houseno,
        RegisterThroughBA: this.RegisterThroughBA,
        SignatureVerfiyId: this.signatureverfiyid,
        ImageVerfiyId: this.imageverfiyid,
        BAId:this.selectedba,
        Image:this.userimage,
      }
      frmData.append("CreatedOn", latest_date);
      frmData.append("RegData", JSON.stringify(inputRequest));
      frmData.append("logo", this.userimage);
      frmData.append("signature", this.SignatureFile);

      this.spinner.show();
      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostEnterPriseRegistration/', frmData).subscribe(
        data => {
          this.spinner.hide();
          this.router.navigate(['/signin']);
        });
    }
    else {
      return
    }
  }
  onDrop(event: any) {

    var fileslist = "";
    var files = event;

    this.files1 = files;
    if (this.files1.length == 1 && (this.files1[0].type == "image/png" || this.files1[0].type == "image/jpg" || this.files1[0].type == "image/jpeg")) {
      for (let k = 0; k < this.files1.length; k++) {
        if (this.files1[k].type == "") {
          alert("Please Upload only Files")
          this.files1 = "";
        }
        fileslist = this.files1[k].name + ",";
      }

      this.SelectedFiles = fileslist;
      localStorage.setItem("validateval", "true")
      this.validfile = true;
    }
    else {
      localStorage.setItem("validateval", "false")
      this.validfile = false;
    }
  }
  onChange(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    console.log(this.files1);
    fileslist = this.files1[0];

    this.SelectedFiles = fileslist;
    localStorage.setItem("validateval", "true")
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageurl = event.target.result;
      }
    }
  }

  onChangeforSignature(event: any) {
    var fileslistone = "";
    this.files2 = [].slice.call(event.target.files);
    console.log(this.files2);
    fileslistone = this.files2[0];

    this.SignatureFile = fileslistone;
    localStorage.setItem("validateval", "true");
    localStorage.setItem("validatesign", "false");
    if (event.target.files && event.target.files[0]) {
      var reader1 = new FileReader();

      reader1.readAsDataURL(event.target.files[0]); // read file as data url

      reader1.onload = (event) => { // called once readAsDataURL is completed
        this.signatureurl = event.target.result;
      }
    }
  }
  onChangeforSignatureTwo(event: any) {
    var fileslistone = "";
    this.files2 = [].slice.call(event.target.files);
    console.log(this.files2);
    fileslistone = this.files2[0];

    this.SignatureFileTwo = fileslistone;
    localStorage.setItem("validateval", "true")
    if (event.target.files && event.target.files[0]) {
      var reader1 = new FileReader();

      reader1.readAsDataURL(event.target.files[0]); // read file as data url

      reader1.onload = (event) => { // called once readAsDataURL is completed
        this.signatureurltwo = event.target.result;
      }
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.ImageFile = this.croppedImage;
    this.SignatureFileTwo = this.croppedImage;
    localStorage.setItem("validateval", "true")
    localStorage.setItem("userverification", "false");
  }

  onChangeforImage(event: any) {
    document.getElementById("openpopup").click();
    this.imageChangedEvent= event;
    var fileslistone = "";
    this.files2 = [].slice.call(event.target.files);
    console.log(this.files2);
    fileslistone = this.files2[0];

    this.ImageFile = fileslistone;
    this.SignatureFileTwo = fileslistone;
    localStorage.setItem("validateval", "true")
    localStorage.setItem("userverification", "false");
    if (event.target.files && event.target.files[0]) {
      var reader1 = new FileReader();

      reader1.readAsDataURL(event.target.files[0]); // read file as data url

      reader1.onload = (event) => { // called once readAsDataURL is completed
        this.imageurltwo = event.target.result;
      }
    }
  }
  handleFileInput1(files: File) {
    this.uimg = files[0];
  }
  public seconds: number;
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.spinner.show()
    this.seconds = 3;
    setTimeout(() => {
      this.seconds = 2;
      setTimeout(() => {
        this.seconds = 1
        setTimeout(() => {
          this.trigger.next();
          this.seconds = null;
        }, 2000)
      }, 2000)
    }, 2000)
    this.spinner.hide();

  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.userimage = this.webcamImage.imageAsBase64;
    console.log(webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }



  showImage(data) {
    this.drawsign = true;
    this.choosesign = false;
    this.uploadign = false;

    this.sigimg = data.split(',')[1];
    console.log(this.sigimg);
    this.signatureImage = data;

  }
  verifyimage() {
    const frmData = new FormData();
    frmData.append("image", this.ImageFile);
    frmData.append("capimg", this.webcamImage.imageAsBase64);

    this.spinner.show();
    // this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifyimage/', frmData).subscribe(
    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifyimage/', frmData).subscribe(
      data => {

        if (data != 0) {
          this.imageverfiyid = data
          this.httpService.get('http://ec2-15-206-158-37.ap-south-1.compute.amazonaws.com/outputfin/' + data).subscribe(
            data => {
              localStorage.setItem("validateval", "true");
              localStorage.setItem("userverification", "true");
              console.log("Python Response Data",data)
              this.imageres = data;
              alert("Verified Successfully!!");
              this.spinner.hide();
            },
            (err: HttpErrorResponse) => {
              // Show error, if any.
           this.getimgverifieddetail(data);
              localStorage.setItem("validateval", "true");
              localStorage.setItem("userverification", "false");

          });
        }
        else {
          alert("Faces do not match!! Something went wrong. Please try again..!! ");
        }
      },
      
      (err: HttpErrorResponse) => {
        alert("Something went wrong. Please try again..!! ")
        console.log(err.message);    // Show error, if any.
      });


  }


  verifysignature() {
    if (this.SignatureFile != null && this.SignatureFileTwo != null) {

      var uid = localStorage.getItem("userId");
      const frmData = new FormData();
      frmData.append("userId", uid);

      frmData.append("fileUpload", this.SignatureFile);
      frmData.append("fileUploadTwo", this.SignatureFileTwo);
      // frmData.append("capimg", this.sigimg);

      this.spinner.show();
      //this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifysignature/', frmData).subscribe(
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifysignature/', frmData).subscribe(
          data => {

          //call flask api just like face recognition
          if (data != 0) {
            this.signatureverfiyid = data
            this.httpService.get('http://ec2-15-206-158-37.ap-south-1.compute.amazonaws.com/sigmatchfin/' + data).subscribe(
              resp => {
                localStorage.setItem("validateval", "true");
                localStorage.setItem("validatesign", "true")
                console.log("Python Response Data",resp)
                this.sigres = resp;
                alert("Verified Successfully!!");
                this.spinner.hide();

              },
              (err: HttpErrorResponse) => {
                  // Show error, if any.
               this.getsignverifieddetail(data);
               localStorage.setItem("validatesign", "false");
                  localStorage.setItem("validateval", "true")
                  this.spinner.hide();
              });
              
          }
          else {
            alert("Signature did not match..!! ");
          }
        },
        (err: HttpErrorResponse) => {
          alert("Something went wrong. Please try again..!! ");
          console.log(err.message);    // Show error, if any.
        });

    }
    else {
      alert("Select your image and Sign");
    }
  }


  getsignverifieddetail(id)
  {
    this.signupservice.Getsignverifieddet(id).subscribe((data => {
      this.spinner.hide()
      if(data == true)
      {
        this.sigres = "Matched";
        alert("Verified Successfully!!");
        localStorage.setItem("validateval", "true");
        localStorage.setItem("validatesign", "true")

        // alert(data);
      }
      else
      {
        localStorage.setItem("validatesign", "false");
        alert("Not Matched");

        // alert(data);
      }
     
    }));
  }
  getimgverifieddetail(id)
  {
    this.signupservice.Getimgverifieddet(id).subscribe((data => {
      this.spinner.hide()
      if(data == true)
      {
        this.imageres = "Matched";
        // alert(data);
        alert("Verified Successfully!!");
        localStorage.setItem("validateval", "true")
        localStorage.setItem("userverification", "true");

      }
      else
      {
        localStorage.setItem("userverification", "false");
        this.imageres = "Not Matched";
        // alert(data);
        alert("Not Matched");

      }
     
    }));
  }
  goBack() {
    this.router.navigate(['/home']);
  }
  GetAllBusinessAssociates() {
    this.spinner.show()
    this.signupservice.GetAllBA().subscribe((data => {
      this.spinner.hide()
      this.BAList = data;
    }))
  }
  onSelectBA(id) {
    this.selectedba = id
  }
}
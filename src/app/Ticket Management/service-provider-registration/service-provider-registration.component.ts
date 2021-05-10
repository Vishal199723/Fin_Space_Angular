import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SignupService } from 'src/app/Shared/Signup/signup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmailValidation } from 'src/app/ViewModels/EmailValidation';
import { ServiceTypeService } from 'src/app/Shared/ServiceTypeMaster/service-type.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-service-provider-registration',
  templateUrl: './service-provider-registration.component.html',
  styleUrls: ['./service-provider-registration.component.css']
})
export class ServiceProviderRegistrationComponent implements OnInit {


  files1: any;
  SelectedFiles: any;
  validfile: boolean;
  ImageFile: any;
  files2: any;
  imageurltwo: string | ArrayBuffer;
  public seconds: number;
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;
  sigres: Object;
  SignatureFileTwo: string | Blob;
  SignatureFile: string | Blob;
  imageverfiyid: Object;
  imageres: Object;
  signatureverfiyid: Object;
  signatureurltwo: string | ArrayBuffer;
  signatureurl: string | ArrayBuffer;
  imageChangedEvent: any;
  croppedImage: any;
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
    console.log(webcamImage);
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }







  selectedservicetype: any;
  SPRegistrationForm = new FormGroup({
    country: new FormControl(),
    state: new FormControl(),
    district: new FormControl(),
    taluk: new FormControl(),
    loginName: new FormControl(),
    pwd: new FormControl(),
    companyName: new FormControl(),
    companyregid: new FormControl(),
    contactnumber: new FormControl(),
    email: new FormControl(),
    registeredaddress: new FormControl(),
    corporateaddress: new FormControl(),
    serviceperiod: new FormControl(),
    //amountPerYear: new FormControl(),
    //grandTotal: new FormControl(),
    gstnum: new FormControl(),
    saltid: new FormControl(),
    keyid: new FormControl(),
    pincode: new FormControl(),
    conpwd:new FormControl()
  });
  SPRegistrationFormCompany = new FormGroup({
    country: new FormControl(),
    state: new FormControl(),
    district: new FormControl(),
    taluk: new FormControl(),
    loginName: new FormControl(),
    pwd: new FormControl(),
    companyName: new FormControl(),
    companyregid: new FormControl(),
    contactnumber: new FormControl(),
    email: new FormControl(),
    registeredaddress: new FormControl(),
    corporateaddress: new FormControl(),
    serviceperiod: new FormControl(),
    amountPerYear: new FormControl(),
    grandTotal: new FormControl(),
    gstnum: new FormControl(),
    saltid: new FormControl(),
    keyid: new FormControl(),
    pincode: new FormControl(),
    conpwd:new FormControl(),
    //added
    serviceperiodcom:new FormControl(),
    boardresolutioncom:new FormControl(),
    doincom:new FormControl()
  });
  SPRegistrationFormPartnership = new FormGroup({
    country: new FormControl(),
    state: new FormControl(),
    district: new FormControl(),
    taluk: new FormControl(),
    loginName: new FormControl(),
    pwd: new FormControl(),
    companyName: new FormControl(),
    companyregid: new FormControl(),
    contactnumber: new FormControl(),
    email: new FormControl(),
    registeredaddress: new FormControl(),
    corporateaddress: new FormControl(),
    serviceperiod: new FormControl(),
    amountPerYear: new FormControl(),
    grandTotal: new FormControl(),
    gstnum: new FormControl(),
    saltid: new FormControl(),
    keyid: new FormControl(),
    pincode: new FormControl(),
    conpwd:new FormControl(),
    //added
    serviceperiodcom:new FormControl(),
    boardresolutioncom:new FormControl(),
    doincom:new FormControl(),
    partnerNamepar:new FormControl()
  });
  selectedItems: any = [];
  partnerNamepar:any
  pincode: any
  keyid: any
  saltid: any
  grandTotal: any
  amountPerYear: any
  serviceperiod: any
  corporateaddress: any
  registeredaddress: any
  email: any
  contactnumber: any
  country: any
  state: any
  district: any
  taluk: any
  village: any
  loginName: any
  ServiceTypeList: any
  pwd: any
  companyName: any
  companyregid: any
  submitted = false;
  srvprvId: any
  gst: any
  gstnum: any
      //added
      serviceperiodcom: any
      boardresolutioncom: any
      doincom: any
  validateemail: any;
  mailresult: any;
  validmail: boolean;
  SelectedLogoFile: string;
  SelectedIncorporationCert: string;
  files3: any;
  SelectedAuthorizedSign: string;
  files4: any;
  SelectedITPAN: string;
  files5: any;
  SelectedGSTCert: string;
  notify: string;
  dismissalert: boolean = false;
  DateTime: Date;
  otp: any;
  validotp: boolean;
  enableotp: boolean;
  displayotpmsg: string;
  senddata: { MobileNumber: any; Email: any; UserName: any; FirstName: any; };
  SendMailorMobile: any;
  conpwd:any
  
  selectedItemsServiceType: any = [];

  MultipleServiceType: any = [];

  allServiceType: any;
  selectedsptype: any;
  individual: boolean=false;
  company: boolean=false;
  partnership: boolean=false;
  dropdownSettings: IDropdownSettings;
  selectedincorporationtype: any;
  IncorporationTypeList: any;

  get f() { return this.SPRegistrationForm.controls; }
  get c() { return this.SPRegistrationFormCompany.controls; }
  get p() { return this.SPRegistrationFormPartnership.controls; }

  constructor(private businessloanservice: BusinessLoanServiceService,private messageService: MessageService,private formBuilder: FormBuilder, private http: HttpClient, private signupservice: SignupService, private spinner: NgxSpinnerService,
    private Servicetypeservice: ServiceTypeService, private httpService: HttpClient, private router: Router,
    private datepipe: DatePipe) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.SPRegistrationForm = formBuilder.group({
      loginName: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwd:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      companyName: [''],
      companyregid: ['', Validators.required],
      registeredaddress: ['', Validators.required],
      corporateaddress: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      serviceperiod: ['', Validators.required],
      contactnumber: [''],
      //amountPerYear: ['', Validators.required],
      //grandTotal: ['', Validators.required],
      gstnum: ['', [Validators.required, Validators.pattern(/^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/)]],
      saltid: [''],
      keyid: [''],
      taluk: ['', Validators.required],
      country: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      otp: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],

    })
  
    this.SPRegistrationFormCompany = formBuilder.group({
      loginName: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwd:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      companyName: [''],
      companyregid: ['', Validators.required],
      registeredaddress: ['', Validators.required],
      corporateaddress: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      serviceperiod: ['', Validators.required],
      contactnumber: [''],
      amountPerYear: ['', Validators.required],
      grandTotal: ['', Validators.required],
      gstnum: ['', [Validators.required, Validators.pattern(/^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/)]],
      saltid: [''],
      keyid: [''],
      taluk: ['', Validators.required],
      country: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      otp: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],

      //added
      serviceperiodcom: ['', Validators.required],
      doincom: ['', Validators.required],
      boardresolutioncom: ['',],
      
    })

    this.SPRegistrationFormPartnership = formBuilder.group({
      loginName: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwd:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      companyName: [''],
      companyregid: ['', Validators.required],
      registeredaddress: ['', Validators.required],
      corporateaddress: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      serviceperiod: ['', Validators.required],
      contactnumber: [''],
      amountPerYear: ['', Validators.required],
      grandTotal: ['', Validators.required],
      gstnum: ['', [Validators.required, Validators.pattern(/^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/)]],
      saltid: [''],
      keyid: [''],
      taluk: ['', Validators.required],
      country: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      otp: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],

      //added
      serviceperiodcom: ['', Validators.required],
      doincom: ['', Validators.required],
      boardresolutioncom: ['',],
      partnerNamepar: ['', Validators.required],
    })
 
  
  
  }
  ngOnInit() {
    this.GetAllServiceTypes();
    this.GetIncorporations();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'servieTypeId',
      textField: 'serviceName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search',
      noDataAvailablePlaceholderText: 'No data available',
    }
  }
  GetAllServiceTypes() {
    this.spinner.show();
    this.Servicetypeservice.getAllServiceTypes().subscribe((Data: any) => {
      this.ServiceTypeList = Data;
      this.spinner.hide();
    })
  }
  Validatemail() {
    this.SendMailorMobile = this.email
    this.validmail = false
    if (this.SendMailorMobile.includes('@')) {
      this.senddata = {
        Email: this.SendMailorMobile,
        MobileNumber: null,
        UserName: this.loginName,
        FirstName: this.loginName
      }
    }
    else {
      this.senddata = {
        MobileNumber: this.SendMailorMobile,
        Email: null,
        UserName: this.loginName,
        FirstName: this.loginName
      }
    }
    this.spinner.show();

    this.signupservice.validateemailormobile(this.senddata).subscribe((Data: any) => {
      this.spinner.hide();
      this.mailresult = Data;
      if (this.mailresult == "exist") {
        this.validmail = true;
        setTimeout(() => {
          this.validmail = false;

        }, 2000);
        this.enableotp = false;
      }
      else {
        this.validmail = false;
        this.enableotp = true;

      }
      this.spinner.hide();

    })
  }

  getalldata() {
    var pin = this.pincode;
    this.http.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      console.log(data);
      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.state = data[0].PostOffice[0].State;
        this.country = data[0].PostOffice[0].Country;
        this.district = data[0].PostOffice[0].District;
        this.taluk = data[0].PostOffice[0].Block;
      }
      else {
        alert("Enter valid Pincode");
      }
    })
  }

  onSelectServiceType(id) {
    this.selectedservicetype = id;
  }
  sendServiceProvider() {

    this.submitted = true;

    var value = localStorage.getItem("validateval")

    if(value == "true"){
    if (this.SPRegistrationForm.invalid) {
      return;

    }
    if(this.pwd !=this.conpwd){
      alert("Password Do not match!!")
    }
    else if (this.SelectedLogoFile == undefined) {
      alert("Please Select Company Logo!!")
    }
    // else if (this.SelectedIncorporationCert == undefined) {
    //   alert("Please Select Incorporation Certificate!!")
    // }
    // else if (this.SelectedAuthorizedSign == undefined) {
    //   alert("Please Select Authorized Signature!!")
    // }
    else if (this.SelectedITPAN == undefined) {
      alert("Please Select IT PAN!!")
    }
    // else if (this.SelectedGSTCert == undefined) {
    //   alert("Please Select GST Certification!!")
    // }
    // else if (this.selectedservicetype == null || this.selectedservicetype == undefined) {
    //   alert("Please Select Service Type!");
    // }
    else {
      for (let index = 0; index < this.selectedItems.length; index++) {
       
        if (this.selectedservicetype != "") {
          this.selectedservicetype =  this.selectedservicetype + "," + this.selectedItems[index].servieTypeId;
        }
        else{
          this.selectedservicetype =  this.selectedItems[index].servieTypeId;
        }
      } 
      var data = {
        CountryName: this.SPRegistrationForm.controls["country"].value,
        StateName: this.SPRegistrationForm.controls["state"].value,
        DistrictName: this.SPRegistrationForm.controls["district"].value,
        TalukName: this.SPRegistrationForm.controls["taluk"].value,
        UserName: this.SPRegistrationForm.controls["loginName"].value,
        Password: this.SPRegistrationForm.controls["pwd"].value,
        CompanyName: this.SPRegistrationForm.controls["companyName"].value,
        CompanyRegid: this.SPRegistrationForm.controls["companyregid"].value,
        PhoneNumber: null,
        Email: this.SPRegistrationForm.controls["email"].value,
        RegisteredAddress: this.SPRegistrationForm.controls["registeredaddress"].value,
        CorporateAddress: this.SPRegistrationForm.controls["corporateaddress"].value,
        ServicePeriod: this.SPRegistrationForm.controls["serviceperiod"].value,
        //AmountPerYear: this.SPRegistrationForm.controls["amountPerYear"].value,
        //GrandTotal: this.SPRegistrationForm.controls["grandTotal"].value,
        Gstnum: this.SPRegistrationForm.controls["gstnum"].value,
        SaltId: this.SPRegistrationForm.controls["saltid"].value,
        KeyId: this.SPRegistrationForm.controls["keyid"].value,
        Pincode: this.SPRegistrationForm.controls["pincode"].value,
        SelectedServiceType: this.selectedservicetype,
        ServiceProviderType : "1",
        SignatureVerfiyId: this.signatureverfiyid,
        ImageVerfiyId: this.imageverfiyid,
        // //addded
        // IncorporatedId : this.selectedincorporationtype,
        // IncorporationDate: this.SPRegistrationForm.controls["doincom"].value,
        // BoardResolution: this.SPRegistrationForm.controls["boardresolutioncom"].value,
        // ExperienceinCurrentBusiness: this.SPRegistrationForm.controls["serviceperiodcom"].value,
      }
      const frmData = new FormData();
      this.spinner.show();

      frmData.append("RegData", JSON.stringify(data));
      frmData.append("LogoFile", this.SelectedLogoFile);
      //frmData.append("IncorporationCert", this.SelectedIncorporationCert);
      //rmData.append("AuthorizedSign", this.SelectedAuthorizedSign);
      frmData.append("ITPAN", this.SelectedITPAN);
      //frmData.append("GSTCert", this.SelectedGSTCert);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostServiceProviderRegistration/', frmData).subscribe(
        data => {
          if (data == "success") {
            alert("Registered Successfully!!")
            this.notify = "Registered Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.router.navigate(["/signin"])
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        });
    }
  }
  }
  sendServiceProviderForCompany() {

    this.submitted = true;
    // var value = localStorage.getItem("validateval")

    // if(value == "true"){
    // if (this.SPRegistrationFormCompany.invalid) {
    //   return;

    // }
    if(this.pwd !=this.conpwd){
      alert("Password Do not match!!")
    }
    else if (this.SelectedLogoFile == undefined) {
      alert("Please Select Company Logo!!")
    }
    else if (this.SelectedIncorporationCert == undefined) {
      alert("Please Select Incorporation Certificate!!")
    }
    else if (this.SelectedAuthorizedSign == undefined) {
      alert("Please Select Authorized Signature!!")
    }
    else if (this.SelectedITPAN == undefined) {
      alert("Please Select IT PAN!!")
    }
    else if (this.SelectedGSTCert == undefined) {
      alert("Please Select GST Certification!!")
    }
    // else if (this.selectedservicetype == null || this.selectedservicetype == undefined) {
    //   alert("Please Select Service Type!");
    // }
    else {
      for (let index = 0; index < this.selectedItems.length; index++) {
       
        if (this.selectedservicetype != "") {
          this.selectedservicetype =  this.selectedservicetype + "," + this.selectedItems[index].servieTypeId;
        }
        else{
          this.selectedservicetype =  this.selectedItems[index].servieTypeId;
        }
      } 
      var data = {
        CountryName: this.SPRegistrationFormCompany.controls["country"].value,
        StateName: this.SPRegistrationFormCompany.controls["state"].value,
        DistrictName: this.SPRegistrationFormCompany.controls["district"].value,
        TalukName: this.SPRegistrationFormCompany.controls["taluk"].value,
        UserName: this.SPRegistrationFormCompany.controls["loginName"].value,
        Password: this.SPRegistrationFormCompany.controls["pwd"].value,
        CompanyName: this.SPRegistrationFormCompany.controls["companyName"].value,
        CompanyRegid: this.SPRegistrationFormCompany.controls["companyregid"].value,
        PhoneNumber: null,
        Email: this.SPRegistrationFormCompany.controls["email"].value,
        RegisteredAddress: this.SPRegistrationFormCompany.controls["registeredaddress"].value,
        CorporateAddress: this.SPRegistrationFormCompany.controls["corporateaddress"].value,
        ServicePeriod: this.SPRegistrationFormCompany.controls["serviceperiod"].value,
        AmountPerYear: this.SPRegistrationFormCompany.controls["amountPerYear"].value,
        GrandTotal: this.SPRegistrationFormCompany.controls["grandTotal"].value,
        Gstnum: this.SPRegistrationFormCompany.controls["gstnum"].value,
        SaltId: this.SPRegistrationFormCompany.controls["saltid"].value,
        KeyId: this.SPRegistrationFormCompany.controls["keyid"].value,
        Pincode: this.SPRegistrationFormCompany.controls["pincode"].value,
        SelectedServiceType: this.selectedservicetype,
        
        //addded
        IncorporatedId : this.selectedincorporationtype,
        IncorporationDate: this.SPRegistrationFormCompany.controls["doincom"].value,
        BoardResolution: null,
        ExperienceinCurrentBusiness: this.SPRegistrationFormCompany.controls["serviceperiodcom"].value,
        ServiceProviderType : "2",
        SignatureVerfiyId: null,
        ImageVerfiyId:null,

      }
      const frmData = new FormData();
      this.spinner.show();

      frmData.append("RegData", JSON.stringify(data));
      frmData.append("LogoFile", this.SelectedLogoFile);
      frmData.append("IncorporationCert", this.SelectedIncorporationCert);
      frmData.append("AuthorizedSign", this.SelectedAuthorizedSign);
      frmData.append("ITPAN", this.SelectedITPAN);
      frmData.append("GSTCert", this.SelectedGSTCert);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostServiceProviderRegistration/', frmData).subscribe(
        data => {
          if (data == "success") {
            alert("Registered Successfully!!")
            this.notify = "Registered Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.router.navigate(["/signin"])
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        });
    }
  }
  
  sendServiceProviderForPartnership() {

    this.submitted = true;
    // var value = localStorage.getItem("validateval")
    // if(value == "true"){

    // if (this.SPRegistrationFormPartnership.invalid) {
    //   return;

    // }
    if(this.pwd !=this.conpwd){
      alert("Password do not match!!")
    }
    else if (this.SelectedLogoFile == undefined) {
      alert("Please Select Company Logo!!")
    }
    else if (this.SelectedIncorporationCert == undefined) {
      alert("Please Select Incorporation Certificate!!")
    }
    else if (this.SelectedAuthorizedSign == undefined) {
      alert("Please Select Authorized Signature!!")
    }
    else if (this.SelectedITPAN == undefined) {
      alert("Please Select IT PAN!!")
    }
    else if (this.SelectedGSTCert == undefined) {
      alert("Please Select GST Certification!!")
    }
     
  
    // else if (this.selectedservicetype == null || this.selectedservicetype == undefined) {
    //   alert("Please Select Service Type!");
    // }
    else {
      for (let index = 0; index < this.selectedItems.length; index++) {
       
        if (this.selectedservicetype != "") {
          this.selectedservicetype =  this.selectedservicetype + "," + this.selectedItems[index].servieTypeId;
        }
        else{
          this.selectedservicetype =  this.selectedItems[index].servieTypeId;
        }
      } 
      var data = {
        CountryName: this.SPRegistrationFormPartnership.controls["country"].value,
        StateName: this.SPRegistrationFormPartnership.controls["state"].value,
        DistrictName: this.SPRegistrationFormPartnership.controls["district"].value,
        TalukName: this.SPRegistrationFormPartnership.controls["taluk"].value,
        UserName: this.SPRegistrationFormPartnership.controls["loginName"].value,
        Password: this.SPRegistrationFormPartnership.controls["pwd"].value,
        CompanyName: this.SPRegistrationFormPartnership.controls["companyName"].value,
        CompanyRegid: this.SPRegistrationFormPartnership.controls["companyregid"].value,
        PhoneNumber: null,
        Email: this.SPRegistrationFormPartnership.controls["email"].value,
        RegisteredAddress: this.SPRegistrationFormPartnership.controls["registeredaddress"].value,
        CorporateAddress: this.SPRegistrationFormPartnership.controls["corporateaddress"].value,
        ServicePeriod: this.SPRegistrationFormPartnership.controls["serviceperiod"].value,
        AmountPerYear: this.SPRegistrationFormPartnership.controls["amountPerYear"].value,
        GrandTotal: this.SPRegistrationFormPartnership.controls["grandTotal"].value,
        Gstnum: this.SPRegistrationFormPartnership.controls["gstnum"].value,
        SaltId: this.SPRegistrationFormPartnership.controls["saltid"].value,
        KeyId: this.SPRegistrationFormPartnership.controls["keyid"].value,
        Pincode: this.SPRegistrationFormPartnership.controls["pincode"].value,
        SelectedServiceType: this.selectedservicetype,
        
        //addded
        IncorporatedId : this.selectedincorporationtype,
        IncorporationDate: this.SPRegistrationFormPartnership.controls["doincom"].value,
        BoardResolution: null,
        ExperienceinCurrentBusiness: this.SPRegistrationFormPartnership.controls["serviceperiodcom"].value,
        ServiceProviderType : "3",
        PartnerName: this.SPRegistrationFormPartnership.controls["partnerNamepar"].value,
        SignatureVerfiyId: null,
        ImageVerfiyId:null,
      }
      const frmData = new FormData();
      this.spinner.show();

      frmData.append("RegData", JSON.stringify(data));
      frmData.append("LogoFile", this.SelectedLogoFile);
      frmData.append("IncorporationCert", this.SelectedIncorporationCert);
      frmData.append("AuthorizedSign", this.SelectedAuthorizedSign);
      frmData.append("ITPAN", this.SelectedITPAN);
      frmData.append("GSTCert", this.SelectedGSTCert);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostServiceProviderRegistration/', frmData).subscribe(
        data => {
          if (data == "success") {
            alert("Registered Successfully!!")
            this.notify = "Registered Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.router.navigate(["/signin"])
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        });
    }
  }
  
  onChangeCompanylogo(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    fileslist = this.files1[0];

    this.SelectedLogoFile = fileslist;
  }
  onChangeIncorporationCert(event: any) {
    var fileslist1 = "";
    this.files2 = [].slice.call(event.target.files);
    fileslist1 = this.files2[0];

    this.SelectedIncorporationCert = fileslist1;
  }
  onChangeAuthorizedSign(event: any) {
    var fileslist2 = "";
    this.files3 = [].slice.call(event.target.files);
    fileslist2 = this.files3[0];

    this.SelectedAuthorizedSign = fileslist2;
  }
  onChangeITPAN(event: any) {
    var fileslist3 = "";
    this.files4 = [].slice.call(event.target.files);
    fileslist3 = this.files4[0];

    this.SelectedITPAN = fileslist3;
  }
  onChangeGSTCert(event: any) {
    var fileslist4 = "";
    this.files5 = [].slice.call(event.target.files);
    fileslist4 = this.files5[0];

    this.SelectedGSTCert = fileslist4;
  }
  Validateotp() {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    this.spinner.show();
    var data = {
      MobileorEmail: this.email,
      OTP: this.otp,
      CreatedOn: latest_date,
      UserId: null
    }
    this.signupservice.ValidateOTPRegistration(data).subscribe((response: any) => {
      this.spinner.hide();
      if (response == '0') {
        alert("Your Email/Mobile Number is successfully verified!!")
        this.validotp = false;
        this.enableotp = false;
        this.otp = null
      }

      else if (response == '1') {
        alert("Incorrect OTP")
        this.validotp = true;
        this.displayotpmsg = "Incorrect OTP"
      }
      else if (response == '2') {
        alert("OTP has been expired")
        this.validotp = true;
        this.displayotpmsg = "OTP has been expired"

      }

      this.spinner.hide();

    })
  }
  onItemSelect(item: any) {
    this.MultipleServiceType.push(item);
  }

  onSelectAll(items: any) {
    this.allServiceType = items;
  }

  onItemDeSelectAll(items: any) {
    var aa = this.selectedItems;

  }
  onItemDeSelect(items) {
    var aa = this.selectedItems;

  }
  onSelectBAType(id) {
    this.selectedsptype = id;
    if (this.selectedsptype == "1") {
      this.individual = true;
      this.company = false;
      this.partnership = false;
    }
    else if (this.selectedsptype == "2") {
      this.company = true;
      this.individual = false;
      this.partnership = false;
    }
    else {
      this.partnership = true;
      this.individual = false;
      this.company = false;
    }
  }
  onSelectIncorporationType(id) {
    this.selectedincorporationtype = id;
  }
  GetIncorporations() {
    this.spinner.show()
    this.businessloanservice.getIncorporationTypes().subscribe((response: any) => {
      this.IncorporationTypeList = response;
      this.spinner.hide()

    });
  }





  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.ImageFile = this.croppedImage;
    this.SignatureFileTwo = this.croppedImage;
    localStorage.setItem("validateval", "true")
    localStorage.setItem("userverification", "false");
  }







  //added
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
    if (event.target.files && event.target.files[0]) {
      var reader1 = new FileReader();

      reader1.readAsDataURL(event.target.files[0]); // read file as data url

      reader1.onload = (event) => { // called once readAsDataURL is completed
        this.imageurltwo = event.target.result;
      }
    }
  }

 verifyimage() {
    const frmData = new FormData();
    frmData.append("image", this.ImageFile);
    frmData.append("capimg", this.webcamImage.imageAsBase64);

    this.spinner.show();
    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifyimage/', frmData).subscribe(
    // this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifyimage/', frmData).subscribe(
      data => {
        this.spinner.hide();

        if (data != 0) {
          this.imageverfiyid = data
          this.httpService.get('http://ec2-15-206-158-37.ap-south-1.compute.amazonaws.com/outputfin/' + data).subscribe(
            data => {
              console.log("Python Response Data",data)
              this.imageres = data;
              alert("Verified Successfully!!");
              this.spinner.hide();

            },
            (err: HttpErrorResponse) => {
              // Show error, if any.
           this.getimgverifieddetail(data);
              localStorage.setItem("validateval", "true")

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

  getimgverifieddetail(id)
  {
    this.signupservice.Getimgverifieddet(id).subscribe((data => {
      this.spinner.hide()
      if(data == true)
      {
        this.imageres = "Matched";
        alert(data);
      }
      else
      {
        this.imageres = "Not Matched";
        alert(data);
      }
     
    }));
  }
  verifysignature() {
    if (this.SignatureFile != null && this.SignatureFileTwo != null) {

      var uid = localStorage.getItem("userId");
      const frmData = new FormData();
      frmData.append("userId", uid);

      frmData.append("fileUpload", this.SignatureFile);
      frmData.append("fileUploadTwo", this.SignatureFileTwo);
      // frmData.append("capimg", this.sigimg);


      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifysignature/', frmData).subscribe(
        // this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/User/verifysignature/', frmData).subscribe(
        data => {

          //call flask api just like face recognition
          if (data != 0) {
            this.signatureverfiyid = data
            this.httpService.get('http://ec2-15-206-158-37.ap-south-1.compute.amazonaws.com/sigmatchfin/' + data).subscribe(
              resp => {
                localStorage.setItem("validateval", "true")
                console.log("Python Response Data",resp)
                this.sigres = resp;
                alert("Verified Successfully!!");
                this.spinner.hide();
              },
              (err: HttpErrorResponse) => {
                  // Show error, if any.
               this.getsignverifieddetail(data);
                  localStorage.setItem("validateval", "true")

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
  onChangeforSignature(event: any) {
    var fileslistone = "";
    this.files2 = [].slice.call(event.target.files);
    console.log(this.files2);
    fileslistone = this.files2[0];

    this.SignatureFile = fileslistone;
    localStorage.setItem("validateval", "true")
    if (event.target.files && event.target.files[0]) {
      var reader1 = new FileReader();

      reader1.readAsDataURL(event.target.files[0]); // read file as data url

      reader1.onload = (event) => { // called once readAsDataURL is completed
        this.signatureurl = event.target.result;
      }
    }
  }
  getsignverifieddetail(id)
  {
    this.signupservice.Getsignverifieddet(id).subscribe((data => {
      this.spinner.hide()
      if(data == true)
      {
        this.sigres = "Matched";
        alert(data);
      }
      else
      {
        this.sigres = "Not Matched";
        alert(data);
      }
     
    }));
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
  goBack() {
    var presentURL = localStorage.getItem('LastURL');
    window.location.href = presentURL;
  }

}
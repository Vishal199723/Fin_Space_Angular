import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SignupService } from '../Shared/Signup/signup.service';
import { Router } from '@angular/router';
import { ServiceTypeService } from '../Shared/ServiceTypeMaster/service-type.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { EmailValidation } from '../ViewModels/EmailValidation';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatePipe } from '@angular/common';
import { MessageService } from '../MessageService/meaagse.service';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-business-associate-registartion',
  templateUrl: './business-associate-registartion.component.html',
  styleUrls: ['./business-associate-registartion.component.css']
})
export class BusinessAssociateRegistartionComponent implements OnInit {

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


  files3: any;
  boardofresFile: string;
  companypancardfile: string;
  companygstfile: string;
  companyincorporationfile: string;
  companyagreementfile: string;
  otherdocuments: any;
  otherdocactualnamepartnshp: string;
  otherdocumentspartnshp: any;
  partnershipresolutionfile: string;
  partnershipagreementfile: string;
  partnershipincorporationfile: string;
  partnershipgstfile: string;
  panpartnershipfile: string;
  customerotherdocspartnership: any=[];

  otherdocumentname:any;
  otherdocumentnameee:any;
  otherdocname: any;
  customerotherdocs: any = [];
  otherdocactualname: any;
  CertificateDisplay: any = [];


  selectedbatype: any;
  individual: boolean;
  company: boolean;
  pincode: any
  keyid: any
  saltid: any
  grandTotal: any
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
  ownerName: any
  partnerName: any
  ServiceTypeList: any
  pwd: any
  conpwd: any;
  dob: any
  companyName: any
  companyregid: any
  submitted = false;
  srvprvId: any
  gst: any
  gstnum: any
  mailresult: any;
  validmail: boolean;
  pannum: any;
  TypesofServiceOffered: any;
  servicelist: any;
  fathername: any;
  address: any;
  doin: any;
  boardresolution: any;
  bankname: any;
  bankbranch: any;
  ifsccode: any;
  accountname: any;
  accountnumber: any;
  coinaccountnumber: any;
  accounttype: any;
  middlename: any;
  lastname: any;
  buldiname: any;
  saddone: any;
  saddtwo: any;
  flatnum: any;
  BARegistrationForm = new FormGroup({
    country: new FormControl(),
    state: new FormControl(),
    district: new FormControl(),
    taluk: new FormControl(),
    loginName: new FormControl(),
    ownerName: new FormControl(),
    partnerName: new FormControl(),
    pwd: new FormControl(),
    conpwd: new FormControl(),
    dob: new FormControl(),
    companyName: new FormControl(),
    companyregid: new FormControl(),
    contactnumber: new FormControl(),
    email: new FormControl(),
    registeredaddress: new FormControl(),
    corporateaddress: new FormControl(),
    serviceperiod: new FormControl(),
    grandTotal: new FormControl(),
    gstnum: new FormControl(),
    saltid: new FormControl(),
    keyid: new FormControl(),
    pincode: new FormControl(),
    pannum: new FormControl(),
    TypesofServiceOffered: new FormControl(),
    servicelist: new FormControl(),
    fathername: new FormControl(),
    // address: new FormControl(),
    doin: new FormControl(),
    boardresolution: new FormControl(),
    bankname: new FormControl(),
    bankbranch: new FormControl(),
    ifsccode: new FormControl(),
    accountname: new FormControl(),
    accountnumber: new FormControl(),
    coinaccountnumber: new FormControl(),
    accounttype: new FormControl(),
    middlename: new FormControl(),
    lastname: new FormControl(),
    flatnum: new FormControl(),
    buldiname: new FormControl(),
    saddone: new FormControl(),
    saddtwo: new FormControl(),

  });

  occupations: any;
  occuid: any;
  notify: string;
  dismissalert: boolean;
  selectedservicetype: any;
  selectedincorporationtype: any;
  partnership: boolean;
  IncorporationTypeList: any;
  validatephnumber: any;
  mobileresult: any;
  validmobile: any;
  bankaccounttype: any;
  PSmarked: boolean;
  servicetypech: boolean;
  selectedItems: any = [];
  emailind:any;
  contactnumberind:any;
  loginNameind: any;
  middlenameind:any;
  lastnameind:any;
  pwdind:any;
  conpwdind: any;
  fathernameind:any;
  dobind: any;
  serviceperiodind:any;
  pannumind: any;
  flatnumind: any;
  buldinameind: any;
  saddoneind: any;
  saddtwoind:any;
  pincodeind: any;
  countryind:any;
  stateind: any;
  districtind:any;
  talukind:any;
  senddata: { Email: any; MobileNumber: any; UserName: any; FirstName: any; };
  enableotp: boolean;
  DateTime: Date;
  displayotpmsg: string;
  validotp: boolean;
  otp: any;
  Sendname: any;
  SendMail: any;
  SendMailorMobile: any;
  otppar: any;
  otpind: any;
  otpcom: any;

  get c() { return this.BARegistrationForm.controls; }
  get f() { return this.BARegistrationFormindividual.controls; }
  get d(){return this.BARegistrationFormcompany.controls;}
  get p(){return this.BARegistrationFormindividualpartnership.controls;}
  dropdownSettings: IDropdownSettings;

  selectedItemsServiceType: any = [];

  MultipleServiceType: any = [];

  allServiceType: any;

  BARegistrationFormindividual = new FormGroup({
    emailind: new FormControl(),
    contactnumberind: new FormControl(),
    loginNameind: new FormControl(),
    middlenameind: new FormControl(),
    lastnameind: new FormControl(),
    pwdind: new FormControl(),
    conpwdind: new FormControl(),
    fathernameind: new FormControl(),
    dobind: new FormControl(),
    serviceperiodind: new FormControl(),
    pannumind: new FormControl(),
    flatnumind: new FormControl(),
    buldinameind: new FormControl(),
    saddoneind: new FormControl(),
    saddtwoind: new FormControl(),
    pincodeind: new FormControl(),
    countryind: new FormControl(),
    stateind: new FormControl(),
    districtind:new FormControl(),
    talukind:new FormControl(),
    
  });
  emailcom: any;
    contactnumbercom:  any;
    companyNamecom:  any;
    ownerNamecom: any;
    middlenamecom: any;
    lastnamecom:  any;
    pwdcom: any;
    conpwdcom:  any;
    pannumcom:  any;
    flatnumcom: any;
    buldinamecom:  any;
    saddonecom:  any;
    saddtwocom: any;
    pincodecom:any;
    countrycom:  any;
    statecom:  any;
    districtcom: any;
    talukcom:  any;
    doincom:  any; 
    boardresolutioncom: any;
    serviceperiodcom:  any;   
  BARegistrationFormcompany = new FormGroup({
    emailcom: new FormControl(),
    contactnumbercom: new FormControl(),
    companyNamecom: new FormControl(),
    ownerNamecom:new FormControl(),
    middlenamecom: new FormControl(),
    lastnamecom: new FormControl(),
    pwdcom: new FormControl(),
    conpwdcom: new FormControl(),
    pannumcom: new FormControl(),
    flatnumcom: new FormControl(),
    buldinamecom: new FormControl(),
    saddonecom: new FormControl(),
    saddtwocom: new FormControl(),
    countrycom: new FormControl(),
    statecom: new FormControl(),
    districtcom: new FormControl(),
    talukcom: new FormControl(),
    doincom: new FormControl(),
    otherdocumentnameee: new FormControl(),
    boardresolutioncom: new FormControl(),
    serviceperiodcom: new FormControl(),    
    pincodecom:new FormControl(),
    otpcom:new FormControl(),
    otherdocactualnamepartnshp:new FormControl()
  });
  emailpar:  any;
  contactnumberpar: any;
  companyNamepar: any;
  loginNamepar: any;
  partnerNamepar:  any;
  pwdpar: any;
  conpwdpar: any;
  flatnumpar:  any;
  buldinamepar: any;
  saddonepar:  any;
  saddtwopar:  any;
  countrypar:  any;
  statepar:  any;
  districtpar:  any;
  talukpar:  any;
  pannumpar: any;
  doinpar:  any;
  boardresolutionpar: any;
  serviceperiodpar:  any;
  pincodepar:any;
  otherdocumentnamepartnshp:any;
  BARegistrationFormindividualpartnership = new FormGroup({
    emailpar: new FormControl(),
    contactnumberpar: new FormControl(),
    companyNamepar: new FormControl(),
    loginNamepar: new FormControl(),
    partnerNamepar: new FormControl(),
    pwdpar: new FormControl(),
    conpwdpar: new FormControl(),
    flatnumpar: new FormControl(),
    buldinamepar: new FormControl(),
    saddonepar: new FormControl(),
    saddtwopar: new FormControl(),
    countrypar: new FormControl(),
    statepar: new FormControl(),
    districtpar: new FormControl(),
    talukpar: new FormControl(),
    pannumpar: new FormControl(),
    doinpar: new FormControl(),
    boardresolutionpar: new FormControl(),
    serviceperiodpar: new FormControl(),
    pincodepar: new FormControl(),
    otherdocumentnamepartnshp: new FormControl(),

  });

  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private http: HttpClient, private signupservice: SignupService, private spinner: NgxSpinnerService,
    private Servicetypeservice: ServiceTypeService, private httpService: HttpClient, private router: Router, private businessloanservice: BusinessLoanServiceService,
    private datepipe:DatePipe) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.BARegistrationForm = formBuilder.group({
      loginName: ['', Validators.required],
      ownerName: ['', Validators.required],
      partnerName: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwd: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]],
      companyName: ['', Validators.required],
      companyregid: ['', Validators.required],
      registeredaddress: ['', Validators.required],
      corporateaddress: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      serviceperiod: ['', Validators.required],
      contactnumber: [''],
      grandTotal: ['', Validators.required],
      gstnum: ['', Validators.required],
      saltid: ['', Validators.required],
      keyid: ['', Validators.required],
      taluk: ['', Validators.required],
      country: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pannum: ['', Validators.required],
      TypesofServiceOffered: ['', Validators.required],
      servicelist: ['', Validators.required],
      fathername: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      doin: ['', Validators.required],
      boardresolution: [''],
      bankname: ['', Validators.required],
      bankbranch: ['', Validators.required],
      ifsccode: ['', Validators.required, Validators.pattern(/^[A-Za-z]{4}[0-9]{6,7}$/)],
      accountname: ['', Validators.required],
      accountnumber: ['', Validators.required],
      coinaccountnumber: ['', Validators.required],
      accounttype: ['', Validators.required],
      middlename: [''],
      lastname: [''],
      selectedItems: [''],
      flatnum: ['', Validators.required],
      buldiname: [''],
      saddone: ['', Validators.required],
      saddtwo: ['', Validators.required],
    })

    this.BARegistrationFormindividual = formBuilder.group({
      emailind: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      contactnumberind: [''],
      loginNameind: ['', Validators.required],
      middlenameind: [''],
      lastnameind: ['', Validators.required],
      pwdind: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwdind: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      fathernameind:['', Validators.required],
      dobind: ['', Validators.required],
      serviceperiodind: ['', Validators.required],
      pannumind:['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      flatnumind: ['', Validators.required],
      buldinameind: ['', Validators.required],
      saddoneind: ['', Validators.required],
      saddtwoind: ['', Validators.required],
      pincodeind: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      countryind: ['', Validators.required],
      stateind: ['', Validators.required],
      districtind: ['', Validators.required],
      talukind: ['', Validators.required],           
      otpind: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],

    })

    this.BARegistrationFormcompany = formBuilder.group({
      emailcom: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      contactnumbercom: ['', ],
      companyNamecom: ['', Validators.required],
      ownerNamecom: ['', Validators.required],
      middlenamecom: [''],
      lastnamecom: ['',Validators.required],
      pwdcom: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwdcom: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      pannumcom: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      flatnumcom: ['', Validators.required],
      buldinamecom: [''],
      saddonecom: ['', Validators.required],
      saddtwocom: ['', Validators.required],
      pincodecom: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      countrycom: ['', Validators.required],
      statecom: ['', Validators.required],
      districtcom: ['', Validators.required],
      talukcom: ['', Validators.required],
      doincom: ['', Validators.required],
      boardresolutioncom: [''],
      otherdocumentnameee:[''],
      serviceperiodcom:[''],
      otpcom: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],

    })
    
    this.BARegistrationFormindividualpartnership = formBuilder.group({
      emailpar: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      contactnumberpar: [''],
      companyNamepar: ['', Validators.required],
      loginNamepar: ['', Validators.required],
      partnerNamepar: ['', Validators.required],
      pwdpar: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      conpwdpar: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
      flatnumpar: ['', Validators.required],
      buldinamepar: [''],
      saddonepar: ['', Validators.required],
      saddtwopar: ['', Validators.required],
      pincodepar: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      countrypar: ['', Validators.required],
      statepar: ['', Validators.required],
      talukpar: ['', Validators.required],
      districtpar: ['', Validators.required],
      pannumpar: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      doinpar: ['', Validators.required],
      boardresolutionpar: [''],
      serviceperiodpar: ['', Validators.required],
      otppar: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],

      otherdocumentnamepartnshp:[''],

    })


  }

  ngOnInit() {
    this.GetAllServiceTypes();
    this.Getoccupation();
    this.GetIncorporations();

    this.PSmarked = false;
    this.servicetypech = false;


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
  ifscrex = new RegExp(/^[A-Za-z]{4}[0-9]{6,7}$/);
  emailrex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  panrex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
  GetAllServiceTypes() {
    this.spinner.show();
    this.Servicetypeservice.getAllServiceTypes().subscribe((Data: any) => {
      this.ServiceTypeList = Data;
      this.spinner.hide();
    })
  }

  Getoccupation() {
    this.spinner.show()
    this.businessloanservice.getAlloccupatiom().subscribe((response: any) => {
      this.occupations = response;
      this.spinner.hide()

    });
  }

  GetIncorporations() {
    this.spinner.show()
    this.businessloanservice.getIncorporationTypes().subscribe((response: any) => {
      this.IncorporationTypeList = response;
      this.spinner.hide()

    });
  }

  getalldata() {
    var pin = this.pincodeind;
    this.http.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      console.log(data);

      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.stateind = data[0].PostOffice[0].State;
        this.countryind = data[0].PostOffice[0].Country;
        this.districtind = data[0].PostOffice[0].District;
        this.talukind = data[0].PostOffice[0].Block;
      }
      else {
        alert("Enter valid Pincode");
      }
    })
  }
  getalldataone() {
    var pin = this.pincodecom;
    this.http.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      console.log(data);

      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.statecom = data[0].PostOffice[0].State;
        this.countrycom = data[0].PostOffice[0].Country;
        this.districtcom = data[0].PostOffice[0].District;
        this.talukcom = data[0].PostOffice[0].Block;
      }
      else {
        alert("Enter valid Pincode");
      }
    })
  }
  getalldatatwo() {
    var pin = this.pincodepar;
    this.http.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      console.log(data);

      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.statepar = data[0].PostOffice[0].State;
        this.countrypar = data[0].PostOffice[0].Country;
        this.districtpar = data[0].PostOffice[0].District;
        this.talukpar = data[0].PostOffice[0].Block;
      }
      else {
        alert("Enter valid Pincode");
      }
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

  onSelectoccupation(data: any) {
    this.occuid = data
  }

  PStoggleVisibility(e) {
    this.PSmarked = e.target.checked;
  }
  ServicetypeVisibility(e) {
    this.servicetypech = e.target.checked;
  }
  onSelectBAType(id) {
    this.selectedbatype = id;
    if (this.selectedbatype == "1") {
      this.individual = true;
      this.company = false;
      this.partnership = false;
    }
    else if (this.selectedbatype == "2") {
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

  onselectbankaccounttype(id) {
    this.bankaccounttype = id;
  }

  onSelectServiceType(id) {
    this.selectedservicetype = id;
  }

  onSelectIncorporationType(id) {
    this.selectedincorporationtype = id;
  }

  Validatephnumber() {
    this.validatephnumber = this.BARegistrationForm.controls["contactnumber"].value
    this.spinner.show();
    const data: EmailValidation = {
      Email: this.validatephnumber
    }
    this.signupservice.validatemobile(data).subscribe((Data: any) => {
      this.spinner.hide();
      this.mobileresult = Data;
      if (this.mobileresult == "exist") {
        this.validmobile = true;
      }
      else {
        this.validmobile = false;
      }
      this.spinner.hide();

    })
  }

  saveIndividualBA() {
    this.submitted = true;
    this.selectedservicetype = "";
    var value = localStorage.getItem("validateval")

    if(value == "true"){
    if (this.BARegistrationFormindividual.invalid) {
      return;
    }
    else if (this.validmobile == true) {
      alert("Please Enter Unregistered Mobile Number")

    }
    else if (this.selectedItems.length == 0 || this.selectedItems == []) {
      alert("Please Select Service Type")
    }

    if(value == "true"){
      if (this.BARegistrationFormindividual.invalid) {
        return;
      }
      else if (this.validmobile == true) {
        alert("Please Enter Unregistered Mobile Number")
  
      }
      else if (this.selectedItems.length == 0 || this.selectedItems == []) {
        alert("Please Select Service Type")
      }
  
      else {
        var aa = this.BARegistrationFormindividual.controls["emailind"].value;
        var cc = this.BARegistrationFormindividual.controls["pannumind"].value;
        var emailvalid = this.emailrex.test(aa);
        var panvalic = this.panrex.test(cc);
        
        for (let index = 0; index < this.selectedItems.length; index++) {
         
          if (this.selectedservicetype != "") {
            this.selectedservicetype =  this.selectedservicetype + "," + this.selectedItems[index].servieTypeId;
          }
          else{
            this.selectedservicetype =  this.selectedItems[index].servieTypeId;
          }
        }   
        if (this.BARegistrationFormindividual.controls["pwdind"].value != this.BARegistrationFormindividual.controls["conpwdind"].value) {
          alert("Password and Coinform Password is Should Matching")
        }
      
        else if (!panvalic) {
          alert("Enter Valid PAN number")
        }
     
        else if (this.selectedservicetype == null || this.selectedservicetype == undefined) {
          alert("Please Select Service Type")
        }
        else {
          var data = {
            Pincode: this.BARegistrationFormindividual.controls["pincodeind"].value,
            CountryName: this.BARegistrationFormindividual.controls["countryind"].value,
            StateName: this.BARegistrationFormindividual.controls["stateind"].value,
            DistrictName: this.BARegistrationFormindividual.controls["districtind"].value,
            TalukName: this.BARegistrationFormindividual.controls["talukind"].value,
            FirstName: this.BARegistrationFormindividual.controls["loginNameind"].value,
            MiddleName: this.BARegistrationFormindividual.controls["middlenameind"].value,
            LastName: this.BARegistrationFormindividual.controls["lastnameind"].value,
            Password: this.BARegistrationFormindividual.controls["pwdind"].value,
            PhoneNumber: this.BARegistrationFormindividual.controls["contactnumberind"].value,
            Email: this.BARegistrationFormindividual.controls["emailind"].value,
            DateofBirth: this.BARegistrationFormindividual.controls["dobind"].value,
            FatherorHusbandName: this.BARegistrationFormindividual.controls["fathernameind"].value,
            Occupation: this.occuid,
            FlatNumber: this.BARegistrationFormindividual.controls["flatnumind"].value,
            BuildingName: this.BARegistrationFormindividual.controls["buldinameind"].value,
            Address: this.BARegistrationFormindividual.controls["saddoneind"].value,
            Addtresstwo: this.BARegistrationFormindividual.controls["saddtwoind"].value,
            Experience: this.BARegistrationFormindividual.controls["serviceperiodind"].value,
            //TypesofServiceOffered: this.BARegistrationFormindividual.controls["TypesofServiceOfferedind"].value,
           // DetailedListofService: this.BARegistrationFormindividual.controls["servicelistind"].value,
            PanNumber: this.BARegistrationFormindividual.controls["pannumind"].value,
            SelectedServiceType: this.selectedservicetype,
            // BankName: this.BARegistrationForm.controls["bankname"].value,
            // Bankbranch: this.BARegistrationForm.controls["bankbranch"].value,
            // AccountType: this.bankaccounttype,
            // Nameofaccount: this.BARegistrationForm.controls["accountname"].value,
            // IFSCcode: this.BARegistrationForm.controls["ifsccode"].value,
            // AccountNuber: this.BARegistrationForm.controls["accountnumber"].value,
            TypesofServiceOffered:this.selectedservicetype,
          }
          const frmData = new FormData();
          this.spinner.show();
  
          frmData.append("RegData", JSON.stringify(data));
  
          this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostBusinessAssociateRegistration/', frmData).subscribe(
            data => {
              if (data == "success") {
                alert("Business Associate Registered Successfully!!")
  
                this.notify = "Business Associate Registered Successfully!!"
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
  }
  }

  saveCompanyBA() {
    this.submitted = true;
    this.selectedservicetype = "";
    //var value = localStorage.getItem("validateval")

   // if(value == "true"){
    // if (this.BARegistrationFormcompany.invalid) {
    //   return;
    // }
   if (this.validmobile == true) {
      alert("Please Enter Unregistered Mobile Number");
    }
    else {
      var aa = this.BARegistrationFormcompany.controls["emailcom"].value;
      var cc = this.BARegistrationFormcompany.controls["pannumcom"].value;
      var emailvalid = this.emailrex.test(aa);
      var panvalic = this.panrex.test(cc);
      for (let index = 0; index < this.selectedItems.length; index++) {
       
        if (this.selectedservicetype != "") {
          this.selectedservicetype =  this.selectedservicetype + "," + this.selectedItems[index].servieTypeId;
        }
        else{
          this.selectedservicetype =  this.selectedItems[index].servieTypeId;
        }
      } 
      if (this.BARegistrationFormcompany.controls["pwdcom"].value != this.BARegistrationFormcompany.controls["conpwdcom"].value) {
        alert("Password and Coinform Password is Should Matching")
      }
    
      else if (!panvalic) {
        alert("Enter Valid PAN number")
      }
      else if (this.selectedservicetype == null || this.selectedservicetype == undefined) {
        alert("Please Select Service Type")
      }
      else if (this.selectedincorporationtype == null || this.selectedincorporationtype == undefined) {
        alert("Please Select Incorporation Type")
      }      
      else {
        var data = {
          Pincode: this.BARegistrationFormcompany.controls["pincodecom"].value,
          CountryName: this.BARegistrationFormcompany.controls["countrycom"].value,
          StateName: this.BARegistrationFormcompany.controls["statecom"].value,
          DistrictName: this.BARegistrationFormcompany.controls["districtcom"].value,
          TalukName: this.BARegistrationFormcompany.controls["talukcom"].value,
          CompanyName: this.BARegistrationFormcompany.controls["companyNamecom"].value,
          OwnerName: this.BARegistrationFormcompany.controls["ownerNamecom"].value,
          MiddleName: this.BARegistrationFormcompany.controls["middlenamecom"].value,
          LastName: this.BARegistrationFormcompany.controls["lastnamecom"].value,
         // RegisteredOfficeAddress: this.BARegistrationFormcompany.controls["registeredaddress"].value,
          IncorporationType: this.selectedincorporationtype,
          DateofIncorporation: this.BARegistrationFormcompany.controls["doincom"].value,
          BoardResolution: null,
          Password: this.BARegistrationFormcompany.controls["pwdcom"].value,
          PhoneNumber: this.BARegistrationFormcompany.controls["contactnumbercom"].value,
          Email: this.BARegistrationFormcompany.controls["emailcom"].value,
          Experience: this.BARegistrationFormcompany.controls["serviceperiodcom"].value,
          // TypesofServiceOffered: this.BARegistrationFormcompany.controls["TypesofServiceOffered"].value,
          // DetailedListofService: this.BARegistrationFormcompany.controls["servicelist"].value,
          PanNumber: this.BARegistrationFormcompany.controls["pannumcom"].value,
          FlatNumber: this.BARegistrationFormcompany.controls["flatnumcom"].value,
          BuildingName: this.BARegistrationFormcompany.controls["buldinamecom"].value,
          Address: this.BARegistrationFormcompany.controls["saddonecom"].value,
          Addtresstwo: this.BARegistrationFormcompany.controls["saddtwocom"].value,
          SignatureVerfiyId: null,
          ImageVerfiyId: null,
          //Otherdocdetails: this.documentArray,
          otherdocdetails: this.documentArray,
          TypesofServiceOffered:this.selectedservicetype,
        }
        const frmData = new FormData();
        this.spinner.show();

        for (var i = 0; i < this.customerotherdocs.length; i++) {
          frmData.append("CustomerOtherDocs", this.customerotherdocs[i]);
        }

        frmData.append("RegData", JSON.stringify(data));
        frmData.append("ResolutionCertificate", this.boardofresFile);
        frmData.append("CompanyPanCard", this.companypancardfile);
        frmData.append("GSTCertificate", this.companygstfile);
        frmData.append("IncorporationCertificate", this.companyincorporationfile);
        frmData.append("Agreement", this.companyagreementfile);


        // frmData.append("RegData", JSON.stringify(data));

        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostBusinessAssociateRegistrationForCompany/', frmData).subscribe(
          data => {
            if (data == "success") {
              alert("Business Associate Registered Successfully!!")
              this.notify = "Business Associate Registered Successfully!!"
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
  

  savePartnershipBA() {
    this.submitted = true;
    this.selectedservicetype = "";
    // var value = localStorage.getItem("validateval")

    // if(value == "true"){
    // if (this.BARegistrationFormindividualpartnership.invalid) {
    //   return;
    // }
     if (this.validmobile == true) {
      alert("Please Enter Unregistered Mobile Number");
    }
    else {
      var aa = this.BARegistrationFormindividualpartnership.controls["emailpar"].value;
      var cc = this.BARegistrationFormindividualpartnership.controls["pannumpar"].value;
      var emailvalid = this.emailrex.test(aa);
      var panvalic = this.panrex.test(cc);
      for (let index = 0; index < this.selectedItems.length; index++) {
       
        if (this.selectedservicetype != "") {
          this.selectedservicetype =  this.selectedservicetype + "," + this.selectedItems[index].servieTypeId;
        }
        else{
          this.selectedservicetype =  this.selectedItems[index].servieTypeId;
        }
      }
      if (this.BARegistrationFormindividualpartnership.controls["pwdpar"].value != this.BARegistrationFormindividualpartnership.controls["conpwdpar"].value) {
        alert("Password and Coinform Password is Should Matching")
      }
   
      else if (!panvalic) {
        alert("Enter Valid PAN number")
      }   
      else if (this.selectedservicetype == null || this.selectedservicetype == undefined) {
        alert("Please Select Service Type")
      }
      else if (this.selectedincorporationtype == null || this.selectedincorporationtype == undefined) {
        alert("Please Select Incorporation Type")
      }    
      else {
        var data = {
          Pincode: this.BARegistrationFormindividualpartnership.controls["pincodepar"].value,
          CountryName: this.BARegistrationFormindividualpartnership.controls["countrypar"].value,
          StateName: this.BARegistrationFormindividualpartnership.controls["statepar"].value,
          DistrictName: this.BARegistrationFormindividualpartnership.controls["districtpar"].value,
          TalukName: this.BARegistrationFormindividualpartnership.controls["talukpar"].value,
          CompanyName: this.BARegistrationFormindividualpartnership.controls["companyNamepar"].value,
          OwnerName: this.BARegistrationFormindividualpartnership.controls["loginNamepar"].value,
          PartnerName: this.BARegistrationFormindividualpartnership.controls["partnerNamepar"].value,
          //RegisteredOfficeAddress: this.BARegistrationFormindividualpartnership.controls["registeredaddresspar"].value,
          IncorporationType: this.selectedincorporationtype,
          DateofIncorporation: this.BARegistrationFormindividualpartnership.controls["doinpar"].value,
          BoardResolution: this.BARegistrationFormindividualpartnership.controls["boardresolutionpar"].value,
          Password: this.BARegistrationFormindividualpartnership.controls["pwdpar"].value,
          PhoneNumber: this.BARegistrationFormindividualpartnership.controls["contactnumberpar"].value,
          Email: this.BARegistrationFormindividualpartnership.controls["emailpar"].value,
          Experience: this.BARegistrationFormindividualpartnership.controls["serviceperiodpar"].value,
          //TypesofServiceOffered: this.BARegistrationFormindividualpartnership.controls["TypesofServiceOfferedpar"].value,
          //DetailedListofService: this.BARegistrationFormindividualpartnership.controls["servicelistpar"].value,
          PanNumber: this.BARegistrationFormindividualpartnership.controls["pannumpar"].value,          
          FlatNumber: this.BARegistrationFormindividualpartnership.controls["flatnumpar"].value,
          BuildingName: this.BARegistrationFormindividualpartnership.controls["buldinamepar"].value,
          Address: this.BARegistrationFormindividualpartnership.controls["saddonepar"].value,
          Addtresstwo: this.BARegistrationFormindividualpartnership.controls["saddtwopar"].value,
          SignatureVerfiyId: null,
          ImageVerfiyId: null,
          //Otherdocdetails: this.documentArraypartnership,
          otherdocdetails: this.documentArraypartnership,
          TypesofServiceOffered:this.selectedservicetype,
        }
        const frmData = new FormData();
        this.spinner.show();

        for (var i = 0; i < this.customerotherdocspartnership.length; i++) {
          frmData.append("CustomerOtherDocs", this.customerotherdocspartnership[i]);
        }

        frmData.append("ResolutionCertificate", this.partnershipresolutionfile);
        frmData.append("CompanyPanCard", this.panpartnershipfile);
        frmData.append("GSTCertificate", this.partnershipgstfile);
        frmData.append("IncorporationCertificate", this.partnershipincorporationfile);
        frmData.append("Agreement", this.companyagreementfile);

        frmData.append("RegData", JSON.stringify(data));

        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostBusinessAssociateRegistrationForPartnership/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Business Associate Registered Successfully!!"
              alert("Business Associate Registered Successfully!!")
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
  
  Validatemail() {
    if(this.individual){
      this.SendMailorMobile=this.emailind
      this.Sendname=this.loginNameind
    }
    else if(this.company){
      this.SendMailorMobile=this.emailcom
      this.Sendname=this.ownerNamecom

    }
    else if(this.partnership){
      this.SendMailorMobile=this.emailpar
      this.Sendname=this.loginNamepar

    }
    this.validmail=false
    if (this.SendMailorMobile.includes('@')) {
      this.senddata = {
        Email: this.SendMailorMobile,
        MobileNumber: null,
        UserName:this.Sendname,
        FirstName:this.Sendname
      }
    }
    else {
      this.senddata = {
        MobileNumber: this.SendMailorMobile,
        Email: null,
        UserName:this.Sendname,
        FirstName:this.Sendname
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
        this.enableotp=false;
      }
      else {
        this.validmail = false;
        this.enableotp=true;

      }
      this.spinner.hide();

    })
  }

  Validateotp() {
    if(this.individual){
      this.otp=this.otpind
    }
    else if(this.company){
      this.otp=this.otpcom

    }
    else if(this.partnership){
      this.otp=this.otppar


    }
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    this.spinner.show();
    var data = {
      MobileorEmail: this.SendMailorMobile,
      OTP:this.otp,
      CreatedOn: latest_date,
      UserId: null
    }
    this.signupservice.ValidateOTPRegistration(data).subscribe((response: any) => {
      this.spinner.hide();
      if (response== '0') {
        alert("Your Email/Mobile Number is successfully verified!!")
        this.validotp = false;
 
          this.enableotp=false;
          this.otpind=null
          this.otpcom=null
          this.otppar=null
      }
    
      else if(response=='1'){
        alert("Incorrect OTP")
        this.validotp = true;
        this.displayotpmsg="Incorrect OTP"
      }
      else if(response=='2'){
        alert("OTP has been expired")
        this.validotp = true;
        this.displayotpmsg="OTP has been expired"

      }
    
      this.spinner.hide();

    })
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

      this.spinner.show();
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


  onChangeforboardofresolution(event: any){
    var fileslistone = "";
    this.files3 = [].slice.call(event.target.files);
    fileslistone = this.files3[0];

    this.boardofresFile = fileslistone;
  }

  onChangeforcompanypan(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.companypancardfile = fileslistonee;
  }

  onChangeforcompanygst(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.companygstfile = fileslistonee;
  }

  onChangeforcompanyincorporation(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.companyincorporationfile = fileslistonee;
  }

  onChangeforcompanyagreement(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.companyagreementfile = fileslistonee;
  }

  onChangeforpartnerresolution(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.partnershipresolutionfile = fileslistonee;
  }
  onChangeforpanpartnership(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.panpartnershipfile = fileslistonee;
  }

  onChangeforpartnershipgst(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.partnershipgstfile = fileslistonee;
  }

  onChangeforpartnershipincorporation(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.partnershipincorporationfile = fileslistonee;
  }

  onChangeforpartnershipagreement(event: any){
    var fileslistonee = "";
    var aa = [].slice.call(event.target.files);
    fileslistonee = aa[0];

    this.partnershipagreementfile = fileslistonee;
  }


  public documentArray: Array<any> = [];
  public newDocAttributee: any = { code: "", };
 

  deleteFieldValueDocument(index) {
    this.documentArray.splice(index, 1);
  }

  addDocFieldValue() {
    var aa = this.BARegistrationFormcompany.controls["otherdocumentnameee"].value
    if (this.BARegistrationFormcompany.controls["otherdocumentnameee"].value == "" || this.BARegistrationFormcompany.controls["otherdocumentnameee"].value == undefined) {
      alert("Please Enter Document Name")
    }
    if (this.otherdocactualname === "" || this.otherdocactualname === undefined) {
      alert("please Select Document")
    }
    else {
      this.newDocAttributee.code = this.BARegistrationFormcompany.controls["otherdocumentnameee"].value;
      this.newDocAttributee.otherdocactualname = this.otherdocactualname
      this.documentArray.push(this.newDocAttributee)
      this.newDocAttributee = {};
      this.otherdocactualname = "";
      this.otherdocumentnameee="";
    }
  }

  OnChangeOtherDocs(event) {
    var otherdocs = [];
    this.otherdocuments = [].slice.call(event.target.files);
    console.log(this.otherdocuments);
    otherdocs = this.otherdocuments[0];
    this.customerotherdocs.push(otherdocs);
    this.otherdocactualname = this.otherdocuments[0].name
  }


  public documentArraypartnership: Array<any> = [];
  public newDocAttributepartnshp: any = { code: "", };
 

  deleteFieldValueDocumentpartnshp(index) {
    this.documentArraypartnership.splice(index, 1);
  }

  addDocFieldValuepartnshp() {
    if (this.BARegistrationFormindividualpartnership.controls["otherdocumentnamepartnshp"].value == "" || this.BARegistrationFormindividualpartnership.controls["otherdocumentnamepartnshp"].value == undefined) {
      alert("Please Enter Document Name")
    }
    if (this.otherdocactualnamepartnshp === "" || this.otherdocactualnamepartnshp === undefined) {
      alert("please Select Document")
    }
    else {
      this.newDocAttributee.code = this.BARegistrationFormindividualpartnership.controls["otherdocumentnamepartnshp"].value;

      this.newDocAttributepartnshp.otherdocactualnamepartnshp = this.otherdocactualnamepartnshp
      this.documentArraypartnership.push(this.newDocAttributepartnshp)
      this.newDocAttributepartnshp = {};
      this.otherdocactualnamepartnshp = "";
    }
  }

  OnChangeOtherDocspartnshp(event) {
    var otherdocs1 = [];
    this.otherdocumentspartnshp = [].slice.call(event.target.files);
    console.log(this.otherdocumentspartnshp);
    otherdocs1 = this.otherdocumentspartnshp[0];
    this.customerotherdocspartnership.push(otherdocs1);
    this.otherdocactualnamepartnshp = this.otherdocumentspartnshp[0].name
  }

  goBack() {
    var presentURL = localStorage.getItem('LastURL');
    window.location.href = presentURL;
  }
}
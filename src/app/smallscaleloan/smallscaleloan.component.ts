import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../Shared/country.service';
import { DetailsformService } from '../Shared/detailsform.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { Router } from '@angular/router';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-smallscaleloan',
  templateUrl: './smallscaleloan.component.html',
  styleUrls: ['./smallscaleloan.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class SmallscaleloanComponent implements OnInit {
  @ViewChild('stepper1') stepper1: MatStepper;
  email: any;
  designation: any;
  firstname: any;
  middlename: any;
  lastname: any;
  Number: any;
  maritalstatus: any;
  gender: any;
  placeofbirth: any;
  religion: any;
  dateofbirth: any;
  caste: any;
  qualification: any;
  occupation: any;
  street: any;
  cid: any;
  pincode: any;
  district: any;
  city: any;
  state: any;
  family: any;
  numberofdep: any;
  numofchild: any;
  Anualamt: any;
  otheramt: any;
  totalamt: any;
  nominnename: any;
  relationship: any;
  passbook: any;
  Ndob: any;
  ncity: any;
  Nstate: any;
  minorname: any;
  minoraddress: any;
  minordob: any;
  Npincodes: any;
  Naddress: any;
  bankaccount: any;
  branch: any;
  bankname: any;
  Ifscecode: any;
  chequefacility: any;
  loanfacility: any;
  rationcardnum: any;
  aadharnum: any;
  voternum: any;
  pannumber: any;
  servicetax: any;
  passportnum: any;
  lifeinsurance: any;
  isconfirm: any;
  fixedasset: any;
  placeallocation: any;
  measurement: any;
  giidancevalue: any;
  presentvalue: any;
  total: any;
  movableasset: any;
  model: any;
  dateofpurchase: any;
  quantity: any;
  prevalues: any;
  cartotal: any;

  partnerage: any;
  pastexperience: any;
  residentialaddress: any;
  partnerproprietor: any;
  technicallyqualified: any;
  lineofactivity: any;
  technically: any;
  loanamounts: any;
  termloan: any;
  workingcapital: any;



  guardianname: any;
   guardioanrelationshipwithminor: any;
  period: any;
  Programme: any;
  collateral: any;
  Valuation: any;
  mentioned: any;
  description: any;
  AMtRs: any;
  Brief: any;
  goodamt: any;
  descgood: any;
  brifers: any;

  factoryaddress: any;
  nameofpartner: any;
  country: any
  taluk: any
  immovable: any;
  Permissibledata: any;
  firstFormGroup = new FormGroup({
    firstCtrl: new FormControl(),
    sname: new FormControl(),
  })
  secondFormGroup = new FormGroup({
    secondCtrl: new FormControl(),
    sname: new FormControl(),
  })
  action: any;
  // RegistrationForm=new FormGroup({
  //   firstname: new FormControl(),

  // })
  submitted: boolean = false;
  Countries: any;
  countryid: any;
  genders: any;
  status: any;
  religions: any;
  qualifications: any;
  occupations: any;
  designations: any;
  families: any;
  assets: any;
  moveable: any;
  castes: any;
  genderid: any;
  martid: any;
  rid: any;
  casteid: any;
  quaid: any;
  occuid: any;
  desid: any;
  fid: any;
  hid: any;
  caid: any;
  banks: any;
  repaid: any;
  Instalment: any;
  driving: any;
  Share: any;
  Partnersloan: any;
  enclose: any;
  towards: any;
  particulars: any;
  applicant: any;
  delivery: any;
  payment: any;
  authorised: any;
  vehicleuse: any;
  inclusive: any;
  Passenger: any;
  purchased: any;
  Christian: any;
  Outstanding: any;
  loanac: any;
  loaamt: any;
  Directors: any;
  Residential: any;
  Furnish: any;
  balance: any;
  finishloan: any;
  modelname: any;
  Agreed: any;
  Registration: any;
  owner: any;
  acnumber: any;
  cashloan: any;
  vehical: any;
  support: any;
  employed: any;
  concern: any;
  earning: any;
  assessee: any;
  hba: any;
  allowance: any;
  compensatory: any;
  value: any;
  Bank: any;
  policies: any;
  repaying: any;
  dependents: any;
  Dependencies: any;
  loama: any;
  located: any;
  Activity: any;
  under: any;
  annualincome: any;
  borrower: any;
  property: any;
  assetsdata: any;
  drawing: any;
  purofloan: any;
  benefit: any;
  studying: any;
  course: any;
  evidence: any;
  deposits: any;
  Additional: any;
  Board: any;
  operative: any;
  Salary: any;
  Income: any;
  Department: any;
  Officedata: any;
  Numbersb: any;
  Age: any;
  Membership: any;
  Account: any;
  Relationship: any;
  newvehicle: boolean;
  oldvehicle: boolean;
  Domestic: any;
  Adults: any;
  facilities: any;
  finance: any;
  Concern: any;
  Business: any;
  register: any;
  Authority: any;
  activity: any;
  establishment: any;
  maintained: any;
  belongs: any;
  competent: any;
  related: any;
  associate: any;
  present: any;
  Credit: boolean;
  Type: boolean;
  editformname: string;
  enablepreview: boolean = false;
  amtadv: any;
  Reasons: any;
  owned: any;
  Worth: any;
  Consumer: any;
  Scaleloan: any;
  residentialadd: any;
  ssage: any;
  ssname: any; selectedchequetype: any;
  selectedchequetypeid: any;
  obligation: any;
  member: any;
  sstotal: any;
  children: boolean;
  Primary: boolean;
  additional: any;
  vatno: boolean;
  tinno: any;
  managed: any;
  proprietary: any;
  DateTime: Date;
  username: string;
  uid: string;
  userImage: any;
  dismissalert: boolean;
  notify: string;
  districtone: any;
  stateone: any;
  postalcode: any;
  adressone: any;
  adresstwo: any;
  Naddress2: any;
  ncountry: any;
  Ndistrict: any;
  Npincode: any;
  SelectedAadharFiles: string;
  SelectedVoterIdFiles: any;
  SelectedPassportFiles: any;
  SelectedITReturnsFiles: any;
  SelectedBankStatementsFiles: any;
  selectedbanktype: any;
  SelectedGSTCertFiles: string;
  minorcountry: any
  minorstate: any
  minordistrict: any
  minoraddress1: any
  minorpincode: any
  files4: any;
  files3: any;
  files2: any;
  files5: any;
  files6: any;
  dynamicArray: Array<DynamicGrid> = [];
  countryone: any;
  talukone: any;
  newadress: boolean;
  sameadress: boolean;
  address: any;
  AllUserData: any;
  ticketid: string;
  role: any;
  customerid: any;
  IsConfirm: any;
  PermanentSameasResidential: boolean;
  CertificateList: any;
  bfiles: any;
  BirthCertificateFiles: string;
  castefiles: any;
  CasteCertificateFiles: string;
  MedicalCertificateFiles: string;
  medicalfiles: any;
  sscfiles: any;
  SSCCertificateFiles: string;
  DegreeCertificateFiles: string;
  degreefiles: any;
  pgfiles: any;
  PGCertificateFiles: string;
  serviceprovidername: any;
  RelationShipTyes: any;
  relationshiptypeid: any;
  othersinrelationshiptypes: boolean;
  nominnemiddlename: any;
  nominnelastname: any;
  Nomineetype: any;
  Nagedob: any
  minormiddname: any;
  minorlastname: any;
  otherdocuments: any;
  otherdocumentname: any
  otherdocument: any
  otherdoctype: any;
  otherdocname: any;
  customerotherdocs: any = [];
  otherdocactualname: any;
  CertificateDisplay: any = [];
  certificates: any = [];
  certificatesexist: boolean = false;
  BirthCertificateexist: boolean = false;
  CasteCertificateexist: boolean = false;
  DegreeCertificateexist: boolean = false;
  MedicalCertificateexist: boolean = false;
  PGCertificateexist: boolean = false;
  SSCCertificateexist: boolean = false;
  ProposID: string;
  castedetail: any;
  religiondetail: any;
  qualificationdetail: any;
  designationd: any;
  occupatoiondetail: any;
  guardioanrelationshipwithminorid: any;
  minorrelationshipforguardian: boolean;
  GuardianSelectedAadharFiles: string;
  GuardianSelectedpanFiles: string;
  SendCopytoSP: any;
  othercastedetails: boolean;
  othereligiondetails: boolean;
  otherequalification: boolean;
  otherdesignation: boolean;
  othersoccupation: boolean;
  bankdocs: any = [];
  Aadharexist: boolean = false;
  Passportexist: boolean = false;
  GSTexist: boolean = false;
  ITexist: boolean = false;
  BankStatexist: boolean = false;
  VoterIDexist: boolean = false;
  bankdocsexist: boolean = false;
  familydocs: any = [];
  familydocsexist: boolean = false;
  ProspectIdtoDisplydata: string;
  showsubmitbtn: boolean;
  get f() { return this.RegistrationForm.controls; }
  get d() { return this.DetailsForm.controls; }
  get k() { return this.BankDetailsForm.controls; }
  get n() { return this.homeDetailsForm.controls; }
  get s() { return this.smallscaleloanForm.controls; }



  RegistrationForm = new FormGroup({
    customerid: new FormControl(),
    firstname: new FormControl(),
    middlename: new FormControl(),
    lastname: new FormControl(),
    placeofbirth: new FormControl(),
    gender: new FormControl(),
    maritalstatus: new FormControl(),
    Number: new FormControl(),
    dateofbirth: new FormControl(),
    religion: new FormControl(),
    caste: new FormControl(),
    qualification: new FormControl(),
    occupation: new FormControl(),
    cpassword: new FormControl(),
    email: new FormControl(),
    designation: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    pincode: new FormControl(),
    country: new FormControl(),
    state: new FormControl(),
    district: new FormControl(),
    postalcode: new FormControl(),
    adressone: new FormControl(),
    adresstwo: new FormControl(),
    countryone: new FormControl(),
    stateone: new FormControl(),
    districtone: new FormControl(),
    castedetail: new FormControl(),
    religiondetail: new FormControl(),
    qualificationdetail: new FormControl(),
    designationd: new FormControl(),
    occupatoiondetail: new FormControl(),
    // taluk: new FormControl(),
  });

  DetailsForm = new FormGroup({
    customerid: new FormControl(),
    family: new FormControl(),
    numberofdep: new FormControl(),
    numofchild: new FormControl(),
    Anualamt: new FormControl(),
    otheramt: new FormControl(),
    totalamt: new FormControl(),
    nominnename: new FormControl(),
    relationship: new FormControl(),
    passbook: new FormControl(),
    Ndob: new FormControl(),
    Npincode: new FormControl(),
    Nstate: new FormControl(),
    Ndistrict: new FormControl(),
    minorname: new FormControl(),
    minorpincode: new FormControl(),
    minorcountry: new FormControl(),
    minorstate: new FormControl(),
    minordistrict: new FormControl(),
    minoraddress1: new FormControl(),
    minoraddress: new FormControl(),
    minordob: new FormControl(),
    Naddress: new FormControl(),
    Naddress2: new FormControl(),
    ncountry: new FormControl(),
    nominnemiddlename: new FormControl(),
    nominnelastname: new FormControl(),
    Nagedob: new FormControl(),
    minormiddname: new FormControl(),
    minorlastname: new FormControl(),
    guardianname: new FormControl(),
    guardioanrelationshipwithminor: new FormControl(),
  });


  BankDetailsForm = new FormGroup({
    rationcardnum: new FormControl(),
    aadharnum: new FormControl(),
    voternum: new FormControl(),
    pannumber: new FormControl(),
    servicetax: new FormControl(),
    passportnum: new FormControl(),
    lifeinsurance: new FormControl(),
    minordob: new FormControl(),
    IsConfirm: new FormControl(),
  });

  homeDetailsForm = new FormGroup({
    customerid: new FormControl(),
    fixedasset: new FormControl(),
    placeallocation: new FormControl(),
    measurement: new FormControl(),
    giidancevalue: new FormControl(),
    presentvalue: new FormControl(),
    total: new FormControl(),
    movableasset: new FormControl(),
    model: new FormControl(),
    dateofpurchase: new FormControl(),
    quantity: new FormControl(),
    prevalues: new FormControl(),
    cartotal: new FormControl(),
    lifeinsurance: new FormControl(),
  });

  smallscaleloanForm = new FormGroup({
    customerid: new FormControl(),
    facilities: new FormControl(),
    finance: new FormControl(),
    Concern: new FormControl(),
    Business: new FormControl(),
    register: new FormControl(),
    Authority: new FormControl(),
    activity: new FormControl(),
    establishment: new FormControl(),
    maintained: new FormControl(),
    belongs: new FormControl(),
    purchased: new FormControl(),
    Furnish: new FormControl(),
    competent: new FormControl(),
    related: new FormControl(),
    associate: new FormControl(),
    present: new FormControl(),
    Credit: new FormControl(),
    Type: new FormControl(),
    amtadv: new FormControl(),
    balance: new FormControl(),
    managed: new FormControl(),
    Reasons: new FormControl(),
    owned: new FormControl(),
    Worth: new FormControl(),
    additional: new FormControl(),
    Primary: new FormControl(),
    technically: new FormControl(),
    Adults: new FormControl(),
    children: new FormControl(),
    sstotal: new FormControl(),
    member: new FormControl(),
    obligation: new FormControl(),
    ssname: new FormControl(),
    ssage: new FormControl(),
    residentialadd: new FormControl(),
    Scaleloan: new FormControl(),
    Consumer: new FormControl(),
    Relationship: new FormControl(),
    vatno: new FormControl(),
    tinno: new FormControl(),
    proprietary: new FormControl(),
    SendCopytoSP: new FormControl(),

  });

  files1: any;
  SelectedFiles: string;
  validfile: boolean;
  editable: boolean = false;
  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private http: HttpClient, private countryService: CountryService,
    private detailService: DetailsformService, private datepipe: DatePipe, private spinner: NgxSpinnerService,
    private userservice: UserDetailsService, private businessloanservice: BusinessLoanServiceService,
    private httpService: HttpClient, private serviceproviderservice: ServiceProviderService, private route: Router) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.ticketid = localStorage.getItem("TicketId");
    this.ProposID = localStorage.getItem("ProposID");
    this.role = localStorage.getItem("role");
    this.Nomineetype = "";
    localStorage.setItem("customerId", this.customerid);
    this.customerid = localStorage.getItem("customerId");

    this.RegistrationForm = formBuilder.group({
      customerid: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      placeofbirth: ['', Validators.required],
      gender: [''],
      maritalstatus: [''],
      Number: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999), Validators.pattern(/^[6-9]\d{9}$/)]],
      dateofbirth: ['', Validators.required],
      religion: [],
      caste: [''],
      qualification: [''],
      occupation: [''],
      email: ['', [Validators.required, Validators.email]],
      designation: [''],
      street: ['', Validators.required],
      city: ['', Validators.required],
      district: [''],
      pincode: ['', Validators.required],
      state: [''],
      country: [''],
      stateone: [''],
      countryone: [''],
      postalcode: ['', Validators.required],
      adressone: ['', Validators.required],
      adresstwo: ['', Validators.required],
      districtone: [''],
      castedetail: [''],
      religiondetail: [''],
      occupatoiondetail: [''],
      qualificationdetail: [''],
      designationd: [''],
    })

    this.DetailsForm = formBuilder.group({
      numberofdep: ['', Validators.required],
      numofchild: ['', Validators.required],
      Anualamt: ['', Validators.required],
      otheramt: ['', Validators.required],
      totalamt: ['', Validators.required],
      nominnename: [''],
      relationship: [''],
      passbook: [''],
      Ndob: [''],
      family: [],
      ncountry: [],
      Nstate: [''],
      Ndistrict: [''],
      minorname: [''],
      minoraddress: [''],
      minordob: [''],
      Npincode: [''],
      Naddress: [''],
      Naddress2: [''],
      minorpincode: [''],
      minoraddress1: [''],
      minorcountry: [],
      minorstate: [],
      minordistrict: [],
      nominnemiddlename: [],
      nominnelastname: [''],
      Nagedob: ['', Validators.required],
      minormiddname: [''],
      minorlastname: [''],
      guardianname: [''],
      guardioanrelationshipwithminor: ['']
    })

    this.BankDetailsForm = formBuilder.group({
      rationcardnum: ['',],
      aadharnum: [''],
      voternum: [''],
      pannumber: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      servicetax: ['',],
      passportnum: ['',],
      lifeinsurance: [''],
      IsConfirm: false
    })

    this.homeDetailsForm = formBuilder.group({
      fixedasset: ['', Validators.required],
      placeallocation: ['', Validators.required],
      measurement: ['', Validators.required],
      giidancevalue: ['', Validators.required],
      presentvalue: ['', Validators.required],
      total: ['', Validators.required],
      movableasset: ['', Validators.required],
      model: ['', Validators.required],
      dateofpurchase: ['', Validators.required],
      quantity: ['', Validators.required],
      prevalues: ['', Validators.required],
      cartotal: ['', Validators.required],
    })

    this.smallscaleloanForm = formBuilder.group({
      facilities: ['', Validators.required],
      finance: ['', Validators.required],
      Concern: ['', Validators.required],
      Business: ['', Validators.required],
      register: ['', Validators.required],
      Authority: ['', Validators.required],
      activity: ['', Validators.required],
      establishment: ['', Validators.required],
      maintained: ['', Validators.required],
      belongs: ['', Validators.required],
      purchased: ['', Validators.required],
      Furnish: ['', Validators.required],
      competent: ['', Validators.required],
      related: ['', Validators.required],
      associate: ['', Validators.required],
      present: ['', Validators.required],
      Credit: ['', Validators.required],
      Type: ['', Validators.required],
      amtadv: ['', Validators.required],
      balance: ['', Validators.required],
      managed: ['', Validators.required],
      Reasons: ['', Validators.required],
      owned: ['', Validators.required],
      Worth: ['', Validators.required],
      additional: ['', Validators.required],
      Primary: ['', Validators.required],
      technically: ['', Validators.required],
      Adults: ['', Validators.required],
      children: ['', Validators.required],
      sstotal: ['', Validators.required],
      member: ['', Validators.required],
      obligation: ['', Validators.required],
      ssname: ['', Validators.required],
      ssage: ['', Validators.required],
      residentialadd: ['', Validators.required],
      Scaleloan: ['', Validators.required],
      Consumer: ['', Validators.required],
      Relationship: ['', Validators.required],
      vatno: ['', Validators.required],
      tinno: ['', Validators.required],
      proprietary: ['', Validators.required],
      SendCopytoSP: false
    })



    
  //added
  this.ProspectIdtoDisplydata = localStorage.getItem("ProspectIdtoDisplydata");

  this.editformname = localStorage.getItem("editloanform")
  if (this.ProposID == null) {
    this.ProposID = localStorage.getItem("ProspectIdtoDisplydata");
  }
  if (this.editformname == "personal") {
    this.GetEditData();
    this.enablepreview = true;
  }
  else if (this.editformname == "family") {
    this.GetEditData();
    this.enablepreview = true;

  }
  else if (this.editformname == "bank") {
    this.GetEditData();
    this.enablepreview = true;

  }
  else if (this.editformname == "asset") {
    this.GetEditData();
    this.enablepreview = true;

  }
  else if (this.editformname == "smallscale") {
    this.GetEditData();
    this.enablepreview = true;

  }
  else if (this.editformname == "certificates") {
    this.GetEditData();
    this.enablepreview = true;

  }

  else {
    localStorage.setItem("editloanform", "false")
    this.GetDraftData();

  }

  }

  onSelecthome(data: any) {
    this.hid = data
  }
  onSelectcar(data: any) {
    this.caid = data
  }
  onSelectmarital(data: any) {
    this.martid = data
  }

  onSelectfamily(data: any) {
    this.fid = data
  }
  onSelectRelationType(data: any) {
    this.relationshiptypeid = data;
    if (data == 9) {
      this.othersinrelationshiptypes = true;
    }
    else{
      this.othersinrelationshiptypes = false;
    }
  }
  onSelectCaste(data: any) {
    this.casteid = data;
    if (data == 15) {
      this.othercastedetails = true;
    }
    else{
      this.othercastedetails = false;
    }
  }

  onSelectrelogion(data: any) {
    this.rid = data;
    if (data == 1010) {
      this.othereligiondetails = true;
    }
    else{
      this.othereligiondetails = false;
    }
  }
  onSelectqualification(data: any) {
    this.quaid = data;
    if (data == 25) {
      this.otherequalification = true;
    }
    else{
      this.otherequalification = false;
    }
  }
  onSelectdesignation(data: any) {
    this.desid = data;
    if (data == 9) {
      this.otherdesignation = true;
    }
    else{
      this.otherdesignation = false;
    }
  }

  onSelectoccupation(data: any) {
    this.occuid = data;
    if (data == 32) {
      this.othersoccupation = true;
    }
    else{
      this.othersoccupation = false;
    }
  }


  onSelectgender(data: any) {
    this.genderid = data
  }
  ifscrex = new RegExp(/^[A-Za-z]{4}[0-9]{6,7}$/);

  ngOnInit() {
    this.showsubmitbtn = false;
    var custid = localStorage.setItem("customerId", this.customerid);
    if (custid == undefined) {
      this.customerid = null;
    }
    else {
      this.customerid = localStorage.getItem("customerId");
    }
    // this.GetDraftData();
    this.Getgender();
    this.Getstatus();
    this.Getreligion();
    this.Getqualification();
    // this.GetDraftData();
    this.Getoccupation();
    this.Getdesignation();
    this.Getfamily();
    this.Getfixedasset();
    this.Getmoveableasset();
    this.Getcaste();
    this.Getbankaccount();
    if (this.role != '1008') {
      this.GetCurrentUserImage();
      this.GetUserDetails();
    }
    this.Certificate();
    this.GetServiceProvider();
    this.GetRelationShipTyes();
    
  }

  async GetRelationShipTyes() {
    this.spinner.show()
    await this.businessloanservice.getrelationshiptypedata().subscribe((response: any) => {
      this.RelationShipTyes = response;
      this.spinner.hide()
    });
  }
  async GetServiceProvider() {
    this.spinner.show()
    await this.serviceproviderservice.getservcieprovider(this.ticketid).subscribe((response: any) => {
      this.serviceprovidername = response;
      this.spinner.hide()

    });
  }
  async Getgender() {
    this.spinner.show()
    await this.businessloanservice.getgenderdata().subscribe((response: any) => {
      this.genders = response;
      this.spinner.hide()

    });
  }
  async Getstatus() {
    this.spinner.show()
    await this.businessloanservice.getmaritalstatus().subscribe((response: any) => {
      this.status = response;
      this.spinner.hide()

    });
  }
  Getreligion() {
    this.spinner.show()
    this.businessloanservice.getAllreligion().subscribe((response: any) => {
      this.religions = response;
      this.spinner.hide()

    });
  }
  Getqualification() {
    this.spinner.show()
    this.businessloanservice.getAllqualification().subscribe((response: any) => {
      this.qualifications = response;
      this.spinner.hide()

    });
  }
  Getoccupation() {
    this.spinner.show()
    this.businessloanservice.getAlloccupatiom().subscribe((response: any) => {
      this.occupations = response;
      this.spinner.hide()

    });
  }
  Getdesignation() {
    this.spinner.show()
    this.businessloanservice.getALldesignation().subscribe((response: any) => {
      this.designations = response;
      this.spinner.hide()

    });
  }
  Getfamily() {
    this.spinner.show()
    this.businessloanservice.getALLfanilytype().subscribe((response: any) => {
      this.families = response;
      this.spinner.hide()

    });
  }
  Getfixedasset() {
    this.spinner.show()
    this.businessloanservice.getALLfixedasset().subscribe((response: any) => {
      this.assets = response;
      this.spinner.hide()

    });
  }
  Getmoveableasset() {
    this.spinner.show()
    this.businessloanservice.getALLmoveable().subscribe((response: any) => {
      this.moveable = response;
      this.spinner.hide()

    });
  }
  Getcaste() {
    this.spinner.show()
    this.businessloanservice.getALLcaste().subscribe((response: any) => {
      this.castes = response;
      this.spinner.hide()

    });
  }
  Getbankaccount() {
    this.spinner.show()
    this.businessloanservice.getbankaccounttype().subscribe((response: any) => {
      this.banks = response;
      this.spinner.hide()

    });
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

  getpincoddata() {
    var code = this.postalcode;
    this.spinner.show();
    this.http.get("https://api.postalpincode.in/pincode/" + code).subscribe((data: any) => {
      console.log(data);
      this.spinner.hide();

      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.stateone = data[0].PostOffice[0].State;
        this.countryone = data[0].PostOffice[0].Country;
        this.districtone = data[0].PostOffice[0].District;
        this.talukone = data[0].PostOffice[0].Block;
      }
      else {
        alert("Enter valid Pincode");
      }
    })
  }

  getallpincoddata(id) {

    this.spinner.show();
    this.http.get("https://api.postalpincode.in/pincode/" + id).subscribe((data: any) => {
      console.log(data);
      this.spinner.hide();

      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.Nstate = data[0].PostOffice[0].State;
        this.ncountry = data[0].PostOffice[0].Country;
        this.Ndistrict = data[0].PostOffice[0].District;
      }
      else {
        alert("Enter valid Pincode");
      }
    })
  }

  getallpincoddataforminor(id) {

    this.spinner.show();
    this.http.get("https://api.postalpincode.in/pincode/" + id).subscribe((data: any) => {
      console.log(data);
      this.spinner.hide();

      if (data[0].Status == "404") {
        alert("Enter valid Pincode");
      }
      if (data[0].Message == "No records found") {
        alert("Invalid Pincode");
      }
      else if (data[0].Message.includes('Number of pincode')) {
        this.minorstate = data[0].PostOffice[0].State;
        this.minorcountry = data[0].PostOffice[0].Country;
        this.minordistrict = data[0].PostOffice[0].District;

      }
      else {
        alert("Enter valid Pincode");
      }
    })
  }

  GetUserDetails() {
    this.spinner.show();
    this.serviceproviderservice.GetUserDetails(this.ticketid).subscribe((data: any) => {
      this.AllUserData = data;
      this.pincode = this.AllUserData.postalCode;
      this.getalldata();
      var namedata = this.AllUserData.userName.split(" ");
      this.firstname = namedata[0];
      this.lastname = namedata[1];
      this.Number = this.AllUserData.mobileNumber;
      this.city = this.AllUserData.address1;
      this.street = this.AllUserData.address2;
      this.email = this.AllUserData.email;
      this.customerid = this.AllUserData.userId;
    })
  }

  onSelectaddress(event) {
    this.address = event;
    if (event.target.checked) {
      this.sameadress = true;
      this.newadress = false;
      this.postalcode = this.pincode;
      this.countryone = this.country;
      this.stateone = this.state;
      this.districtone = this.district;
      this.RegistrationForm.value.adressone = this.city;
      this.RegistrationForm.value.adresstwo = this.street
      this.RegistrationForm.controls['adressone'].setValue(this.city);
      this.RegistrationForm.controls['adresstwo'].setValue(this.street);
      this.RegistrationForm.controls['postalcode'].setValue(this.pincode);

      this.adressone = this.city;
      this.adresstwo = this.street
      this.PermanentSameasResidential = true;
    }
    else {
      this.newadress = true;
      this.sameadress = false;
      this.postalcode = "";
      this.countryone = "";
      this.stateone = "";
      this.districtone = "";
      this.adressone = "";
      this.adresstwo = "";
      this.PermanentSameasResidential = false;

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

  GetCurrentUserImage() {
    this.spinner.show()
    this.userservice.getCurrentUSerImage(this.ticketid).subscribe((respose: any) => {
      this.userImage = respose;
      this.spinner.hide();
    });
  }

  onChange(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    console.log(this.files1);
    fileslist = this.files1[0];

    this.SelectedFiles = fileslist;
    localStorage.setItem("validateval", "true")

  }

  GetTotalAmout() {
    this.totalamt = (+this.otheramt) + (+this.Anualamt);
  }

  getCustomerImage(id) {
    this.spinner.show()
    this.userservice.getCurrentUSerImage(id).subscribe((respose: any) => {
      this.userImage = respose;
      this.getCustomerDetails(id);
      this.spinner.hide();
    });
  }

  getCustomerDetails(id) {
    this.spinner.show();
    this.serviceproviderservice.GetUserDetails(id).subscribe((data: any) => {
      this.AllUserData = data;
      this.pincode = this.AllUserData.postalCode;
      this.getalldata();
      var namedata = this.AllUserData.userName.split(" ");
      this.firstname = namedata[0];
      this.lastname = namedata[1];
      this.Number = this.AllUserData.mobileNumber;
      this.city = this.AllUserData.address1;
      this.street = this.AllUserData.address2;
      this.email = this.AllUserData.email;
    })
  }

  signIn(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;
      if (this.RegistrationForm.invalid) {
        return;
      }
      else if (this.genderid == null || this.genderid == undefined) {
        alert("Please Select Gender")
      }
      else if (this.martid == null || this.martid == undefined) {
        alert("Please Select Maritial Status")
      }
      else if (this.rid == null || this.rid == undefined) {
        alert("Please Select Religion")
      }
      else if (this.casteid == null || this.casteid == undefined) {
        alert("Please Select Caste")
      }
      else if (this.quaid == null || this.quaid == undefined) {
        alert("Please Select Qualification")
      }
      else if (this.occuid == null || this.occuid == undefined) {
        alert("Please Select Occupation")
      }
      else if (this.desid == null || this.desid == undefined) {
        alert("Please Select Designation")
      }
      else if (this.rid == 1010 && (this.religiondetail == null || this.religiondetail == undefined)) {
        alert("Please Enter Religion")
      }
      else if (this.casteid == 15 && (this.castedetail == null || this.castedetail == undefined)) {
        alert("Please Enter Caste")
      }
      else if (this.quaid == 25 && (this.qualificationdetail == null || this.qualificationdetail == undefined)) {
        alert("Please Enter Qualification")
      }
      else if (this.occuid == 32 && (this.occupatoiondetail == null || this.occupatoiondetail == undefined)) {
        alert("Please Enter Occupation")
      }
      else if (this.desid == 9 && (this.designationd == null || this.designationd == undefined)) {
        alert("Please Enter Designation")
      }
      else {
        this.spinner.show();
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          LastName: this.lastname,
          FirstName: this.firstname,
          MiddleName: this.middlename,
          Email: this.email,
          Image: this.userImage,
          ResidentialCity: null,
          ResidentialDistrict: this.district,
          ResidentialState: this.state,
          ResidentialPincode: this.pincode,
          ResidentialLineOne: this.city,
          ResidentialLineTwo: this.street,
          DateOfBirth: this.dateofbirth,
          Designation: this.desid,
          Gender: this.genderid,
          MaritalStatus: this.martid,
          MobileNum: this.Number,
          Occupation: this.occuid,
          PermanentDistrict: this.districtone,
          PermanentState: this.stateone,
          PermanentPincode: this.postalcode,
          PermanentLineOne: this.adressone,
          PermanentLineTwo: this.adresstwo,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          Qualification: this.quaid,
          PlaceOfBirth: this.placeofbirth,
          Race: this.casteid,
          Religion: this.rid,
          TickedId: this.ticketid,
          IsAllFileldsFilled: true,
          PermanentSameasResidential: this.PermanentSameasResidential,
          ProductId: 1,
          LoanIdORInsuranceId: 4,
          ProsperityId: this.ProposID,
          ApplicationType: "Customer",
          URL: "smallscaleloanform",
          Role:this.role,
          UserId:this.uid
        }
        this.businessloanservice.SaveBasicDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Personal Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData();
            if (localStorage.getItem("editloanform") != "false") {
              this.stepper1.selectedIndex = 5

            }

            else {
              this.GetDraftData();

            }
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })

      }
    }
    else {
      this.submitted = true;
      if (this.RegistrationForm.invalid) {
        return;
      }
      if (this.genderid == null || this.genderid == undefined) {
        alert("Please Select Gender")
      }
      else if (this.martid == null || this.martid == undefined) {
        alert("Please Select Maritial Status")
      }
      else if (this.rid == null || this.rid == undefined) {
        alert("Please Select Religion")
      }
      else if (this.casteid == null || this.casteid == undefined) {
        alert("Please Select Caste")
      }
      else if (this.quaid == null || this.quaid == undefined) {
        alert("Please Select Qualification")
      }
      else if (this.occuid == null || this.occuid == undefined) {
        alert("Please Select Occupation")
      }
      else if (this.desid == null || this.desid == undefined) {
        alert("Please Select Designation")
      }
      else if (this.rid == 1010 && (this.religiondetail == null || this.religiondetail == undefined)) {
        alert("Please Enter Religion")
      }
      else if (this.casteid == 15 && (this.castedetail == null || this.castedetail == undefined)) {
        alert("Please Enter Caste")
      }
      else if (this.quaid == 25 && (this.qualificationdetail == null || this.qualificationdetail == undefined)) {
        alert("Please Enter Qualification")
      }
      else if (this.occuid == 32 && (this.occupatoiondetail == null || this.occupatoiondetail == undefined)) {
        alert("Please Enter Occupation")
      }
      else if (this.desid == 9 && (this.designationd == null || this.designationd == undefined)) {
        alert("Please Enter Designation")
      }
      else {
        this.spinner.show();
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          LastName: this.lastname,
          FirstName: this.firstname,
          MiddleName: this.middlename,
          Email: this.email,
          Image: this.userImage,
          ResidentialCity: null,
          ResidentialDistrict: this.district,
          ResidentialState: this.state,
          ResidentialPincode: this.pincode,
          ResidentialLineOne: this.city,
          ResidentialLineTwo: this.street,
          DateOfBirth: this.dateofbirth,
          Designation: this.desid,
          Gender: this.genderid,
          MaritalStatus: this.martid,
          MobileNum: this.Number,
          Occupation: this.occuid,
          PermanentDistrict: this.districtone,
          PermanentState: this.stateone,
          PermanentPincode: this.postalcode,
          PermanentLineOne: this.adressone,
          PermanentLineTwo: this.adresstwo,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          Qualification: this.quaid,
          PlaceOfBirth: this.placeofbirth,
          Race: this.casteid,
          Religion: this.rid,
          TickedId: this.ticketid,
          ReligionOther: this.religiondetail,
          OccupationOther: this.occupatoiondetail,
          Casteother: this.castedetail,
          Qualificationother: this.qualificationdetail,
          Designationother: this.designationd,
          IsAllFileldsFilled: true,
          PermanentSameasResidential: this.PermanentSameasResidential,
          ProductId: 1,
          LoanIdORInsuranceId: 4,
          ApplicationType: "Customer",
          URL: "smallscaleloanform",
          ProsperityId: this.ProposID,
          UserId:this.uid
        }
        this.businessloanservice.SaveBasicDetails(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Personal Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData();
            if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/smallscaleloandetails'])

            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/smallscaleloandetails'])
            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null) {
              this.stepper1.selectedIndex = 5

            }
            else {
              this.GetDraftData();

            }

          } else {
            this.notify = "Something Went Wrong. Try again.!!"
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
  details(stepper: MatStepper) {

    if (this.role == '1008') {
      // this.submitted = true;
      // if (this.DetailsForm.invalid) {
      //   return;
      // }
      if (this.fid == null || this.fid == undefined) {
        alert("Please Select Family Type")
      }
      else if(this.Anualamt==null || this.Anualamt==undefined || this.Anualamt==""){
        alert("Please Enter Annual Amount");

      }
      else if(this.otheramt==null || this.otheramt==undefined || this.otheramt==""){
        alert("Please Enter Income from Other sources");

      }
      else if (this.relationshiptypeid == 9 && (this.relationship == null || this.relationship == "" || this.relationship == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else if (this.numofchild > this.numberofdep) {
        alert("Number of Children to be equal or less than Number of dependents");
      }
      else if (this.relationshiptypeid == 9 && (this.relationship == null || this.relationship == "" || this.relationship == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else if (this.Nomineetype == "major" && (this.nominnename == null || this.nominnename == undefined)) {
        alert("Please Enter Nominee Name")
      }
      else if (this.Nomineetype == "major" && (this.nominnelastname == null || this.nominnelastname == undefined)) {
        alert("Please Enter Nominee Last Name")
      }
      else if (this.Nomineetype == "major" && (this.passbook == null || this.passbook == undefined)) {
        alert("Please Enter Nominee Name on Passbook")
      }
      else if (this.Nomineetype == "major" && (this.Naddress == null || this.Naddress == undefined)) {
        alert("Please Enter Nominee Address Line one")
      }
      else if (this.Nomineetype == "major" && (this.Naddress2 == null || this.Naddress2 == undefined)) {
        alert("Please Enter Nominee Address Line two")
      }
      else if (this.Nomineetype == "major" && (this.Npincode == null || this.Npincode == undefined)) {
        alert("Please Enter Nominee Address PIN/ZIP code")
      }
      else if (this.Nomineetype == "minor" && (this.minorname == null || this.minorname == undefined)) {
        alert("Please Enter Nominee Name")
      }
      else if (this.Nomineetype == "minor" && (this.minorlastname == null || this.minorlastname == undefined)) {
        alert("Please Enter Nominee Last Name")
      }
      else if (this.Nomineetype == "minor" && (this.minoraddress == null || this.minoraddress == undefined)) {
        alert("Please Enter Nominee Address Line one")
      }
      else if (this.Nomineetype == "minor" && (this.minoraddress1 == null || this.minoraddress1 == undefined)) {
        alert("Please Enter Nominee Address Line two")
      }
      else if (this.Nomineetype == "minor" && (this.minorpincode == null || this.minorpincode == undefined)) {
        alert("Please Enter Nominee Address PIN/ZIP code")
      }
      else if (this.guardioanrelationshipwithminorid == 9 && (this.guardioanrelationshipwithminor == null || this.guardioanrelationshipwithminor == "" || this.guardioanrelationshipwithminor == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          FamilyType: this.fid,
          NumberofDependents: this.numberofdep,
          NumberofChildren: this.numofchild,
          AnnualIncomeAmount: this.Anualamt,
          OtherSourceAmount: this.otheramt,
          TotalAmount: this.totalamt,
          NomineeName: this.nominnename,
          //NomineeReationship: this.relationship,
          NomineeNameonPassbook: this.passbook,
          NomineeDOB: this.Ndob,
          NomineeAddress1: this.Naddress,
          NomineeAddress2: this.Naddress2,
          NomineeCountry: this.ncountry,
          NomineeState: this.Nstate,
          NomineeDistrict: this.Ndistrict,
          NomineePincode: this.Npincode,
          MinorNomineeName: this.minorname,
          MinoreNomineeMiddleName: this.minormiddname,
          MinoreNomineeLastName: this.minorlastname,
          MinorNomineeDOB: this.minordob,
          MinorNomineeAddress: this.minoraddress,
          MinorPostalCode: this.minorpincode,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          MinorAddress1: this.minoraddress,
          MinorAddress2: this.minoraddress1,
          NomineeMiddleName: this.nominnemiddlename,
          NomineeLastName: this.nominnelastname,
          NomineeReationship: this.relationship,
          NomineeRealationShipId: this.relationshiptypeid,
          ProsperityId: this.ProposID,

          GuardianName: this.guardianname,
          GuardianReationship: this.guardioanrelationshipwithminor,
          GuardianRealationShipId: this.guardioanrelationshipwithminorid,
          Role: this.role,
          Nomineetype: this.Nomineetype,
          IsAllFileldsFilled: true,
          

        }
        this.spinner.show();
        //this.businessloanservice.SavefamilyDetails(cdata).subscribe((data: any) => {
        const frmData = new FormData();
        frmData.append("AadharFile", this.GuardianSelectedAadharFiles);
        frmData.append("AllData", JSON.stringify(cdata));
        frmData.append("Pancard", this.GuardianSelectedpanFiles);
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_FamilyDetails/PostSaveC_FamilyDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Family Details Saved Successfully!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.spinner.hide();
              // this.GetDraftData();
              if (localStorage.getItem("editloanform") != "false") {
                this.stepper1.selectedIndex = 5
  
              }
  
              else {
                this.GetDraftData();
  
              }
            } else {
              this.notify = "Something Went Wrong. Try again.!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.spinner.hide();
            }
          })
      }
    }
    else {
      // this.submitted = true;
      // if (this.DetailsForm.invalid) {
      //   return;
      // }
      if (this.numofchild > this.numberofdep) {
        alert("Number of Children to be equal or less than Number of dependents");
      }
      else if (this.fid == null || this.fid == undefined) {
        alert("Please Select Family Type")
      }
      else if(this.Anualamt==null || this.Anualamt==undefined || this.Anualamt==""){
        alert("Please Enter Annual Amount");

      }
      else if(this.otheramt==null || this.otheramt==undefined || this.otheramt==""){
        alert("Please Enter Income from Other sources");

      }
      else if (this.relationshiptypeid == 9 && (this.relationship == null || this.relationship == "" || this.relationship == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else if (this.relationshiptypeid == 9 && (this.relationship == null || this.relationship == "" || this.relationship == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else if (this.Nomineetype == "major" && (this.nominnename == null || this.nominnename == undefined)) {
        alert("Please Enter Nominee Name")
      }
      else if (this.Nomineetype == "major" && (this.nominnelastname == null || this.nominnelastname == undefined)) {
        alert("Please Enter Nominee Last Name")
      }
      else if (this.Nomineetype == "major" && (this.passbook == null || this.passbook == undefined)) {
        alert("Please Enter Nominee Name on Passbook")
      }
      else if (this.Nomineetype == "major" && (this.Naddress == null || this.Naddress == undefined)) {
        alert("Please Enter Nominee Address Line one")
      }
      else if (this.Nomineetype == "major" && (this.Naddress2 == null || this.Naddress2 == undefined)) {
        alert("Please Enter Nominee Address Line two")
      }
      else if (this.Nomineetype == "major" && (this.Npincode == null || this.Npincode == undefined)) {
        alert("Please Enter Nominee Address PIN/ZIP code")
      }
      else if (this.Nomineetype == "minor" && (this.minorname == null || this.minorname == undefined)) {
        alert("Please Enter Nominee Name")
      }
      else if (this.Nomineetype == "minor" && (this.minorlastname == null || this.minorlastname == undefined)) {
        alert("Please Enter Nominee Last Name")
      }
      else if (this.Nomineetype == "minor" && (this.minoraddress == null || this.minoraddress == undefined)) {
        alert("Please Enter Nominee Address Line one")
      }
      else if (this.Nomineetype == "minor" && (this.minoraddress1 == null || this.minoraddress1 == undefined)) {
        alert("Please Enter Nominee Address Line two")
      }
      else if (this.Nomineetype == "minor" && (this.minorpincode == null || this.minorpincode == undefined)) {
        alert("Please Enter Nominee Address PIN/ZIP code")
      }
      else if (this.guardioanrelationshipwithminorid == 9 && (this.guardioanrelationshipwithminor == null || this.guardioanrelationshipwithminor == "" || this.guardioanrelationshipwithminor == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          FamilyType: this.fid,
          NumberofDependents: this.numberofdep,
          NumberofChildren: this.numofchild,
          AnnualIncomeAmount: this.Anualamt,
          OtherSourceAmount: this.otheramt,
          TotalAmount: this.totalamt,
          NomineeName: this.nominnename,
          //NomineeReationship: this.relationship,
          NomineeNameonPassbook: this.passbook,
          NomineeDOB: this.Ndob,
          NomineeAddress1: this.Naddress,
          NomineeAddress2: this.Naddress2,
          NomineeCountry: this.ncountry,
          NomineeState: this.Nstate,
          NomineeDistrict: this.Ndistrict,
          NomineePincode: this.Npincode,
          MinorNomineeName: this.minorname,
          MinoreNomineeMiddleName: this.minormiddname,
          MinoreNomineeLastName: this.minorlastname,
          MinorNomineeDOB: this.minordob,
          MinorNomineeAddress: this.minoraddress,
          MinorPostalCode: this.minorpincode,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          MinorAddress1: this.minoraddress,
          MinorAddress2: this.minoraddress1,
          NomineeMiddleName: this.nominnemiddlename,
          NomineeLastName: this.nominnelastname,
          NomineeReationship: this.relationship,
          NomineeRealationShipId: this.relationshiptypeid,

          GuardianName: this.guardianname,
          GuardianReationship: this.guardioanrelationshipwithminor,
          GuardianRealationShipId: this.guardioanrelationshipwithminorid,
          Role: this.role,
          Nomineetype: this.Nomineetype,
          IsAllFileldsFilled: true,
          ProsperityId: this.ProposID,


        }
        this.spinner.show();
        //this.businessloanservice.SavefamilyDetails(data).subscribe((data: any) => {
        const frmData = new FormData();
        frmData.append("AadharFile", this.GuardianSelectedAadharFiles);
        frmData.append("AllData", JSON.stringify(data));
        frmData.append("Pancard", this.GuardianSelectedpanFiles);
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_FamilyDetails/PostSaveC_FamilyDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Family Details Saved Successfully!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.spinner.hide();
              // this.GetDraftData();
              if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/smallscaleloandetails'])
  
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/smallscaleloandetails'])
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 5
  
              }
              else {
                this.GetDraftData();
  
              }
            } else {
              this.notify = "Something Went Wrong. Try again.!!"
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

  onSelectChequefacility(event) {
    if (event.target.checked) {
      this.chequefacility = true;
    }
    else {
      this.chequefacility = false;

    }
  }
  onSelectLoanfacility(event) {
    if (event.target.checked) {
      this.loanfacility = true;
    }
    else {
      this.loanfacility = false;

    }
  }
  onSelectIsConfirm(event) {
    if (event.target.checked) {
      this.isconfirm = true;
    }
    else {
      this.isconfirm = false;

    }
  }

  onChangeAadhar(event: any) {
    var fileslist1 = "";
    this.files1 = [].slice.call(event.target.files);
    console.log(this.files1);
    fileslist1 = this.files1[0];
    this.SelectedAadharFiles = fileslist1;
  }
  onChangeVoterId(event: any) {
    var fileslist2 = "";
    this.files2 = [].slice.call(event.target.files);
    fileslist2 = this.files2[0];
    this.SelectedVoterIdFiles = fileslist2;
  }
  onChangePassport(event: any) {
    var fileslist3 = "";
    this.files3 = [].slice.call(event.target.files);
    fileslist3 = this.files3[0];
    this.SelectedPassportFiles = fileslist3;
  }
  onChangeGSTCert(event: any) {
    var fileslist4 = "";
    this.files4 = [].slice.call(event.target.files);
    fileslist4 = this.files4[0];
    this.SelectedGSTCertFiles = fileslist4;
  }
  onChangeITReturns(event: any) {
    var fileslist5 = "";
    this.files5 = [].slice.call(event.target.files);
    fileslist5 = this.files5[0];
    this.SelectedITReturnsFiles = fileslist5;
  }
  onChangeBankStatements(event: any) {
    var fileslist6 = "";
    this.files6 = [].slice.call(event.target.files);
    fileslist6 = this.files6[0];
    this.SelectedBankStatementsFiles = fileslist6;
  }
  onSelectbank(data: any) {
    this.selectedbanktype = data
  }

  onSelectChequeType(data: any) {
    this.selectedchequetypeid = data
    if (this.selectedchequetypeid == "1") {
      this.selectedchequetype = "Yes";
    }
    else if (this.selectedchequetypeid == "2") {
      this.selectedchequetype = "No";
    }
  }

  bankIn(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;
      if (this.BankDetailsForm.invalid) {
        return;
      }
      for (let index = 0; index < this.bankdocs.length; index++) {
        if (this.bankdocs[index].documentName == "Aadhar File") {
          this.Aadharexist = true;
        }
        if (this.bankdocs[index].documentName == "Passport File") {
          this.Passportexist = true;
        }
        if (this.bankdocs[index].documentName == "GST Certificate") {
          this.GSTexist = true;
        }
        if (this.bankdocs[index].documentName == "IT Returns File") {
          this.ITexist = true;
        }
        if (this.bankdocs[index].documentName == "Bank Statements") {
          this.BankStatexist = true;
        }
        if (this.bankdocs[index].documentName == "Voter Id") {
          this.VoterIDexist = true;
        }
      }
   
      if (this.SelectedAadharFiles == undefined && this.Aadharexist == false) {
        alert("Please Choose Aadhar File ")
      }
   
      else if (this.SelectedVoterIdFiles == undefined && this.VoterIDexist == false) {
        alert("Please Choose VoterId File  ")
      }
      // else if (this.SelectedPassportFiles == undefined) {
      //   alert("Please Choose Passport File ")
      // }
      // else if (this.SelectedITReturnsFiles == undefined) {
      //   alert("Please Choose IT Returns File  ")
      // }
      // else if (this.SelectedBankStatementsFiles == undefined) {
      //   alert("Please Choose Bank Statements File  ")
      // }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          BankDetails: this.fieldArray,
          RationCardNum: this.rationcardnum,
          AadharNum: this.aadharnum,
          VoterId: this.voternum,
          ServiceTaxNum: this.servicetax,
          PassportNum: this.passportnum,
          LifeInsuranceValue: this.lifeinsurance,
          IsConfirm: this.isconfirm,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          ProsperityId: this.ProposID,
          Role:this.role,
          IsAllFileldsFilled: true,

        }
        const frmData = new FormData();
        this.spinner.show();

        frmData.append("VoterIdFile", this.SelectedVoterIdFiles);

        frmData.append("BankIdeData", JSON.stringify(cdata));
        frmData.append("Aadhar", this.SelectedAadharFiles);
        frmData.append("Passport", this.SelectedPassportFiles);
        frmData.append("GSTCert", this.SelectedGSTCertFiles);
        frmData.append("ITReturns", this.SelectedITReturnsFiles);
        frmData.append("BankStatements", this.SelectedBankStatementsFiles);
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_BankandIdentityDetails/PostBankIdentityDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Details Saved Successfully!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 1000);
              this.spinner.hide();
              // this.GetDraftData();
              if (localStorage.getItem("editloanform") != "false") {
                this.stepper1.selectedIndex = 5
  
              }
  
              else {
                this.GetDraftData();
  
              }
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
    else {
      this.submitted = true;
      if (this.BankDetailsForm.invalid) {
        return;
      }

      for (let index = 0; index < this.bankdocs.length; index++) {
        if (this.bankdocs[index].documentName == "Aadhar File") {
          this.Aadharexist = true;
        }
        if (this.bankdocs[index].documentName == "Passport File") {
          this.Passportexist = true;
        }
        if (this.bankdocs[index].documentName == "GST Certificate") {
          this.GSTexist = true;
        }
        if (this.bankdocs[index].documentName == "IT Returns File") {
          this.ITexist = true;
        }
        if (this.bankdocs[index].documentName == "Bank Statements") {
          this.BankStatexist = true;
        }
        if (this.bankdocs[index].documentName == "Voter Id") {
          this.VoterIDexist = true;
        }
      }
   
      if (this.SelectedAadharFiles == undefined && this.Aadharexist == false) {
        alert("Please Choose Aadhar File ")
      }
   
      else if (this.SelectedVoterIdFiles == undefined && this.VoterIDexist == false) {
        alert("Please Choose VoterId File  ")
      }
      // else if (this.SelectedGSTCertFiles == undefined) {
      //   alert("Please Choose GST CertFile ")
      // }
      // else if (this.SelectedPassportFiles == undefined) {
      //   alert("Please Choose Passport File ")
      // }
      // else if (this.SelectedITReturnsFiles == undefined) {
      //   alert("Please Choose IT Returns File  ")
      // }
      // else if (this.SelectedBankStatementsFiles == undefined) {
      //   alert("Please Choose Bank Statements File  ")
      // }
   
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          BankDetails: this.fieldArray,
          RationCardNum: this.rationcardnum,
          AadharNum: this.aadharnum,
          VoterId: this.voternum,
          PANNum: this.pannumber,
          ServiceTaxNum: this.servicetax,
          PassportNum: this.passportnum,
          LifeInsuranceValue: this.lifeinsurance,
          IsConfirm: this.IsConfirm,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          IsAllFileldsFilled: true,
          ProsperityId: this.ProposID,

        }
        const frmData = new FormData();
        this.spinner.show();

        frmData.append("BankIdeData", JSON.stringify(data));
        frmData.append("Aadhar", this.SelectedAadharFiles);
        frmData.append("Passport", this.SelectedPassportFiles);
        frmData.append("GSTCert", this.SelectedGSTCertFiles);
        frmData.append("ITReturns", this.SelectedITReturnsFiles);
        frmData.append("BankStatements", this.SelectedBankStatementsFiles);
        frmData.append("VoterIdFile", this.SelectedVoterIdFiles);

        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_BankandIdentityDetails/PostBankIdentityDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Details Saved Successfully!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 1000);
              this.spinner.hide();
              // this.GetDraftData();
              if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/smallscaleloandetails'])
  
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/smallscaleloandetails'])
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 5
  
              }
              else {
                this.GetDraftData();
  
              }
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



  fieldArrayDeductions: Array<any> = [];
  newdedctAttribute: any = {};
  public fieldArray: Array<any> = [];
  public fieldArrayFA: Array<any> = [];
  public fieldArrayMove: Array<any> = [];
  public newAttribute: any = { code: "", };
  public carAttribute: any = { code: "", };
  addnewrow() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  removerow(aa) {
    for (var i = 0; i < this.fieldArray.length; i++) {
      if (this.fieldArray[i].description == aa.description) {
        var index = this.fieldArray.indexOf(aa);
        this.fieldArray.splice(index, 1);
      }
      else { }
    }
  }

  addnewdedctrow() {
    this.fieldArrayDeductions.push(this.newdedctAttribute);
    this.newdedctAttribute = {};
  }

  removededctrow(aa) {
    for (var i = 0; i < this.fieldArrayDeductions.length; i++) {
      if (this.fieldArrayDeductions[i].itemdescription == aa.itemdescription) {
        var index = this.fieldArrayDeductions.indexOf(aa);
        this.fieldArrayDeductions.splice(index, 1);
      }
      else { }
    }
  }


  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }

  addFieldcarValue() {
    this.carAttribute.movableAssetId = this.caid;
    this.fieldArrayMove.push(this.carAttribute)
    this.carAttribute = {};
  }
  addFieldValueFA() {
    this.newAttribute.fixedAssetId = this.hid;
    this.fieldArrayFA.push(this.newAttribute)
    this.newAttribute = {};
  }
  // addFieldValue() {
  //   this.fieldArray.push(this.newAttribute)
  //   this.newAttribute = {};
  // }

  deleteFieldcarValue(index) {
    this.fieldArrayMove.splice(index, 1);
  }
  // deleteFieldValue(index) {
  //   this.fieldArray.splice(index, 1);
  // }
  GetFixedAssetTotal(guidence, measurement) {
    this.newAttribute.total = (+guidence) * (+measurement)
  }
  GetMovableAssetTotal(qty, prevalue) {
    this.carAttribute.cartotal = (+qty) * (+prevalue)
  }
  homeIn(stepper: MatStepper) {
    if (this.role == '1008') {
     
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          // FixedAsset: this.hid,
          // Location: this.placeallocation,
          // Measurment: this.measurement,
          // GuidanceValue: this.giidancevalue,
          // PresentValueofFA: this.presentvalue,
          // TotalAmount: this.totalamt,
          // MovableAsset: this.caid,
          // Model: this.model,
          // DateofPurchase: this.dateofpurchase,
          // Quantity: this.quantity,
          // PresentValue: this.prevalues,
          // TotalVMAAmt: this.cartotal,     
          FixedAssets: this.fieldArrayFA,
          MovableAssets: this.fieldArrayMove,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TicketId: this.ticketid,
          ProsperityId: this.ProposID,
          IsAllFileldsFilled: true,
          Role: this.role,

        }
        this.spinner.show();
        this.businessloanservice.SaveHomeDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Home Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData();
            if (localStorage.getItem("editloanform") != "false") {
              this.stepper1.selectedIndex = 5

            }

            else {
              this.GetDraftData();

            }
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
      
    }
    else {
    
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          // FixedAsset: this.hid,
          // Location: this.placeallocation,
          // Measurment: this.measurement,
          // GuidanceValue: this.giidancevalue,
          // PresentValueofFA: this.presentvalue,
          // TotalAmount: this.totalamt,
          // MovableAsset: this.caid,
          // Model: this.model,
          // DateofPurchase: this.dateofpurchase,
          // Quantity: this.quantity,
          // PresentValue: this.prevalues,
          // TotalVMAAmt: this.cartotal,
          FixedAssets: this.fieldArrayFA,
          MovableAssets: this.fieldArrayMove,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TicketId: this.ticketid,
          IsAllFileldsFilled: true,
          Role: this.role,
          ProsperityId: this.ProposID,

        }
        this.spinner.show();
        this.businessloanservice.SaveHomeDetails(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Home Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData();

            if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/smallscaleloandetails'])

            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/smallscaleloandetails'])
            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null) {
              this.stepper1.selectedIndex = 5

            }
            else {
              this.GetDraftData();

            }
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
      
    }

  }

  smallscaleIn(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;
      if (this.smallscaleloanForm.invalid) {
        return;
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          UserId: this.uid,
          Role: this.role,
          facilities: this.facilities,
          finance: this.finance,
          Concern: this.Concern,
          Business: this.Business,
          register: this.register,
          Authority: this.Authority,
          activity: this.activity,
          establishment: this.establishment,
          maintained: this.maintained,
          belongs: this.belongs,
          purchased: this.purchased,
          Furnish: this.Furnish,
          competent: this.competent,
          related: this.related,
          associate: this.associate,
          present: this.present,
          Credit: this.Credit,
          Type: this.Type,
          amtadv: this.amtadv,
          balance: this.balance,
          managed: this.managed,
          Reasons: this.Reasons,
          owned: this.owned,
          Worth: this.Worth,
          additional: this.additional,
          Primary: this.Primary,
          technically: this.technically,
          Adults: this.Adults,
          children: this.children,
          sstotal: this.sstotal,
          member: this.member,
          obligation: this.obligation,
          ssname: this.ssname,
          ssage: this.ssage,
          residentialadd: this.residentialadd,
          Scaleloan: this.Scaleloan,
          Consumer: this.Consumer,
          Relationship: this.Relationship,
          vatno: this.vatno,
          tinno: this.tinno,
          proprietary: this.proprietary,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          ProsperityId: this.ProposID,
          SendCopytoSP: this.SendCopytoSP,
          IsAllFileldsFilled: true,
          ProductId: 1,
          LoanIdORInsuranceId: 4,
          ApplicationType: "Customer",
          URL: "smallscaleloanform",
          
        }
        this.spinner.show();

        this.businessloanservice.SaveSmallScaleLoanDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Small Scale Loan Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData();
            if (localStorage.getItem("editloanform") != "false") {
              this.stepper1.selectedIndex = 5

            }

            else {
              this.GetDraftData();

            }
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
      }
    }
    else {
      this.submitted = true;
      if (this.smallscaleloanForm.invalid) {
        return;
      }
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        facilities: this.facilities,
        finance: this.finance,
        Concern: this.Concern,
        Business: this.Business,
        register: this.register,
        Authority: this.Authority,
        activity: this.activity,
        establishment: this.establishment,
        maintained: this.maintained,
        belongs: this.belongs,
        purchased: this.purchased,
        Furnish: this.Furnish,
        competent: this.competent,
        related: this.related,
        associate: this.associate,
        present: this.present,
        Credit: this.Credit,
        Type: this.Type,
        amtadv: this.amtadv,
        balance: this.balance,
        managed: this.managed,
        Reasons: this.Reasons,
        owned: this.owned,
        Worth: this.Worth,
        additional: this.additional,
        Primary: this.Primary,
        technically: this.technically,
        Adults: this.Adults,
        children: this.children,
        sstotal: this.sstotal,
        member: this.member,
        obligation: this.obligation,
        ssname: this.ssname,
        ssage: this.ssage,
        residentialadd: this.residentialadd,
        Scaleloan: this.Scaleloan,
        Consumer: this.Consumer,
        Relationship: this.Relationship,
        vatno: this.vatno,
        tinno: this.tinno,
        proprietary: this.proprietary,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: true,
        ProductId: 1,
        LoanIdORInsuranceId: 4,
        ApplicationType: "Customer",
        URL: "smallscaleloanform",
        ProsperityId: this.ProposID,


      }
      this.spinner.show();

      this.businessloanservice.SaveSmallScaleLoanDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Small Scale Loan Details Saved Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          // this.GetDraftData();
          
     if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
      this.route.navigate(['/smallscaleloandetails'])

    }
    else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
      this.route.navigate(['/smallscaleloandetails'])
    }
    else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null) {
      this.stepper1.selectedIndex = 5

    }
    else {
      this.GetDraftData();

    }
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
        }
      })
    }
  }
  SavesmallscaleDraft(stepper: MatStepper) {
    if (this.role == '1008') {
     
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          UserId: this.uid,
          Role: this.role,
          facilities: this.facilities,
          finance: this.finance,
          Concern: this.Concern,
          Business: this.Business,
          register: this.register,
          Authority: this.Authority,
          activity: this.activity,
          establishment: this.establishment,
          maintained: this.maintained,
          belongs: this.belongs,
          purchased: this.purchased,
          Furnish: this.Furnish,
          competent: this.competent,
          related: this.related,
          associate: this.associate,
          present: this.present,
          Credit: this.Credit,
          Type: this.Type,
          amtadv: this.amtadv,
          balance: this.balance,
          managed: this.managed,
          Reasons: this.Reasons,
          owned: this.owned,
          Worth: this.Worth,
          additional: this.additional,
          Primary: this.Primary,
          technically: this.technically,
          Adults: this.Adults,
          children: this.children,
          sstotal: this.sstotal,
          member: this.member,
          obligation: this.obligation,
          ssname: this.ssname,
          ssage: this.ssage,
          residentialadd: this.residentialadd,
          Scaleloan: this.Scaleloan,
          Consumer: this.Consumer,
          Relationship: this.Relationship,
          vatno: this.vatno,
          tinno: this.tinno,
          proprietary: this.proprietary,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          ProsperityId: this.ProposID,
          SendCopytoSP: this.SendCopytoSP,
          IsAllFileldsFilled: false,
          ProductId: 1,
          LoanIdORInsuranceId: 4,
          ApplicationType: "Customer",
          URL: "smallscaleloanform",
          
        }   
           this.spinner.show();

        this.businessloanservice.SaveSmallScaleLoanDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Small Scale Loan Details Saved Successfully!!"
            alert("Small Scale Loan Details Saved Successfully!!")
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.GetDraftData();

          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
      
    }
    else {
    
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        facilities: this.facilities,
        finance: this.finance,
        Concern: this.Concern,
        Business: this.Business,
        register: this.register,
        Authority: this.Authority,
        activity: this.activity,
        establishment: this.establishment,
        maintained: this.maintained,
        belongs: this.belongs,
        purchased: this.purchased,
        Furnish: this.Furnish,
        competent: this.competent,
        related: this.related,
        associate: this.associate,
        present: this.present,
        Credit: this.Credit,
        Type: this.Type,
        amtadv: this.amtadv,
        balance: this.balance,
        managed: this.managed,
        Reasons: this.Reasons,
        owned: this.owned,
        Worth: this.Worth,
        additional: this.additional,
        Primary: this.Primary,
        technically: this.technically,
        Adults: this.Adults,
        children: this.children,
        sstotal: this.sstotal,
        member: this.member,
        obligation: this.obligation,
        ssname: this.ssname,
        ssage: this.ssage,
        residentialadd: this.residentialadd,
        Scaleloan: this.Scaleloan,
        Consumer: this.Consumer,
        Relationship: this.Relationship,
        vatno: this.vatno,
        tinno: this.tinno,
        proprietary: this.proprietary,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: false,
        ProductId: 1,
        LoanIdORInsuranceId: 4,
        ApplicationType: "Customer",
        URL: "smallscaleloanform",
        ProsperityId: this.ProposID,


      }
      this.spinner.show();
      this.businessloanservice.SaveSmallScaleLoanDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Small Scale Loan Details Saved Successfully!!"
          alert("Small Scale Loan Details Saved Successfully!!")
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.GetDraftData();

        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
        }
      })
    }
  }
  //  Upload Certificate Code by Chaithanya

  async Certificate() {
    this.spinner.show()
    await this.businessloanservice.getCertificates().subscribe((response: any) => {
      this.CertificateList = response;
      this.spinner.hide()

    });
  }

  onChangeCertificates(event: any, data: any) {
    if (data.certificateName == "Birth Certificate") {
      var bfileslist = "";
      this.bfiles = [].slice.call(event.target.files);
      console.log(this.bfiles);
      bfileslist = this.bfiles[0];
      this.BirthCertificateFiles = bfileslist;
    }
    else if (data.certificateName == "Caste Certificate") {
      var castefileslist = "";
      this.castefiles = [].slice.call(event.target.files);
      console.log(this.castefiles);
      castefileslist = this.castefiles[0];
      this.CasteCertificateFiles = castefileslist;
    }
    else if (data.certificateName == "Medical Certificate") {
      var medicalfileslist = "";
      this.medicalfiles = [].slice.call(event.target.files);
      console.log(this.medicalfiles);
      medicalfileslist = this.medicalfiles[0];
      this.MedicalCertificateFiles = medicalfileslist;
    }
    else if (data.certificateName == "SSC Certificate") {
      var sscfileslist = "";
      this.sscfiles = [].slice.call(event.target.files);
      console.log(this.sscfiles);
      sscfileslist = this.sscfiles[0];
      this.SSCCertificateFiles = sscfileslist;
    }
    else if (data.certificateName == "Degree Certificate") {
      var degreefileslist = "";
      this.degreefiles = [].slice.call(event.target.files);
      console.log(this.degreefiles);
      degreefileslist = this.degreefiles[0];
      this.DegreeCertificateFiles = degreefileslist;
    }
    else if (data.certificateName == "PG Certificate") {
      var pgfileslist = "";
      this.pgfiles = [].slice.call(event.target.files);
      console.log(this.pgfiles);
      pgfileslist = this.pgfiles[0];
      this.PGCertificateFiles = pgfileslist;
    }
  }



  // addFieldValue() {
  //   this.newAttribute.banktypeid = this.selectedbanktype;
  //   this.selectedbanktype = null
  //   this.fieldArray.push(this.newAttribute)
  //   this.newAttribute = {};
  // }

  // deleteFieldValue(index) {
  //   this.fieldArrayFA.splice(index, 1);
  // }

  // deleteFieldValueFA(index) {
  //   this.fieldArrayFA.splice(index, 1);
  // }

  public documentArray: Array<any> = [];
  public newDocAttribute: any = { code: "", };

  uploadCertificatesDraft(stepper: MatStepper) {

    if (this.role == '1008') {

      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var cdata = {
        CustomerId: this.customerid,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TicketId: this.ticketid,
        IsAllFileldsFilled: false,
        otherdocdetails: this.documentArray,
        ProsperityId: this.ProposID,
        Role:this.role      }
      const frmData = new FormData();
      this.spinner.show();
      for (var i = 0; i < this.customerotherdocs.length; i++) {
        frmData.append("CustomerOtherDocs", this.customerotherdocs[i]);
      }
      frmData.append("UploadData", JSON.stringify(cdata));
      frmData.append("BirthCertificate", this.BirthCertificateFiles);
      frmData.append("CasteCertificate", this.CasteCertificateFiles);
      frmData.append("MedicalCertificate", this.MedicalCertificateFiles);
      frmData.append("SSCCertificate", this.SSCCertificateFiles);
      frmData.append("DegreeCertificate", this.DegreeCertificateFiles);
      frmData.append("PGCertificate", this.PGCertificateFiles);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_CustomerCertificatesUpload/PostUploadCertificates/', frmData).subscribe(
        data => {
          if (data == "success") {
            alert("Draft Certificates Uploaded Successfully")
            this.spinner.hide();
            this.documentArray = [];
            this.CertificateDisplay = [];
            this.GetDraftData();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.GetDraftData();

          }
        });
    }
    else {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TicketId: this.ticketid,
        IsAllFileldsFilled: false,
        otherdocdetails: this.documentArray,
        ProsperityId: this.ProposID,
      }
      const frmData = new FormData();
      this.spinner.show();
      for (var i = 0; i < this.customerotherdocs.length; i++) {
        frmData.append("CustomerOtherDocs", this.customerotherdocs[i]);
      }
      frmData.append("UploadData", JSON.stringify(data));
      frmData.append("BirthCertificate", this.BirthCertificateFiles);
      frmData.append("CasteCertificate", this.CasteCertificateFiles);
      frmData.append("MedicalCertificate", this.MedicalCertificateFiles);
      frmData.append("SSCCertificate", this.SSCCertificateFiles);
      frmData.append("DegreeCertificate", this.DegreeCertificateFiles);
      frmData.append("PGCertificate", this.PGCertificateFiles);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_CustomerCertificatesUpload/PostUploadCertificates/', frmData).subscribe(
        data => {
          if (data == "success") {
            alert("Draft Certificates Uploaded Successfully")
            this.spinner.hide();
            this.documentArray = [];
            this.CertificateDisplay = [];
            this.GetDraftData();

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
  uploadCertificates(stepper: MatStepper) {

    if (this.role == '1008') {

      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var cdata = {
        CustomerId: this.customerid,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TicketId: this.ticketid,
        IsAllFileldsFilled: true,
        otherdocdetails: this.documentArray,
        ProsperityId: this.ProposID,
        Role:this.role

      }
      const frmData = new FormData();
      this.spinner.show();
      for (var i = 0; i < this.customerotherdocs.length; i++) {
        frmData.append("CustomerOtherDocs", this.customerotherdocs[i]);
      }
      frmData.append("UploadData", JSON.stringify(cdata));
      frmData.append("BirthCertificate", this.BirthCertificateFiles);
      frmData.append("CasteCertificate", this.CasteCertificateFiles);
      frmData.append("MedicalCertificate", this.MedicalCertificateFiles);
      frmData.append("SSCCertificate", this.SSCCertificateFiles);
      frmData.append("DegreeCertificate", this.DegreeCertificateFiles);
      frmData.append("PGCertificate", this.PGCertificateFiles);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_CustomerCertificatesUpload/PostUploadCertificates/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.showsubmitbtn = true;
            alert("Certificates Uploaded Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
            this.spinner.hide();
            // this.route.navigate(['/badashboard']);
            if (this.role == '1008') {
              if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.stepper1.selectedIndex = 5

              }
            }
            if (localStorage.getItem("editloanform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
              this.route.navigate(['/smallscaleloandetails'])

            }
            else if(localStorage.getItem("editloanform") != "false" && this.ticketid!=null){
              this.stepper1.selectedIndex = 5

            }
            else{
              this.GetDraftData();

            }
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
    else {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TicketId: this.ticketid,
        IsAllFileldsFilled: true,
        otherdocdetails: this.documentArray,
        Role:this.role,
        ProsperityId: this.ProposID,

      }
      const frmData = new FormData();
      this.spinner.show();
      for (var i = 0; i < this.customerotherdocs.length; i++) {
        frmData.append("CustomerOtherDocs", this.customerotherdocs[i]);
      }
      frmData.append("UploadData", JSON.stringify(data));
      frmData.append("BirthCertificate", this.BirthCertificateFiles);
      frmData.append("CasteCertificate", this.CasteCertificateFiles);
      frmData.append("MedicalCertificate", this.MedicalCertificateFiles);
      frmData.append("SSCCertificate", this.SSCCertificateFiles);
      frmData.append("DegreeCertificate", this.DegreeCertificateFiles);
      frmData.append("PGCertificate", this.PGCertificateFiles);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_CustomerCertificatesUpload/PostUploadCertificates/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.showsubmitbtn = true;
            alert("Certificates Uploaded Successfully")
            this.spinner.hide();
            // this.route.navigate(['/customerdashboard']);
            if (localStorage.getItem("editloanform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
              this.route.navigate(['/smallscaleloandetails'])
            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/smallscaleloandetails'])
            }
            else if(localStorage.getItem("editloanform") != "false" && this.ticketid!=null){
              this.stepper1.selectedIndex = 5

            }
            else{
              this.GetDraftData();

            }
          //stepper.next();
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
  addFieldValue() {
    this.newAttribute.banktypeid = this.selectedbanktype;
    this.newAttribute.selectedchequetypeid = this.selectedchequetypeid;

    var ifscvalid = this.ifscrex.test(this.newAttribute.ifscecode);
    if (this.newAttribute.banktypeid == null || this.newAttribute.banktypeid == "") {
      alert("Please Select Bank Account Type");
    }
    else if (this.newAttribute.bankname == null || this.newAttribute.bankname == "") {
      alert("Enter Bank Name");
    }
    else if (this.newAttribute.branch == null || this.newAttribute.branch == "") {
      alert("Enter Branch");
    }
    else if (this.newAttribute.ifscecode == null || this.newAttribute.ifscecode == "") {
      alert("Enter IFSC Code");
    }
    else if (!ifscvalid) {
      alert("Enter Valid IFSC Code");
    }
    else if (this.newAttribute.selectedchequetypeid == null || this.newAttribute.selectedchequetypeid == "") {
      alert("Enter Cheque Facility Type");
    }

    else {
      this.selectedbanktype = null;
      this.selectedchequetypeid = null;
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    }
    // this.newAttribute.banktypeid = this.selectedbanktype;
    // this.selectedbanktype = null
    // this.fieldArray.push(this.newAttribute)
    // this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  // deleteFieldValue(index) {
  //   this.fieldArrayFA.splice(index, 1);
  // }

  deleteFieldValueFA(index) {
    this.fieldArrayFA.splice(index, 1);
  }
  deleteFieldValueDocument(index) {
    this.documentArray.splice(index, 1);
  }
  addDocFieldValue() {
    if (this.newDocAttribute.otherdocumentname == "" || this.newDocAttribute.otherdocumentname == undefined) {
      alert("Please Enter Document Name")
    }
    else if (this.otherdocactualname === "" || this.otherdocactualname === undefined) {
      alert("please Select Document")
    }
    else {
      this.newDocAttribute.otherdocactualname = this.otherdocactualname
      this.documentArray.push(this.newDocAttribute)
      this.newDocAttribute = {};
      this.otherdocactualname = "";
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
  ViewDoc(file) {
    localStorage.removeItem('Pdffile');
    localStorage.removeItem('DocType');
    localStorage.removeItem('UploadedDate');
    localStorage.removeItem('FileType');
    localStorage.removeItem('FileName');
    localStorage.removeItem('File');

    console.log(file);
    this.spinner.show();
    localStorage.setItem('File', file.certificate);
    localStorage.setItem('FileName', file.fileName);
    localStorage.setItem('Pdffile', file.pdfFile);
    localStorage.setItem('DocType', file.documentType);
    localStorage.setItem('UploadedDate', file.date);


    this.route.navigate(['fileview/'])
  }
  ageCalculator() {
    if (this.Nagedob) {
      const convertAge = new Date(this.Nagedob);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      var showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log(showAge);
      if (showAge > 18) {
        this.Ndob = this.Nagedob;
        this.Nomineetype = "major";
      }
      else {
        this.minordob = this.Nagedob;
        this.Nomineetype = "minor";
      }
    }
  }

  onSelectMinorRelationType(data: any) {
    this.guardioanrelationshipwithminorid = data;
    if (data == 9) {
      this.minorrelationshipforguardian = true;
    }
  }

  onChangeguardianproofofaddress(event: any) {
    var fileslist1 = "";
    this.files1 = [].slice.call(event.target.files);
    console.log(this.files1);
    fileslist1 = this.files1[0];
    this.GuardianSelectedAadharFiles = fileslist1;
  }
  onChangeGuardianpancard(event: any) {
    var fileslist2 = "";
    this.files2 = [].slice.call(event.target.files);
    fileslist2 = this.files2[0];
    this.GuardianSelectedpanFiles = fileslist2;
  }
  SaveBasicDraft(stepper: MatStepper) {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    var data = {
      CustomerId: this.customerid,
      LastName: this.lastname,
      FirstName: this.firstname,
      MiddleName: this.middlename,
      Email: this.email,
      Image: this.userImage,
      ResidentialCity: null,
      ResidentialDistrict: this.district,
      ResidentialCountry: this.country,
      ResidentialState: this.state,
      ResidentialPincode: this.pincode,
      ResidentialLineOne: this.city,
      ResidentialLineTwo: this.street,
      DateOfBirth: this.dateofbirth,
      Designation: this.desid,
      Gender: this.genderid,
      MaritalStatus: this.martid,
      MobileNum: this.Number,
      Occupation: this.occuid,
      PermanentDistrict: this.districtone,
      PermanentState: this.stateone,
      PermanentCountry: this.countryone,
      PermanentPincode: this.postalcode,
      PermanentLineOne: this.adressone,
      PermanentLineTwo: this.adresstwo,
      CreatedBy: this.username,
      CreatedOn: latest_date,
      Qualification: this.quaid,
      PlaceOfBirth: this.placeofbirth,
      ReligionOther:this.religiondetail,
      OccupationOther:this.occupatoiondetail,
      Casteother:this.castedetail,
      Qualificationother:this.qualificationdetail,
      Designationother:this.designationd,
      Race: this.casteid,
      Religion: this.rid,
      TickedId: this.ticketid,
      IsAllFileldsFilled: false,
      PermanentSameasResidential: this.PermanentSameasResidential,
      ProductId: 1,
      LoanIdORInsuranceId: 4,
      ApplicationType: "Customer",
      URL: "smallscaleloanform",
      ProsperityId: this.ProposID,
      Role:this.role,
      UserId:this.uid
    }
    this.spinner.show();
    this.businessloanservice.SaveBasicDetails(data).subscribe((data: any) => {
      if (data == "success") {
        this.notify = "Personal Details Saved as Draft!!"
        setTimeout(() => this.dismissalert = true, 100);
        setTimeout(function () {
          this.dismissalert = false;
        }.bind(this), 3000);
        this.spinner.hide();
        this.GetDraftData()
      } else {
        this.notify = "Something Went Wrong. Try again.!!"
        setTimeout(() => this.dismissalert = true, 100);
        setTimeout(function () {
          this.dismissalert = false;
        }.bind(this), 3000);
        this.spinner.hide();
        this.GetDraftData()

      }
    })


  }
  toCamelCase(key, value) {
    if (value && typeof value === 'object'){
      for (var k in value) {
        if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
          value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
          delete value[k];
        }
      }
    }
    return value;
  }
  GetDraftData() {
    if (this.ticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.ticketid

    }
    this.spinner.show();
    this.businessloanservice.GetSmallScaleDraftdata(sendid).subscribe((data1: any) => {
      let data = JSON.parse(data1,this.toCamelCase);

      this.spinner.hide();
      this.customerid=data.userId

      if (data.count == 0 && data.basicDetails != null) {

        this.firstname = data.basicDetails.firstName;
        this.middlename = data.basicDetails.middleName;
        this.lastname = data.basicDetails.lastName;
        this.placeofbirth = data.basicDetails.placeOfBirth;
        this.genderid = data.basicDetails.gender;
        this.martid = data.basicDetails.maritalStatus;
        this.Number = data.basicDetails.mobileNum;
        this.dateofbirth = this.datepipe.transform(data.basicDetails.dateOfBirth, 'yyyy-MM-dd');
        this.rid = data.basicDetails.religion;
        this.casteid = data.basicDetails.race;
        this.quaid = data.basicDetails.qualification;
        this.occuid = data.basicDetails.occupation;
        this.email = data.basicDetails.email;
        this.desid = data.basicDetails.designation;
        this.street = data.basicDetails.residentialLineTwo;
        this.city = data.basicDetails.residentialLineOne;
        this.district = data.basicDetails.residentialDistrict;
        this.pincode = data.basicDetails.residentialPincode;
        this.state = data.basicDetails.residentialState;
        this.country = data.basicDetails.residentialCountry;
        this.stateone = data.basicDetails.permanentState;
        this.countryone = data.basicDetails.permanentCountry;
        this.postalcode = data.basicDetails.permanentPincode;
        this.adressone = data.basicDetails.permanentLineOne;
        this.adresstwo = data.basicDetails.permanentLineTwo;
        this.districtone = data.basicDetails.permanentDistrict;
        this.PermanentSameasResidential = data.basicDetails.permanentSameasResidential;

        if(data.basicDetails.casteother!=null){
          this.othercastedetails=true;
          this.castedetail=data.basicDetails.casteother
        }
        if(data.basicDetails.religionOther!=null){
          this.othereligiondetails=true;
          this.religiondetail=data.basicDetails.religionOther
        }
        if(data.basicDetails.qualificationother!=null){
          this.otherequalification=true;
          this.qualificationdetail=data.basicDetails.qualificationother
        }
        if(data.basicDetails.occupationOther!=null){
          this.othersoccupation=true;
          this.occupatoiondetail=data.basicDetails.occupationOther
        }
        if(data.basicDetails.designationother!=null){
          this.otherdesignation=true;
          this.designationd=data.basicDetails.designationother
        }
      }
      else if (data.count == 1 && data.familyDetails == null) {
        this.stepper1.selectedIndex = 1;
      }
      else if (data.count == 1 && data.familyDetails != null) {
        this.numberofdep = data.familyDetails.numberofDependents
        this.numofchild = data.familyDetails.numberofChildren,
          this.Anualamt = data.familyDetails.annualIncomeAmount,
          this.otheramt = data.familyDetails.otherSourceAmount,
          this.totalamt = data.familyDetails.totalAmount,
          this.nominnename = data.familyDetails.nomineeName,
          this.relationship = data.familyDetails.nomineeReationship,
          this.passbook = data.familyDetails.nomineeNameonPassbook,
          this.fid = data.familyDetails.familyType,
          this.ncountry = data.familyDetails.nomineeCountry,
          this.Nstate = data.familyDetails.nomineeState,
          this.Ndistrict = data.familyDetails.nomineeDistrict,
          this.minorname = data.familyDetails.minorNomineeName,
          this.minormiddname = data.familyDetails.minoreNomineeMiddleName,
          this.minorlastname = data.familyDetails.minoreNomineeLastName,
          this.minoraddress = data.familyDetails.minorAddress1,
          this.minordob = data.familyDetails.minorNomineeDOB,
          this.Npincode = data.familyDetails.nomineePincode,
          this.Naddress = data.familyDetails.nomineeAddress1,
          this.Naddress2 = data.familyDetails.nomineeAddress2,
          this.minorpincode = data.familyDetails.minorPostalCode,
          this.minoraddress1 = data.familyDetails.minorAddress2,
          this.minorcountry = data.familyDetails.minorCountry,
          this.minorstate = data.familyDetails.minorState,
          this.minordistrict = data.familyDetails.minorDistrict
        this.familydocs = data.familyDetails.familyCertList
        this.nominnemiddlename = data.familyDetails.nomineeMiddleName
        this.nominnelastname = data.familyDetails.nomineeLastName
        this.relationshiptypeid = data.familyDetails.nomineeRealationShipId
        this.guardianname = data.familyDetails.guardianName
        this.guardioanrelationshipwithminorid = data.familyDetails.guardianRealationShipId;
        if (this.guardioanrelationshipwithminorid == 9) {
          this.minorrelationshipforguardian = true;
        }
        if (data.familyDetails.nomineetype == "major") {
          this.Nagedob = this.datepipe.transform(data.familyDetails.nomineeDOB, 'yyyy-MM-dd');

        }
        else if (data.familyDetails.nomineetype == "minor") {
          this.getallpincoddataforminor(this.minorpincode);
          this.Nagedob = this.datepipe.transform(data.familyDetails.minorNomineeDOB, 'yyyy-MM-dd');

        }
        if (this.relationshiptypeid == 9) {
          this.othersinrelationshiptypes = true;
          this.relationship = data.familyDetails.nomineeReationship
        }
        if(data.familyDetails.guardianReationship!=null){
          this.minorrelationshipforguardian=true;
          this.guardioanrelationshipwithminor=data.familyDetails.guardianReationship
        }
        if (this.familydocs.length != 0) {
          this.familydocsexist = true
        }
        this.ageCalculator();
        this.stepper1.selectedIndex = 1;

      }
      else if (data.count == 2 && data.bankIdentityDetails == null) {
        this.stepper1.selectedIndex = 2;
      }
      else if (data.count == 2 && data.bankIdentityDetails != null) {
        for (let index = 0; index < data.bankIdentityDetails.bankdetails.length; index++) {
          this.fieldArray.push(data.bankIdentityDetails.bankdetails[index])
        }
        this.bankdocs = data.bankIdentityDetails.alldocuments
        if (this.bankdocs.length != 0) {
          this.bankdocsexist = true
        }
        this.rationcardnum = data.bankIdentityDetails.rationCardNum
        this.aadharnum = data.bankIdentityDetails.aadharNum
        this.voternum = data.bankIdentityDetails.voterId
        this.pannumber = data.bankIdentityDetails.panNum
        this.servicetax = data.bankIdentityDetails.serviceTaxNum
        this.passportnum = data.bankIdentityDetails.passportNum
        this.lifeinsurance = data.bankIdentityDetails.lifeInsuranceValue
        this.minordob = data.bankIdentityDetails.bankAccountType
        this.IsConfirm = data.bankIdentityDetails.isConfirm
        this.stepper1.selectedIndex = 2;

      }
      else if (data.count == 3 && data.homeVehicleDetails == null) {
        this.stepper1.selectedIndex = 3;
      }
      else if (data.count == 3 && data.homeVehicleDetails != null) {
        for (let i = 0; i < data.homeVehicleDetails.fixedAssets.length; i++) {
          this.fieldArrayFA.push(data.homeVehicleDetails.fixedAssets[i])
        }
        for (let i = 0; i < data.homeVehicleDetails.movableAssets.length; i++) {
          this.fieldArrayMove.push(data.homeVehicleDetails.movableAssets[i])
        }
        this.stepper1.selectedIndex = 3;
      }
      else if (data.count == 4 && data.smallScaleLoanDetails == null) {
        this.stepper1.selectedIndex = 4;
      }
      else if (data.count == 4 && data.smallScaleLoanDetails != null) {
        this.facilities=data.smallScaleLoanDetails.facilities;
        this.finance=data.smallScaleLoanDetails.finance;
        this.Concern=data.smallScaleLoanDetails.concern;
        this.Business=data.smallScaleLoanDetails.business;
        this.register=data.smallScaleLoanDetails.register;
        this.Authority=data.smallScaleLoanDetails.authority;
        this.activity=data.smallScaleLoanDetails.activity;
        this.establishment=data.smallScaleLoanDetails.establishment;
        this.maintained=data.smallScaleLoanDetails.maintained;
        this.belongs=data.smallScaleLoanDetails.belongs;
        this.purchased=data.smallScaleLoanDetails.purchased;
        this.Furnish=data.smallScaleLoanDetails.furnish;
        this.competent=data.smallScaleLoanDetails.competent;
        this.related=data.smallScaleLoanDetails.related;
        this.associate=data.smallScaleLoanDetails.associate;
        this.present=data.smallScaleLoanDetails.present;
        this.Credit=data.smallScaleLoanDetails.credit;
        this.Type=data.smallScaleLoanDetails.type;
        this.amtadv=data.smallScaleLoanDetails.amtadv;
        this.balance=data.smallScaleLoanDetails.balance;
        this.Reasons=data.smallScaleLoanDetails.reasons;
        this.owned=data.smallScaleLoanDetails.owned;
        this.Worth=data.smallScaleLoanDetails.worth;
        this.additional=data.smallScaleLoanDetails.additional;
        this.Primary=data.smallScaleLoanDetails.primary;
        this.technically=data.smallScaleLoanDetails.technically;
        this.Adults=data.smallScaleLoanDetails.adults;
        this.children=data.smallScaleLoanDetails.children;
        this.sstotal=data.smallScaleLoanDetails.sstotal;
        this.member=data.smallScaleLoanDetails.member;
        this.obligation=data.smallScaleLoanDetails.obligation;
        this.ssname=data.smallScaleLoanDetails.ssname;
        this.ssage=data.smallScaleLoanDetails.ssage;
        this.residentialadd=data.smallScaleLoanDetails.residentialadd;
        this.Scaleloan=data.smallScaleLoanDetails.scaleloan;
        this.Consumer=data.smallScaleLoanDetails.consumer;
        this.Relationship=data.smallScaleLoanDetails.relationship;
        this.vatno=data.smallScaleLoanDetails.vatno;
        this.tinno=data.smallScaleLoanDetails.tinno;
        this.managed=data.smallScaleLoanDetails.managed;
        this.proprietary = data.smallScaleLoanDetails.proprietary;

        this.stepper1.selectedIndex = 4;
      }
   
      else if (data.count == 5 && data.certificateDetails == null) {
        this.stepper1.selectedIndex = 5;

      }
      else if (data.count == 5 && data.certificateDetails != null) {
        this.certificates = data.certificateDetails
        if (this.certificates.length != 0) {
          this.certificatesexist = true
          for (let index = 0; index < this.certificates.length; index++) {
            if (this.certificates[index].actualCertificateName != null) {
              this.documentArray.push(this.certificates[index]);
            }
          }
          for (let index = 0; index < this.certificates.length; index++) {
            if (this.certificates[index].actualCertificateName == null) {
              this.CertificateDisplay.push(this.certificates[index]);
            }
          }
        }
        this.stepper1.selectedIndex = 5;
      }
    })
  }
  SaveFamilyDraft(stepper: MatStepper) {
    if (this.role == '1008') {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        FamilyType: this.fid,
        NumberofDependents: this.numberofdep,
        NumberofChildren: this.numofchild,
        AnnualIncomeAmount: this.Anualamt,
        OtherSourceAmount: this.otheramt,
        TotalAmount: this.totalamt,
        NomineeName: this.nominnename,
        //NomineeReationship: this.relationship,
        NomineeNameonPassbook: this.passbook,
        NomineeDOB: this.Ndob,
        NomineeAddress1: this.Naddress,
        NomineeAddress2: this.Naddress2,
        NomineeCountry: this.ncountry,
        NomineeState: this.Nstate,
        NomineeDistrict: this.Ndistrict,
        NomineePincode: this.Npincode,
        MinorNomineeName: this.minorname,
        MinoreNomineeMiddleName: this.minormiddname,
        MinoreNomineeLastName: this.minorlastname,
        MinorNomineeDOB: this.minordob,
        MinorNomineeAddress: this.minoraddress,
        MinorPostalCode: this.minorpincode,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        MinorAddress1: this.minoraddress,
        MinorAddress2: this.minoraddress1,
        NomineeMiddleName: this.nominnemiddlename,
        NomineeLastName: this.nominnelastname,
        NomineeReationship: this.relationship,
        NomineeRealationShipId: this.relationshiptypeid,

        GuardianName: this.guardianname,
        GuardianReationship: this.guardioanrelationshipwithminor,
        GuardianRealationShipId: this.guardioanrelationshipwithminorid,
        Nomineetype: this.Nomineetype,
        IsAllFileldsFilled: false,
        ProsperityId: this.ProposID,
        Role:this.role
      }
      this.spinner.show();
      //this.businessloanservice.SavefamilyDetails(data).subscribe((data: any) => {
      const frmData = new FormData();
      frmData.append("AadharFile", this.GuardianSelectedAadharFiles);
      frmData.append("AllData", JSON.stringify(data));
      frmData.append("Pancard", this.GuardianSelectedpanFiles);
      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_FamilyDetails/PostSaveC_FamilyDetails/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.notify = "Family Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.GetDraftData();

          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
    }
    else {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var cdata = {
        CustomerId: this.customerid,
        FamilyType: this.fid,
        NumberofDependents: this.numberofdep,
        NumberofChildren: this.numofchild,
        AnnualIncomeAmount: this.Anualamt,
        OtherSourceAmount: this.otheramt,
        TotalAmount: this.totalamt,
        NomineeName: this.nominnename,
        //NomineeReationship: this.relationship,
        NomineeNameonPassbook: this.passbook,
        NomineeDOB: this.Ndob,
        NomineeAddress1: this.Naddress,
        NomineeAddress2: this.Naddress2,
        NomineeCountry: this.ncountry,
        NomineeState: this.Nstate,
        NomineeDistrict: this.Ndistrict,
        NomineePincode: this.Npincode,
        MinorNomineeName: this.minorname,
        MinoreNomineeMiddleName: this.minormiddname,
        MinoreNomineeLastName: this.minorlastname,
        MinorNomineeDOB: this.minordob,
        MinorNomineeAddress: this.minoraddress,
        MinorPostalCode: this.minorpincode,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        MinorAddress1: this.minoraddress,
        MinorAddress2: this.minoraddress1,
        NomineeMiddleName: this.nominnemiddlename,
        NomineeLastName: this.nominnelastname,
        NomineeReationship: this.relationship,
        NomineeRealationShipId: this.relationshiptypeid,
        GuardianName: this.guardianname,
        GuardianReationship: this.guardioanrelationshipwithminor,
        GuardianRealationShipId: this.guardioanrelationshipwithminorid,
        Nomineetype: this.Nomineetype,
        IsAllFileldsFilled: false,
        ProsperityId: this.ProposID,


      }
      this.spinner.show();
      //this.businessloanservice.SavefamilyDetails(data).subscribe((data: any) => {
      const frmData = new FormData();
      frmData.append("AadharFile", this.GuardianSelectedAadharFiles);
      frmData.append("AllData", JSON.stringify(cdata));
      frmData.append("Pancard", this.GuardianSelectedpanFiles);
      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_FamilyDetails/PostSaveC_FamilyDetails/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.notify = "Family Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.GetDraftData();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
    }

  }
  SaveBankDraft() {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    var data = {
      CustomerId: this.customerid,
      BankDetails: this.fieldArray,
      RationCardNum: this.rationcardnum,
      AadharNum: this.aadharnum,
      VoterId: this.voternum,
      PANNum: this.pannumber,
      ServiceTaxNum: this.servicetax,
      PassportNum: this.passportnum,
      LifeInsuranceValue: this.lifeinsurance,
      IsConfirm: this.IsConfirm,
      CreatedBy: this.username,
      CreatedOn: latest_date,
      TickedId: this.ticketid,
      ProductId: 1,
      LoanIdORInsuranceId: 4,
      ApplicationType: "Customer",
      URL: "smallscaleloanform",
      IsAllFileldsFilled: false,
      ProsperityId: this.ProposID,
      Role:this.role
    }
    const frmData = new FormData();
    this.spinner.show();

    frmData.append("BankIdeData", JSON.stringify(data));
    frmData.append("Aadhar", this.SelectedAadharFiles);
    frmData.append("Passport", this.SelectedPassportFiles);
    frmData.append("GSTCert", this.SelectedGSTCertFiles);
    frmData.append("ITReturns", this.SelectedITReturnsFiles);
    frmData.append("BankStatements", this.SelectedBankStatementsFiles);
    frmData.append("VoterIdFile", this.SelectedVoterIdFiles);

    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_BankandIdentityDetails/PostBankIdentityDetails/', frmData).subscribe(
      data => {
        if (data == "success") {
          this.notify = "Details Saved as Draft!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 1000);
          this.spinner.hide();
          this.fieldArray = [];
          this.GetDraftData();

        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.fieldArray = [];

          this.GetDraftData();
        }
      });

  }
  SaveHomeVehicleDraft() {
    if (this.role == '1008') {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var cdata = {
        CustomerId: this.customerid,
        FixedAssets: this.fieldArrayFA,
        MovableAssets: this.fieldArrayMove,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TicketId: this.ticketid,
        IsAllFileldsFilled: false,
        ProsperityId: this.ProposID,
        Role:this.role
            }
      this.spinner.show();
      this.businessloanservice.SaveHomeDetails(cdata).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Home Details Saved Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.fieldArrayFA=[];
          this.fieldArrayMove=[];
          this.GetDraftData();        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.GetDraftData();

        }
      })

    }
    else {

      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        FixedAssets: this.fieldArrayFA,
        MovableAssets: this.fieldArrayMove,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TicketId: this.ticketid,
        IsAllFileldsFilled: false,
        ProsperityId: this.ProposID,

      }
      this.spinner.show();
      this.businessloanservice.SaveHomeDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Home Details Saved Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.fieldArrayFA=[];
          this.fieldArrayMove=[];
          this.GetDraftData();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
        }
      })

    }
  }
  previewloandetails(){
    if(this.ticketid==null){
      this.ticketid=this.ProposID
    }
    localStorage.setItem("previewticketid",this.customerid+ ","+ this.ticketid);
    this.route.navigate(['previewloandetails/' + "smallscale"]);
  }


  submitloanform() {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');

    var cdata = {
      CustomerId: this.customerid,
      CreatedBy: this.username,
      CreatedOn: latest_date,
      TicketId: this.ticketid,
      IsAllFileldsFilled: true,
      otherdocdetails: this.documentArray,
      ProsperityId: this.ProposID,
      Role: this.role,
      SendCopytoSP: this.SendCopytoSP,
      UserId: this.uid,
      RequestType: 15,
      Information:"SmallScale Loan"

    }
    this.spinner.show();
    this.businessloanservice.SubmitLoanForm(cdata).subscribe((data: any) => {
      if (data == "ok") {
        if (this.role == '1008') {
          alert("Small Scale Loan Form Submitted Successfully!!")
          this.route.navigate(['/badashboard']);

        }
        else if (this.role == '1') {
          alert("Small Scale Loan Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
          this.route.navigate(['/customerdashboard']);

        }
        else  {
          alert("Small ScaleLoan Form Submitted Successfully!!")
          this.route.navigate(['/edashboard']);

        }
        localStorage.setItem("editloanform", "false")
        this.spinner.hide();


      } else {
        this.notify = "Something Went Wrong. Try again.!!"
        setTimeout(() => this.dismissalert = true, 100);
        setTimeout(function () {
          this.dismissalert = false;
        }.bind(this), 3000);
        this.spinner.hide();


      }
    })

  }

  async GetEditData() {
    if (this.ticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.ticketid

    }
    this.spinner.show();

    this.businessloanservice.GetSmallScaleLoanEditdata(sendid).subscribe((data: any) => {
      this.spinner.hide();

      this.customerid = data.userId

      if (data.basicDetails != null) {
        this.firstname = data.basicDetails.firstName;
        this.middlename = data.basicDetails.middleName;
        this.lastname = data.basicDetails.lastName;
        this.placeofbirth = data.basicDetails.placeOfBirth;
        this.genderid = data.basicDetails.gender;
        this.martid = data.basicDetails.maritalStatus;
        this.Number = data.basicDetails.mobileNum;
        this.dateofbirth = this.datepipe.transform(data.basicDetails.dateOfBirth, 'yyyy-MM-dd');
        this.rid = data.basicDetails.religion;
        this.casteid = data.basicDetails.race;
        this.quaid = data.basicDetails.qualification;
        this.occuid = data.basicDetails.occupation;
        this.email = data.basicDetails.email;
        this.desid = data.basicDetails.designation;
        this.street = data.basicDetails.residentialLineTwo;
        this.city = data.basicDetails.residentialLineOne;
        this.district = data.basicDetails.residentialDistrict;
        this.pincode = data.basicDetails.residentialPincode;
        this.state = data.basicDetails.residentialState;
        this.country = data.basicDetails.residentialCountry;
        this.stateone = data.basicDetails.permanentState;
        this.countryone = data.basicDetails.permanentCountry;
        this.postalcode = data.basicDetails.permanentPincode;
        this.adressone = data.basicDetails.permanentLineOne;
        this.adresstwo = data.basicDetails.permanentLineTwo;
        this.districtone = data.basicDetails.permanentDistrict;
        this.PermanentSameasResidential = data.basicDetails.permanentSameasResidential;
        if (data.basicDetails.casteother != null) {
          this.othercastedetails = true;
          this.castedetail = data.basicDetails.casteother
        }
        if (data.basicDetails.religionOther != null) {
          this.othereligiondetails = true;
          this.religiondetail = data.basicDetails.religionOther
        }
        if (data.basicDetails.qualificationother != null) {
          this.otherequalification = true;
          this.qualificationdetail = data.basicDetails.qualificationother
        }
        if (data.basicDetails.occupationOther != null) {
          this.othersoccupation = true;
          this.occupatoiondetail = data.basicDetails.occupationOther
        }
        if (data.basicDetails.designationother != null) {
          this.otherdesignation = true;
          this.designationd = data.basicDetails.designationother
        }
      }

      if (data.familyDetails != null) {
        this.numberofdep = data.familyDetails.numberofDependents
        this.numofchild = data.familyDetails.numberofChildren,
          this.Anualamt = data.familyDetails.annualIncomeAmount,
          this.otheramt = data.familyDetails.otherSourceAmount,
          this.totalamt = data.familyDetails.totalAmount,
          this.nominnename = data.familyDetails.nomineeName,
          this.relationship = data.familyDetails.nomineeReationship,
          this.passbook = data.familyDetails.nomineeNameonPassbook,
          this.fid = data.familyDetails.familyType,
          this.ncountry = data.familyDetails.nomineeCountry,
          this.Nstate = data.familyDetails.nomineeState,
          this.Ndistrict = data.familyDetails.nomineeDistrict,
          this.minorname = data.familyDetails.minorNomineeName,
          this.minormiddname = data.familyDetails.minoreNomineeMiddleName,
          this.minorlastname = data.familyDetails.minoreNomineeLastName,
          this.minoraddress = data.familyDetails.minorAddress1,
          this.minordob = data.familyDetails.minorNomineeDOB,
          this.Npincode = data.familyDetails.nomineePincode,
          this.Naddress = data.familyDetails.nomineeAddress1,
          this.Naddress2 = data.familyDetails.nomineeAddress2,
          this.minorpincode = data.familyDetails.minorPostalCode,
          this.minoraddress1 = data.familyDetails.minorAddress2,
          this.minorcountry = data.familyDetails.minorCountry,
          this.minorstate = data.familyDetails.minorState,
          this.minordistrict = data.familyDetails.minorDistrict
        this.familydocs = data.familyDetails.familyCertList
        this.nominnemiddlename = data.familyDetails.nomineeMiddleName
        this.nominnelastname = data.familyDetails.nomineeLastName
        this.relationshiptypeid = data.familyDetails.nomineeRealationShipId
        this.guardianname = data.familyDetails.guardianName
        this.guardioanrelationshipwithminorid = data.familyDetails.guardianRealationShipId;
        if (this.guardioanrelationshipwithminorid == 9) {
          this.minorrelationshipforguardian = true;
        }
        if (data.familyDetails.nomineetype == "major") {
          this.Nagedob = this.datepipe.transform(data.familyDetails.nomineeDOB, 'yyyy-MM-dd');

        }
        else if (data.familyDetails.nomineetype == "minor") {
          this.getallpincoddataforminor(this.minorpincode);
          this.Nagedob = this.datepipe.transform(data.familyDetails.minorNomineeDOB, 'yyyy-MM-dd');

        }
        if (this.relationshiptypeid == 9) {
          this.othersinrelationshiptypes = true;
          this.relationship = data.familyDetails.nomineeReationship
        }
        if (data.familyDetails.guardianReationship != null) {
          this.minorrelationshipforguardian = true;
          this.guardioanrelationshipwithminor = data.familyDetails.guardianReationship
        }
        if (this.familydocs.length != 0) {
          this.familydocsexist = true
        }
        this.ageCalculator();

      }
      if (data.bankIdentityDetails != null) {
        for (let index = 0; index < data.bankIdentityDetails.bankdetails.length; index++) {
          this.fieldArray.push(data.bankIdentityDetails.bankdetails[index])
        }
        this.bankdocs = data.bankIdentityDetails.alldocuments
        if (this.bankdocs.length != 0) {
          this.bankdocsexist = true
        }
        this.rationcardnum = data.bankIdentityDetails.rationCardNum
        this.aadharnum = data.bankIdentityDetails.aadharNum
        this.voternum = data.bankIdentityDetails.voterId
        this.pannumber = data.bankIdentityDetails.panNum
        this.servicetax = data.bankIdentityDetails.serviceTaxNum
        this.passportnum = data.bankIdentityDetails.passportNum
        this.lifeinsurance = data.bankIdentityDetails.lifeInsuranceValue
        this.minordob = data.bankIdentityDetails.bankAccountType
        this.IsConfirm = data.bankIdentityDetails.isConfirm

      }

      if (data.homeVehicleDetails != null) {
        for (let i = 0; i < data.homeVehicleDetails.fixedAssets.length; i++) {
          this.fieldArrayFA.push(data.homeVehicleDetails.fixedAssets[i])
        }
        for (let i = 0; i < data.homeVehicleDetails.movableAssets.length; i++) {
          this.fieldArrayMove.push(data.homeVehicleDetails.movableAssets[i])
        }
      }

      if (data.smallScaleLoanDetails != null) {
        this.facilities=data.smallScaleLoanDetails.facilities;
        this.finance=data.smallScaleLoanDetails.finance;
        this.Concern=data.smallScaleLoanDetails.concern;
        this.Business=data.smallScaleLoanDetails.business;
        this.register=data.smallScaleLoanDetails.register;
        this.Authority=data.smallScaleLoanDetails.authority;
        this.activity=data.smallScaleLoanDetails.activity;
        this.establishment=data.smallScaleLoanDetails.establishment;
        this.maintained=data.smallScaleLoanDetails.maintained;
        this.belongs=data.smallScaleLoanDetails.belongs;
        this.purchased=data.smallScaleLoanDetails.purchased;
        this.Furnish=data.smallScaleLoanDetails.furnish;
        this.competent=data.smallScaleLoanDetails.competent;
        this.related=data.smallScaleLoanDetails.related;
        this.associate=data.smallScaleLoanDetails.associate;
        this.present=data.smallScaleLoanDetails.present;
        this.Credit=data.smallScaleLoanDetails.credit;
        this.Type=data.smallScaleLoanDetails.type;
        this.amtadv=data.smallScaleLoanDetails.amtadv;
        this.balance=data.smallScaleLoanDetails.balance;
        this.Reasons=data.smallScaleLoanDetails.reasons;
        this.owned=data.smallScaleLoanDetails.owned;
        this.Worth=data.smallScaleLoanDetails.worth;
        this.additional=data.smallScaleLoanDetails.additional;
        this.Primary=data.smallScaleLoanDetails.primary;
        this.technically=data.smallScaleLoanDetails.technically;
        this.Adults=data.smallScaleLoanDetails.adults;
        this.children=data.smallScaleLoanDetails.children;
        this.sstotal=data.smallScaleLoanDetails.sstotal;
        this.member=data.smallScaleLoanDetails.member;
        this.obligation=data.smallScaleLoanDetails.obligation;
        this.ssname=data.smallScaleLoanDetails.ssname;
        this.ssage=data.smallScaleLoanDetails.ssage;
        this.residentialadd=data.smallScaleLoanDetails.residentialadd;
        this.Scaleloan=data.smallScaleLoanDetails.scaleloan;
        this.Consumer=data.smallScaleLoanDetails.consumer;
        this.Relationship=data.smallScaleLoanDetails.relationship;
        this.vatno=data.smallScaleLoanDetails.vatno;
        this.tinno=data.smallScaleLoanDetails.tinno;
        this.managed=data.smallScaleLoanDetails.managed;
        this.proprietary = data.smallScaleLoanDetails.proprietary;
      }


      if (data.certificateDetails != null) {
        this.certificates = data.certificateDetails
        if (this.certificates.length != 0) {
          this.certificatesexist = true
          for (let index = 0; index < this.certificates.length; index++) {
            if (this.certificates[index].actualCertificateName != null) {
              this.documentArray.push(this.certificates[index]);
            }
          }
          for (let index = 0; index < this.certificates.length; index++) {
            if (this.certificates[index].actualCertificateName == null) {
              this.CertificateDisplay.push(this.certificates[index]);
            }
          }
        }
      }
      if (data != null) {
        if (this.editformname == "personal") {
          this.stepper1.selectedIndex = 0;

        }
        else if (this.editformname == "family") {
          this.stepper1.selectedIndex = 1;

        }
        else if (this.editformname == "bank") {
          this.stepper1.selectedIndex = 2;

        }
        else if (this.editformname == "asset") {
          this.stepper1.selectedIndex = 3;

        }
        else if (this.editformname == "smallscale") {
          this.stepper1.selectedIndex = 4;

        }
        else if (this.editformname == "certificates") {
          this.stepper1.selectedIndex = 5;
        }
      }
    })



  }
}

export class DynamicGrid {
  title1: string;
  title2: string;
  title3: string;
}
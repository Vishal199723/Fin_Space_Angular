import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatStepper } from '@angular/material';
import { HomeInsuranceService } from 'src/app/Shared/HomeInsurance/home-insurance.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-home-insurance',
  templateUrl: './home-insurance.component.html',
  styleUrls: ['./home-insurance.component.css']
})
export class HomeInsuranceComponent implements OnInit {
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
  gstnumber: any;
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
  termamt: any;
  workcapital: any;
  termrepayment: any;
  workprogram: any;
  rented: any;
  basicbooks: any;
  willapplicate: any;
  associates: any;
  difficulties: any;
  commodities: any;
  soureces: any;
  similar: any;
  competition: any;
  Performance: any;
  year: any;
  Salesdata: any;
  netprofit: any;
  remarks: any;
  Anticipatedyear: any;
  antisales: any;
  antinet: any;
  antiremarks: any;
  Turnover: any;
  turnsale: any;
  turnprofit: any;
  turnremarks: any;
  Assessment: any;
  amtpaid: any;
  styear: any;
  amountpaids: any;
  requirementvlue: any;
  margin: any;
  Permissible: any;
  Permissibleremar: any;
  Average: any;
  avrmargin: any;
  limits: any;
  limitsremar: any;
  outstanding: any;
  outstandingmargin: any;
  outstandingremark: any;
  required: any;
  requiredamt: any;
  suppliers: any;
  suppliersrs: any;
  Repayment: any;
  Equipment: any;
  Equipmentone: any;
  Equipmenttwo: any;
  Equipmentthree: any;
  Items: any;
  Supplierdata: any;
  cost: any;
  contribution: any;
  Loanrequired: any;
  Repaymentprog: any;
  Security: any;
  reached: any;
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
  businessaddress: any;
  firmname: any;
  Scstother: any;
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
  lowlyingarea = false
  areaprone = false
  floddprone = false
  isChecked = true
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
  bankdocsexist: boolean = false;
  bankdocs: any = [];
  operative: any;
  Salary: any;
  enablepreview: boolean= false;
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
  Nomineename: any;
  facilities: any;
  chequedate: any;
  selectedchequetype: any;
  selectedchequetypeid: any;
  Concern: any;
  Business: any;
  register: any;
  acholder: any;
  bankaccountno: any;
  nmofbansk: any;
  micrifcode: any;
  belongs: any;
  competent: any;
  related: any;
  associate: any;
  present: any;
  Credit: boolean;
  Type: boolean;
  amtadv: any;
  nameofpayer: any;
  owned: any;
  Addressofnominee: any;
  Consumer: any;
  Scaleloan: any;
  residentialadd: any;
  ssage: any;
  ssname: any;
  MonthlyIncome: any;
  bankbranch: any;
  sstotal: any;
  Nomineerelationship: boolean;
  Primary: boolean;
  additional: any;
  vatno: boolean;
  tinno: any;
  Place: any;
  inbankname: any;
  managed: any;
  sourcefund: any;
  creditcard: any;
  relevant: any;
  chequeamt: any;
  Course: any;
  Parttime: any;
  Admission: any;
  institution: any;
  Tuition: any;
  Tuitionthr: any;
  Tuitionsec: any;
  Tuitionfour: any;
  eduremrks: any;
  Tuitionfive: any;

  Sundriesfour: any;
  boardHostel: any;
  Sundriessec: any;
  Sundriesone: any;
  Hostel: any;
  Hostelboard: any;
  boardHfive: any;
  Sundriesthrd: any;
  Equipmentfive: any;
  boardHotfour: any;
  Sundriesfive: any;
  Equipmentfour: any;
  Insuranceone: any;
  Insurancetwo: any;
  Insurancethrd: any;
  Insurancefour: any;
  Insurancefive: any;
  Booksfive: any;
  Booksstafour: any;
  Bookssta: any;
  Books: any;
  Stationary: any;
  Feesfive: any;
  Feesfour: any;
  Feesthree: any;
  Feessec: any;
  Feesfirst: any;
  Othersfirst: any;
  Otherstwo: any;
  Othersthree: any;
  Othersfive: any;
  Othersfour: any;
  Fundssec: any;
  first: any;
  fifth: any;
  fourth: any;
  second: any;
  third: any;
  Bankfifth: any;
  Bankfourth: any;
  Bankthird: any;
  Banksecond: any;
  Bankfirst: any;
  sourcesfive: any;
  availablefour: any;
  availablethrd: any;
  Fundsfirst: any;
  assistance: any;
  repayable: any;
  Fellowship: any;
  Stipend: any;
  scholarship: any;
  AllUserData: any;
  notify: string;
  dismissalert: boolean;
  username: any;
  uid: any;
  DateTime: Date;
  files4: any;
  files3: any;
  files2: any;
  files5: any;
  files6: any;
  dynamicArray: Array<DynamicGrid> = [];
  userImage: any;
  postalcode: any;
  stateone: any;
  countryone: any;
  districtone: any;
  talukone: any;
  ncountry: any;
  Ndistrict: any;
  minorstate: any;
  minorcountry: any;
  minordistrict: any;
  minoraddress1: any
  minorpincode: any
  address: any;
  sameadress: boolean = false;
  newadress: boolean;
  adressone: any;
  adresstwo: any;
  Naddress2: any;
  Npincode: any;
  SelectedAadharFiles: string;
  SelectedVoterIdFiles: string;
  SelectedPassportFiles: string;
  SelectedGSTCertFiles: string;
  SelectedITReturnsFiles: string;
  SelectedBankStatementsFiles: string;
  selectedbanktype: any;
  ticketid: string;
  paymenttype: any
  newDynamic: any = {};
  route: any;
  dedtQty: number;
  Qty: any;
  propaddress: any
  yearofconstr: any
  builtuparea: any
  castedetail: any;
  religiondetail: any;
  qualificationdetail: any;
  designationd: any;
  occupatoiondetail: any;
  suminsuredbuildingval: any
  SelectedClassofConst: any;
  nameoffinancier: any
  sumcontentinsured: any
  distfromwater: any
  locationofprop: any
  buildingstructure: any
  buildingtotal: number;
  undergroundservices: any
  Valueablessuminsured: any
  Valueablesweight: any
  Appliancesmodel: any
  AppliancesIDNo: any
  locationwithinpremises: any
  fixedplatessum: any
  additionalrent: any
  natureofwork: any
  addressofinsurancecom: any
  Policynumber: any
  Periodofinsurance: any
  paymentdated: any
  BankName: any
  paymentamtinwords: any
  roleid: string;
  PermanentSameasResidential: any;
  IsConfirm: any;
  customerid: any;

  Aadharexist: boolean = false;
  Passportexist: boolean = false;
  GSTexist: boolean = false;
  ITexist: boolean = false;
  BankStatexist: boolean = false;
  VoterIDexist: boolean = false;
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
  role: string;
  serviceprovidername: any;
  RelationShipTyes: any;
  relationshiptypeid: any;
  othersinrelationshiptypes: boolean;
  otherdesignation: boolean;
  othersoccupation: boolean;
  otherequalification: boolean;
  othereligiondetails: boolean;
  othercastedetails: boolean;
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
  ProspectIdtoDisplydata: string;
  editformname: string;
  ProposID: string;
  get f() { return this.RegistrationForm.controls; }
  get k() { return this.BankDetailsForm.controls; }
  get e() { return this.homeinsuranceform.controls; }
  RegistrationForm = new FormGroup({
    customerid:new FormControl(),
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
    PermanentSameasResidential: new FormControl(),
    // taluk: new FormControl(),
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

  homeinsuranceform = new FormGroup({
    propaddress: new FormControl(),
    yearofconstr: new FormControl(),
    builtuparea: new FormControl(),
    suminsuredbuildingval: new FormControl(),
    nameoffinancier: new FormControl(),
    sumcontentinsured: new FormControl(),
    distfromwater: new FormControl(),
    locationofprop: new FormControl(),
    buildingstructure: new FormControl(),
    undergroundservices: new FormControl(),
    buildingtotal: new FormControl(),
    Valueablesdesc: new FormControl(),
    Valueablesquantity: new FormControl(),
    Valueablessuminsured: new FormControl(),
    Valueablesweight: new FormControl(),
    Appliancesdesc: new FormControl(),
    Appliancesmodel: new FormControl(),
    Appliancesyear: new FormControl(),
    AppliancesIDNo: new FormControl(),
    AppliancesSumInsured: new FormControl(),
    locationwithinpremises: new FormControl(),
    dimensions: new FormControl(),
    fixedplatessum: new FormControl(),
    lossofrent: new FormControl(),
    additionalrent: new FormControl(),
    pedigreeinsu: new FormControl(),
    baggageinsu: new FormControl(),
    noofservents: new FormControl(),
    natureofwork: new FormControl(),
    estimatedwages: new FormControl(),
    addressofinsurancecom: new FormControl(),
    Itemalreadyinsured: new FormControl(),
    Policynumber: new FormControl(),
    insurancecompname: new FormControl(),
    Periodofinsurance: new FormControl(),
    sourceoffund: new FormControl(),
    paymenttype: new FormControl(),
    chequeno: new FormControl(),
    paymentdated: new FormControl(),
    BankName: new FormControl(),
    paymentamount: new FormControl(),
    paymentamtinwords: new FormControl(),
    lowlyingarea: new FormControl(),
    areaprone: new FormControl(),
    floddprone: new FormControl(),
    coveragefortenant: new FormControl(),
    lockkeyopt: new FormControl(),
    coverageextinguish: new FormControl(),
    terrorismopt: new FormControl(),
    coverlossofdocs: new FormControl(),
    coverexpensesforhousehold: new FormControl(),
    independenthouse: new FormControl(),
    apartment: new FormControl(),
    flatsconnected: new FormControl(),
    SendCopytoSP: new FormControl(),
  });
  SendCopytoSP: any
  files1: any;
  SelectedFiles: string;
  validfile: boolean;
  editable: boolean = false;
  coveragefortenant: any = false
  lockkeyopt: any = false
  coverageextinguish: any = false
  terrorismopt: any = false
  Valueablesdesc: any
  Valueablesquantity: any
  Appliancesdesc: any
  Appliancesyear: any
  AppliancesSumInsured: any
  dimensions: any
  coverlossofdocs: any = false
  coverexpensesforhousehold: any = false
  lossofrent: any
  pedigreeinsu: any
  baggageinsu: any
  noofservents: any
  estimatedwages: any
  flatsconnected: any = false
  apartment: any = false
  independenthouse: any = false
  Itemalreadyinsured: any
  insurancecompname: any
  chequeno: any
  sourceoffund: any
  paymentamount: any;

  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private serviceproviderservice: ServiceProviderService, private spinner: NgxSpinnerService,
    private userservice: UserDetailsService, private http: HttpClient, private businessloanservice: BusinessLoanServiceService,
    private datepipe: DatePipe, private httpService: HttpClient, private homeinsuranceservice: HomeInsuranceService,
    private router:Router) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.ticketid = localStorage.getItem("TicketId");
    this.ProposID = localStorage.getItem("ProposID");
    this.roleid = localStorage.getItem("role");
    this.role = localStorage.getItem("role");

    localStorage.setItem("customerId", this.customerid);
    this.customerid = localStorage.getItem("customerId");

    this.RegistrationForm = formBuilder.group({
      customerid: [''],
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: [''],
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
      PermanentSameasResidential: false,

    })

    this.BankDetailsForm = formBuilder.group({
      customerid: [''],
      rationcardnum: ['',],
      aadharnum: [''],
      voternum: [''],
      pannumber: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      servicetax: ['',],
      passportnum: ['',],
      lifeinsurance: [''],
      IsConfirm: false
    })
  
    this.homeinsuranceform = formBuilder.group({
      customerid: [''],
      propaddress: ['', Validators.required],
      yearofconstr: ['', Validators.required],
      builtuparea: ['', Validators.required],
      suminsuredbuildingval: ['', Validators.required],
      nameoffinancier: ['', Validators.required],
      sumcontentinsured: ['', Validators.required],
      distfromwater: ['', Validators.required],
      locationofprop: ['', Validators.required],
      buildingstructure: ['', Validators.required],
      undergroundservices: ['', Validators.required],
      buildingtotal: [''],
      Valueablesdesc: ['', Validators.required],
      Valueablesquantity: ['', Validators.required],
      Valueablesweight: ['', Validators.required],
      Valueablessuminsured: ['', Validators.required],
      Appliancesdesc: ['', Validators.required],
      Appliancesmodel: ['', Validators.required],
      Appliancesyear: ['', Validators.required],
      AppliancesIDNo: ['', Validators.required],
      AppliancesSumInsured: ['', Validators.required],
      locationwithinpremises: ['', Validators.required],
      dimensions: ['', Validators.required],
      fixedplatessum: ['', Validators.required],
      lossofrent: ['', Validators.required],
      additionalrent: ['', Validators.required],
      pedigreeinsu: ['', Validators.required],
      baggageinsu: ['', Validators.required],
      noofservents: ['', Validators.required],
      natureofwork: ['', Validators.required],
      estimatedwages: ['', Validators.required],
      addressofinsurancecom: ['', Validators.required],
      Itemalreadyinsured: ['', Validators.required],
      Policynumber: ['', Validators.required],
      insurancecompname: ['', Validators.required],
      Periodofinsurance: ['', Validators.required],
      sourceoffund: ['', Validators.required],
      paymenttype: ['', Validators.required],
      chequeno: ['', Validators.required],
      paymentdated: ['', Validators.required],
      BankName: ['', Validators.required],
      paymentamount: ['', Validators.required],
      paymentamtinwords: ['', Validators.required],
      lowlyingarea: false,
      areaprone: false,
      floddprone: false,
      coveragefortenant: false,
      lockkeyopt: false,
      coverageextinguish: false,
      terrorismopt: false,
      coverlossofdocs: false,
      coverexpensesforhousehold: false,
      independenthouse: false,
      apartment: false,
      flatsconnected: false,
      SendCopytoSP: false
    })

    this.ProspectIdtoDisplydata = localStorage.getItem("ProspectIdtoDisplydata");
    this.editformname = localStorage.getItem("editinsuranceform")
    if (this.ProposID == null) {
      this.ProposID = localStorage.getItem("ProspectIdtoDisplydata");
    }
    this.ProspectIdtoDisplydata = localStorage.getItem("ProspectIdtoDisplydata");
 

    if (this.editformname == "personal") {
      this.GetEditData();

    }
  
    else if (this.editformname == "bank") {
      this.GetEditData();

    }
  
    else if (this.editformname == "home") {
      this.GetEditData();

    }
    else if (this.editformname == "certificates") {
      this.GetEditData();

    }

    else {
      localStorage.setItem("editinsuranceform", "false")
      this.GetDraftData();

    }



  }
  GetCurrentUserImage() {
    this.spinner.show()
    this.userservice.getCurrentUSerImage(this.ticketid).subscribe((respose: any) => {
      this.userImage = respose;
      this.spinner.hide();
    });
  }
  onSelectClassofConst(data: any) {
    this.SelectedClassofConst = data

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
  onSelectbank(data: any) {
    this.selectedbanktype = data
  }
  onSelectRelationType(data: any) {
    this.relationshiptypeid = data;
    if (data == 9) {
      this.othersinrelationshiptypes = true;
    }
    else {
      this.othersinrelationshiptypes = false;
    }
  }
  onSelectCaste(data: any) {
    this.casteid = data;
    if (data == 15) {
      this.othercastedetails = true;
    }
    else {
      this.othercastedetails = false;
    }
  }

  onSelectrelogion(data: any) {
    this.rid = data;
    if (data == 1010) {
      this.othereligiondetails = true;
    }
    else {
      this.othereligiondetails = false;
    }
  }
  onSelectqualification(data: any) {
    this.quaid = data;
    if (data == 25) {
      this.otherequalification = true;
    }
    else {
      this.otherequalification = false;
    }
  }
  onSelectdesignation(data: any) {
    this.desid = data;
    if (data == 9) {
      this.otherdesignation = true;
    }
    else {
      this.otherdesignation = false;
    }
  }

  onSelectoccupation(data: any) {
    this.occuid = data;
    if (data == 32) {
      this.othersoccupation = true;
    }
    else {
      this.othersoccupation = false;
    }
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
  onSelectgender(data: any) {
    this.genderid = data
  }
  ifscrex = new RegExp(/^[A-Za-z]{4}[0-9]{6,7}$/);

  ngOnInit() {
    var custid = localStorage.setItem("customerId", this.customerid);
    if (custid == undefined) {
      this.customerid = null;
    }
    else {
      this.customerid = localStorage.getItem("customerId");
    }
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
    // this.GetDraftData();
    // this.GetCurrentUserImage();
    this.Getgender();
    this.Getstatus();
    this.Getreligion();
    this.Getqualification();
    this.Getoccupation();
    this.Getdesignation();
    this.Getfamily();
    this.Getfixedasset();
    this.Getmoveableasset();
    this.Getcaste();
    this.Getbankaccount();
    this.Certificate();
    if (this.role != '1008') {
      this.GetCurrentUserImage();
      this.GetUserDetails();
    }
    this.GetServiceProvider();
    this.GetRelationShipTyes();
  }

  async GetServiceProvider() {
    this.spinner.show()
    await this.serviceproviderservice.getservcieprovider(this.ticketid).subscribe((response: any) => {
      this.serviceprovidername = response;
      this.spinner.hide()

    });
  }
  async GetRelationShipTyes() {
    this.spinner.show()
    await this.businessloanservice.getrelationshiptypedata().subscribe((response: any) => {
      this.RelationShipTyes = response;
      this.spinner.hide()
    });
  }
  buildingsum() {
    this.buildingtotal = (+this.buildingstructure) + (+this.undergroundservices)
  }
  TotalValueHouse() {
    this.total = (+this.presentvalue) * (+this.giidancevalue)

  }
  GetUserDetails() {
    this.spinner.show();
    this.serviceproviderservice.GetUserDetails(this.ticketid).subscribe((data: any) => {
      this.AllUserData = data;
      this.pincode = this.AllUserData.postalCode;
      this.customerid = this.AllUserData.userId;
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
    this.spinner.show();
    var pin = this.pincode;
    this.http.get("https://api.postalpincode.in/pincode/" + pin).subscribe((data: any) => {
      console.log(data);
      this.spinner.hide();

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
  GetTotalAmout() {

    this.totalamt = (+this.otheramt) + (+this.Anualamt);
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

  getCustomerImage(id) {
    this.spinner.show();
    this.userservice.getCurrentUSerImage(id).subscribe((respose: any) => {
      this.userImage = respose;
      this.getCustomerDetails(id);
      this.spinner.hide();

    });
  }
  getCustomerDetails(id) {
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
          ReligionOther: this.religiondetail,
          OccupationOther: this.occupatoiondetail,
          Casteother: this.castedetail,
          Qualificationother: this.qualificationdetail,
          Designationother: this.designationd,
          IsAllFileldsFilled: true,
          PermanentSameasResidential: this.PermanentSameasResidential,
          ProductId: 2,
          LoanIdORInsuranceId: 2,
          ApplicationType: "Customer",
          URL: "HomeInsurance",
           Role: this.role,
          UserId: this.uid,
          ProsperityId: this.ProposID,
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
            if (localStorage.getItem("editinsuranceform") != "false") {
              this.stepper1.selectedIndex = 3

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
          ProductId: 2,
          LoanIdORInsuranceId: 2,
          ApplicationType: "Customer",
          URL: "HomeInsurance",
          Role: this.role,
          UserId: this.uid,
          ProsperityId: this.ProposID,
        }
        this.businessloanservice.SaveBasicDetails(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Personal Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.router.navigate(['/HomeInsuranceDetails'])

            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.router.navigate(['/HomeInsuranceDetails'])
  
            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
              this.stepper1.selectedIndex = 3

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

  onChange(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    console.log(this.files1);
    fileslist = this.files1[0];

    this.SelectedFiles = fileslist;
    localStorage.setItem("validateval", "true")

  }

  onSelectIsConfirm(event) {
    if (event.target.checked) {
      this.isconfirm = true;
    }
    else {
      this.isconfirm = false;

    }
  }
 
  SaveBankDraft(stepper: MatStepper) {
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
      LoanIdORInsuranceId: 6,
      ApplicationType: "Customer",
      URL: "Projectloan",
      IsAllFileldsFilled: false
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
          IsAllFileldsFilled: true,
          Role: this.role,
          ProsperityId: this.ProposID,

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
              if (localStorage.getItem("editinsuranceform") != "false") {
                this.stepper1.selectedIndex = 3
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
          Role: this.role

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
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.router.navigate(['/HomeInsuranceDetails'])
  
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.router.navigate(['/HomeInsuranceDetails'])
    
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 3
  
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
  SaveHomeInsuranceDraft() {

    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    this.spinner.show()
    var data = {
      propaddress: this.propaddress,
      yearofconstr: this.yearofconstr,
      builtuparea: this.builtuparea,
      suminsuredbuildingval: this.suminsuredbuildingval,
      nameoffinancier: this.nameoffinancier,
      sumcontentinsured: this.sumcontentinsured,
      distfromwater: this.distfromwater,
      locationofprop: this.locationofprop,
      buildingstructure: this.buildingstructure,
      undergroundservices: this.undergroundservices,
      buildingtotal: this.buildingtotal,
      valueablesdesc: this.Valueablesdesc,
      valueablesquantity: this.Valueablesquantity,
      valueablessuminsured: this.Valueablessuminsured,
      valueablesweight: this.Valueablesweight,
      appliancesdesc: this.Appliancesdesc,
      appliancesmodel: this.Appliancesmodel,
      appliancesyear: this.Appliancesyear,
      appliancesIDNo: this.AppliancesIDNo,
      appliancesSumInsured: this.AppliancesSumInsured,
      locationwithinpremises: this.locationwithinpremises,
      dimensions: this.dimensions,
      fixedplatessum: this.fixedplatessum,
      lossofrent: this.lossofrent,
      additionalrent: this.additionalrent,
      pedigreeinsu: this.pedigreeinsu,
      baggageinsu: this.baggageinsu,
      noofservents: this.noofservents,
      natureofwork: this.natureofwork,
      estimatedwages: this.estimatedwages,
      addressofinsurancecom: this.addressofinsurancecom,
      itemalreadyinsured: this.Itemalreadyinsured,
      policynumber: this.Policynumber,
      insurancecompname: this.insurancecompname,
      periodofinsurance: this.Periodofinsurance,
      sourceoffund: this.sourceoffund,
      paymenttype: this.paymenttype,
      chequeno: this.chequeno,
      paymentdated: this.paymentdated,
      bankName: this.BankName,
      paymentamount: this.paymentamount,
      paymentamtinwords: this.paymentamtinwords,
      lowlyingarea: this.lowlyingarea,
      areaprone: this.areaprone,
      floddprone: this.floddprone,
      coveragefortenant: this.coveragefortenant,
      lockkeyopt: this.lockkeyopt,
      coverageextinguish: this.coverageextinguish,
      terrorismopt: this.terrorismopt,
      coverlossofdocs: this.coverlossofdocs,
      coverexpensesforhousehold: this.coverexpensesforhousehold,
      independenthouse: this.independenthouse,
      apartment: this.apartment,
      flatsconnected: this.flatsconnected,
      classofConst: this.SelectedClassofConst,
      CreatedBy: this.username,
      CreatedOn: latest_date,
      TickedId: this.ticketid,
      CustomerId: this.customerid,
      UserId: this.uid,
      Role: this.roleid,
      IsAllFileldsFilled: false,
      ProductId: 2,
      LoanIdORInsuranceId: 2,
      ApplicationType: "Customer",
      URL: "HomeInsurance",
      SendCopytoSP: this.SendCopytoSP,
      ProsperityId: this.ProposID,


    }
    this.homeinsuranceservice.SaveHomeInsurance(data).subscribe((data: any) => {
      if (data == "success") {
        this.notify = "Home Insurance Details Saved as Draft!!"
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

  SaveHomeInsurance(stepper: MatStepper) {
   
    if (this.role == '1008') {
      this.submitted = true;

      if (this.homeinsuranceform.invalid) {
        return;
      }
      else if (this.SelectedClassofConst == null || this.SelectedClassofConst == undefined) {
        alert("Please select Class of construction")
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        this.spinner.show()
        var data = {
          propaddress: this.propaddress,
          yearofconstr: this.yearofconstr,
          builtuparea: this.builtuparea,
          suminsuredbuildingval: this.suminsuredbuildingval,
          nameoffinancier: this.nameoffinancier,
          sumcontentinsured: this.sumcontentinsured,
          distfromwater: this.distfromwater,
          locationofprop: this.locationofprop,
          buildingstructure: this.buildingstructure,
          undergroundservices: this.undergroundservices,
          buildingtotal: this.buildingtotal,
          valueablesdesc: this.Valueablesdesc,
          valueablesquantity: this.Valueablesquantity,
          valueablessuminsured: this.Valueablessuminsured,
          valueablesweight: this.Valueablesweight,
          appliancesdesc: this.Appliancesdesc,
          appliancesmodel: this.Appliancesmodel,
          appliancesyear: this.Appliancesyear,
          appliancesIDNo: this.AppliancesIDNo,
          appliancesSumInsured: this.AppliancesSumInsured,
          locationwithinpremises: this.locationwithinpremises,
          dimensions: this.dimensions,
          fixedplatessum: this.fixedplatessum,
          lossofrent: this.lossofrent,
          additionalrent: this.additionalrent,
          pedigreeinsu: this.pedigreeinsu,
          baggageinsu: this.baggageinsu,
          noofservents: this.noofservents,
          natureofwork: this.natureofwork,
          estimatedwages: this.estimatedwages,
          addressofinsurancecom: this.addressofinsurancecom,
          itemalreadyinsured: this.Itemalreadyinsured,
          policynumber: this.Policynumber,
          insurancecompname: this.insurancecompname,
          periodofinsurance: this.Periodofinsurance,
          sourceoffund: this.sourceoffund,
          paymenttype: this.paymenttype,
          chequeno: this.chequeno,
          paymentdated: this.paymentdated,
          bankName: this.BankName,
          paymentamount: this.paymentamount,
          paymentamtinwords: this.paymentamtinwords,
          lowlyingarea: this.lowlyingarea,
          areaprone: this.areaprone,
          floddprone: this.floddprone,
          coveragefortenant: this.coveragefortenant,
          lockkeyopt: this.lockkeyopt,
          coverageextinguish: this.coverageextinguish,
          terrorismopt: this.terrorismopt,
          coverlossofdocs: this.coverlossofdocs,
          coverexpensesforhousehold: this.coverexpensesforhousehold,
          independenthouse: this.independenthouse,
          apartment: this.apartment,
          flatsconnected: this.flatsconnected,
          classofConst: this.SelectedClassofConst,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          CustomerId: this.customerid,
          UserId: this.uid,
          Role: this.roleid,
          IsAllFileldsFilled: true,
          ProductId: 2,
          LoanIdORInsuranceId: 2,
          ApplicationType: "Customer",
          URL: "HomeInsurance",
          SendCopytoSP: this.SendCopytoSP,
          ProsperityId: this.ProposID,

  
        }
        this.homeinsuranceservice.SaveHomeInsurance(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Home Insurance Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
  
              if (localStorage.getItem("editinsuranceform") != "false") {
                this.stepper1.selectedIndex = 3
  
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
    else{
      this.submitted = true;

      if (this.homeinsuranceform.invalid) {
        return;
      }
      else if (this.SelectedClassofConst == null || this.SelectedClassofConst == undefined) {
        alert("Please select Class of construction")
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        this.spinner.show()
        var data = {
          propaddress: this.propaddress,
          yearofconstr: this.yearofconstr,
          builtuparea: this.builtuparea,
          suminsuredbuildingval: this.suminsuredbuildingval,
          nameoffinancier: this.nameoffinancier,
          sumcontentinsured: this.sumcontentinsured,
          distfromwater: this.distfromwater,
          locationofprop: this.locationofprop,
          buildingstructure: this.buildingstructure,
          undergroundservices: this.undergroundservices,
          buildingtotal: this.buildingtotal,
          valueablesdesc: this.Valueablesdesc,
          valueablesquantity: this.Valueablesquantity,
          valueablessuminsured: this.Valueablessuminsured,
          valueablesweight: this.Valueablesweight,
          appliancesdesc: this.Appliancesdesc,
          appliancesmodel: this.Appliancesmodel,
          appliancesyear: this.Appliancesyear,
          appliancesIDNo: this.AppliancesIDNo,
          appliancesSumInsured: this.AppliancesSumInsured,
          locationwithinpremises: this.locationwithinpremises,
          dimensions: this.dimensions,
          fixedplatessum: this.fixedplatessum,
          lossofrent: this.lossofrent,
          additionalrent: this.additionalrent,
          pedigreeinsu: this.pedigreeinsu,
          baggageinsu: this.baggageinsu,
          noofservents: this.noofservents,
          natureofwork: this.natureofwork,
          estimatedwages: this.estimatedwages,
          addressofinsurancecom: this.addressofinsurancecom,
          itemalreadyinsured: this.Itemalreadyinsured,
          policynumber: this.Policynumber,
          insurancecompname: this.insurancecompname,
          periodofinsurance: this.Periodofinsurance,
          sourceoffund: this.sourceoffund,
          paymenttype: this.paymenttype,
          chequeno: this.chequeno,
          paymentdated: this.paymentdated,
          bankName: this.BankName,
          paymentamount: this.paymentamount,
          paymentamtinwords: this.paymentamtinwords,
          lowlyingarea: this.lowlyingarea,
          areaprone: this.areaprone,
          floddprone: this.floddprone,
          coveragefortenant: this.coveragefortenant,
          lockkeyopt: this.lockkeyopt,
          coverageextinguish: this.coverageextinguish,
          terrorismopt: this.terrorismopt,
          coverlossofdocs: this.coverlossofdocs,
          coverexpensesforhousehold: this.coverexpensesforhousehold,
          independenthouse: this.independenthouse,
          apartment: this.apartment,
          flatsconnected: this.flatsconnected,
          classofConst: this.SelectedClassofConst,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          CustomerId: this.uid,
          UserId: this.uid,
          Role: this.roleid,
          IsAllFileldsFilled: true,
          ProductId: 2,
          LoanIdORInsuranceId: 2,
          ApplicationType: "Customer",
          URL: "HomeInsurance",
          SendCopytoSP: this.SendCopytoSP,
          ProsperityId: this.ProposID,

        }
        this.homeinsuranceservice.SaveHomeInsurance(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Home Insurance Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
  
            if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.router.navigate(['/HomeInsuranceDetails'])
            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.router.navigate(['/HomeInsuranceDetails'])
            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
              this.stepper1.selectedIndex = 3
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

  fieldArrayDeductions: Array<any> = [];
  newdedctAttribute: any = {};
  public fieldArray: Array<any> = [];
  public fieldArrayMove: Array<any> = [];
  public newAttribute: any = {};
  public carAttribute: any = {};
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
    this.fieldArrayMove.push(this.carAttribute)
    this.carAttribute = {};
  }
  addFieldValue() {
    // this.newAttribute.banktypeid = this.selectedbanktype;
    // this.selectedbanktype = null
    // this.fieldArray.push(this.newAttribute)
    // this.newAttribute = {};
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
  }

  deleteFieldcarValue(index) {
    this.fieldArrayMove.splice(index, 1);
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  OnSelectheight(data: any) {
    this.Qty = data.number * data.length * data.breadth * data.height;
    for (var i = 0; i < this.fieldArray.length; i++) {
      if (this.fieldArray[i].itemdescription == data.itemdescription) {
        this.fieldArray[i].Qty = this.Qty;
      }
    }
  }

  OnSelectdedctheight(data: any) {
    this.dedtQty = data.dedctnumber * data.dedctlength * data.dedctbreadth * data.dedctheight;
    for (var i = 0; i < this.fieldArrayDeductions.length; i++) {
      if (this.fieldArrayDeductions[i].dedctitemdescription == data.dedctitemdescription) {
        this.fieldArrayDeductions[i].dedctQty = this.dedtQty;
      }
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
        Role: this.role,
        SendCopytoSP: this.SendCopytoSP,

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
        Role: this.role,
        SendCopytoSP: this.SendCopytoSP,

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
    var aa = this.SendCopytoSP;
   
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
          Role: this.role,
          SendCopytoSP: this.SendCopytoSP,

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
              alert("Certificates Uploaded Successfully")
              this.spinner.hide();
              if (localStorage.getItem("editinsuranceform") != "false") {
                this.stepper1.selectedIndex = 3

              }

              else {
                this.GetDraftData();

              }
              // this.enablepreview = true
              // this.router.navigate(['/badashboard']);
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
          ProsperityId: this.ProposID,
          Role: this.role,
          SendCopytoSP: this.SendCopytoSP,

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
              alert("Certificates Uploaded Successfully")
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.router.navigate(['/HomeInsuranceDetails'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.router.navigate(['/HomeInsuranceDetails'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 3
              }
              else {
                this.GetDraftData();
              }
              this.spinner.hide();
              this.enablepreview = true
              // this.router.navigate(['/customerdashboard']);
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


    this.router.navigate(['fileview/'])
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
      ReligionOther: this.religiondetail,
      OccupationOther: this.occupatoiondetail,
      Casteother: this.castedetail,
      Qualificationother: this.qualificationdetail,
      Designationother: this.designationd,
      Race: this.casteid,
      Religion: this.rid,
      TickedId: this.ticketid,
      IsAllFileldsFilled: false,
      PermanentSameasResidential: this.PermanentSameasResidential,
      ProductId: 2,
      LoanIdORInsuranceId: 2,
      ApplicationType: "Customer",
      URL: "HomeInsurance",
      Role: this.role,
      UserId: this.uid,
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
    this.businessloanservice.GetHomeInsuranceDraftdata(sendid).subscribe((data1: any) => {
      let data = JSON.parse(data1,this.toCamelCase);

      this.spinner.hide();
      this.customerid = data.userId
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
  
      else if (data.count == 1 && data.bankIdentityDetails == null) {
        this.stepper1.selectedIndex = 1;
      }
      else if (data.count == 1 && data.bankIdentityDetails != null) {
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
        this.stepper1.selectedIndex = 1;

      }
      else if (data.count == 2 && data.homeInsuranceDetails != null) {
        this.propaddress=data.homeInsuranceDetails.propaddress
        this.yearofconstr=data.homeInsuranceDetails.yearofconstr
        this.builtuparea=data.homeInsuranceDetails.builtuparea
        this.suminsuredbuildingval=data.homeInsuranceDetails.suminsuredbuildingval
        this.nameoffinancier=data.homeInsuranceDetails.nameoffinancier
        this.sumcontentinsured=data.homeInsuranceDetails.sumcontentinsured
        this.distfromwater=data.homeInsuranceDetails.distfromwater
        this.locationofprop=data.homeInsuranceDetails.locationofprop
        this.buildingstructure=data.homeInsuranceDetails.buildingstructure
        this.undergroundservices=data.homeInsuranceDetails.undergroundservices
        this.buildingtotal=data.homeInsuranceDetails.buildingtotal
        this.Valueablesdesc=data.homeInsuranceDetails.valueablesdesc
        this.Valueablesquantity=data.homeInsuranceDetails.valueablesquantity
        this.Valueablessuminsured=data.homeInsuranceDetails.valueablessuminsured
        this.Valueablesweight=data.homeInsuranceDetails.valueablesweight
        this.Appliancesdesc=data.homeInsuranceDetails.appliancesdesc
        this.Appliancesmodel=data.homeInsuranceDetails.appliancesmodel
        this.Appliancesyear=data.homeInsuranceDetails.appliancesyear
        this.AppliancesIDNo=data.homeInsuranceDetails.appliancesIDNo
        this.AppliancesSumInsured=data.homeInsuranceDetails.appliancesSumInsured
        this.locationwithinpremises=data.homeInsuranceDetails.locationwithinpremises
        this.dimensions=data.homeInsuranceDetails.dimensions
        this.fixedplatessum=data.homeInsuranceDetails.fixedplatessum
        this.lossofrent=data.homeInsuranceDetails.lossofrent
        this.additionalrent=data.homeInsuranceDetails.additionalrent
        this.pedigreeinsu=data.homeInsuranceDetails.pedigreeinsu
        this.baggageinsu=data.homeInsuranceDetails.baggageinsu
        this.noofservents=data.homeInsuranceDetails.noofservents
        this.natureofwork=data.homeInsuranceDetails.natureofwork
        this.estimatedwages=data.homeInsuranceDetails.estimatedwages
        this.addressofinsurancecom=data.homeInsuranceDetails.addressofinsurancecom
        this.Itemalreadyinsured=data.homeInsuranceDetails.itemalreadyinsured
        this.Policynumber=data.homeInsuranceDetails.policynumber
        this.insurancecompname=data.homeInsuranceDetails.insurancecompname
        this.Periodofinsurance=data.homeInsuranceDetails.periodofinsurance
        this.sourceoffund=data.homeInsuranceDetails.sourceoffund
        this.paymenttype=data.homeInsuranceDetails.paymenttype
        this.chequeno=data.homeInsuranceDetails.chequeno
        this.paymentdated=data.homeInsuranceDetails.paymentdated
        this.BankName=data.homeInsuranceDetails.bankName
        this.paymentamount=data.homeInsuranceDetails.paymentamount
        this.paymentamtinwords=data.homeInsuranceDetails.paymentamtinwords
        this.lowlyingarea=data.homeInsuranceDetails.lowlyingarea
        this.areaprone=data.homeInsuranceDetails.areaprone
        this.floddprone=data.homeInsuranceDetails.floddprone
        this.coveragefortenant=data.homeInsuranceDetails.coveragefortenant
        this.lockkeyopt=data.homeInsuranceDetails.lockkeyopt
        this.coverageextinguish=data.homeInsuranceDetails.coverageextinguish
        this.terrorismopt=data.homeInsuranceDetails.terrorismopt
        this.coverlossofdocs=data.homeInsuranceDetails.coverlossofdocs
        this.coverexpensesforhousehold=data.homeInsuranceDetails.coverexpensesforhousehold
        this.independenthouse=data.homeInsuranceDetails.independenthouse
        this.apartment=data.homeInsuranceDetails.apartment
        this.flatsconnected=data.homeInsuranceDetails.flatsconnected
        this.stepper1.selectedIndex=2;

      }
      else if (data.count == 2 && data.homeInsuranceDetails == null) {
        this.stepper1.selectedIndex=2;

      }
  
      else if (data.count == 3 && data.certificateDetails == null) {
        this.stepper1.selectedIndex = 3;

      }
      else if (data.count == 3 && data.certificateDetails != null) {
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
        this.stepper1.selectedIndex = 3;
      }
    })
  }
  previewinsurancedetails(){
    if(this.ticketid==null){
      this.ticketid=this.ProposID
    }

    localStorage.setItem("previewticketid",this.customerid+ ","+ this.ticketid);
    this.router.navigate(['previewinsurancedetails/' + "home"]);
  }
  submitloanform(){
    
  }
  async GetEditData() {
    if (this.ticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.ticketid

    }
    this.spinner.show();
    this.businessloanservice.GetEditDetailsforHomeInsurance(sendid).subscribe((data: any) => {
      this.spinner.hide();
      this.customerid = data.userId
      if (data.userBasicDetailsDetails != null) {

        this.firstname = data.userBasicDetailsDetails.firstName;
        this.middlename = data.userBasicDetailsDetails.middleName;
        this.lastname = data.userBasicDetailsDetails.lastName;
        this.placeofbirth = data.userBasicDetailsDetails.placeOfBirth;
        this.genderid = data.userBasicDetailsDetails.gender;
        this.martid = data.userBasicDetailsDetails.maritalStatus;
        this.Number = data.userBasicDetailsDetails.mobileNum;
        this.dateofbirth = this.datepipe.transform(data.userBasicDetailsDetails.dateOfBirth, 'yyyy-MM-dd');
        this.rid = data.userBasicDetailsDetails.religion;
        this.casteid = data.userBasicDetailsDetails.race;
        this.quaid = data.userBasicDetailsDetails.qualification;
        this.occuid = data.userBasicDetailsDetails.occupation;
        this.email = data.userBasicDetailsDetails.email;
        this.desid = data.userBasicDetailsDetails.designation;
        this.street = data.userBasicDetailsDetails.residentialLineTwo;
        this.city = data.userBasicDetailsDetails.residentialLineOne;
        this.district = data.userBasicDetailsDetails.residentialDistrict;
        this.pincode = data.userBasicDetailsDetails.residentialPincode;
        this.state = data.userBasicDetailsDetails.residentialState;
        this.country = data.userBasicDetailsDetails.residentialCountry;
        this.stateone = data.userBasicDetailsDetails.permanentState;
        this.countryone = data.userBasicDetailsDetails.permanentCountry;
        this.postalcode = data.userBasicDetailsDetails.permanentPincode;
        this.adressone = data.userBasicDetailsDetails.permanentLineOne;
        this.adresstwo = data.userBasicDetailsDetails.permanentLineTwo;
        this.districtone = data.userBasicDetailsDetails.permanentDistrict;
        this.PermanentSameasResidential = data.userBasicDetailsDetails.permanentSameasResidential;
        if (data.userBasicDetailsDetails.casteother != null) {
          this.othercastedetails = true;
          this.castedetail = data.userBasicDetailsDetails.casteother
        }
        if (data.userBasicDetailsDetails.religionOther != null) {
          this.othereligiondetails = true;
          this.religiondetail = data.userBasicDetailsDetails.religionOther
        }
        if (data.userBasicDetailsDetails.qualificationother != null) {
          this.otherequalification = true;
          this.qualificationdetail = data.userBasicDetailsDetails.qualificationother
        }
        if (data.userBasicDetailsDetails.occupationOther != null) {
          this.othersoccupation = true;
          this.occupatoiondetail = data.userBasicDetailsDetails.occupationOther
        }
        if (data.userBasicDetailsDetails.designationother != null) {
          this.otherdesignation = true;
          this.designationd = data.userBasicDetailsDetails.designationother
        }
      }

       if (data.userBankandIdentityDetails != null) {
        for (let index = 0; index < data.userBankandIdentityDetails.bankdetails.length; index++) {
          this.fieldArray.push(data.userBankandIdentityDetails.bankdetails[index])
        }
        this.bankdocs = data.userBankandIdentityDetails.alldocuments
        if (this.bankdocs.length != 0) {
          this.bankdocsexist = true
        }
        this.rationcardnum = data.userBankandIdentityDetails.rationCardNum
        this.aadharnum = data.userBankandIdentityDetails.aadharNum
        this.voternum = data.userBankandIdentityDetails.voterId
        this.pannumber = data.userBankandIdentityDetails.panNum
        this.servicetax = data.userBankandIdentityDetails.serviceTaxNum
        this.passportnum = data.userBankandIdentityDetails.passportNum
        this.lifeinsurance = data.userBankandIdentityDetails.lifeInsuranceValue
        this.minordob = data.userBankandIdentityDetails.bankAccountType
        this.IsConfirm = data.userBankandIdentityDetails.isConfirm

      }
    
       if (data.userHomeInsuranceDetails != null) {
        this.propaddress=data.userHomeInsuranceDetails.propaddress
        this.yearofconstr=data.userHomeInsuranceDetails.yearofconstr
        this.builtuparea=data.userHomeInsuranceDetails.builtuparea
        this.suminsuredbuildingval=data.userHomeInsuranceDetails.suminsuredbuildingval
        this.nameoffinancier=data.userHomeInsuranceDetails.nameoffinancier
        this.sumcontentinsured=data.userHomeInsuranceDetails.sumcontentinsured
        this.distfromwater=data.userHomeInsuranceDetails.distfromwater
        this.locationofprop=data.userHomeInsuranceDetails.locationofprop
        this.buildingstructure=data.userHomeInsuranceDetails.buildingstructure
        this.undergroundservices=data.userHomeInsuranceDetails.undergroundservices
        this.buildingtotal=data.userHomeInsuranceDetails.buildingtotal
        this.Valueablesdesc=data.userHomeInsuranceDetails.valueablesdesc
        this.Valueablesquantity=data.userHomeInsuranceDetails.valueablesquantity
        this.Valueablessuminsured=data.userHomeInsuranceDetails.valueablessuminsured
        this.Valueablesweight=data.userHomeInsuranceDetails.valueablesweight
        this.Appliancesdesc=data.userHomeInsuranceDetails.appliancesdesc
        this.Appliancesmodel=data.userHomeInsuranceDetails.appliancesmodel
        this.Appliancesyear=data.userHomeInsuranceDetails.appliancesyear
        this.AppliancesIDNo=data.userHomeInsuranceDetails.appliancesIDNo
        this.AppliancesSumInsured=data.userHomeInsuranceDetails.appliancesSumInsured
        this.locationwithinpremises=data.userHomeInsuranceDetails.locationwithinpremises
        this.dimensions=data.userHomeInsuranceDetails.dimensions
        this.fixedplatessum=data.userHomeInsuranceDetails.fixedplatessum
        this.lossofrent=data.userHomeInsuranceDetails.lossofrent
        this.additionalrent=data.userHomeInsuranceDetails.additionalrent
        this.pedigreeinsu=data.userHomeInsuranceDetails.pedigreeinsu
        this.baggageinsu=data.userHomeInsuranceDetails.baggageinsu
        this.noofservents=data.userHomeInsuranceDetails.noofservents
        this.natureofwork=data.userHomeInsuranceDetails.natureofwork
        this.estimatedwages=data.userHomeInsuranceDetails.estimatedwages
        this.addressofinsurancecom=data.userHomeInsuranceDetails.addressofinsurancecom
        this.Itemalreadyinsured=data.userHomeInsuranceDetails.itemalreadyinsured
        this.Policynumber=data.userHomeInsuranceDetails.policynumber
        this.insurancecompname=data.userHomeInsuranceDetails.insurancecompname
        this.Periodofinsurance=data.userHomeInsuranceDetails.periodofinsurance
        this.sourceoffund=data.userHomeInsuranceDetails.sourceoffund
        this.paymenttype=data.userHomeInsuranceDetails.paymenttype
        this.chequeno=data.userHomeInsuranceDetails.chequeno
        this.paymentdated=data.userHomeInsuranceDetails.paymentdated
        this.BankName=data.userHomeInsuranceDetails.bankName
        this.paymentamount=data.userHomeInsuranceDetails.paymentamount
        this.paymentamtinwords=data.userHomeInsuranceDetails.paymentamtinwords
        this.lowlyingarea=data.userHomeInsuranceDetails.lowlyingarea
        this.areaprone=data.userHomeInsuranceDetails.areaprone
        this.floddprone=data.userHomeInsuranceDetails.floddprone
        this.coveragefortenant=data.userHomeInsuranceDetails.coveragefortenant
        this.lockkeyopt=data.userHomeInsuranceDetails.lockkeyopt
        this.coverageextinguish=data.userHomeInsuranceDetails.coverageextinguish
        this.terrorismopt=data.userHomeInsuranceDetails.terrorismopt
        this.coverlossofdocs=data.userHomeInsuranceDetails.coverlossofdocs
        this.coverexpensesforhousehold=data.userHomeInsuranceDetails.coverexpensesforhousehold
        this.independenthouse=data.userHomeInsuranceDetails.independenthouse
        this.apartment=data.userHomeInsuranceDetails.apartment
        this.flatsconnected=data.userHomeInsuranceDetails.flatsconnected
      }
  
       if (data.certificateDetails != null && data.certificateDetails.length != 0) {
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
       
        else if (this.editformname == "bank") {
          this.stepper1.selectedIndex = 1;

        }
   
        else if (this.editformname == "home") {
          this.stepper1.selectedIndex =2;

        }
        else if (this.editformname == "certificates") {
          this.stepper1.selectedIndex = 3;

        }
      }
    })
  }





  submitInsuranceform() {
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
      RequestType:23,
      Information:"Home Insurance"


    }
    this.spinner.show();
    this.businessloanservice.SubmitInsuranceForm(cdata).subscribe((data: any) => {
      if (data == "ok") {
        if(this.role == '1008'){
          alert("Home Insurance Form Submitted Successfully!!")
          this.router.navigate(['/badashboard']);

        }
        else{
          alert("Home Insurance Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
          this.router.navigate(['/customerdashboard']);

        }
        localStorage.setItem("editinsuranceform","false")
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

  ViewBankFamDoc(file) {
    localStorage.removeItem('Pdffile');
    localStorage.removeItem('DocType');
    localStorage.removeItem('UploadedDate');
    localStorage.removeItem('FileType');
    localStorage.removeItem('FileName');
    localStorage.removeItem('File');

    console.log(file);
    this.spinner.show();
    localStorage.setItem('File', file.file);
    localStorage.setItem('FileName', file.documentName);
    localStorage.setItem('Pdffile', file.pdfFile);
    localStorage.setItem('DocType', file.documentType);
    localStorage.setItem('UploadedDate', file.date);


    this.router.navigate(['fileview/'])
  }
}
export class DynamicGrid {
  title1: string;
  title2: string;
  title3: string;
}


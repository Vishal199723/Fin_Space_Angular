import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DetailsformService } from '../Shared/detailsform.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { DatePipe } from '@angular/common';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { CountryService } from '../Shared/country.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-termlifeinsurance',
  templateUrl: './termlifeinsurance.component.html',
  styleUrls: ['./termlifeinsurance.component.css']
})
export class TermlifeinsuranceComponent implements OnInit {
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
  gstnumber: any;
  partnerage: any;
  pastexperience: any;
  residentialaddress: any;
  partnerproprietor: any;
  technicallyqualified: any;
  lineofactivity: any;
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
  sales: any;
  netprofit: any;
  remarks: any;
  Anticipatedyear: any;
  antisales: any;
  antinet: any;
  antiremarks: any;
  turnover: any;
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
  limitsremar: any; selectedchequetype: any;
  selectedchequetypeid: any;
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
  Nomineetype: string;
  Nagedob: any
  minormiddname: any;
  minorlastname: any;
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
  Balance: any;
  finishloan: any;
  modelname: any;
  Agreed: any;
  Registration: any;
  owner: any;
  acnumber: any;
  cashloan: any;
  vehical: any;
  postalcode: any;
  adressone: any;
  adresstwo: any;


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
  deposite: any;
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
  easttowest: any;
  south: any;
  east: any;
  west: any;
  ancestral: any;
  encumbered: any;
  salary: any;
  satory: any;
  deductions: any;
  incomesource: any;
  mother: any;
  motherage: any;
  fatherage: any;
  north: any;
  PermanentSameasResidential: any;
  husband: any;
  sonsage: any;
  daughters: any;
  brotherage: any;
  daughterage: any;
  Sisters: any;
  sisterage: any;
  Grandsons: any;
  northtosouth: any;
  Grandsonage: any;
  Brotherson: any;
  proaddress: boolean;
  candidate: any;
  letter: any;
  Fees: any;
  whom: any;
  Mortgagor: any;
  made: any;
  copies: any;
  institution: any;
  proposed: any;
  obtained: any;
  brothers: any;

  Brothersonage: any;
  stateone: any;
  countryone: any;
  districtone: any;
  talukone: any;
  address: any;
  Construction: boolean;
  totalarea: any;
  Roofing: any;
  sanitary: any;
  savings: any;
  stock: any;
  building: any;
  Presentstate: any;
  Flooring: any;
  Foundation: any;
  estimate: any;
  classfield: any;
  persquare: any;
  Squares: any;
  area: any;
  ntos: any;
  sameadress: boolean;
  newadress: boolean = true;
  dedtQty: number;
  Qty: number;
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  bankid: any;
  bankfrom: any;
  Accumulation: any;
  escalation: any;
  unable: any;
  advance: any;
  expected: any;
  house: any;
  rental: any;
  consumer: any;
  durable: any;
  Others: any;
  financial: any;
  Refundable: any;
  fundpro: any;
  hand: any;
  preowner: any;
  purchase: any;
  Land: any;
  builds: any;
  paid: any;
  moped: any;
  schcolg: any;
  classdata: any;
  children: any;
  amtrs: any;
  Probable: any;
  proposedata: any;
  entered: any;
  Squaresed: any;
  coming: any;
  respect: any;
  petrol: any;
  Telephone: any;
  Entertainment: any;
  monthcome: any;
  over: any;
  Expenditure: any;
  Education: any;
  household: any;
  Personval: any;
  Personthredta: any;
  Personthree: any;
  Pertwodta: any;
  Persontwodta: any;
  Persontwo: any;
  Persondata: any;
  Personone: any;
  Person: any;
  incomedata: any;
  amout: any;
  ontherdata: any;
  monthdata: any;
  annualcant: any;
  Investment: any;
  monthinc: any;
  incant: any;
  Agriculture: any;
  Monthly: any;
  annualin: any;
  rent: any;
  conveyance: any;

  formalities: any;
  Conditions: any;
  Sanctioned: any;
  Resolution: any;
  Eligibility: any;
  Renovation: any;
  existing: any;
  Report: any;
  Opinion: any;
  applied: any;
  remittance: any;
  Legal: any;
  comment: any;
  Net: any;
  employedat: any;
  Details: any;
  obligant: any;
  annum: any;
  casefield: any;
  left: any;
  arrangement: any;
  employeee: any;
  cheques: any;
  commitment: any;
  regarding: any;
  recommended: any;
  properties: any;
  about: any;
  etow: any;
  Sons: any;
  wife: any;
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
  userImage: any;
  ncountry: any;
  Ndistrict: any;
  minorstate: any;
  minorcountry: any;
  minordistrict: any;
  minoraddress1: any
  minorpincode: any
  Naddress2: any;
  Npincode: any;
  SelectedAadharFiles: string;
  SelectedVoterIdFiles: string;
  SelectedPassportFiles: string;
  SelectedGSTCertFiles: string;
  SelectedITReturnsFiles: string;
  SelectedBankStatementsFiles: string;
  selectedbanktype: any;
  Turnover: any;
  Salesdata: any;
  ticketid: string;
  role: any;
  customerid: any;
  turnon: any;
  accno: any;
  bnknbrn: any;
  chkrdd: any;
  micrcode: any;
  rtrage: any;
  grpsize: any;
  bnkaccprf: any;
  amount: any;
  minage: any;
  maxage: any;
  covefffrm: any;
  dateofapp: any;
  proname: any;
  plcterms: any;
  sumins: any;
  overdrafts: any;
  prmapy: any;
  instofprm: any;
  gst: any;
  ttlprm: any;
  allempcov: any;
  lifeinsorpro: any;
  fammemb: any;
  causedeath: any;
  curage: any;
  ageofdeath: any;
  dateofcomm: any;
  dateofcomf: any;
  nxtren: any;
  memothrins: any;
  nmofins: any;
  dateofcovcsd: any;
  perofmem: any;
  othr: any;
  sumassured: any;
  prmfrq: any;
  modeofpay: any;
  customeridd: any;
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
  castedetail: any;
  religiondetail: any;
  qualificationdetail: any;
  designationd: any;
  occupatoiondetail: any;
  minorrelationshipforguardian: boolean;
  guardioanrelationshipwithminorid: any;
  GuardianSelectedAadharFiles: string;
  GuardianSelectedpanFiles: string;
  guardianname: any;
  guardioanrelationshipwithminor: any;
  othersoccupation: boolean;
  otherdesignation: boolean;
  otherequalification: boolean;
  othereligiondetails: boolean;
  othercastedetails: boolean;
  bankdocsexist: boolean = false;
  bankdocs: any = [];
  IsConfirm: any;
  CertificateDisplay: any=[];
  certificates: any;
  Aadharexist: boolean=false;
  Passportexist: boolean=false;
  GSTexist: boolean=false;
  ITexist: boolean=false;
  BankStatexist: boolean=false;
  VoterIDexist: boolean=false;
  certificatesexist: boolean;
  otherdocuments: any;
  otherdocumentname: any
  otherdocument: any
  otherdoctype: any;
  otherdocname: any;
  customerotherdocs: any = [];
  otherdocactualname: any;
  BirthCertificateexist: boolean = false;
  CasteCertificateexist: boolean = false;
  DegreeCertificateexist: boolean = false;
  MedicalCertificateexist: boolean = false;
  PGCertificateexist: boolean = false;
  SSCCertificateexist: boolean = false;
  ProposID: string;
  editformname: string;
  ProspectIdtoDisplydata: string;
  enablepreview: boolean= false;
  showsubmitbtn: boolean;
  get f() { return this.RegistrationForm.controls; }
  get d() { return this.DetailsForm.controls; }
  get k() { return this.terminsform.controls; }
  get n() { return this.homeDetailsForm.controls; }
  get b() { return this.BankDetailsForm.controls; }

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
    PermanentSameasResidential:new FormControl()
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
  terminsform = new FormGroup({
    accno: new FormControl(),
    bnknbrn: new FormControl(),
    chkrdd: new FormControl(),
    micrcode: new FormControl(),
    rtrage: new FormControl(),
    grpsize: new FormControl(),
    bnkaccprf: new FormControl(),
    amount: new FormControl(),
    minage: new FormControl(),
    maxage: new FormControl(),
    covefffrm: new FormControl(),
    dateofapp: new FormControl(),
    proname: new FormControl(),
    plcterms: new FormControl(),
    sumins: new FormControl(),
    overdrafts: new FormControl(),
    prmapy: new FormControl(),
    instofprm: new FormControl(),
    gst: new FormControl(),
    ttlprm: new FormControl(),
    lifeinsorpro: new FormControl(),
    fammemb: new FormControl(),
    causedeath: new FormControl(),
    curage: new FormControl(),
    ageofdeath: new FormControl(),
    dateofcomm: new FormControl(),
    dateofcomf: new FormControl(),
    nxtren: new FormControl(),
    dateofcovcsd: new FormControl(),
    nmofins: new FormControl(),
    othr: new FormControl(),
    perofmem: new FormControl(),
    SendCopytoSP: new FormControl()

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
  SendCopytoSP: any
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
      customerid: [''],
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
      PermanentSameasResidential:false
    })

    this.DetailsForm = formBuilder.group({
      customerid: [''],
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
      minormiddname: [''],
      minorlastname: [''],
      Nagedob: ['', Validators.required],
      guardianname: [''],
      guardioanrelationshipwithminor: ['']
    })

    this.terminsform = formBuilder.group({
      customerid: [''],
      turnon: [''],
      accno: ['', Validators.required],
      bnknbrn: ['', Validators.required],
      chkrdd: ['', Validators.required],
      micrcode: ['', Validators.required],
      rtrage: ['', Validators.required],
      grpsize: ['', Validators.required],
      bnkaccprf: ['', Validators.required],
      amount: ['', Validators.required],
      minage: ['', Validators.required],
      maxage: ['', Validators.required],
      covefffrm: ['', Validators.required],
      dateofapp: ['', Validators.required],
      proname: ['', Validators.required],
      plcterms: ['', Validators.required],
      sumins: ['', Validators.required],
      overdrafts: ['', Validators.required],
      prmapy: ['', Validators.required],
      instofprm: ['', Validators.required],
      gst: ['', Validators.required],
      ttlprm: ['', Validators.required],
      lifeinsorpro: ['', Validators.required],
      fammemb: ['', Validators.required],
      causedeath: ['', Validators.required],
      curage: ['', Validators.required],
      ageofdeath: ['', Validators.required],
      dateofcomm: ['', Validators.required],
      dateofcomf: ['', Validators.required],
      nxtren: ['', Validators.required],
      dateofcovcsd: ['', Validators.required],
      nmofins: ['', Validators.required],
      othr: ['', Validators.required],
      perofmem: ['', Validators.required],
      SendCopytoSP: false
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
    this.ProspectIdtoDisplydata = localStorage.getItem("ProspectIdtoDisplydata");
    this.editformname = localStorage.getItem("editinsuranceform")
    if(this.ProposID==null){
      this.ProposID = localStorage.getItem("ProspectIdtoDisplydata");
    }
    this.ProspectIdtoDisplydata = localStorage.getItem("ProspectIdtoDisplydata");
    if (this.editformname == "personal") {
      this.GetEditData();

    }
  
    else if (this.editformname == "bank") {
      this.GetEditData();

    }
  
    else if (this.editformname == "termloan") {
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

  ngOnInit() {
    this.showsubmitbtn = false;
    var custid = localStorage.setItem("customerId", this.customerid);
    if (custid == undefined) {
      this.customerid = null;
    }
    else {
      this.customerid = localStorage.getItem("customerId");
    }
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
    // this.GetDraftData()
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
    this.Certificate();
    this.Getbankaccount();
    if (this.role != '1008') {
      this.GetCurrentUserImage();
      this.GetUserDetails();
    }
    this.GetServcieProvider();
    this.GetRelationShipTyes();
  }

  async GetRelationShipTyes() {
    this.spinner.show()
    await this.businessloanservice.getrelationshiptypedata().subscribe((response: any) => {
      this.RelationShipTyes = response;
      this.spinner.hide()
    });
  }
  async GetServcieProvider() {
    this.spinner.show()
    await this.serviceproviderservice.getservcieprovider(this.ticketid).subscribe((response: any) => {
      this.serviceprovidername = response;
      this.spinner.hide()

    });
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

  onSelectgender(data: any) {
    this.genderid = data
  }

  onSelectdelivery(data: any) {
    this.caid = data
  }

  onSelectrepayment(data: any) {
    this.martid = data
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

  GetCurrentUserImage() {
    this.spinner.show()
    this.userservice.getCurrentUSerImage(this.ticketid).subscribe((respose: any) => {
      this.userImage = respose;
      this.spinner.hide();
    });
  }

  GetUserDetails() {
    this.spinner.show();
    this.serviceproviderservice.GetUserDetails(this.ticketid).subscribe((data: any) => {
      this.AllUserData = data;
      this.pincode = this.AllUserData.postalCode;
      this.customeridd = this.AllUserData.userId;
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
    }
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
          ProductId: 2,
          LoanIdORInsuranceId: 6,
          ProsperityId :this.ProposID,
          ApplicationType: "Customer",
          URL: "termlifeinsurance",
          Role: this.role,
          UserId: this.uid,
        }
        this.businessloanservice.SaveBasicDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Personal Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData()
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
          LoanIdORInsuranceId: 6,
          ApplicationType: "Customer",
          URL: "termlifeinsurance",
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
          //  this.GetDraftData()
          if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
            this.route.navigate(['/termlifeinsurancedetails'])
          }
          else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
            this.route.navigate(['/termlifeinsurancedetails'])
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
  SaveBankDraft(stepper: MatStepper) {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    var data = {
      CustomerId: this.uid,
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
              // this.GetDraftData();
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/termlifeinsurancedetails'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/termlifeinsurancedetails'])
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

  fieldArrayDeductions: Array<any> = [];
  newdedctAttribute: any = {};
  public fieldArray: Array<any> = [];
  public fieldArrayMove: Array<any> = [];
  public newAttribute: any = { code: "", };
  public carAttribute: any = { code: "", };
  public documentArray: Array<any> = [];
  public newDocAttribute: any = { code: "", };

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
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldcarValue(index) {
    this.fieldArrayMove.splice(index, 1);
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

 

  terminsin(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;

      if (this.terminsform.invalid) {
        const invalid = [];
          const controls = this.terminsform.controls;
          for (const name in controls) {
              if (controls[name].invalid) {
                  invalid.push(name);
              }
          }
          console.log(invalid);
        return;
      }
  
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        UserId: this.uid,
        turnon: this.turnon,
        accno: this.accno,
        bnknbrn: this.bnknbrn,
        chkrdd: this.chkrdd,
        micrcode: this.micrcode,
        rtrage: this.rtrage,
        grpsize: this.grpsize,
        bnkaccprf: this.bnkaccprf,
        amount: this.amount,
        minage: this.minage,
        maxage: this.maxage,
        covefffrm: this.covefffrm,
        dateofapp: this.dateofapp,
        proname: this.proname,
        plcterms: this.plcterms,
        sumins: this.sumins,
        overdrafts: this.overdrafts,
        prmapy: this.prmapy,
        instofprm: this.instofprm,
        gst: this.gst,
        ttlprm: this.ttlprm,
        lifeinsorpro: this.lifeinsorpro,
        fammemb: this.fammemb,
        causedeath: this.causedeath,
        curage: this.curage,
        ageofdeath: this.ageofdeath,
        dateofcomm: this.dateofcomm,
        dateofcomf: this.dateofcomf,
        nxtren: this.nxtren,
        dateofcovcsd: this.dateofcovcsd,
        nmofins: this.nmofins,
        sumassured: this.sumassured,
        prmfrq: this.prmfrq,
        modeofpay: this.modeofpay,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        others: this.othr,
        perofmem: this.perofmem,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: true,
        ProsperityId: this.ProposID,
  
      }
      this.spinner.show();
      this.businessloanservice.SaveterminsDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Term Insurance Details Saved Successfully!!"
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
    else{
      this.submitted = true;

      if (this.terminsform.invalid) {
        const invalid = [];
          const controls = this.terminsform.controls;
          for (const name in controls) {
              if (controls[name].invalid) {
                  invalid.push(name);
              }
          }
          console.log(invalid);
        return;
      }
  
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        UserId: this.uid,
        turnon: this.turnon,
        accno: this.accno,
        bnknbrn: this.bnknbrn,
        chkrdd: this.chkrdd,
        micrcode: this.micrcode,
        rtrage: this.rtrage,
        grpsize: this.grpsize,
        bnkaccprf: this.bnkaccprf,
        amount: this.amount,
        minage: this.minage,
        maxage: this.maxage,
        covefffrm: this.covefffrm,
        dateofapp: this.dateofapp,
        proname: this.proname,
        plcterms: this.plcterms,
        sumins: this.sumins,
        overdrafts: this.overdrafts,
        prmapy: this.prmapy,
        instofprm: this.instofprm,
        gst: this.gst,
        ttlprm: this.ttlprm,
        lifeinsorpro: this.lifeinsorpro,
        fammemb: this.fammemb,
        causedeath: this.causedeath,
        curage: this.curage,
        ageofdeath: this.ageofdeath,
        dateofcomm: this.dateofcomm,
        dateofcomf: this.dateofcomf,
        nxtren: this.nxtren,
        dateofcovcsd: this.dateofcovcsd,
        nmofins: this.nmofins,
        sumassured: this.sumassured,
        prmfrq: this.prmfrq,
        modeofpay: this.modeofpay,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        others: this.othr,
        perofmem: this.perofmem,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: true,
        ProsperityId: this.ProposID,
  
      }
      this.spinner.show();
      this.businessloanservice.SaveterminsDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Term Insurance Details Saved Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          // this.GetDraftData();
          if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
            this.route.navigate(['/termlifeinsurancedetails'])
          }
          else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
            this.route.navigate(['/termlifeinsurancedetails'])
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
  SaveTermInDraft(stepper: MatStepper) {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
    var data = {
      CustomerId: this.uid,
      UserId: this.uid,
      turnon: this.turnon,
      accno: this.accno,
      bnknbrn: this.bnknbrn,
      chkrdd: this.chkrdd,
      micrcode: this.micrcode,
      rtrage: this.rtrage,
      grpsize: this.grpsize,
      bnkaccprf: this.bnkaccprf,
      amount: this.amount,
      minage: this.minage,
      maxage: this.maxage,
      covefffrm: this.covefffrm,
      dateofapp: this.dateofapp,
      proname: this.proname,
      plcterms: this.plcterms,
      sumins: this.sumins,
      overdrafts: this.overdrafts,
      prmapy: this.prmapy,
      instofprm: this.instofprm,
      gst: this.gst,
      ttlprm: this.ttlprm,
      lifeinsorpro: this.lifeinsorpro,
      fammemb: this.fammemb,
      causedeath: this.causedeath,
      curage: this.curage,
      ageofdeath: this.ageofdeath,
      dateofcomm: this.dateofcomm,
      dateofcomf: this.dateofcomf,
      nxtren: this.nxtren,
      dateofcovcsd: this.dateofcovcsd,
      nmofins: this.nmofins,
      sumassured: this.sumassured,
      prmfrq: this.prmfrq,
      modeofpay: this.modeofpay,
      CreatedBy: this.username,
      CreatedOn: latest_date,
      TickedId: this.ticketid,
      Role: this.role,
      others: this.othr,
      perofmem: this.perofmem,
      SendCopytoSP: this.SendCopytoSP,
      IsAllFileldsFilled: false,

    }
    this.spinner.show();

    this.businessloanservice.SaveterminsDetails(data).subscribe((data: any) => {
      if (data == "success") {
        this.notify = "Term Insurance Details Saved Successfully!!"
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



  onSelectsumassured(data: any) {
    this.sumassured = data;
  }
  onSelectprmfrqtype(data: any) {
    this.prmfrq = data;

  }
  onSelectmdofpytype(data: any) {
    this.modeofpay = data;
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
              this.showsubmitbtn = true;
              alert("Certificates Uploaded Successfully")
              this.spinner.hide();
              if (localStorage.getItem("editinsuranceform") != "false") {
                this.stepper1.selectedIndex = 3

              }

              else {
                this.GetDraftData();

              }
              // this.enablepreview = true
              // this.route.navigate(['/badashboard']);
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
              this.showsubmitbtn = true;
              alert("Certificates Uploaded Successfully")
              if (localStorage.getItem("editinsuranceform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
                this.route.navigate(['/Goldloandetails'])

              }
              else if(localStorage.getItem("editinsuranceform") != "false" && this.ticketid!=null){
                this.stepper1.selectedIndex = 5

              }
              this.spinner.hide();
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/termlifeinsurancedetails'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/termlifeinsurancedetails'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 3
              }
              else {
                this.GetDraftData();
              }
              // this.enablepreview = true
              // this.route.navigate(['/customerdashboard']);
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
  SaveBasicDraft() {
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
      LoanIdORInsuranceId: 6,
      ApplicationType: "Customer",
      URL: "termlifeinsurance",
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
    this.businessloanservice.GetTermInsuranceDraftdata(sendid).subscribe((data1: any) => {
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
      else if (data.count == 2 && data.termInsuranceDetails == null) {
        this.stepper1.selectedIndex = 2;

      }
      else if (data.count == 2 && data.termInsuranceDetails != null) {
        this.turnon= data.termInsuranceDetails.turnon,
        this.accno= data.termInsuranceDetails.accno,
        this.bnknbrn= data.termInsuranceDetails.bnknbrn,
        this.chkrdd= data.termInsuranceDetails.chkrdd,
        this.micrcode= data.termInsuranceDetails.micrcode,
        this.rtrage= data.termInsuranceDetails.rtrage,
        this.grpsize= data.termInsuranceDetails.grpsize,
        this.bnkaccprf= data.termInsuranceDetails.bnkaccprf,
        this.amount= data.termInsuranceDetails.amount,
        this.minage= data.termInsuranceDetails.minage,
        this.maxage= data.termInsuranceDetails.maxage,
        this.covefffrm= data.termInsuranceDetails.covefffrm,
        this.dateofapp= data.termInsuranceDetails.dateofapp,
        this.proname= data.termInsuranceDetails.proname,
        this.plcterms= data.termInsuranceDetails.plcterms,
        this.sumins= data.termInsuranceDetails.sumins,
        this.overdrafts= data.termInsuranceDetails.overdrafts,
        this.prmapy= data.termInsuranceDetails.prmapy,
        this.instofprm= data.termInsuranceDetails.instofprm,
        this.gst= data.termInsuranceDetails.gst,
        this.ttlprm= data.termInsuranceDetails.ttlprm,
        this.lifeinsorpro= data.termInsuranceDetails.lifeinsorpro,
        this.fammemb= data.termInsuranceDetails.fammemb,
        this.causedeath= data.termInsuranceDetails.causedeath,
        this.curage= data.termInsuranceDetails.curage,
        this.ageofdeath= data.termInsuranceDetails.ageofdeath,
        this.dateofcomm= data.termInsuranceDetails.dateofcomm,
        this.dateofcomf= data.termInsuranceDetails.dateofcomf,
        this.nxtren= data.termInsuranceDetails.nxtren,
        this.dateofcovcsd= data.termInsuranceDetails.dateofcovcsd,
        this.nmofins= data.termInsuranceDetails.nmofins,
        this.sumassured= data.termInsuranceDetails.sumassured,
        this.prmfrq= data.termInsuranceDetails.prmfrq,
        this.modeofpay= data.termInsuranceDetails.modeofpay,
        this.othr= data.termInsuranceDetails.others,
        this.perofmem= data.termInsuranceDetails.perofmem,
        this.stepper1.selectedIndex = 2;
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
    this.route.navigate(['previewinsurancedetails/' + "termloan"]);
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
    this.businessloanservice.GetEditDetailsforTermInsurance(sendid).subscribe((data: any) => {
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
    
       if (data.userTermInsuranceDetails != null) {
         
      
        this.turnon= data.userTermInsuranceDetails.turnon,
        this.accno= data.userTermInsuranceDetails.accno,
        this.bnknbrn= data.userTermInsuranceDetails.bnknbrn,
        this.chkrdd= data.userTermInsuranceDetails.chkrdd,
        this.micrcode= data.userTermInsuranceDetails.micrcode,
        this.rtrage= data.userTermInsuranceDetails.rtrage,
        this.grpsize= data.userTermInsuranceDetails.grpsize,
        this.bnkaccprf= data.userTermInsuranceDetails.bnkaccprf,
        this.amount= data.userTermInsuranceDetails.amount,
        this.minage= data.userTermInsuranceDetails.minage,
        this.maxage= data.userTermInsuranceDetails.maxage,
        this.covefffrm= data.userTermInsuranceDetails.covefffrm,
        this.dateofapp= data.userTermInsuranceDetails.dateofapp,
        this.proname= data.userTermInsuranceDetails.proname,
        this.plcterms= data.userTermInsuranceDetails.plcterms,
        this.sumins= data.userTermInsuranceDetails.sumins,
        this.overdrafts= data.userTermInsuranceDetails.overdrafts,
        this.prmapy= data.userTermInsuranceDetails.prmapy,
        this.instofprm= data.userTermInsuranceDetails.instofprm,
        this.gst= data.userTermInsuranceDetails.gst,
        this.ttlprm= data.userTermInsuranceDetails.ttlprm,
        this.lifeinsorpro= data.userTermInsuranceDetails.lifeinsorpro,
        this.fammemb= data.userTermInsuranceDetails.fammemb,
        this.causedeath= data.userTermInsuranceDetails.causedeath,
        this.curage= data.userTermInsuranceDetails.curage,
        this.ageofdeath= data.userTermInsuranceDetails.ageofdeath,
        this.dateofcomm= data.userTermInsuranceDetails.dateofcomm,
        this.dateofcomf= data.userTermInsuranceDetails.dateofcomf,
        this.nxtren= data.userTermInsuranceDetails.nxtren,
        this.dateofcovcsd= data.userTermInsuranceDetails.dateofcovcsd,
        this.nmofins= data.userTermInsuranceDetails.nmofins,
        this.sumassured= data.userTermInsuranceDetails.sumassured,
        this.prmfrq= data.userTermInsuranceDetails.prmfrq,
        this.modeofpay= data.userTermInsuranceDetails.modeofpay,
        this.othr= data.userTermInsuranceDetails.others,
        this.perofmem= data.userTermInsuranceDetails.perofmem
      
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
   
        else if (this.editformname == "termloan") {
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
      RequestType:26,
      Information:"Term Insurance"


    }
    this.spinner.show();
    this.businessloanservice.SubmitInsuranceForm(cdata).subscribe((data: any) => {
      if (data == "ok") {
        if(this.role == '1008'){
          alert("Term Insurance Form Submitted Successfully!!")
          this.route.navigate(['/badashboard']);

        }
        else{
          alert("Term Insurance Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
          this.route.navigate(['/customerdashboard']);

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


    this.route.navigate(['fileview/'])
  }
}
export class DynamicGrid {
  title1: string;
  title2: string;
  title3: string;
}


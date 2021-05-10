
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../Shared/country.service';
import { DetailsformService } from '../Shared/detailsform.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { MessageService } from '../MessageService/meaagse.service';


@Component({
  selector: 'app-fixedassetloan',
  templateUrl: './fixedassetloan.component.html',
  styleUrls: ['./fixedassetloan.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class FixedassetloanComponent implements OnInit {
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
  // RegistrationForm=new FormGroup({
  //   firstname: new FormControl(),

  // })
  submitted: boolean = false;
  Countries: any;
  countryid: any;
  editformname: string;

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
  Construction: any;
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
  incant: any; selectedchequetype: any;
  selectedchequetypeid: any;
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
  IsConfirm: any;
  castedetail: any;
  religiondetail: any;
  qualificationdetail: any;
  designationd: any;
  occupatoiondetail: any;
  PermanentSameasResidential: boolean;
  serviceprovidername: any;
  RelationShipTyes: any;
  relationshiptypeid: any;
  othersinrelationshiptypes: boolean;
  nominnemiddlename: any;
  nominnelastname: any;
  Nomineetype: string;
  otherdocuments: any;
  otherdocumentname: any
  otherdocument: any
  otherdoctype: any;
  enablepreview: boolean = false;

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
  guardioanrelationshipwithminorid: any;
  minorrelationshipforguardian: boolean;
  GuardianSelectedAadharFiles: string;
  GuardianSelectedpanFiles: string;
  guardianname: any;
  guardioanrelationshipwithminor: any;
  othersoccupation: boolean;
  otherdesignation: boolean;
  otherequalification: boolean;
  othereligiondetails: boolean;
  othercastedetails: boolean;
  familydocs: any = [];
  familydocsexist: boolean = false;
  showsubmitbtn: boolean;
  get f() { return this.RegistrationForm.controls; }
  get d() { return this.DetailsForm.controls; }
  get k() { return this.BankDetailsForm.controls; }
  get n() { return this.homeDetailsForm.controls; }
  get a() { return this.fixedassetloanForm.controls; }

  Nagedob: any
  minormiddname: any;
  minorlastname: any;
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
    PermanentSameasResidential: new FormControl(),
    // taluk: new FormControl(),
  });
  DetailsForm = new FormGroup({
    //customerid: new FormControl(),
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
    minormiddname: new FormControl(),
    minorlastname: new FormControl(),
    Nagedob: new FormControl(),
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

  fixedassetloanForm = new FormGroup({
    //customerid: new FormControl(),
    //purofloan: new FormControl(),
    //loama: new FormControl(),
    //support: new FormControl(),
    //Furnish: new FormControl(),
    //Dependencies: new FormControl(),
    //dependents: new FormControl(),
    repaying: new FormControl(),
    //policies: new FormControl(),
    Outstanding: new FormControl(),
    //loaamt: new FormControl(),
    purchased: new FormControl(),
    inclusive: new FormControl(),
    allowance: new FormControl(),
    //compensatory: new FormControl(),
    authorised: new FormControl(),
    payment: new FormControl(),
    delivery: new FormControl(),
    applicant: new FormControl(),
    towards: new FormControl(),
    value: new FormControl(),
    //particulars: new FormControl(),
    //Partnersloan: new FormControl(),
    //Turnover: new FormControl(),
    //cashloan: new FormControl(),
    //acnumber: new FormControl(),
    Balance: new FormControl(),
    Bank: new FormControl(),
    //hba: new FormControl(),
    modelname: new FormControl(),
    Agreed: new FormControl(),
    finishloan: new FormControl(),
    assessee: new FormControl(),
    earning: new FormControl(),
    employed: new FormControl(),
    concern: new FormControl(),
    located: new FormControl(),
    Activity: new FormControl(),
    under: new FormControl(),
    annualincome: new FormControl(),
    borrower: new FormControl(),
    Registration: new FormControl(),
    property: new FormControl(),
    //assetsdata: new FormControl(),
    //drawing: new FormControl(),
    benefit: new FormControl(),
    Relationship: new FormControl(),
    studying: new FormControl(),
    course: new FormControl(),
    evidence: new FormControl(),
    deposite: new FormControl(),
    Additional: new FormControl(),
    Account: new FormControl(),
    Membership: new FormControl(),
    Numbersb: new FormControl(),
    //Age: new FormControl(),
    Officedata: new FormControl(),
    //Salesdata: new FormControl(),
    Income: new FormControl(),
    operative: new FormControl(),
    Board: new FormControl(),
    Department: new FormControl(),
    Salary: new FormControl(),
    Domestic: new FormControl(),
    easttowest: new FormControl(),
    north: new FormControl(),
    south: new FormControl(),
    east: new FormControl(),
    west: new FormControl(),
    ancestral: new FormControl(),
    encumbered: new FormControl(),
    deductions: new FormControl(),
    salary: new FormControl(),
    incomesource: new FormControl(),
    properties: new FormControl(),
    satory: new FormControl(),
    northtosouth: new FormControl(),
    mother: new FormControl(),
    husband: new FormControl(),
    sonsage: new FormControl(),
    daughters: new FormControl(),
    daughterage: new FormControl(),
    brotherage: new FormControl(),
    Sisters: new FormControl(),
    sisterage: new FormControl(),
    Grandsons: new FormControl(),
    Grandsonage: new FormControl(),
    Brotherson: new FormControl(),
    motherage: new FormControl(),
    Brothersonage: new FormControl(),
    obtained: new FormControl(),
    proposed: new FormControl(),
    institution: new FormControl(),
    copies: new FormControl(),
    made: new FormControl(),
    fatherage: new FormControl(),
    Mortgagor: new FormControl(),
    whom: new FormControl(),
    candidate: new FormControl(),
    letter: new FormControl(),
    proaddress: new FormControl(),
    Fees: new FormControl(),
    Squares: new FormControl(),
    Construction: new FormControl(),
    totalarea: new FormControl(),
    Roofing: new FormControl(),
    Flooring: new FormControl(),
    hand: new FormControl(),
    financial: new FormControl(),
    Others: new FormControl(),
    savings: new FormControl(),
    fundpro: new FormControl(),
    Refundable: new FormControl(),
    stock: new FormControl(),
    building: new FormControl(),
    Presentstate: new FormControl(),
    sanitary: new FormControl(),
    Foundation: new FormControl(),
    estimate: new FormControl(),
    classfield: new FormControl(),
    persquare: new FormControl(),
    area: new FormControl(),
    ntos: new FormControl(),
    durable: new FormControl(),
    consumer: new FormControl(),
    bankfrom: new FormControl(),
    rental: new FormControl(),
    house: new FormControl(),
    expected: new FormControl(),
    advance: new FormControl(),
    unable: new FormControl(),
    escalation: new FormControl(),
    Accumulation: new FormControl(),
    preowner: new FormControl(),
    purchase: new FormControl(),
    coming: new FormControl(),
    Land: new FormControl(),
    builds: new FormControl(),
    Squaresed: new FormControl(),
    paid: new FormControl(),
    proposedata: new FormControl(),
    entered: new FormControl(),
    amtrs: new FormControl(),
    Probable: new FormControl(),
    children: new FormControl(),
    classdata: new FormControl(),
    schcolg: new FormControl(),
    moped: new FormControl(),
    rent: new FormControl(),
    monthinc: new FormControl(),
    ontherdata: new FormControl(),
    Personone: new FormControl(),
    amout: new FormControl(),
    incomedata: new FormControl(),
    Person: new FormControl(),
    Persontwo: new FormControl(),
    Personthredta: new FormControl(),
    Pertwodta: new FormControl(),
    Personval: new FormControl(),
    Personthree: new FormControl(),
    Persontwodta: new FormControl(),
    incant: new FormControl(),
    Investment: new FormControl(),
    Persondata: new FormControl(),
    annualcant: new FormControl(),
    Agriculture: new FormControl(),
    Monthly: new FormControl(),
    annualin: new FormControl(),
    conveyance: new FormControl(),
    respect: new FormControl(),
    household: new FormControl(),
    Education: new FormControl(),
    petrol: new FormControl(),
    Entertainment: new FormControl(),
    Telephone: new FormControl(),
    monthcome: new FormControl(),
    Repayment: new FormControl(),
    Expenditure: new FormControl(),
    over: new FormControl(),
    applied: new FormControl(),
    commitment: new FormControl(),
    recommended: new FormControl(),
    about: new FormControl(),
    regarding: new FormControl(),
    cheques: new FormControl(),
    left: new FormControl(),
    arrangement: new FormControl(),
    employeee: new FormControl(),
    Details: new FormControl(),
    annum: new FormControl(),
    obligant: new FormControl(),
    Net: new FormControl(),
    comment: new FormControl(),
    remittance: new FormControl(),
    Opinion: new FormControl(),
    Legal: new FormControl(),
    Report: new FormControl(),
    existing: new FormControl(),
    Resolution: new FormControl(),
    formalities: new FormControl(),
    Conditions: new FormControl(),
    Sanctioned: new FormControl(),
    Eligibility: new FormControl(),
    Renovation: new FormControl(),
    casefield: new FormControl(),
    etow: new FormControl(),
    brothers: new FormControl(),
    Sons: new FormControl(),
    wife: new FormControl(),
    SendCopytoSP: new FormControl(),

  });
  SendCopytoSP: any
  files1: any;
  SelectedFiles: string;
  validfile: boolean;
  editable: boolean = false;
  bankdocs: any = [];
  Aadharexist: boolean = false;
  Passportexist: boolean = false;
  GSTexist: boolean = false;
  ITexist: boolean = false;
  BankStatexist: boolean = false;
  VoterIDexist: boolean = false;
  bankdocsexist: boolean = false;
  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private http: HttpClient, private countryService: CountryService,
    private detailService: DetailsformService, private datepipe: DatePipe, private spinner: NgxSpinnerService,
    private userservice: UserDetailsService, private businessloanservice: BusinessLoanServiceService,
    private httpService: HttpClient, private serviceproviderservice: ServiceProviderService, private route: Router) {
      this.messageService.sendSession('true');

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
      PermanentSameasResidential: ['']
    })
    this.DetailsForm = formBuilder.group({
      //customerid: ['', Validators.required],
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
      customerid: ['', Validators.required],
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

    this.fixedassetloanForm = formBuilder.group({
      //customerid: ['', Validators.required],
      Grandsonage: ['', Validators.required],
      //purofloan: ['', Validators.required],
      //loama: ['', Validators.required],
      //support: ['', Validators.required],
      //Furnish: ['', Validators.required],
      //Dependencies: ['', Validators.required],
      //dependents: ['', Validators.required],
      repaying: ['', Validators.required],
      //policies: ['', Validators.required],
      Outstanding: ['', Validators.required],
      //loaamt: ['', Validators.required],
      purchased: ['', Validators.required],
      fatherage: ['', Validators.required],
      sonsage: ['', Validators.required],
      husband: ['', Validators.required],
      daughters: ['', Validators.required],
      daughterage: ['', Validators.required],
      Brotherson: ['', Validators.required],
      Brothersonage: ['', Validators.required],
      durable: ['', Validators.required],
      consumer: ['', Validators.required],
      Conditions: ['', Validators.required],
      formalities: ['', Validators.required],
      rental: ['', Validators.required],
      house: ['', Validators.required],
      monthdata: ['', Validators.required],
      ontherdata: ['', Validators.required],
      amout: ['', Validators.required],
      incomedata: ['', Validators.required],
      over: ['', Validators.required],
      Expenditure: ['', Validators.required],
      applied: ['', Validators.required],
      recommended: ['', Validators.required],
      commitment: ['', Validators.required],
      casefield: ['', Validators.required],
      Details: ['', Validators.required],
      annum: ['', Validators.required],
      obligant: ['', Validators.required],
      employedat: ['', Validators.required],
      employeee: ['', Validators.required],
      Net: ['', Validators.required],
      comment: ['', Validators.required],
      about: ['', Validators.required],
      remittance: ['', Validators.required],
      Legal: ['', Validators.required],
      Opinion: ['', Validators.required],
      Report: ['', Validators.required],
      Eligibility: ['', Validators.required],
      existing: ['', Validators.required],
      cheques: ['', Validators.required],
      Resolution: ['', Validators.required],
      Sanctioned: ['', Validators.required],
      left: ['', Validators.required],
      Renovation: ['', Validators.required],
      regarding: ['', Validators.required],
      arrangement: ['', Validators.required],
      Person: ['', Validators.required],
      Persontwo: ['', Validators.required],
      Persondata: ['', Validators.required],
      Personone: ['', Validators.required],
      Persontwodta: ['', Validators.required],
      Personthredta: ['', Validators.required],
      Personthree: ['', Validators.required],
      household: ['', Validators.required],
      Education: ['', Validators.required],
      petrol: ['', Validators.required],
      Telephone: ['', Validators.required],
      Entertainment: ['', Validators.required],
      Pertwodta: ['', Validators.required],
      monthcome: ['', Validators.required],
      Repayment: ['', Validators.required],
      respect: ['', Validators.required],
      Personval: ['', Validators.required],
      expected: ['', Validators.required],
      unable: ['', Validators.required],
      escalation: ['', Validators.required],
      Accumulation: ['', Validators.required],
      preowner: ['', Validators.required],
      purchase: ['', Validators.required],
      coming: ['', Validators.required],
      Land: ['', Validators.required],
      builds: ['', Validators.required],
      Squaresed: ['', Validators.required],
      paid: ['', Validators.required],
      entered: ['', Validators.required],
      moped: ['', Validators.required],
      annualcant: ['', Validators.required],
      proposedata: ['', Validators.required],
      Monthly: ['', Validators.required],
      Investment: ['', Validators.required],
      monthinc: ['', Validators.required],
      incant: ['', Validators.required],
      Agriculture: ['', Validators.required],
      annualin: ['', Validators.required],
      rent: ['', Validators.required],
      conveyance: ['', Validators.required],
      schcolg: ['', Validators.required],
      children: ['', Validators.required],
      classdata: ['', Validators.required],
      amtrs: ['', Validators.required],
      Probable: ['', Validators.required],
      advance: ['', Validators.required],
      bankfrom: ['', Validators.required],
      area: ['', Validators.required],
      Squares: ['', Validators.required],
      Construction: ['', Validators.required],
      totalarea: ['', Validators.required],
      classfield: ['', Validators.required],
      sanitary: ['', Validators.required],
      Flooring: ['', Validators.required],
      hand: ['', Validators.required],
      financial: ['', Validators.required],
      Others: ['', Validators.required],
      fundpro: ['', Validators.required],
      Refundable: ['', Validators.required],
      savings: ['', Validators.required],
      building: ['', Validators.required],
      stock: ['', Validators.required],
      Presentstate: ['', Validators.required],
      Roofing: ['', Validators.required],
      Foundation: ['', Validators.required],
      estimate: ['', Validators.required],
      persquare: ['', Validators.required],
      ntos: ['', Validators.required],
      obtained: ['', Validators.required],
      proposed: ['', Validators.required],
      Income: ['', Validators.required],
      institution: ['', Validators.required],
      copies: ['', Validators.required],
      made: ['', Validators.required],
      Mortgagor: ['', Validators.required],
      letter: ['', Validators.required],
      candidate: ['', Validators.required],
      proaddress: ['', Validators.required],
      etow: ['', Validators.required],
      Fees: ['', Validators.required],
      whom: ['', Validators.required],
      brotherage: ['', Validators.required],
      Sisters: ['', Validators.required],
      sisterage: ['', Validators.required],
      Grandsons: ['', Validators.required],
      motherage: ['', Validators.required],
      mother: ['', Validators.required],
      inclusive: ['', Validators.required],
      northtosouth: ['', Validators.required],
      easttowest: ['', Validators.required],
      north: ['', Validators.required],
      south: ['', Validators.required],
      east: ['', Validators.required],
      west: ['', Validators.required],
      ancestral: ['', Validators.required],
      incomesource: ['', Validators.required],
      satory: ['', Validators.required],
      salary: ['', Validators.required],
      deductions: ['', Validators.required],
      encumbered: ['', Validators.required],
      //compensatory: ['', Validators.required],
      allowance: ['', Validators.required],
      authorised: ['', Validators.required],
      payment: ['', Validators.required],
      delivery: ['', Validators.required],
      applicant: ['', Validators.required],
      towards: ['', Validators.required],
      value: ['', Validators.required],
      //particulars: ['', Validators.required],
      //Turnover: ['', Validators.required],
      //cashloan: ['', Validators.required],
      //Partnersloan: ['', Validators.required],
      //acnumber: ['', Validators.required],
      Bank: ['', Validators.required],
      //hba: ['', Validators.required],
      modelname: ['', Validators.required],
      Agreed: ['', Validators.required],
      finishloan: ['', Validators.required],
      Balance: ['', Validators.required],
      assessee: ['', Validators.required],
      earning: ['', Validators.required],
      employed: ['', Validators.required],
      concern: ['', Validators.required],
      located: ['', Validators.required],
      Activity: ['', Validators.required],
      under: ['', Validators.required],
      annualincome: ['', Validators.required],
      borrower: ['', Validators.required],
      Registration: ['', Validators.required],
      property: ['', Validators.required],
      //assetsdata: ['', Validators.required],
      //drawing: ['', Validators.required],
      benefit: ['', Validators.required],
      Relationship: ['', Validators.required],
      studying: ['', Validators.required],
      course: ['', Validators.required],
      evidence: ['', Validators.required],
      deposite: ['', Validators.required],
      Additional: ['', Validators.required],
      Account: ['', Validators.required],
      Membership: ['', Validators.required],
      Numbersb: ['', Validators.required],
      //Age: ['', Validators.required],
      Officedata: ['', Validators.required],
      Department: ['', Validators.required],
      //Salesdata: ['', Validators.required],
      operative: ['', Validators.required],
      Board: ['', Validators.required],
      Salary: ['', Validators.required],
      Domestic: ['', Validators.required],
      properties: ['', Validators.required],
      brothers: ['', Validators.required],
      Sons: ['', Validators.required],
      wife: ['', Validators.required],
      SendCopytoSP: false
    })


    //added
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
  else if (this.editformname == "fixedasset") {
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
    // this.GetDraftData();
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
  ifscrex = new RegExp(/^[A-Za-z]{4}[0-9]{6,7}$/);

  onSelectRelationType(data: any) {
    this.relationshiptypeid = data;
    if (data == 9) {
      this.othersinrelationshiptypes = true;
    }
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

  onSelectCaste(data: any) {
    this.casteid = data;
    if (data == 15) {
      this.othercastedetails = true;
    }
  }

  onSelectrelogion(data: any) {
    this.rid = data;
    if (data == 1010) {
      this.othereligiondetails = true;
    }
  }
  onSelectqualification(data: any) {
    this.quaid = data;
    if (data == 25) {
      this.otherequalification = true;
    }
  }
  onSelectdesignation(data: any) {
    this.desid = data;
    if (data == 9) {
      this.otherdesignation = true;
    }
  }

  onSelectoccupation(data: any) {
    this.occuid = data;
    if (data == 32) {
      this.othersoccupation = true;
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
      this.getalldata();
      this.customerid = this.AllUserData.userId;
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
          ReligionOther: this.religiondetail,
          OccupationOther: this.occupatoiondetail,
          Casteother: this.castedetail,
          Qualificationother: this.qualificationdetail,
          Designationother: this.designationd,
          IsAllFileldsFilled: true,
          PermanentSameasResidential: this.PermanentSameasResidential,
          ProductId: 1,
          LoanIdORInsuranceId: 5,
          ProsperityId: this.ProposID,
          ApplicationType: "Customer",
          URL: "fixedassetloan",
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
          LoanIdORInsuranceId: 5,
          ApplicationType: "Customer",
          URL: "fixedassetloan",
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
              this.route.navigate(['/Fixedassetloandetails'])
            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/Fixedassetloandetails'])
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
      else if (this.relationshiptypeid == 9 && (this.relationship == null || this.relationship == "" || this.relationship == undefined)) {
        alert("Please Enter Relationship with Nominee");
      }
      else if(this.Anualamt==null || this.Anualamt==undefined || this.Anualamt==""){
        alert("Please Enter Annual Amount");

      }
      else if(this.otheramt==null || this.otheramt==undefined || this.otheramt==""){
        alert("Please Enter Income from Other sources");

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
                this.route.navigate(['/Fixedassetloandetails'])
  
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/Fixedassetloandetails'])
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
      if (this.SelectedAadharFiles == undefined) {
        alert("Please Choose Aadhar File ")
      }
      else if (this.SelectedVoterIdFiles == undefined) {
        alert("Please Choose VoterId File ")
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
          IsAllFileldsFilled: true,
          Role:this.role

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

      if (this.SelectedAadharFiles == undefined) {
        alert("Please Choose Aadhar File ")
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
      else if (this.SelectedVoterIdFiles == undefined) {
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
                this.route.navigate(['/Fixedassetloandetails'])
  
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/Fixedassetloandetails'])
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
  public fieldArrayMove: Array<any> = [];
  public newAttribute: any = { code: "", };
  public carAttribute: any = { code: "", };
  public fieldArrayFA: Array<any> = [];

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

  addFieldValueFA() {
    this.newAttribute.fixedAssetId = this.hid;
    this.fieldArrayFA.push(this.newAttribute)
    this.newAttribute = {};
  }

  // addFieldValue() {
  //   this.fieldArray.push(this.newAttribute)
  //   this.newAttribute = {};
  // }


  addFieldcarValue() {
    this.carAttribute.movableAssetId = this.caid;
    this.fieldArrayMove.push(this.carAttribute)
    this.carAttribute = {};
  }

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
          Role:this.role,
          IsAllFileldsFilled: true,

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
              this.route.navigate(['/Fixedassetloandetails'])

            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/Fixedassetloandetails'])
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

  fixedIn(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;
      if (this.fixedassetloanForm.invalid) {
        const invalid = [];
        const controls = this.fixedassetloanForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        console.log(invalid);
        return;
      }
      else {
        this.spinner.show();
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          UserId: this.uid,
          //purofloan: this.purofloan,
          //loama: this.loama,
          //support: this.support,
          //Furnish: this.Furnish,
          //Dependencies: this.Dependencies,
          //dependents: this.dependents,
          repaying: this.repaying,
          //policies: this.policies,
          Outstanding: this.Outstanding,
          //loaamt: this.loaamt,
          purchased: this.purchased,
          inclusive: this.inclusive,
          allowance: this.allowance,
          //compensatory: this.compensatory,
          authorised: this.authorised,
          payment: this.payment,
          delivery: this.delivery,
          applicant: this.applicant,
          towards: this.towards,
          value: this.value,
          //particulars: this.particulars,
          //Partnersloan: this.Partnersloan,
          //Turnover: this.Turnover,
          //cashloan: this.cashloan,
          //acnumber: this.acnumber,
          Balance: this.Balance,
          Bank: this.Bank,
          //hba: this.hba,
          modelname: this.modelname,
          Agreed: this.Agreed,
          finishloan: this.finishloan,
          assessee: this.assessee,
          earning: this.earning,
          employed: this.employed,
          concern: this.concern,
          located: this.located,
          Activity: this.Activity,
          under: this.under,
          annualincome: this.annualincome,
          borrower: this.borrower,
          Registration: this.Registration,
          property: this.property,
          //assetsdata: this.assetsdata,
          //drawing: this.drawing,
          benefit: this.benefit,
          Relationship: this.Relationship,
          studying: this.studying,
          course: this.course,
          evidence: this.evidence,
          deposite: this.deposite,
          Additional: this.Additional,
          Account: this.Account,
          Membership: this.Membership,
          Numbersb: this.Numbersb,
          //Age: this.Age,
          Officedata: this.Officedata,
          //Salesdata: this.Salesdata,
          Income: this.Income,
          operative: this.operative,
          Board: this.Board,
          Department: this.Department,
          Salary: this.Salary,
          Domestic: this.Domestic,
          easttowest: this.easttowest,
          north: this.north,
          south: this.south,
          east: this.east,
          west: this.west,
          ancestral: this.ancestral,
          encumbered: this.encumbered,
          deductions: this.deductions,
          salary: this.salary,
          incomesource: this.incomesource,
          properties: this.properties,
          satory: this.satory,
          northtosouth: this.northtosouth,
          mother: this.mother,
          husband: this.husband,
          sonsage: this.sonsage,
          daughters: this.daughters,
          daughterage: this.daughterage,
          brotherage: this.brotherage,
          Sisters: this.Sisters,
          sisterage: this.sisterage,
          Grandsons: this.Grandsons,
          Grandsonage: this.Grandsonage,
          Brotherson: this.Brotherson,
          motherage: this.motherage,
          Brothersonage: this.Brothersonage,
          obtained: this.obtained,
          proposed: this.proposed,
          institution: this.institution,
          copies: this.copies,
          made: this.made,
          fatherage: this.fatherage,
          Mortgagor: this.Mortgagor,
          whom: this.whom,
          candidate: this.candidate,
          letter: this.letter,
          proaddress: this.proaddress,
          Fees: this.Fees,
          Squares: this.Squares,
          Construction: this.Construction,
          totalarea: this.totalarea,
          Roofing: this.Roofing,
          Flooring: this.Flooring,
          hand: this.hand,
          financial: this.financial,
          Others: this.Others,
          savings: this.savings,
          fundpro: this.fundpro,
          Refundable: this.Refundable,
          stock: this.stock,
          building: this.building,
          Presentstate: this.Presentstate,
          sanitary: this.sanitary,
          Foundation: this.Foundation,
          estimate: this.estimate,
          classfield: this.classfield,
          persquare: this.persquare,
          area: this.area,
          ntos: this.ntos,
          durable: this.durable,
          consumer: this.consumer,
          bankfrom: this.bankfrom,
          rental: this.rental,
          house: this.house,
          expected: this.expected,
          advance: this.advance,
          unable: this.unable,
          escalation: this.escalation,
          Accumulation: this.Accumulation,
          preowner: this.preowner,
          purchase: this.purchase,
          coming: this.coming,
          Land: this.Land,
          builds: this.builds,
          Squaresed: this.Squaresed,
          paid: this.paid,
          proposedata: this.proposedata,
          entered: this.entered,
          amtrs: this.amtrs,
          Probable: this.Probable,
          children: this.children,
          classdata: this.classdata,
          schcolg: this.schcolg,
          moped: this.moped,
          rent: this.rent,
          monthinc: this.monthinc,
          ontherdata: this.ontherdata,
          Personone: this.Personone,
          amout: this.amout,
          incomedata: this.incomedata,
          Person: this.Person,
          Persontwo: this.Persontwo,
          Personthredta: this.Personthredta,
          Pertwodta: this.Pertwodta,
          Personval: this.Personval,
          Personthree: this.Personthree,
          Persontwodta: this.Persontwodta,
          incant: this.incant,
          Investment: this.Investment,
          Persondata: this.Persondata,
          annualcant: this.annualcant,
          monthdata: this.monthdata,
          Agriculture: this.Agriculture,
          Monthly: this.Monthly,
          annualin: this.annualin,
          conveyance: this.conveyance,
          respect: this.respect,
          household: this.household,
          Education: this.Education,
          petrol: this.petrol,
          Entertainment: this.Entertainment,
          Telephone: this.Telephone,
          monthcome: this.monthcome,
          Repayment: this.Repayment,
          Expenditure: this.Expenditure,
          over: this.over,
          applied: this.applied,
          commitment: this.commitment,
          recommended: this.recommended,
          about: this.about,
          regarding: this.regarding,
          cheques: this.cheques,
          left: this.left,
          arrangement: this.arrangement,
          employeee: this.employeee,
          Details: this.Details,
          annum: this.annum,
          obligant: this.obligant,
          Net: this.Net,
          comment: this.comment,
          remittance: this.remittance,
          Opinion: this.Opinion,
          Legal: this.Legal,
          Report: this.Report,
          existing: this.existing,
          Resolution: this.Resolution,
          formalities: this.formalities,
          Conditions: this.Conditions,
          Sanctioned: this.Sanctioned,
          Eligibility: this.Eligibility,
          Renovation: this.Renovation,
          casefield: this.casefield,
          etow: this.etow,
          brothers: this.brothers,
          Sons: this.Sons,
          wife: this.wife,
          employedat: this.employedat,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          Role: this.role,
          ProsperityId: this.ProposID,
          SendCopytoSP: this.SendCopytoSP,
          IsAllFileldsFilled: true,
          URL: "fixedassetloanform",
        }
        this.businessloanservice.SaveFixedAssetLoanDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Fixed Asset Loan Details Saved Successfully!!"
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
      if (this.fixedassetloanForm.invalid) {
        return;
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          UserId: this.uid,
          //purofloan: this.purofloan,
          //loama: this.loama,
          //support: this.support,
          //Furnish: this.Furnish,
          //Dependencies: this.Dependencies,
          //dependents: this.dependents,
          repaying: this.repaying,
          //policies: this.policies,
          Outstanding: this.Outstanding,
          //loaamt: this.loaamt,
          purchased: this.purchased,
          inclusive: this.inclusive,
          allowance: this.allowance,
          //compensatory: this.compensatory,
          authorised: this.authorised,
          payment: this.payment,
          delivery: this.delivery,
          applicant: this.applicant,
          towards: this.towards,
          value: this.value,
          //particulars: this.particulars,
          //Partnersloan: this.Partnersloan,
          //Turnover: this.Turnover,
          //cashloan: this.cashloan,
          //acnumber: this.acnumber,
          Balance: this.Balance,
          Bank: this.Bank,
          //hba: this.hba,
          modelname: this.modelname,
          Agreed: this.Agreed,
          finishloan: this.finishloan,
          assessee: this.assessee,
          earning: this.earning,
          employed: this.employed,
          concern: this.concern,
          located: this.located,
          Activity: this.Activity,
          under: this.under,
          annualincome: this.annualincome,
          borrower: this.borrower,
          Registration: this.Registration,
          property: this.property,
          //assetsdata: this.assetsdata,
          //drawing: this.drawing,
          benefit: this.benefit,
          Relationship: this.Relationship,
          studying: this.studying,
          course: this.course,
          evidence: this.evidence,
          deposite: this.deposite,
          Additional: this.Additional,
          Account: this.Account,
          employedat: this.employedat,

          Membership: this.Membership,
          Numbersb: this.Numbersb,
          //Age: this.Age,
          Officedata: this.Officedata,
          //Salesdata: this.Salesdata,
          Income: this.Income,
          operative: this.operative,
          Board: this.Board,
          Department: this.Department,
          Salary: this.Salary,
          Domestic: this.Domestic,
          easttowest: this.easttowest,
          north: this.north,
          south: this.south,
          east: this.east,
          west: this.west,
          ancestral: this.ancestral,
          encumbered: this.encumbered,
          deductions: this.deductions,
          salary: this.salary,
          incomesource: this.incomesource,
          properties: this.properties,
          satory: this.satory,
          northtosouth: this.northtosouth,
          mother: this.mother,
          husband: this.husband,
          sonsage: this.sonsage,
          daughters: this.daughters,
          daughterage: this.daughterage,
          brotherage: this.brotherage,
          Sisters: this.Sisters,
          sisterage: this.sisterage,
          Grandsons: this.Grandsons,
          Grandsonage: this.Grandsonage,
          Brotherson: this.Brotherson,
          motherage: this.motherage,
          Brothersonage: this.Brothersonage,
          obtained: this.obtained,
          proposed: this.proposed,
          institution: this.institution,
          copies: this.copies,
          made: this.made,
          fatherage: this.fatherage,
          Mortgagor: this.Mortgagor,
          whom: this.whom,
          candidate: this.candidate,
          letter: this.letter,
          proaddress: this.proaddress,
          Fees: this.Fees,
          Squares: this.Squares,
          Construction: this.Construction,
          totalarea: this.totalarea,
          Roofing: this.Roofing,
          Flooring: this.Flooring,
          hand: this.hand,
          financial: this.financial,
          Others: this.Others,
          savings: this.savings,
          fundpro: this.fundpro,
          Refundable: this.Refundable,
          stock: this.stock,
          building: this.building,
          Presentstate: this.Presentstate,
          sanitary: this.sanitary,
          Foundation: this.Foundation,
          estimate: this.estimate,
          classfield: this.classfield,
          persquare: this.persquare,
          area: this.area,
          ntos: this.ntos,
          durable: this.durable,
          consumer: this.consumer,
          bankfrom: this.bankfrom,
          rental: this.rental,
          house: this.house,
          expected: this.expected,
          advance: this.advance,
          unable: this.unable,
          escalation: this.escalation,
          Accumulation: this.Accumulation,
          preowner: this.preowner,
          purchase: this.purchase,
          coming: this.coming,
          Land: this.Land,
          builds: this.builds,
          Squaresed: this.Squaresed,
          paid: this.paid,
          proposedata: this.proposedata,
          entered: this.entered,
          amtrs: this.amtrs,
          Probable: this.Probable,
          children: this.children,
          classdata: this.classdata,
          schcolg: this.schcolg,
          moped: this.moped,
          rent: this.rent,
          monthinc: this.monthinc,
          ontherdata: this.ontherdata,
          Personone: this.Personone,
          amout: this.amout,
          incomedata: this.incomedata,
          Person: this.Person,
          Persontwo: this.Persontwo,
          Personthredta: this.Personthredta,
          Pertwodta: this.Pertwodta,
          Personval: this.Personval,
          Personthree: this.Personthree,
          Persontwodta: this.Persontwodta,
          incant: this.incant,
          Investment: this.Investment,
          Persondata: this.Persondata,
          annualcant: this.annualcant,
          monthdata: this.monthdata,
          Agriculture: this.Agriculture,
          Monthly: this.Monthly,
          annualin: this.annualin,
          conveyance: this.conveyance,
          respect: this.respect,
          household: this.household,
          Education: this.Education,
          petrol: this.petrol,
          Entertainment: this.Entertainment,
          Telephone: this.Telephone,
          monthcome: this.monthcome,
          Repayment: this.Repayment,
          Expenditure: this.Expenditure,
          over: this.over,
          applied: this.applied,
          commitment: this.commitment,
          recommended: this.recommended,
          about: this.about,
          regarding: this.regarding,
          cheques: this.cheques,
          left: this.left,
          arrangement: this.arrangement,
          employeee: this.employeee,
          Details: this.Details,
          annum: this.annum,
          obligant: this.obligant,
          Net: this.Net,
          comment: this.comment,
          remittance: this.remittance,
          Opinion: this.Opinion,
          Legal: this.Legal,
          Report: this.Report,
          existing: this.existing,
          Resolution: this.Resolution,
          formalities: this.formalities,
          Conditions: this.Conditions,
          Sanctioned: this.Sanctioned,
          Eligibility: this.Eligibility,
          Renovation: this.Renovation,
          casefield: this.casefield,
          etow: this.etow,
          brothers: this.brothers,
          Sons: this.Sons,
          wife: this.wife,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          SendCopytoSP: this.SendCopytoSP,
          IsAllFileldsFilled: true,
          ProsperityId: this.ProposID,

        }
        this.businessloanservice.SaveFixedAssetLoanDetails(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Fixed Asset Loan Details Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            // this.GetDraftData();
            if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/Fixedassetloandetails'])
        
            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/Fixedassetloandetails'])
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

  //  Upload Certificate Code by Chaithanya

  async Certificate() {
    this.spinner.show()
    await this.businessloanservice.getCertificates().subscribe((response: any) => {
      this.CertificateList = response;
      this.spinner.hide()

    });
  }

  onChange(event: any, data: any) {
    if (data.certificateName == "BirthCertificate") {
      var bfileslist = "";
      this.bfiles = [].slice.call(event.target.files);
      console.log(this.bfiles);
      bfileslist = this.bfiles[0];
      this.BirthCertificateFiles = bfileslist;
    }
    else if (data.certificateName == "CasteCertificate") {
      var castefileslist = "";
      this.castefiles = [].slice.call(event.target.files);
      console.log(this.castefiles);
      castefileslist = this.castefiles[0];
      this.CasteCertificateFiles = castefileslist;
    }
    else if (data.certificateName == "MedicalCertificate") {
      var medicalfileslist = "";
      this.medicalfiles = [].slice.call(event.target.files);
      console.log(this.medicalfiles);
      medicalfileslist = this.medicalfiles[0];
      this.MedicalCertificateFiles = medicalfileslist;
    }
    else if (data.certificateName == "SSCCertificate") {
      var sscfileslist = "";
      this.sscfiles = [].slice.call(event.target.files);
      console.log(this.sscfiles);
      sscfileslist = this.sscfiles[0];
      this.SSCCertificateFiles = sscfileslist;
    }
    else if (data.certificateName == "DegreeCertificate") {
      var degreefileslist = "";
      this.degreefiles = [].slice.call(event.target.files);
      console.log(this.degreefiles);
      degreefileslist = this.degreefiles[0];
      this.DegreeCertificateFiles = degreefileslist;
    }
    else if (data.certificateName == "PGCertificate") {
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
              alert("Certificates Uploaded Successfully")
              this.spinner.hide();
              // this.route.navigate(['/badashboard']);
              //stepper.next();
              if (this.role == '1008') {
                if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                  this.stepper1.selectedIndex = 5
  
                }
              }
              if (localStorage.getItem("editloanform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
                this.route.navigate(['/Fixedassetloandetails'])
  
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
              alert("Certificates Uploaded Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
              this.spinner.hide();
              // this.route.navigate(['/customerdashboard']);
              if (localStorage.getItem("editloanform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
                this.route.navigate(['/Fixedassetloandetails'])
              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/Fixedassetloandetails'])
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
    this.businessloanservice.GetFixedassetDraftdata(sendid).subscribe((data1: any) => {
      this.spinner.hide();
      let data = JSON.parse(data1,this.toCamelCase);

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
        else if (data.familyDetails.nomineetype == "minor" ) {
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
      else if (data.count == 4 && data.fixedAssetLoanDetails == null) {
        this.stepper1.selectedIndex = 4;
      }
      else if (data.count == 4 && data.fixedAssetLoanDetails != null) {
        this.repaying = data.fixedAssetLoanDetails.repaying;
        this.Outstanding = data.fixedAssetLoanDetails.outstanding;
        this.purchased = data.fixedAssetLoanDetails.purchased;
        this.inclusive = data.fixedAssetLoanDetails.inclusive;
        this.allowance = data.fixedAssetLoanDetails.allowance;
        this.authorised = data.fixedAssetLoanDetails.authorised;
        this.payment = data.fixedAssetLoanDetails.payment;
        this.delivery = data.fixedAssetLoanDetails.delivery;
        this.applicant = data.fixedAssetLoanDetails.applicant;
        this.towards = data.fixedAssetLoanDetails.towards;
        this.value = data.fixedAssetLoanDetails.value;
        this.Balance = data.fixedAssetLoanDetails.balance;
        this.Bank = data.fixedAssetLoanDetails.bank;
        this.modelname = data.fixedAssetLoanDetails.modelname;
        this.Agreed = data.fixedAssetLoanDetails.agreed;
        this.finishloan = data.fixedAssetLoanDetails.finishloan;
        this.assessee = data.fixedAssetLoanDetails.assessee;
        this.earning = data.fixedAssetLoanDetails.earning;
        this.employed = data.fixedAssetLoanDetails.employed;
        this.concern = data.fixedAssetLoanDetails.concern;
        this.located = data.fixedAssetLoanDetails.located;
        this.Activity = data.fixedAssetLoanDetails.activity;
        this.under = data.fixedAssetLoanDetails.under;
        this.annualincome = data.fixedAssetLoanDetails.annualincome;
        this.borrower = data.fixedAssetLoanDetails.borrower;
        this.Registration = data.fixedAssetLoanDetails.registration;
        this.property = data.fixedAssetLoanDetails.property;
        this.benefit = data.fixedAssetLoanDetails.benefit;
        this.Relationship = data.fixedAssetLoanDetails.relationship;
        this.studying = data.fixedAssetLoanDetails.studying;
        this.course = data.fixedAssetLoanDetails.course;
        this.evidence = data.fixedAssetLoanDetails.evidence;
        this.deposite = data.fixedAssetLoanDetails.deposite;
        this.Additional = data.fixedAssetLoanDetails.additional;
        this.Account = data.fixedAssetLoanDetails.account;
        this.Membership = data.fixedAssetLoanDetails.membership;
        this.Numbersb = data.fixedAssetLoanDetails.numbersb;
        this.Officedata = data.fixedAssetLoanDetails.officedata;
        this.Income = data.fixedAssetLoanDetails.income;
        this.operative = data.fixedAssetLoanDetails.operative;
        this.Board = data.fixedAssetLoanDetails.board;
        this.Department = data.fixedAssetLoanDetails.department;
        this.Salary = data.fixedAssetLoanDetails.salary;
        this.Domestic = data.fixedAssetLoanDetails.domestic;
        this.easttowest = data.fixedAssetLoanDetails.easttowest;
        this.north = data.fixedAssetLoanDetails.north;
        this.south = data.fixedAssetLoanDetails.south;
        this.east = data.fixedAssetLoanDetails.east;
        this.west = data.fixedAssetLoanDetails.west;
        this.ancestral = data.fixedAssetLoanDetails.ancestral;
        this.encumbered = data.fixedAssetLoanDetails.encumbered;
        this.deductions = data.fixedAssetLoanDetails.deductions;
        this.salary = data.fixedAssetLoanDetails.salary;
        this.incomesource = data.fixedAssetLoanDetails.incomesource;
        this.properties = data.fixedAssetLoanDetails.properties;
        this.satory = data.fixedAssetLoanDetails.satory;
        this.northtosouth = data.fixedAssetLoanDetails.northtosouth;
        this.mother = data.fixedAssetLoanDetails.mother;
        this.husband = data.fixedAssetLoanDetails.husband;
        this.sonsage = data.fixedAssetLoanDetails.sonsage;
        this.daughters = data.fixedAssetLoanDetails.daughters;
        this.daughterage = data.fixedAssetLoanDetails.daughterage;
        this.brotherage = data.fixedAssetLoanDetails.brotherage;
        this.Sisters = data.fixedAssetLoanDetails.sisters;
        this.sisterage = data.fixedAssetLoanDetails.sisterage;
        this.Grandsons = data.fixedAssetLoanDetails.grandsons;
        this.Grandsonage = data.fixedAssetLoanDetails.grandsonage;
        this.Brotherson = data.fixedAssetLoanDetails.brotherson;
        this.motherage = data.fixedAssetLoanDetails.motherage;
        this.Brothersonage = data.fixedAssetLoanDetails.brothersonage;
        this.obtained = data.fixedAssetLoanDetails.obtained;
        this.proposed = data.fixedAssetLoanDetails.proposed;
        this.institution = data.fixedAssetLoanDetails.institution;
        this.copies = data.fixedAssetLoanDetails.copies;
        this.made = data.fixedAssetLoanDetails.made;
        this.fatherage = data.fixedAssetLoanDetails.fatherage;
        this.Mortgagor = data.fixedAssetLoanDetails.mortgagor;
        this.whom = data.fixedAssetLoanDetails.whom;
        this.candidate = data.fixedAssetLoanDetails.candidate;
        this.letter = data.fixedAssetLoanDetails.letter;
        this.proaddress = data.fixedAssetLoanDetails.proaddress;
        this.Fees = data.fixedAssetLoanDetails.fees;
        this.Squares = data.fixedAssetLoanDetails.squares;
        this.Construction = data.fixedAssetLoanDetails.construction;
        this.totalarea = data.fixedAssetLoanDetails.totalarea;
        this.Roofing = data.fixedAssetLoanDetails.roofing;
        this.Flooring = data.fixedAssetLoanDetails.flooring;
        this.hand = data.fixedAssetLoanDetails.hand;
        this.financial = data.fixedAssetLoanDetails.financial;
        this.Others = data.fixedAssetLoanDetails.others;
        this.savings = data.fixedAssetLoanDetails.savings;
        this.fundpro = data.fixedAssetLoanDetails.fundpro;
        this.Refundable = data.fixedAssetLoanDetails.refundable;
        this.stock = data.fixedAssetLoanDetails.stock;
        this.building = data.fixedAssetLoanDetails.building;
        this.Presentstate = data.fixedAssetLoanDetails.presentstate;
        this.sanitary = data.fixedAssetLoanDetails.sanitary;
        this.Foundation = data.fixedAssetLoanDetails.foundation;
        this.estimate = data.fixedAssetLoanDetails.estimate;
        this.classfield = data.fixedAssetLoanDetails.classfield;
        this.persquare = data.fixedAssetLoanDetails.persquare;
        this.area = data.fixedAssetLoanDetails.area;
        this.ntos = data.fixedAssetLoanDetails.ntos;
        this.durable = data.fixedAssetLoanDetails.durable;
        this.consumer = data.fixedAssetLoanDetails.consumer;
        this.bankfrom = data.fixedAssetLoanDetails.bankfrom;
        this.rental = data.fixedAssetLoanDetails.rental;
        this.house = data.fixedAssetLoanDetails.house;
        this.expected = data.fixedAssetLoanDetails.expected;
        this.advance = data.fixedAssetLoanDetails.advance;
        this.unable = data.fixedAssetLoanDetails.unable;
        this.escalation = data.fixedAssetLoanDetails.escalation;
        this.Accumulation = data.fixedAssetLoanDetails.accumulation;
        this.preowner = data.fixedAssetLoanDetails.preowner;
        this.purchase = data.fixedAssetLoanDetails.purchase;
        this.coming = data.fixedAssetLoanDetails.coming;
        this.Land = data.fixedAssetLoanDetails.land;
        this.builds = data.fixedAssetLoanDetails.builds;
        this.Squaresed = data.fixedAssetLoanDetails.squaresed;
        this.paid = data.fixedAssetLoanDetails.paid;
        this.proposedata = data.fixedAssetLoanDetails.proposedata;
        this.entered = data.fixedAssetLoanDetails.entered;
        this.amtrs = data.fixedAssetLoanDetails.amtrs;
        this.Probable = data.fixedAssetLoanDetails.probable;
        this.children = data.fixedAssetLoanDetails.children;
        this.classdata = data.fixedAssetLoanDetails.classdata;
        this.schcolg = data.fixedAssetLoanDetails.schcolg;
        this.moped = data.fixedAssetLoanDetails.moped;
        this.rent = data.fixedAssetLoanDetails.rent;
        this.monthinc = data.fixedAssetLoanDetails.monthinc;
        this.ontherdata = data.fixedAssetLoanDetails.ontherdata;
        this.Personone = data.fixedAssetLoanDetails.personone;
        this.amout = data.fixedAssetLoanDetails.amout;
        this.incomedata = data.fixedAssetLoanDetails.incomedata;
        this.Person = data.fixedAssetLoanDetails.person;
        this.Persontwo = data.fixedAssetLoanDetails.persontwo;
        this.Personthredta = data.fixedAssetLoanDetails.personthredta;
        this.Pertwodta = data.fixedAssetLoanDetails.pertwodta;
        this.Personval = data.fixedAssetLoanDetails.personval;
        this.Personthree = data.fixedAssetLoanDetails.personthree;
        this.Persontwodta = data.fixedAssetLoanDetails.persontwodta;
        this.incant = data.fixedAssetLoanDetails.incant;
        this.Investment = data.fixedAssetLoanDetails.investment;
        this.Persondata = data.fixedAssetLoanDetails.persondata;
        this.annualcant = data.fixedAssetLoanDetails.annualcant;
        this.monthdata = data.fixedAssetLoanDetails.monthdata;
        this.Agriculture = data.fixedAssetLoanDetails.agriculture;
        this.Monthly = data.fixedAssetLoanDetails.monthly;
        this.annualin = data.fixedAssetLoanDetails.annualin;
        this.conveyance = data.fixedAssetLoanDetails.conveyance;
        this.respect = data.fixedAssetLoanDetails.respect;
        this.household = data.fixedAssetLoanDetails.household;
        this.Education = data.fixedAssetLoanDetails.education;
        this.petrol = data.fixedAssetLoanDetails.petrol;
        this.Entertainment = data.fixedAssetLoanDetails.entertainment;
        this.Telephone = data.fixedAssetLoanDetails.telephone;
        this.monthcome = data.fixedAssetLoanDetails.monthcome;
        this.Repayment = data.fixedAssetLoanDetails.repayment;
        this.Expenditure = data.fixedAssetLoanDetails.expenditure;
        this.over = data.fixedAssetLoanDetails.over;
        this.applied = data.fixedAssetLoanDetails.applied;
        this.commitment = data.fixedAssetLoanDetails.commitment;
        this.recommended = data.fixedAssetLoanDetails.recommended;
        this.about = data.fixedAssetLoanDetails.about;
        this.regarding = data.fixedAssetLoanDetails.regarding;
        this.cheques = data.fixedAssetLoanDetails.cheques;
        this.left = data.fixedAssetLoanDetails.left;
        this.arrangement = data.fixedAssetLoanDetails.arrangement;
        this.employeee = data.fixedAssetLoanDetails.employeee;
        this.Details = data.fixedAssetLoanDetails.details;
        this.annum = data.fixedAssetLoanDetails.annum;
        this.obligant = data.fixedAssetLoanDetails.obligant;
        this.Net = data.fixedAssetLoanDetails.net;
        this.comment = data.fixedAssetLoanDetails.comment;
        this.remittance = data.fixedAssetLoanDetails.remittance;
        this.Opinion = data.fixedAssetLoanDetails.opinion;
        this.Legal = data.fixedAssetLoanDetails.legal;
        this.Report = data.fixedAssetLoanDetails.report;
        this.existing = data.fixedAssetLoanDetails.existing;
        this.Resolution = data.fixedAssetLoanDetails.resolution;
        this.formalities = data.fixedAssetLoanDetails.formalities;
        this.Conditions = data.fixedAssetLoanDetails.conditions;
        this.Sanctioned = data.fixedAssetLoanDetails.sanctioned;
        this.Eligibility = data.fixedAssetLoanDetails.eligibility;
        this.Renovation = data.fixedAssetLoanDetails.renovation;
        this.casefield = data.fixedAssetLoanDetails.casefield;
        this.etow = data.fixedAssetLoanDetails.etow;
        this.brothers = data.fixedAssetLoanDetails.brothers;
        this.Sons = data.fixedAssetLoanDetails.sons;
        this.wife = data.fixedAssetLoanDetails.wife;
        this.incant = data.fixedAssetLoanDetails.incant;

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
      Race: this.casteid,
      Religion: this.rid,
      TickedId: this.ticketid,
      ReligionOther: this.religiondetail,
      OccupationOther: this.occupatoiondetail,
      Casteother: this.castedetail,
      Qualificationother: this.qualificationdetail,
      Designationother: this.designationd,
      IsAllFileldsFilled: false,
      PermanentSameasResidential: this.PermanentSameasResidential,
      ProductId: 1,
      LoanIdORInsuranceId: 5,
      ApplicationType: "Customer",
      URL: "fixedassetloan",
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
      LoanIdORInsuranceId: 5,
      ApplicationType: "Customer",
      URL: "fixedassetloan",
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
        Role:this.role      }
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
  SaveFixedAssetDraft(stepper: MatStepper) {
    if (this.role == '1008') {

      this.spinner.show();
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var cdata = {
        CustomerId: this.customerid,
        UserId: this.uid,
        //purofloan: this.purofloan,
        //loama: this.loama,
        //support: this.support,
        //Furnish: this.Furnish,
        //Dependencies: this.Dependencies,
        //dependents: this.dependents,
        repaying: this.repaying,
        //policies: this.policies,
        Outstanding: this.Outstanding,
        //loaamt: this.loaamt,
        purchased: this.purchased,
        inclusive: this.inclusive,
        allowance: this.allowance,
        //compensatory: this.compensatory,
        authorised: this.authorised,
        payment: this.payment,
        delivery: this.delivery,
        applicant: this.applicant,
        towards: this.towards,
        value: this.value,
        //particulars: this.particulars,
        //Partnersloan: this.Partnersloan,
        //Turnover: this.Turnover,
        //cashloan: this.cashloan,
        //acnumber: this.acnumber,
        Balance: this.Balance,
        Bank: this.Bank,
        //hba: this.hba,
        modelname: this.modelname,
        Agreed: this.Agreed,
        finishloan: this.finishloan,
        assessee: this.assessee,
        earning: this.earning,
        employed: this.employed,
        concern: this.concern,
        located: this.located,
        Activity: this.Activity,
        under: this.under,
        annualincome: this.annualincome,
        borrower: this.borrower,
        Registration: this.Registration,
        property: this.property,
        //assetsdata: this.assetsdata,
        //drawing: this.drawing,
        benefit: this.benefit,
        Relationship: this.Relationship,
        studying: this.studying,
        course: this.course,
        evidence: this.evidence,
        deposite: this.deposite,
        Additional: this.Additional,
        Account: this.Account,
        Membership: this.Membership,
        Numbersb: this.Numbersb,
        //Age: this.Age,
        Officedata: this.Officedata,
        //Salesdata: this.Salesdata,
        Income: this.Income,
        operative: this.operative,
        Board: this.Board,
        Department: this.Department,
        Salary: this.Salary,
        Domestic: this.Domestic,
        easttowest: this.easttowest,
        north: this.north,
        south: this.south,
        east: this.east,
        west: this.west,
        ancestral: this.ancestral,
        encumbered: this.encumbered,
        deductions: this.deductions,
        salary: this.salary,
        incomesource: this.incomesource,
        properties: this.properties,
        satory: this.satory,
        northtosouth: this.northtosouth,
        mother: this.mother,
        husband: this.husband,
        sonsage: this.sonsage,
        daughters: this.daughters,
        daughterage: this.daughterage,
        brotherage: this.brotherage,
        Sisters: this.Sisters,
        sisterage: this.sisterage,
        Grandsons: this.Grandsons,
        Grandsonage: this.Grandsonage,
        Brotherson: this.Brotherson,
        motherage: this.motherage,
        Brothersonage: this.Brothersonage,
        obtained: this.obtained,
        proposed: this.proposed,
        institution: this.institution,
        copies: this.copies,
        made: this.made,
        fatherage: this.fatherage,
        Mortgagor: this.Mortgagor,
        whom: this.whom,
        candidate: this.candidate,
        letter: this.letter,
        proaddress: this.proaddress,
        Fees: this.Fees,
        Squares: this.Squares,
        Construction: this.Construction,
        totalarea: this.totalarea,
        Roofing: this.Roofing,
        Flooring: this.Flooring,
        hand: this.hand,
        financial: this.financial,
        Others: this.Others,
        savings: this.savings,
        fundpro: this.fundpro,
        Refundable: this.Refundable,
        stock: this.stock,
        building: this.building,
        Presentstate: this.Presentstate,
        sanitary: this.sanitary,
        Foundation: this.Foundation,
        estimate: this.estimate,
        classfield: this.classfield,
        persquare: this.persquare,
        area: this.area,
        ntos: this.ntos,
        durable: this.durable,
        consumer: this.consumer,
        bankfrom: this.bankfrom,
        rental: this.rental,
        house: this.house,
        expected: this.expected,
        advance: this.advance,
        unable: this.unable,
        escalation: this.escalation,
        Accumulation: this.Accumulation,
        preowner: this.preowner,
        purchase: this.purchase,
        coming: this.coming,
        Land: this.Land,
        builds: this.builds,
        Squaresed: this.Squaresed,
        paid: this.paid,
        proposedata: this.proposedata,
        entered: this.entered,
        amtrs: this.amtrs,
        Probable: this.Probable,
        children: this.children,
        classdata: this.classdata,
        schcolg: this.schcolg,
        moped: this.moped,
        rent: this.rent,
        monthinc: this.monthinc,
        ontherdata: this.ontherdata,
        Personone: this.Personone,
        amout: this.amout,
        incomedata: this.incomedata,
        Person: this.Person,
        Persontwo: this.Persontwo,
        Personthredta: this.Personthredta,
        Pertwodta: this.Pertwodta,
        Personval: this.Personval,
        Personthree: this.Personthree,
        Persontwodta: this.Persontwodta,
        incant: this.incant,
        Investment: this.Investment,
        Persondata: this.Persondata,
        annualcant: this.annualcant,
        monthdata: this.monthdata,
        Agriculture: this.Agriculture,
        Monthly: this.Monthly,
        annualin: this.annualin,
        conveyance: this.conveyance,
        respect: this.respect,
        household: this.household,
        Education: this.Education,
        petrol: this.petrol,
        Entertainment: this.Entertainment,
        Telephone: this.Telephone,
        monthcome: this.monthcome,
        Repayment: this.Repayment,
        Expenditure: this.Expenditure,
        over: this.over,
        applied: this.applied,
        commitment: this.commitment,
        recommended: this.recommended,
        about: this.about,
        regarding: this.regarding,
        cheques: this.cheques,
        left: this.left,
        arrangement: this.arrangement,
        employeee: this.employeee,
        Details: this.Details,
        annum: this.annum,
        obligant: this.obligant,
        Net: this.Net,
        comment: this.comment,
        remittance: this.remittance,
        Opinion: this.Opinion,
        Legal: this.Legal,
        Report: this.Report,
        existing: this.existing,
        Resolution: this.Resolution,
        formalities: this.formalities,
        Conditions: this.Conditions,
        Sanctioned: this.Sanctioned,
        Eligibility: this.Eligibility,
        Renovation: this.Renovation,
        casefield: this.casefield,
        etow: this.etow,
        brothers: this.brothers,
        Sons: this.Sons,
        wife: this.wife,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        ProsperityId: this.ProposID,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: false,

      }
      this.businessloanservice.SaveFixedAssetLoanDetails(cdata).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Fixed Asset Loan Details Saved Successfully!!"
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
        UserId: this.uid,
        //purofloan: this.purofloan,
        //loama: this.loama,
        //support: this.support,
        //Furnish: this.Furnish,
        //Dependencies: this.Dependencies,
        //dependents: this.dependents,
        repaying: this.repaying,
        //policies: this.policies,
        Outstanding: this.Outstanding,
        //loaamt: this.loaamt,
        purchased: this.purchased,
        inclusive: this.inclusive,
        allowance: this.allowance,
        //compensatory: this.compensatory,
        authorised: this.authorised,
        payment: this.payment,
        delivery: this.delivery,
        applicant: this.applicant,
        towards: this.towards,
        value: this.value,
        //particulars: this.particulars,
        //Partnersloan: this.Partnersloan,
        //Turnover: this.Turnover,
        //cashloan: this.cashloan,
        //acnumber: this.acnumber,
        Balance: this.Balance,
        Bank: this.Bank,
        //hba: this.hba,
        modelname: this.modelname,
        Agreed: this.Agreed,
        finishloan: this.finishloan,
        assessee: this.assessee,
        earning: this.earning,
        employed: this.employed,
        concern: this.concern,
        located: this.located,
        Activity: this.Activity,
        under: this.under,
        annualincome: this.annualincome,
        borrower: this.borrower,
        Registration: this.Registration,
        property: this.property,
        //assetsdata: this.assetsdata,
        //drawing: this.drawing,
        benefit: this.benefit,
        Relationship: this.Relationship,
        studying: this.studying,
        course: this.course,
        evidence: this.evidence,
        deposite: this.deposite,
        Additional: this.Additional,
        Account: this.Account,
        Membership: this.Membership,
        Numbersb: this.Numbersb,
        //Age: this.Age,
        Officedata: this.Officedata,
        //Salesdata: this.Salesdata,
        Income: this.Income,
        operative: this.operative,
        Board: this.Board,
        Department: this.Department,
        Salary: this.Salary,
        Domestic: this.Domestic,
        easttowest: this.easttowest,
        north: this.north,
        south: this.south,
        east: this.east,
        west: this.west,
        ancestral: this.ancestral,
        encumbered: this.encumbered,
        deductions: this.deductions,
        salary: this.salary,
        incomesource: this.incomesource,
        properties: this.properties,
        satory: this.satory,
        northtosouth: this.northtosouth,
        mother: this.mother,
        husband: this.husband,
        sonsage: this.sonsage,
        daughters: this.daughters,
        daughterage: this.daughterage,
        brotherage: this.brotherage,
        Sisters: this.Sisters,
        sisterage: this.sisterage,
        Grandsons: this.Grandsons,
        Grandsonage: this.Grandsonage,
        Brotherson: this.Brotherson,
        motherage: this.motherage,
        Brothersonage: this.Brothersonage,
        obtained: this.obtained,
        proposed: this.proposed,
        institution: this.institution,
        copies: this.copies,
        made: this.made,
        fatherage: this.fatherage,
        Mortgagor: this.Mortgagor,
        whom: this.whom,
        candidate: this.candidate,
        letter: this.letter,
        proaddress: this.proaddress,
        Fees: this.Fees,
        Squares: this.Squares,
        Construction: this.Construction,
        totalarea: this.totalarea,
        Roofing: this.Roofing,
        Flooring: this.Flooring,
        hand: this.hand,
        financial: this.financial,
        Others: this.Others,
        savings: this.savings,
        fundpro: this.fundpro,
        Refundable: this.Refundable,
        stock: this.stock,
        building: this.building,
        Presentstate: this.Presentstate,
        sanitary: this.sanitary,
        Foundation: this.Foundation,
        estimate: this.estimate,
        classfield: this.classfield,
        persquare: this.persquare,
        area: this.area,
        ntos: this.ntos,
        durable: this.durable,
        consumer: this.consumer,
        bankfrom: this.bankfrom,
        rental: this.rental,
        house: this.house,
        expected: this.expected,
        advance: this.advance,
        unable: this.unable,
        escalation: this.escalation,
        Accumulation: this.Accumulation,
        preowner: this.preowner,
        purchase: this.purchase,
        coming: this.coming,
        Land: this.Land,
        builds: this.builds,
        Squaresed: this.Squaresed,
        paid: this.paid,
        proposedata: this.proposedata,
        entered: this.entered,
        amtrs: this.amtrs,
        Probable: this.Probable,
        children: this.children,
        classdata: this.classdata,
        schcolg: this.schcolg,
        moped: this.moped,
        rent: this.rent,
        monthinc: this.monthinc,
        ontherdata: this.ontherdata,
        Personone: this.Personone,
        amout: this.amout,
        incomedata: this.incomedata,
        Person: this.Person,
        Persontwo: this.Persontwo,
        Personthredta: this.Personthredta,
        Pertwodta: this.Pertwodta,
        Personval: this.Personval,
        Personthree: this.Personthree,
        Persontwodta: this.Persontwodta,
        incant: this.incant,
        Investment: this.Investment,
        Persondata: this.Persondata,
        annualcant: this.annualcant,
        monthdata: this.monthdata,
        Agriculture: this.Agriculture,
        Monthly: this.Monthly,
        annualin: this.annualin,
        conveyance: this.conveyance,
        respect: this.respect,
        household: this.household,
        Education: this.Education,
        petrol: this.petrol,
        Entertainment: this.Entertainment,
        Telephone: this.Telephone,
        monthcome: this.monthcome,
        Repayment: this.Repayment,
        Expenditure: this.Expenditure,
        over: this.over,
        applied: this.applied,
        commitment: this.commitment,
        recommended: this.recommended,
        about: this.about,
        regarding: this.regarding,
        cheques: this.cheques,
        left: this.left,
        arrangement: this.arrangement,
        employeee: this.employeee,
        Details: this.Details,
        annum: this.annum,
        obligant: this.obligant,
        Net: this.Net,
        comment: this.comment,
        remittance: this.remittance,
        Opinion: this.Opinion,
        Legal: this.Legal,
        Report: this.Report,
        existing: this.existing,
        Resolution: this.Resolution,
        formalities: this.formalities,
        Conditions: this.Conditions,
        Sanctioned: this.Sanctioned,
        Eligibility: this.Eligibility,
        Renovation: this.Renovation,
        casefield: this.casefield,
        etow: this.etow,
        brothers: this.brothers,
        Sons: this.Sons,
        wife: this.wife,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: false,


      }
      this.businessloanservice.SaveFixedAssetLoanDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Fixed Asset Loan Details Saved Successfully!!"
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
  previewloandetails(){
    if (this.ticketid == null) {
      this.ticketid = this.ProposID
    }
    localStorage.setItem("previewticketid",this.customerid+ ","+ this.ticketid);
    this.route.navigate(['previewloandetails/' + "fixedasset"]);
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
      RequestType: 20,
      Information:"FixedAsset Loan"

    }
    this.spinner.show();
    this.businessloanservice.SubmitLoanForm(cdata).subscribe((data: any) => {
      if (data == "ok") {
        if (this.role == '1008') {
          alert("Fixed Asset Loan Form Submitted Successfully!!")
          this.route.navigate(['/badashboard']);

        }
        else if (this.role == '1'){
          alert("Fixed Asset Loan Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
          this.route.navigate(['/customerdashboard']);

        }
       else  {
          alert("Fixed Asset Loan Form Submitted Successfully!!")
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

    this.businessloanservice.GetFixedAssetLoanEditdata(sendid).subscribe((data: any) => {
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

      if (data.fixedAssetLoanDetails != null) {
        this.repaying = data.fixedAssetLoanDetails.repaying;
        this.Outstanding = data.fixedAssetLoanDetails.outstanding;
        this.purchased = data.fixedAssetLoanDetails.purchased;
        this.inclusive = data.fixedAssetLoanDetails.inclusive;
        this.allowance = data.fixedAssetLoanDetails.allowance;
        this.authorised = data.fixedAssetLoanDetails.authorised;
        this.payment = data.fixedAssetLoanDetails.payment;
        this.delivery = data.fixedAssetLoanDetails.delivery;
        this.applicant = data.fixedAssetLoanDetails.applicant;
        this.towards = data.fixedAssetLoanDetails.towards;
        this.value = data.fixedAssetLoanDetails.value;
        this.Balance = data.fixedAssetLoanDetails.balance;
        this.Bank = data.fixedAssetLoanDetails.bank;
        this.modelname = data.fixedAssetLoanDetails.modelname;
        this.Agreed = data.fixedAssetLoanDetails.agreed;
        this.finishloan = data.fixedAssetLoanDetails.finishloan;
        this.assessee = data.fixedAssetLoanDetails.assessee;
        this.earning = data.fixedAssetLoanDetails.earning;
        this.employed = data.fixedAssetLoanDetails.employed;
        this.concern = data.fixedAssetLoanDetails.concern;
        this.located = data.fixedAssetLoanDetails.located;
        this.Activity = data.fixedAssetLoanDetails.activity;
        this.under = data.fixedAssetLoanDetails.under;
        this.annualincome = data.fixedAssetLoanDetails.annualincome;
        this.borrower = data.fixedAssetLoanDetails.borrower;
        this.Registration = data.fixedAssetLoanDetails.registration;
        this.property = data.fixedAssetLoanDetails.property;
        this.benefit = data.fixedAssetLoanDetails.benefit;
        this.Relationship = data.fixedAssetLoanDetails.relationship;
        this.studying = data.fixedAssetLoanDetails.studying;
        this.course = data.fixedAssetLoanDetails.course;
        this.evidence = data.fixedAssetLoanDetails.evidence;
        this.deposite = data.fixedAssetLoanDetails.deposite;
        this.Additional = data.fixedAssetLoanDetails.additional;
        this.Account = data.fixedAssetLoanDetails.account;
        this.Membership = data.fixedAssetLoanDetails.membership;
        this.Numbersb = data.fixedAssetLoanDetails.numbersb;
        this.Officedata = data.fixedAssetLoanDetails.officedata;
        this.Income = data.fixedAssetLoanDetails.income;
        this.operative = data.fixedAssetLoanDetails.operative;
        this.Board = data.fixedAssetLoanDetails.board;
        this.Department = data.fixedAssetLoanDetails.department;
        this.Salary = data.fixedAssetLoanDetails.salary;
        this.Domestic = data.fixedAssetLoanDetails.domestic;
        this.easttowest = data.fixedAssetLoanDetails.easttowest;
        this.north = data.fixedAssetLoanDetails.north;
        this.south = data.fixedAssetLoanDetails.south;
        this.east = data.fixedAssetLoanDetails.east;
        this.west = data.fixedAssetLoanDetails.west;
        this.ancestral = data.fixedAssetLoanDetails.ancestral;
        this.encumbered = data.fixedAssetLoanDetails.encumbered;
        this.deductions = data.fixedAssetLoanDetails.deductions;
        this.salary = data.fixedAssetLoanDetails.salary;
        this.incomesource = data.fixedAssetLoanDetails.incomesource;
        this.properties = data.fixedAssetLoanDetails.properties;
        this.satory = data.fixedAssetLoanDetails.satory;
        this.northtosouth = data.fixedAssetLoanDetails.northtosouth;
        this.mother = data.fixedAssetLoanDetails.mother;
        this.husband = data.fixedAssetLoanDetails.husband;
        this.sonsage = data.fixedAssetLoanDetails.sonsage;
        this.daughters = data.fixedAssetLoanDetails.daughters;
        this.daughterage = data.fixedAssetLoanDetails.daughterage;
        this.brotherage = data.fixedAssetLoanDetails.brotherage;
        this.Sisters = data.fixedAssetLoanDetails.sisters;
        this.sisterage = data.fixedAssetLoanDetails.sisterage;
        this.Grandsons = data.fixedAssetLoanDetails.grandsons;
        this.Grandsonage = data.fixedAssetLoanDetails.grandsonage;
        this.Brotherson = data.fixedAssetLoanDetails.brotherson;
        this.motherage = data.fixedAssetLoanDetails.motherage;
        this.Brothersonage = data.fixedAssetLoanDetails.brothersonage;
        this.obtained = data.fixedAssetLoanDetails.obtained;
        this.proposed = data.fixedAssetLoanDetails.proposed;
        this.institution = data.fixedAssetLoanDetails.institution;
        this.copies = data.fixedAssetLoanDetails.copies;
        this.made = data.fixedAssetLoanDetails.made;
        this.fatherage = data.fixedAssetLoanDetails.fatherage;
        this.Mortgagor = data.fixedAssetLoanDetails.mortgagor;
        this.whom = data.fixedAssetLoanDetails.whom;
        this.candidate = data.fixedAssetLoanDetails.candidate;
        this.letter = data.fixedAssetLoanDetails.letter;
        this.proaddress = data.fixedAssetLoanDetails.proaddress;
        this.Fees = data.fixedAssetLoanDetails.fees;
        this.Squares = data.fixedAssetLoanDetails.squares;
        this.Construction = data.fixedAssetLoanDetails.construction;
        this.totalarea = data.fixedAssetLoanDetails.totalarea;
        this.Roofing = data.fixedAssetLoanDetails.roofing;
        this.Flooring = data.fixedAssetLoanDetails.flooring;
        this.hand = data.fixedAssetLoanDetails.hand;
        this.financial = data.fixedAssetLoanDetails.financial;
        this.Others = data.fixedAssetLoanDetails.others;
        this.savings = data.fixedAssetLoanDetails.savings;
        this.fundpro = data.fixedAssetLoanDetails.fundpro;
        this.Refundable = data.fixedAssetLoanDetails.refundable;
        this.stock = data.fixedAssetLoanDetails.stock;
        this.building = data.fixedAssetLoanDetails.building;
        this.Presentstate = data.fixedAssetLoanDetails.presentstate;
        this.sanitary = data.fixedAssetLoanDetails.sanitary;
        this.Foundation = data.fixedAssetLoanDetails.foundation;
        this.estimate = data.fixedAssetLoanDetails.estimate;
        this.classfield = data.fixedAssetLoanDetails.classfield;
        this.persquare = data.fixedAssetLoanDetails.persquare;
        this.area = data.fixedAssetLoanDetails.area;
        this.ntos = data.fixedAssetLoanDetails.ntos;
        this.durable = data.fixedAssetLoanDetails.durable;
        this.consumer = data.fixedAssetLoanDetails.consumer;
        this.bankfrom = data.fixedAssetLoanDetails.bankfrom;
        this.rental = data.fixedAssetLoanDetails.rental;
        this.house = data.fixedAssetLoanDetails.house;
        this.expected = data.fixedAssetLoanDetails.expected;
        this.advance = data.fixedAssetLoanDetails.advance;
        this.unable = data.fixedAssetLoanDetails.unable;
        this.escalation = data.fixedAssetLoanDetails.escalation;
        this.Accumulation = data.fixedAssetLoanDetails.accumulation;
        this.preowner = data.fixedAssetLoanDetails.preowner;
        this.purchase = data.fixedAssetLoanDetails.purchase;
        this.coming = data.fixedAssetLoanDetails.coming;
        this.Land = data.fixedAssetLoanDetails.land;
        this.builds = data.fixedAssetLoanDetails.builds;
        this.Squaresed = data.fixedAssetLoanDetails.squaresed;
        this.paid = data.fixedAssetLoanDetails.paid;
        this.proposedata = data.fixedAssetLoanDetails.proposedata;
        this.entered = data.fixedAssetLoanDetails.entered;
        this.amtrs = data.fixedAssetLoanDetails.amtrs;
        this.Probable = data.fixedAssetLoanDetails.probable;
        this.children = data.fixedAssetLoanDetails.children;
        this.classdata = data.fixedAssetLoanDetails.classdata;
        this.schcolg = data.fixedAssetLoanDetails.schcolg;
        this.moped = data.fixedAssetLoanDetails.moped;
        this.rent = data.fixedAssetLoanDetails.rent;
        this.monthinc = data.fixedAssetLoanDetails.monthinc;
        this.ontherdata = data.fixedAssetLoanDetails.ontherdata;
        this.Personone = data.fixedAssetLoanDetails.personone;
        this.amout = data.fixedAssetLoanDetails.amout;
        this.incomedata = data.fixedAssetLoanDetails.incomedata;
        this.Person = data.fixedAssetLoanDetails.person;
        this.Persontwo = data.fixedAssetLoanDetails.persontwo;
        this.Personthredta = data.fixedAssetLoanDetails.personthredta;
        this.Pertwodta = data.fixedAssetLoanDetails.pertwodta;
        this.Personval = data.fixedAssetLoanDetails.personval;
        this.Personthree = data.fixedAssetLoanDetails.personthree;
        this.Persontwodta = data.fixedAssetLoanDetails.persontwodta;
        this.incant = data.fixedAssetLoanDetails.incant;
        this.Investment = data.fixedAssetLoanDetails.investment;
        this.Persondata = data.fixedAssetLoanDetails.persondata;
        this.annualcant = data.fixedAssetLoanDetails.annualcant;
        this.monthdata = data.fixedAssetLoanDetails.monthdata;
        this.Agriculture = data.fixedAssetLoanDetails.agriculture;
        this.Monthly = data.fixedAssetLoanDetails.monthly;
        this.annualin = data.fixedAssetLoanDetails.annualin;
        this.conveyance = data.fixedAssetLoanDetails.conveyance;
        this.respect = data.fixedAssetLoanDetails.respect;
        this.household = data.fixedAssetLoanDetails.household;
        this.Education = data.fixedAssetLoanDetails.education;
        this.petrol = data.fixedAssetLoanDetails.petrol;
        this.Entertainment = data.fixedAssetLoanDetails.entertainment;
        this.Telephone = data.fixedAssetLoanDetails.telephone;
        this.monthcome = data.fixedAssetLoanDetails.monthcome;
        this.Repayment = data.fixedAssetLoanDetails.repayment;
        this.Expenditure = data.fixedAssetLoanDetails.expenditure;
        this.over = data.fixedAssetLoanDetails.over;
        this.applied = data.fixedAssetLoanDetails.applied;
        this.commitment = data.fixedAssetLoanDetails.commitment;
        this.recommended = data.fixedAssetLoanDetails.recommended;
        this.about = data.fixedAssetLoanDetails.about;
        this.regarding = data.fixedAssetLoanDetails.regarding;
        this.cheques = data.fixedAssetLoanDetails.cheques;
        this.left = data.fixedAssetLoanDetails.left;
        this.arrangement = data.fixedAssetLoanDetails.arrangement;
        this.employeee = data.fixedAssetLoanDetails.employeee;
        this.Details = data.fixedAssetLoanDetails.details;
        this.annum = data.fixedAssetLoanDetails.annum;
        this.obligant = data.fixedAssetLoanDetails.obligant;
        this.Net = data.fixedAssetLoanDetails.net;
        this.comment = data.fixedAssetLoanDetails.comment;
        this.remittance = data.fixedAssetLoanDetails.remittance;
        this.Opinion = data.fixedAssetLoanDetails.opinion;
        this.Legal = data.fixedAssetLoanDetails.legal;
        this.Report = data.fixedAssetLoanDetails.report;
        this.existing = data.fixedAssetLoanDetails.existing;
        this.Resolution = data.fixedAssetLoanDetails.resolution;
        this.formalities = data.fixedAssetLoanDetails.formalities;
        this.Conditions = data.fixedAssetLoanDetails.conditions;
        this.Sanctioned = data.fixedAssetLoanDetails.sanctioned;
        this.Eligibility = data.fixedAssetLoanDetails.eligibility;
        this.Renovation = data.fixedAssetLoanDetails.renovation;
        this.casefield = data.fixedAssetLoanDetails.casefield;
        this.etow = data.fixedAssetLoanDetails.etow;
        this.brothers = data.fixedAssetLoanDetails.brothers;
        this.Sons = data.fixedAssetLoanDetails.sons;
        this.wife = data.fixedAssetLoanDetails.wife;
        this.employedat = data.fixedAssetLoanDetails.employedat;
        this.incant = data.fixedAssetLoanDetails.incant;

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
        else if (this.editformname == "fixedasset") {
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

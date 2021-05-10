
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CountryService } from 'src/app/Shared/country.service';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { UserService } from 'src/app/Shared/UserMaster/user.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class HealthInsuranceComponent implements OnInit {
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
  IsConfirm: any;
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
  nationalityfirst: any;
  nationalitytrd: any;
  nationalitysec: any;
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
  Nomineename: any;
  facilities: any;
  chequedate: any;
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
  Monthincome: any;
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
  detailsfirst: any;
  detailsthird: any;
  detailsthrd: any;
  detailsfour: any;
  eduremrks: any;
  selectedchequetype: any;
  selectedchequetypeid: any;
  Personsfourth: any;
  proposerthrd: any;
  Personsec: any;
  Sundriesone: any;
  bankdocsexist: boolean = false;
  bankdocs: any = [];
  proposertfirst: any;
  proposersec: any;
  boardHfive: any;
  genderthrd: any;
  Equipmentfive: any;
  proposertforth: any;
  Personsthrd: any;
  nationality: any;
  Insuranceone: any;
  Insurancetwo: any;
  Insurancethrd: any;
  Insurancefour: any;
  Insurancefive: any;
  Booksfive: any;
  genderfour: any;
  gendersec: any;
  Books: any;
  genderfirst: any;
  PermanentSameasResidential: any
  dateofbirthfourth: any;
  dateofbirthtrd: any;
  dateofbirthsec: any;
  dateofbirthFirst: any;
  Othersfirst: any;
  Otherstwo: any;
  Othersthree: any;
  Othersfive: any;
  Othersfour: any;
  Fundssec: any;
  first: any;
  fourth: any;
  third: any;
  Periodfourth: any;
  Periodthrd: any;
  Periodsecond: any;
  Periodone: any;
  sourcesfive: any;
  availablefour: any;
  availablethrd: any;
  Fundsfirst: any;
  assistance: any;
  Insuredfour: any;
  Insuredthrd: any;
  Insuredsec: any;
  Insuredone: any;
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
  sameadress: boolean;
  newadress: boolean = true;
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
  ticketid: any;

  newDynamic: any = {};

  Diabetesfirst: any;
  Diabetessecond: any;
  Diabetesthird: any;
  Diabetesfourth: any;

  Arthritissecond: any;
  Filedfirst: any;
  Filedsecond: any;
  Filedthird: any;
  Filedfourth: any;

  Companyfirst: any;
  Companysecond: any;
  Companyfourth: any;
  Companythird: any;

  Coveredfirst: any;
  Coveredsecond: any;
  Coveredthird: any;
  Coveredfourth: any;

  healthfirst: any;
  healthsecond: any;
  healththird: any;
  healthfourth: any;
  debitcard: any;
  infirmityfirst: any;
  infirmitysecond: any;
  infirmitythird: any;
  infirmityfourth: any;



  Policyfirst: any;
  Policysec: any;
  Policythrd: any;
  Policyfour: any;
  bnkname: any;
  Sumfirst: any;
  Sumsecond: any;
  Sumthird: any;
  Sumfourth: any;
  medicalfirst: any;
  medicalsecond: any;
  medicalthird: any;
  medicalfourth: any;
  Relationfirst: any;
  Relationsecond: any;
  Relationthird: any;
  Relationfourth: any;
  nmpayer: any;
  Nomineefirst: any;
  Nomineesecond: any;
  Nomineethird: any;
  Nomineefourth: any;
  second: any;
  Statusfirst: any;
  Statussecond: any;
  Statusthird: any;
  Statusfourth: any;
  Personone: any

  Arthritisfirst: any;
  Arthritisfourth: any;
  Arthritisthird: any;


  Kidneyfirst: any;
  Kidneyfourth: any;
  Kidneythird: any;
  Kidneysecond: any;

  Paralysisfirst: any;
  Paralysisfourth: any;
  Paralysisthird: any;
  Paralysissecond: any;

  Drugsfirst: any;
  Drugsfourth: any;
  Drugsthird: any;
  Drugssecond: any;

  Specifyfirst: any;
  Specifyfourth: any;
  Specifythird: any;
  Specifysecond: any;

  tobaccofirst: any;
  tobaccofourth: any;
  tobaccothird: any;
  tobaccosecond: any;

  Injurtfirst: any;
  Injurtfourth: any;
  Injurtthird: any;
  Injurtsecond: any;

  Liverfirst: any;
  Liverfourth: any;
  Liverthird: any;
  Liversecond: any;

  Cancerfirst: any;
  Cancerfourth: any;
  Cancerthird: any;
  Cancersecond: any;

  Heartfirst: any;
  Heartfourth: any;
  Heartthird: any;
  Heartsecond: any;

  Congenitalfirst: any;
  Congenitalfourth: any;
  Congenitalthird: any;
  Congenitalsecond: any;
  Contactsecond: any;
  Contactfirst: any;
  Contactfourth: any;
  Contactthird: any;
  castedetail: any;
  religiondetail: any;
  qualificationdetail: any;
  designationd: any;
  occupatoiondetail: any;
  Emailsecond: any;
  Emailfirst: any;
  Emailfourth: any;
  Emailthird: any;
  dedtQty: number;
  Qty: any;
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
  Aadharexist: boolean = false;
  Passportexist: boolean = false;
  GSTexist: boolean = false;
  ITexist: boolean = false;
  BankStatexist: boolean = false;
  VoterIDexist: boolean = false;
  ProposID: any;
  editformname: string;
  ProspectIdtoDisplydata: string;
  get f() { return this.RegistrationForm.controls; }
  get k() { return this.BankDetailsForm.controls; }
  get e() { return this.healthinsuranceform.controls; }

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

  BankDetailsForm = new FormGroup({
    customerid: new FormControl(),
    bankaccount: new FormControl(),
    branch: new FormControl(),
    bankname: new FormControl(),
    Ifscecode: new FormControl(),
    rationcardnum: new FormControl(),
    aadharnum: new FormControl(),
    voternum: new FormControl(),
    pannumber: new FormControl(),
    servicetax: new FormControl(),
    passportnum: new FormControl(),
    lifeinsurance: new FormControl(),
    minordob: new FormControl(),

  });

  healthinsuranceform = new FormGroup({
    customerid: new FormControl(),
    debitcard: new FormControl(),
    chequedate: new FormControl(),
    chequeamt: new FormControl(),
    nmpayer: new FormControl(),
    Monthincome: new FormControl(),
    sourcefund: new FormControl(),
    bnkname: new FormControl(),
    detailsfirst: new FormControl(),
    detailsthrd: new FormControl(),
    detailsthird: new FormControl(),
    detailsfour: new FormControl(),
    dateofbirthFirst: new FormControl(),
    dateofbirthsec: new FormControl(),
    dateofbirthtrd: new FormControl(),
    genderfirst: new FormControl(),
    Books: new FormControl(),
    gendersec: new FormControl(),
    genderfour: new FormControl(),
    Booksfive: new FormControl(),
    nationalityfirst: new FormControl(),
    nationalitysec: new FormControl(),
    nationality: new FormControl(),
    Equipmentfive: new FormControl(),
    Personone: new FormControl(),
    Personsec: new FormControl(),
    genderthrd: new FormControl(),
    Personsfourth: new FormControl(),
    Personsthrd: new FormControl(),
    Insuranceone: new FormControl(),
    Insurancetwo: new FormControl(),
    Insurancethrd: new FormControl(),
    Insurancefour: new FormControl(),
    Insurancefive: new FormControl(),
    proposerthrd: new FormControl(),
    boardHfive: new FormControl(),
    proposertforth: new FormControl(),
    proposersec: new FormControl(),
    proposertfirst: new FormControl(),
    nationalitytrd: new FormControl(),
    dateofbirthfourth: new FormControl(),
    Othersfirst: new FormControl(),
    Otherstwo: new FormControl(),
    Othersthree: new FormControl(),
    Othersfour: new FormControl(),
    Othersfive: new FormControl(),
    Insuredone: new FormControl(),
    Insuredsec: new FormControl(),
    Insuredthrd: new FormControl(),
    assistance: new FormControl(),
    Fundsfirst: new FormControl(),
    Fundssec: new FormControl(),
    Periodsecond: new FormControl(),
    Periodthrd: new FormControl(),
    first: new FormControl(),
    second: new FormControl(),
    fourth: new FormControl(),
    third: new FormControl(),
    Companyfirst: new FormControl(),
    Companysecond: new FormControl(),
    Companyfourth: new FormControl(),
    Companythird: new FormControl(),
    Periodfourth: new FormControl(),
    sourcesfive: new FormControl(),
    Periodone: new FormControl(),
    availablefour: new FormControl(),
    availablethrd: new FormControl(),
    Insuredfour: new FormControl(),
    Diabetesfirst: new FormControl(),
    Diabetessecond: new FormControl(),
    Diabetesfourth: new FormControl(),
    Diabetesthird: new FormControl(),
    Statusfirst: new FormControl(),
    Statussecond: new FormControl(),
    Statusfourth: new FormControl(),
    Statusthird: new FormControl(),
    Nomineefirst: new FormControl(),
    Nomineesecond: new FormControl(),
    Nomineefourth: new FormControl(),
    Nomineethird: new FormControl(),
    Relationfirst: new FormControl(),
    Relationsecond: new FormControl(),
    Relationfourth: new FormControl(),
    Relationthird: new FormControl(),
    medicalfirst: new FormControl(),
    medicalsecond: new FormControl(),
    medicalfourth: new FormControl(),
    medicalthird: new FormControl(),
    Policyfirst: new FormControl(),
    Policysec: new FormControl(),
    Policyfour: new FormControl(),
    Policythrd: new FormControl(),
    Sumfirst: new FormControl(),
    Sumsecond: new FormControl(),
    Sumfourth: new FormControl(),
    Sumthird: new FormControl(),
    Filedfirst: new FormControl(),
    Filedsecond: new FormControl(),
    Filedfourth: new FormControl(),
    Filedthird: new FormControl(),
    Coveredfirst: new FormControl(),
    Coveredsecond: new FormControl(),
    Coveredfourth: new FormControl(),
    Coveredthird: new FormControl(),
    infirmitysecond: new FormControl(),
    infirmityfourth: new FormControl(),
    infirmitythird: new FormControl(),
    infirmityfirst: new FormControl(),
    healthfirst: new FormControl(),
    healthsecond: new FormControl(),
    healthfourth: new FormControl(),
    healththird: new FormControl(),
    Liverfirst: new FormControl(),
    Liversecond: new FormControl(),
    Liverfourth: new FormControl(),
    Liverthird: new FormControl(),
    Cancerfirst: new FormControl(),
    Cancersecond: new FormControl(),
    Cancerfourth: new FormControl(),
    Cancerthird: new FormControl(),
    Heartfirst: new FormControl(),
    Heartsecond: new FormControl(),
    Heartfourth: new FormControl(),
    Heartthird: new FormControl(),
    Arthritisfirst: new FormControl(),
    Arthritissecond: new FormControl(),
    Arthritisfourth: new FormControl(),
    Arthritisthird: new FormControl(),
    Paralysisfirst: new FormControl(),
    Paralysissecond: new FormControl(),
    Paralysisfourth: new FormControl(),
    Paralysisthird: new FormControl(),
    Congenitalfirst: new FormControl(),
    Congenitalsecond: new FormControl(),
    Congenitalfourth: new FormControl(),
    Congenitalthird: new FormControl(),
    Injurtfirst: new FormControl(),
    Injurtsecond: new FormControl(),
    Injurtfourth: new FormControl(),
    Injurtthird: new FormControl(),
    Specifyfirst: new FormControl(),
    Specifysecond: new FormControl(),
    Specifyfourth: new FormControl(),
    Specifythird: new FormControl(),
    Drugsfirst: new FormControl(),
    Drugssecond: new FormControl(),
    Drugsfourth: new FormControl(),
    Drugsthird: new FormControl(),
    tobaccofirst: new FormControl(),
    tobaccosecond: new FormControl(),
    tobaccofourth: new FormControl(),
    tobaccothird: new FormControl(),
    Contactfirst: new FormControl(),
    Contactsecond: new FormControl(),
    Contactfourth: new FormControl(),
    Contactthird: new FormControl(),
    Emailfirst: new FormControl(),
    Emailsecond: new FormControl(),
    Emailfourth: new FormControl(),
    Emailthird: new FormControl(),
    Kidneyfirst: new FormControl(),
    Kidneysecond: new FormControl(),
    Kidneyfourth: new FormControl(),
    Kidneythird: new FormControl(),
    SendCopytoSP: new FormControl(),

  });
  SendCopytoSP: any
  files1: any;
  SelectedFiles: string;
  validfile: boolean;
  editable: boolean = false;
  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private serviceproviderservice: ServiceProviderService, private spinner: NgxSpinnerService,
    private userservice: UserDetailsService, private http: HttpClient, private businessloanservice: BusinessLoanServiceService,
    private datepipe: DatePipe, private httpService: HttpClient,
    private route:Router) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.ticketid = localStorage.getItem("TicketId");
    this.ProposID = localStorage.getItem("ProposID");
    this.role = localStorage.getItem("role");

    localStorage.setItem("customerId", this.customerid);
    this.customerid = localStorage.getItem("customerId");

    this.healthinsuranceform = formBuilder.group({
      customerid: [''],
      debitcard: ['', Validators.required],
      chequedate: ['', Validators.required],
      nmpayer: ['', Validators.required],
      Monthincome: ['', Validators.required],
      chequeamt: ['', Validators.required],
      sourcefund: ['', Validators.required],
      bnkname: ['', Validators.required],
      first: [''],
      second: [''],
      third: [''],
      fourth: [''],
      Kidneyfirst: [''],
      Kidneysecond: [''],
      Kidneythird: [''],
      Kidneyfourth: [''],
      Liverfirst: [''],
      Liversecond: [''],
      Liverthird: [''],
      Liverfourth: [''],
      Cancerfirst: [''],
      Cancersecond: [''],
      Cancerthird: [''],
      Cancerfourth: [''],
      Heartfirst: [''],
      Heartsecond: [''],
      Heartthird: [''],
      Heartfourth: [''],
      Arthritisfirst: [''],
      Arthritissecond: [''],
      Arthritisthird: [''],
      Arthritisfourth: [''],
      Paralysisfirst: [''],
      Paralysissecond: [''],
      Paralysisthird: [''],
      Paralysisfourth: [''],
      Congenitalfirst: [''],
      Congenitalsecond: [''],
      Congenitalthird: [''],
      Congenitalfourth: [''],
      Injurtfirst: [''],
      Injurtsecond: [''],
      Injurtthird: [''],
      Injurtfourth: [''],
      Specifyfirst: [''],
      Specifysecond: [''],
      Specifythird: [''],
      Specifyfourth: [''],
      Drugsfirst: [''],
      Drugssecond: [''],
      Drugsthird: [''],
      Drugsfourth: [''],
      tobaccofirst: [''],
      tobaccosecond: [''],
      tobaccothird: [''],
      tobaccofourth: [''],
      Diabetesfirst: [''],
      Diabetessecond: [''],
      Diabetesthird: [''],
      Diabetesfourth: [''],
      Contactfirst: [''],
      Contactsecond: [''],
      Contactthird: [''],
      Contactfourth: [''],
      Emailfirst: [''],
      Emailsecond: [''],
      Emailthird: [''],
      Emailfourth: [''],
      Statusfirst: [''],
      Statussecond: [''],
      Statusthird: [''],
      Statusfourth: [''],
      Nomineefirst: [''],
      Nomineesecond: [''],
      Nomineethird: [''],
      Nomineefourth: [''],
      Relationfirst: [''],
      Relationsecond: [''],
      Relationthird: [''],
      Relationfourth: [''],
      medicalfirst: [''],
      medicalsecond: [''],
      medicalthird: [''],
      medicalfourth: [''],
      Sumfirst: [''],
      Sumsecond: [''],
      Sumthird: [''],
      Sumfourth: [''],
      Filedfirst: [''],
      Filedsecond: [''],
      Filedthird: [''],
      Filedfourth: [''],
      healthfirst: [''],
      healthsecond: [''],
      healththird: [''],
      healthfourth: [''],
      Coveredfirst: [''],
      Coveredsecond: [''],
      Coveredthird: [''],
      Coveredfourth: [''],
      infirmityfirst: [''],
      infirmitysecond: [''],
      infirmitythird: [''],
      infirmityfourth: [''],
      Companyfirst: [''],
      Companysecond: [''],
      Companythird: [''],
      Companyfourth: [''],
      detailsfirst: [''],
      detailsthrd: [''],
      detailsthird: [''],
      detailsfour: [''],
      dateofbirthFirst: [''],
      dateofbirthsec: [''],
      dateofbirthtrd: [''],
      dateofbirthfourth: [''],
      genderfirst: [''],
      Books: [''],
      gendersec: [''],
      genderfour: [''],
      Booksfive: [''],
      nationalityfirst: [''],
      nationalitysec: [''],

      nationality: [''],
      Equipmentfive: [''],
      nationalitytrd: [''],
      proposertfirst: [''],
      proposersec: [''],
      proposertforth: [''],
      boardHfive: [''],
      proposerthrd: [''],

      Personone: [''],
      genderthrd: [''],
      Personsec: [''],
      Personsfourth: [''],
      Personsthrd: [''],
      Insuranceone: [''],
      Insurancethrd: [''],
      Insurancetwo: [''],
      Insurancefour: [''],
      Insurancefive: [''],
      Othersfirst: [''],
      Otherstwo: [''],
      Othersthree: [''],
      Othersfour: [''],
      Othersfive: [''],
      Insuredone: [''],
      Insuredsec: [''],
      Insuredthrd: [''],
      Insuredfour: [''],
      assistance: [''],
      Fundsfirst: [''],
      Fundssec: [''],
      availablethrd: [''],
      availablefour: [''],
      sourcesfive: [''],
      Periodone: [''],
      Periodsecond: [''],
      Periodthrd: [''],
      Periodfourth: [''],
      Policyfirst: [''],
      Policysec: [''],
      Policythrd: [''],
      Policyfour: [''],
      SendCopytoSP: false
    })

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
      PermanentSameasResidential: false
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
  
    else if (this.editformname == "health") {
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
          ResidentialCountry: this.country,
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
          PermanentCountry: this.countryone,
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
          ProsperityId: this.ProposID,
          Role: this.role,
          UserId: this.uid,
          ProductId: 2,
          LoanIdORInsuranceId: 1,
          ApplicationType: "Customer",
          URL: "HealthInsurance",

        }
        this.businessloanservice.SaveBasicDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Personal Details Saved Successfully!!"
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
          ResidentialCountry: this.country,
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
          PermanentCountry: this.countryone,
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
          Role: this.role,
          ProsperityId: this.ProposID,
          ProductId: 2,
          LoanIdORInsuranceId: 1,
          ApplicationType: "Customer",
          URL: "HealthInsurance",
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
            if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/HealthInsuranceDetails'])

            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/HealthInsuranceDetails'])
  
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



  healthIn(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;
      if (this.healthinsuranceform.invalid) {
        return;
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var cdata = {
          CustomerId: this.customerid,
          UserId: this.uid,
          debitcard: this.debitcard,
          chequedate: this.chequedate,
          chequeamt: this.chequeamt,
          nmpayer: this.nmpayer,
          Monthincome: this.Monthincome,
          sourcefund: this.sourcefund,
          bnkname: this.bnkname,
          detailsfirst: this.detailsfirst,
          detailsthrd: this.detailsthrd,
          detailsthird: this.detailsthird,
          detailsfour: this.detailsfour,
          dateofbirthFirst: this.dateofbirthFirst,
          dateofbirthsec: this.dateofbirthsec,
          dateofbirthtrd: this.dateofbirthtrd,
          dateofbirthfourth:this.dateofbirthfourth,
          genderfirst: this.genderfirst,
          Books: this.Books,
          gendersec: this.gendersec,
          genderfour: this.genderfour,
          Booksfive: this.Booksfive,
          nationalityfirst: this.nationalityfirst,
          nationalitysec: this.nationalitysec,
          nationality: this.nationality,
          Equipmentfive: this.Equipmentfive,
          Personone: this.Personone,
          Personsec: this.Personsec,
          genderthrd: this.genderthrd,
          Personsfourth: this.Personsfourth,
          Personsthrd: this.Personsthrd,
          Insuranceone: this.Insuranceone,
          Insurancetwo: this.Insurancetwo,
          Insurancethrd: this.Insurancethrd,
          Insurancefour: this.Insurancefour,
          Insurancefive: this.Insurancefive,
          proposerthrd: this.proposerthrd,
          boardHfive: this.boardHfive,
          proposertforth: this.proposertforth,
          proposersec: this.proposersec,
          proposertfirst: this.proposertfirst,
          nationalitytrd: this.nationalitytrd,
          Othersfirst: this.Othersfirst,
          Otherstwo: this.Otherstwo,
          Othersthree: this.Othersthree,
          Othersfour: this.Othersfour,
          Othersfive: this.Othersfive,
          Insuredone: this.Insuredone,
          Insuredsec: this.Insuredsec,
          Insuredthrd: this.Insuredthrd,
          assistance: this.assistance,
          Fundsfirst: this.Fundsfirst,
          Fundssec: this.Fundssec,
          Periodsecond: this.Periodsecond,
          Periodthrd: this.Periodthrd,
          first: this.first,
          second: this.second,
          fourth: this.fourth,
          third: this.third,
          Companyfirst: this.Companyfirst,
          Companysecond: this.Companysecond,
          Companyfourth: this.Companyfourth,
          Companythird: this.Companythird,
          Periodfourth: this.Periodfourth,
          sourcesfive: this.sourcesfive,
          Periodone: this.Periodone,
          availablefour: this.availablefour,
          availablethrd: this.availablethrd,
          Insuredfour: this.Insuredfour,
          Diabetesfirst: this.Diabetesfirst,
          Diabetessecond: this.Diabetessecond,
          Diabetesfourth: this.Diabetesfourth,
          Diabetesthird: this.Diabetesthird,
          Statusfirst: this.Statusfirst,
          Statussecond: this.Statussecond,
          Statusfourth: this.Statusfourth,
          Statusthird: this.Statusthird,
          Nomineefirst: this.Nomineefirst,
          Nomineesecond: this.Nomineesecond,
          Nomineefourth: this.Nomineefourth,
          Nomineethird: this.Nomineethird,
          Relationfirst: this.Relationfirst,
          Relationsecond: this.Relationsecond,
          Relationfourth: this.Relationfourth,
          Relationthird: this.Relationthird,
          medicalfirst: this.medicalfirst,
          medicalsecond: this.medicalsecond,
          medicalfourth: this.medicalfourth,
          medicalthird: this.medicalthird,
          Policyfirst: this.Policyfirst,
          Policysec: this.Policysec,
          Policyfour: this.Policyfour,
          Policythrd: this.Policythrd,
          Sumfirst: this.Sumfirst,
          Sumsecond: this.Sumsecond,
          Sumfourth: this.Sumfourth,
          Sumthird: this.Sumthird,
          Filedfirst: this.Filedfirst,
          Filedsecond: this.Filedsecond,
          Filedfourth: this.Filedfourth,
          Filedthird: this.Filedthird,
          Coveredfirst: this.Coveredfirst,
          Coveredsecond: this.Coveredsecond,
          Coveredfourth: this.Coveredfourth,
          Coveredthird: this.Coveredthird,
          infirmitysecond: this.infirmitysecond,
          infirmityfourth: this.infirmityfourth,
          infirmitythird: this.infirmitythird,
          infirmityfirst: this.infirmityfirst,
          healthfirst: this.healthfirst,
          healthsecond: this.healthsecond,
          healthfourth: this.healthfourth,
          healththird: this.healththird,
          Liverfirst: this.Liverfirst,
          Liversecond: this.Liversecond,
          Liverfourth: this.Liverfourth,
          Liverthird: this.Liverthird,
          Cancerfirst: this.Cancerfirst,
          Cancersecond: this.Cancersecond,
          Cancerfourth: this.Cancerfourth,
          Cancerthird: this.Cancerthird,
          Heartfirst: this.Heartfirst,
          Heartsecond: this.Heartsecond,
          Heartfourth: this.Heartfourth,
          Heartthird: this.Heartthird,
          Arthritisfirst: this.Arthritisfirst,
          Arthritissecond: this.Arthritissecond,
          Arthritisfourth: this.Arthritisfourth,
          Arthritisthird: this.Arthritisthird,
          Paralysisfirst: this.Paralysisfirst,
          Paralysissecond: this.Paralysissecond,
          Paralysisfourth: this.Paralysisfourth,
          Paralysisthird: this.Paralysisthird,
          Congenitalfirst: this.Congenitalfirst,
          Congenitalsecond: this.Congenitalsecond,
          Congenitalfourth: this.Congenitalfourth,
          Congenitalthird: this.Congenitalthird,
          Injurtfirst: this.Injurtfirst,
          Injurtsecond: this.Injurtsecond,
          Injurtfourth: this.Injurtfourth,
          Injurtthird: this.Injurtthird,
          Specifyfirst: this.Specifyfirst,
          Specifysecond: this.Specifysecond,
          Specifyfourth: this.Specifyfourth,
          Specifythird: this.Specifythird,
          Drugsfirst: this.Drugsfirst,
          Drugssecond: this.Drugssecond,
          Drugsfourth: this.Drugsfourth,
          Drugsthird: this.Drugsthird,
          tobaccofirst: this.tobaccofirst,
          tobaccosecond: this.tobaccosecond,
          tobaccofourth: this.tobaccofourth,
          tobaccothird: this.tobaccothird,
          Contactfirst: this.Contactfirst,
          Contactsecond: this.Contactsecond,
          Contactfourth: this.Contactfourth,
          Contactthird: this.Contactthird,
          Emailfirst: this.Emailfirst,
          Emailsecond: this.Emailsecond,
          Emailfourth: this.Emailfourth,
          Emailthird: this.Emailthird,
          Kidneyfirst: this.Kidneyfirst,
          Kidneysecond: this.Kidneysecond,
          Kidneyfourth: this.Kidneyfourth,
          Kidneythird: this.Kidneythird,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          Role: this.role,
          SendCopytoSP: this.SendCopytoSP,
          IsAllFileldsFilled: true,
          ProsperityId: this.ProposID,
  
        }
        this.spinner.show()

        this.businessloanservice.SaveHealthInsuranceDetails(cdata).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Health Insurance Details Saved Successfully!!"
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
    else {
      this.submitted = true;
      if (this.healthinsuranceform.invalid) {
        const invalid = [];
        const controls = this.healthinsuranceform.controls;
        for (const name in controls) {
          if (controls[name].invalid) {
            invalid.push(name);
          }
        }
        console.log(invalid);
        return;
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          debitcard: this.debitcard,
          chequedate: this.chequedate,
          chequeamt: this.chequeamt,
          nmpayer: this.nmpayer,
          Monthincome: this.Monthincome,
          sourcefund: this.sourcefund,
          bnkname: this.bnkname,
          detailsfirst: this.detailsfirst,
          detailsthrd: this.detailsthrd,
          detailsthird: this.detailsthird,
          detailsfour: this.detailsfour,
          dateofbirthFirst: this.dateofbirthFirst,
          dateofbirthsec: this.dateofbirthsec,
          dateofbirthtrd: this.dateofbirthtrd,
          dateofbirthfourth:this.dateofbirthfourth,
          genderfirst: this.genderfirst,
          Books: this.Books,
          gendersec: this.gendersec,
          genderfour: this.genderfour,
          Booksfive: this.Booksfive,
          nationalityfirst: this.nationalityfirst,
          nationalitysec: this.nationalitysec,
          nationality: this.nationality,
          Equipmentfive: this.Equipmentfive,
          Personone: this.Personone,
          Personsec: this.Personsec,
          genderthrd: this.genderthrd,
          Personsfourth: this.Personsfourth,
          Personsthrd: this.Personsthrd,
          Insuranceone: this.Insuranceone,
          Insurancetwo: this.Insurancetwo,
          Insurancethrd: this.Insurancethrd,
          Insurancefour: this.Insurancefour,
          Insurancefive: this.Insurancefive,
          proposerthrd: this.proposerthrd,
          boardHfive: this.boardHfive,
          proposertforth: this.proposertforth,
          proposersec: this.proposersec,
          proposertfirst: this.proposertfirst,
          nationalitytrd: this.nationalitytrd,
          Othersfirst: this.Othersfirst,
          Otherstwo: this.Otherstwo,
          Othersthree: this.Othersthree,
          Othersfour: this.Othersfour,
          Othersfive: this.Othersfive,
          Insuredone: this.Insuredone,
          Insuredsec: this.Insuredsec,
          Insuredthrd: this.Insuredthrd,
          assistance: this.assistance,
          Fundsfirst: this.Fundsfirst,
          Fundssec: this.Fundssec,
          Periodsecond: this.Periodsecond,
          Periodthrd: this.Periodthrd,
          first: this.first,
          second: this.second,
          fourth: this.fourth,
          third: this.third,
          Companyfirst: this.Companyfirst,
          Companysecond: this.Companysecond,
          Companyfourth: this.Companyfourth,
          Companythird: this.Companythird,
          Periodfourth: this.Periodfourth,
          sourcesfive: this.sourcesfive,
          Periodone: this.Periodone,
          availablefour: this.availablefour,
          availablethrd: this.availablethrd,
          Insuredfour: this.Insuredfour,
          Diabetesfirst: this.Diabetesfirst,
          Diabetessecond: this.Diabetessecond,
          Diabetesfourth: this.Diabetesfourth,
          Diabetesthird: this.Diabetesthird,
          Statusfirst: this.Statusfirst,
          Statussecond: this.Statussecond,
          Statusfourth: this.Statusfourth,
          Statusthird: this.Statusthird,
          Nomineefirst: this.Nomineefirst,
          Nomineesecond: this.Nomineesecond,
          Nomineefourth: this.Nomineefourth,
          Nomineethird: this.Nomineethird,
          Relationfirst: this.Relationfirst,
          Relationsecond: this.Relationsecond,
          Relationfourth: this.Relationfourth,
          Relationthird: this.Relationthird,
          medicalfirst: this.medicalfirst,
          medicalsecond: this.medicalsecond,
          medicalfourth: this.medicalfourth,
          medicalthird: this.medicalthird,
          Policyfirst: this.Policyfirst,
          Policysec: this.Policysec,
          Policyfour: this.Policyfour,
          Policythrd: this.Policythrd,
          Sumfirst: this.Sumfirst,
          Sumsecond: this.Sumsecond,
          Sumfourth: this.Sumfourth,
          Sumthird: this.Sumthird,
          Filedfirst: this.Filedfirst,
          Filedsecond: this.Filedsecond,
          Filedfourth: this.Filedfourth,
          Filedthird: this.Filedthird,
          Coveredfirst: this.Coveredfirst,
          Coveredsecond: this.Coveredsecond,
          Coveredfourth: this.Coveredfourth,
          Coveredthird: this.Coveredthird,
          infirmitysecond: this.infirmitysecond,
          infirmityfourth: this.infirmityfourth,
          infirmitythird: this.infirmitythird,
          infirmityfirst: this.infirmityfirst,
          healthfirst: this.healthfirst,
          healthsecond: this.healthsecond,
          healthfourth: this.healthfourth,
          healththird: this.healththird,
          Liverfirst: this.Liverfirst,
          Liversecond: this.Liversecond,
          Liverfourth: this.Liverfourth,
          Liverthird: this.Liverthird,
          Cancerfirst: this.Cancerfirst,
          Cancersecond: this.Cancersecond,
          Cancerfourth: this.Cancerfourth,
          Cancerthird: this.Cancerthird,
          Heartfirst: this.Heartfirst,
          Heartsecond: this.Heartsecond,
          Heartfourth: this.Heartfourth,
          Heartthird: this.Heartthird,
          Arthritisfirst: this.Arthritisfirst,
          Arthritissecond: this.Arthritissecond,
          Arthritisfourth: this.Arthritisfourth,
          Arthritisthird: this.Arthritisthird,
          Paralysisfirst: this.Paralysisfirst,
          Paralysissecond: this.Paralysissecond,
          Paralysisfourth: this.Paralysisfourth,
          Paralysisthird: this.Paralysisthird,
          Congenitalfirst: this.Congenitalfirst,
          Congenitalsecond: this.Congenitalsecond,
          Congenitalfourth: this.Congenitalfourth,
          Congenitalthird: this.Congenitalthird,
          Injurtfirst: this.Injurtfirst,
          Injurtsecond: this.Injurtsecond,
          Injurtfourth: this.Injurtfourth,
          Injurtthird: this.Injurtthird,
          Specifyfirst: this.Specifyfirst,
          Specifysecond: this.Specifysecond,
          Specifyfourth: this.Specifyfourth,
          Specifythird: this.Specifythird,
          Drugsfirst: this.Drugsfirst,
          Drugssecond: this.Drugssecond,
          Drugsfourth: this.Drugsfourth,
          Drugsthird: this.Drugsthird,
          tobaccofirst: this.tobaccofirst,
          tobaccosecond: this.tobaccosecond,
          tobaccofourth: this.tobaccofourth,
          tobaccothird: this.tobaccothird,
          Contactfirst: this.Contactfirst,
          Contactsecond: this.Contactsecond,
          Contactfourth: this.Contactfourth,
          Contactthird: this.Contactthird,
          Emailfirst: this.Emailfirst,
          Emailsecond: this.Emailsecond,
          Emailfourth: this.Emailfourth,
          Emailthird: this.Emailthird,
          Kidneyfirst: this.Kidneyfirst,
          Kidneysecond: this.Kidneysecond,
          Kidneyfourth: this.Kidneyfourth,
          Kidneythird: this.Kidneythird,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          Role: this.role,
          SendCopytoSP: this.SendCopytoSP,
          IsAllFileldsFilled: true,
          ProsperityId: this.ProposID,
  
        }
        this.spinner.show()

        this.businessloanservice.SaveHealthInsuranceDetails(data).subscribe((data: any) => {
          if (data == "success") {
            this.notify = "Health Insurance Saved Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            if (localStorage.getItem("editinsuranceform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
              this.route.navigate(['/HealthInsuranceDetails'])

            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/HealthInsuranceDetails'])
  
            }
            else if(localStorage.getItem("editinsuranceform") != "false" && this.ticketid!=null){
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
  SaveHealthDraft(stepper: MatStepper) {
    if (this.role == '1008') {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var cdata = {
        CustomerId: this.customerid,
        UserId: this.uid,
        debitcard: this.debitcard,
        chequedate: this.chequedate,
        chequeamt: this.chequeamt,
        nmpayer: this.nmpayer,
        Monthincome: this.Monthincome,
        sourcefund: this.sourcefund,
        bnkname: this.bnkname,
        detailsfirst: this.detailsfirst,
        detailsthrd: this.detailsthrd,
        detailsthird: this.detailsthird,
        detailsfour: this.detailsfour,
        dateofbirthFirst: this.dateofbirthFirst,
        dateofbirthsec: this.dateofbirthsec,
        dateofbirthtrd: this.dateofbirthsec,
        genderfirst: this.genderfirst,
        Books: this.Books,
        gendersec: this.gendersec,
        genderfour: this.genderfour,
        Booksfive: this.Booksfive,
        nationalityfirst: this.nationalityfirst,
        nationalitysec: this.nationalitysec,
        nationality: this.nationality,
        Equipmentfive: this.Equipmentfive,
        Personone: this.Personone,
        Personsec: this.Personsec,
        genderthrd: this.genderthrd,
        Personsfourth: this.Personsfourth,
        Personsthrd: this.Personsthrd,
        Insuranceone: this.Insuranceone,
        Insurancetwo: this.Insurancetwo,
        Insurancethrd: this.Insurancethrd,
        Insurancefour: this.Insurancefour,
        Insurancefive: this.Insurancefive,
        proposerthrd: this.proposerthrd,
        boardHfive: this.boardHfive,
        proposertforth: this.proposertforth,
        proposersec: this.proposersec,
        proposertfirst: this.proposertfirst,
        nationalitytrd: this.nationalitytrd,
        dateofbirthfourth: this.dateofbirthfourth,
        Othersfirst: this.Othersfirst,
        Otherstwo: this.Otherstwo,
        Othersthree: this.Othersthree,
        Othersfour: this.Othersfour,
        Othersfive: this.Othersfive,
        Insuredone: this.Insuredone,
        Insuredsec: this.Insuredsec,
        Insuredthrd: this.Insuredthrd,
        assistance: this.assistance,
        Fundsfirst: this.Fundsfirst,
        Fundssec: this.Fundssec,
        Periodsecond: this.Periodsecond,
        Periodthrd: this.Periodthrd,
        first: this.first,
        second: this.second,
        fourth: this.fourth,
        third: this.third,
        Companyfirst: this.Companyfirst,
        Companysecond: this.Companysecond,
        Companyfourth: this.Companyfourth,
        Companythird: this.Companythird,
        Periodfourth: this.Periodfourth,
        sourcesfive: this.sourcesfive,
        Periodone: this.Periodone,
        availablefour: this.availablefour,
        availablethrd: this.availablethrd,
        Insuredfour: this.Insuredfour,
        Diabetesfirst: this.Diabetesfirst,
        Diabetessecond: this.Diabetessecond,
        Diabetesfourth: this.Diabetesfourth,
        Diabetesthird: this.Diabetesthird,
        Statusfirst: this.Statusfirst,
        Statussecond: this.Statussecond,
        Statusfourth: this.Statusfourth,
        Statusthird: this.Statusthird,
        Nomineefirst: this.Nomineefirst,
        Nomineesecond: this.Nomineesecond,
        Nomineefourth: this.Nomineefourth,
        Nomineethird: this.Nomineethird,
        Relationfirst: this.Relationfirst,
        Relationsecond: this.Relationsecond,
        Relationfourth: this.Relationfourth,
        Relationthird: this.Relationthird,
        medicalfirst: this.medicalfirst,
        medicalsecond: this.medicalsecond,
        medicalfourth: this.medicalfourth,
        medicalthird: this.medicalthird,
        Policyfirst: this.Policyfirst,
        Policysec: this.Policysec,
        Policyfour: this.Policyfour,
        Policythrd: this.Policythrd,
        Sumfirst: this.Sumfirst,
        Sumsecond: this.Sumsecond,
        Sumfourth: this.Sumfourth,
        Sumthird: this.Sumthird,
        Filedfirst: this.Filedfirst,
        Filedsecond: this.Filedsecond,
        Filedfourth: this.Filedfourth,
        Filedthird: this.Filedthird,
        Coveredfirst: this.Coveredfirst,
        Coveredsecond: this.Coveredsecond,
        Coveredfourth: this.Coveredfourth,
        Coveredthird: this.Coveredthird,
        infirmitysecond: this.infirmitysecond,
        infirmityfourth: this.infirmityfourth,
        infirmitythird: this.infirmitythird,
        infirmityfirst: this.infirmityfirst,
        healthfirst: this.healthfirst,
        healthsecond: this.healthsecond,
        healthfourth: this.healthfourth,
        healththird: this.healththird,
        Liverfirst: this.Liverfirst,
        Liversecond: this.Liversecond,
        Liverfourth: this.Liverfourth,
        Liverthird: this.Liverthird,
        Cancerfirst: this.Cancerfirst,
        Cancersecond: this.Cancersecond,
        Cancerfourth: this.Cancerfourth,
        Cancerthird: this.Cancerthird,
        Heartfirst: this.Heartfirst,
        Heartsecond: this.Heartsecond,
        Heartfourth: this.Heartfourth,
        Heartthird: this.Heartthird,
        Arthritisfirst: this.Arthritisfirst,
        Arthritissecond: this.Arthritissecond,
        Arthritisfourth: this.Arthritisfourth,
        Arthritisthird: this.Arthritisthird,
        Paralysisfirst: this.Paralysisfirst,
        Paralysissecond: this.Paralysissecond,
        Paralysisfourth: this.Paralysisfourth,
        Paralysisthird: this.Paralysisthird,
        Congenitalfirst: this.Congenitalfirst,
        Congenitalsecond: this.Congenitalsecond,
        Congenitalfourth: this.Congenitalfourth,
        Congenitalthird: this.Congenitalthird,
        Injurtfirst: this.Injurtfirst,
        Injurtsecond: this.Injurtsecond,
        Injurtfourth: this.Injurtfourth,
        Injurtthird: this.Injurtthird,
        Specifyfirst: this.Specifyfirst,
        Specifysecond: this.Specifysecond,
        Specifyfourth: this.Specifyfourth,
        Specifythird: this.Specifythird,
        Drugsfirst: this.Drugsfirst,
        Drugssecond: this.Drugssecond,
        Drugsfourth: this.Drugsfourth,
        Drugsthird: this.Drugsthird,
        tobaccofirst: this.tobaccofirst,
        tobaccosecond: this.tobaccosecond,
        tobaccofourth: this.tobaccofourth,
        tobaccothird: this.tobaccothird,
        Contactfirst: this.Contactfirst,
        Contactsecond: this.Contactsecond,
        Contactfourth: this.Contactfourth,
        Contactthird: this.Contactthird,
        Emailfirst: this.Emailfirst,
        Emailsecond: this.Emailsecond,
        Emailfourth: this.Emailfourth,
        Emailthird: this.Emailthird,
        Kidneyfirst: this.Kidneyfirst,
        Kidneysecond: this.Kidneysecond,
        Kidneyfourth: this.Kidneyfourth,
        Kidneythird: this.Kidneythird,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        IsAllFileldsFilled: false,
        ProsperityId: this.ProposID,

      }
      this.spinner.show()
      this.businessloanservice.SaveHealthInsuranceDetails(cdata).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Health Insurance Draft Details Saved Successfully!!"
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
        debitcard: this.debitcard,
        chequedate: this.chequedate,
        chequeamt: this.chequeamt,
        nmpayer: this.nmpayer,
        Monthincome: this.Monthincome,
        sourcefund: this.sourcefund,
        bnkname: this.bnkname,
        detailsfirst: this.detailsfirst,
        detailsthrd: this.detailsthrd,
        detailsthird: this.detailsthird,
        detailsfour: this.detailsfour,
        dateofbirthFirst: this.dateofbirthFirst,
        dateofbirthsec: this.dateofbirthsec,
        dateofbirthtrd: this.dateofbirthsec,
        genderfirst: this.genderfirst,
        Books: this.Books,
        gendersec: this.gendersec,
        genderfour: this.genderfour,
        Booksfive: this.Booksfive,
        nationalityfirst: this.nationalityfirst,
        nationalitysec: this.nationalitysec,
        nationality: this.nationality,
        Equipmentfive: this.Equipmentfive,
        Personone: this.Personone,
        Personsec: this.Personsec,
        genderthrd: this.genderthrd,
        Personsfourth: this.Personsfourth,
        Personsthrd: this.Personsthrd,
        Insuranceone: this.Insuranceone,
        Insurancetwo: this.Insurancetwo,
        Insurancethrd: this.Insurancethrd,
        Insurancefour: this.Insurancefour,
        Insurancefive: this.Insurancefive,
        proposerthrd: this.proposerthrd,
        boardHfive: this.boardHfive,
        proposertforth: this.proposertforth,
        proposersec: this.proposersec,
        proposertfirst: this.proposertfirst,
        nationalitytrd: this.nationalitytrd,
        dateofbirthfourth: this.dateofbirthfourth,
        Othersfirst: this.Othersfirst,
        Otherstwo: this.Otherstwo,
        Othersthree: this.Othersthree,
        Othersfour: this.Othersfour,
        Othersfive: this.Othersfive,
        Insuredone: this.Insuredone,
        Insuredsec: this.Insuredsec,
        Insuredthrd: this.Insuredthrd,
        assistance: this.assistance,
        Fundsfirst: this.Fundsfirst,
        Fundssec: this.Fundssec,
        Periodsecond: this.Periodsecond,
        Periodthrd: this.Periodthrd,
        first: this.first,
        second: this.second,
        fourth: this.fourth,
        third: this.third,
        Companyfirst: this.Companyfirst,
        Companysecond: this.Companysecond,
        Companyfourth: this.Companyfourth,
        Companythird: this.Companythird,
        Periodfourth: this.Periodfourth,
        sourcesfive: this.sourcesfive,
        Periodone: this.Periodone,
        availablefour: this.availablefour,
        availablethrd: this.availablethrd,
        Insuredfour: this.Insuredfour,
        Diabetesfirst: this.Diabetesfirst,
        Diabetessecond: this.Diabetessecond,
        Diabetesfourth: this.Diabetesfourth,
        Diabetesthird: this.Diabetesthird,
        Statusfirst: this.Statusfirst,
        Statussecond: this.Statussecond,
        Statusfourth: this.Statusfourth,
        Statusthird: this.Statusthird,
        Nomineefirst: this.Nomineefirst,
        Nomineesecond: this.Nomineesecond,
        Nomineefourth: this.Nomineefourth,
        Nomineethird: this.Nomineethird,
        Relationfirst: this.Relationfirst,
        Relationsecond: this.Relationsecond,
        Relationfourth: this.Relationfourth,
        Relationthird: this.Relationthird,
        medicalfirst: this.medicalfirst,
        medicalsecond: this.medicalsecond,
        medicalfourth: this.medicalfourth,
        medicalthird: this.medicalthird,
        Policyfirst: this.Policyfirst,
        Policysec: this.Policysec,
        Policyfour: this.Policyfour,
        Policythrd: this.Policythrd,
        Sumfirst: this.Sumfirst,
        Sumsecond: this.Sumsecond,
        Sumfourth: this.Sumfourth,
        Sumthird: this.Sumthird,
        Filedfirst: this.Filedfirst,
        Filedsecond: this.Filedsecond,
        Filedfourth: this.Filedfourth,
        Filedthird: this.Filedthird,
        Coveredfirst: this.Coveredfirst,
        Coveredsecond: this.Coveredsecond,
        Coveredfourth: this.Coveredfourth,
        Coveredthird: this.Coveredthird,
        infirmitysecond: this.infirmitysecond,
        infirmityfourth: this.infirmityfourth,
        infirmitythird: this.infirmitythird,
        infirmityfirst: this.infirmityfirst,
        healthfirst: this.healthfirst,
        healthsecond: this.healthsecond,
        healthfourth: this.healthfourth,
        healththird: this.healththird,
        Liverfirst: this.Liverfirst,
        Liversecond: this.Liversecond,
        Liverfourth: this.Liverfourth,
        Liverthird: this.Liverthird,
        Cancerfirst: this.Cancerfirst,
        Cancersecond: this.Cancersecond,
        Cancerfourth: this.Cancerfourth,
        Cancerthird: this.Cancerthird,
        Heartfirst: this.Heartfirst,
        Heartsecond: this.Heartsecond,
        Heartfourth: this.Heartfourth,
        Heartthird: this.Heartthird,
        Arthritisfirst: this.Arthritisfirst,
        Arthritissecond: this.Arthritissecond,
        Arthritisfourth: this.Arthritisfourth,
        Arthritisthird: this.Arthritisthird,
        Paralysisfirst: this.Paralysisfirst,
        Paralysissecond: this.Paralysissecond,
        Paralysisfourth: this.Paralysisfourth,
        Paralysisthird: this.Paralysisthird,
        Congenitalfirst: this.Congenitalfirst,
        Congenitalsecond: this.Congenitalsecond,
        Congenitalfourth: this.Congenitalfourth,
        Congenitalthird: this.Congenitalthird,
        Injurtfirst: this.Injurtfirst,
        Injurtsecond: this.Injurtsecond,
        Injurtfourth: this.Injurtfourth,
        Injurtthird: this.Injurtthird,
        Specifyfirst: this.Specifyfirst,
        Specifysecond: this.Specifysecond,
        Specifyfourth: this.Specifyfourth,
        Specifythird: this.Specifythird,
        Drugsfirst: this.Drugsfirst,
        Drugssecond: this.Drugssecond,
        Drugsfourth: this.Drugsfourth,
        Drugsthird: this.Drugsthird,
        tobaccofirst: this.tobaccofirst,
        tobaccosecond: this.tobaccosecond,
        tobaccofourth: this.tobaccofourth,
        tobaccothird: this.tobaccothird,
        Contactfirst: this.Contactfirst,
        Contactsecond: this.Contactsecond,
        Contactfourth: this.Contactfourth,
        Contactthird: this.Contactthird,
        Emailfirst: this.Emailfirst,
        Emailsecond: this.Emailsecond,
        Emailfourth: this.Emailfourth,
        Emailthird: this.Emailthird,
        Kidneyfirst: this.Kidneyfirst,
        Kidneysecond: this.Kidneysecond,
        Kidneyfourth: this.Kidneyfourth,
        Kidneythird: this.Kidneythird,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        SendCopytoSP: this.SendCopytoSP,
        IsAllFileldsFilled: false,
        ProsperityId: this.ProposID,

      }
      this.spinner.show()

      this.businessloanservice.SaveHealthInsuranceDetails(data).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Health Insurance Saved Successfully!!"
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
    this.fieldArrayMove.push(this.carAttribute)
    this.carAttribute = {};
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
    // this.fieldArray.push(this.newAttribute)
    // this.newAttribute = {};
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
              alert("Certificates Uploaded Successfully")
              if (localStorage.getItem("editinsuranceform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
                this.route.navigate(['/HealthInsuranceDetails'])

              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/HealthInsuranceDetails'])
    
              }
              else if(localStorage.getItem("editinsuranceform") != "false" && this.ticketid!=null){
                this.stepper1.selectedIndex = 3

              }
              else{
                this.GetDraftData();

              }
              this.spinner.hide();
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
      ProsperityId: this.ProposID,
      Role: this.role,
      ProductId: 2,
      LoanIdORInsuranceId: 1,
      ApplicationType: "Customer",
      URL: "HealthInsurance",
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
 
 async GetDraftData() {
    if (this.ticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.ticketid

    }
    this.spinner.show();
    this.businessloanservice.GetHealthInsuranceDraftdata(sendid).subscribe((data1: any) => {

      this.spinner.hide();
      let data = JSON.parse(data1,this.toCamelCase);

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
      else if (data.count == 2 && data.healthInsuranceDetails == null) {
        this.stepper1.selectedIndex = 2;
      }
      else if (data.count == 2 && data.healthInsuranceDetails != null) {
        this.debitcard = data.healthInsuranceDetails.debitcard,
          this.chequedate = data.healthInsuranceDetails.chequedate,
          this.chequeamt = data.healthInsuranceDetails.chequeamt,
          this.nmpayer = data.healthInsuranceDetails.nmpayer,
          this.Monthincome = data.healthInsuranceDetails.monthincome,
          this.sourcefund = data.healthInsuranceDetails.sourcefund,
          this.bnkname = data.healthInsuranceDetails.bnkname,
          this.detailsfirst = data.healthInsuranceDetails.detailsfirst,
          this.detailsthrd = data.healthInsuranceDetails.detailsthrd,
          this.detailsthird = data.healthInsuranceDetails.detailsthird,
          this.detailsfour = data.healthInsuranceDetails.detailsfour,
          this.dateofbirthFirst = data.healthInsuranceDetails.dateofbirthFirst,
          this.dateofbirthsec = data.healthInsuranceDetails.dateofbirthsec,
          this.dateofbirthtrd = data.healthInsuranceDetails.dateofbirthtrd,
          this.dateofbirthfourth= data.healthInsuranceDetails.dateofbirthfourth,
          this.genderfirst = data.healthInsuranceDetails.genderfirst,
          this.Books = data.healthInsuranceDetails.books,
          this.gendersec = data.healthInsuranceDetails.gendersec,
          this.genderfour = data.healthInsuranceDetails.genderfour,
          this.Booksfive = data.healthInsuranceDetails.booksfive,
          this.nationalityfirst = data.healthInsuranceDetails.nationalityfirst,
          this.nationalitysec = data.healthInsuranceDetails.nationalitysec,
          this.nationality = data.healthInsuranceDetails.nationality,
          this.Equipmentfive = data.healthInsuranceDetails.equipmentfive,
          this.Personone = data.healthInsuranceDetails.personone,
          this.Personsec = data.healthInsuranceDetails.personsec,
          this.genderthrd = data.healthInsuranceDetails.genderthrd,
          this.Personsfourth = data.healthInsuranceDetails.personsfourth,
          this.Personsthrd = data.healthInsuranceDetails.personsthrd,
          this.Insuranceone = data.healthInsuranceDetails.insuranceone,
          this.Insurancetwo = data.healthInsuranceDetails.insurancetwo,
          this.Insurancethrd = data.healthInsuranceDetails.insurancethrd,
          this.Insurancefour = data.healthInsuranceDetails.insurancefour,
          this.Insurancefive = data.healthInsuranceDetails.insurancefive,
          this.proposerthrd = data.healthInsuranceDetails.proposerthrd,
          this.boardHfive = data.healthInsuranceDetails.boardHfive,
          this.proposertforth = data.healthInsuranceDetails.proposertforth,
          this.proposersec = data.healthInsuranceDetails.proposersec,
          this.proposertfirst = data.healthInsuranceDetails.proposertfirst,
          this.nationalitytrd = data.healthInsuranceDetails.nationalitytrd,
          this.dateofbirthfourth = data.healthInsuranceDetails.dateofbirthfourth,
          this.Othersfirst = data.healthInsuranceDetails.othersfirst,
          this.Otherstwo = data.healthInsuranceDetails.otherstwo,
          this.Othersthree = data.healthInsuranceDetails.othersthree,
          this.Othersfour = data.healthInsuranceDetails.othersfour,
          this.Othersfive = data.healthInsuranceDetails.othersfive,
          this.Insuredone = data.healthInsuranceDetails.insuredone,
          this.Insuredsec = data.healthInsuranceDetails.insuredsec,
          this.Insuredthrd = data.healthInsuranceDetails.insuredthrd,
          this.assistance = data.healthInsuranceDetails.assistance,
          this.Fundsfirst = data.healthInsuranceDetails.fundsfirst,
          this.Fundssec = data.healthInsuranceDetails.fundssec,
          this.Periodsecond = data.healthInsuranceDetails.periodsecond,
          this.Periodthrd = data.healthInsuranceDetails.periodthrd,
          this.first = data.healthInsuranceDetails.first,
          this.second = data.healthInsuranceDetails.second,
          this.fourth = data.healthInsuranceDetails.fourth,
          this.third = data.healthInsuranceDetails.third,
          this.Companyfirst = data.healthInsuranceDetails.companyfirst,
          this.Companysecond = data.healthInsuranceDetails.companysecond,
          this.Companyfourth = data.healthInsuranceDetails.companyfourth,
          this.Companythird = data.healthInsuranceDetails.companythird,
          this.Periodfourth = data.healthInsuranceDetails.periodfourth,
          this.sourcesfive = data.healthInsuranceDetails.sourcesfive,
          this.Periodone = data.healthInsuranceDetails.periodone,
          this.availablefour = data.healthInsuranceDetails.availablefour,
          this.availablethrd = data.healthInsuranceDetails.availablethrd,
          this.Insuredfour = data.healthInsuranceDetails.insuredfour,
          this.Diabetesfirst = data.healthInsuranceDetails.diabetesfirst,
          this.Diabetessecond = data.healthInsuranceDetails.diabetessecond,
          this.Diabetesfourth = data.healthInsuranceDetails.diabetesfourth,
          this.Diabetesthird = data.healthInsuranceDetails.diabetesthird,
          this.Statusfirst = data.healthInsuranceDetails.statusfirst,
          this.Statussecond = data.healthInsuranceDetails.statussecond,
          this.Statusfourth = data.healthInsuranceDetails.statusfourth,
          this.Statusthird = data.healthInsuranceDetails.statusthird,
          this.Nomineefirst = data.healthInsuranceDetails.nomineefirst,
          this.Nomineesecond = data.healthInsuranceDetails.nomineesecond,
          this.Nomineefourth = data.healthInsuranceDetails.nomineefourth,
          this.Nomineethird = data.healthInsuranceDetails.nomineethird,
          this.Relationfirst = data.healthInsuranceDetails.relationfirst,
          this.Relationsecond = data.healthInsuranceDetails.relationsecond,
          this.Relationfourth = data.healthInsuranceDetails.relationfourth,
          this.Relationthird = data.healthInsuranceDetails.relationthird,
          this.medicalfirst = data.healthInsuranceDetails.medicalfirst,
          this.medicalsecond = data.healthInsuranceDetails.medicalsecond,
          this.medicalfourth = data.healthInsuranceDetails.medicalfourth,
          this.medicalthird = data.healthInsuranceDetails.medicalthird,
          this.Policyfirst = data.healthInsuranceDetails.policyfirst,
          this.Policysec = data.healthInsuranceDetails.policysec,
          this.Policyfour = data.healthInsuranceDetails.policyfour,
          this.Policythrd = data.healthInsuranceDetails.policythrd,
          this.Sumfirst = data.healthInsuranceDetails.sumfirst,
          this.Sumsecond = data.healthInsuranceDetails.sumsecond,
          this.Sumfourth = data.healthInsuranceDetails.sumfourth,
          this.Sumthird = data.healthInsuranceDetails.sumthird,
          this.Filedfirst = data.healthInsuranceDetails.filedfirst,
          this.Filedsecond = data.healthInsuranceDetails.fFiledsecond,
          this.Filedfourth = data.healthInsuranceDetails.filedfourth,
          this.Filedthird = data.healthInsuranceDetails.filedthird,
          this.Coveredfirst = data.healthInsuranceDetails.coveredfirst,
          this.Coveredsecond = data.healthInsuranceDetails.coveredsecond,
          this.Coveredfourth = data.healthInsuranceDetails.coveredfourth,
          this.Coveredthird = data.healthInsuranceDetails.coveredthird,
          this.infirmitysecond = data.healthInsuranceDetails.infirmitysecond,
          this.infirmityfourth = data.healthInsuranceDetails.infirmityfourth,
          this.infirmitythird = data.healthInsuranceDetails.infirmitythird,
          this.infirmityfirst = data.healthInsuranceDetails.infirmityfirst,
          this.healthfirst = data.healthInsuranceDetails.healthfirst,
          this.healthsecond = data.healthInsuranceDetails.healthsecond,
          this.healthfourth = data.healthInsuranceDetails.healthfourth,
          this.healththird = data.healthInsuranceDetails.healththird,
          this.Liverfirst = data.healthInsuranceDetails.liverfirst,
          this.Liversecond = data.healthInsuranceDetails.liversecond,
          this.Liverfourth = data.healthInsuranceDetails.liverfourth,
          this.Liverthird = data.healthInsuranceDetails.liverthird,
          this.Cancerfirst = data.healthInsuranceDetails.cancerfirst,
          this.Cancersecond = data.healthInsuranceDetails.cancersecond,
          this.Cancerfourth = data.healthInsuranceDetails.cancerfourth,
          this.Cancerthird = data.healthInsuranceDetails.cancerthird,
          this.Heartfirst = data.healthInsuranceDetails.heartfirst,
          this.Heartsecond = data.healthInsuranceDetails.heartsecond,
          this.Heartfourth = data.healthInsuranceDetails.heartfourth,
          this.Heartthird = data.healthInsuranceDetails.heartthird,
          this.Arthritisfirst = data.healthInsuranceDetails.arthritisfirst,
          this.Arthritissecond = data.healthInsuranceDetails.arthritissecond,
          this.Arthritisfourth = data.healthInsuranceDetails.arthritisfourth,
          this.Arthritisthird = data.healthInsuranceDetails.arthritisthird,
          this.Paralysisfirst = data.healthInsuranceDetails.paralysisfirst,
          this.Paralysissecond = data.healthInsuranceDetails.paralysissecond,
          this.Paralysisfourth = data.healthInsuranceDetails.paralysisfourth,
          this.Paralysisthird = data.healthInsuranceDetails.paralysisthird,
          this.Congenitalfirst = data.healthInsuranceDetails.congenitalfirst,
          this.Congenitalsecond = data.healthInsuranceDetails.congenitalsecond,
          this.Congenitalfourth = data.healthInsuranceDetails.congenitalfourth,
          this.Congenitalthird = data.healthInsuranceDetails.congenitalthird,
          this.Injurtfirst = data.healthInsuranceDetails.injurtfirst,
          this.Injurtsecond = data.healthInsuranceDetails.injurtsecond,
          this.Injurtfourth = data.healthInsuranceDetails.injurtfourth,
          this.Injurtthird = data.healthInsuranceDetails.injurtthird,
          this.Specifyfirst = data.healthInsuranceDetails.specifyfirst,
          this.Specifysecond = data.healthInsuranceDetails.specifysecond,
          this.Specifyfourth = data.healthInsuranceDetails.specifyfourth,
          this.Specifythird = data.healthInsuranceDetails.specifythird,
          this.Drugsfirst = data.healthInsuranceDetails.drugsfirst,
          this.Drugssecond = data.healthInsuranceDetails.drugssecond,
          this.Drugsfourth = data.healthInsuranceDetails.drugsfourth,
          this.Drugsthird = data.healthInsuranceDetails.drugsthird,
          this.tobaccofirst = data.healthInsuranceDetails.tobaccofirst,
          this.tobaccosecond = data.healthInsuranceDetails.tobaccosecond,
          this.tobaccofourth = data.healthInsuranceDetails.tobaccofourth,
          this.tobaccothird = data.healthInsuranceDetails.tobaccothird,
          this.Contactfirst = data.healthInsuranceDetails.contactfirst,
          this.Contactsecond = data.healthInsuranceDetails.contactsecond,
          this.Contactfourth = data.healthInsuranceDetails.contactfourth,
          this.Contactthird = data.healthInsuranceDetails.contactthird,
          this.Emailfirst = data.healthInsuranceDetails.emailfirst,
          this.Emailsecond = data.healthInsuranceDetails.emailsecond,
          this.Emailfourth = data.healthInsuranceDetails.emailfourth,
          this.Emailthird = data.healthInsuranceDetails.emailthird,
          this.Kidneyfirst = data.healthInsuranceDetails.kidneyfirst,
          this.Kidneysecond = data.healthInsuranceDetails.kidneysecond,
          this.Kidneyfourth = data.healthInsuranceDetails.kidneyfourth,
          this.Kidneythird = data.healthInsuranceDetails.kidneythird,
          this.stepper1.selectedIndex =2;
      }


      else if ((data.count == 3|| data.count == 4) && data.certificateDetails == null) {
        this.stepper1.selectedIndex = 3;

      }
      else if ((data.count == 3 ||data.count == 4) && data.certificateDetails != null) {
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
 async GetEditData() {
    if (this.ticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.ticketid

    }
    this.spinner.show();
    this.businessloanservice.GetHealthInsuranceEditdata(sendid).subscribe((data: any) => {
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
    
       if (data.healthInsuranceDetails != null) {
        this.debitcard = data.healthInsuranceDetails.debitcard,
          this.chequedate = data.healthInsuranceDetails.chequedate,
          this.chequeamt = data.healthInsuranceDetails.chequeamt,
          this.nmpayer = data.healthInsuranceDetails.nmpayer,
          this.Monthincome = data.healthInsuranceDetails.monthincome,
          this.sourcefund = data.healthInsuranceDetails.sourcefund,
          this.bnkname = data.healthInsuranceDetails.bnkname,
          this.detailsfirst = data.healthInsuranceDetails.detailsfirst,
          this.detailsthrd = data.healthInsuranceDetails.detailsthrd,
          this.detailsthird = data.healthInsuranceDetails.detailsthird,
          this.detailsfour = data.healthInsuranceDetails.detailsfour,
          this.dateofbirthFirst = data.healthInsuranceDetails.dateofbirthFirst,
          this.dateofbirthsec = data.healthInsuranceDetails.dateofbirthsec,
          this.dateofbirthtrd = data.healthInsuranceDetails.dateofbirthtrd,
          this.dateofbirthfourth= data.healthInsuranceDetails.dateofbirthfourth,
          this.genderfirst = data.healthInsuranceDetails.genderfirst,
          this.Books = data.healthInsuranceDetails.books,
          this.gendersec = data.healthInsuranceDetails.gendersec,
          this.genderfour = data.healthInsuranceDetails.genderfour,
          this.Booksfive = data.healthInsuranceDetails.booksfive,
          this.nationalityfirst = data.healthInsuranceDetails.nationalityfirst,
          this.nationalitysec = data.healthInsuranceDetails.nationalitysec,
          this.nationality = data.healthInsuranceDetails.nationality,
          this.Equipmentfive = data.healthInsuranceDetails.equipmentfive,
          this.Personone = data.healthInsuranceDetails.personone,
          this.Personsec = data.healthInsuranceDetails.personsec,
          this.genderthrd = data.healthInsuranceDetails.genderthrd,
          this.Personsfourth = data.healthInsuranceDetails.personsfourth,
          this.Personsthrd = data.healthInsuranceDetails.personsthrd,
          this.Insuranceone = data.healthInsuranceDetails.insuranceone,
          this.Insurancetwo = data.healthInsuranceDetails.insurancetwo,
          this.Insurancethrd = data.healthInsuranceDetails.insurancethrd,
          this.Insurancefour = data.healthInsuranceDetails.insurancefour,
          this.Insurancefive = data.healthInsuranceDetails.insurancefive,
          this.proposerthrd = data.healthInsuranceDetails.proposerthrd,
          this.boardHfive = data.healthInsuranceDetails.boardHfive,
          this.proposertforth = data.healthInsuranceDetails.proposertforth,
          this.proposersec = data.healthInsuranceDetails.proposersec,
          this.proposertfirst = data.healthInsuranceDetails.proposertfirst,
          this.nationalitytrd = data.healthInsuranceDetails.nationalitytrd,
          this.dateofbirthfourth = data.healthInsuranceDetails.dateofbirthfourth,
          this.Othersfirst = data.healthInsuranceDetails.othersfirst,
          this.Otherstwo = data.healthInsuranceDetails.otherstwo,
          this.Othersthree = data.healthInsuranceDetails.othersthree,
          this.Othersfour = data.healthInsuranceDetails.othersfour,
          this.Othersfive = data.healthInsuranceDetails.othersfive,
          this.Insuredone = data.healthInsuranceDetails.insuredone,
          this.Insuredsec = data.healthInsuranceDetails.insuredsec,
          this.Insuredthrd = data.healthInsuranceDetails.insuredthrd,
          this.assistance = data.healthInsuranceDetails.assistance,
          this.Fundsfirst = data.healthInsuranceDetails.fundsfirst,
          this.Fundssec = data.healthInsuranceDetails.fundssec,
          this.Periodsecond = data.healthInsuranceDetails.periodsecond,
          this.Periodthrd = data.healthInsuranceDetails.periodthrd,
          this.first = data.healthInsuranceDetails.first,
          this.second = data.healthInsuranceDetails.second,
          this.fourth = data.healthInsuranceDetails.fourth,
          this.third = data.healthInsuranceDetails.third,
          this.Companyfirst = data.healthInsuranceDetails.companyfirst,
          this.Companysecond = data.healthInsuranceDetails.companysecond,
          this.Companyfourth = data.healthInsuranceDetails.companyfourth,
          this.Companythird = data.healthInsuranceDetails.companythird,
          this.Periodfourth = data.healthInsuranceDetails.periodfourth,
          this.sourcesfive = data.healthInsuranceDetails.sourcesfive,
          this.Periodone = data.healthInsuranceDetails.periodone,
          this.availablefour = data.healthInsuranceDetails.availablefour,
          this.availablethrd = data.healthInsuranceDetails.availablethrd,
          this.Insuredfour = data.healthInsuranceDetails.insuredfour,
          this.Diabetesfirst = data.healthInsuranceDetails.diabetesfirst,
          this.Diabetessecond = data.healthInsuranceDetails.diabetessecond,
          this.Diabetesfourth = data.healthInsuranceDetails.diabetesfourth,
          this.Diabetesthird = data.healthInsuranceDetails.diabetesthird,
          this.Statusfirst = data.healthInsuranceDetails.statusfirst,
          this.Statussecond = data.healthInsuranceDetails.statussecond,
          this.Statusfourth = data.healthInsuranceDetails.statusfourth,
          this.Statusthird = data.healthInsuranceDetails.statusthird,
          this.Nomineefirst = data.healthInsuranceDetails.nomineefirst,
          this.Nomineesecond = data.healthInsuranceDetails.nomineesecond,
          this.Nomineefourth = data.healthInsuranceDetails.nomineefourth,
          this.Nomineethird = data.healthInsuranceDetails.nomineethird,
          this.Relationfirst = data.healthInsuranceDetails.relationfirst,
          this.Relationsecond = data.healthInsuranceDetails.relationsecond,
          this.Relationfourth = data.healthInsuranceDetails.relationfourth,
          this.Relationthird = data.healthInsuranceDetails.relationthird,
          this.medicalfirst = data.healthInsuranceDetails.medicalfirst,
          this.medicalsecond = data.healthInsuranceDetails.medicalsecond,
          this.medicalfourth = data.healthInsuranceDetails.medicalfourth,
          this.medicalthird = data.healthInsuranceDetails.medicalthird,
          this.Policyfirst = data.healthInsuranceDetails.policyfirst,
          this.Policysec = data.healthInsuranceDetails.policysec,
          this.Policyfour = data.healthInsuranceDetails.policyfour,
          this.Policythrd = data.healthInsuranceDetails.policythrd,
          this.Sumfirst = data.healthInsuranceDetails.sumfirst,
          this.Sumsecond = data.healthInsuranceDetails.sumsecond,
          this.Sumfourth = data.healthInsuranceDetails.sumfourth,
          this.Sumthird = data.healthInsuranceDetails.sumthird,
          this.Filedfirst = data.healthInsuranceDetails.filedfirst,
          this.Filedsecond = data.healthInsuranceDetails.fFiledsecond,
          this.Filedfourth = data.healthInsuranceDetails.filedfourth,
          this.Filedthird = data.healthInsuranceDetails.filedthird,
          this.Coveredfirst = data.healthInsuranceDetails.coveredfirst,
          this.Coveredsecond = data.healthInsuranceDetails.coveredsecond,
          this.Coveredfourth = data.healthInsuranceDetails.coveredfourth,
          this.Coveredthird = data.healthInsuranceDetails.coveredthird,
          this.infirmitysecond = data.healthInsuranceDetails.infirmitysecond,
          this.infirmityfourth = data.healthInsuranceDetails.infirmityfourth,
          this.infirmitythird = data.healthInsuranceDetails.infirmitythird,
          this.infirmityfirst = data.healthInsuranceDetails.infirmityfirst,
          this.healthfirst = data.healthInsuranceDetails.healthfirst,
          this.healthsecond = data.healthInsuranceDetails.healthsecond,
          this.healthfourth = data.healthInsuranceDetails.healthfourth,
          this.healththird = data.healthInsuranceDetails.healththird,
          this.Liverfirst = data.healthInsuranceDetails.liverfirst,
          this.Liversecond = data.healthInsuranceDetails.liversecond,
          this.Liverfourth = data.healthInsuranceDetails.liverfourth,
          this.Liverthird = data.healthInsuranceDetails.liverthird,
          this.Cancerfirst = data.healthInsuranceDetails.cancerfirst,
          this.Cancersecond = data.healthInsuranceDetails.cancersecond,
          this.Cancerfourth = data.healthInsuranceDetails.cancerfourth,
          this.Cancerthird = data.healthInsuranceDetails.cancerthird,
          this.Heartfirst = data.healthInsuranceDetails.heartfirst,
          this.Heartsecond = data.healthInsuranceDetails.heartsecond,
          this.Heartfourth = data.healthInsuranceDetails.heartfourth,
          this.Heartthird = data.healthInsuranceDetails.heartthird,
          this.Arthritisfirst = data.healthInsuranceDetails.arthritisfirst,
          this.Arthritissecond = data.healthInsuranceDetails.arthritissecond,
          this.Arthritisfourth = data.healthInsuranceDetails.arthritisfourth,
          this.Arthritisthird = data.healthInsuranceDetails.arthritisthird,
          this.Paralysisfirst = data.healthInsuranceDetails.paralysisfirst,
          this.Paralysissecond = data.healthInsuranceDetails.paralysissecond,
          this.Paralysisfourth = data.healthInsuranceDetails.paralysisfourth,
          this.Paralysisthird = data.healthInsuranceDetails.paralysisthird,
          this.Congenitalfirst = data.healthInsuranceDetails.congenitalfirst,
          this.Congenitalsecond = data.healthInsuranceDetails.congenitalsecond,
          this.Congenitalfourth = data.healthInsuranceDetails.congenitalfourth,
          this.Congenitalthird = data.healthInsuranceDetails.congenitalthird,
          this.Injurtfirst = data.healthInsuranceDetails.injurtfirst,
          this.Injurtsecond = data.healthInsuranceDetails.injurtsecond,
          this.Injurtfourth = data.healthInsuranceDetails.injurtfourth,
          this.Injurtthird = data.healthInsuranceDetails.injurtthird,
          this.Specifyfirst = data.healthInsuranceDetails.specifyfirst,
          this.Specifysecond = data.healthInsuranceDetails.specifysecond,
          this.Specifyfourth = data.healthInsuranceDetails.specifyfourth,
          this.Specifythird = data.healthInsuranceDetails.specifythird,
          this.Drugsfirst = data.healthInsuranceDetails.drugsfirst,
          this.Drugssecond = data.healthInsuranceDetails.drugssecond,
          this.Drugsfourth = data.healthInsuranceDetails.drugsfourth,
          this.Drugsthird = data.healthInsuranceDetails.drugsthird,
          this.tobaccofirst = data.healthInsuranceDetails.tobaccofirst,
          this.tobaccosecond = data.healthInsuranceDetails.tobaccosecond,
          this.tobaccofourth = data.healthInsuranceDetails.tobaccofourth,
          this.tobaccothird = data.healthInsuranceDetails.tobaccothird,
          this.Contactfirst = data.healthInsuranceDetails.contactfirst,
          this.Contactsecond = data.healthInsuranceDetails.contactsecond,
          this.Contactfourth = data.healthInsuranceDetails.contactfourth,
          this.Contactthird = data.healthInsuranceDetails.contactthird,
          this.Emailfirst = data.healthInsuranceDetails.emailfirst,
          this.Emailsecond = data.healthInsuranceDetails.emailsecond,
          this.Emailfourth = data.healthInsuranceDetails.emailfourth,
          this.Emailthird = data.healthInsuranceDetails.emailthird,
          this.Kidneyfirst = data.healthInsuranceDetails.kidneyfirst,
          this.Kidneysecond = data.healthInsuranceDetails.kidneysecond,
          this.Kidneyfourth = data.healthInsuranceDetails.kidneyfourth,
          this.Kidneythird = data.healthInsuranceDetails.kidneythird
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
       
        else if (this.editformname == "bank") {
          this.stepper1.selectedIndex = 1;

        }
   
        else if (this.editformname == "health") {
          this.stepper1.selectedIndex =2;

        }
        else if (this.editformname == "certificates") {
          this.stepper1.selectedIndex = 3;

        }
      }
    })
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
      IsAllFileldsFilled: false,
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
        if (this.bankdocs[index].documentName == "Aadhar File" || this.bankdocs[index].documentName == "Aadhar") {
          this.Aadharexist = true;
        }
        if (this.bankdocs[index].documentName == "Passport File" ||this.bankdocs[index].documentName == "Passport") {
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
        if (this.bankdocs[index].documentName == "Voter Id" ||this.bankdocs[index].documentName == "Voter ID") {
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
          PANNum:this.pannumber,
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
          Role: this.role
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
        if (this.bankdocs[index].documentName == "Aadhar File"|| this.bankdocs[index].documentName == "Aadhar") {
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
        if (this.bankdocs[index].documentName == "Voter Id"||this.bankdocs[index].documentName == "Voter ID") {
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
              if (localStorage.getItem("editinsuranceform") != "false" &&(this.ticketid==null||this.ticketid==undefined||this.ticketid=="")) {
                this.route.navigate(['/HealthInsuranceDetails'])

              }
              else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/HealthInsuranceDetails'])
    
              }
              else if(localStorage.getItem("editinsuranceform") != "false" && this.ticketid!=null){
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
  
  previewinsurancedetails() {
    if (this.ticketid == null) {
      this.ticketid = this.ProposID
    }
    localStorage.setItem("previewticketid", this.customerid + "," + this.ticketid);
    this.route.navigate(['previewinsurancedetails/' + "health"]);
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
      RequestType:5,
      Information:"Helath Insurance"


    }
    this.spinner.show();
    this.businessloanservice.SubmitInsuranceForm(cdata).subscribe((data: any) => {
      if (data == "ok") {
        if(this.role == '1008'){
          alert("Health Insurance Form Submitted Successfully!!")
          this.route.navigate(['/badashboard']);

        }
        else{
          alert("Health Insurance Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
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
  }}

export class DynamicGrid {
  title1: string;
  title2: string;
  title3: string;
}


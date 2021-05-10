import { Component, OnInit, ViewChild } from '@angular/core';
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
import { LifeInsuranceService } from 'src/app/Shared/LifeInsurance/life-insurance.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class LifeInsuranceComponent implements OnInit {
  @ViewChild('stepper1') stepper1: MatStepper;
  selectedchequetype: any;
  selectedchequetypeid: any;
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
  enablepreview: boolean= false;
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
  projectWorkSpanId: any;
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
  sameadress: boolean;
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
  ticketid: any;
  newDynamic: any = {};
  dedtQty: number;
  Qty: any;
  customerid: string;
  role: string;
  todayDate: string;
  bankdocsexist: boolean = false;
  bankdocs: any = [];
  files111: any;
  files112: any;
  files113: any;
  SelectedAgentSignature: any; AppetiteRisks: any;
  ProjectWorkSpans: any;
  LifeStages: any;
  ProtectionNeeds: any;
  projectSpanId: any;
  lifeStageId: any;
  protectionNeedId: any;
  appetiteRiskId: any;
  PermanentSameasResidential: any;
  SelectedProspectSignature: any;
  SelectedProposersSignature: any;



  //lifeInsurance
  empOccupation: any;
  empNatureofWork: any;
  emplengthofService: any;
  empAnnualIncome: any;
  empIncomeProof: any;
  empunderPension: any;
  empnormalRetirement: any;
  empschemeInsurance: any;
  emppersonalPremium: any;
  empretirementage: any;
  empanticipatedValue: any;
  incomelastyear: any;
  incomecuryear: any;
  income5to10: any;
  income10to15: any;
  income15to20: any;
  income20to25: any;
  income25to30: any;
  explastyear: any;
  expcuryear: any;
  exp5to10: any;
  exp10to15: any;
  exp15to20: any;
  exp20to25: any;
  exp25to30: any;
  finsavings: any;
  finliabilities: any;
  fininheritance: any;
  lifeNameMemberOne: any;
  healthNameMemberOne: any;
  savingsNameMemberOne: any;
  pensionNameMember: any;
  otheNameofMember: any;
  lifeDetailsone: any;
  healthDetailsone: any;
  savingsDetailsone: any;
  pensionDetailsone: any;
  otherDetailsone: any;
  lifeNameMemberTwo: any;
  healthNameMemberTwo: any;
  savingsNameMemberTwo: any;
  pensionNameMemberTwo: any;
  otherNameMemberTwo: any;
  lifeDetailsTwo: any;
  healthDetailsTwo: any;
  savingsDetailsTwo: any;
  pensionDetailsTwo: any;
  otherDetailsTwo: any;
  phyHeight: any;
  phyWeight: any;
  physicaltg: any;
  surgerytg: boolean = false;
  Oncologisttg: boolean = false;
  ailmenttg: boolean = false;
  absentfromworktg: boolean = false;
  Hepatitistg: boolean = false;
  Rheumatictg: boolean = false;
  Kidneytg: boolean = false;
  Gastritistg: boolean = false;
  Thyroidtg: boolean = false;
  Angioplastytg: boolean = false;
  Diabetestg: boolean = false;
  Bloodpressuretg: boolean = false;
  Throattg: boolean = false;
  Livertg: boolean = false;
  Sclerosistg: boolean = false;
  Bronchitistg: boolean = false;
  Anaemiatg: boolean = false;
  Musculoskeletaltg: boolean = false;
  impairmenttg: boolean = false;
  curpregnanttg: boolean = false;
  pregmonths: any;
  stageage: any;
  miscariagetg: boolean = false;
  gynecologicaltg: boolean = false;
  transmittedtg: boolean = false;
  prospectlastyear: any;
  prospectcuryear: any;
  prospect5to10: any;
  prospect10to15: any;
  prospect15to20: any;
  prospect20to25: any;
  prospect25to30: any;
  prospectMonthlylastyear: any;
  prospectMonthlycuryear: any;
  prospectMonthly5to10: any;
  prospectMonthly10to15: any;
  prospectMonthly15to20: any;
  prospectMonthly20to25: any;
  prospectMonthly25to30: any;

  lifeincDeathMaturity: any;
  desirableSumAssured: any;
  healthInsurance: any;
  desirablecoverageperAnnum: any;
  savingandinvestplan: any;
  desirablereturns: any;
  pensionPlanning: any;
  desirablepensionperAnnum: any;
  incPlanName: any;
  incpremiumType: any;
  incPaymentMode: any;
  incpaymentmethod: any;
  incPremiumTerm: any;
  inccoverageaTerm: any;
  incSumAssured: any;
  incBenefits: any;
  foodlastyear: any;
  foodcuryear: any;
  food5to10: any;
  food10to15: any;
  food15to20: any;
  food20to25: any;
  food25to30: any;
  edulastyear: any;
  educuryear: any;
  edu5to10: any;
  edu10to15: any;
  edu15to20: any;
  edu20to25: any;
  edu25to30: any;
  marlastyear: any;
  marcuryear: any;
  mar5to10: any;
  mar10to15: any;
  mar15to20: any;
  mar20to25: any;
  mar25to30: any;

  vacationlastyear: any;
  vacationcuryear: any;
  vacation5to10: any;
  vacation10to15: any;
  vacation15to20: any;
  vacation20to25: any;
  vacation25to30: any;
  otherlastyear: any;
  othercuryear: any;
  other5to10: any;
  other10to15: any;
  other15to20: any;
  other20to25: any;
  other25to30: any;
  totallastyear: any;
  totalcuryear: any;
  total5to10: any;
  total10to15: any;
  total15to20: any;
  total20to25: any;
  total25to30: any;
  recommendedpolicy: any;
  recommendedcommit: any;
  recommendedRisk: any;
  recommendedsuitedPolicy: any;
  todaysdateAgent: any;
  todaysdateprospect: any;
  isChecked = true

  IsConfirm: any;
  dispProspectsSignFile: any;
  dispAgentSignFile: any;
  dispProposerSignFile: any;
  Aadharexist: boolean = false;
  Passportexist: boolean = false;
  GSTexist: boolean = false;
  ITexist: boolean = false;
  BankStatexist: boolean = false;
  VoterIDexist: boolean = false;
  lifeInsuranceDocs: any;
  agentsSignexist: boolean = false;
  proposerSignexist: boolean = false;
  prospectsSignexist: boolean = false;
  castedetail:any;
  religiondetail: any;
  qualificationdetail: any;
  designationd: any;
  occupatoiondetail:any;
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
  Nomineetype: string;
  Nagedob: any
  minormiddname: any;
  minorlastname: any;
  otherdocuments: any;
  otherdocumentname:any
   otherdocument:any
   otherdoctype: any;
   otherdocname: any;
   customerotherdocs: any=[];
   otherdocactualname: any;
   CertificateDisplay: any=[];
   certificates: any = [];
   certificatesexist: boolean = false;
   BirthCertificateexist: boolean = false;
   CasteCertificateexist: boolean = false;
   DegreeCertificateexist: boolean = false;
   MedicalCertificateexist: boolean = false;
   PGCertificateexist: boolean = false;
   SSCCertificateexist: boolean = false;
  guardianname: any;
  guardioanrelationshipwithminor: any;
  guardioanrelationshipwithminorid: any;
  minorrelationshipforguardian: boolean;
  GuardianSelectedAadharFiles: string;
  GuardianSelectedpanFiles: string;
  otherdesignation: boolean;
  othersoccupation: boolean;
  otherequalification: boolean;
  othereligiondetails: boolean;
  othercastedetails: boolean;
  ProposID: any;
  familydocs: any=[];
  familydocsexist: boolean=false;
  editformname: string;
  ProspectIdtoDisplydata: string;
  get f() { return this.RegistrationForm.controls; }
  get d() { return this.DetailsForm.controls; }
  get k() { return this.BankDetailsForm.controls; }
  get e() { return this.lifeinsuranceform.controls; }

  RegistrationForm = new FormGroup({
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
    guardianname:new FormControl(),
    guardioanrelationshipwithminor:new FormControl(),
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

  lifeinsuranceform = new FormGroup({
    empOccupation: new FormControl(),
    empNatureofWork: new FormControl(),
    emplengthofService: new FormControl(),
    empAnnualIncome: new FormControl(),
    empIncomeProof: new FormControl(),
    empunderPension: new FormControl(),
    empnormalRetirement: new FormControl(),
    empschemeInsurance: new FormControl(),
    emppersonalPremium: new FormControl(),
    empretirementage: new FormControl(),
    empanticipatedValue: new FormControl(),
    incomelastyear: new FormControl(),
    incomecuryear: new FormControl(),
    income5to10: new FormControl(),
    income10to15: new FormControl(),
    income15to20: new FormControl(),
    income20to25: new FormControl(),
    income25to30: new FormControl(),
    explastyear: new FormControl(),
    expcuryear: new FormControl(),
    exp5to10: new FormControl(),
    exp10to15: new FormControl(),
    exp15to20: new FormControl(),
    exp20to25: new FormControl(),
    exp25to30: new FormControl(),
    finsavings: new FormControl(),
    finliabilities: new FormControl(),
    fininheritance: new FormControl(),
    lifeNameMemberOne: new FormControl(),
    healthNameMemberOne: new FormControl(),
    savingsNameMemberOne: new FormControl(),
    pensionNameMember: new FormControl(),
    otheNameofMember: new FormControl(),
    lifeDetailsone: new FormControl(),
    healthDetailsone: new FormControl(),
    savingsDetailsone: new FormControl(),
    pensionDetailsone: new FormControl(),
    otherDetailsone: new FormControl(),
    lifeNameMemberTwo: new FormControl(),
    healthNameMemberTwo: new FormControl(),
    savingsNameMemberTwo: new FormControl(),
    pensionNameMemberTwo: new FormControl(),
    otherNameMemberTwo: new FormControl(),
    lifeDetailsTwo: new FormControl(),
    healthDetailsTwo: new FormControl(),
    savingsDetailsTwo: new FormControl(),
    pensionDetailsTwo: new FormControl(),
    otherDetailsTwo: new FormControl(),
    phyHeight: new FormControl(),
    phyWeight: new FormControl(),
    physicaltg: new FormControl(),
    surgerytg: new FormControl(),
    Oncologisttg: new FormControl(),
    ailmenttg: new FormControl(),
    absentfromworktg: new FormControl(),
    Hepatitistg: new FormControl(),
    Rheumatictg: new FormControl(),
    Kidneytg: new FormControl(),
    Gastritistg: new FormControl(),
    Thyroidtg: new FormControl(),
    Angioplastytg: new FormControl(),
    Diabetestg: new FormControl(),
    Bloodpressuretg: new FormControl(),
    Throattg: new FormControl(),
    Livertg: new FormControl(),
    Sclerosistg: new FormControl(),
    Bronchitistg: new FormControl(),
    Anaemiatg: new FormControl(),
    Musculoskeletaltg: new FormControl(),
    impairmenttg: new FormControl(),
    curpregnanttg: new FormControl(),
    pregmonths: new FormControl(),
    stageage: new FormControl(),
    miscariagetg: new FormControl(),
    gynecologicaltg: new FormControl(),
    transmittedtg: new FormControl(),
    prospectlastyear: new FormControl(),
    prospectcuryear: new FormControl(),
    prospect5to10: new FormControl(),
    prospect10to15: new FormControl(),
    prospect15to20: new FormControl(),
    prospect20to25: new FormControl(),
    prospect25to30: new FormControl(),
    prospectMonthlylastyear: new FormControl(),
    prospectMonthlycuryear: new FormControl(),
    prospectMonthly5to10: new FormControl(),
    prospectMonthly10to15: new FormControl(),
    prospectMonthly15to20: new FormControl(),
    prospectMonthly20to25: new FormControl(),
    prospectMonthly25to30: new FormControl(),

    lifeincDeathMaturity: new FormControl(),
    desirableSumAssured: new FormControl(),
    healthInsurance: new FormControl(),
    desirablecoverageperAnnum: new FormControl(),
    savingandinvestplan: new FormControl(),
    desirablereturns: new FormControl(),
    pensionPlanning: new FormControl(),
    desirablepensionperAnnum: new FormControl(),
    incPlanName: new FormControl(),
    incpremiumType: new FormControl(),
    incPaymentMode: new FormControl(),
    incpaymentmethod: new FormControl(),
    incPremiumTerm: new FormControl(),
    inccoverageaTerm: new FormControl(),
    incSumAssured: new FormControl(),
    incBenefits: new FormControl(),
    foodlastyear: new FormControl(),
    foodcuryear: new FormControl(),
    food5to10: new FormControl(),
    food10to15: new FormControl(),
    food15to20: new FormControl(),
    food20to25: new FormControl(),
    food25to30: new FormControl(),
    edulastyear: new FormControl(),
    educuryear: new FormControl(),
    edu5to10: new FormControl(),
    edu10to15: new FormControl(),
    edu15to20: new FormControl(),
    edu20to25: new FormControl(),
    edu25to30: new FormControl(),
    marlastyear: new FormControl(),
    marcuryear: new FormControl(),
    mar5to10: new FormControl(),
    mar10to15: new FormControl(),
    mar15to20: new FormControl(),
    mar20to25: new FormControl(),
    mar25to30: new FormControl(),

    vacationlastyear: new FormControl(),
    vacationcuryear: new FormControl(),
    vacation5to10: new FormControl(),
    vacation10to15: new FormControl(),
    vacation15to20: new FormControl(),
    vacation20to25: new FormControl(),
    vacation25to30: new FormControl(),
    otherlastyear: new FormControl(),
    othercuryear: new FormControl(),
    other5to10: new FormControl(),
    other10to15: new FormControl(),
    other15to20: new FormControl(),
    other20to25: new FormControl(),
    other25to30: new FormControl(),
    totallastyear: new FormControl(),
    totalcuryear: new FormControl(),
    total5to10: new FormControl(),
    total10to15: new FormControl(),
    total15to20: new FormControl(),
    total20to25: new FormControl(),
    total25to30: new FormControl(),
    recommendedpolicy: new FormControl(),
    recommendedcommit: new FormControl(),
    recommendedRisk: new FormControl(),
    recommendedsuitedPolicy: new FormControl(),
    todaysdateAgent: new FormControl(),
    todaysdateprospect: new FormControl(),

    projectWorkSpanId: new FormControl(),
    lifeStageId: new FormControl(),
    appetiteId: new FormControl(),
    protectionNeedId: new FormControl(),
    SendCopytoSP: new FormControl(),


  });
  SendCopytoSP:any
  files1: any;
  SelectedFiles: string;
  validfile: boolean;
  editable: boolean = false;
  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private serviceproviderservice: ServiceProviderService, private spinner: NgxSpinnerService,
    private userservice: UserDetailsService, private http: HttpClient, private businessloanservice: BusinessLoanServiceService,
    private datepipe: DatePipe, private httpService: HttpClient, private lifeinsService: LifeInsuranceService,
    private route: Router) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.ticketid = localStorage.getItem("TicketId");
    this.ProposID = localStorage.getItem("ProposID");

    this.Nomineetype = "";

    localStorage.setItem("customerId", this.customerid);
    this.customerid = localStorage.getItem("customerId");
    this.role = localStorage.getItem("role");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.todayDate = dd + '/' + mm + '/' + yyyy;
    this.todaysdateprospect = this.todayDate;
    this.todaysdateAgent = this.todayDate;


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

    this.BankDetailsForm = formBuilder.group({
      rationcardnum: ['',],
      aadharnum: [''],
      voternum: [''],
      pannumber: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      servicetax: ['', ],
      passportnum: ['', ],
      lifeinsurance: [''],
      IsConfirm: false
    })

    this.ProspectIdtoDisplydata = localStorage.getItem("ProspectIdtoDisplydata");
    this.editformname = localStorage.getItem("editinsuranceform")
    if (this.ProposID == null) {
      this.ProposID = localStorage.getItem("ProspectIdtoDisplydata");
    }
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
      minormiddname: [''],
      minorlastname: [''],
      Nagedob: ['', Validators.required],
      guardianname:[''],
      guardioanrelationshipwithminor:['']
    })

    this.lifeinsuranceform = formBuilder.group({
      empOccupation: ['', Validators.required],
      empNatureofWork: ['', Validators.required],
      emplengthofService: ['', Validators.required],
      empAnnualIncome: ['', Validators.required],
      empIncomeProof: ['', Validators.required],
      empunderPension: ['', Validators.required],
      empnormalRetirement: ['', Validators.required],
      empschemeInsurance: ['', Validators.required],
      emppersonalPremium: ['', Validators.required],
      empretirementage: ['', Validators.required],
      empanticipatedValue: ['', Validators.required],
      incomelastyear: ['', Validators.required],
      incomecuryear: ['', Validators.required],
      income5to10: ['', Validators.required],
      income10to15: ['', Validators.required],
      income15to20: ['', Validators.required],
      income20to25: ['', Validators.required],
      income25to30: ['', Validators.required],
      explastyear: ['', Validators.required],
      expcuryear: ['', Validators.required],
      exp5to10: ['', Validators.required],
      exp10to15: ['', Validators.required],
      exp15to20: ['', Validators.required],
      exp20to25: ['', Validators.required],
      exp25to30: ['', Validators.required],
      finsavings: ['', Validators.required],
      finliabilities: ['', Validators.required],
      fininheritance: ['', Validators.required],
      lifeNameMemberOne: ['', Validators.required],
      healthNameMemberOne: ['', Validators.required],
      savingsNameMemberOne: ['', Validators.required],
      pensionNameMember: ['', Validators.required],
      otheNameofMember: ['', Validators.required],
      lifeDetailsone: ['', Validators.required],
      healthDetailsone: ['', Validators.required],
      savingsDetailsone: ['', Validators.required],
      pensionDetailsone: ['', Validators.required],
      otherDetailsone: ['', Validators.required],
      lifeNameMemberTwo: ['', Validators.required],
      healthNameMemberTwo: ['', Validators.required],
      savingsNameMemberTwo: ['', Validators.required],
      pensionNameMemberTwo: ['', Validators.required],
      otherNameMemberTwo: ['', Validators.required],
      lifeDetailsTwo: ['', Validators.required],
      healthDetailsTwo: ['', Validators.required],
      savingsDetailsTwo: ['', Validators.required],
      pensionDetailsTwo: ['', Validators.required],
      otherDetailsTwo: ['', Validators.required],
      phyHeight: ['', Validators.required],
      phyWeight: ['', Validators.required],
      physicaltg: ['', Validators.required],
      surgerytg: false,
      Oncologisttg: false,
      ailmenttg: false,
      absentfromworktg: false,
      Hepatitistg: false,
      Rheumatictg: false,
      Kidneytg: false,
      Gastritistg: false,
      Thyroidtg: false,
      Angioplastytg: false,
      Diabetestg: false,
      Bloodpressuretg: false,
      Throattg: false,
      Livertg: false,
      Sclerosistg: false,
      Bronchitistg: false,
      Anaemiatg: false,
      Musculoskeletaltg: false,
      impairmenttg: false,
      curpregnanttg: false,
      pregmonths: [''],
      stageage: [''],
      miscariagetg: false,
      gynecologicaltg: false,
      transmittedtg: false,
      prospectlastyear: ['', Validators.required],
      prospectcuryear: ['', Validators.required],
      prospect5to10: ['', Validators.required],
      prospect10to15: ['', Validators.required],
      prospect15to20: ['', Validators.required],
      prospect20to25: ['', Validators.required],
      prospect25to30: ['', Validators.required],
      prospectMonthlylastyear: ['', Validators.required],
      prospectMonthlycuryear: ['', Validators.required],
      prospectMonthly5to10: ['', Validators.required],
      prospectMonthly10to15: ['', Validators.required],
      prospectMonthly15to20: ['', Validators.required],
      prospectMonthly20to25: ['', Validators.required],
      prospectMonthly25to30: ['', Validators.required],

      lifeincDeathMaturity: ['', Validators.required],
      desirableSumAssured: ['', Validators.required],
      healthInsurance: ['', Validators.required],
      desirablecoverageperAnnum: ['', Validators.required],
      savingandinvestplan: ['', Validators.required],
      desirablereturns: ['', Validators.required],
      pensionPlanning: ['', Validators.required],
      desirablepensionperAnnum: ['', Validators.required],
      incPlanName: ['', Validators.required],
      incpremiumType: ['', Validators.required],
      incPaymentMode: ['', Validators.required],
      incpaymentmethod: ['', Validators.required],
      incPremiumTerm: ['', Validators.required],
      inccoverageaTerm: ['', Validators.required],
      incSumAssured: ['', Validators.required],
      incBenefits: ['', Validators.required],

      foodlastyear: ['', Validators.required],
      foodcuryear: ['', Validators.required],
      food5to10: ['', Validators.required],
      food10to15: ['', Validators.required],
      food15to20: ['', Validators.required],
      food20to25: ['', Validators.required],
      food25to30: ['', Validators.required],
      edulastyear: ['', Validators.required],
      educuryear: ['', Validators.required],
      edu5to10: ['', Validators.required],
      edu10to15: ['', Validators.required],
      edu15to20: ['', Validators.required],
      edu20to25: ['', Validators.required],
      edu25to30: ['', Validators.required],
      marlastyear: ['', Validators.required],
      marcuryear: ['', Validators.required],
      mar5to10: ['', Validators.required],
      mar10to15: ['', Validators.required],
      mar15to20: ['', Validators.required],
      mar20to25: ['', Validators.required],
      mar25to30: ['', Validators.required],
      vacationlastyear: ['', Validators.required],
      vacationcuryear: ['', Validators.required],
      vacation5to10: ['', Validators.required],
      vacation10to15: ['', Validators.required],
      vacation15to20: ['', Validators.required],
      vacation20to25: ['', Validators.required],
      vacation25to30: ['', Validators.required],
      otherlastyear: ['', Validators.required],
      othercuryear: ['', Validators.required],
      other5to10: ['', Validators.required],
      other10to15: ['', Validators.required],
      other15to20: ['', Validators.required],
      other20to25: ['', Validators.required],
      other25to30: ['', Validators.required],
      totallastyear: ['', Validators.required],
      totalcuryear: ['', Validators.required],
      total5to10: ['', Validators.required],
      total10to15: ['', Validators.required],
      total15to20: ['', Validators.required],
      total20to25: ['', Validators.required],
      total25to30: ['', Validators.required],

      recommendedpolicy: ['', Validators.required],
      recommendedcommit: ['', Validators.required],
      recommendedRisk: ['', Validators.required],
      recommendedsuitedPolicy: ['', Validators.required],
      todaysdateAgent: ['', Validators.required],
      todaysdateprospect: ['', Validators.required],

      projectWorkSpanId: ['', Validators.required],
      lifeStageId: ['', Validators.required],
      appetiteId: ['', Validators.required],
      protectionNeedId: ['', Validators.required],
    })
    if (this.editformname == "personal") {
      this.GetEditData();

    }
  
    else if (this.editformname == "bank") {
      this.GetEditData();

    }
  
    else if (this.editformname == "life") {
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

  onChangeUploadAgentSign(event: any) {
    var fileslist111 = "";
    this.files111 = [].slice.call(event.target.files);
    fileslist111 = this.files111[0];
    this.SelectedAgentSignature = fileslist111;
  }
  onChangeUploadProspectSign(event: any) {
    var fileslist112 = "";
    this.files112 = [].slice.call(event.target.files);
    fileslist112 = this.files112[0];
    this.SelectedProspectSignature = fileslist112;
  }
  onChangeUploadProposerSign(event: any) {
    var fileslist113 = "";
    this.files113 = [].slice.call(event.target.files);
    fileslist113 = this.files113[0];
    this.SelectedProposersSignature = fileslist113;
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
  onSelectgender(data: any) {
    this.genderid = data
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

  onSelectChequeType(data: any){
    this.selectedchequetypeid = data
    if(this.selectedchequetypeid =="1"){
      this.selectedchequetype = "Yes";
    }
    else if(this.selectedchequetypeid =="2"){
      this.selectedchequetype = "No";
    }
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
    if (this.role != '1008') {
      this.GetCurrentUserImage();
      this.GetUserDetails();
    }
    this.GetAppetiteRisks();
    this.GetProjectWorkSpans();
    this.GetLifeStages();
    this.GetProtectionNeeds();

    // this.GetDraftData();
    this.Certificate()
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
  onSelectProjectSpan(data: any) {
    this.projectSpanId = data
  }
  onSelectlifeStage(data: any) {
    this.lifeStageId = data
  }
  onSelectProtectionNeed(data: any) {
    this.protectionNeedId = data
  }
  onSelectAppetiteRisk(data: any) {
    this.appetiteRiskId = data
  }
  async GetAppetiteRisks() {
    this.spinner.show()
    await this.lifeinsService.getAppetiteRisks().subscribe((response: any) => {
      this.AppetiteRisks = response;
      this.spinner.hide()

    });
  }
  async GetProjectWorkSpans() {
    this.spinner.show()
    await this.lifeinsService.getProjectWorkSpans().subscribe((response: any) => {
      this.ProjectWorkSpans = response;
      this.spinner.hide()

    });
  }
  async GetLifeStages() {
    this.spinner.show()
    await this.lifeinsService.getLifeStage().subscribe((response: any) => {
      this.LifeStages = response;
      this.spinner.hide()

    });
  }
  async GetProtectionNeeds() {
    this.spinner.show()
    await this.lifeinsService.getProtectionNeeds().subscribe((response: any) => {
      this.ProtectionNeeds = response;
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
      else if ( this.rid == 1010 && (this.religiondetail == null || this.religiondetail == undefined)) {
        alert("Please Enter Religion")
      }
      else if ( this.casteid == 15 && (this.castedetail == null || this.castedetail == undefined)) {
        alert("Please Enter Caste")
      }
      else if (this.quaid == 25 &&  (this.qualificationdetail == null || this.qualificationdetail == undefined)) {
        alert("Please Enter Qualification")
      }
      else if (this.occuid == 32 && (this.occupatoiondetail == null || this.occupatoiondetail == undefined)) {
        alert("Please Enter Occupation")
      }
      else if (this.desid == 9 && (this.designationd == null || this.designationd == undefined)){
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
          LoanIdORInsuranceId: 3,
          //ProsperityId :this.ProposID,
          ApplicationType: "Customer",
          URL: "lifeInsurance",
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
      else if ( this.rid == 1010 && (this.religiondetail == null || this.religiondetail == undefined)) {
        alert("Please Enter Religion")
      }
      else if ( this.casteid == 15 && (this.castedetail == null || this.castedetail == undefined)) {
        alert("Please Enter Caste")
      }
      else if (this.quaid == 25 &&  (this.qualificationdetail == null || this.qualificationdetail == undefined)) {
        alert("Please Enter Qualification")
      }
      else if (this.occuid == 32 && (this.occupatoiondetail == null || this.occupatoiondetail == undefined)) {
        alert("Please Enter Occupation")
      }
      else if (this.desid == 9 && (this.designationd == null || this.designationd == undefined)){
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
          ReligionOther:this.religiondetail,
OccupationOther:this.occupatoiondetail,
Casteother:this.castedetail,
Qualificationother:this.qualificationdetail,
Designationother:this.designationd,
          IsAllFileldsFilled: true,
          PermanentSameasResidential: this.PermanentSameasResidential,
          ProductId: 2,
          LoanIdORInsuranceId: 3,
          ApplicationType: "Customer",
          URL: "lifeInsurance",
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
            // this.GetDraftData();
            if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/dataLifeInsurance'])
            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/dataLifeInsurance'])
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

  TotalLastYear() {
    this.totallastyear = this.vacationlastyear * this.otherlastyear;

  }
  TotalCurrentYear() {
    this.totalcuryear = this.vacationcuryear * this.othercuryear;

  }
  Total5to10Year() {
    this.total5to10 = this.vacation5to10 * this.other5to10;

  }
  Total10to15Year() {
    this.total10to15 = this.vacation10to15 * this.other10to15;

  }
  Total15to20Year() {
    this.total15to20 = this.vacation15to20 * this.other15to20;

  }
  Total20to25Year() {
    this.total20to25 = this.vacation20to25 * this.other20to25;

  }
  Total25to30Year() {
    this.total25to30 = this.vacation25to30 * this.other25to30;
  }

  saveInsurance(stepper: MatStepper) {

    if(this.role == '1008'){
      this.submitted = true;
      // if (this.lifeinsuranceform.invalid) {
      //   return;
      //  }
      if (this.lifeInsuranceDocs != undefined) {
  
        if (this.lifeInsuranceDocs.length != 0 || this.lifeInsuranceDocs.length != null) {
          for (let index = 0; index < this.lifeInsuranceDocs.length; index++) {
            if (this.lifeInsuranceDocs[index].documentName == "ProposersSign") {
              this.proposerSignexist = true;
            }
            if (this.lifeInsuranceDocs[index].documentName == "AgentsSign") {
              this.agentsSignexist = true;
            }
            if (this.lifeInsuranceDocs[index].documentName == "ProspectsSign") {
              this.prospectsSignexist = true;
            }
          }
  
        }
      }
  
      if (this.SelectedProposersSignature == undefined && this.proposerSignexist == false) {
        alert("Please Choose Proposer's Signature  ")
      }
      else if (this.SelectedProspectSignature == undefined && this.prospectsSignexist == false) {
        alert("Please Choose Prospect's Signature ")
      }
      else if (this.SelectedAgentSignature == undefined && this.agentsSignexist == false) {
        alert("Please Choose Agent's Signature ")
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          UserId: this.uid,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          RoleId: this.role,
          TicketId: this.ticketid,
          empOccupation: this.empOccupation,
          empNatureofWork: this.empNatureofWork,
          emplengthofService: this.emplengthofService,
          empAnnualIncome: this.empAnnualIncome,
          empIncomeProof: this.empIncomeProof,
          empunderPension: this.empunderPension,
          empnormalRetirement: this.empnormalRetirement,
          empschemeInsurance: this.empschemeInsurance,
          emppersonalPremium: this.emppersonalPremium,
          empretirementage: this.empretirementage,
          empanticipatedValue: this.empanticipatedValue,
          incomelastyear: this.incomelastyear,
          incomecuryear: this.incomecuryear,
          income5to10: this.income5to10,
          income10to15: this.income10to15,
          income15to20: this.income15to20,
          income20to25: this.income20to25,
          income25to30: this.income25to30,
          explastyear: this.explastyear,
          expcuryear: this.expcuryear,
          exp5to10: this.exp5to10,
          exp10to15: this.exp10to15,
          exp15to20: this.exp15to20,
          exp20to25: this.exp20to25,
          exp25to30: this.exp25to30,
          finsavings: this.finsavings,
          finliabilities: this.finliabilities,
          fininheritance: this.fininheritance,
          lifeNameMemberOne: this.lifeNameMemberOne,
          healthNameMemberOne: this.healthNameMemberOne,
          savingsNameMemberOne: this.savingsNameMemberOne,
          pensionNameMember: this.pensionNameMember,
          otheNameofMember: this.otheNameofMember,
          lifeDetailsone: this.lifeDetailsone,
          healthDetailsone: this.healthDetailsone,
          savingsDetailsone: this.savingsDetailsone,
          pensionDetailsone: this.pensionDetailsone,
          otherDetailsone: this.otherDetailsone,
          lifeNameMemberTwo: this.lifeNameMemberTwo,
          healthNameMemberTwo: this.healthNameMemberTwo,
          savingsNameMemberTwo: this.savingsNameMemberTwo,
          pensionNameMemberTwo: this.pensionNameMemberTwo,
          otherNameMemberTwo: this.otherNameMemberTwo,
          lifeDetailsTwo: this.lifeDetailsTwo,
          healthDetailsTwo: this.healthDetailsTwo,
          savingsDetailsTwo: this.savingsDetailsTwo,
          pensionDetailsTwo: this.pensionDetailsTwo,
          otherDetailsTwo: this.otherDetailsTwo,
          phyHeight: this.phyHeight,
          phyWeight: this.phyWeight,
          physicaltg: this.physicaltg,
          surgerytg: this.surgerytg,
          Oncologisttg: this.Oncologisttg,
          ailmenttg: this.ailmenttg,
          absentfromworktg: this.absentfromworktg,
          Hepatitistg: this.Hepatitistg,
          Rheumatictg: this.Rheumatictg,
          Kidneytg: this.Kidneytg,
          Gastritistg: this.Gastritistg,
          Thyroidtg: this.Thyroidtg,
          Angioplastytg: this.Angioplastytg,
          Diabetestg: this.Diabetestg,
          Bloodpressuretg: this.Bloodpressuretg,
          Throattg: this.Throattg,
          Livertg: this.Livertg,
          Sclerosistg: this.Sclerosistg,
          Bronchitistg: this.Bronchitistg,
          Anaemiatg: this.Anaemiatg,
          Musculoskeletaltg: this.Musculoskeletaltg,
          impairmenttg: this.impairmenttg,
          curpregnanttg: this.curpregnanttg,
          pregmonths: this.pregmonths,
          stageage: this.stageage,
          miscariagetg: this.miscariagetg,
          gynecologicaltg: this.gynecologicaltg,
          transmittedtg: this.transmittedtg,
          prospectlastyear: this.prospectlastyear,
          prospectcuryear: this.prospectcuryear,
          prospect5to10: this.prospect5to10,
          prospect10to15: this.prospect10to15,
          prospect15to20: this.prospect15to20,
          prospect20to25: this.prospect20to25,
          prospect25to30: this.prospect25to30,
          prospectMonthlylastyear: this.prospectMonthlylastyear,
          prospectMonthlycuryear: this.prospectMonthlycuryear,
          prospectMonthly5to10: this.prospectMonthly5to10,
          prospectMonthly10to15: this.prospectMonthly10to15,
          prospectMonthly15to20: this.prospectMonthly15to20,
          prospectMonthly20to25: this.prospectMonthly20to25,
          prospectMonthly25to30: this.prospectMonthly25to30,
  
          lifeincDeathMaturity: this.lifeincDeathMaturity,
          desirableSumAssured: this.desirableSumAssured,
          healthInsurance: this.healthInsurance,
          desirablecoverageperAnnum: this.desirablecoverageperAnnum,
          savingandinvestplan: this.savingandinvestplan,
          desirablereturns: this.desirablereturns,
          pensionPlanning: this.pensionPlanning,
          desirablepensionperAnnum: this.desirablepensionperAnnum,
          incPlanName: this.incPlanName,
          incpremiumType: this.incpremiumType,
          incPaymentMode: this.incPaymentMode,
          incpaymentmethod: this.incpaymentmethod,
          incPremiumTerm: this.incPremiumTerm,
          inccoverageaTerm: this.inccoverageaTerm,
          incSumAssured: this.incSumAssured,
          incBenefits: this.incBenefits,
  
          foodlastyear: this.foodlastyear,
          foodcuryear: this.foodcuryear,
          food5to10: this.food5to10,
          food10to15: this.food10to15,
          food15to20: this.food15to20,
          food20to25: this.food20to25,
          food25to30: this.food25to30,
          edulastyear: this.edulastyear,
          educuryear: this.educuryear,
          edu5to10: this.edu5to10,
          edu10to15: this.edu10to15,
          edu15to20: this.edu15to20,
          edu20to25: this.edu20to25,
          edu25to30: this.edu25to30,
          marlastyear: this.marlastyear,
          marcuryear: this.marcuryear,
          mar5to10: this.mar5to10,
          mar10to15: this.mar10to15,
          mar15to20: this.mar15to20,
          mar20to25: this.mar20to25,
          mar25to30: this.mar25to30,
          vacationlastyear: this.vacationlastyear,
          vacationcuryear: this.vacationcuryear,
          vacation5to10: this.vacation5to10,
          vacation10to15: this.vacation10to15,
          vacation15to20: this.vacation15to20,
          vacation20to25: this.vacation20to25,
          vacation25to30: this.vacation25to30,
          otherlastyear: this.otherlastyear,
          othercuryear: this.othercuryear,
          other5to10: this.other5to10,
          other10to15: this.other10to15,
          other15to20: this.other15to20,
          other20to25: this.other20to25,
          other25to30: this.other25to30,
          totallastyear: this.totallastyear,
          totalcuryear: this.totalcuryear,
          total5to10: this.total5to10,
          total10to15: this.total10to15,
          total15to20: this.total15to20,
          total20to25: this.total20to25,
          total25to30: this.total25to30,
  
          recommendedpolicy: this.recommendedpolicy,
          recommendedcommit: this.recommendedcommit,
          recommendedRisk: this.recommendedRisk,
          recommendedsuitedPolicy: this.recommendedsuitedPolicy,
          todaysdateAgent: this.todaysdateAgent,
          todaysdateprospect: this.todaysdateprospect,
  
          projectWorkSpanId: this.projectSpanId,
          appetiteId: this.appetiteRiskId,
  
          protectionNeedId: this.protectionNeedId,
          lifeStageId: this.lifeStageId,
  
  
          IsAllFileldsFilled: true,
          SendCopytoSP:this.SendCopytoSP,
  
          Role: this.role,
          ProsperityId: this.ProposID,
  
        }
        const frmData = new FormData();
        this.spinner.show();
  
        frmData.append("LifeInsuranceData", JSON.stringify(data));
        frmData.append("ProposersSign", this.SelectedProposersSignature);
        frmData.append("AgentsSign", this.SelectedAgentSignature);
        frmData.append("ProspectsSign", this.SelectedProspectSignature);
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_LifeInsurance/PostLifeInsuranceDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Life Insurance Saved Successfully!!"
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
              this.SelectedProposersSignature = null;
              this.SelectedAgentSignature = null;
              this.SelectedProspectSignature = null;
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
    else{
      this.submitted = true;
      // if (this.lifeinsuranceform.invalid) {
      //   return;
      //  }
      if (this.lifeInsuranceDocs != undefined) {
  
        if (this.lifeInsuranceDocs.length != 0 || this.lifeInsuranceDocs.length != null) {
          for (let index = 0; index < this.lifeInsuranceDocs.length; index++) {
            if (this.lifeInsuranceDocs[index].documentName == "ProposersSign") {
              this.proposerSignexist = true;
            }
            if (this.lifeInsuranceDocs[index].documentName == "AgentsSign") {
              this.agentsSignexist = true;
            }
            if (this.lifeInsuranceDocs[index].documentName == "ProspectsSign") {
              this.prospectsSignexist = true;
            }
          }
  
        }
      }
  
      if (this.SelectedProposersSignature == undefined && this.proposerSignexist == false) {
        alert("Please Choose Proposer's Signature  ")
      }
      else if (this.SelectedProspectSignature == undefined && this.prospectsSignexist == false) {
        alert("Please Choose Prospect's Signature ")
      }
      else if (this.SelectedAgentSignature == undefined && this.agentsSignexist == false) {
        alert("Please Choose Agent's Signature ")
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        var data = {
          CustomerId: this.customerid,
          UserId: this.uid,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          RoleId: this.role,
          TicketId: this.ticketid,
          empOccupation: this.empOccupation,
          empNatureofWork: this.empNatureofWork,
          emplengthofService: this.emplengthofService,
          empAnnualIncome: this.empAnnualIncome,
          empIncomeProof: this.empIncomeProof,
          empunderPension: this.empunderPension,
          empnormalRetirement: this.empnormalRetirement,
          empschemeInsurance: this.empschemeInsurance,
          emppersonalPremium: this.emppersonalPremium,
          empretirementage: this.empretirementage,
          empanticipatedValue: this.empanticipatedValue,
          incomelastyear: this.incomelastyear,
          incomecuryear: this.incomecuryear,
          income5to10: this.income5to10,
          income10to15: this.income10to15,
          income15to20: this.income15to20,
          income20to25: this.income20to25,
          income25to30: this.income25to30,
          explastyear: this.explastyear,
          expcuryear: this.expcuryear,
          exp5to10: this.exp5to10,
          exp10to15: this.exp10to15,
          exp15to20: this.exp15to20,
          exp20to25: this.exp20to25,
          exp25to30: this.exp25to30,
          finsavings: this.finsavings,
          finliabilities: this.finliabilities,
          fininheritance: this.fininheritance,
          lifeNameMemberOne: this.lifeNameMemberOne,
          healthNameMemberOne: this.healthNameMemberOne,
          savingsNameMemberOne: this.savingsNameMemberOne,
          pensionNameMember: this.pensionNameMember,
          otheNameofMember: this.otheNameofMember,
          lifeDetailsone: this.lifeDetailsone,
          healthDetailsone: this.healthDetailsone,
          savingsDetailsone: this.savingsDetailsone,
          pensionDetailsone: this.pensionDetailsone,
          otherDetailsone: this.otherDetailsone,
          lifeNameMemberTwo: this.lifeNameMemberTwo,
          healthNameMemberTwo: this.healthNameMemberTwo,
          savingsNameMemberTwo: this.savingsNameMemberTwo,
          pensionNameMemberTwo: this.pensionNameMemberTwo,
          otherNameMemberTwo: this.otherNameMemberTwo,
          lifeDetailsTwo: this.lifeDetailsTwo,
          healthDetailsTwo: this.healthDetailsTwo,
          savingsDetailsTwo: this.savingsDetailsTwo,
          pensionDetailsTwo: this.pensionDetailsTwo,
          otherDetailsTwo: this.otherDetailsTwo,
          phyHeight: this.phyHeight,
          phyWeight: this.phyWeight,
          physicaltg: this.physicaltg,
          surgerytg: this.surgerytg,
          Oncologisttg: this.Oncologisttg,
          ailmenttg: this.ailmenttg,
          absentfromworktg: this.absentfromworktg,
          Hepatitistg: this.Hepatitistg,
          Rheumatictg: this.Rheumatictg,
          Kidneytg: this.Kidneytg,
          Gastritistg: this.Gastritistg,
          Thyroidtg: this.Thyroidtg,
          Angioplastytg: this.Angioplastytg,
          Diabetestg: this.Diabetestg,
          Bloodpressuretg: this.Bloodpressuretg,
          Throattg: this.Throattg,
          Livertg: this.Livertg,
          Sclerosistg: this.Sclerosistg,
          Bronchitistg: this.Bronchitistg,
          Anaemiatg: this.Anaemiatg,
          Musculoskeletaltg: this.Musculoskeletaltg,
          impairmenttg: this.impairmenttg,
          curpregnanttg: this.curpregnanttg,
          pregmonths: this.pregmonths,
          stageage: this.stageage,
          miscariagetg: this.miscariagetg,
          gynecologicaltg: this.gynecologicaltg,
          transmittedtg: this.transmittedtg,
          prospectlastyear: this.prospectlastyear,
          prospectcuryear: this.prospectcuryear,
          prospect5to10: this.prospect5to10,
          prospect10to15: this.prospect10to15,
          prospect15to20: this.prospect15to20,
          prospect20to25: this.prospect20to25,
          prospect25to30: this.prospect25to30,
          prospectMonthlylastyear: this.prospectMonthlylastyear,
          prospectMonthlycuryear: this.prospectMonthlycuryear,
          prospectMonthly5to10: this.prospectMonthly5to10,
          prospectMonthly10to15: this.prospectMonthly10to15,
          prospectMonthly15to20: this.prospectMonthly15to20,
          prospectMonthly20to25: this.prospectMonthly20to25,
          prospectMonthly25to30: this.prospectMonthly25to30,
  
          lifeincDeathMaturity: this.lifeincDeathMaturity,
          desirableSumAssured: this.desirableSumAssured,
          healthInsurance: this.healthInsurance,
          desirablecoverageperAnnum: this.desirablecoverageperAnnum,
          savingandinvestplan: this.savingandinvestplan,
          desirablereturns: this.desirablereturns,
          pensionPlanning: this.pensionPlanning,
          desirablepensionperAnnum: this.desirablepensionperAnnum,
          incPlanName: this.incPlanName,
          incpremiumType: this.incpremiumType,
          incPaymentMode: this.incPaymentMode,
          incpaymentmethod: this.incpaymentmethod,
          incPremiumTerm: this.incPremiumTerm,
          inccoverageaTerm: this.inccoverageaTerm,
          incSumAssured: this.incSumAssured,
          incBenefits: this.incBenefits,
  
          foodlastyear: this.foodlastyear,
          foodcuryear: this.foodcuryear,
          food5to10: this.food5to10,
          food10to15: this.food10to15,
          food15to20: this.food15to20,
          food20to25: this.food20to25,
          food25to30: this.food25to30,
          edulastyear: this.edulastyear,
          educuryear: this.educuryear,
          edu5to10: this.edu5to10,
          edu10to15: this.edu10to15,
          edu15to20: this.edu15to20,
          edu20to25: this.edu20to25,
          edu25to30: this.edu25to30,
          marlastyear: this.marlastyear,
          marcuryear: this.marcuryear,
          mar5to10: this.mar5to10,
          mar10to15: this.mar10to15,
          mar15to20: this.mar15to20,
          mar20to25: this.mar20to25,
          mar25to30: this.mar25to30,
          vacationlastyear: this.vacationlastyear,
          vacationcuryear: this.vacationcuryear,
          vacation5to10: this.vacation5to10,
          vacation10to15: this.vacation10to15,
          vacation15to20: this.vacation15to20,
          vacation20to25: this.vacation20to25,
          vacation25to30: this.vacation25to30,
          otherlastyear: this.otherlastyear,
          othercuryear: this.othercuryear,
          other5to10: this.other5to10,
          other10to15: this.other10to15,
          other15to20: this.other15to20,
          other20to25: this.other20to25,
          other25to30: this.other25to30,
          totallastyear: this.totallastyear,
          totalcuryear: this.totalcuryear,
          total5to10: this.total5to10,
          total10to15: this.total10to15,
          total15to20: this.total15to20,
          total20to25: this.total20to25,
          total25to30: this.total25to30,
  
          recommendedpolicy: this.recommendedpolicy,
          recommendedcommit: this.recommendedcommit,
          recommendedRisk: this.recommendedRisk,
          recommendedsuitedPolicy: this.recommendedsuitedPolicy,
          todaysdateAgent: this.todaysdateAgent,
          todaysdateprospect: this.todaysdateprospect,
  
          projectWorkSpanId: this.projectSpanId,
          appetiteId: this.appetiteRiskId,
  
          protectionNeedId: this.protectionNeedId,
          lifeStageId: this.lifeStageId,
  
  
          IsAllFileldsFilled: true,
          SendCopytoSP:this.SendCopytoSP,
  
          Role: this.role,
          ProsperityId: this.ProposID,
  
        }
        const frmData = new FormData();
        this.spinner.show();
  
        frmData.append("LifeInsuranceData", JSON.stringify(data));
        frmData.append("ProposersSign", this.SelectedProposersSignature);
        frmData.append("AgentsSign", this.SelectedAgentSignature);
        frmData.append("ProspectsSign", this.SelectedProspectSignature);
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_LifeInsurance/PostLifeInsuranceDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Life Insurance Saved Successfully!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 1000);
              this.spinner.hide();
              // this.GetDraftData();
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/dataLifeInsurance'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/dataLifeInsurance'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 3
              }
              else {
                this.GetDraftData();
              }
              this.SelectedProposersSignature = null;
              this.SelectedAgentSignature = null;
              this.SelectedProspectSignature = null;
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

  SaveInsuranceDraft(stepper: MatStepper) {
    if (this.role == '1008') {
      this.submitted = true;

      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        UserId: this.uid,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        RoleId: this.role,
        TicketId: this.ticketid,
        empOccupation: this.empOccupation,
        empNatureofWork: this.empNatureofWork,
        emplengthofService: this.emplengthofService,
        empAnnualIncome: this.empAnnualIncome,
        empIncomeProof: this.empIncomeProof,
        empunderPension: this.empunderPension,
        empnormalRetirement: this.empnormalRetirement,
        empschemeInsurance: this.empschemeInsurance,
        emppersonalPremium: this.emppersonalPremium,
        empretirementage: this.empretirementage,
        empanticipatedValue: this.empanticipatedValue,
        incomelastyear: this.incomelastyear,
        incomecuryear: this.incomecuryear,
        income5to10: this.income5to10,
        income10to15: this.income10to15,
        income15to20: this.income15to20,
        income20to25: this.income20to25,
        income25to30: this.income25to30,
        explastyear: this.explastyear,
        expcuryear: this.expcuryear,
        exp5to10: this.exp5to10,
        exp10to15: this.exp10to15,
        exp15to20: this.exp15to20,
        exp20to25: this.exp20to25,
        exp25to30: this.exp25to30,
        finsavings: this.finsavings,
        finliabilities: this.finliabilities,
        fininheritance: this.fininheritance,
        lifeNameMemberOne: this.lifeNameMemberOne,
        healthNameMemberOne: this.healthNameMemberOne,
        savingsNameMemberOne: this.savingsNameMemberOne,
        pensionNameMember: this.pensionNameMember,
        otheNameofMember: this.otheNameofMember,
        lifeDetailsone: this.lifeDetailsone,
        healthDetailsone: this.healthDetailsone,
        savingsDetailsone: this.savingsDetailsone,
        pensionDetailsone: this.pensionDetailsone,
        otherDetailsone: this.otherDetailsone,
        lifeNameMemberTwo: this.lifeNameMemberTwo,
        healthNameMemberTwo: this.healthNameMemberTwo,
        savingsNameMemberTwo: this.savingsNameMemberTwo,
        pensionNameMemberTwo: this.pensionNameMemberTwo,
        otherNameMemberTwo: this.otherNameMemberTwo,
        lifeDetailsTwo: this.lifeDetailsTwo,
        healthDetailsTwo: this.healthDetailsTwo,
        savingsDetailsTwo: this.savingsDetailsTwo,
        pensionDetailsTwo: this.pensionDetailsTwo,
        otherDetailsTwo: this.otherDetailsTwo,
        phyHeight: this.phyHeight,
        phyWeight: this.phyWeight,
        physicaltg: this.physicaltg,
        surgerytg: this.surgerytg,
        Oncologisttg: this.Oncologisttg,
        ailmenttg: this.ailmenttg,
        absentfromworktg: this.absentfromworktg,
        Hepatitistg: this.Hepatitistg,
        Rheumatictg: this.Rheumatictg,
        Kidneytg: this.Kidneytg,
        Gastritistg: this.Gastritistg,
        Thyroidtg: this.Thyroidtg,
        Angioplastytg: this.Angioplastytg,
        Diabetestg: this.Diabetestg,
        Bloodpressuretg: this.Bloodpressuretg,
        Throattg: this.Throattg,
        Livertg: this.Livertg,
        Sclerosistg: this.Sclerosistg,
        Bronchitistg: this.Bronchitistg,
        Anaemiatg: this.Anaemiatg,
        Musculoskeletaltg: this.Musculoskeletaltg,
        impairmenttg: this.impairmenttg,
        curpregnanttg: this.curpregnanttg,
        pregmonths: this.pregmonths,
        stageage: this.stageage,
        miscariagetg: this.miscariagetg,
        gynecologicaltg: this.gynecologicaltg,
        transmittedtg: this.transmittedtg,
        prospectlastyear: this.prospectlastyear,
        prospectcuryear: this.prospectcuryear,
        prospect5to10: this.prospect5to10,
        prospect10to15: this.prospect10to15,
        prospect15to20: this.prospect15to20,
        prospect20to25: this.prospect20to25,
        prospect25to30: this.prospect25to30,
        prospectMonthlylastyear: this.prospectMonthlylastyear,
        prospectMonthlycuryear: this.prospectMonthlycuryear,
        prospectMonthly5to10: this.prospectMonthly5to10,
        prospectMonthly10to15: this.prospectMonthly10to15,
        prospectMonthly15to20: this.prospectMonthly15to20,
        prospectMonthly20to25: this.prospectMonthly20to25,
        prospectMonthly25to30: this.prospectMonthly25to30,
  
        lifeincDeathMaturity: this.lifeincDeathMaturity,
        desirableSumAssured: this.desirableSumAssured,
        healthInsurance: this.healthInsurance,
        desirablecoverageperAnnum: this.desirablecoverageperAnnum,
        savingandinvestplan: this.savingandinvestplan,
        desirablereturns: this.desirablereturns,
        pensionPlanning: this.pensionPlanning,
        desirablepensionperAnnum: this.desirablepensionperAnnum,
        incPlanName: this.incPlanName,
        incpremiumType: this.incpremiumType,
        incPaymentMode: this.incPaymentMode,
        incpaymentmethod: this.incpaymentmethod,
        incPremiumTerm: this.incPremiumTerm,
        inccoverageaTerm: this.inccoverageaTerm,
        incSumAssured: this.incSumAssured,
        incBenefits: this.incBenefits,
  
        foodlastyear: this.foodlastyear,
        foodcuryear: this.foodcuryear,
        food5to10: this.food5to10,
        food10to15: this.food10to15,
        food15to20: this.food15to20,
        food20to25: this.food20to25,
        food25to30: this.food25to30,
        edulastyear: this.edulastyear,
        educuryear: this.educuryear,
        edu5to10: this.edu5to10,
        edu10to15: this.edu10to15,
        edu15to20: this.edu15to20,
        edu20to25: this.edu20to25,
        edu25to30: this.edu25to30,
        marlastyear: this.marlastyear,
        marcuryear: this.marcuryear,
        mar5to10: this.mar5to10,
        mar10to15: this.mar10to15,
        mar15to20: this.mar15to20,
        mar20to25: this.mar20to25,
        mar25to30: this.mar25to30,
        vacationlastyear: this.vacationlastyear,
        vacationcuryear: this.vacationcuryear,
        vacation5to10: this.vacation5to10,
        vacation10to15: this.vacation10to15,
        vacation15to20: this.vacation15to20,
        vacation20to25: this.vacation20to25,
        vacation25to30: this.vacation25to30,
        otherlastyear: this.otherlastyear,
        othercuryear: this.othercuryear,
        other5to10: this.other5to10,
        other10to15: this.other10to15,
        other15to20: this.other15to20,
        other20to25: this.other20to25,
        other25to30: this.other25to30,
        totallastyear: this.totallastyear,
        totalcuryear: this.totalcuryear,
        total5to10: this.total5to10,
        total10to15: this.total10to15,
        total15to20: this.total15to20,
        total20to25: this.total20to25,
        total25to30: this.total25to30,
  
        recommendedpolicy: this.recommendedpolicy,
        recommendedcommit: this.recommendedcommit,
        recommendedRisk: this.recommendedRisk,
        recommendedsuitedPolicy: this.recommendedsuitedPolicy,
        todaysdateAgent: this.todaysdateAgent,
        todaysdateprospect: this.todaysdateprospect,
  
        projectWorkSpanId: this.projectSpanId,
        appetiteId: this.appetiteRiskId,
  
        protectionNeedId: this.protectionNeedId,
        lifeStageId: this.lifeStageId,
        IsAllFileldsFilled: false,
        SendCopytoSP:this.SendCopytoSP,
        ProsperityId: this.ProposID,
      }
      const frmData = new FormData();
      this.spinner.show();
  
      frmData.append("LifeInsuranceData", JSON.stringify(data));
      frmData.append("ProposersSign", this.SelectedProposersSignature);
      frmData.append("AgentsSign", this.SelectedAgentSignature);
      frmData.append("ProspectsSign", this.SelectedProspectSignature);
      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_LifeInsurance/PostLifeInsuranceDetails/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.notify = "Life Insurance Saved As Draft Successfully!!"
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
            this.SelectedProposersSignature = null;
            this.SelectedAgentSignature = null;
            this.SelectedProspectSignature = null;
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
    else{
      this.submitted = true;

      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.customerid,
        UserId: this.uid,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        RoleId: this.role,
        TicketId: this.ticketid,
        empOccupation: this.empOccupation,
        empNatureofWork: this.empNatureofWork,
        emplengthofService: this.emplengthofService,
        empAnnualIncome: this.empAnnualIncome,
        empIncomeProof: this.empIncomeProof,
        empunderPension: this.empunderPension,
        empnormalRetirement: this.empnormalRetirement,
        empschemeInsurance: this.empschemeInsurance,
        emppersonalPremium: this.emppersonalPremium,
        empretirementage: this.empretirementage,
        empanticipatedValue: this.empanticipatedValue,
        incomelastyear: this.incomelastyear,
        incomecuryear: this.incomecuryear,
        income5to10: this.income5to10,
        income10to15: this.income10to15,
        income15to20: this.income15to20,
        income20to25: this.income20to25,
        income25to30: this.income25to30,
        explastyear: this.explastyear,
        expcuryear: this.expcuryear,
        exp5to10: this.exp5to10,
        exp10to15: this.exp10to15,
        exp15to20: this.exp15to20,
        exp20to25: this.exp20to25,
        exp25to30: this.exp25to30,
        finsavings: this.finsavings,
        finliabilities: this.finliabilities,
        fininheritance: this.fininheritance,
        lifeNameMemberOne: this.lifeNameMemberOne,
        healthNameMemberOne: this.healthNameMemberOne,
        savingsNameMemberOne: this.savingsNameMemberOne,
        pensionNameMember: this.pensionNameMember,
        otheNameofMember: this.otheNameofMember,
        lifeDetailsone: this.lifeDetailsone,
        healthDetailsone: this.healthDetailsone,
        savingsDetailsone: this.savingsDetailsone,
        pensionDetailsone: this.pensionDetailsone,
        otherDetailsone: this.otherDetailsone,
        lifeNameMemberTwo: this.lifeNameMemberTwo,
        healthNameMemberTwo: this.healthNameMemberTwo,
        savingsNameMemberTwo: this.savingsNameMemberTwo,
        pensionNameMemberTwo: this.pensionNameMemberTwo,
        otherNameMemberTwo: this.otherNameMemberTwo,
        lifeDetailsTwo: this.lifeDetailsTwo,
        healthDetailsTwo: this.healthDetailsTwo,
        savingsDetailsTwo: this.savingsDetailsTwo,
        pensionDetailsTwo: this.pensionDetailsTwo,
        otherDetailsTwo: this.otherDetailsTwo,
        phyHeight: this.phyHeight,
        phyWeight: this.phyWeight,
        physicaltg: this.physicaltg,
        surgerytg: this.surgerytg,
        Oncologisttg: this.Oncologisttg,
        ailmenttg: this.ailmenttg,
        absentfromworktg: this.absentfromworktg,
        Hepatitistg: this.Hepatitistg,
        Rheumatictg: this.Rheumatictg,
        Kidneytg: this.Kidneytg,
        Gastritistg: this.Gastritistg,
        Thyroidtg: this.Thyroidtg,
        Angioplastytg: this.Angioplastytg,
        Diabetestg: this.Diabetestg,
        Bloodpressuretg: this.Bloodpressuretg,
        Throattg: this.Throattg,
        Livertg: this.Livertg,
        Sclerosistg: this.Sclerosistg,
        Bronchitistg: this.Bronchitistg,
        Anaemiatg: this.Anaemiatg,
        Musculoskeletaltg: this.Musculoskeletaltg,
        impairmenttg: this.impairmenttg,
        curpregnanttg: this.curpregnanttg,
        pregmonths: this.pregmonths,
        stageage: this.stageage,
        miscariagetg: this.miscariagetg,
        gynecologicaltg: this.gynecologicaltg,
        transmittedtg: this.transmittedtg,
        prospectlastyear: this.prospectlastyear,
        prospectcuryear: this.prospectcuryear,
        prospect5to10: this.prospect5to10,
        prospect10to15: this.prospect10to15,
        prospect15to20: this.prospect15to20,
        prospect20to25: this.prospect20to25,
        prospect25to30: this.prospect25to30,
        prospectMonthlylastyear: this.prospectMonthlylastyear,
        prospectMonthlycuryear: this.prospectMonthlycuryear,
        prospectMonthly5to10: this.prospectMonthly5to10,
        prospectMonthly10to15: this.prospectMonthly10to15,
        prospectMonthly15to20: this.prospectMonthly15to20,
        prospectMonthly20to25: this.prospectMonthly20to25,
        prospectMonthly25to30: this.prospectMonthly25to30,
  
        lifeincDeathMaturity: this.lifeincDeathMaturity,
        desirableSumAssured: this.desirableSumAssured,
        healthInsurance: this.healthInsurance,
        desirablecoverageperAnnum: this.desirablecoverageperAnnum,
        savingandinvestplan: this.savingandinvestplan,
        desirablereturns: this.desirablereturns,
        pensionPlanning: this.pensionPlanning,
        desirablepensionperAnnum: this.desirablepensionperAnnum,
        incPlanName: this.incPlanName,
        incpremiumType: this.incpremiumType,
        incPaymentMode: this.incPaymentMode,
        incpaymentmethod: this.incpaymentmethod,
        incPremiumTerm: this.incPremiumTerm,
        inccoverageaTerm: this.inccoverageaTerm,
        incSumAssured: this.incSumAssured,
        incBenefits: this.incBenefits,
  
        foodlastyear: this.foodlastyear,
        foodcuryear: this.foodcuryear,
        food5to10: this.food5to10,
        food10to15: this.food10to15,
        food15to20: this.food15to20,
        food20to25: this.food20to25,
        food25to30: this.food25to30,
        edulastyear: this.edulastyear,
        educuryear: this.educuryear,
        edu5to10: this.edu5to10,
        edu10to15: this.edu10to15,
        edu15to20: this.edu15to20,
        edu20to25: this.edu20to25,
        edu25to30: this.edu25to30,
        marlastyear: this.marlastyear,
        marcuryear: this.marcuryear,
        mar5to10: this.mar5to10,
        mar10to15: this.mar10to15,
        mar15to20: this.mar15to20,
        mar20to25: this.mar20to25,
        mar25to30: this.mar25to30,
        vacationlastyear: this.vacationlastyear,
        vacationcuryear: this.vacationcuryear,
        vacation5to10: this.vacation5to10,
        vacation10to15: this.vacation10to15,
        vacation15to20: this.vacation15to20,
        vacation20to25: this.vacation20to25,
        vacation25to30: this.vacation25to30,
        otherlastyear: this.otherlastyear,
        othercuryear: this.othercuryear,
        other5to10: this.other5to10,
        other10to15: this.other10to15,
        other15to20: this.other15to20,
        other20to25: this.other20to25,
        other25to30: this.other25to30,
        totallastyear: this.totallastyear,
        totalcuryear: this.totalcuryear,
        total5to10: this.total5to10,
        total10to15: this.total10to15,
        total15to20: this.total15to20,
        total20to25: this.total20to25,
        total25to30: this.total25to30,
  
        recommendedpolicy: this.recommendedpolicy,
        recommendedcommit: this.recommendedcommit,
        recommendedRisk: this.recommendedRisk,
        recommendedsuitedPolicy: this.recommendedsuitedPolicy,
        todaysdateAgent: this.todaysdateAgent,
        todaysdateprospect: this.todaysdateprospect,
  
        projectWorkSpanId: this.projectSpanId,
        appetiteId: this.appetiteRiskId,
  
        protectionNeedId: this.protectionNeedId,
        lifeStageId: this.lifeStageId,
        IsAllFileldsFilled: false,
        SendCopytoSP:this.SendCopytoSP,
        ProsperityId: this.ProposID,
      }
      const frmData = new FormData();
      this.spinner.show();
  
      frmData.append("LifeInsuranceData", JSON.stringify(data));
      frmData.append("ProposersSign", this.SelectedProposersSignature);
      frmData.append("AgentsSign", this.SelectedAgentSignature);
      frmData.append("ProspectsSign", this.SelectedProspectSignature);
      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/C_LifeInsurance/PostLifeInsuranceDetails/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.notify = "Life Insurance Saved As Draft Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 1000);
            this.spinner.hide();
            // this.GetDraftData();
            if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/dataLifeInsurance'])
            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
              this.route.navigate(['/dataLifeInsurance'])
            }
            else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
              this.stepper1.selectedIndex = 3
            }
            else {
              this.GetDraftData();
            }
  
            this.SelectedProposersSignature = null;
            this.SelectedAgentSignature = null;
            this.SelectedProspectSignature = null;
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


  SaveFamilyDraft(stepper: MatStepper) {
    if (this.role == '1008') {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      var data = {
        CustomerId: this.uid,
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
        IsAllFileldsFilled: false
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
        CustomerId: this.uid,
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
        IsAllFileldsFilled: false

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
      else if (this.numofchild > this.numberofdep) {
        alert("Number of Children to be equal or less than Number of dependents");
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
          IsAllFileldsFilled: true

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
          CustomerId: this.uid,
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
          IsAllFileldsFilled: true

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
          ProsperityId: this.ProposID,
          IsAllFileldsFilled: true,
          Role: this.role,
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
          Role: this.role,
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
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/dataLifeInsurance'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/dataLifeInsurance'])
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

  accidentIn(stepper: MatStepper) {
    this.submitted = true;
    if (this.lifeinsuranceform.invalid) {
      return;
    }
    else {
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
    if(this.newAttribute.banktypeid == null || this.newAttribute.banktypeid== ""){
      alert("Please Select Bank Account Type");
    }
    else if(this.newAttribute.bankname == null || this.newAttribute.bankname== ""){
      alert("Enter Bank Name");
    }
    else if(this.newAttribute.branch == null || this.newAttribute.branch== ""){
      alert("Enter Branch");
    }
    else if(this.newAttribute.ifscecode == null || this.newAttribute.ifscecode== ""){
      alert("Enter IFSC Code");
    }
    else if(!ifscvalid){
      alert("Enter Valid IFSC Code");
    }
    else if(this.newAttribute.selectedchequetypeid == null || this.newAttribute.selectedchequetypeid== ""){
      alert("Enter Cheque Facility Type");
    }
    
    else{
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
              if (localStorage.getItem("editinsuranceform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
                this.route.navigate(['/dataLifeInsurance'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null && localStorage.workflowid=='3') {
                this.route.navigate(['/dataLifeInsurance'])
              }
              else if (localStorage.getItem("editinsuranceform") != "false" && this.ticketid != null) {
                this.stepper1.selectedIndex = 3
              }
              else {
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
    if(this.newDocAttribute.otherdocumentname=="" || this.newDocAttribute.otherdocumentname==undefined ){
      alert("Please Enter Document Name")
    }
    else if(this.otherdocactualname==="" ||  this.otherdocactualname===undefined){
      alert("please Select Document")
    }
    else{   
    this.newDocAttribute.otherdocactualname=this.otherdocactualname
    this.documentArray.push(this.newDocAttribute)
    this.newDocAttribute = {};
    this.otherdocactualname="";
  }
  }
  OnChangeOtherDocs(event){
    var otherdocs = [];
    this.otherdocuments = [].slice.call(event.target.files);
    console.log(this.otherdocuments);
    otherdocs = this.otherdocuments[0];
    this.customerotherdocs.push(otherdocs);
    this.otherdocactualname=this.otherdocuments[0].name
  }
  ViewDoc(file){
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

  onSelectMinorRelationType(data: any){
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
      ProductId: 2,
      LoanIdORInsuranceId: 3,
      ApplicationType: "Customer",
      URL: "lifeInsurance",
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
    this.lifeinsService.GetDraftdata(sendid).subscribe((data1: any) => {
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
      else if (data.count == 2 && data.lifeInsuranceDetails != null) {

        this.absentfromworktg = data.lifeInsuranceDetails.absentfromworktg;
        this.ailmenttg = data.lifeInsuranceDetails.ailmenttg;
        this.Anaemiatg = data.lifeInsuranceDetails.anaemiatg;
        this.Angioplastytg = data.lifeInsuranceDetails.angioplastytg;
        this.appetiteRiskId = data.lifeInsuranceDetails.appetiteRiskId;
        this.Bloodpressuretg = data.lifeInsuranceDetails.Bloodpressuretg;
        this.Bronchitistg = data.lifeInsuranceDetails.Bronchitistg;
        this.curpregnanttg = data.lifeInsuranceDetails.curpregnanttg;
        this.desirableSumAssured = data.lifeInsuranceDetails.desirableSumAssured;
        this.desirablecoverageperAnnum = data.lifeInsuranceDetails.desirablecoverageperAnnum;
        this.desirablepensionperAnnum = data.lifeInsuranceDetails.desirablepensionperAnnum;
        this.desirablereturns = data.lifeInsuranceDetails.desirablereturns;
        this.Diabetestg = data.lifeInsuranceDetails.Diabetestg;
        this.edu5to10 = data.lifeInsuranceDetails.edu5to10;
        this.edu10to15 = data.lifeInsuranceDetails.edu10to15;
        this.edu15to20 = data.lifeInsuranceDetails.edu15to20;
        this.edu20to25 = data.lifeInsuranceDetails.edu20to25;
        this.edu25to30 = data.lifeInsuranceDetails.edu25to30;
        this.educuryear = data.lifeInsuranceDetails.educuryear;
        this.edulastyear = data.lifeInsuranceDetails.edulastyear;


        this.empAnnualIncome = data.lifeInsuranceDetails.empAnnualIncome;
        this.empNatureofWork = data.lifeInsuranceDetails.empNatureofWork;
        this.empOccupation = data.lifeInsuranceDetails.empOccupation;
        this.empanticipatedValue = data.lifeInsuranceDetails.empanticipatedValue;
        this.emplengthofService = data.lifeInsuranceDetails.emplengthofService;
        this.empnormalRetirement = data.lifeInsuranceDetails.empnormalRetirement;
        this.emppersonalPremium = data.lifeInsuranceDetails.emppersonalPremium;
        this.empretirementage = data.lifeInsuranceDetails.empretirementage;
        this.empschemeInsurance = data.lifeInsuranceDetails.empschemeInsurance;
        this.empunderPension = data.lifeInsuranceDetails.empunderPension;
        this.exp5to10 = data.lifeInsuranceDetails.exp5to10;
        this.exp10to15 = data.lifeInsuranceDetails.exp10to15;
        this.exp15to20 = data.lifeInsuranceDetails.exp15to20;
        this.exp20to25 = data.lifeInsuranceDetails.exp20to25;
        this.exp25to30 = data.lifeInsuranceDetails.exp25to30;
        this.expcuryear = data.lifeInsuranceDetails.expcuryear;
        this.explastyear = data.lifeInsuranceDetails.explastyear;
        this.fininheritance = data.lifeInsuranceDetails.fininheritance;
        this.finliabilities = data.lifeInsuranceDetails.finliabilities;
        this.finsavings = data.lifeInsuranceDetails.finsavings;
        this.food5to10 = data.lifeInsuranceDetails.food5to10;
        this.food10to15 = data.lifeInsuranceDetails.food10to15;
        this.food15to20 = data.lifeInsuranceDetails.food15to20;
        this.food20to25 = data.lifeInsuranceDetails.food20to25;
        this.food25to30 = data.lifeInsuranceDetails.food25to30;
        this.foodcuryear = data.lifeInsuranceDetails.foodcuryear;
        this.foodlastyear = data.lifeInsuranceDetails.foodlastyear;
        this.Gastritistg = data.lifeInsuranceDetails.Gastritistg;
        this.gynecologicaltg = data.lifeInsuranceDetails.gynecologicaltg;
        this.healthDetailsTwo = data.lifeInsuranceDetails.healthDetailsTwo;
        this.healthDetailsone = data.lifeInsuranceDetails.healthDetailsone;
        this.healthInsurance = data.lifeInsuranceDetails.healthInsurance;
        this.healthNameMemberOne = data.lifeInsuranceDetails.healthNameMemberOne;
        this.healthNameMemberTwo = data.lifeInsuranceDetails.healthNameMemberTwo;
        this.Hepatitistg = data.lifeInsuranceDetails.Hepatitistg;
        this.impairmenttg = data.lifeInsuranceDetails.impairmenttg;
        this.incBenefits = data.lifeInsuranceDetails.incBenefits;
        this.incPaymentMode = data.lifeInsuranceDetails.incPaymentMode;
        this.incPlanName = data.lifeInsuranceDetails.incPlanName;

        this.incPremiumTerm = data.lifeInsuranceDetails.incPremiumTerm;
        this.incSumAssured = data.lifeInsuranceDetails.incSumAssured;
        this.inccoverageaTerm = data.lifeInsuranceDetails.inccoverageaTerm;
        this.income5to10 = data.lifeInsuranceDetails.income5to10;
        this.income10to15 = data.lifeInsuranceDetails.income10to15;
        this.income15to20 = data.lifeInsuranceDetails.income15to20;
        this.income20to25 = data.lifeInsuranceDetails.income20to25;
        this.income25to30 = data.lifeInsuranceDetails.income25to30;
        this.incomecuryear = data.lifeInsuranceDetails.incomecuryear;
        this.incomelastyear = data.lifeInsuranceDetails.incomelastyear;
        this.incpaymentmethod = data.lifeInsuranceDetails.incpaymentmethod;
        this.incpremiumType = data.lifeInsuranceDetails.incpremiumType;
        this.Kidneytg = data.lifeInsuranceDetails.Kidneytg;
        this.lifeDetailsTwo = data.lifeInsuranceDetails.lifeDetailsTwo;
        this.lifeDetailsone = data.lifeInsuranceDetails.lifeDetailsone;
        this.lifeNameMemberOne = data.lifeInsuranceDetails.lifeNameMemberOne;
        this.lifeNameMemberTwo = data.lifeInsuranceDetails.lifeNameMemberTwo;
        this.lifeStageId = data.lifeInsuranceDetails.lifeStageId;
        this.lifeincDeathMaturity = data.lifeInsuranceDetails.lifeincDeathMaturity;
        this.Livertg = data.lifeInsuranceDetails.Livertg;
        this.mar5to10 = data.lifeInsuranceDetails.mar5to10;
        this.mar10to15 = data.lifeInsuranceDetails.mar10to15;
        this.mar15to20 = data.lifeInsuranceDetails.mar15to20;
        this.mar20to25 = data.lifeInsuranceDetails.mar20to25;
        this.mar25to30 = data.lifeInsuranceDetails.mar25to30;
        this.marcuryear = data.lifeInsuranceDetails.marcuryear;
        this.marlastyear = data.lifeInsuranceDetails.marlastyear;
        this.miscariagetg = data.lifeInsuranceDetails.miscariagetg;
        this.Musculoskeletaltg = data.lifeInsuranceDetails.Musculoskeletaltg;
        this.Oncologisttg = data.lifeInsuranceDetails.Oncologisttg;
        this.otheNameofMember = data.lifeInsuranceDetails.otheNameofMember;
        this.other5to10 = data.lifeInsuranceDetails.other5to10;
        this.other10to15 = data.lifeInsuranceDetails.other10to15;
        this.other15to20 = data.lifeInsuranceDetails.other15to20;
        this.other20to25 = data.lifeInsuranceDetails.other20to25;
        this.other25to30 = data.lifeInsuranceDetails.other25to30;
        this.otherDetailsTwo = data.lifeInsuranceDetails.otherDetailsTwo;
        this.otherDetailsone = data.lifeInsuranceDetails.otherDetailsone;
        this.otherNameMemberTwo = data.lifeInsuranceDetails.otherNameMemberTwo;
        this.othercuryear = data.lifeInsuranceDetails.othercuryear;
        this.otherlastyear = data.lifeInsuranceDetails.otherlastyear;
        this.pensionDetailsTwo = data.lifeInsuranceDetails.pensionDetailsTwo;
        this.pensionDetailsone = data.lifeInsuranceDetails.pensionDetailsone;
        this.pensionNameMember = data.lifeInsuranceDetails.pensionNameMember;
        this.pensionNameMemberTwo = data.lifeInsuranceDetails.pensionNameMemberTwo;
        this.pensionPlanning = data.lifeInsuranceDetails.pensionPlanning;
        this.phyHeight = data.lifeInsuranceDetails.phyHeight;
        this.phyWeight = data.lifeInsuranceDetails.phyWeight;
        this.physicaltg = data.lifeInsuranceDetails.physicaltg;
        this.pregmonths = data.lifeInsuranceDetails.pregmonths;
        this.projectSpanId = data.lifeInsuranceDetails.projectWorkSpanId;
        // this.ProposersSign= data.lifeInsuranceDetails.angioplastytg;
        this.prospect5to10 = data.lifeInsuranceDetails.prospect5to10;
        this.prospect10to15 = data.lifeInsuranceDetails.prospect10to15;
        this.prospect15to20 = data.lifeInsuranceDetails.prospect15to20;
        this.prospect20to25 = data.lifeInsuranceDetails.prospect20to25;
        this.prospect25to30 = data.lifeInsuranceDetails.prospect25to30;
        this.prospectMonthly5to10 = data.lifeInsuranceDetails.prospectMonthly5to10;
        this.prospectMonthly10to15 = data.lifeInsuranceDetails.prospectMonthly10to15;
        this.prospectMonthly15to20 = data.lifeInsuranceDetails.prospectMonthly15to20;
        this.prospectMonthly20to25 = data.lifeInsuranceDetails.prospectMonthly20to25;
        this.prospectMonthly25to30 = data.lifeInsuranceDetails.prospectMonthly25to30;
        this.prospectMonthlycuryear = data.lifeInsuranceDetails.prospectMonthlycuryear;
        this.prospectMonthlylastyear = data.lifeInsuranceDetails.prospectMonthlylastyear;
        this.prospectcuryear = data.lifeInsuranceDetails.prospectcuryear;
        this.prospectlastyear = data.lifeInsuranceDetails.prospectlastyear;

        this.appetiteRiskId = data.lifeInsuranceDetails.appetiteId;


        // this.ProspectsSign = data.lifeInsuranceDetails.angioplastytg;
        this.protectionNeedId = data.lifeInsuranceDetails.protectionNeedId;
        this.recommendedRisk = data.lifeInsuranceDetails.recommendedRisk;
        this.recommendedcommit = data.lifeInsuranceDetails.recommendedcommit;
        this.recommendedpolicy = data.lifeInsuranceDetails.recommendedpolicy;
        this.recommendedsuitedPolicy = data.lifeInsuranceDetails.recommendedsuitedPolicy;
        this.Rheumatictg = data.lifeInsuranceDetails.Rheumatictg;
        this.savingandinvestplan = data.lifeInsuranceDetails.savingandinvestplan;
        this.savingsDetailsTwo = data.lifeInsuranceDetails.savingsDetailsTwo;
        this.savingsDetailsone = data.lifeInsuranceDetails.savingsDetailsone;
        this.savingsNameMemberOne = data.lifeInsuranceDetails.savingsNameMemberOne;
        this.savingsNameMemberTwo = data.lifeInsuranceDetails.savingsNameMemberTwo;
        this.Sclerosistg = data.lifeInsuranceDetails.Sclerosistg;
        this.stageage = data.lifeInsuranceDetails.stageage;
        this.surgerytg = data.lifeInsuranceDetails.surgerytg;
        this.Throattg = data.lifeInsuranceDetails.Throattg;
        this.Thyroidtg = data.lifeInsuranceDetails.Thyroidtg;
        this.todaysdateAgent = data.lifeInsuranceDetails.todaysdateAgent;
        this.todaysdateprospect = data.lifeInsuranceDetails.todaysdateprospect;
        this.total5to10 = data.lifeInsuranceDetails.total5to10;
        this.total10to15 = data.lifeInsuranceDetails.total10to15;
        this.total15to20 = data.lifeInsuranceDetails.total15to20;
        this.total20to25 = data.lifeInsuranceDetails.total20to25;
        this.total25to30 = data.lifeInsuranceDetails.total25to30;
        this.totalcuryear = data.lifeInsuranceDetails.totalcuryear;
        this.totallastyear = data.lifeInsuranceDetails.totallastyear;
        this.transmittedtg = data.lifeInsuranceDetails.transmittedtg;
        this.vacation5to10 = data.lifeInsuranceDetails.vacation5to10;
        this.vacation10to15 = data.lifeInsuranceDetails.vacation10to15;
        this.vacation15to20 = data.lifeInsuranceDetails.vacation15to20;
        this.vacation20to25 = data.lifeInsuranceDetails.vacation20to25;
        this.vacation25to30 = data.lifeInsuranceDetails.vacation25to30;
        this.vacationcuryear = data.lifeInsuranceDetails.vacationcuryear;
        this.vacationlastyear = data.lifeInsuranceDetails.vacationlastyear;
        this.empIncomeProof = data.lifeInsuranceDetails.empIncomeProof;

        this.lifeInsuranceDocs = data.lifeInsuranceDetails.alldocuments;

        if (data.lifeInsuranceDetails.alldocuments != null) {
          for (let index = 0; index < data.lifeInsuranceDetails.alldocuments.length; index++) {
            if (data.lifeInsuranceDetails.alldocuments[index].documentName == "ProposersSign") {
              this.dispProposerSignFile = data.lifeInsuranceDetails.alldocuments[index].file;
            }
            else if (data.lifeInsuranceDetails.alldocuments[index].documentName == "AgentsSign") {
              this.dispAgentSignFile = data.lifeInsuranceDetails.alldocuments[index].file;
            }
            else if (data.lifeInsuranceDetails.alldocuments[index].documentName == "ProspectsSign") {
              this.dispProspectsSignFile = data.lifeInsuranceDetails.alldocuments[index].file;
            }
          }
        }
        this.stepper1.selectedIndex = 2;

      }
      else if (data.count == 2 && data.lifeInsuranceDetails == null) {
        this.stepper1.selectedIndex =2;
      }
   
      else if (data.count == 3&& data.certificateDetails == null) {
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
    this.route.navigate(['previewinsurancedetails/' + "life"]);
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
    this.businessloanservice.GetEditDetailsforLifeInsurance(sendid).subscribe((data: any) => {
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
    
       if (data.lifeInsuranceDetails != null) {
           this.absentfromworktg = data.lifeInsuranceDetails.absentfromworktg;
        this.ailmenttg = data.lifeInsuranceDetails.ailmenttg;
        this.Anaemiatg = data.lifeInsuranceDetails.anaemiatg;
        this.Angioplastytg = data.lifeInsuranceDetails.angioplastytg;
        this.appetiteRiskId = data.lifeInsuranceDetails.appetiteRiskId;
        this.Bloodpressuretg = data.lifeInsuranceDetails.Bloodpressuretg;
        this.Bronchitistg = data.lifeInsuranceDetails.Bronchitistg;
        this.curpregnanttg = data.lifeInsuranceDetails.curpregnanttg;
        this.desirableSumAssured = data.lifeInsuranceDetails.desirableSumAssured;
        this.desirablecoverageperAnnum = data.lifeInsuranceDetails.desirablecoverageperAnnum;
        this.desirablepensionperAnnum = data.lifeInsuranceDetails.desirablepensionperAnnum;
        this.desirablereturns = data.lifeInsuranceDetails.desirablereturns;
        this.Diabetestg = data.lifeInsuranceDetails.Diabetestg;
        this.edu5to10 = data.lifeInsuranceDetails.edu5to10;
        this.edu10to15 = data.lifeInsuranceDetails.edu10to15;
        this.edu15to20 = data.lifeInsuranceDetails.edu15to20;
        this.edu20to25 = data.lifeInsuranceDetails.edu20to25;
        this.edu25to30 = data.lifeInsuranceDetails.edu25to30;
        this.educuryear = data.lifeInsuranceDetails.educuryear;
        this.edulastyear = data.lifeInsuranceDetails.edulastyear;


        this.empAnnualIncome = data.lifeInsuranceDetails.empAnnualIncome;
        this.empNatureofWork = data.lifeInsuranceDetails.empNatureofWork;
        this.empOccupation = data.lifeInsuranceDetails.empOccupation;
        this.empanticipatedValue = data.lifeInsuranceDetails.empanticipatedValue;
        this.emplengthofService = data.lifeInsuranceDetails.emplengthofService;
        this.empnormalRetirement = data.lifeInsuranceDetails.empnormalRetirement;
        this.emppersonalPremium = data.lifeInsuranceDetails.emppersonalPremium;
        this.empretirementage = data.lifeInsuranceDetails.empretirementage;
        this.empschemeInsurance = data.lifeInsuranceDetails.empschemeInsurance;
        this.empunderPension = data.lifeInsuranceDetails.empunderPension;
        this.exp5to10 = data.lifeInsuranceDetails.exp5to10;
        this.exp10to15 = data.lifeInsuranceDetails.exp10to15;
        this.exp15to20 = data.lifeInsuranceDetails.exp15to20;
        this.exp20to25 = data.lifeInsuranceDetails.exp20to25;
        this.exp25to30 = data.lifeInsuranceDetails.exp25to30;
        this.expcuryear = data.lifeInsuranceDetails.expcuryear;
        this.explastyear = data.lifeInsuranceDetails.explastyear;
        this.fininheritance = data.lifeInsuranceDetails.fininheritance;
        this.finliabilities = data.lifeInsuranceDetails.finliabilities;
        this.finsavings = data.lifeInsuranceDetails.finsavings;
        this.food5to10 = data.lifeInsuranceDetails.food5to10;
        this.food10to15 = data.lifeInsuranceDetails.food10to15;
        this.food15to20 = data.lifeInsuranceDetails.food15to20;
        this.food20to25 = data.lifeInsuranceDetails.food20to25;
        this.food25to30 = data.lifeInsuranceDetails.food25to30;
        this.foodcuryear = data.lifeInsuranceDetails.foodcuryear;
        this.foodlastyear = data.lifeInsuranceDetails.foodlastyear;
        this.Gastritistg = data.lifeInsuranceDetails.Gastritistg;
        this.gynecologicaltg = data.lifeInsuranceDetails.gynecologicaltg;
        this.healthDetailsTwo = data.lifeInsuranceDetails.healthDetailsTwo;
        this.healthDetailsone = data.lifeInsuranceDetails.healthDetailsone;
        this.healthInsurance = data.lifeInsuranceDetails.healthInsurance;
        this.healthNameMemberOne = data.lifeInsuranceDetails.healthNameMemberOne;
        this.healthNameMemberTwo = data.lifeInsuranceDetails.healthNameMemberTwo;
        this.Hepatitistg = data.lifeInsuranceDetails.Hepatitistg;
        this.impairmenttg = data.lifeInsuranceDetails.impairmenttg;
        this.incBenefits = data.lifeInsuranceDetails.incBenefits;
        this.incPaymentMode = data.lifeInsuranceDetails.incPaymentMode;
        this.incPlanName = data.lifeInsuranceDetails.incPlanName;

        this.incPremiumTerm = data.lifeInsuranceDetails.incPremiumTerm;
        this.incSumAssured = data.lifeInsuranceDetails.incSumAssured;
        this.inccoverageaTerm = data.lifeInsuranceDetails.inccoverageaTerm;
        this.income5to10 = data.lifeInsuranceDetails.income5to10;
        this.income10to15 = data.lifeInsuranceDetails.income10to15;
        this.income15to20 = data.lifeInsuranceDetails.income15to20;
        this.income20to25 = data.lifeInsuranceDetails.income20to25;
        this.income25to30 = data.lifeInsuranceDetails.income25to30;
        this.incomecuryear = data.lifeInsuranceDetails.incomecuryear;
        this.incomelastyear = data.lifeInsuranceDetails.incomelastyear;
        this.incpaymentmethod = data.lifeInsuranceDetails.incpaymentmethod;
        this.incpremiumType = data.lifeInsuranceDetails.incpremiumType;
        this.Kidneytg = data.lifeInsuranceDetails.Kidneytg;
        this.lifeDetailsTwo = data.lifeInsuranceDetails.lifeDetailsTwo;
        this.lifeDetailsone = data.lifeInsuranceDetails.lifeDetailsone;
        this.lifeNameMemberOne = data.lifeInsuranceDetails.lifeNameMemberOne;
        this.lifeNameMemberTwo = data.lifeInsuranceDetails.lifeNameMemberTwo;
        this.lifeStageId = data.lifeInsuranceDetails.lifeStageId;
        this.lifeincDeathMaturity = data.lifeInsuranceDetails.lifeincDeathMaturity;
        this.Livertg = data.lifeInsuranceDetails.Livertg;
        this.mar5to10 = data.lifeInsuranceDetails.mar5to10;
        this.mar10to15 = data.lifeInsuranceDetails.mar10to15;
        this.mar15to20 = data.lifeInsuranceDetails.mar15to20;
        this.mar20to25 = data.lifeInsuranceDetails.mar20to25;
        this.mar25to30 = data.lifeInsuranceDetails.mar25to30;
        this.marcuryear = data.lifeInsuranceDetails.marcuryear;
        this.marlastyear = data.lifeInsuranceDetails.marlastyear;
        this.miscariagetg = data.lifeInsuranceDetails.miscariagetg;
        this.Musculoskeletaltg = data.lifeInsuranceDetails.Musculoskeletaltg;
        this.Oncologisttg = data.lifeInsuranceDetails.Oncologisttg;
        this.otheNameofMember = data.lifeInsuranceDetails.otheNameofMember;
        this.other5to10 = data.lifeInsuranceDetails.other5to10;
        this.other10to15 = data.lifeInsuranceDetails.other10to15;
        this.other15to20 = data.lifeInsuranceDetails.other15to20;
        this.other20to25 = data.lifeInsuranceDetails.other20to25;
        this.other25to30 = data.lifeInsuranceDetails.other25to30;
        this.otherDetailsTwo = data.lifeInsuranceDetails.otherDetailsTwo;
        this.otherDetailsone = data.lifeInsuranceDetails.otherDetailsone;
        this.otherNameMemberTwo = data.lifeInsuranceDetails.otherNameMemberTwo;
        this.othercuryear = data.lifeInsuranceDetails.othercuryear;
        this.otherlastyear = data.lifeInsuranceDetails.otherlastyear;
        this.pensionDetailsTwo = data.lifeInsuranceDetails.pensionDetailsTwo;
        this.pensionDetailsone = data.lifeInsuranceDetails.pensionDetailsone;
        this.pensionNameMember = data.lifeInsuranceDetails.pensionNameMember;
        this.pensionNameMemberTwo = data.lifeInsuranceDetails.pensionNameMemberTwo;
        this.pensionPlanning = data.lifeInsuranceDetails.pensionPlanning;
        this.phyHeight = data.lifeInsuranceDetails.phyHeight;
        this.phyWeight = data.lifeInsuranceDetails.phyWeight;
        this.physicaltg = data.lifeInsuranceDetails.physicaltg;
        this.pregmonths = data.lifeInsuranceDetails.pregmonths;
        this.projectSpanId = data.lifeInsuranceDetails.projectWorkSpanId;
        // this.ProposersSign= data.lifeInsuranceDetails.angioplastytg;
        this.prospect5to10 = data.lifeInsuranceDetails.prospect5to10;
        this.prospect10to15 = data.lifeInsuranceDetails.prospect10to15;
        this.prospect15to20 = data.lifeInsuranceDetails.prospect15to20;
        this.prospect20to25 = data.lifeInsuranceDetails.prospect20to25;
        this.prospect25to30 = data.lifeInsuranceDetails.prospect25to30;
        this.prospectMonthly5to10 = data.lifeInsuranceDetails.prospectMonthly5to10;
        this.prospectMonthly10to15 = data.lifeInsuranceDetails.prospectMonthly10to15;
        this.prospectMonthly15to20 = data.lifeInsuranceDetails.prospectMonthly15to20;
        this.prospectMonthly20to25 = data.lifeInsuranceDetails.prospectMonthly20to25;
        this.prospectMonthly25to30 = data.lifeInsuranceDetails.prospectMonthly25to30;
        this.prospectMonthlycuryear = data.lifeInsuranceDetails.prospectMonthlycuryear;
        this.prospectMonthlylastyear = data.lifeInsuranceDetails.prospectMonthlylastyear;
        this.prospectcuryear = data.lifeInsuranceDetails.prospectcuryear;
        this.prospectlastyear = data.lifeInsuranceDetails.prospectlastyear;

        this.appetiteRiskId = data.lifeInsuranceDetails.appetiteId;


        // this.ProspectsSign = data.lifeInsuranceDetails.angioplastytg;
        this.protectionNeedId = data.lifeInsuranceDetails.protectionNeedId;
        this.recommendedRisk = data.lifeInsuranceDetails.recommendedRisk;
        this.recommendedcommit = data.lifeInsuranceDetails.recommendedcommit;
        this.recommendedpolicy = data.lifeInsuranceDetails.recommendedpolicy;
        this.recommendedsuitedPolicy = data.lifeInsuranceDetails.recommendedsuitedPolicy;
        this.Rheumatictg = data.lifeInsuranceDetails.Rheumatictg;
        this.savingandinvestplan = data.lifeInsuranceDetails.savingandinvestplan;
        this.savingsDetailsTwo = data.lifeInsuranceDetails.savingsDetailsTwo;
        this.savingsDetailsone = data.lifeInsuranceDetails.savingsDetailsone;
        this.savingsNameMemberOne = data.lifeInsuranceDetails.savingsNameMemberOne;
        this.savingsNameMemberTwo = data.lifeInsuranceDetails.savingsNameMemberTwo;
        this.Sclerosistg = data.lifeInsuranceDetails.Sclerosistg;
        this.stageage = data.lifeInsuranceDetails.stageage;
        this.surgerytg = data.lifeInsuranceDetails.surgerytg;
        this.Throattg = data.lifeInsuranceDetails.Throattg;
        this.Thyroidtg = data.lifeInsuranceDetails.Thyroidtg;
        this.todaysdateAgent = data.lifeInsuranceDetails.todaysdateAgent;
        this.todaysdateprospect = data.lifeInsuranceDetails.todaysdateprospect;
        this.total5to10 = data.lifeInsuranceDetails.total5to10;
        this.total10to15 = data.lifeInsuranceDetails.total10to15;
        this.total15to20 = data.lifeInsuranceDetails.total15to20;
        this.total20to25 = data.lifeInsuranceDetails.total20to25;
        this.total25to30 = data.lifeInsuranceDetails.total25to30;
        this.totalcuryear = data.lifeInsuranceDetails.totalcuryear;
        this.totallastyear = data.lifeInsuranceDetails.totallastyear;
        this.transmittedtg = data.lifeInsuranceDetails.transmittedtg;
        this.vacation5to10 = data.lifeInsuranceDetails.vacation5to10;
        this.vacation10to15 = data.lifeInsuranceDetails.vacation10to15;
        this.vacation15to20 = data.lifeInsuranceDetails.vacation15to20;
        this.vacation20to25 = data.lifeInsuranceDetails.vacation20to25;
        this.vacation25to30 = data.lifeInsuranceDetails.vacation25to30;
        this.vacationcuryear = data.lifeInsuranceDetails.vacationcuryear;
        this.vacationlastyear = data.lifeInsuranceDetails.vacationlastyear;
        this.empIncomeProof = data.lifeInsuranceDetails.empIncomeProof;

        this.lifeInsuranceDocs = data.lifeInsuranceDetails.alldocuments;

        if (data.lifeInsuranceDetails.alldocuments != null) {
          for (let index = 0; index < data.lifeInsuranceDetails.alldocuments.length; index++) {
            if (data.lifeInsuranceDetails.alldocuments[index].documentName == "ProposersSign") {
              this.dispProposerSignFile = data.lifeInsuranceDetails.alldocuments[index].file;
            }
            else if (data.lifeInsuranceDetails.alldocuments[index].documentName == "AgentsSign") {
              this.dispAgentSignFile = data.lifeInsuranceDetails.alldocuments[index].file;
            }
            else if (data.lifeInsuranceDetails.alldocuments[index].documentName == "ProspectsSign") {
              this.dispProspectsSignFile = data.lifeInsuranceDetails.alldocuments[index].file;
            }
          }
        }
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
   
        else if (this.editformname == "life") {
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
      RequestType:7,
      Information:"Life Insurance"


    }
    this.spinner.show();
    this.businessloanservice.SubmitInsuranceForm(cdata).subscribe((data: any) => {
      if (data == "ok") {
        if(this.role == '1008'){
          alert("Life Insurance Form Submitted Successfully!!")
          this.route.navigate(['/badashboard']);

        }
        else{
          alert("Life Insurance Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
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



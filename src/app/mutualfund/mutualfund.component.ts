import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../Shared/country.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DetailsformService } from '../Shared/detailsform.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { DatePipe } from '@angular/common';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { Router } from '@angular/router';
import { MutualFund } from '../ViewModels/MutualFund';
import { MatStepper } from '@angular/material';
import { MessageService } from '../MessageService/meaagse.service';
@Component({
  selector: 'app-mutualfund',
  templateUrl: './mutualfund.component.html',
  styleUrls: ['./mutualfund.component.css']
})
export class MutualfundComponent implements OnInit {
  Proof: any;
  designation: any;
  firstname: any;
  pannumber: any;
  datebirth: any;
  Number: any;
  maritalstatus: any;
  gender: any;
  telephone: any;
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
  NRI: any;
  hufdata: any;
  proprietor: any;
  Fund: any;
  Others: any;
  Partnership: any;
  relationship: any;
  piodata: any;
  resident: any;
  Nstate: any;
  adresstwo: any;
  adressone: any;
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
  customerotherdocs: any = [];
  otherdocactualname: any;
  CertificateDisplay: any = [];
  certificates: any = [];
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
  userImage: any;
  uid: string;
  AllUserData: any;
  username: string;
  DateTime: Date;
  notify: string;
  dismissalert: boolean;
  postalcode: any;
  stateone: any;
  countryone: any;
  districtone: any;
  talukone: any;
  address: any;
  sameadress: boolean;
  newadress: boolean = true;
  firstapplicate: any;
  micrcode: any;
  pastexperience: any;
  residentialaddress: any;
  partnerproprietor: any;
  technicallyqualified: any;
  lineofactivity: any;
  loanamounts: any;
  termloan: any;
  Naddress2: any
  Npincode: any
  ncountry: any; files1: any;
  Ndistrict: any; files2: any;
  minorcountry: any
  minorstate: any
  minordistrict: any
  minoraddress1: any
  minorpincode: any
  files: any;
  thrdapplicate: any;
  branchaddress: any;
  minorname: any;
  minoraddress: any;
  minordob: any;
  accountype: any;
  secapplicate: any;
  addr: any
  aadhaar: any
  name: any;
  panno: any;
  birth: any;
  Aadhaarsec: any;
  thirdname: any;
  pannum: any;
  birthdata: any;
  adddata: any;
  Aadhaathird: any;
  addthird: any;
  guardian: any
  guardianpan: any
  guardianbirth: any;
  aadharguard: any;
  society: any;
  FIIsdata: any;
  qfidata: any;
  placeofbirth: any;
  Relationship: any;
  addguardian: any;
  country: any
  nationality: any;
  secondplace: any;
  secondcountry: any;
  Citizenship: any;
  thirdplace: any;
  thirdcountry: any;
  thirdnationlity: any;
  Nominee: any;
  Nomineepan: any;
  investor: any;
  Allocation: any;
  Investment: any
  lumpsum: any;
  sipdata: any;
  Payout: any;
  dpid: any;
  Beneficiary: any;
  bankname: any;
  accountnum: any;
  ifcscode: any;
  dpname: any;
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
  MutualfundForm = new FormGroup({
    firstname: new FormControl(),
    pannumber: new FormControl(),
    datebirth: new FormControl(),
    telephone: new FormControl(),
    gender: new FormControl(),
    maritalstatus: new FormControl(),
    Number: new FormControl(),
    dateofbirth: new FormControl(),
    religion: new FormControl(),
    caste: new FormControl(),
    qualification: new FormControl(),
    occupation: new FormControl(),
    cpassword: new FormControl(),
    Proof: new FormControl(),
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
    family: new FormControl(),
    NRI: new FormControl(),
    hufdata: new FormControl(),
    proprietor: new FormControl(),
    Fund: new FormControl(),
    Others: new FormControl(),
    Partnership: new FormControl(),
    relationship: new FormControl(),
    piodata: new FormControl(),
    resident: new FormControl(),
    firstapplicate: new FormControl(),
    secapplicate: new FormControl(),
    thrdapplicate: new FormControl(),
    branchaddress: new FormControl(),
    accountype: new FormControl(),
    micrcode: new FormControl(),
    pastexperience: new FormControl(),
    residentialaddress: new FormControl(),
    aadhaar: new FormControl(),
    addr: new FormControl(),
    name: new FormControl(),
    panno: new FormControl(),
    birth: new FormControl(),
    Aadhaarsec: new FormControl(),
    thirdname: new FormControl(),
    pannum: new FormControl(),
    birthdata: new FormControl(),
    adddata: new FormControl(),
    Aadhaathird: new FormControl(),
    addthird: new FormControl(),
    guardian: new FormControl(),
    guardianpan: new FormControl(),
    guardianbirth: new FormControl(),
    addguardian: new FormControl(),
    aadharguard: new FormControl(),
    Relationship: new FormControl(),
    qfidata: new FormControl(),
    society: new FormControl(),
    nationality: new FormControl(),
    secondplace: new FormControl(),
    secondcountry: new FormControl(),
    Citizenship: new FormControl(),
    thirdplace: new FormControl(),
    thirdnationlity: new FormControl(),
    Nominee: new FormControl(),
    thirdcountry: new FormControl(),
    placeofbirth: new FormControl(),
    FIIsdata: new FormControl(),
    Nomineepan: new FormControl(),
    investor: new FormControl(),
    Allocation: new FormControl(),
    Investment: new FormControl(),
    lumpsum: new FormControl(),
    sipdata: new FormControl(),
    Payout: new FormControl(),
    dpid: new FormControl(),
    Beneficiary: new FormControl(),
    bankname: new FormControl(),
    ifcscode: new FormControl(),
    dpname: new FormControl(),
    // taluk: new FormControl(),
    customerid: new FormControl(),
  });
  investment: any;
  role: string;
  lastname: any;
  email: any;
  taluk: any;
  customerid: any;
  ticketid: any;
  serviceprovidername: any;
  guardioanrelationshipwithminorid: any;
  minorrelationshipforguardian: boolean;
  GuardianSelectedAadharFiles: string;
  GuardianSelectedpanFiles: string;
  SendCopytoSP: any;
  ProposID: any;
  certificatesexist: boolean;
  otherdocuments: any;
  PermanentSameasResidential: any;
  funddata: any;
  CustomerId: any;
  UserId: any;
  CreatedOn: any;
  TickedId: any;
  Role: any;
  customerId: any;
  investid: any;
  get f() { return this.MutualfundForm.controls; }

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private http: HttpClient, private countryService: CountryService,
    private detailService: DetailsformService, private datepipe: DatePipe, private spinner: NgxSpinnerService,
    private userservice: UserDetailsService, private businessloanservice: BusinessLoanServiceService,
    private httpService: HttpClient, private serviceproviderservice: ServiceProviderService,
    private route: Router) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.MutualfundForm = formBuilder.group({
      customerid: [''],
      firstname: ['', Validators.required],
      pannumber: ['', Validators.required],
      datebirth: ['', Validators.required],
      telephone: ['', Validators.required],
      Number: [''],
      dateofbirth: [''],
      Proof: ['', Validators.required],
      pincode: [''],
      accountnum: ['', Validators.required],
      ifcscode: ['', Validators.required],

      postalcode: [''],
      addthird: ['', Validators.required],
      guardianpan: ['', Validators.required],
      FIIsdata: ['', Validators.required],
      society: ['', Validators.required],
      placeofbirth: ['', Validators.required],
      thirdnationlity: ['', Validators.required],
      Nomineepan: ['', Validators.required],
      investor: ['', Validators.required],
      Allocation: ['', Validators.required],
      Payout: ['', Validators.required],
      dpid: ['', Validators.required],
      Beneficiary: ['', Validators.required],
      dpname: ['', Validators.required],
      bankname: ['', Validators.required],
      sipdata: ['', Validators.required],
      lumpsum: ['', Validators.required],
      Investment: ['', Validators.required],
      Nominee: ['', Validators.required],
      qfidata: ['', Validators.required],
      country: ['', Validators.required],
      nationality: ['', Validators.required],
      secondplace: ['', Validators.required],
      secondcountry: ['', Validators.required],
      Citizenship: ['', Validators.required],
      thirdcountry: ['', Validators.required],
      thirdplace: ['', Validators.required],
      guardianbirth: ['', Validators.required],
      Relationship: [''],
      addguardian: ['', Validators.required],
      aadharguard: ['', Validators.required],
      Aadhaathird: ['', Validators.required],
      guardian: ['', Validators.required],
      adddata: ['', Validators.required],
      addr: ['', Validators.required],
      aadhaar: ['', Validators.required],
      name: ['', Validators.required],
      panno: ['', Validators.required],
      birth: ['', Validators.required],
      Aadhaarsec: ['', Validators.required],
      thirdname: ['', Validators.required],
      pannum: ['', Validators.required],
      birthdata: ['', Validators.required],
      adressone: [''],
      adresstwo: [''],

      NRI: ['', Validators.required],
      hufdata: ['', Validators.required],
      proprietor: ['', Validators.required],
      Fund: ['', Validators.required],
      Others: ['', Validators.required],
      Partnership: ['', Validators.required],
      relationship: ['', Validators.required],
      piodata: ['', Validators.required],
      resident: ['', Validators.required],
      firstapplicate: ['', Validators.required],
      secapplicate: ['', Validators.required],
      thrdapplicate: ['', Validators.required],
      branchaddress: ['', Validators.required],
      accountype: ['', Validators.required],
      micrcode: ['', Validators.required],
      pastexperience: [''],
      residentialaddress: [''],
      partnerproprietor: [''],
      technicallyqualified: [''],
    })


    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.ticketid = localStorage.getItem("TicketId");
    this.role = localStorage.getItem("role");

    localStorage.setItem("customerId", this.customerid);
    this.customerid = localStorage.getItem("customerId");


  }
  onSelectinvestment(data: any) {
    this.investid = data;
  }
  ngOnInit() {

    var custid = localStorage.setItem("customerId", this.customerid);
    if (custid == undefined) {
      this.customerid = null;
    }
    else {
      this.customerid = localStorage.getItem("customerId");
    }
    if (this.role != '1008') {
      this.GetCurrentUserImage();
      this.GetUserDetails();
    }
    this.Certificate();
    this.GetServiceProvider();
    this.GetDraftData();

  }
  async GetServiceProvider() {
    this.spinner.show()
    await this.serviceproviderservice.getservcieprovider(this.ticketid).subscribe((response: any) => {
      this.serviceprovidername = response;
      this.spinner.hide()

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
      this.customerid = this.AllUserData.userId;
    })
  }

  GetCurrentUserImage() {
    this.spinner.show()
    this.userservice.getCurrentUSerImage(this.ticketid).subscribe((respose: any) => {
      this.userImage = respose;
      this.spinner.hide();
    });
  }
  OnChangeOtherDocs(event) {
    var otherdocs = [];
    this.otherdocuments = [].slice.call(event.target.files);
    console.log(this.otherdocuments);
    otherdocs = this.otherdocuments[0];
    this.customerotherdocs.push(otherdocs);
    this.otherdocactualname = this.otherdocuments[0].name
  }

  // public documentArray: Array<any> = [];

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

  getCustomerImage(id) {
    this.spinner.show()
    this.userservice.getCurrentUSerImage(id).subscribe((respose: any) => {
      this.userImage = respose;
      this.getCustomerDetails(id);
      this.spinner.hide();
    });
  }
  async GetEditData() {
    if (this.ticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.ticketid

    }
    this.spinner.show();

    this.businessloanservice.GetGoldLoanEditdata(sendid).subscribe((data: any) => {
      this.spinner.hide();

      this.customerid = data.userId
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
    this.customerid = localStorage.getItem("customerId");
    // this.ticketid = localStorage.getItem("TicketId");
    var info = {
      userid: this.customerid,
      TicketId: sendid
    }
    this.spinner.show();
    this.businessloanservice.mutualfunddata(info).subscribe((data1: any) => {
      let data = JSON.parse(data1,this.toCamelCase);

      this.funddata = data;
      this.customerid = this.funddata.mutualFundDetails.customerId;
      this.UserId = this.funddata.mutualFundDetails.userId;
      this.FIIsdata = this.funddata.mutualFundDetails.fiIsdata;
      this.Nomineepan = this.funddata.mutualFundDetails.nomineepan;
      this.Allocation = this.funddata.mutualFundDetails.allocation;
      this.Payout = this.funddata.mutualFundDetails.payout;
      this.Beneficiary = this.funddata.mutualFundDetails.beneficiary;
      this.Nominee = this.funddata.mutualFundDetails.nominee;
      this.Citizenship = this.funddata.mutualFundDetails.citizenship;
      this.relationship = this.funddata.mutualFundDetails.relationship;
      this.Aadhaathird = this.funddata.mutualFundDetails.aadhaathird;
      this.Aadhaarsec = this.funddata.mutualFundDetails.aadhaarsec;
      this.NRI = this.funddata.mutualFundDetails.nri;
      this.Fund = this.funddata.mutualFundDetails.fund;
      this.Others = this.funddata.mutualFundDetails.others;
      this.Partnership = this.funddata.mutualFundDetails.partnership;
      this.TickedId = this.funddata.mutualFundDetails.tickedId;
      this.Role = this.funddata.mutualFundDetails.role;

      this.Number = this.funddata.mutualFundDetails.value;

      this.firstname = this.funddata.mutualFundDetails.firstname;
      this.pannumber = this.funddata.mutualFundDetails.pannumber;
      this.datebirth = this.funddata.mutualFundDetails.datebirth;
      this.telephone = this.funddata.mutualFundDetails.telephone,
        this.dateofbirth = null;
      this.Proof = this.funddata.mutualFundDetails.proof;
      this.accountnum = this.funddata.mutualFundDetails.accountnum;
      this.ifcscode = this.funddata.mutualFundDetails.ifcscode;
      this.addthird = this.funddata.mutualFundDetails.addthird;
      this.guardianpan = this.funddata.mutualFundDetails.guardianpan;
      this.society = this.funddata.mutualFundDetails.society;
      this.placeofbirth = this.funddata.mutualFundDetails.placeofbirth;

      this.thirdnationlity = this.funddata.mutualFundDetails.thirdnationlity;
      this.investor = this.funddata.mutualFundDetails.investor;
      this.dpid = this.funddata.mutualFundDetails.dpid;
      this.dpname = this.funddata.mutualFundDetails.dpname;
      this.bankname = this.funddata.mutualFundDetails.bankname;
      this.sipdata = this.funddata.mutualFundDetails.sipdata;
      this.lumpsum = this.funddata.mutualFundDetails.lumpsum;
      this.Investment = this.funddata.mutualFundDetails.investment;
      this.qfidata = this.funddata.mutualFundDetails.qfidata;
      this.country = this.funddata.mutualFundDetails.country;
      this.nationality = this.funddata.mutualFundDetails.nationality;

      this.secondplace = this.funddata.mutualFundDetails.secondplace;
      this.secondcountry = this.funddata.mutualFundDetails.secondcountry;
      this.thirdcountry = this.funddata.mutualFundDetails.thirdcountry;
      this.thirdplace = this.funddata.mutualFundDetails.thirdplace;
      this.guardianbirth = this.funddata.mutualFundDetails.guardianbirth;
      this.addguardian = this.funddata.mutualFundDetails.addguardian;
      this.aadharguard = this.funddata.mutualFundDetails.aadharguard;
      this.guardian = this.funddata.mutualFundDetails.guardian;
      this.adddata = this.funddata.mutualFundDetails.adddata;
      this.addr = this.funddata.mutualFundDetails.addr;
      this.aadhaar = this.funddata.mutualFundDetails.aadhaar;
      this.name = this.funddata.mutualFundDetails.name;
      this.panno = this.funddata.mutualFundDetails.panno;

      this.birth = this.funddata.mutualFundDetails.birth;
      this.thirdname = this.funddata.mutualFundDetails.thirdname;
      this.pannum = this.funddata.mutualFundDetails.pannum;
      this.birthdata = this.funddata.mutualFundDetails.birthdata;
      this.hufdata = this.funddata.mutualFundDetails.hufdata;
      this.proprietor = this.funddata.mutualFundDetails.proprietor;

      this.piodata = this.funddata.mutualFundDetails.piodata;
      this.resident = this.funddata.mutualFundDetails.resident;
      this.firstapplicate = this.funddata.mutualFundDetails.firstapplicate;
      this.secapplicate = this.funddata.mutualFundDetails.secapplicate;
      this.thrdapplicate = this.funddata.mutualFundDetails.thrdapplicate;
      this.branchaddress = this.funddata.mutualFundDetails.branchaddress;
      this.accountype = this.funddata.mutualFundDetails.accountype;
      this.micrcode = this.funddata.mutualFundDetails.micrcode;
      this.investid=this.funddata.mutualFundDetails.investmentType
      if (data.certificates != null) {
        this.certificates = data.certificates
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
    })
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
  onChangeCertificates(event: any, data: any) {
    if (data.certificateName == "Birth Certificate" || data.certificateName == "BirthCertificate") {
      var bfileslist = "";
      this.bfiles = [].slice.call(event.target.files);
      console.log(this.bfiles);
      bfileslist = this.bfiles[0];
      this.BirthCertificateFiles = bfileslist;
    }
    else if (data.certificateName == "Caste Certificate" || data.certificateName == "CasteCertificate") {
      var castefileslist = "";
      this.castefiles = [].slice.call(event.target.files);
      console.log(this.castefiles);
      castefileslist = this.castefiles[0];
      this.CasteCertificateFiles = castefileslist;
    }
    else if (data.certificateName == "Medical Certificate" || data.certificateName == "MedicalCertificate") {
      var medicalfileslist = "";
      this.medicalfiles = [].slice.call(event.target.files);
      console.log(this.medicalfiles);
      medicalfileslist = this.medicalfiles[0];
      this.MedicalCertificateFiles = medicalfileslist;
    }
    else if (data.certificateName == "SSC Certificate" || data.certificateName == "SSCCertificate") {
      var sscfileslist = "";
      this.sscfiles = [].slice.call(event.target.files);
      console.log(this.sscfiles);
      sscfileslist = this.sscfiles[0];
      this.SSCCertificateFiles = sscfileslist;
    }
    else if (data.certificateName == "Degree Certificate" || data.certificateName == "DegreeCertificate") {
      var degreefileslist = "";
      this.degreefiles = [].slice.call(event.target.files);
      console.log(this.degreefiles);
      degreefileslist = this.degreefiles[0];
      this.DegreeCertificateFiles = degreefileslist;
    }
    else if (data.certificateName == "PG Certificate" || data.certificateName == "PGCertificate") {
      var pgfileslist = "";
      this.pgfiles = [].slice.call(event.target.files);
      console.log(this.pgfiles);
      pgfileslist = this.pgfiles[0];
      this.PGCertificateFiles = pgfileslist;
    }
  }
  public documentArray: Array<any> = [];
  public newDocAttribute: any = { code: "", };

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
  deleteFieldValueDocument(index) {
    this.documentArray.splice(index, 1);
  }
  mutualFunIn() {
    if (this.role == '1008') {
      this.submitted = true;
      if (this.MutualfundForm.invalid) {
        return;
      }
      else {
        this.DateTime = new Date();
        let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
        const inputRequest: MutualFund = {
          CustomerId: this.customerid,
          UserId: this.uid,
          FIIsdata: this.FIIsdata,
          Nomineepan: this.Nomineepan,
          Allocation: this.Allocation,
          Payout: this.Payout,
          Beneficiary: this.Beneficiary,
          Nominee: this.Nominee,
          Citizenship: this.Citizenship,
          Relationship: this.relationship,
          Aadhaathird: this.Aadhaathird,
          Aadhaarsec: this.Aadhaarsec,
          NRI: this.NRI,
          Fund: this.Fund,
          Others: this.Others,
          Partnership: this.Partnership,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          Role: this.role,
          Publickey: null,
          Number: this.Number,
          InvestmentType: this.investid,
          firstname: this.firstname,
          pannumber: this.pannumber,
          datebirth: this.datebirth,
          telephone: this.telephone,
          dateofbirth: null,
          Proof: this.Proof,
          accountnum: this.accountnum,
          ifcscode: this.ifcscode,
          addthird: this.addthird,
          guardianpan: this.guardianpan,
          society: this.society,
          placeofbirth: this.placeofbirth,
          thirdnationlity: this.thirdnationlity,
          investor: this.investor,
          dpid: this.dpid,
          dpname: this.dpname,
          bankname: this.bankname,
          sipdata: this.sipdata,
          lumpsum: this.lumpsum,
          Investment: this.Investment,
          qfidata: this.qfidata,
          country: this.country,
          nationality: this.nationality,
          secondplace: this.secondplace,
          secondcountry: this.secondcountry,
          thirdcountry: this.thirdcountry,
          thirdplace: this.thirdplace,
          guardianbirth: this.guardianbirth,
          addguardian: this.addguardian,
          aadharguard: this.aadharguard,
          guardian: this.guardian,
          adddata: this.adddata,
          addr: this.addr,
          aadhaar: this.aadhaar,
          name: this.name,
          panno: this.panno,
          birth: this.birth,
          thirdname: this.thirdname,
          pannum: this.pannum,
          birthdata: this.birthdata,
          hufdata: this.hufdata,
          proprietor: this.proprietor,
          piodata: this.piodata,
          resident: this.resident,
          firstapplicate: this.firstapplicate,
          secapplicate: this.secapplicate,
          thrdapplicate: this.thrdapplicate,
          branchaddress: this.branchaddress,
          accountype: this.accountype,
          micrcode: this.micrcode,
          IsAllFileldsFilled: true,
          ProductId: 3,
          LoanIdORInsuranceId: 6,
          ApplicationType: "Customer",
          URL: "Mutualfund",
          ProsperityId: this.ProposID,
        }
        this.spinner.show();
        this.businessloanservice.SaveMutualFundDetails(inputRequest).subscribe((data: any) => {
          if (data == "success") {
            alert("Mutual Fund Details Saved Successfully!!")
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();

            //stepper.next();

          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        })
        // }
      }
    }
    else {
      this.submitted = true;
      if (this.MutualfundForm.invalid) {
        const invalid = [];
        const controls = this.MutualfundForm.controls;
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
        const inputRequest: MutualFund = {
          CustomerId: this.customerid,
          UserId: this.uid,
          FIIsdata: this.FIIsdata,
          Nomineepan: this.Nomineepan,
          Allocation: this.Allocation,
          Payout: this.Payout,
          Beneficiary: this.Beneficiary,
          Nominee: this.Nominee,
          Citizenship: this.Citizenship,
          Relationship: this.relationship,
          Aadhaathird: this.Aadhaathird,
          Aadhaarsec: this.Aadhaarsec,
          NRI: this.NRI,
          Fund: this.Fund,
          Others: this.Others,
          Partnership: this.Partnership,
          CreatedBy: this.username,
          CreatedOn: latest_date,
          TickedId: this.ticketid,
          Role: this.role,
          Publickey: null,
          Number: this.Number,
          InvestmentType: this.investid,

          firstname: this.firstname,
          pannumber: this.pannumber,
          datebirth: this.datebirth,
          telephone: this.telephone,
          dateofbirth: null,
          Proof: this.Proof,
          accountnum: this.accountnum,
          ifcscode: this.ifcscode,
          addthird: this.addthird,
          guardianpan: this.guardianpan,
          society: this.society,
          placeofbirth: this.placeofbirth,

          thirdnationlity: this.thirdnationlity,
          investor: this.investor,
          dpid: this.dpid,
          dpname: this.dpname,
          bankname: this.bankname,
          sipdata: this.sipdata,
          lumpsum: this.lumpsum,
          Investment: this.Investment,
          qfidata: this.qfidata,
          country: this.country,
          nationality: this.nationality,

          secondplace: this.secondplace,
          secondcountry: this.secondcountry,
          thirdcountry: this.thirdcountry,
          thirdplace: this.thirdplace,
          guardianbirth: this.guardianbirth,
          addguardian: this.addguardian,
          aadharguard: this.aadharguard,
          guardian: this.guardian,
          adddata: this.adddata,
          addr: this.addr,
          aadhaar: this.aadhaar,
          name: this.name,
          panno: this.panno,

          birth: this.birth,
          thirdname: this.thirdname,
          pannum: this.pannum,
          birthdata: this.birthdata,
          hufdata: this.hufdata,
          proprietor: this.proprietor,

          piodata: this.piodata,
          resident: this.resident,
          firstapplicate: this.firstapplicate,
          secapplicate: this.secapplicate,
          thrdapplicate: this.thrdapplicate,
          branchaddress: this.branchaddress,
          accountype: this.accountype,
          micrcode: this.micrcode,
          IsAllFileldsFilled: true,
          ProductId: 3,
          LoanIdORInsuranceId: 6,
          ApplicationType: "Customer",
          URL: "Mutualfund",
          ProsperityId: this.ProposID,
        }
        this.spinner.show();
        this.businessloanservice.SaveMutualFundDetails(inputRequest).subscribe((data: any) => {
          if (data == "success") {
            alert("Mutual Fund Details Saved Successfully!!")
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            //this.route.navigate(['/customerdashboard']);
            //stepper.next();

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
      // }
    }
  }

  draftmutualFund() {
    if (this.role == '1008') {
      this.DateTime = new Date();
      let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
      const inputRequest: MutualFund = {
        CustomerId: this.customerid,
        UserId: this.uid,
        FIIsdata: this.FIIsdata,
        Nomineepan: this.Nomineepan,
        Allocation: this.Allocation,
        Payout: this.Payout,
        Beneficiary: this.Beneficiary,
        Nominee: this.Nominee,
        Citizenship: this.Citizenship,
        Relationship: this.relationship,
        Aadhaathird: this.Aadhaathird,
        Aadhaarsec: this.Aadhaarsec,
        NRI: this.NRI,
        Fund: this.Fund,
        Others: this.Others,
        Partnership: this.Partnership,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        Publickey: null,
        Number: this.Number,
        InvestmentType: this.investid,

        firstname: this.firstname,
        pannumber: this.pannumber,
        datebirth: this.datebirth,
        telephone: this.telephone,
        dateofbirth: null,
        Proof: this.Proof,
        accountnum: this.accountnum,
        ifcscode: this.ifcscode,
        addthird: this.addthird,
        guardianpan: this.guardianpan,
        society: this.society,
        placeofbirth: this.placeofbirth,
        thirdnationlity: this.thirdnationlity,
        investor: this.investor,
        dpid: this.dpid,
        dpname: this.dpname,
        bankname: this.bankname,
        sipdata: this.sipdata,
        lumpsum: this.lumpsum,
        Investment: this.Investment,
        qfidata: this.qfidata,
        country: this.country,
        nationality: this.nationality,
        secondplace: this.secondplace,
        secondcountry: this.secondcountry,
        thirdcountry: this.thirdcountry,
        thirdplace: this.thirdplace,
        guardianbirth: this.guardianbirth,
        addguardian: this.addguardian,
        aadharguard: this.aadharguard,
        guardian: this.guardian,
        adddata: this.adddata,
        addr: this.addr,
        aadhaar: this.aadhaar,
        name: this.name,
        panno: this.panno,
        birth: this.birth,
        thirdname: this.thirdname,
        pannum: this.pannum,
        birthdata: this.birthdata,
        hufdata: this.hufdata,
        proprietor: this.proprietor,
        piodata: this.piodata,
        resident: this.resident,
        firstapplicate: this.firstapplicate,
        secapplicate: this.secapplicate,
        thrdapplicate: this.thrdapplicate,
        branchaddress: this.branchaddress,
        accountype: this.accountype,
        micrcode: this.micrcode,
        IsAllFileldsFilled: false,
        ProductId: 3,
        LoanIdORInsuranceId: 6,
        ApplicationType: "Customer",
        URL: "Mutualfund",
        ProsperityId: this.ProposID,
      }
      this.spinner.show();
      this.businessloanservice.SaveMutualFundDetails(inputRequest).subscribe((data: any) => {
        if (data == "success") {
         alert("Mutual Fund Details Saved Successfully!!")
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
          this.GetDraftData();
          //stepper.next();

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
      const inputRequest: MutualFund = {
        CustomerId: this.customerid,
        UserId: this.uid,
        FIIsdata: this.FIIsdata,
        Nomineepan: this.Nomineepan,
        Allocation: this.Allocation,
        Payout: this.Payout,
        Beneficiary: this.Beneficiary,
        Nominee: this.Nominee,
        Citizenship: this.Citizenship,
        Relationship: this.relationship,
        Aadhaathird: this.Aadhaathird,
        Aadhaarsec: this.Aadhaarsec,
        NRI: this.NRI,
        Fund: this.Fund,
        Others: this.Others,
        Partnership: this.Partnership,
        CreatedBy: this.username,
        CreatedOn: latest_date,
        TickedId: this.ticketid,
        Role: this.role,
        Publickey: null,
        Number: this.Number,
        InvestmentType: this.investid,
        firstname: this.firstname,
        pannumber: this.pannumber,
        datebirth: this.datebirth,
        telephone: this.telephone,
        dateofbirth: null,
        Proof: this.Proof,
        accountnum: this.accountnum,
        ifcscode: this.ifcscode,
        addthird: this.addthird,
        guardianpan: this.guardianpan,
        society: this.society,
        placeofbirth: this.placeofbirth,
        thirdnationlity: this.thirdnationlity,
        investor: this.investor,
        dpid: this.dpid,
        dpname: this.dpname,
        bankname: this.bankname,
        sipdata: this.sipdata,
        lumpsum: this.lumpsum,
        Investment: this.Investment,
        qfidata: this.qfidata,
        country: this.country,
        nationality: this.nationality,

        secondplace: this.secondplace,
        secondcountry: this.secondcountry,
        thirdcountry: this.thirdcountry,
        thirdplace: this.thirdplace,
        guardianbirth: this.guardianbirth,
        addguardian: this.addguardian,
        aadharguard: this.aadharguard,
        guardian: this.guardian,
        adddata: this.adddata,
        addr: this.addr,
        aadhaar: this.aadhaar,
        name: this.name,
        panno: this.panno,

        birth: this.birth,
        thirdname: this.thirdname,
        pannum: this.pannum,
        birthdata: this.birthdata,
        hufdata: this.hufdata,
        proprietor: this.proprietor,

        piodata: this.piodata,
        resident: this.resident,
        firstapplicate: this.firstapplicate,
        secapplicate: this.secapplicate,
        thrdapplicate: this.thrdapplicate,
        branchaddress: this.branchaddress,
        accountype: this.accountype,
        micrcode: this.micrcode,
        IsAllFileldsFilled: false,
        ProductId: 3,
        LoanIdORInsuranceId: 6,
        ApplicationType: "Customer",
        URL: "Mutualfund",
        ProsperityId: this.ProposID,
      }
      this.spinner.show();

      this.businessloanservice.SaveMutualFundDetails(inputRequest).subscribe((data: any) => {
        if (data == "success") {
         alert("Mutual Fund Details Saved Successfully!!")
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
    // }
  }
  uploadCertificates() {
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

            this.documentArray=[];
            this.CertificateDisplay=[];
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
            if (localStorage.getItem("editloanform") != "false" && (this.ticketid == null || this.ticketid == undefined || this.ticketid == "")) {
              this.route.navigate(['/mutualfunddetails'])

            }
            else if (localStorage.getItem("editloanform") != "false" && this.ticketid != null) {

            }
            this.spinner.hide();
            this.documentArray=[];
            this.CertificateDisplay=[];
            this.GetDraftData();
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
  //  Upload Certificate Code by Chaithanya
  uploadCertificatesDraft() {

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
            this.certificates=[];
            this.CertificateDisplay=[];
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
  SubmitForm() {
    this.spinner.show();
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');

    var data = {
      CustomerId: this.customerid,
      CreatedBy: this.username,
      CreatedOn: latest_date,
      TickedId:this.ticketid,
      TicketId: this.ticketid,
      IsAllFileldsFilled: true,
      otherdocdetails: this.documentArray,
      ProsperityId: this.ProposID,
      Role: this.role,
      SendCopytoSP: this.SendCopytoSP,
      UserId: this.uid,
    }
    this.businessloanservice.SubmitmutualfundForm(data).subscribe((data: any) => {
      if (data == "ok") {
        if (this.role == '1008') {
          alert("Gold Loan Form Submitted Successfully!!")
          this.route.navigate(['/badashboard']);

        }
        else {
          alert("Gold Loan Form Submitted Successfully with ticket ID " + this.ticketid + " and to ServcieProvider " + this.serviceprovidername)
          this.route.navigate(['/customerdashboard']);

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
}


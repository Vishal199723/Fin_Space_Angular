import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { MailService } from '../Shared/Mail/mail.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerApprovalVM } from '../ViewModels/CustomerApprovalVM';
import { HttpClient } from '@angular/common/http';
import { HomeInsuranceService } from '../Shared/HomeInsurance/home-insurance.service';
import { MotorInsuranceService } from '../Shared/MotoInsurance/motor-insurance.service';
import { LifeInsuranceService } from '../Shared/LifeInsurance/life-insurance.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-previewinsurancedetails',
  templateUrl: './previewinsurancedetails.component.html',
  styleUrls: ['./previewinsurancedetails.component.css']
})
export class PreviewinsurancedetailsComponent implements OnInit {


  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  detailss: string;
  groupId: string;
  ticketid: string;
  customerid: string;
  showapprove: boolean;
  mailticketid: string;
  alldetails: any;
  bankdocs: any;
  bankdocsexist: boolean;
  familydocs: any = [];
  familydocsexist: boolean = false;
  userBasicDetailsDetails: any;
  bankdetails: any;
  userBankDetails: any;
  fname: any;
  mname: any;
  lname: any;
  placebirth: any;
  gender: any;
  marital: any;
  mobile: any;
  religion: any;
  dob: any;
  caste: string;
  qualification: any;
  occupation: any;
  email: any;
  designation: any;
  rState: any;
  rPostal: any;
  rDistrict: any;
  rAddress1: any;
  rAddress2: any;
  pPostal: any;
  pState: any;
  pDistrict: any;
  pAddress1: any;
  pAddress2: any;
  registrationlocation: any;
  yearofmanufacture: any;
  engineno: any;
  chassisno: any;
  colourofvehicle: any;
  ageofinsured: any;
  insureddeclaredvalue: any;
  accessoriesfitted: any;
  valueofkit: any;
  totalvalue: any;
  packagepolicy: any;
  puc: any;
  registrationno: any;
  dateofregistration: any;
  previousinsurer: any;
  previouspolicynumber: any;
  previousperiodfrom: any;
  previousperiodto: any;
  currentperiodfrom: any;
  currentperiodto: any;
  claimslodged: any;
  claimslodgedamount: any;
  entitledtoncb: any;
  userMotorInsuranceDetails: any;
  vehiclemodel: any;
  vehiclemanufacturer: any;
  sourceoffund: any;
  paymentamount: any;
  branchloc: any;
  bankname: any;
  dateofinst: any;
  chequeno: any;
  nameofconcernedenable: boolean;
  nameofconcerned: any;
  entitledtoncbyespercent: any;
  fueltype: any;
  motonaddon: any;
  fullnameofconcerned: any;
  otheremployee: any;
  driver: any;
  legalliabilitypersons: any;
  legalliability: any;
  optforstatutory: any;
  csiopted: any;
  nofpersons: any;
  pillionpassengers: any;
  vehicleproposedfor: any;
  vehicledesignedhandicapped: any;
  limitedtoownpermises: any;
  userFamilyDetailsDetails: any;
  applieduserid: any;
  data: any;
  propaddress: any;
  yearofconstr: any;
  builtuparea: any;
  suminsuredbuildingval: any;
  nameoffinancier: any;
  sumcontentinsured: any;
  distfromwater: any;
  locationofprop: any;
  buildingstructure: any;
  undergroundservices: any;
  buildingtotal: any;
  valueablesdesc: any;
  valueablesquantity: any;
  valueablessuminsured: any;
  valueablesweight: any;
  appliancesdesc: any;
  appliancesmodel: any;
  appliancesyear: any;
  appliancesIDNo: any;
  appliancesSumInsured: any;
  locationwithinpremises: any;
  dimensions: any;
  fixedplatessum: any;
  lossofrent: any;
  additionalrent: any;
  pedigreeinsu: any;
  baggageinsu: any;
  noofservents: any;
  natureofwork: any;
  estimatedwages: any;
  addressofinsurancecom: any;
  itemalreadyinsured: any;
  policynumber: any;
  insurancecompname: any;
  periodofinsurance: any;
  paymenttype: any;
  paymentdated: any;
  bankName: any;
  paymentamtinwords: any;
  lowlyingarea: any;
  areaprone: any;
  floddprone: any;
  coveragefortenant: any;
  lockkeyopt: any;
  coverageextinguish: any;
  terrorismopt: any;
  coverlossofdocs: any;
  coverexpensesforhousehold: any;
  independenthouse: any;
  apartment: any;
  flatsconnected: any;
  classofConst: any;
  fieldArray: any;
  customerreqdata: any;
  dispProspectsSignFile: any;
  dispAgentSignFile: any;
  userLifeInsuranceDetails: any;
  dispProposerSignFile: any;
  CertificateList: any;
  healthinsurancedetails: any;
  pCountry: any;
  rCountry: any;
  enablecertificates: boolean;
  ticketidfrommail: string;
  terminsurancedetails: any;
  fixedassetDetails: any;
  familyDetails: any;
  educationLoanDetails: any;
  accidentInsurancedata: any;
  currentinsurance: any;
  accidentinsurance: boolean = false;
  lifeinsurance: boolean = false;
  healthinsurance: boolean = false;
  homeinsurance: boolean = false;
  motorinsurance: boolean = false;
  termloaninsurance: boolean = false;
  familydetails: boolean = false;
  userdetailsfor: string;
  certificatesexist: boolean;
  certificates: any;
  CertificateDisplay: any = [];
  constructor(private businessService: BusinessLoanServiceService, private businessloanservice: BusinessLoanServiceService, private lifeinsService: LifeInsuranceService, private homeinsuranceservice: HomeInsuranceService, private spinner: NgxSpinnerService, private userservice: UserDetailsService, private router: Router,
    private mailservice: MailService, private motorinsuranceservice: MotorInsuranceService, private routing: ActivatedRoute, private workflowtrnsservice: WorkflowtransService, private httpservice: HttpClient) {
   
     localStorage.setItem("Loder", "0");
        console.log(localStorage.userId);
    this.routing.params.subscribe(params => {
      if (params["id"]) {
        this.currentinsurance = params["id"];

      }
    });
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.ticketidfrommail = localStorage.getItem("ticketidfrommail")
      this.uid = localStorage.getItem("userId");
      this.ticketid = localStorage.getItem("TicketId");
      if (this.ticketidfrommail == null || this.ticketidfrommail == "" || this.ticketidfrommail) {
        this.ticketidfrommail = localStorage.getItem("TicketId");
      }
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.detailss = localStorage.getItem("previewticketid");
      if (this.ticketid == null || this.customerid == null || this.customerid == undefined) {
        if (this.detailss != null || this.detailss != undefined) {
          var userdetails = this.detailss.split(',');
          this.customerid = userdetails[0];
          this.ticketid = userdetails[1];
        }
      }

    }
    if (this.uid.includes("USR")) {
      this.showapprove = true;
    }
    else {
      this.showapprove = false;
    }

  }

  ngOnInit() {
    this.backendServices();
    if (this.currentinsurance == "accident") {
      this.accidentinsurance = true;
      this.getaccidentdetails();

    }
    else if (this.currentinsurance == "life") {
      this.lifeinsurance = true;
      this.GetLifeInsuranceDetails();

    }
    else if (this.currentinsurance == "health") {
      this.healthinsurance = true;
      this.gethealthinsdetails();

    }
    else if (this.currentinsurance == "home") {
      this.homeinsurance = true;
      this.Gethomeinsurancedetails();

    }
    else if (this.currentinsurance == "motor") {
      this.motorinsurance = true;
      this.Getmotorinsurancedetails();
    }
    else if (this.currentinsurance == "termloan") {
      this.termloaninsurance = true;
      this.getterminsdetails();

    }
  }


  Getmotorinsurancedetails() {
    this.spinner.show()
    this.motorinsuranceservice.getmotorinsurancedetails(this.ticketid).subscribe((response: any) => {
      this.alldetails = response;
      this.spinner.hide()

      this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      this.userMotorInsuranceDetails = this.alldetails.userMotorInsuranceDetails;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
        this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
        if(this.alldetails.userBankandIdentityDetails.alldocuments != null){
          this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments;
        }
        if (this.bankdocs.length != 0) {
          this.bankdocsexist = true
        }
      }
      if (this.userBasicDetailsDetails != null || this.userBasicDetailsDetails != undefined) {
        this.fname = this.userBasicDetailsDetails.firstName;
        this.mname = this.userBasicDetailsDetails.middleName;
        this.lname = this.userBasicDetailsDetails.lastName;
        this.placebirth = this.userBasicDetailsDetails.placeOfBirth;
        this.gender = this.userBasicDetailsDetails.genderstring;
        this.marital = this.userBasicDetailsDetails.maritalstring;
        this.mobile = this.userBasicDetailsDetails.mobileNum;
        this.dob = this.userBasicDetailsDetails.dateOfBirth;
        this.religion = this.userBasicDetailsDetails.religionstring;
        this.caste = "",
          this.qualification = this.userBasicDetailsDetails.qualificationstring;
        this.occupation = this.userBasicDetailsDetails.occupationstring;
        this.email = this.userBasicDetailsDetails.email;
        this.designation = this.userBasicDetailsDetails.designationstring;
        //address

        this.rPostal = this.userBasicDetailsDetails.residentialPincode;
        this.rCountry = this.userBasicDetailsDetails.residentialCountry;
        this.rState = this.userBasicDetailsDetails.residentialState;
        this.rDistrict = this.userBasicDetailsDetails.residentialDistrict;
        this.rAddress1 = this.userBasicDetailsDetails.residentialLineOne;
        this.rAddress2 = this.userBasicDetailsDetails.residentialLineTwo;

        this.pPostal = this.userBasicDetailsDetails.permanentPincode;
        this.pCountry = this.userBasicDetailsDetails.permanentCountry;
        this.pState = this.userBasicDetailsDetails.permanentState;
        this.pDistrict = this.userBasicDetailsDetails.permanentDistrict;
        this.pAddress1 = this.userBasicDetailsDetails.permanentLineOne;
        this.pAddress2 = this.userBasicDetailsDetails.permanentLineTwo;

      }
      if (this.userMotorInsuranceDetails != null || this.userMotorInsuranceDetails != undefined) {
        this.chequeno = this.userMotorInsuranceDetails.chequeno;
        this.dateofinst = this.userMotorInsuranceDetails.dateofinst;
        this.bankname = this.userMotorInsuranceDetails.bankname;
        this.branchloc = this.userMotorInsuranceDetails.branchloc;
        this.paymentamount = this.userMotorInsuranceDetails.paymentamount;
        this.sourceoffund = this.userMotorInsuranceDetails.sourceoffund;
        this.vehiclemanufacturer = this.userMotorInsuranceDetails.vehiclemanufacturer;
        this.vehiclemodel = this.userMotorInsuranceDetails.vehiclemodel;
        this.registrationlocation = this.userMotorInsuranceDetails.registrationlocation;
        this.yearofmanufacture = this.userMotorInsuranceDetails.yearofmanufacture;
        this.engineno = this.userMotorInsuranceDetails.engineno;
        this.chassisno = this.userMotorInsuranceDetails.chassisno;
        this.colourofvehicle = this.userMotorInsuranceDetails.colourofvehicle;
        this.ageofinsured = this.userMotorInsuranceDetails.ageofinsured;
        this.insureddeclaredvalue = this.userMotorInsuranceDetails.insureddeclaredvalue;
        this.accessoriesfitted = this.userMotorInsuranceDetails.accessoriesfitted;
        this.valueofkit = this.userMotorInsuranceDetails.valueofkit;
        this.totalvalue = this.userMotorInsuranceDetails.totalvalue;
        this.packagepolicy = this.userMotorInsuranceDetails.packagepolicy;
        this.puc = this.userMotorInsuranceDetails.puc;
        this.registrationno = this.userMotorInsuranceDetails.registrationno;
        this.dateofregistration = this.userMotorInsuranceDetails.dateofregistration;
        this.previousinsurer = this.userMotorInsuranceDetails.previousinsurer;
        this.previouspolicynumber = this.userMotorInsuranceDetails.previouspolicynumber;
        this.previousperiodfrom = this.userMotorInsuranceDetails.previousperiodfrom;
        this.previousperiodto = this.userMotorInsuranceDetails.previousperiodto;
        this.currentperiodfrom = this.userMotorInsuranceDetails.currentperiodfrom;
        this.currentperiodto = this.userMotorInsuranceDetails.currentperiodto;
        this.claimslodged = this.userMotorInsuranceDetails.claimslodged;
        this.claimslodgedamount = this.userMotorInsuranceDetails.claimslodgedamount;
        this.entitledtoncb = this.userMotorInsuranceDetails.entitledtoncb;
        this.limitedtoownpermises = this.userMotorInsuranceDetails.limitedtoownpermises;
        this.vehicledesignedhandicapped = this.userMotorInsuranceDetails.vehicledesignedhandicapped;
        this.vehicleproposedfor = this.userMotorInsuranceDetails.vehicleproposedfor;
        this.pillionpassengers = this.userMotorInsuranceDetails.pillionpassengers;
        this.nofpersons = this.userMotorInsuranceDetails.nofpersons;
        this.csiopted = this.userMotorInsuranceDetails.csiopted;
        this.optforstatutory = this.userMotorInsuranceDetails.optforstatutory;
        this.legalliability = this.userMotorInsuranceDetails.legalliability;
        this.legalliabilitypersons = this.userMotorInsuranceDetails.legalliabilitypersons;
        this.driver = this.userMotorInsuranceDetails.driver;
        this.otheremployee = this.userMotorInsuranceDetails.otheremployee;
        this.fullnameofconcerned = this.userMotorInsuranceDetails.fullnameofconcerned;
        this.motonaddon = this.userMotorInsuranceDetails.motonaddon;
        this.fueltype = this.userMotorInsuranceDetails.fueltypename;
        this.entitledtoncbyespercent = this.userMotorInsuranceDetails.entitledtoncbyespercent;
        this.nameofconcerned = this.userMotorInsuranceDetails.nameofconcerned;
        if (this.nameofconcerned == null || this.nameofconcerned == "" || this.nameofconcerned == " " || this.nameofconcerned == undefined) {
          this.nameofconcernedenable = false
        }
        else {
          this.nameofconcernedenable = true

        }
      }

    })
  }
  gethealthinsdetails() {
    this.spinner.show();
    this.businessService.gethealthinsurancedetails(this.ticketid).subscribe((respose: any) => {
      this.healthinsurancedetails = respose.healthInsuranceDetails;
      this.spinner.hide();

    });
  }
  getterminsdetails() {
    var aaa = this.customerid + "," + this.mailticketid;
    this.spinner.show();

    this.businessService.getterminsdetails(this.ticketid).subscribe((respose: any) => {
      this.terminsurancedetails = respose;
      this.spinner.hide();

      console.log(this.terminsurancedetails);
    });
  }
  GetLifeInsuranceDetails() {

    this.spinner.show()
    this.lifeinsService.getlifeInsuranceData(this.ticketid).subscribe((respose: any) => {
      this.data = respose;
      this.spinner.hide();

      if (this.data.userBasicDetailsDetails != null) {
        this.userBasicDetailsDetails = this.data.userBasicDetailsDetails;
        this.applieduserid = this.userBasicDetailsDetails.customerId
      }
      if (this.data.userBankandIdentityDetails != null) {
        this.userBankDetails = this.data.userBankandIdentityDetails;
        // if (this.userBankDetails.bankdetails.length != 0) {
        //   for (let index = 0; index < this.userBankDetails.bankdetails.length; index++) {
        //     this.fieldArray.push(this.userBankDetails.bankdetails[index])
        //   }
        // }
        if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
          this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
         
        }
      }
      if (this.data.customerRequestdata != null || this.data.customerRequestdata != undefined) {
        this.customerreqdata = this.data.customerRequestdata;
      }
      if (this.data.userLifeInsuranceDetails != null) {
        this.userLifeInsuranceDetails = this.data.userLifeInsuranceDetails;
        if (this.userLifeInsuranceDetails.alldocuments != null) {
          for (let index = 0; index < this.userLifeInsuranceDetails.alldocuments.length; index++) {
            if (this.userLifeInsuranceDetails.alldocuments[index].documentName == "ProposersSign") {
              this.dispProposerSignFile = this.userLifeInsuranceDetails.alldocuments[index].file;
            }
            else if (this.userLifeInsuranceDetails.alldocuments[index].documentName == "AgentsSign") {
              this.dispAgentSignFile = this.userLifeInsuranceDetails.alldocuments[index].file;
            }
            else if (this.userLifeInsuranceDetails.alldocuments[index].documentName == "ProspectsSign") {
              this.dispProspectsSignFile = this.userLifeInsuranceDetails.alldocuments[index].file;
            }
          }
        }
      }
      this.spinner.hide();
    });
  }

  getaccidentdetails() {
    this.spinner.show();
    this.businessService.getAccidentInsurancedetails(this.ticketid).subscribe((respose: any) => {
      this.accidentInsurancedata = respose;
      this.spinner.hide();

      console.log(this.terminsurancedetails);
    });
  }
  Gethomeinsurancedetails() {
    this.spinner.show()
    this.homeinsuranceservice.gethomeinsurancedetails(this.ticketid).subscribe((response: any) => {
      this.alldetails = response;
      this.spinner.hide()

      // this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      // if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
      //   this.userBankDetails = this.alldetails.userBankandIdentityDetails;
      // }
      // if (this.userBasicDetailsDetails != null || this.userBasicDetailsDetails != undefined) {
      //   this.fname = this.userBasicDetailsDetails.firstName;
      //   this.mname = this.userBasicDetailsDetails.middleName;
      //   this.lname = this.userBasicDetailsDetails.lastName;
      //   this.placebirth = this.userBasicDetailsDetails.placeOfBirth;
      //   this.gender = this.userBasicDetailsDetails.genderstring;
      //   this.marital = this.userBasicDetailsDetails.maritalstring;
      //   this.mobile = this.userBasicDetailsDetails.mobileNum;
      //   this.dob = this.userBasicDetailsDetails.dateOfBirth;
      //   this.religion = this.userBasicDetailsDetails.religionstring;
      //   this.caste = "",
      //     this.qualification = this.userBasicDetailsDetails.qualificationstring;
      //   this.occupation = this.userBasicDetailsDetails.occupationstring;
      //   this.email = this.userBasicDetailsDetails.email;
      //   this.designation = this.userBasicDetailsDetails.designationstring;
      //   //address

      //   this.rPostal = this.userBasicDetailsDetails.residentialPincode;
      //   this.rCountry = this.userBasicDetailsDetails.residentialCountry;
      //   this.rState = this.userBasicDetailsDetails.residentialState;
      //   this.rDistrict = this.userBasicDetailsDetails.residentialDistrict;
      //   this.rAddress1 = this.userBasicDetailsDetails.residentialLineOne;
      //   this.rAddress2 = this.userBasicDetailsDetails.residentialLineTwo;

      //   this.pPostal = this.userBasicDetailsDetails.permanentPincode;
      //   this.pCountry = this.userBasicDetailsDetails.permanentCountry;
      //   this.pState = this.userBasicDetailsDetails.permanentState;
      //   this.pDistrict = this.userBasicDetailsDetails.permanentDistrict;
      //   this.pAddress1 = this.userBasicDetailsDetails.permanentLineOne;
      //   this.pAddress2 = this.userBasicDetailsDetails.permanentLineTwo;

      // }
      if (this.alldetails.userHomeInsuranceDetails != null || this.alldetails.userHomeInsuranceDetails != undefined) {
        this.propaddress = this.alldetails.userHomeInsuranceDetails.propaddress
        this.yearofconstr = this.alldetails.userHomeInsuranceDetails.yearofconstr
        this.builtuparea = this.alldetails.userHomeInsuranceDetails.builtuparea
        this.suminsuredbuildingval = this.alldetails.userHomeInsuranceDetails.suminsuredbuildingval
        this.nameoffinancier = this.alldetails.userHomeInsuranceDetails.nameoffinancier
        this.sumcontentinsured = this.alldetails.userHomeInsuranceDetails.sumcontentinsured
        this.distfromwater = this.alldetails.userHomeInsuranceDetails.distfromwater
        this.locationofprop = this.alldetails.userHomeInsuranceDetails.locationofprop
        this.buildingstructure = this.alldetails.userHomeInsuranceDetails.buildingstructure
        this.undergroundservices = this.alldetails.userHomeInsuranceDetails.undergroundservices
        this.buildingtotal = this.alldetails.userHomeInsuranceDetails.buildingtotal
        this.valueablesdesc = this.alldetails.userHomeInsuranceDetails.valueablesdesc
        this.valueablesquantity = this.alldetails.userHomeInsuranceDetails.valueablesquantity
        this.valueablessuminsured = this.alldetails.userHomeInsuranceDetails.valueablessuminsured
        this.valueablesweight = this.alldetails.userHomeInsuranceDetails.valueablesweight
        this.appliancesdesc = this.alldetails.userHomeInsuranceDetails.appliancesdesc
        this.appliancesmodel = this.alldetails.userHomeInsuranceDetails.appliancesmodel
        this.appliancesyear = this.alldetails.userHomeInsuranceDetails.appliancesyear
        this.appliancesIDNo = this.alldetails.userHomeInsuranceDetails.appliancesIDNo
        this.appliancesSumInsured = this.alldetails.userHomeInsuranceDetails.appliancesSumInsured
        this.locationwithinpremises = this.alldetails.userHomeInsuranceDetails.locationwithinpremises
        this.dimensions = this.alldetails.userHomeInsuranceDetails.dimensions
        this.fixedplatessum = this.alldetails.userHomeInsuranceDetails.fixedplatessum
        this.lossofrent = this.alldetails.userHomeInsuranceDetails.lossofrent
        this.additionalrent = this.alldetails.userHomeInsuranceDetails.additionalrent
        this.pedigreeinsu = this.alldetails.userHomeInsuranceDetails.pedigreeinsu
        this.baggageinsu = this.alldetails.userHomeInsuranceDetails.baggageinsu
        this.noofservents = this.alldetails.userHomeInsuranceDetails.noofservents
        this.natureofwork = this.alldetails.userHomeInsuranceDetails.natureofwork
        this.estimatedwages = this.alldetails.userHomeInsuranceDetails.estimatedwages
        this.addressofinsurancecom = this.alldetails.userHomeInsuranceDetails.addressofinsurancecom
        this.itemalreadyinsured = this.alldetails.userHomeInsuranceDetails.itemalreadyinsured
        this.policynumber = this.alldetails.userHomeInsuranceDetails.policynumber
        this.insurancecompname = this.alldetails.userHomeInsuranceDetails.insurancecompname
        this.periodofinsurance = this.alldetails.userHomeInsuranceDetails.periodofinsurance
        this.sourceoffund = this.alldetails.userHomeInsuranceDetails.sourceoffund
        this.paymenttype = this.alldetails.userHomeInsuranceDetails.paymenttype
        this.chequeno = this.alldetails.userHomeInsuranceDetails.chequeno
        this.paymentdated = this.alldetails.userHomeInsuranceDetails.paymentdated
        this.bankName = this.alldetails.userHomeInsuranceDetails.bankName
        this.paymentamount = this.alldetails.userHomeInsuranceDetails.paymentamount
        this.paymentamtinwords = this.alldetails.userHomeInsuranceDetails.paymentamtinwords
        this.lowlyingarea = this.alldetails.userHomeInsuranceDetails.lowlyingarea
        this.areaprone = this.alldetails.userHomeInsuranceDetails.areaprone
        this.floddprone = this.alldetails.userHomeInsuranceDetails.floddprone
        this.coveragefortenant = this.alldetails.userHomeInsuranceDetails.coveragefortenant
        this.lockkeyopt = this.alldetails.userHomeInsuranceDetails.lockkeyopt
        this.coverageextinguish = this.alldetails.userHomeInsuranceDetails.coverageextinguish
        this.terrorismopt = this.alldetails.userHomeInsuranceDetails.terrorismopt
        this.coverlossofdocs = this.alldetails.userHomeInsuranceDetails.coverlossofdocs
        this.coverexpensesforhousehold = this.alldetails.userHomeInsuranceDetails.coverexpensesforhousehold
        this.independenthouse = this.alldetails.userHomeInsuranceDetails.independenthouse
        this.apartment = this.alldetails.userHomeInsuranceDetails.apartment
        this.flatsconnected = this.alldetails.userHomeInsuranceDetails.flatsconnected
        this.classofConst = this.alldetails.userHomeInsuranceDetails.classofConst
      }

      console.log(response);
    })
  }
  backendServices() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.spinner.show();
    this.businessService.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
      this.alldetails = response;
      this.spinner.hide();

      this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      this.userBankDetails = this.alldetails.userBankandIdentityDetails;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
        this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
        // this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments
        // if (this.bankdocs.length != 0) {
        //   this.bankdocsexist = true
        // }
      }
      else if (this.alldetails.count != null || this.alldetails.certificateDetails != undefined) {
        this.certificates = this.alldetails.certificateDetails
        if (this.certificates.length != 0) {
          this.certificatesexist = true

        }
      }
      if (this.userBasicDetailsDetails != null || this.userBasicDetailsDetails != undefined) {
        this.fname = this.userBasicDetailsDetails.firstName;
        this.mname = this.userBasicDetailsDetails.middleName;
        this.lname = this.userBasicDetailsDetails.lastName;
        this.placebirth = this.userBasicDetailsDetails.placeOfBirth;
        this.gender = this.userBasicDetailsDetails.genderstring;
        this.marital = this.userBasicDetailsDetails.maritalstring;
        this.mobile = this.userBasicDetailsDetails.mobileNum;
        this.dob = this.userBasicDetailsDetails.dateOfBirth;
        this.religion = this.userBasicDetailsDetails.religionstring;
        this.caste = "",
          this.qualification = this.userBasicDetailsDetails.qualificationstring;
        this.occupation = this.userBasicDetailsDetails.occupationstring;
        this.email = this.userBasicDetailsDetails.email;
        this.designation = this.userBasicDetailsDetails.designationstring;
        //address

        this.rPostal = this.userBasicDetailsDetails.residentialPincode;
        // this.rCountry=this.userBasicDetailsDetails.occupationstring;
        this.rState = this.userBasicDetailsDetails.residentialState;
        this.rDistrict = this.userBasicDetailsDetails.residentialDistrict;
        this.rAddress1 = this.userBasicDetailsDetails.residentialLineOne;
        this.rAddress2 = this.userBasicDetailsDetails.residentialLineTwo;

        this.pPostal = this.userBasicDetailsDetails.permanentPincode;
        // this.pCountry=this.userBasicDetailsDetails.designationstring;
        this.pState = this.userBasicDetailsDetails.permanentState;
        this.pDistrict = this.userBasicDetailsDetails.permanentDistrict;
        this.pAddress1 = this.userBasicDetailsDetails.permanentLineOne;
        this.pAddress2 = this.userBasicDetailsDetails.permanentLineTwo;

      }
      if (this.alldetails.homeInsuranceDetails != null || this.alldetails.homeInsuranceDetails != undefined) {
        this.customerreqdata = this.alldetails.homeInsuranceDetails;
      }
      //familydetails, fixedassetdetails, vehicle loan  - rajeshwari
      if (this.alldetails.userFamilyDetails != null || this.alldetails.userFamilyDetails != undefined) {
        this.familyDetails = this.alldetails.userFamilyDetails;
        this.familydocs = this.alldetails.userFamilyDetails.familyCertList
        if (this.familydocs.length != 0) {
          this.familydocsexist = true
        }
      }
      if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
        this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
      }
      if (this.alldetails.allCertificateDetails != null || this.alldetails.allCertificateDetails != undefined) {
        this.certificates = this.alldetails.allCertificateDetails
        if (this.certificates.length != 0) {
          this.certificatesexist = true
          for (let index = 0; index < this.certificates.length; index++) {
            if (this.certificates[index].actualCertificateName == null) {
              this.CertificateDisplay.push(this.certificates[index]);
            }
          }
        }
      }
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
      }

      console.log(response);
    })
  }
  personaldetailsclick() {
    if (this.currentinsurance == "accident") {
      this.router.navigate(['AccidentInsurance/'])
      localStorage.setItem("editinsuranceform", "personal")
    }
    else if (this.currentinsurance == "life") {
      this.router.navigate(['lifeInsurance/'])
      localStorage.setItem("editinsuranceform", "personal")
    }
    else if (this.currentinsurance == "health") {
      this.router.navigate(['HealthInsurance/'])
      localStorage.setItem("editinsuranceform", "personal")
    }
    else if (this.currentinsurance == "home") {
      this.router.navigate(['HomeInsurance/'])
      localStorage.setItem("editinsuranceform", "personal")
    }
    else if (this.currentinsurance == "motor") {
      this.router.navigate(['MotorInsurance/'])
      localStorage.setItem("editinsuranceform", "personal")
    }
    else if (this.currentinsurance == "termloan") {
      this.router.navigate(['termlifeinsurance/'])
      localStorage.setItem("editinsuranceform", "personal")
    }

  }
  familydetailsclick() {
    if (this.currentinsurance == "accident") {
      this.router.navigate(['AccidentInsurance/'])
      localStorage.setItem("editinsuranceform", "family")
    }
    else if (this.currentinsurance == "life") {
      this.router.navigate(['lifeInsurance/'])
      localStorage.setItem("editinsuranceform", "family")
    }
    else if (this.currentinsurance == "health") {
      this.router.navigate(['HealthInsurance/'])
      localStorage.setItem("editinsuranceform", "family")
    }
    else if (this.currentinsurance == "home") {
      this.router.navigate(['HomeInsurance/'])
      localStorage.setItem("editinsuranceform", "family")
    }
    else if (this.currentinsurance == "motor") {
      this.router.navigate(['MotorInsurance/'])
      localStorage.setItem("editinsuranceform", "family")
    }
    else if (this.currentinsurance == "termloan") {
      this.router.navigate(['termlifeinsurance/'])
      localStorage.setItem("editinsuranceform", "family")
    }

  }
  bankdetailsclick() {
    if (this.currentinsurance == "accident") {
      this.router.navigate(['AccidentInsurance/'])
      localStorage.setItem("editinsuranceform", "bank")
    }
    else if (this.currentinsurance == "life") {
      this.router.navigate(['lifeInsurance/'])
      localStorage.setItem("editinsuranceform", "bank")
    }
    else if (this.currentinsurance == "health") {
      this.router.navigate(['HealthInsurance/'])
      localStorage.setItem("editinsuranceform", "bank")
    }
    else if (this.currentinsurance == "home") {
      this.router.navigate(['HomeInsurance/'])
      localStorage.setItem("editinsuranceform", "bank")
    }
    else if (this.currentinsurance == "motor") {
      this.router.navigate(['MotorInsurance/'])
      localStorage.setItem("editinsuranceform", "bank")
    }
    else if (this.currentinsurance == "termloan") {
      this.router.navigate(['termlifeinsurance/'])
      localStorage.setItem("editinsuranceform", "bank")
    }

  }
  healthinsuranceclick() {
    this.router.navigate(['HealthInsurance/'])
    localStorage.setItem("editinsuranceform", "health")
  }
  homeinsuranceclick() {
    this.router.navigate(['HomeInsurance/'])
    localStorage.setItem("editinsuranceform", "home")
  }
  motorinsuranceclick() {
    this.router.navigate(['MotorInsurance/'])
    localStorage.setItem("editinsuranceform", "motor")
  }
  terminsuranceclick() {
    this.router.navigate(['termlifeinsurance/'])
    localStorage.setItem("editinsuranceform", "termloan")
  }
 lifeinsuranceclick() {
    this.router.navigate(['lifeInsurance/'])
    localStorage.setItem("editinsuranceform", "life")
  }
  accidentinsuranceclick() {
    this.router.navigate(['AccidentInsurance/'])
    localStorage.setItem("editinsuranceform", "accident")
  }
  certificatesclick() {
    if (this.currentinsurance == "accident") {
      this.router.navigate(['AccidentInsurance/'])
      localStorage.setItem("editinsuranceform", "certificates")
    }
    else if (this.currentinsurance == "life") {
      this.router.navigate(['lifeInsurance/'])
      localStorage.setItem("editinsuranceform", "certificates")
    }
    else if (this.currentinsurance == "health") {
      this.router.navigate(['HealthInsurance/'])
      localStorage.setItem("editinsuranceform", "certificates")
    }
    else if (this.currentinsurance == "home") {
      this.router.navigate(['HomeInsurance/'])
      localStorage.setItem("editinsuranceform", "certificates")
    }
    else if (this.currentinsurance == "motor") {
      this.router.navigate(['MotorInsurance/'])
      localStorage.setItem("editinsuranceform", "certificates")
    }
    else if (this.currentinsurance == "termloan") {
      this.router.navigate(['termlifeinsurance/'])
      localStorage.setItem("editinsuranceform", "certificates")
    }

  }

  DownloadForm() {
    // make edit button and uploaded docs to display none
    document.getElementById('downloadid').style.display = 'none';
    if (this.familyDetails) {
      document.getElementById('familydocsid').style.display = 'none';

    }
    document.getElementById('bankdocsid').style.display = 'none';

    // var particularclass = document.querySelectorAll('.btn.btn-primary');

    // for (var i = 0; i < particularclass.length; i++) {
    //   (<HTMLButtonElement>particularclass[i]).style.display = "none";
    // }
    var data = document.getElementById('print-section');
    html2canvas(data).then(canvas => {
      var imgWidth = 100;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/jpg')
      var data45 = {
        htmlString: contentDataURL,
        TicketId: this.ticketid
      }
      this.spinner.show();
      this.userservice.SavePdf(data45).subscribe((data1: any) => {
        var aa = data1

        // make edit button and uploaded docs to display 

        document.getElementById('downloadid').style.display = 'block';
        if (this.familyDetails) {
          document.getElementById('familydocsid').style.display = 'block';
        }
        document.getElementById('bankdocsid').style.display = 'inherit';
        window.open(data1);

        // var particularclass = document.querySelectorAll('.btn.btn-primary');

        // for (var i = 0; i < particularclass.length; i++) {
        //   (<HTMLButtonElement>particularclass[i]).style.display = "block";
        // }
        this.spinner.hide();

      })
    });
  }
}







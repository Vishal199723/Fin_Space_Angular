import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { MessageService } from '../MessageService/meaagse.service';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-previewloandetails',
  templateUrl: './previewloandetails.component.html',
  styleUrls: ['./previewloandetails.component.css']
})
export class PreviewloandetailsComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  submitted: boolean;
  alldetails: any;
  userBasicDetailsDetails: any;
  userBankDetails: any;
  //personal details
  fname; mname; lname; placebirth;
  gender; marital; mobile; dob;
  religion; caste; qualification;
  occupation; email; designation;
  //Residential Address
  rPostal; rCountry; rState; rDistrict; rAddress1; rAddress2;
  //permanent Address
  pPostal; pCountry; pState; pDistrict;
  pAddress1; pAddress2; familyDetails: any;
  fixedassetDetails: any; vehicleLoanDetails: any;
  userBusinessDetails: any;
  //business
  businessaddtel; GSTNo;
  scst; Factoryaddress; partnername;
  agepartner; experiencepast; resiaddr;
  partnershare; techqualified; loaandyearofest;
  loanamt; TermLoanpurpose; WorkingcapitalPurpose;
  TermLoanAmount; WorkingcapitalAmount;
  TermLoanRepaymentprogramme;
  businessPremisesOwn;
  routerThroughBank;
  booksmaintained;
  workingrepaymentprogramme;
  nameandAddressofAssociateConcerns;
  difficulties;
  commoditiesTraded;
  majorSuppliers; numberOfFirms;
  competationSuccessfull;
  year1; year2; sales1; sales2;
  netProfit1; netProfit2; remarks1; remarks2;
  anticipatedYear;
  anticipatedSales;
  anticipatedProfit;
  anticipatedRemarks;
  feasibleYear;
  feasibleSales;
  feasibleNetProfit;
  feasibleRemarks;
  itAssessmentYear;
  itAmounPaid;
  stAssessmentYear;
  stAmountPaid;
  avgLvlValue;
  avgLvlMargin;
  avgLvlPermissibleLimit;
  avgLvlRemarks;
  outSatndingValue;
  outSatndingMargin;
  outStandingPermissibleLimit;
  outStandingRemarks;
  creditAvailableSuppliers;
  repaymentProgramme;
  item1;
  item2;
  item3;
  supplier1;
  suppier2;
  supplier3;
  cost;
  cost1;
  cost2;
  lessapplicantscontribution;
  loanEquipmentRupees;
  reapymentProgamme;
  security;
  timeToErect;
  startUpPeriod;
  detailsofImmovableProperty;
  workingCapitalRequired;
  firmName;
  guarantorValue;
  guarantor;
  desc1;
  desc1Rs;
  desc2;
  desc2Rs;
  desc3;
  desc3Rs;
  detailsone: string;
  result: any;
  customerId: string;
  mailId: number;
  fromUser: string;
  transId: number;
  WFStatusList: any;
  operation: any;
  selectedstatusid: any;
  comments: string;
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  groupId: string;
  workflwid: string;
  customerreqdata: any;
  detailss: string;
  showapprove: boolean;
  customerid: string;
  transid: string;
  mailid: string;
  baid: any;
  mailticketid: string;
  CertificateList: any;
  bankdetails: any;
  userdetailsfor: string;
  userdetailsforcer: string;
  enablecertificates: boolean = false;
  files: any;
  ApproveFiles: string;
  educationLoanDetails: any;
  goldLoanDetails: any;
  fixedAssetLoanDetails: any;
  homeLoanDetails: any;
  projectLoanDetails: any;
  SmallScaleDetails: any;
  suretyLoanDetails: any;
  vehicletype: string;
  currentloan: any;
  businessloan: boolean = false;
  ticketid: string;
  educationloan: boolean = false;
  goldloan: boolean = false;
  fixedassetloan: boolean = false;
  homeloan: boolean = false;
  projectloan: boolean = false;
  smallscaleloan: boolean = false;
  suretyloan: boolean = false;
  vehicleloan: boolean = false;
  fixeddepositloan: boolean = false;
  bankdocs: any;
  bankdocsexist: boolean;
  familydocs: any = [];
  familydocsexist: boolean = false;
  fixedassetexist: boolean = false; moveableexist: boolean;
  CertificateDisplay: any = [];
  certificates: any;
  documentArray: any;
  certificatesexist: boolean;
  goldType: any;
  fixedDeposit: any;
  businessAddTelNo: any;
  AnticipatedMargin: any;
  AnticipatedPermissibleLimit: any;
  AntiRemarks: any;
  AnticipatedValue: any;
  downloadablefile: any;
  ;
  constructor(private _location: Location, private messageService: MessageService, private businessService: BusinessLoanServiceService, private spinner: NgxSpinnerService, private userservice: UserDetailsService, private router: Router,
    private mailservice: MailService, private routing: ActivatedRoute, private workflowtrnsservice: WorkflowtransService, private httpservice: HttpClient) {
    console.log(localStorage.userId);
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.routing.params.subscribe(params => {
      if (params["id"]) {
        this.currentloan = params["id"];
        if (this.currentloan == "business") {
          this.businessloan = true;
        }
        else if (this.currentloan == "education") {
          this.educationloan = true;
        }
        else if (this.currentloan == "gold") {
          this.goldloan = true;
        }
        else if (this.currentloan == "fixedasset") {
          this.fixedassetloan = true;
        }
        else if (this.currentloan == "home") {
          this.homeloan = true;
        }
        else if (this.currentloan == "project") {
          this.projectloan = true;
        }
        else if (this.currentloan == "smallscale") {
          this.smallscaleloan = true;
        }
        else if (this.currentloan == "surety") {
          this.suretyloan = true;
        }
        else if (this.currentloan == "vehicle") {
          this.vehicleloan = true;
        }
        else if (this.currentloan == "fixeddeposit") {
          this.fixeddepositloan = true;
        }
      }
    });
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.detailss = localStorage.getItem("previewticketid");
      if (this.detailss != null || this.detailss != undefined) {
        var userdetails = this.detailss.split(',');
        this.customerid = userdetails[0];
        this.ticketid = userdetails[1];
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
    this.GetBasicDetails();
    this.getbankdetails();
    this.getallCertificateDetails();
    this.getfamilydetails();
    this.gethomevehicledetails();
  }

  GetBasicDetails() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.businessService.getbasicdetails(this.userdetailsfor).subscribe((response: any) => {
      this.userBasicDetailsDetails = response;
      this.fname = this.userBasicDetailsDetails.firstName;
      this.mname = this.userBasicDetailsDetails.middleName;
      this.lname = this.userBasicDetailsDetails.lastName;
      this.placebirth = this.userBasicDetailsDetails.placeOfBirth;
      this.gender = this.userBasicDetailsDetails.genderstring;
      this.marital = this.userBasicDetailsDetails.maritalstring;
      this.mobile = this.userBasicDetailsDetails.mobileNum;
      this.dob = this.userBasicDetailsDetails.dateOfBirth;
      this.religion = this.userBasicDetailsDetails.religionstring;
      this.caste =this.userBasicDetailsDetails.castestring,
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
      console.log(response);
    })
  
  }

  getbankdetails() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.businessService.getbankdetails(this.userdetailsfor).subscribe((response: any) => {
      this.userBankDetails=response;
      this.bankdetails = this.userBankDetails.bankdetails;
        this.bankdocs = this.userBankDetails.alldocuments
        if (this.bankdocs.length != 0) {
          this.bankdocsexist = true
        }
    })
  }

  getfamilydetails() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.businessService.getfamilydata(this.userdetailsfor).subscribe((response: any) => {
      this.familyDetails = response;
      this.familydocs = this.familyDetails.familyCertList
      if (this.familydocs.length != 0) {
        this.familydocsexist = true
      }
    })
  }

  gethomevehicledetails() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.businessService.gethomevehicledata(this.userdetailsfor).subscribe((response: any) => {
      this.fixedassetDetails = response;
      this.moveableexist = true;
    })
  }

  getallCertificateDetails() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.businessService.getallcertificatedetails(this.userdetailsfor).subscribe((response: any) => {
      this.certificates = response;
        if (this.certificates.length != 0) {
          this.certificatesexist = true
          for (let index = 0; index < this.certificates.length; index++) {
            if (this.certificates[index].actualCertificateName == null) {
              this.CertificateDisplay.push(this.certificates[index]);
            }
          }
        }
    })
  }

  backendServices() {
    this.userdetailsfor = this.customerid + ',' + this.ticketid;
    this.businessService.getparticularLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
      this.alldetails = response;
      //this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      this.userBusinessDetails = this.alldetails.businessLoanDetailsVM;
      // this.userBankDetails = this.alldetails.userBankandIdentityDetails;
      // if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
      //   this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
      //   this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments
      //   if (this.bankdocs.length != 0) {
      //     this.bankdocsexist = true
      //   }
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
      //   // this.rCountry=this.userBasicDetailsDetails.occupationstring;
      //   this.rState = this.userBasicDetailsDetails.residentialState;
      //   this.rDistrict = this.userBasicDetailsDetails.residentialDistrict;
      //   this.rAddress1 = this.userBasicDetailsDetails.residentialLineOne;
      //   this.rAddress2 = this.userBasicDetailsDetails.residentialLineTwo;

      //   this.pPostal = this.userBasicDetailsDetails.permanentPincode;
      //   // this.pCountry=this.userBasicDetailsDetails.designationstring;
      //   this.pState = this.userBasicDetailsDetails.permanentState;
      //   this.pDistrict = this.userBasicDetailsDetails.permanentDistrict;
      //   this.pAddress1 = this.userBasicDetailsDetails.permanentLineOne;
      //   this.pAddress2 = this.userBasicDetailsDetails.permanentLineTwo;

      // }
      if (this.userBusinessDetails != null || this.userBusinessDetails != undefined) {
        //business
        this.GSTNo = this.userBusinessDetails.membershipNo;
        this.businessAddTelNo = this.userBusinessDetails.businessAddTelNo;
        this.scst = this.userBusinessDetails.category;
        this.Factoryaddress = this.userBusinessDetails.factoryAddTelNo;
        this.partnername = this.userBusinessDetails.nameofPartner;
        this.agepartner = this.userBusinessDetails.ageofPartner;
        this.experiencepast = this.userBusinessDetails.pastExperience;
        this.resiaddr = this.userBusinessDetails.residetialAddressofPartner;
        this.partnershare = this.userBusinessDetails.partnerShareAmount;
        this.techqualified = this.userBusinessDetails.technicalQualification;
        this.loaandyearofest = this.userBusinessDetails.yearofEshtablishment;
        this.loanamt = this.userBusinessDetails.requiredLoanAmount;
        this.TermLoanpurpose = this.userBusinessDetails.termLoanPurpose;
        this.WorkingcapitalPurpose = this.userBusinessDetails.workingCapitalPurpose;
        this.TermLoanAmount = this.userBusinessDetails.termLoanAmount;
        this.WorkingcapitalAmount = this.userBusinessDetails.wrokingCapitalAmount;
        this.TermLoanRepaymentprogramme = this.userBusinessDetails.termLoanRepayment;
        this.businessPremisesOwn = this.userBusinessDetails.businessPremisesOwn;
        this.routerThroughBank = this.userBusinessDetails.ableToRouteYes;
        this.booksmaintained = this.userBusinessDetails.booksaremaintainedYes;
        this.workingrepaymentprogramme = this.userBusinessDetails.workingCapitalRepaymentProgramme;
        this.nameandAddressofAssociateConcerns = this.userBusinessDetails.nameandAddressofAssociateConcerns;
        this.difficulties = this.userBusinessDetails.difficulties;
        this.commoditiesTraded = this.userBusinessDetails.commoditiesTraded;
        this.majorSuppliers = this.userBusinessDetails.majorSuppliers;
        this.numberOfFirms = this.userBusinessDetails.numberOfFirms;
        this.competationSuccessfull = this.userBusinessDetails.competationSuccessfull;
        this.year1 = this.userBusinessDetails.year1;
        this.year2 = this.userBusinessDetails.year2;
        this.sales1 = this.userBusinessDetails.sales1;
        this.sales2 = this.userBusinessDetails.sales2;
        this.netProfit1 = this.userBusinessDetails.netProfit1;
        this.netProfit2 = this.userBusinessDetails.netProfit2;
        this.remarks1 = this.userBusinessDetails.remarks1;
        this.remarks2 = this.userBusinessDetails.remarks2;
        this.anticipatedYear = this.userBusinessDetails.anticipatedYear;
        this.anticipatedSales = this.userBusinessDetails.anticipatedSales;
        this.anticipatedProfit = this.userBusinessDetails.anticipatedProfit;
        this.anticipatedRemarks = this.userBusinessDetails.anticipatedRemarks;
        this.feasibleYear = this.userBusinessDetails.feasibleYear;
        this.feasibleSales = this.userBusinessDetails.feasibleSales;
        this.feasibleNetProfit = this.userBusinessDetails.feasibleNetProfit;
        this.feasibleRemarks = this.userBusinessDetails.feasibleRemarks;
        this.itAssessmentYear = this.userBusinessDetails.itAssessmentYear;
        this.itAmounPaid = this.userBusinessDetails.itAmounPaid;
        this.stAssessmentYear = this.userBusinessDetails.stAssessmentYear;
        this.stAmountPaid = this.userBusinessDetails.stAmountPaid;
        this.avgLvlValue = this.userBusinessDetails.avgLvlValue;
        this.avgLvlMargin = this.userBusinessDetails.avgLvlMargin;
        this.avgLvlPermissibleLimit = this.userBusinessDetails.avgLvlPermissibleLimit;
        this.avgLvlRemarks = this.userBusinessDetails.avgLvlRemarks;

        this.outSatndingValue = this.userBusinessDetails.outSatndingValue;
        this.outSatndingMargin = this.userBusinessDetails.outSatndingMargin;
        this.outStandingPermissibleLimit = this.userBusinessDetails.outStandingPermissibleLimit;
        this.outStandingRemarks = this.userBusinessDetails.outStandingRemarks;
        this.creditAvailableSuppliers = this.userBusinessDetails.creditAvailableSuppliers;
        this.repaymentProgramme = this.userBusinessDetails.repaymentProgramme;
        this.item1 = this.userBusinessDetails.item1;
        this.item2 = this.userBusinessDetails.item2;
        this.item3 = this.userBusinessDetails.item3;
        this.supplier1 = this.userBusinessDetails.supplier1;
        this.suppier2 = this.userBusinessDetails.suppier2;
        this.supplier3 = this.userBusinessDetails.supplier3;
        this.cost = this.userBusinessDetails.cost;
        this.cost1 = this.userBusinessDetails.cost1;
        this.cost2 = this.userBusinessDetails.cost2;
        this.lessapplicantscontribution = this.userBusinessDetails.lessapplicantscontribution;
        this.loanEquipmentRupees = this.userBusinessDetails.loanEquipmentRupees;
        this.reapymentProgamme = this.userBusinessDetails.reapymentProgamme;
        this.security = this.userBusinessDetails.security;
        this.timeToErect = this.userBusinessDetails.timeToErect;
        this.startUpPeriod = this.userBusinessDetails.startUpPeriod;
        this.detailsofImmovableProperty = this.userBusinessDetails.avgLvlRemarks;
        this.firmName = this.userBusinessDetails.firmName;
        this.workingCapitalRequired = this.userBusinessDetails.workingCapitalRequired;
        this.guarantorValue = this.userBusinessDetails.workingCapitalRequired;
        this.desc1 = this.userBusinessDetails.desc1;
        this.desc1Rs = this.userBusinessDetails.desc1Rs;
        this.desc2 = this.userBusinessDetails.desc2;
        this.desc2Rs = this.userBusinessDetails.desc2Rs;
        this.desc3 = this.userBusinessDetails.desc3;
        this.desc3Rs = this.userBusinessDetails.desc3Rs;
        this.desc1 = this.userBusinessDetails.desc1;

        this.AnticipatedMargin = this.userBusinessDetails.anticipatedMargin;
        this.AnticipatedPermissibleLimit = this.userBusinessDetails.anticipatedPermissibleLimit;
        this.AntiRemarks = this.userBusinessDetails.antiRemarks;
        this.AnticipatedValue = this.userBusinessDetails.anticipatedValue;
      }
      if (this.alldetails.educationLoanDetails != null || this.alldetails.educationLoanDetails != undefined) {
        this.educationLoanDetails = this.alldetails.educationLoanDetails;
      }
      if (this.alldetails.goldLoanDetails != null || this.alldetails.goldLoanDetails != undefined) {
        this.goldLoanDetails = this.alldetails.goldLoanDetails;
        if (this.goldLoanDetails.goldType == 1) {
          this.goldType = "Term Loan";
        }
        else {
          this.goldType = "Overdraft Facility";
        }
      }
      if (this.alldetails.fixedAssetLoanDetails != null || this.alldetails.fixedAssetLoanDetails != undefined) {
        this.fixedAssetLoanDetails = this.alldetails.fixedAssetLoanDetails;
        this.fixedassetexist = true;
      }
      if (this.alldetails.homeLoanDetails != null || this.alldetails.homeLoanDetails != undefined) {
        this.homeLoanDetails = this.alldetails.homeLoanDetails;
        // console.log(this.fixedAssetLoanDetails);
      }
      if (this.alldetails.projectLoanDetails != null || this.alldetails.projectLoanDetails != undefined) {
        this.projectLoanDetails = this.alldetails.projectLoanDetails;
        console.log(this.projectLoanDetails);
      }
      if (this.alldetails.smallScaleDetails != null || this.alldetails.smallScaleDetails != undefined) {
        this.SmallScaleDetails = this.alldetails.smallScaleDetails;
      }
      if (this.alldetails.suretyLoanDetails != null || this.alldetails.suretyLoanDetails != undefined) {
        this.suretyLoanDetails = this.alldetails.suretyLoanDetails;
      }
      if (this.alldetails.fixedDeposit != null || this.alldetails.fixedDeposit != undefined) {
        this.fixedDeposit = this.alldetails.fixedDeposit;
      }
      // if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
      //   this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
      //   this.moveableexist = true;
      // }
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
      }

      // if (this.alldetails.allCertificateDetails != null || this.alldetails.allCertificateDetails != undefined) {
      //   this.certificates = this.alldetails.allCertificateDetails
      //   if (this.certificates.length != 0) {
      //     this.certificatesexist = true
      //     for (let index = 0; index < this.certificates.length; index++) {
      //       if (this.certificates[index].actualCertificateName == null) {
      //         this.CertificateDisplay.push(this.certificates[index]);
      //       }
      //     }
      //   }
      // }
      if (this.vehicleLoanDetails != null) {
        if (this.vehicleLoanDetails.vehicaltype == 1) {
          this.vehicletype = "New Vehicle";
        }
        else {
          this.vehicletype = "Second hand Vehicle";
        }
      }

      //familydetails, fixedassetdetails, vehicle loan  - rajeshwari
      // if (this.alldetails.userFamilyDetails != null || this.alldetails.userFamilyDetails != undefined) {
      //   this.familyDetails = this.alldetails.userFamilyDetails;
      //   this.familydocs = this.alldetails.userFamilyDetails.familyCertList
      //   if (this.familydocs.length != 0) {
      //     this.familydocsexist = true
      //   }
      // }
      if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
        this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
      }
      if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
        this.vehicleLoanDetails = this.alldetails.userVehicleLoanDetails;
      }
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
      }

      console.log(response);
    })
  }

  // backendServices() {
  //   this.userdetailsfor = this.customerid + ',' + this.ticketid;
  //   this.businessService.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
  //     this.alldetails = response;
  //     this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
  //     this.userBusinessDetails = this.alldetails.businessLoanDetailsVM;
  //     this.userBankDetails = this.alldetails.userBankandIdentityDetails;
  //     if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
  //       this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
  //       this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments
  //       if (this.bankdocs.length != 0) {
  //         this.bankdocsexist = true
  //       }
  //     }
  //     if (this.userBasicDetailsDetails != null || this.userBasicDetailsDetails != undefined) {
  //       this.fname = this.userBasicDetailsDetails.firstName;
  //       this.mname = this.userBasicDetailsDetails.middleName;
  //       this.lname = this.userBasicDetailsDetails.lastName;
  //       this.placebirth = this.userBasicDetailsDetails.placeOfBirth;
  //       this.gender = this.userBasicDetailsDetails.genderstring;
  //       this.marital = this.userBasicDetailsDetails.maritalstring;
  //       this.mobile = this.userBasicDetailsDetails.mobileNum;
  //       this.dob = this.userBasicDetailsDetails.dateOfBirth;
  //       this.religion = this.userBasicDetailsDetails.religionstring;
  //       this.caste = "",
  //         this.qualification = this.userBasicDetailsDetails.qualificationstring;
  //       this.occupation = this.userBasicDetailsDetails.occupationstring;
  //       this.email = this.userBasicDetailsDetails.email;
  //       this.designation = this.userBasicDetailsDetails.designationstring;
  //       //address

  //       this.rPostal = this.userBasicDetailsDetails.residentialPincode;
  //       // this.rCountry=this.userBasicDetailsDetails.occupationstring;
  //       this.rState = this.userBasicDetailsDetails.residentialState;
  //       this.rDistrict = this.userBasicDetailsDetails.residentialDistrict;
  //       this.rAddress1 = this.userBasicDetailsDetails.residentialLineOne;
  //       this.rAddress2 = this.userBasicDetailsDetails.residentialLineTwo;

  //       this.pPostal = this.userBasicDetailsDetails.permanentPincode;
  //       // this.pCountry=this.userBasicDetailsDetails.designationstring;
  //       this.pState = this.userBasicDetailsDetails.permanentState;
  //       this.pDistrict = this.userBasicDetailsDetails.permanentDistrict;
  //       this.pAddress1 = this.userBasicDetailsDetails.permanentLineOne;
  //       this.pAddress2 = this.userBasicDetailsDetails.permanentLineTwo;

  //     }
  //     if (this.userBusinessDetails != null || this.userBusinessDetails != undefined) {
  //       //business
  //       this.GSTNo = this.userBusinessDetails.membershipNo;
  //       this.businessAddTelNo = this.userBusinessDetails.businessAddTelNo;
  //       this.scst = this.userBusinessDetails.category;
  //       this.Factoryaddress = this.userBusinessDetails.factoryAddTelNo;
  //       this.partnername = this.userBusinessDetails.nameofPartner;
  //       this.agepartner = this.userBusinessDetails.ageofPartner;
  //       this.experiencepast = this.userBusinessDetails.pastExperience;
  //       this.resiaddr = this.userBusinessDetails.residetialAddressofPartner;
  //       this.partnershare = this.userBusinessDetails.partnerShareAmount;
  //       this.techqualified = this.userBusinessDetails.technicalQualification;
  //       this.loaandyearofest = this.userBusinessDetails.yearofEshtablishment;
  //       this.loanamt = this.userBusinessDetails.requiredLoanAmount;
  //       this.TermLoanpurpose = this.userBusinessDetails.termLoanPurpose;
  //       this.WorkingcapitalPurpose = this.userBusinessDetails.workingCapitalPurpose;
  //       this.TermLoanAmount = this.userBusinessDetails.termLoanAmount;
  //       this.WorkingcapitalAmount = this.userBusinessDetails.wrokingCapitalAmount;
  //       this.TermLoanRepaymentprogramme = this.userBusinessDetails.termLoanRepayment;
  //       this.businessPremisesOwn = this.userBusinessDetails.businessPremisesOwn;
  //       this.routerThroughBank = this.userBusinessDetails.ableToRouteYes;
  //       this.booksmaintained = this.userBusinessDetails.booksaremaintainedYes;
  //       this.workingrepaymentprogramme = this.userBusinessDetails.workingCapitalRepaymentProgramme;
  //       this.nameandAddressofAssociateConcerns = this.userBusinessDetails.nameandAddressofAssociateConcerns;
  //       this.difficulties = this.userBusinessDetails.difficulties;
  //       this.commoditiesTraded = this.userBusinessDetails.commoditiesTraded;
  //       this.majorSuppliers = this.userBusinessDetails.majorSuppliers;
  //       this.numberOfFirms = this.userBusinessDetails.numberOfFirms;
  //       this.competationSuccessfull = this.userBusinessDetails.competationSuccessfull;
  //       this.year1 = this.userBusinessDetails.year1;
  //       this.year2 = this.userBusinessDetails.year2;
  //       this.sales1 = this.userBusinessDetails.sales1;
  //       this.sales2 = this.userBusinessDetails.sales2;
  //       this.netProfit1 = this.userBusinessDetails.netProfit1;
  //       this.netProfit2 = this.userBusinessDetails.netProfit2;
  //       this.remarks1 = this.userBusinessDetails.remarks1;
  //       this.remarks2 = this.userBusinessDetails.remarks2;
  //       this.anticipatedYear = this.userBusinessDetails.anticipatedYear;
  //       this.anticipatedSales = this.userBusinessDetails.anticipatedSales;
  //       this.anticipatedProfit = this.userBusinessDetails.anticipatedProfit;
  //       this.anticipatedRemarks = this.userBusinessDetails.anticipatedRemarks;
  //       this.feasibleYear = this.userBusinessDetails.feasibleYear;
  //       this.feasibleSales = this.userBusinessDetails.feasibleSales;
  //       this.feasibleNetProfit = this.userBusinessDetails.feasibleNetProfit;
  //       this.feasibleRemarks = this.userBusinessDetails.feasibleRemarks;
  //       this.itAssessmentYear = this.userBusinessDetails.itAssessmentYear;
  //       this.itAmounPaid = this.userBusinessDetails.itAmounPaid;
  //       this.stAssessmentYear = this.userBusinessDetails.stAssessmentYear;
  //       this.stAmountPaid = this.userBusinessDetails.stAmountPaid;
  //       this.avgLvlValue = this.userBusinessDetails.avgLvlValue;
  //       this.avgLvlMargin = this.userBusinessDetails.avgLvlMargin;
  //       this.avgLvlPermissibleLimit = this.userBusinessDetails.avgLvlPermissibleLimit;
  //       this.avgLvlRemarks = this.userBusinessDetails.avgLvlRemarks;

  //       this.outSatndingValue = this.userBusinessDetails.outSatndingValue;
  //       this.outSatndingMargin = this.userBusinessDetails.outSatndingMargin;
  //       this.outStandingPermissibleLimit = this.userBusinessDetails.outStandingPermissibleLimit;
  //       this.outStandingRemarks = this.userBusinessDetails.outStandingRemarks;
  //       this.creditAvailableSuppliers = this.userBusinessDetails.creditAvailableSuppliers;
  //       this.repaymentProgramme = this.userBusinessDetails.repaymentProgramme;
  //       this.item1 = this.userBusinessDetails.item1;
  //       this.item2 = this.userBusinessDetails.item2;
  //       this.item3 = this.userBusinessDetails.item3;
  //       this.supplier1 = this.userBusinessDetails.supplier1;
  //       this.suppier2 = this.userBusinessDetails.suppier2;
  //       this.supplier3 = this.userBusinessDetails.supplier3;
  //       this.cost = this.userBusinessDetails.cost;
  //       this.cost1 = this.userBusinessDetails.cost1;
  //       this.cost2 = this.userBusinessDetails.cost2;
  //       this.lessapplicantscontribution = this.userBusinessDetails.lessapplicantscontribution;
  //       this.loanEquipmentRupees = this.userBusinessDetails.loanEquipmentRupees;
  //       this.reapymentProgamme = this.userBusinessDetails.reapymentProgamme;
  //       this.security = this.userBusinessDetails.security;
  //       this.timeToErect = this.userBusinessDetails.timeToErect;
  //       this.startUpPeriod = this.userBusinessDetails.startUpPeriod;
  //       this.detailsofImmovableProperty = this.userBusinessDetails.avgLvlRemarks;
  //       this.firmName = this.userBusinessDetails.firmName;
  //       this.workingCapitalRequired = this.userBusinessDetails.workingCapitalRequired;
  //       this.guarantorValue = this.userBusinessDetails.workingCapitalRequired;
  //       this.desc1 = this.userBusinessDetails.desc1;
  //       this.desc1Rs = this.userBusinessDetails.desc1Rs;
  //       this.desc2 = this.userBusinessDetails.desc2;
  //       this.desc2Rs = this.userBusinessDetails.desc2Rs;
  //       this.desc3 = this.userBusinessDetails.desc3;
  //       this.desc3Rs = this.userBusinessDetails.desc3Rs;
  //       this.desc1 = this.userBusinessDetails.desc1;

  //       this.AnticipatedMargin = this.userBusinessDetails.anticipatedMargin;
  //       this.AnticipatedPermissibleLimit = this.userBusinessDetails.anticipatedPermissibleLimit;
  //       this.AntiRemarks = this.userBusinessDetails.antiRemarks;
  //       this.AnticipatedValue = this.userBusinessDetails.anticipatedValue;
  //     }
  //     if (this.alldetails.educationLoanDetails != null || this.alldetails.educationLoanDetails != undefined) {
  //       this.educationLoanDetails = this.alldetails.educationLoanDetails;
  //     }
  //     if (this.alldetails.goldLoanDetails != null || this.alldetails.goldLoanDetails != undefined) {
  //       this.goldLoanDetails = this.alldetails.goldLoanDetails;
  //       if (this.goldLoanDetails.goldType == 1) {
  //         this.goldType = "Term Loan";
  //       }
  //       else {
  //         this.goldType = "Overdraft Facility";
  //       }
  //     }
  //     if (this.alldetails.fixedAssetLoanDetails != null || this.alldetails.fixedAssetLoanDetails != undefined) {
  //       this.fixedAssetLoanDetails = this.alldetails.fixedAssetLoanDetails;
  //       this.fixedassetexist = true;
  //     }
  //     if (this.alldetails.homeLoanDetails != null || this.alldetails.homeLoanDetails != undefined) {
  //       this.homeLoanDetails = this.alldetails.homeLoanDetails;
  //       // console.log(this.fixedAssetLoanDetails);
  //     }
  //     if (this.alldetails.projectLoanDetails != null || this.alldetails.projectLoanDetails != undefined) {
  //       this.projectLoanDetails = this.alldetails.projectLoanDetails;
  //       console.log(this.projectLoanDetails);
  //     }
  //     if (this.alldetails.smallScaleDetails != null || this.alldetails.smallScaleDetails != undefined) {
  //       this.SmallScaleDetails = this.alldetails.smallScaleDetails;
  //     }
  //     if (this.alldetails.suretyLoanDetails != null || this.alldetails.suretyLoanDetails != undefined) {
  //       this.suretyLoanDetails = this.alldetails.suretyLoanDetails;
  //     }
  //     if (this.alldetails.fixedDeposit != null || this.alldetails.fixedDeposit != undefined) {
  //       this.fixedDeposit = this.alldetails.fixedDeposit;
  //     }
  //     if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
  //       this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
  //       this.moveableexist = true;
  //     }
  //     if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
  //       this.customerreqdata = this.alldetails.customerRequestdata;
  //     }

  //     if (this.alldetails.allCertificateDetails != null || this.alldetails.allCertificateDetails != undefined) {
  //       this.certificates = this.alldetails.allCertificateDetails
  //       if (this.certificates.length != 0) {
  //         this.certificatesexist = true
  //         for (let index = 0; index < this.certificates.length; index++) {
  //           if (this.certificates[index].actualCertificateName == null) {
  //             this.CertificateDisplay.push(this.certificates[index]);
  //           }
  //         }
  //       }
  //     }
  //     if (this.vehicleLoanDetails != null) {
  //       if (this.vehicleLoanDetails.vehicaltype == 1) {
  //         this.vehicletype = "New Vehicle";
  //       }
  //       else {
  //         this.vehicletype = "Second hand Vehicle";
  //       }
  //     }

  //     //familydetails, fixedassetdetails, vehicle loan  - rajeshwari
  //     if (this.alldetails.userFamilyDetails != null || this.alldetails.userFamilyDetails != undefined) {
  //       this.familyDetails = this.alldetails.userFamilyDetails;
  //       this.familydocs = this.alldetails.userFamilyDetails.familyCertList
  //       if (this.familydocs.length != 0) {
  //         this.familydocsexist = true
  //       }
  //     }
  //     if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
  //       this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
  //     }
  //     if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
  //       this.vehicleLoanDetails = this.alldetails.userVehicleLoanDetails;
  //     }
  //     if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
  //       this.customerreqdata = this.alldetails.customerRequestdata;
  //     }

  //     console.log(response);
  //   })
  // }
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

  goBack() {
    this._location.back();
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
  personaldetailsclick() {


    if (this.currentloan == "business") {
      this.router.navigate(['businessloanform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "gold") {
      this.router.navigate(['Goldloan/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "fixedasset") {
      this.router.navigate(['fixedassetloan/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "home") {
      this.router.navigate(['homeloan/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "project") {
      this.router.navigate(['Projectloan/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "surety") {
      this.router.navigate(['suretyloanform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "fixeddeposit") {
      this.router.navigate(['fdform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "personal")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "personal")
    }
  }
  familydetailsclick() {
    if (this.currentloan == "business") {
      this.router.navigate(['businessloanform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "gold") {
      this.router.navigate(['Goldloan/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "fixedasset") {
      this.router.navigate(['fixedassetloan/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "home") {
      this.router.navigate(['homeloan/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "project") {
      this.router.navigate(['Projectloan/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "surety") {
      this.router.navigate(['suretyloanform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "fixeddeposit") {
      this.router.navigate(['fdform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "family")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "family")
    }
  }
  bankdetailsclick() {
    if (this.currentloan == "business") {
      this.router.navigate(['businessloanform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "gold") {
      this.router.navigate(['Goldloan/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "fixedasset") {
      this.router.navigate(['fixedassetloan/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "home") {
      this.router.navigate(['homeloan/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "project") {
      this.router.navigate(['Projectloan/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "surety") {
      this.router.navigate(['suretyloanform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "fixeddeposit") {
      this.router.navigate(['fdform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "bank")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "bank")
    }
  }
  assetdetailsclick() {
    if (this.currentloan == "business") {
      this.router.navigate(['businessloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "gold") {
      this.router.navigate(['Goldloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "fixedasset") {
      this.router.navigate(['fixedassetloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "home") {
      this.router.navigate(['homeloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "project") {
      this.router.navigate(['Projectloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "surety") {
      this.router.navigate(['suretyloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "fixeddeposit") {
      this.router.navigate(['fdform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "asset")
    }
  }
  businessdetailsclick() {
    if (this.currentloan == "business") {
      this.router.navigate(['businessloanform/'])
      localStorage.setItem("editloanform", "business")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "gold") {
      this.router.navigate(['Goldloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "fixedasset") {
      this.router.navigate(['fixedassetloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "home") {
      this.router.navigate(['homeloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "project") {
      this.router.navigate(['Projectloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "surety") {
      this.router.navigate(['suretyloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "asset")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "asset")
    }
    
  }
  goldloandetailsclick() {
    this.router.navigate(['Goldloan/'])
    localStorage.setItem("editloanform", "gold")
  }
  suretyloanclick() {
    this.router.navigate(['suretyloanform/'])
    localStorage.setItem("editloanform", "surety")
  }
  projectloandetailsclick() {
    this.router.navigate(['Projectloan/'])
    localStorage.setItem("editloanform", "project")
  }
  // fixeddepositLoanclick(){
  //   this.router.navigate(['fdform/'])
  //   localStorage.setItem("editloanform", "fixeddeposit")
  // }
  // vehicleLoanclick(){
  //   this.router.navigate(['vehecleloanform/'])
  //   localStorage.setItem("editloanform", "vehicle")
  // }
  // smallscaleloandetailsclick(){
  //   this.router.navigate(['smallscaleloanform/'])
  //   localStorage.setItem("editloanform", "smallscale")
  // }
  fixedassetloandetailsclick() {
    this.router.navigate(['fixedassetloan/'])
    localStorage.setItem("editloanform", "fixedasset")
  }
  educationloandetailsclick() {
    this.router.navigate(['Educationloan/'])
    localStorage.setItem("editloanform", "education")
  }
  homeloandetailsclick(){
    this.router.navigate(['homeloan/'])
    localStorage.setItem("editloanform", "home")
  }
  certificatesclick() {
    if (this.currentloan == "gold") {
      this.router.navigate(['Goldloan/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "surety") {
      this.router.navigate(['suretyloanform/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "business") {
      this.router.navigate(['businessloanform/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "fixeddeposit") {
      this.router.navigate(['fdform/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "vehicle") {
      this.router.navigate(['vehecleloanform/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "smallscale") {
      this.router.navigate(['smallscaleloanform/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "fixedasset") {
      this.router.navigate(['fixedassetloan/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "education") {
      this.router.navigate(['Educationloan/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "home") {
      this.router.navigate(['homeloan/'])
      localStorage.setItem("editloanform", "certificates")
    }
    else if (this.currentloan == "project") {
      this.router.navigate(['Projectloan/'])
      localStorage.setItem("editloanform", "certificates")
    }
  }

  DownloadForm() {
    // make edit button and uploaded docs to display none
    document.getElementById('downloadid').style.display = 'none';
    document.getElementById('familydocsid').style.display = 'none';
    document.getElementById('bankdocsid').style.display = 'none';

    // var particularclass = document.querySelectorAll('.btn.btn-primary');

    // for (var i = 0; i < particularclass.length; i++) {
    //   (<HTMLButtonElement>particularclass[i]).style.display = "none";
    // }
    var data = document.getElementById('print-section');
    this.spinner.show();
    html2canvas(data).then(canvas => {
      var imgWidth = 100;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/jpg')
      var data45 = {
        htmlString: contentDataURL,
        TicketId:this.ticketid
      }
      this.userservice.SavePdf(data45).subscribe((data1: any) => {
        var aa = data1

      // make edit button and uploaded docs to display 

        document.getElementById('downloadid').style.display = 'block';
        document.getElementById('familydocsid').style.display = 'block';
        document.getElementById('bankdocsid').style.display = 'inherit';
        window.open(data1);

     
        this.spinner.hide();

      })
    });
  }


  fixeddepositLoanclick() {
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "fixeddeposit")
  }
  vehicleLoanclick() {
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "vehicle")
  }
  smallscaleloandetailsclick() {
    this.router.navigate(['smallscaleloanform/'])
    localStorage.setItem("editloanform", "smallscale")
  }
 

}
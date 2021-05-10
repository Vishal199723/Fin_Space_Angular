import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { CustomerApprovalVM } from '../ViewModels/CustomerApprovalVM';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { MailService } from '../Shared/Mail/mail.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../MessageService/meaagse.service';
@Component({
  selector: 'app-vehicleloandetails',
  templateUrl: './vehicleloandetails.component.html',
  styleUrls: ['./vehicleloandetails.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class VehicleloandetailsComponent implements OnInit {
  submitted: boolean;
  alldetails: any;
  familyDetails: any;
  fixedassetDetails: any;
  vehicleLoanDetails: any;

  userBasicDetailsDetails: any;
  userBankDetails: any;
  //personal details
  fname;
  mname;
  lname;
  placebirth;
  gender;
  marital;
  mobile;
  dob;
  religion;
  caste;
  qualification;
  occupation;
  email;
  designation;
  CertificateDisplay: any=[];
  allcertificates: any;
  enableothercertificates: boolean;
  certificatesexist:any=false
  //Residential Address
  rPostal;
  rCountry;
  rState;
  rDistrict;
  rAddress1;
  rAddress2;
  //permanent Address
  pPostal;
  pCountry;
  pState;
  pDistrict;
  pAddress1;
  bankdocs: any;
  bankdocsexist: boolean;
  pAddress2;
  userBusinessDetails: any;

  familydocs: any=[];
  familydocsexist: boolean=false;
  //business
  businessaddtel;
  GSTNo;
  scst;
  Factoryaddress;
  partnername;
  agepartner;
  experiencepast;
  resiaddr;
  partnershare;
  techqualified;
  loaandyearofest;
  loanamt;
  TermLoanpurpose;
  WorkingcapitalPurpose;
  TermLoanAmount;
  WorkingcapitalAmount;
  TermLoanRepaymentprogramme;
  businessPremisesOwn;
  routerThroughBank;
  booksmaintained;
  workingrepaymentprogramme;
  nameandAddressofAssociateConcerns;
  difficulties;
  commoditiesTraded;
  majorSuppliers;
  numberOfFirms;
  competationSuccessfull;
  year1;
  year2;
  sales1;
  sales2;
  netProfit1;
  netProfit2;
  remarks1;
  remarks2;
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
  workflowidfrommail: string;

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
  detailss: string;
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  groupId: string;
  customerid: string;
  transid: string;
  result: any;
  WFStatusList: any;
  workflowid: string;

  mailid: string;
  operation: any;
  selectedstatusid: any;
  comments: any;
  showapprove: boolean;
  workflwid: string;
  customerreqdata: any;
  baid: string;
  CertificateList: any;
  mailticketid: string;
  vehicletype: string;
  bankdetails: any;
  userdetailsfor: string;
  userdetailsforcer: string;
  enablecertificates: boolean=false;
  files: any;
  ApproveFiles: string;
  ProposID: string;
  Nomineetype: string;
  constructor(private messageService: MessageService,private businessService: BusinessLoanServiceService, private spinner: NgxSpinnerService, private router: Router,
    private workflowtrnsservice: WorkflowtransService, private mailservice: MailService,private httpservice:HttpClient) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.detailss = localStorage.getItem("custidwithmailid");

      this.ProposID = localStorage.getItem("ProposID");
      this.Nomineetype = "";
      localStorage.setItem("customerId", this.customerid);
      this.customerid = localStorage.getItem("customerId");
    }
 
    if (this.uid.includes("USR")) {
      this.customerid = this.uid;
      this.showapprove = true;
    }
    else {
      this.showapprove = false;
    }

  }

  ngOnInit() {
    this.workflwid = localStorage.getItem("workflowid");
    this.baid = localStorage.getItem("baid");
    this.detailss = localStorage.getItem("custidwithmailid");
    var aa = this.detailss.split('-');

    this.customerid = aa[0];
    this.transid = aa[1];
    this.mailid = aa[2];
    this.mailticketid = aa[3];
    this.workflowid = aa[4];
 //added
 this.workflowidfrommail=this.workflwid;
 if(this.workflowidfrommail=="1008"){
   this.mailticketid = localStorage.getItem("ProspectIdtoDisplydata");
 }
 if ((this.workflowid != undefined || this.workflowid != null) && this.roleid != null) {
   this.GetStatusList();

 }
    this.backendServices();
    // this.GetStatusList();
    // this.Certificate();
  }

  
  async Certificate() {
    this.spinner.show();
    this.userdetailsforcer =this.customerid + ','+this.mailticketid;
    await this.businessService.getUploadedCertificates(this.userdetailsforcer).subscribe((response: any) => {
      this.CertificateList = response;
      if(this.CertificateList.length!=0){
        this.enablecertificates=true;
      }
      this.spinner.hide()

    });
  }

  backendServices() {
    this.userdetailsfor =this.customerid + ','+this.mailticketid;
    this.businessService.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
      this.alldetails = response;
      this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      this.userBusinessDetails = this.alldetails.businessLoanDetailsVM;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
        this.userBankDetails = this.alldetails.userBankandIdentityDetails;
      }
      if(this.alldetails.userBankandIdentityDetails.length !=0){
        // this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
        this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
        this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments
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
      if (this.userBusinessDetails != null || this.userBusinessDetails != undefined) {
        //business
        this.GSTNo = "";
        this.businessaddtel = this.userBusinessDetails.businessAddTelNo;
        this.scst = "";
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
      if (this.alldetails.userVehicleLoanDetails != null || this.alldetails.userVehicleLoanDetails != undefined) {
        this.vehicleLoanDetails = this.alldetails.userVehicleLoanDetails;
        if(this.vehicleLoanDetails.vehicaltype == 1){
          this.vehicletype="New Vehicle";
        }
        else{
          this.vehicletype="Second hand Vehicle";
        }
      }
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
      }
      if(this.alldetails.allCertificateDetails.length!=0){
        this.allcertificates=this.alldetails.allCertificateDetails
        this.certificatesexist = true

        for (let index = 0; index < this.allcertificates.length; index++) {
          if (this.allcertificates[index].actualCertificateName == null) {
            this.CertificateDisplay.push(this.allcertificates[index]);
          }
        }
        for (let index = 0; index < this.allcertificates.length; index++) {
          if (this.allcertificates[index].actualCertificateName != null) {
            this.enableothercertificates=true
          }
          break
        }
  
      }
      console.log(response);
    })
  }

  bankIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  signIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  details(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  vehicleloan(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  homeIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  businessIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  gotostep6(stepper: MatStepper) {
    this.submitted = true;
    //stepper.next();
  }

  approve() {
    if (this.workflwid == '1008') {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId: this.customerreqdata.complaintId,
        WorkflowId: this.workflwid,
        ComplaintId: this.customerreqdata.complaintId,
        BusinessAssociateId: this.baid
      }
      this.spinner.show();
      this.businessService.customerapprovalandreqticket(inputRequest).subscribe(
        (data: any) => {
          alert("Loan Form Approved successfully!")
          this.spinner.hide();
          this.router.navigate(['/customerdashboard']);
        });
    }
    else {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId: this.customerreqdata.complaintId,
        WorkflowId: null,
        ComplaintId: null,
        BusinessAssociateId: null
      }
      this.spinner.show();
      this.businessService.customerapproval(inputRequest).subscribe(
        (data: any) => {
          alert("Loan Form Approved successfully!")
          this.spinner.hide();
          this.router.navigate(['/customerdashboard']);
        });
    }
    this.spinner.show();
         this.router.navigate(['/customerdashboard']);
  }

  // GetAlldetails() {
  //   this.workflowtrnsservice.getCustomerAllDetails(this.detailss).subscribe((data: any) => {
  //     this.result = data;
  //     this.customerId = "USR2020071500001";
  //     this.mailId = 6;
  //     this.transId = 1026;
  //     this.fromUser = "EMP46969";

  //   })
  // }

  GetStatusList() {
    var workandroleid = this.workflowid + "-" + this.roleid
    this.spinner.show()
    this.mailservice.GetStatusListWithMailID(workandroleid).subscribe((data: any) => {
      this.WFStatusList = data;
      this.spinner.hide()
    })
  }
  onselecttouser(id) {
    this.operation = id;
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
  }
  SendVerificationtoCustomer() {
    var mailtocustomer = {
      Id: 0,
      CustomerId: this.customerid,
      MailId: this.mailid,
      TransId: this.transid,
      FromUser: this.uid,
      ToUser: this.customerid,
      WorkflowState: this.selectedstatusid,
      Comments: this.comments,
      TickedId: this.mailticketid 

    };
    const frmData = new FormData();
    frmData.append("CustomerData", JSON.stringify(mailtocustomer));
    
    frmData.append("ApproveFiles", this.ApproveFiles);
    this.spinner.show();
    this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostUpdateWorkflowMail/', frmData).subscribe(
      data => {
        if (data != null) {
          this.spinner.hide();
          alert('Mail Sent Successfully');
          this.router.navigate(['/inbox']);
        }
        else {
          this.spinner.hide();
          alert("Something went wrong!!")
        }
      });
    
  }
  onChangeApproveFiles(event){
    var fileslist = "";
    this.files = [].slice.call(event.target.files);
    console.log(this.files);
    fileslist = this.files[0];
    this.ApproveFiles = fileslist;
  }
  SendVerificationtoApprover() {
    
    if (this.roleid == "1009" || this.roleid == "1010") {
      var mailtocustomer = {
        Id: 0,
        CustomerId: this.customerid,
        MailId: this.mailid,
        TransId: this.transid,
        FromUser: this.uid,
        ToUser: this.GetGroupId(this.groupId),
        GroupId: this.GetGroupId(this.groupId),
        WorkflowState: this.selectedstatusid,
        Comments: this.comments,
        TickedId: this.mailticketid 
      };
      console.log(mailtocustomer);
      const frmData = new FormData();
    frmData.append("CustomerData", JSON.stringify(mailtocustomer));
    
    frmData.append("ApproveFiles", this.ApproveFiles);
    this.spinner.show();

    this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostPPUUpdateWorkflowOfcMail/', frmData).subscribe(
      data => {
        if (data != null) {
          this.WFStatusList = data;
          this.spinner.hide();
          alert('Mail Sent Successfully');
          this.router.navigate(['/inbox']);
        }
        else {
          this.spinner.hide();
          alert("Something went wrong!!")
        }
      });
 
    }
    else{

    var mailtocustomer = {
      Id: 0,
      CustomerId: this.customerid,
      MailId: this.mailid,
      TransId: this.transid,
      FromUser: this.uid,
      ToUser: this.GetGroupId(this.groupId),
      GroupId: this.GetGroupId(this.groupId),
      WorkflowState: this.selectedstatusid,
      Comments: this.comments,
      TickedId: this.mailticketid 
    };
    console.log(mailtocustomer);
    const frmData = new FormData();
    frmData.append("CustomerData", JSON.stringify(mailtocustomer));
    
    frmData.append("ApproveFiles", this.ApproveFiles);
    this.spinner.show();

    this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostUpdateWorkflowOfcMail/', frmData).subscribe(
      data => {
        if (data != null) {
          this.WFStatusList = data;
          this.spinner.hide();
          alert('Mail Sent Successfully');
          this.router.navigate(['/inbox']);
        }
        else {
          this.spinner.hide();
          alert("Something went wrong!!")
        }
      });
    
  }
     
  }
  GetGroupId(grpid) {
    var groupid = "";
    if (grpid === "1003") {
      groupid = "1004";
    }
    else if (grpid === "1004") {
      groupid = "1005";
    }
    else if (grpid === "1005") {
      groupid = "1006";
    }
    else if (grpid === "1006") {
      groupid = "1007";
    }
    else if (grpid === "1007") {
      groupid = "1008";
    }
    else if (grpid === "1007") {
      groupid = "1008";
    }
    else if (grpid === "1008") {
      groupid = "1009";
    }
    else if (grpid === "1009") {
      groupid = "1010";
    }
    else if (grpid === "1010") {
      groupid = "1014";
    }
    else if (grpid === "1014") {
      groupid = "1015";
    }
    else if (grpid === "1015") {
      groupid = "1016";
    }
    else if (grpid === "1016") {
      groupid = "1017";
    }
    else if (grpid === "1017") {
      groupid = "1018";
    }
    else if (grpid === "1018") {
      groupid = "1019";
    }
    else if (grpid === "1019") {
      groupid = "1018";
    }
    else if (grpid === "1020") {
      groupid = "1021";
    }
    else if (grpid === "1021") {
      groupid = "1020";
    }
    else if (grpid === "1022") {
      groupid = "1023";
    }
    else if (grpid === "1023") {
      groupid = "1024";
    }
    else if (grpid === "1024") {
      groupid = "1024";
    }


    return groupid;
  }
  EditPersonalDetails(){
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "personal")
  }
  EditFamilyDetails(){
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "family")
  }
  EditBankDetails(){
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "bank")
  }
  EditHomeVehicleDetails(){
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "asset")
  }
  EditVehicleDetails(){
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "vehicle")
  }
  EditCertificatesDetails(){
    this.router.navigate(['vehecleloanform/'])
    localStorage.setItem("editloanform", "certificates")
  }
}

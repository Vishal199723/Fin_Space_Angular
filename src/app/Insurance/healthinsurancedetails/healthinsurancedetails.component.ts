import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { BusinessLoanServiceService } from '../../Shared/BusinessLoan/business-loan-service.service';
import { CustomerApprovalVM } from '../../ViewModels/CustomerApprovalVM';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-healthinsurancedetails',
  templateUrl: './healthinsurancedetails.component.html',
  styleUrls: ['./healthinsurancedetails.component.css']
})
export class HealthinsurancedetailsComponent implements OnInit {
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
  pAddress2;
  userBusinessDetails: any;
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
  SmallScaleDetails: any;
  workflwid: string;
  customerreqdata: any;
  uid: string;
  healthinsurancedetails: any;
  baid: any;
  detailss: string;
  customerid: string;
  transid: string;
  mailid: string;
  mailticketid: string;
  useremail: string;
  username: string;
  roleid: string;
  groupId: string;
  showapprove: boolean;
  CertificateList: any;
  enablecertificates: boolean=false;
  WFStatusList: any;
  files: any;
  ApproveFiles: string;
  selectedstatusid: any;
  comments: any;
  operation: any;
  workflowidfrommail: string;
  userdetailsfor: string;
  bankdetails: any;
  bankdocs: any;
  bankdocsexist: boolean;
  certificates: any;
  certificatesexist: boolean;
  CertificateDisplay: any=[];
  role: string;
  allcertificates: any;
  enableothercertificates: boolean;
  constructor(private messageService: MessageService,private businessService: BusinessLoanServiceService, private spinner: NgxSpinnerService, 
    private router: Router,private httpservice:HttpClient) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
      this.role=localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.detailss = localStorage.getItem("custidwithmailid");
    }

    this.uid = localStorage.getItem("userId");
    if (this.uid.includes("USR")) {
      this.showapprove = true;
    }
    else {
      this.showapprove = false;
    }
  }

  ngOnInit() {
    this.workflwid = localStorage.getItem("workflowid");
    this.workflowidfrommail=this.workflwid
    this.baid = localStorage.getItem("baid");
    this.detailss = localStorage.getItem("custidwithmailid");
    var aa = this.detailss.split('-');
    // if (!aa[0].includes("USR") == undefined) {
      this.customerid = aa[0];
    // }
    // else {
    //   this.customerid = this.uid;
    // }
    this.transid = aa[1];
    this.mailid = aa[2];
    this.mailticketid = aa[3];
    if(this.workflowidfrommail=="1008"){
      this.mailticketid = localStorage.getItem("ProspectIdtoDisplydata");
    }
    this.backendServices();
    this.gethealthinsdetails();
  }
  backendServices() {
    this.userdetailsfor = this.customerid + ',' + this.mailticketid;
    this.spinner.show();
    this.businessService.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
      this.alldetails = response;
      this.spinner.hide();

      this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      this.userBankDetails=this.alldetails.userBankandIdentityDetails;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
        this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
        this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments
        if (this.bankdocs.length != 0) {
          this.bankdocsexist = true
        }
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
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
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
  homeIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }
  healthinsurance(stepper: MatStepper) {
    this.submitted = true;
     stepper.next();
  }

  gethealthinsdetails() {
    this.spinner.show();    
    this.businessService.gethealthinsurancedetails(this.mailticketid).subscribe((respose: any) => {
      this.healthinsurancedetails = respose.healthInsuranceDetails;
      this.spinner.hide();

    });
  }

  approve() {
    if (this.workflwid == '1008') {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId:this.customerreqdata.complaintId,
        WorkflowId: this.workflwid,
        ComplaintId: this.customerreqdata.complaintId,
        BusinessAssociateId: this.baid
      }
      this.spinner.show();
      this.businessService.customerapprovalandreqticket(inputRequest).subscribe(
        (data: any) => {
          this.spinner.hide();
          this.router.navigate(['/customerdashboard']);
        });
    }
    else {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId: null,
        WorkflowId: null,
        ComplaintId: null,
        BusinessAssociateId: null
      }
      this.spinner.show();
      this.businessService.customerapproval(inputRequest).subscribe(
        (data: any) => {
          this.spinner.hide();
          this.router.navigate(['/customerdashboard']);
        });
    }
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
  onselecttouser(id) {
    this.operation = id;
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
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
  EditPersonalDetails(){
    this.router.navigate(['HealthInsurance/'])
    localStorage.setItem("editinsuranceform", "personal")
  }
 
  EditBankDetails(){
    this.router.navigate(['HealthInsurance/'])
    localStorage.setItem("editinsuranceform", "bank")
  }

  EditHealthInsuranceDetails(){
    this.router.navigate(['HealthInsurance/'])
    localStorage.setItem("editinsuranceform", "health")
  }
  EditCertificatesDetails(){
    this.router.navigate(['HealthInsurance/'])
    localStorage.setItem("editinsuranceform", "certificates")
  }
}

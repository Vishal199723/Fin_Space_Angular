import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { MailService } from '../Shared/Mail/mail.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { CustomerApprovalVM } from '../ViewModels/CustomerApprovalVM';

@Component({
  selector: 'app-fixed-deposit-loan-details',
  templateUrl: './fixed-deposit-loan-details.component.html',
  styleUrls: ['./fixed-deposit-loan-details.component.css']
})
export class FixedDepositLoanDetailsComponent implements OnInit {
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
  
  familydocs: any=[];
  familydocsexist: boolean=false;
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
  CertificateDisplay: any=[];

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
  role: string;
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
  enablecertificates: boolean=false;
  files: any;
  ApproveFiles: string;
  ticketId: string;
  workflowid: string;
  workflowidfrommail: string;
  bankdocs: any;
  bankdocsexist: boolean;
  moveableexist: boolean;
  allcertificates: any;
  enableothercertificates: boolean;
  certificatesexist:any=false
  AnticipatedMargin: any;
  AnticipatedPermissibleLimit: any;
  AntiRemarks: any;
  AnticipatedValue: any;
  businessAddTelNo: any;
  fixedDeposit: any;


  constructor(private messageService: MessageService,private businessService: BusinessLoanServiceService, private spinner: NgxSpinnerService, private userservice: UserDetailsService, private router: Router,
    private mailservice: MailService, private workflowtrnsservice: WorkflowtransService,
    private httpservice:HttpClient) { 
      console.log(localStorage.userId);
      this.messageService.sendSession('true');
  
      if (localStorage.getItem("IsLoggedIn") == "true") {
        this.uid = localStorage.getItem("userId");
        this.useremail = localStorage.getItem("Email");
        this.username = localStorage.getItem("fullname");
        this.role = localStorage.getItem("role");
        this.groupId = localStorage.getItem("groupId");
        this.detailss = localStorage.getItem("custidwithmailid");
      }
      if (this.uid.includes("USR")) {
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
    //added
    this.workflowidfrommail=this.workflwid;
    if(this.workflowidfrommail=="1008"){
      this.mailticketid = localStorage.getItem("ProspectIdtoDisplydata");
    }
    if ((this.workflowid != undefined || this.workflowid != null) && this.role != null) {
      this.GetStatusList();

    }
    this.backendServices();
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
  async Certificate() {
    this.spinner.show();
    this.userdetailsforcer =this.customerid + ','+this.mailticketid;
    await this.businessService.getUploadedCertificates(this.userdetailsforcer).subscribe((response: any) => {
      this.CertificateList = response;
      if(this.CertificateList.length!=0){
        this.enablecertificates=true;
      }
      this.spinner.hide();
    });
  }
  backendServices() {
    this.userdetailsfor = this.customerid + ',' + this.mailticketid;
    this.businessService.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
      this.alldetails = response;
      this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      this.userBankDetails=this.alldetails.userBankandIdentityDetails;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
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
      if (this.alldetails.fixedDeposit != null || this.alldetails.fixedDeposit != undefined) {
        this.fixedDeposit = this.alldetails.fixedDeposit;
      }

      if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
        this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
        this.moveableexist=true;
      }
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
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
      if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
        this.vehicleLoanDetails = this.alldetails.userVehicleLoanDetails;
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
  homeIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
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
  FDIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }


  GetStatusList() {
    this.spinner.show()
    this.mailservice.GetStatusList(this.role).subscribe((data: any) => {
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
    
    if (this.role == "1009" || this.role == "1010") {
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

  EditPersonalDetails(){
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "personal")
  }
  EditFamilyDetails(){
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "family")
  }
  EditBankDetails(){
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "bank")
  }
  EditHomeVehicleDetails(){
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "asset")
  }
  EditFDDetails(){
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "fixeddeposit")
  }
  EditCertificatesDetails(){
    this.router.navigate(['fdform/'])
    localStorage.setItem("editloanform", "certificates")
  }
}

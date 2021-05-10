import { Component, OnInit } from '@angular/core';
import { LifeInsuranceService } from 'src/app/Shared/LifeInsurance/life-insurance.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatStepper } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { CustomerApprovalVM } from 'src/app/ViewModels/CustomerApprovalVM';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-data-life-insurance',
  templateUrl: './data-life-insurance.component.html',
  styleUrls: ['./data-life-insurance.component.css']
})
export class DataLifeInsuranceComponent implements OnInit {
  userImage:any;

  data:any;
  uid: any;
  username: any;
  ticketid: any;
  customerid: any;
  role: any;
  userBasicDetailsDetails: any;
  userFamilyDetailsDetails: any;
  userBankDetails: any;
  public fieldArray: Array<any> = [];
  userLifeInsuranceDetails: any;
  dispProspectsSignFile: any;
  dispAgentSignFile: any;
  dispProposerSignFile: any;
  submitted: boolean;
  isChecked=true
  bankdetails: any;
  bankdocs: any;
  bankdocsexist: boolean;
  certificates: any;
  certificatesexist: boolean;
  CertificateDisplay: any=[];
  allcertificates: any;
  enableothercertificates: boolean;
    lifeinsuranceform = new FormGroup({
        empOccupation : new FormControl(),
        empNatureofWork: new FormControl(),
        emplengthofService:new FormControl(),
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
        exp25to30:new FormControl(),
        finsavings:new FormControl(),
        finliabilities:new FormControl(),
        fininheritance:new FormControl(),
        lifeNameMemberOne:new FormControl(),
        healthNameMemberOne:new FormControl(),
        savingsNameMemberOne:new FormControl(),
        pensionNameMember:new FormControl(),
        otheNameofMember:new FormControl(),
        lifeDetailsone:new FormControl(),
        healthDetailsone:new FormControl(),
        savingsDetailsone:new FormControl(),
        pensionDetailsone:new FormControl(),
        otherDetailsone:new FormControl(),
        lifeNameMemberTwo:new FormControl(),
        healthNameMemberTwo:new FormControl(),
        savingsNameMemberTwo:new FormControl(),
        pensionNameMemberTwo:new FormControl(),
        otherNameMemberTwo:new FormControl(),
        lifeDetailsTwo:new FormControl(),
        healthDetailsTwo:new FormControl(),
        savingsDetailsTwo:new FormControl(),
        pensionDetailsTwo:new FormControl(),
        otherDetailsTwo:new FormControl(),
        phyHeight:new FormControl(),
        phyWeight:new FormControl(),
        physicaltg:new FormControl(),
        surgerytg:new FormControl(),
        Oncologisttg:new FormControl(),
        ailmenttg:new FormControl(),
        absentfromworktg:new FormControl(),
        Hepatitistg:new FormControl(),
        Rheumatictg:new FormControl(),
        Kidneytg:new FormControl(),
        Gastritistg:new FormControl(),
        Thyroidtg:new FormControl(),
        Angioplastytg:new FormControl(),
        Diabetestg:new FormControl(),
        Bloodpressuretg:new FormControl(),
        Throattg:new FormControl(),
        Livertg:new FormControl(),
        Sclerosistg:new FormControl(),
        Bronchitistg:new FormControl(),
        Anaemiatg:new FormControl(),
        Musculoskeletaltg:new FormControl(),
        impairmenttg:new FormControl(),
        curpregnanttg:new FormControl(),
        pregmonths:new FormControl(),
        stageage:new FormControl(),
        miscariagetg:new FormControl(),
        gynecologicaltg:new FormControl(),
        transmittedtg:new FormControl(),
        prospectlastyear:new FormControl(),
        prospectcuryear:new FormControl(),
        prospect5to10:new FormControl(),
        prospect10to15:new FormControl(),
        prospect15to20:new FormControl(),
        prospect20to25:new FormControl(),
        prospect25to30:new FormControl(),
        prospectMonthlylastyear:new FormControl(),
        prospectMonthlycuryear:new FormControl(),
        prospectMonthly5to10:new FormControl(),
        prospectMonthly10to15:new FormControl(),
        prospectMonthly15to20:new FormControl(),
        prospectMonthly20to25:new FormControl(),
        prospectMonthly25to30:new FormControl(),

        lifeincDeathMaturity:new FormControl(),
        desirableSumAssured:new FormControl(),
        healthInsurance:new FormControl(),
        desirablecoverageperAnnum:new FormControl(),
        savingandinvestplan:new FormControl(),
        desirablereturns:new FormControl(),
        pensionPlanning:new FormControl(),
        desirablepensionperAnnum:new FormControl(),
        incPlanName:new FormControl(),
        incpremiumType:new FormControl(),
        incPaymentMode:new FormControl(),
        incpaymentmethod:new FormControl(),
        incPremiumTerm:new FormControl(),
        inccoverageaTerm:new FormControl(),
        incSumAssured:new FormControl(),
        incBenefits:new FormControl(),
        foodlastyear:new FormControl(),
        foodcuryear:new FormControl(),
        food5to10:new FormControl(),
        food10to15:new FormControl(),
        food15to20:new FormControl(),
        food20to25:new FormControl(),
        food25to30:new FormControl(),
        edulastyear:new FormControl(),
        educuryear:new FormControl(),
        edu5to10:new FormControl(),
        edu10to15:new FormControl(),
        edu15to20:new FormControl(),
        edu20to25:new FormControl(),
        edu25to30:new FormControl(),
        marlastyear:new FormControl(),
        marcuryear:new FormControl(),
        mar5to10:new FormControl(),
        mar10to15:new FormControl(),
        mar15to20:new FormControl(),
        mar20to25:new FormControl(),
        mar25to30:new FormControl(),

        vacationlastyear:new FormControl(),
        vacationcuryear:new FormControl(),
        vacation5to10:new FormControl(),
        vacation10to15:new FormControl(),
        vacation15to20:new FormControl(),
        vacation20to25:new FormControl(),
        vacation25to30:new FormControl(),
        otherlastyear:new FormControl(),
        othercuryear:new FormControl(),
        other5to10:new FormControl(),
        other10to15:new FormControl(),
        other15to20:new FormControl(),
        other20to25:new FormControl(),
        other25to30:new FormControl(),
        totallastyear:new FormControl(),
        totalcuryear:new FormControl(),
        total5to10:new FormControl(),
        total10to15:new FormControl(),
        total15to20:new FormControl(),
        total20to25:new FormControl(),
        total25to30:new FormControl(),
        recommendedpolicy:new FormControl(),
        recommendedcommit:new FormControl(),
        recommendedRisk:new FormControl(),
        recommendedsuitedPolicy:new FormControl(),
        todaysdateAgent:new FormControl(),
        todaysdateprospect:new FormControl(),
     
        projectWorkSpanId:new FormControl(),
        lifeStageId:new FormControl(),
        appetiteId:new FormControl(),
        protectionNeedId:new FormControl(),
     
     
      });
  CertificateList: any;
  workflwid: string;
  baid: string;
  detailss: string;
  transid: string;
  mailid: string;
  mailticketid: string;
  customerreqdata: any;
  showapprove: boolean;
  ticketidfrommail: string;
  enablecertificates: boolean=false;
  banks: any;
  applieduserid: any;
  WFStatusList: any;
  files: any;
  ApproveFiles: string;
  selectedstatusid: any;
  comments: any;
  roleid: string;
  groupId: string;
  operation: any;
  workflowidfrommail: string;
  userdetailsfor: string;
  alldetails: any;

  constructor(private messageService: MessageService,private lifeinsService:LifeInsuranceService,private spinner: NgxSpinnerService, 
    private businessService: BusinessLoanServiceService, private router: Router,private businessloanservice:BusinessLoanServiceService,
    private httpservice:HttpClient) { 
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.username = localStorage.getItem("fullname");
    this.ticketid = localStorage.getItem("TicketId");
    this.ticketidfrommail=localStorage.getItem("ticketidfrommail")
    this.roleid = localStorage.getItem("role");
    this.groupId = localStorage.getItem("groupId");
    this.detailss = localStorage.getItem("custidwithmailid");
   
    localStorage.setItem("customerId", this.customerid);
    this.customerid = localStorage.getItem("customerId");
    this.role = localStorage.getItem("role");

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

    this.workflwid = localStorage.getItem("workflowid");
    this.baid = localStorage.getItem("baid");
  

    this.detailss = localStorage.getItem("custidwithmailid");
    this.uid = localStorage.getItem("userId");

    var aa = this.detailss.split('-');
      this.customerid = aa[0];
      if(this.detailss != null){
        var aa = this.detailss.split('-');
        this.customerid = aa[0];
      
        this.transid = aa[1];
        this.mailid = aa[2];
        this.mailticketid = aa[3];
      }
      if(this.workflowidfrommail=="1008"){
        this.mailticketid = localStorage.getItem("ProspectIdtoDisplydata");
      }

      this.backendServices();
    this.GetLifeInsuranceDetails();
    // this.Certificate();
    // this.Getbankaccount();
    // this.GetCustomerCertificate();
  }
  onselecttouser(id) {
    this.operation = id;
  }
  async Certificate() {
    this.spinner.show()
    await this.businessService.getUploadedCertificates(this.customerid).subscribe((response: any) => {
      this.CertificateList = response;
      if(this.CertificateList.length!=0){
        this.enablecertificates=true;
      }
      this.spinner.hide()

    });
  }
  async GetCustomerCertificate() {
    this.spinner.show()
    if(this.ticketid==null || this.ticketid==undefined){
      this.ticketid=this.ticketidfrommail
    }
    await this.businessService.getUploadedCertificates(this.ticketid).subscribe((response: any) => {
      this.CertificateList = response;
      if(this.CertificateList.length!=0){
        this.enablecertificates=true;
      }
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
  GetBankType(id){
    for (let index = 0; index < this.banks.length; index++) {
        if(this.banks[index].bankAccTypeId==id){
          return this.banks[index].accountType
        }      
    }
  }
  GetLifeInsuranceDetails(){
    this.spinner.show()
    this.lifeinsService.getlifeInsuranceData(this.mailticketid).subscribe((respose: any) => {
      this.data = respose;
      if(this.data.userBasicDetailsDetails != null){
        this.userBasicDetailsDetails = this.data.userBasicDetailsDetails;
        this.applieduserid =  this.userBasicDetailsDetails.customerId
      }
      if (this.data.userBankandIdentityDetails != null || this.data.userBankandIdentityDetails != undefined) {
        this.bankdetails = this.data.userBankandIdentityDetails.bankdetails;
        this.userBankDetails = this.data.userBankandIdentityDetails;
        this.bankdocs = this.data.userBankandIdentityDetails.alldocuments
        // if (this.bankdocs.length != 0) {
        //   this.bankdocsexist = true
        // }
      }
      if (this.data.customerRequestdata != null || this.data.customerRequestdata != undefined) {
        this.customerreqdata = this.data.customerRequestdata;
      }
      if(this.data.userLifeInsuranceDetails != null){
        this.userLifeInsuranceDetails = this.data.userLifeInsuranceDetails;
        if(this.userLifeInsuranceDetails.alldocuments != null){
          for (let index = 0; index < this.userLifeInsuranceDetails.alldocuments.length; index++){
              if(this.userLifeInsuranceDetails.alldocuments[index].documentName == "ProposersSign"){
                  this.dispProposerSignFile = this.userLifeInsuranceDetails.alldocuments[index].file;
              }
              else if(this.userLifeInsuranceDetails.alldocuments[index].documentName == "AgentsSign"){
                this.dispAgentSignFile =  this.userLifeInsuranceDetails.alldocuments[index].file;
              }
              else if(this.userLifeInsuranceDetails.alldocuments[index].documentName == "ProspectsSign"){
                this.dispProspectsSignFile =  this.userLifeInsuranceDetails.alldocuments[index].file;
              }
          }
        }  
      }
      if(this.data.allCertificateDetails!=null){
        this.allcertificates=this.data.allCertificateDetails
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
      this.spinner.hide();
    });
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
  lifeinsurance(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
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
          this.spinner.hide();
          alert("Insurance Form Approved Successfully")

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
          alert("Insurance Form Approved Successfully")

          this.router.navigate(['/customerdashboard']);
        });
    }
  }

  EditPersonalDetails(){
    this.router.navigate(['lifeInsurance/'])
    localStorage.setItem("editinsuranceform", "personal")
  }
 
  EditBankDetails(){
    this.router.navigate(['lifeInsurance/'])
    localStorage.setItem("editinsuranceform", "bank")
  }

  EditLifeInsuranceDetails(){
    this.router.navigate(['lifeInsurance/'])
    localStorage.setItem("editinsuranceform", "life")
  }
  EditCertificatesDetails(){
    this.router.navigate(['lifeInsurance/'])
    localStorage.setItem("editinsuranceform", "certificates")
  }
}

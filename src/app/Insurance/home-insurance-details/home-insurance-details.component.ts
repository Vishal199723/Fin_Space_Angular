import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { HomeInsuranceService } from 'src/app/Shared/HomeInsurance/home-insurance.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { CustomerApprovalVM } from 'src/app/ViewModels/CustomerApprovalVM';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-insurance-details',
  templateUrl: './home-insurance-details.component.html',
  styleUrls: ['./home-insurance-details.component.css']
})
export class HomeInsuranceDetailsComponent implements OnInit {
  submitted: boolean=false;
  alldetails: any;
  userBasicDetailsDetails: any;
  userBankDetails: any;
  fname: any;
  mname: any;
  lname: any;
  placebirth: any;
  gender: any;
  marital: any;
  mobile: any;
  dob: any;
  religion: any;
  caste: string;
  qualification: any;
  occupation: any;
  email: any;
  designation: any;
  rPostal: any;
  rState: any;
  rDistrict: any;
  rAddress1: any;
  rAddress2: any;
  pPostal: any;
  pState: any;
  pDistrict: any;
  pAddress1: any;
  pAddress2: any;
  rCountry: any;
  pCountry: any;
  ticketidfrommail: string;
  banks: any;
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
  sourceoffund: any;
  paymenttype: any;
  chequeno: any;
  paymentdated: any;
  bankName: any;
  paymentamount: any;
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
  ticketid: string;
  CertificateList: any;
  enablecertificates: boolean=false;
  workflwid: string;
  baid: string;
  detailss: string;
  customerid: any;
  uid: any;
  transid: any;
  mailid: any;
  mailticketid: any;
  customerreqdata: any;
  showapprove: boolean=false;
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
  bankdetails: any;
  bankdocs: any;
  bankdocsexist: boolean;
  certificates: any;
  certificatesexist: boolean;
  CertificateDisplay: any=[];
  allcertificates: any;
  enableothercertificates: boolean;
  role: string;
  homeinsurancedetails: any;
  userHomeInsuranceDetails: any;
  constructor(private messageService: MessageService,private homeinsuranceservice:HomeInsuranceService,private spinner:NgxSpinnerService,
    private businessloanservice:BusinessLoanServiceService,private businessService: BusinessLoanServiceService,
    private businessServicecall: BusinessLoanServiceService,private httpservice:HttpClient, private router: Router,) { 
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.ticketidfrommail=localStorage.getItem("ticketidfrommail")
    this.ticketid = localStorage.getItem("TicketId");
    this.uid = localStorage.getItem("userId");
    this.roleid = localStorage.getItem("role");
    this.role= localStorage.getItem("role");
    this.groupId = localStorage.getItem("groupId");
    this.detailss = localStorage.getItem("custidwithmailid");

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
    this.gethomeinsdetails();

    // this.Getbankaccount();
    this.GetCustomerCertificate();
  }
  gethomeinsdetails() {
    this.spinner.show();    
    this.businessService.gethomeinsurancedetails(this.mailticketid).subscribe((respose: any) => {
      this.userHomeInsuranceDetails = respose.userHomeInsuranceDetails;
     
      if (this.userHomeInsuranceDetails != null || this.userHomeInsuranceDetails != undefined) {
        this.propaddress=this.userHomeInsuranceDetails.propaddress
        this.yearofconstr=this.userHomeInsuranceDetails.yearofconstr
        this.builtuparea=this.userHomeInsuranceDetails.builtuparea
        this.suminsuredbuildingval=this.userHomeInsuranceDetails.suminsuredbuildingval
        this.nameoffinancier=this.userHomeInsuranceDetails.nameoffinancier
        this.sumcontentinsured=this.userHomeInsuranceDetails.sumcontentinsured
        this.distfromwater=this.userHomeInsuranceDetails.distfromwater
        this.locationofprop=this.userHomeInsuranceDetails.locationofprop
        this.buildingstructure=this.userHomeInsuranceDetails.buildingstructure
        this.undergroundservices=this.userHomeInsuranceDetails.undergroundservices
        this.buildingtotal=this.userHomeInsuranceDetails.buildingtotal
        // this.Valueablesdesc=this.alldetails.userHomeInsuranceDetails.valueablesdesc
        // this.Valueablesquantity=this.alldetails.userHomeInsuranceDetails.valueablesquantity
        // this.Valueablessuminsured=this.alldetails.userHomeInsuranceDetails.valueablessuminsured
        // this.Valueablesweight=this.alldetails.userHomeInsuranceDetails.valueablesweight
        // this.Appliancesdesc=this.alldetails.userHomeInsuranceDetails.appliancesdesc
        // this.Appliancesmodel=this.alldetails.userHomeInsuranceDetails.appliancesmodel
        // this.Appliancesyear=this.alldetails.userHomeInsuranceDetails.appliancesyear
        // this.AppliancesIDNo=this.alldetails.userHomeInsuranceDetails.appliancesIDNo
        // this.AppliancesSumInsured=this.alldetails.userHomeInsuranceDetails.appliancesSumInsured
        this.locationwithinpremises=this.userHomeInsuranceDetails.locationwithinpremises
        this.dimensions=this.userHomeInsuranceDetails.dimensions
        this.fixedplatessum=this.userHomeInsuranceDetails.fixedplatessum
        this.lossofrent=this.userHomeInsuranceDetails.lossofrent
        this.additionalrent=this.userHomeInsuranceDetails.additionalrent
        this.pedigreeinsu=this.userHomeInsuranceDetails.pedigreeinsu
        this.baggageinsu=this.userHomeInsuranceDetails.baggageinsu
        this.noofservents=this.userHomeInsuranceDetails.noofservents
        this.natureofwork=this.userHomeInsuranceDetails.natureofwork
        this.estimatedwages=this.userHomeInsuranceDetails.estimatedwages
        this.addressofinsurancecom=this.userHomeInsuranceDetails.addressofinsurancecom
        // this.Itemalreadyinsured=this.alldetails.userHomeInsuranceDetails.itemalreadyinsured
        // this.Policynumber=this.alldetails.userHomeInsuranceDetails.policynumber
        this.insurancecompname=this.userHomeInsuranceDetails.insurancecompname
        // this.Periodofinsurance=this.alldetails.userHomeInsuranceDetails.periodofinsurance
        this.sourceoffund=this.userHomeInsuranceDetails.sourceoffund
        this.paymenttype=this.userHomeInsuranceDetails.paymenttype
        this.chequeno=this.userHomeInsuranceDetails.chequeno
        this.paymentdated=this.userHomeInsuranceDetails.paymentdated
        // this.BankName=this.alldetails.userHomeInsuranceDetails.bankName
        this.paymentamount=this.userHomeInsuranceDetails.paymentamount
        this.paymentamtinwords=this.userHomeInsuranceDetails.paymentamtinwords
        this.lowlyingarea=this.userHomeInsuranceDetails.lowlyingarea
        this.areaprone=this.userHomeInsuranceDetails.areaprone
        this.floddprone=this.userHomeInsuranceDetails.floddprone
        this.coveragefortenant=this.userHomeInsuranceDetails.coveragefortenant
        this.lockkeyopt=this.userHomeInsuranceDetails.lockkeyopt
        this.coverageextinguish=this.userHomeInsuranceDetails.coverageextinguish
        this.terrorismopt=this.userHomeInsuranceDetails.terrorismopt
        this.coverlossofdocs=this.userHomeInsuranceDetails.coverlossofdocs
        this.coverexpensesforhousehold=this.userHomeInsuranceDetails.coverexpensesforhousehold
        this.independenthouse=this.userHomeInsuranceDetails.independenthouse
        this.apartment=this.userHomeInsuranceDetails.apartment
        this.flatsconnected=this.userHomeInsuranceDetails.flatsconnected
     
      
      
      }
     
      this.spinner.hide();

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
    if(this.banks.length!=0){
    for (let index = 0; index < this.banks.length; index++) {
        if(this.banks[index].bankAccTypeId==id){
          return this.banks[index].accountType
        }      
    }
  }
  }

  backendServices() {
    this.userdetailsfor = this.customerid + ',' + this.mailticketid;
    this.spinner.show();
    this.businessServicecall.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
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
      if (this.alldetails.userHomeInsuranceDetails != null || this.alldetails.userHomeInsuranceDetails != undefined) {
        this.propaddress=this.alldetails.userHomeInsuranceDetails.propaddress
        this.yearofconstr=this.alldetails.userHomeInsuranceDetails.yearofconstr
        this.builtuparea=this.alldetails.userHomeInsuranceDetails.builtuparea
        this.suminsuredbuildingval=this.alldetails.userHomeInsuranceDetails.suminsuredbuildingval
        this.nameoffinancier=this.alldetails.userHomeInsuranceDetails.nameoffinancier
        this.sumcontentinsured=this.alldetails.userHomeInsuranceDetails.sumcontentinsured
        this.distfromwater=this.alldetails.userHomeInsuranceDetails.distfromwater
        this.locationofprop=this.alldetails.userHomeInsuranceDetails.locationofprop
        this.buildingstructure=this.alldetails.userHomeInsuranceDetails.buildingstructure
        this.undergroundservices=this.alldetails.userHomeInsuranceDetails.undergroundservices
        this.buildingtotal=this.alldetails.userHomeInsuranceDetails.buildingtotal
        // this.Valueablesdesc=this.alldetails.userHomeInsuranceDetails.valueablesdesc
        // this.Valueablesquantity=this.alldetails.userHomeInsuranceDetails.valueablesquantity
        // this.Valueablessuminsured=this.alldetails.userHomeInsuranceDetails.valueablessuminsured
        // this.Valueablesweight=this.alldetails.userHomeInsuranceDetails.valueablesweight
        // this.Appliancesdesc=this.alldetails.userHomeInsuranceDetails.appliancesdesc
        // this.Appliancesmodel=this.alldetails.userHomeInsuranceDetails.appliancesmodel
        // this.Appliancesyear=this.alldetails.userHomeInsuranceDetails.appliancesyear
        // this.AppliancesIDNo=this.alldetails.userHomeInsuranceDetails.appliancesIDNo
        // this.AppliancesSumInsured=this.alldetails.userHomeInsuranceDetails.appliancesSumInsured
        this.locationwithinpremises=this.alldetails.userHomeInsuranceDetails.locationwithinpremises
        this.dimensions=this.alldetails.userHomeInsuranceDetails.dimensions
        this.fixedplatessum=this.alldetails.userHomeInsuranceDetails.fixedplatessum
        this.lossofrent=this.alldetails.userHomeInsuranceDetails.lossofrent
        this.additionalrent=this.alldetails.userHomeInsuranceDetails.additionalrent
        this.pedigreeinsu=this.alldetails.userHomeInsuranceDetails.pedigreeinsu
        this.baggageinsu=this.alldetails.userHomeInsuranceDetails.baggageinsu
        this.noofservents=this.alldetails.userHomeInsuranceDetails.noofservents
        this.natureofwork=this.alldetails.userHomeInsuranceDetails.natureofwork
        this.estimatedwages=this.alldetails.userHomeInsuranceDetails.estimatedwages
        this.addressofinsurancecom=this.alldetails.userHomeInsuranceDetails.addressofinsurancecom
        // this.Itemalreadyinsured=this.alldetails.userHomeInsuranceDetails.itemalreadyinsured
        // this.Policynumber=this.alldetails.userHomeInsuranceDetails.policynumber
        this.insurancecompname=this.alldetails.userHomeInsuranceDetails.insurancecompname
        // this.Periodofinsurance=this.alldetails.userHomeInsuranceDetails.periodofinsurance
        this.sourceoffund=this.alldetails.userHomeInsuranceDetails.sourceoffund
        this.paymenttype=this.alldetails.userHomeInsuranceDetails.paymenttype
        this.chequeno=this.alldetails.userHomeInsuranceDetails.chequeno
        this.paymentdated=this.alldetails.userHomeInsuranceDetails.paymentdated
        // this.BankName=this.alldetails.userHomeInsuranceDetails.bankName
        this.paymentamount=this.alldetails.userHomeInsuranceDetails.paymentamount
        this.paymentamtinwords=this.alldetails.userHomeInsuranceDetails.paymentamtinwords
        this.lowlyingarea=this.alldetails.userHomeInsuranceDetails.lowlyingarea
        this.areaprone=this.alldetails.userHomeInsuranceDetails.areaprone
        this.floddprone=this.alldetails.userHomeInsuranceDetails.floddprone
        this.coveragefortenant=this.alldetails.userHomeInsuranceDetails.coveragefortenant
        this.lockkeyopt=this.alldetails.userHomeInsuranceDetails.lockkeyopt
        this.coverageextinguish=this.alldetails.userHomeInsuranceDetails.coverageextinguish
        this.terrorismopt=this.alldetails.userHomeInsuranceDetails.terrorismopt
        this.coverlossofdocs=this.alldetails.userHomeInsuranceDetails.coverlossofdocs
        this.coverexpensesforhousehold=this.alldetails.userHomeInsuranceDetails.coverexpensesforhousehold
        this.independenthouse=this.alldetails.userHomeInsuranceDetails.independenthouse
        this.apartment=this.alldetails.userHomeInsuranceDetails.apartment
        this.flatsconnected=this.alldetails.userHomeInsuranceDetails.flatsconnected
     
      
      
      }
      console.log(response);
    })
  }
  async GetCustomerCertificate() {
    this.spinner.show()
    if(this.ticketid==null || this.ticketid==undefined){
      this.ticketid=this.ticketidfrommail
    }
    await this.businessloanservice.getUploadedCertificates(this.ticketid).subscribe((response: any) => {
      this.CertificateList = response;
      if(this.CertificateList.length!=0){
        this.enablecertificates=true;
      }
      this.spinner.hide()

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
  homeIn(stepper: MatStepper) {
  this.submitted = true;
  stepper.next();
  }
  HomeInsurance(stepper: MatStepper) {
  this.submitted = true;
  stepper.next();
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
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
    this.router.navigate(['HomeInsurance/'])
    localStorage.setItem("editinsuranceform", "personal")
  }
 
  EditBankDetails(){
    this.router.navigate(['HomeInsurance/'])
    localStorage.setItem("editinsuranceform", "bank")
  }

  EditHomeInsuranceDetails(){
    this.router.navigate(['HomeInsurance/'])
    localStorage.setItem("editinsuranceform", "home")
  }
  EditCertificatesDetails(){
    this.router.navigate(['HomeInsurance/'])
    localStorage.setItem("editinsuranceform", "certificates")
  }
}

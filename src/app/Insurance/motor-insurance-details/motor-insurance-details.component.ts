import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { MatStepper } from '@angular/material';
import { MotorInsuranceService } from 'src/app/Shared/MotoInsurance/motor-insurance.service';
import { CustomerApprovalVM } from 'src/app/ViewModels/CustomerApprovalVM';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motor-insurance-details',
  templateUrl: './motor-insurance-details.component.html',
  styleUrls: ['./motor-insurance-details.component.css']
})
export class MotorInsuranceDetailsComponent implements OnInit {
  banks: any;
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
  rCountry: any;
  rState: any;
  rDistrict: any;
  rAddress1: any;
  rAddress2: any;
  pPostal: any;
  pCountry: any;
  pState: any;
  pDistrict: any;
  pAddress1: any;
  pAddress2: any;
  submitted: boolean;
  ticketidfrommail: string;
  userMotorInsuranceDetails: any;
  chequeno: any;
  dateofinst: any;
  bankname: any;
  branchloc: any;
  paymentamount: any;
  sourceoffund: any;
  vehiclemanufacturer: any;
  vehiclemodel: any;
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
  limitedtoownpermises: any;
  vehicledesignedhandicapped: any;
  vehicleproposedfor: any;
  pillionpassengers: any;
  nofpersons: any;
  csiopted: any;
  optforstatutory: any;
  legalliability: any;
  legalliabilitypersons: any;
  driver: any;
  otheremployee: any;
  fullnameofconcerned: any;
  motonaddon: any;
  selectedfueltype: any;
  fueltype: any;
  entitledtoncbyespercent: any;
  nameofconcerned: any;
  nameofconcernedenable: boolean=false;
  workflwid: string;
  baid: string;
  detailss: string;
  customerid: string;
  transid: string;
  mailid: string;
  mailticketid: string;
  customerreqdata: any;
  ticketid: string;
  uid: string;
  showapprove: boolean;
  CertificateList: any;
  enablecertificates: boolean;
  WFStatusList: any;
  files: any;
  ApproveFiles: string;
  selectedstatusid: any;
  comments: any;
  roleid: string;
  groupId: string;
  operation: any;
  workflowidfrommail: any;
  role: string;
  certificates: any;
  certificatesexist: boolean;
  CertificateDisplay: any=[];
  allcertificates: any;
  enableothercertificates: boolean;

  bankdetails: any;
  bankdocs: any;
  bankdocsexist: boolean;
  userdetailsfor: string;








  constructor(private messageService: MessageService,private spinner:NgxSpinnerService,private businessloanservice:BusinessLoanServiceService,
    private router: Router,private motorinsuranceservice:MotorInsuranceService,private httpservice:HttpClient,private businessService: BusinessLoanServiceService,) {
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
    this.workflowidfrommail=this.workflwid;
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
    this.getmotorInsDetails();
    this.backendServices();;
    // this.Getbankaccount();
    this.GetCustomerCertificate();

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
  onselecttouser(id) {
    this.operation = id;
  }
  getmotorInsDetails(){
    this.spinner.show()
    this.motorinsuranceservice.getmotorinsurancedetails(this.mailticketid).subscribe((response:any)=>{
      this.alldetails=response;
      this.spinner.hide()

      this.userBasicDetailsDetails=this.alldetails.userBasicDetailsDetails;
      this.userMotorInsuranceDetails = this.alldetails.userMotorInsuranceDetails;
        this.userBankDetails=this.alldetails.userBankandIdentityDetails;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
        this.bankdetails = this.alldetails.userBankandIdentityDetails.bankdetails;
        this.bankdocs = this.alldetails.userBankandIdentityDetails.alldocuments
        // if (this.bankdocs.length != 0 || this.bankdocs !=null) {
        //   this.bankdocsexist = true
        // }
      }
    if(this.userBasicDetailsDetails != null || this.userBasicDetailsDetails != undefined){
      this.fname=this.userBasicDetailsDetails.firstName;
      this.mname=this.userBasicDetailsDetails.middleName;
      this.lname=this.userBasicDetailsDetails.lastName;
      this.placebirth=this.userBasicDetailsDetails.placeOfBirth;
      this.gender=this.userBasicDetailsDetails.genderstring;
      this.marital=this.userBasicDetailsDetails.maritalstring;
      this.mobile=this.userBasicDetailsDetails.mobileNum;
      this.dob=this.userBasicDetailsDetails.dateOfBirth;
      this.religion=this.userBasicDetailsDetails.religionstring;
      this.caste="",
      this.qualification=this.userBasicDetailsDetails.qualificationstring;
      this.occupation=this.userBasicDetailsDetails.occupationstring;
      this.email=this.userBasicDetailsDetails.email;
      this.designation=this.userBasicDetailsDetails.designationstring;
      //address
   
      this.rPostal=this.userBasicDetailsDetails.residentialPincode;
      this.rCountry=this.userBasicDetailsDetails.residentialCountry;
      this.rState=this.userBasicDetailsDetails.residentialState;
      this.rDistrict=this.userBasicDetailsDetails.residentialDistrict;
      this.rAddress1=this.userBasicDetailsDetails.residentialLineOne;
      this.rAddress2=this.userBasicDetailsDetails.residentialLineTwo;
  
      this.pPostal=this.userBasicDetailsDetails.permanentPincode;
       this.pCountry=this.userBasicDetailsDetails.permanentCountry;
      this.pState=this.userBasicDetailsDetails.permanentState;
      this.pDistrict=this.userBasicDetailsDetails.permanentDistrict;
      this.pAddress1=this.userBasicDetailsDetails.permanentLineOne;
      this.pAddress2=this.userBasicDetailsDetails.permanentLineTwo;
  
    }
    if(this.userMotorInsuranceDetails != null || this.userMotorInsuranceDetails != undefined){
      this.chequeno=this.userMotorInsuranceDetails.chequeno;
      this.dateofinst=this.userMotorInsuranceDetails.dateofinst;
      this.bankname=this.userMotorInsuranceDetails.bankname;
      this.branchloc=this.userMotorInsuranceDetails.branchloc;
      this.paymentamount=this.userMotorInsuranceDetails.paymentamount;
      this.sourceoffund=this.userMotorInsuranceDetails.sourceoffund;
      this.vehiclemanufacturer=this.userMotorInsuranceDetails.vehiclemanufacturer;
      this.vehiclemodel=this.userMotorInsuranceDetails.vehiclemodel;
      this.registrationlocation=this.userMotorInsuranceDetails.registrationlocation;
      this.yearofmanufacture=this.userMotorInsuranceDetails.yearofmanufacture;
      this.engineno=this.userMotorInsuranceDetails.engineno;
      this.chassisno=this.userMotorInsuranceDetails.chassisno;
      this.colourofvehicle=this.userMotorInsuranceDetails.colourofvehicle;
      this.ageofinsured=this.userMotorInsuranceDetails.ageofinsured;
      this.insureddeclaredvalue=this.userMotorInsuranceDetails.insureddeclaredvalue;
      this.accessoriesfitted=this.userMotorInsuranceDetails.accessoriesfitted;
      this.valueofkit=this.userMotorInsuranceDetails.valueofkit;
      this.totalvalue=this.userMotorInsuranceDetails.totalvalue;
      this.packagepolicy=this.userMotorInsuranceDetails.packagepolicy;
      this.puc=this.userMotorInsuranceDetails.puc;
      this.registrationno=this.userMotorInsuranceDetails.registrationno;
      this.dateofregistration=this.userMotorInsuranceDetails.dateofregistration;
      this.previousinsurer=this.userMotorInsuranceDetails.previousinsurer;
      this.previouspolicynumber=this.userMotorInsuranceDetails.previouspolicynumber;
      this.previousperiodfrom=this.userMotorInsuranceDetails.previousperiodfrom;
      this.previousperiodto=this.userMotorInsuranceDetails.previousperiodto;
      this.currentperiodfrom=this.userMotorInsuranceDetails.currentperiodfrom;
      this.currentperiodto=this.userMotorInsuranceDetails.currentperiodto;
      this.claimslodged=this.userMotorInsuranceDetails.claimslodged;
      this.claimslodgedamount=this.userMotorInsuranceDetails.claimslodgedamount;
      this.entitledtoncb=this.userMotorInsuranceDetails.entitledtoncb;
      this.limitedtoownpermises=this.userMotorInsuranceDetails.limitedtoownpermises;
      this.vehicledesignedhandicapped=this.userMotorInsuranceDetails.vehicledesignedhandicapped;
      this.vehicleproposedfor=this.userMotorInsuranceDetails.vehicleproposedfor;
      this.pillionpassengers=this.userMotorInsuranceDetails.pillionpassengers;
      this.nofpersons=this.userMotorInsuranceDetails.nofpersons;
      this.csiopted=this.userMotorInsuranceDetails.csiopted;
      this.optforstatutory=this.userMotorInsuranceDetails.optforstatutory;
      this.legalliability=this.userMotorInsuranceDetails.legalliability;
      this.legalliabilitypersons=this.userMotorInsuranceDetails.legalliabilitypersons;
      this.driver=this.userMotorInsuranceDetails.driver;
      this.otheremployee=this.userMotorInsuranceDetails.otheremployee;
      this.fullnameofconcerned=this.userMotorInsuranceDetails.fullnameofconcerned;
      this.motonaddon=this.userMotorInsuranceDetails.motonaddon;
      this.fueltype=this.userMotorInsuranceDetails.fueltypename;
      this.entitledtoncbyespercent=this.userMotorInsuranceDetails.entitledtoncbyespercent;
      this.nameofconcerned=this.userMotorInsuranceDetails.nameofconcerned;
      if(this.nameofconcerned==null || this.nameofconcerned=="" || this.nameofconcerned==" " || this.nameofconcerned==undefined){
        this.nameofconcernedenable = false
      }
      else{
        this.nameofconcernedenable = true

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
  MotorInsurance(stepper: MatStepper) {
  this.submitted = true;
  stepper.next();
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
    this.router.navigate(['MotorInsurance/'])
    localStorage.setItem("editinsuranceform", "personal")
  }
 
  EditBankDetails(){
    this.router.navigate(['MotorInsurance/'])
    localStorage.setItem("editinsuranceform", "bank")
  }

  EditMotorInsuranceDetails(){
    this.router.navigate(['MotorInsurance/'])
    localStorage.setItem("editinsuranceform", "motor")
  }
  EditCertificatesDetails(){
    this.router.navigate(['MotorInsurance/'])
    localStorage.setItem("editinsuranceform", "certificates")
  }
  
}

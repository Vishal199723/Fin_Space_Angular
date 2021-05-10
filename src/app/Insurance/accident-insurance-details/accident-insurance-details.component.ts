import { Component, OnInit } from '@angular/core';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CustomerApprovalVM } from 'src/app/ViewModels/CustomerApprovalVM';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-accident-insurance-details',
  templateUrl: './accident-insurance-details.component.html',
  styleUrls: ['./accident-insurance-details.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class AccidentInsuranceDetailsComponent implements OnInit {
  workflwid: string;
  userBasicDetailsDetails: any;
  userBankDetails: any;
  alldetails: any;
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
  customerreqdata: any;
  goldLoanDetails: any;
  submitted: boolean;
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  groupId: string;
  detailss: string;
  accidentInsurancedata: any;
  showapprove: boolean;
  baid: string;
  CertificateList: any;
  customerid: string;
  transid: string;
  mailid: string;
  mailticketid: any;
  bankdetails: any;
  terminsurancedetails: any;
  enablecertificates: boolean=false;
  files: any;
  ApproveFiles: string;
  WFStatusList: any;
  selectedstatusid: any;
  comments: any;
  operation: any;
  constructor(private messageService: MessageService,private businessService: BusinessLoanServiceService, private spinner: NgxSpinnerService,
    private router: Router,private httpservice:HttpClient) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
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
    this.baid = localStorage.getItem("baid");
    this.detailss = localStorage.getItem("custidwithmailid");
    this.uid = localStorage.getItem("userId");

    if(this.detailss != null){
      var aa = this.detailss.split('-');
      // if(!aa[0].includes("USR") == undefined){
        this.customerid = aa[0];
      // }
      // else
      // {
      //   this.customerid = this.uid ;
      // }
      this.transid = aa[1];
      this.mailid = aa[2];
      this.mailticketid = aa[3];
    }

    this.getmutualfunddetails();
    this.backendServices();
    this.Certificate();
  }

  

  async Certificate() {
    this.spinner.show()
    await this.businessService.getUploadedCertificates(this.uid).subscribe((response: any) => {
      this.CertificateList = response;
      if(this.CertificateList.length!=0){
        this.enablecertificates=true;
      }
    });
    this.spinner.hide()
  }

  signIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }

  bankIn(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }

  accidentinsurance(stepper: MatStepper) {
    this.submitted = true;
    stepper.next();
  }

  backendServices() {
    var aaa =this.customerid+","+this.mailticketid;
    this.businessService.getBusinessLoanDetailsUser(aaa).subscribe((response: any) => {
      console.log(response);
      this.alldetails = response;
      this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
      if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
        this.userBankDetails = this.alldetails.userBankandIdentityDetails;
        this.bankdetails = this.alldetails.userBankandIdentityDetails[0].bankdetails;
      }


      // this.userBusinessDetails = this.alldetails.businessLoanDetailsVM;
  
      // if(this.alldetails.userBankandIdentityDetails.length !=0){
      //   this.bankdetails = this.alldetails.userBankandIdentityDetails[0].bankdetails;
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
      // if (this.userBusinessDetails != null || this.userBusinessDetails != undefined) {
      //   //business
      //   this.GSTNo = "";
      //   this.businessaddtel = this.userBusinessDetails.businessAddTelNo;
      //   this.scst = "";
      //   this.Factoryaddress = this.userBusinessDetails.factoryAddTelNo;
      //   this.partnername = this.userBusinessDetails.nameofPartner;
      //   this.agepartner = this.userBusinessDetails.ageofPartner;
      //   this.experiencepast = this.userBusinessDetails.pastExperience;
      //   this.resiaddr = this.userBusinessDetails.residetialAddressofPartner;
      //   this.partnershare = this.userBusinessDetails.partnerShareAmount;
      //   this.techqualified = this.userBusinessDetails.technicalQualification;
      //   this.loaandyearofest = this.userBusinessDetails.yearofEshtablishment;
      //   this.loanamt = this.userBusinessDetails.requiredLoanAmount;
      //   this.TermLoanpurpose = this.userBusinessDetails.termLoanPurpose;
      //   this.WorkingcapitalPurpose = this.userBusinessDetails.workingCapitalPurpose;
      //   this.TermLoanAmount = this.userBusinessDetails.termLoanAmount;
      //   this.WorkingcapitalAmount = this.userBusinessDetails.wrokingCapitalAmount;
      //   this.TermLoanRepaymentprogramme = this.userBusinessDetails.termLoanRepayment;
      //   this.businessPremisesOwn = this.userBusinessDetails.businessPremisesOwn;
      //   this.routerThroughBank = this.userBusinessDetails.ableToRouteYes;
      //   this.booksmaintained = this.userBusinessDetails.booksaremaintainedYes;
      //   this.workingrepaymentprogramme = this.userBusinessDetails.workingCapitalRepaymentProgramme;
      //   this.nameandAddressofAssociateConcerns = this.userBusinessDetails.nameandAddressofAssociateConcerns;
      //   this.difficulties = this.userBusinessDetails.difficulties;
      //   this.commoditiesTraded = this.userBusinessDetails.commoditiesTraded;
      //   this.majorSuppliers = this.userBusinessDetails.majorSuppliers;
      //   this.numberOfFirms = this.userBusinessDetails.numberOfFirms;
      //   this.competationSuccessfull = this.userBusinessDetails.competationSuccessfull;
      //   this.year1 = this.userBusinessDetails.year1;
      //   this.year2 = this.userBusinessDetails.year2;
      //   this.sales1 = this.userBusinessDetails.sales1;
      //   this.sales2 = this.userBusinessDetails.sales2;
      //   this.netProfit1 = this.userBusinessDetails.netProfit1;
      //   this.netProfit2 = this.userBusinessDetails.netProfit2;
      //   this.remarks1 = this.userBusinessDetails.remarks1;
      //   this.remarks2 = this.userBusinessDetails.remarks2;
      //   this.anticipatedYear = this.userBusinessDetails.anticipatedYear;
      //   this.anticipatedSales = this.userBusinessDetails.anticipatedSales;
      //   this.anticipatedProfit = this.userBusinessDetails.anticipatedProfit;
      //   this.anticipatedRemarks = this.userBusinessDetails.anticipatedRemarks;
      //   this.feasibleYear = this.userBusinessDetails.feasibleYear;
      //   this.feasibleSales = this.userBusinessDetails.feasibleSales;
      //   this.feasibleNetProfit = this.userBusinessDetails.feasibleNetProfit;
      //   this.feasibleRemarks = this.userBusinessDetails.feasibleRemarks;
      //   this.itAssessmentYear = this.userBusinessDetails.itAssessmentYear;
      //   this.itAmounPaid = this.userBusinessDetails.itAmounPaid;
      //   this.stAssessmentYear = this.userBusinessDetails.stAssessmentYear;
      //   this.stAmountPaid = this.userBusinessDetails.stAmountPaid;
      //   this.avgLvlValue = this.userBusinessDetails.avgLvlValue;
      //   this.avgLvlMargin = this.userBusinessDetails.avgLvlMargin;
      //   this.avgLvlPermissibleLimit = this.userBusinessDetails.avgLvlPermissibleLimit;
      //   this.avgLvlRemarks = this.userBusinessDetails.avgLvlRemarks;

      //   this.outSatndingValue = this.userBusinessDetails.outSatndingValue;
      //   this.outSatndingMargin = this.userBusinessDetails.outSatndingMargin;
      //   this.outStandingPermissibleLimit = this.userBusinessDetails.outStandingPermissibleLimit;
      //   this.outStandingRemarks = this.userBusinessDetails.outStandingRemarks;
      //   this.creditAvailableSuppliers = this.userBusinessDetails.creditAvailableSuppliers;
      //   this.repaymentProgramme = this.userBusinessDetails.repaymentProgramme;
      //   this.item1 = this.userBusinessDetails.item1;
      //   this.item2 = this.userBusinessDetails.item2;
      //   this.item3 = this.userBusinessDetails.item3;
      //   this.supplier1 = this.userBusinessDetails.supplier1;
      //   this.suppier2 = this.userBusinessDetails.suppier2;
      //   this.supplier3 = this.userBusinessDetails.supplier3;
      //   this.cost = this.userBusinessDetails.cost;
      //   this.cost1 = this.userBusinessDetails.cost1;
      //   this.cost2 = this.userBusinessDetails.cost2;
      //   this.lessapplicantscontribution = this.userBusinessDetails.lessapplicantscontribution;
      //   this.loanEquipmentRupees = this.userBusinessDetails.loanEquipmentRupees;
      //   this.reapymentProgamme = this.userBusinessDetails.reapymentProgamme;
      //   this.security = this.userBusinessDetails.security;
      //   this.timeToErect = this.userBusinessDetails.timeToErect;
      //   this.startUpPeriod = this.userBusinessDetails.startUpPeriod;
      //   this.detailsofImmovableProperty = this.userBusinessDetails.avgLvlRemarks;
      //   this.firmName = this.userBusinessDetails.firmName;
      //   this.workingCapitalRequired = this.userBusinessDetails.workingCapitalRequired;
      //   this.guarantorValue = this.userBusinessDetails.workingCapitalRequired;
      //   this.desc1 = this.userBusinessDetails.desc1;
      //   this.desc1Rs = this.userBusinessDetails.desc1Rs;
      //   this.desc2 = this.userBusinessDetails.desc2;
      //   this.desc2Rs = this.userBusinessDetails.desc2Rs;
      //   this.desc3 = this.userBusinessDetails.desc3;
      //   this.desc3Rs = this.userBusinessDetails.desc3Rs;
      //   this.desc1 = this.userBusinessDetails.desc1;

      // }

      // //familydetails, fixedassetdetails, vehicle loan  - rajeshwari
      // if (this.alldetails.userFamilyDetails != null || this.alldetails.userFamilyDetails != undefined) {
      //   this.familyDetails = this.alldetails.userFamilyDetails;
      // }
      // if (this.alldetails.userHomeVehicleDetails != null || this.alldetails.userHomeVehicleDetails != undefined) {
      //   this.fixedassetDetails = this.alldetails.userHomeVehicleDetails;
      // }
      // if (this.alldetails.educationLoanDetails != null || this.alldetails.educationLoanDetails != undefined) {
      //   this.educationLoanDetails = this.alldetails.educationLoanDetails;
      // }
      // if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
      //   this.customerreqdata = this.alldetails.customerRequestdata;
      // }
     
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

    })
  }
  
  // getmutualfunddetails() {
  //   this.businessService.getAccidentInsurancedetails(this.customerid).subscribe((respose: any) => {
  //     this.alldetails = respose;
  //     this.userBasicDetailsDetails = this.alldetails.userBasicDetailsDetails;
  //     if (this.alldetails.userBankandIdentityDetails != null || this.alldetails.userBankandIdentityDetails != undefined) {
  //       this.userBankDetails = this.alldetails.userBankandIdentityDetails;
  //       this.bankdetails = this.alldetails.userBankandIdentityDetails[0].bankdetails;
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
  //     if (this.alldetails.accidentInsuranceDetails != null || this.alldetails.accidentInsuranceDetails != undefined) {
  //       this.accidentInsurancedata = this.alldetails.accidentInsuranceDetails;
  //     }
  //     if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
  //       this.customerreqdata = this.alldetails.customerRequestdata;
  //     }
  //     // console.log(this.alldetails)
  //   });
  // }

  getmutualfunddetails() {
    var aaa =this.customerid+","+this.mailticketid;
    this.businessService.getAccidentInsurancedetails(aaa).subscribe((respose: any) => {
      this.accidentInsurancedata = respose;
      console.log(this.terminsurancedetails);
    });
  }

  approveAI() {
    if (this.workflwid == '1008') {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId: null,
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

}

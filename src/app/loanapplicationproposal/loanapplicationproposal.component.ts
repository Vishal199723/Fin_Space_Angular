import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from '../Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-loanapplicationproposal',
  templateUrl: './loanapplicationproposal.component.html',
  styleUrls: ['./loanapplicationproposal.component.css']
})
export class LoanapplicationproposalComponent implements OnInit {
  roleid: string;
  uid: string;
  groupId: string;
  loanproposedatafor: string;
  WFStatusList: any;
  operation: any;
  selectedstatusid: any;
  UserDataforProposal: any;
  data: string;
  loanapplicationcustomerid: string;
  mailid: any;
  transid: any;
  loanapplicationaccntnumber: string;
  loanid: string;custid: string;
  comments: any;namee: any;
  dobb: any;annualincome: any;requestedloanamount: any;
  presentcostofloansecurity: any;loanamount: any;
  ServiceRequestTypes: any;
  LoanSecurityList: any;
  loansecurityid: any;
  servicerequesttypeid: any;
  ladata: string;
  Loanapplicationdata: any;
  showaccntnumber:any;accountnum:any;

  constructor(private messageService: MessageService,private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService,private userservice: UserDetailsService,) { 
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.loanapplicationcustomerid= localStorage.getItem("loanapplicationcustomerid");
      this.loanapplicationaccntnumber= localStorage.getItem("loanapplicationaccntnumber");
      this.mailid=0;
      this.transid=0;
    }
  }

  ngOnInit() {
    this.loanproposedatafor =  localStorage.getItem("laonapplicationdata");
    

    this.loanid=this.loanapplicationaccntnumber;
    this.custid=this.loanapplicationcustomerid;

    this.ladata = localStorage.getItem("ladata");
    if (this.ladata != null) {
      var bb = this.ladata.split('-');
      this.mailid = bb[2];
      this.transid = bb[1];
      this.custid = bb[0];
    }
    if(this.mailid != 0 || this.mailid!=undefined){
      this.GetDatafromLoanApplicationProposaltable();
    }
    this.data = this.custid + "," + this.transid + "," + this.mailid;
    this.GetStatusList();
    this.GetUserData();
    this.GetServiceRequestTypes();
    this.GetLoanSecurityList();
   
  }
  GetDatafromLoanApplicationProposaltable(){
    this.spinner.show()
    this.mailservice.loanapplicationdata(this.custid).subscribe((data: any) => {
      this.Loanapplicationdata = data;
      this.loanamount=this.Loanapplicationdata.loanAmount;
      this.presentcostofloansecurity=this.Loanapplicationdata.presentCostLS;
      this.loanid = this.Loanapplicationdata.loanId;
      this.spinner.hide()
    })
  }
  GetStatusList() {
    this.spinner.show()
    this.mailservice.GetStatusList(this.roleid).subscribe((data: any) => {
      this.WFStatusList = data;
      this.spinner.hide()
    })
  }
  GetServiceRequestTypes() {
    this.spinner.show()
    this.mailservice.GetServiceRequestTypesList().subscribe((data: any) => {
      this.ServiceRequestTypes = data;
      this.spinner.hide()
    })
  }
  GetLoanSecurityList() {
    this.spinner.show()
    this.mailservice.Getloansecuritylist().subscribe((data: any) => {
      this.LoanSecurityList = data;
      this.spinner.hide()
    })
  }

  GetUserData() {
    this.spinner.show()
    this.userservice.getdataforsbaccount(this.data).subscribe((respose: any) => {
      this.spinner.hide();
      this.UserDataforProposal = respose;
       this.custid = this.UserDataforProposal.customerId;
       this.namee = this.UserDataforProposal.firstName + " " + this.UserDataforProposal.lastName;
       this.dobb = this.UserDataforProposal.dob;
       this.annualincome = this.UserDataforProposal.familyDetails.allFamilyDetails.annualIncomeAmount;
       this.requestedloanamount=this.UserDataforProposal.loanAmount;
      console.log(this.UserDataforProposal);
      this.spinner.hide();
    });
  }

  onselecttouser(id) {
    this.operation = id;
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
  }
  onSelectServiceType(idd){
    this.servicerequesttypeid = idd;
  }
  onSelectloansecurity(id){
    this.loansecurityid = id;
  }

  SaveLoanApplicationDetailsWorkflow = function () {
    var loanapplicationdata = {
      Id: 0,
      LoanId:  this.loanid,
      CustomerId: this.custid,
      CustomerName: this.namee,
      AnnualIncome: this.annualincome,
      DateofBirth:this.dobb ,
      LoanAmount: this.loanamount,
      RequestedLoanAmount: this.requestedloanamount,
      TypeofAdvance: this.servicerequesttypeid,
      Comment: this.comments,
      MailId: this.GetMailId(this.mailid),
      FromUser: this.uid,
      ToUser: this.GetGroupId(this.groupId),
      WorkflowState: this.selectedstatusid,
      TransId: this.transid,
      LoanPlan: null,
      LoanSecId: this.loansecurityid,
      LSPresentCost: this.presentcostofloansecurity
  };
    this.workflowtrnsservice.saveLoanApplicationDetails(loanapplicationdata).subscribe((respose: any) => {
    //this.workflowtrnsservice.saveLoanApplicationDetails(loanapplicationdata).then(function (response) {
        alert('Mail Sent Successfully');
        this.router.navigate(['/inbox']);
    });
};
GetMailId(data) {
  var mailid = 0;
  if (data !== undefined) {
      mailid = data;
  }
  else {
      mailid = 0;
  }
  return mailid;
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
}

import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from '../Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-sanctioned-loans',
  templateUrl: './sanctioned-loans.component.html',
  styleUrls: ['./sanctioned-loans.component.css']
})
export class SanctionedLoansComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  Loandocdatafor: string;
  WFStatusList: any;
  operation: any;
  selectedstatusid: any;
  loanapplicationcustomerid: any;
  data: any;
  transid: any;
  CustId: any;
  mailid: any;
  UserDataforSBProposal: any;
  customerid: any;
  firstname: string; accountnum: any;
  Loanapplicationdata: any; sanctionedamount: any;
  loanid: any; comments: any; dateofsanctioned: any;
  CusomerDocuments: any; loantype: any;
  ladata: string;
  SanctionedAmounts: any;
  downpath: any;seleteddownload: boolean;
  fileurl: any;
  constructor(private messageService: MessageService,private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService, private userservice: UserDetailsService,) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
    }
  }

  ngOnInit() {
    this.transid = 0; this.mailid = 0;
    this.operation = null;
    this.Loandocdatafor = localStorage.getItem("loandocumentation");
    this.loanapplicationcustomerid = localStorage.getItem("loanapplicationcustomerid");
    this.GetStatusList();
    this.CustId = this.loanapplicationcustomerid;

    this.ladata = localStorage.getItem("ladata");
    if (this.ladata != null) {
      var bb = this.ladata.split('-');
      this.mailid = bb[2];
      this.transid = bb[1];
      this.CustId = bb[0];
    }

    this.data = this.CustId + "," + this.transid + "," + this.mailid;
    this.GetUserData();
    this.GetDatafromLoanApplicationProposaltable();
    this.GetDocuments();
    if (this.mailid != 0 || this.mailid != undefined) {
      this.GetCustomersanctionedAmount();
    }
  }
  GetStatusList() {
    this.spinner.show()
    this.mailservice.GetStatusList(this.roleid).subscribe((data: any) => {
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

  GetDatafromLoanApplicationProposaltable() {
    this.spinner.show()
    this.mailservice.loanapplicationdata(this.CustId).subscribe((data: any) => {
      this.Loanapplicationdata = data;
      this.loanid = this.Loanapplicationdata.loanId;
      this.spinner.hide()
    })
  }
  GetDocuments() {
    this.spinner.show()
    this.mailservice.getuserdocumnets(this.CustId).subscribe((respose: any) => {
      this.spinner.hide();
      this.CusomerDocuments = respose.allBankandIdentityDetails;
    });
  }
  GetCustomersanctionedAmount() {
    this.spinner.show()
    this.mailservice.getusersanctionedamount(this.CustId).subscribe((respose: any) => {
      this.spinner.hide();
      this.SanctionedAmounts = respose;
      this.sanctionedamount = this.SanctionedAmounts.sanctionedAmount;
      this.dateofsanctioned = this.SanctionedAmounts.dateofSanctioned;
      this.loantype = this.SanctionedAmounts.loanType;
    });
  }
  GetUserData() {
    this.spinner.show()
    this.userservice.getdataforsbaccount(this.data).subscribe((respose: any) => {
      this.spinner.hide();
      this.UserDataforSBProposal = respose;
      this.customerid = this.UserDataforSBProposal.customerId;
      this.firstname = this.UserDataforSBProposal.firstName + " " + this.UserDataforSBProposal.lastName;
      console.log(this.UserDataforSBProposal);
      this.spinner.hide();
    });
  }

  SaveLoanDocumentationWrkflwDetails = function () {
if (this.roleid == "1009" || this.roleid == "1010") {
  var loanapplicationdata = {
    Id: 0,
    LoanId: this.loanid,
    //ToUser: $scope.LoanDocumentdata.customerId,
    CustomerId: this.customerid,
    CustomerName: this.firstname,
    SanctionedAmount: this.sanctionedamount,
    DateofSanctioned: this.dateofsanctioned,
    LoanType: this.loantype,
    Comment: this.comments,
    MailId: this.GetMailId(this.mailid),
    FromUser: this.uid,
    ToUser: this.GetGroupId(this.groupId),
    WorkflowState: this.selectedstatusid,
    TransId: this.transid

  };
  this.workflowtrnsservice.saveppuLoanDocumentDetails(loanapplicationdata).subscribe((respose: any) => {
    //this.workflowtrnsservice.saveLoanDocumentDetails(loanapplicationdata).then(function (response) {
    alert('Mail Sent Successfully');
    this.router.navigate(['/inbox']);
  });
}
else{
  var loanapplicationdata = {
    Id: 0,
    LoanId: this.loanid,
    //ToUser: $scope.LoanDocumentdata.customerId,
    CustomerId: this.customerid,
    CustomerName: this.firstname,
    SanctionedAmount: this.sanctionedamount,
    DateofSanctioned: this.dateofsanctioned,
    LoanType: this.loantype,
    Comment: this.comments,
    MailId: this.GetMailId(this.mailid),
    FromUser: this.uid,
    ToUser: this.GetGroupId(this.groupId),
    WorkflowState: this.selectedstatusid,
    TransId: this.transid

  };
  this.workflowtrnsservice.saveLoanDocumentDetails(loanapplicationdata).subscribe((respose: any) => {
    //this.workflowtrnsservice.saveLoanDocumentDetails(loanapplicationdata).then(function (response) {
    alert('Mail Sent Successfully');
    this.router.navigate(['/inbox']);
  });
}
    
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

  viewdocument(data) {
    if(data == 1){
      this.fileurl = this.CusomerDocuments.aadharFile;
    }
    if(data == 2){
      this.fileurl = this.CusomerDocuments.bankStatements;
    }
    if(data == 3){
      this.fileurl = this.CusomerDocuments.gstCert;
    }
    if(data == 4){
      this.fileurl = this.CusomerDocuments.itReturnsFile;
    }
    if(data == 5){
      this.fileurl = this.CusomerDocuments.passportFile;
    }
    localStorage.setItem('ViewPdffile',  this.fileurl);
    this.router.navigate(['viewdoc']);
  }


    // Download File
    DownloadFile(data) {
      if(data == 1){
        this.fileurl = this.CusomerDocuments.aadharFile;
      }
      if(data == 2){
        this.fileurl = this.CusomerDocuments.bankStatements;
      }
      if(data == 3){
        this.fileurl = this.CusomerDocuments.gstCert;
      }
      if(data == 4){
        this.fileurl = this.CusomerDocuments.itReturnsFile;
      }
      if(data == 5){
        this.fileurl = this.CusomerDocuments.passportFile;
      }
      this.downpath = this.fileurl;
      this.seleteddownload = true;
      window.open(this.downpath);
  
    }
}

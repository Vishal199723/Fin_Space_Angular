import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from '../Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-disburse-loan',
  templateUrl: './disburse-loan.component.html',
  styleUrls: ['./disburse-loan.component.css']
})
export class DisburseLoanComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  loandisbusdatafor: string;
  WFStatusList: any;
  operation: any;
  selectedstatusid: any;
  loanamount: any;
  loandisburmentcustomerid: string;
  mailid: any;
  transid: any; data: any; custid: string;
  UserDataforProposal: any; customername: string;
  loanid: any; Loanapplicationdata: any;
  sanctionedamount: any; dateofsanctioned: any;
  comments: any; loantype: any; disburseamount: any;
  ladata: string;

  constructor(private messageService: MessageService,private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService, private userservice: UserDetailsService,) {
      this.messageService.sendSession('true');

      if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
    }
  }

  ngOnInit() {
    this.mailid = 0;
    this.transid = 0;
    this.operation = null;
    this.loandisbusdatafor = localStorage.getItem("groupId");
    this.loandisburmentcustomerid = localStorage.getItem("laondisbuscustomerid");
    this.custid = this.loandisburmentcustomerid
    this.GetStatusList();
    
    this.ladata = localStorage.getItem("ladata");
    if (this.ladata != null) {
      var bb = this.ladata.split('-');
      this.mailid = bb[2];
      this.transid = bb[1];
      this.custid = bb[0];
    }

    this.data = this.custid + "," + this.transid + "," + this.mailid;
    if(this.mailid != 0 || this.mailid!=undefined){
      this.GetDisbursmentAmount();
    }
    this.GetUserData();
    this.GetDatafromLoanApplicationProposaltable();
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

  GetUserData() {
    this.spinner.show()
    this.userservice.getdataforsbaccount(this.data).subscribe((respose: any) => {
      this.spinner.hide();
      this.UserDataforProposal = respose;
      this.custid = this.UserDataforProposal.customerId;
      this.customername = this.UserDataforProposal.firstName + " " + this.UserDataforProposal.lastName;
      console.log(this.UserDataforProposal);
      this.spinner.hide();
    });
  }

  GetDatafromLoanApplicationProposaltable() {
    this.spinner.show()
    this.mailservice.loanapplicationdatafordisburment(this.custid).subscribe((data: any) => {
      this.Loanapplicationdata = data;
      this.sanctionedamount = this.Loanapplicationdata.sanctionedAmount;
      this.dateofsanctioned = this.Loanapplicationdata.dateofSanctioned;
      this.loanid = this.Loanapplicationdata.loanId;
      this.loantype = this.Loanapplicationdata.loanType;
      this.spinner.hide()
    })
  }
  GetDisbursmentAmount() {
    this.spinner.show()
    this.mailservice.getdisbursmentamount(this.custid).subscribe((data: any) => {
      this.disburseamount = data;
      this.spinner.hide()
    })
  }

  SaveLoanDisbursementDetails() {
    var loandisbursementdata = {
      Id: 0,
      LoanId: this.loanid,
      CustomerId: this.custid,
      CustomerName: this.customername,
      SanctionedAmount: this.sanctionedamount,
      DateofSanctioned: this.dateofsanctioned,
      LoanType: this.loantype,
      DisbursedAmount: this.disburseamount,
      Comment: this.comments,
      MailId: this.GetMailId(this.mailid),
      FromUser: this.uid,
      ToUser: this.GetGroupId(this.groupId),
      WorkflowState: this.selectedstatusid,
      TransId: this.transid
    };
    this.workflowtrnsservice.saveLoanDisbursementDetails(loandisbursementdata).subscribe((respose: any) => {
      alert('Mail Sent Successfully');
      this.router.navigate(['/inbox']);
    })
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

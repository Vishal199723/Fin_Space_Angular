import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-testworkflow',
  templateUrl: './testworkflow.component.html',
  styleUrls: ['./testworkflow.component.css']
})
export class TestworkflowComponent implements OnInit {
  uid: string;
  roleid: string;
  data: string;
  result: any;
  details: string;
  WFStatusList: any;
  operation: any;
  selectedstatusid: any;
  customerId: any;
  mailId: any;
  transId: any;
  groupId: any;
  comments: any;
  fromUser: any;
  constructor(private messageService: MessageService,private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService,) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");

    }
  }

  ngOnInit() {
    this.GetAlldetails();
    this.GetStatusList();
  }
  GetAlldetails() {
    this.details = localStorage.getItem("getdetails");
    this.workflowtrnsservice.getCustomerAllDetails(this.details).subscribe((data: any) => {
      this.result = data;
      this.customerId = "USR2020071500001";
      this.mailId = 6;
      this.transId = 1026;
      this.fromUser = "EMP46969";
      
    })
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
  SendVerificationtoApprover() {
    this.customerId = "USR2020071500001";
      this.mailId = 6;
      this.transId = 1026;
      this.fromUser = "EMP46969";
      this.comments = "App Verif";
    var mailtocustomer = {
      Id: 0,
      CustomerId: this.customerId,
      MailId: this.mailId,
      TransId: this.transId,
      FromUser: this.uid,
      ToUser: this.GetGroupId(this.groupId),
      GroupId: this.GetGroupId(this.groupId),
      WorkflowState: this.selectedstatusid,
      Comments: this.comments,
    };
console.log(mailtocustomer);
    this.workflowtrnsservice.updateWorkflowofcMail(mailtocustomer).subscribe((data: any) => {
      this.WFStatusList = data;
      this.spinner.hide()
    })
  }

  SendVerificationtoCustomer() {
    var mailtocustomer = {
      Id: 0,
      CustomerId: this.customerId,
      MailId: this.mailId,
      TransId: this.transId,
      FromUser: this.uid,
      ToUser: this.fromUser,
      WorkflowState: this.selectedstatusid,
      Comments: this.comments,
    };

    this.workflowtrnsservice.updateWorkflowMail(mailtocustomer).subscribe((data: any) => {
      alert('Mail Sent Successfully');
      this.router.navigate(['/inbox']);
    })

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

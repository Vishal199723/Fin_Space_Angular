import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-sbacount',
  templateUrl: './sbacount.component.html',
  styleUrls: ['./sbacount.component.css']
})
export class SbacountComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  sbadata: string;
  result: any;
  customerId: any;
  mailId: any;
  transId: any;
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
  }

  GetAlldetails() {
    this.sbadata = localStorage.getItem("sbaccount");
    this.workflowtrnsservice.getSBAMailData(this.sbadata).subscribe((data: any) => {
      this.result = data;
      this.customerId = this.result.custid;
      this.mailId = this.result.mailid;
      this.transId = this.result.transid;
      this.fromUser = this.result.fromuser
    })
  }

}

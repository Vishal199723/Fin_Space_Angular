import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-loanapplicationapprovedlist',
  templateUrl: './loanapplicationapprovedlist.component.html',
  styleUrls: ['./loanapplicationapprovedlist.component.css']
})
export class LoanapplicationapprovedlistComponent implements OnInit {

  cutlist: any;
  uid: string;
  roleid: string;
  groupId: string;

  constructor(private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService, private messageService: MessageService,) {
      if (localStorage.getItem('IsLoggedIn') == "true") {
        this.uid = localStorage.getItem("userId");
        this.roleid = localStorage.getItem("role");
        this.groupId = localStorage.getItem("groupId");
  
      }
      this.messageService.sendSession('true');

     }

  ngOnInit() {
    this.GetLoanApplicationCustList();
  }
  GetLoanApplicationCustList() {
    this.spinner.show()
    this.workflowtrnsservice.getloanapplist().subscribe((data: any) => {
      this.cutlist = data;
      this.spinner.hide()
    })
  }

  openloanform(data){
    localStorage.setItem("loanapplicationcustomerid",data.customerId);
    localStorage.setItem("loanapplicationaccntnumber",data.accountNumber);
    localStorage.setItem("laonapplicationdata",data)
    this.router.navigate(['/loanapplication']);
  }
}

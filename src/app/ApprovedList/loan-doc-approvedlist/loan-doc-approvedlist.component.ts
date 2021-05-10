import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-loan-doc-approvedlist',
  templateUrl: './loan-doc-approvedlist.component.html',
  styleUrls: ['./loan-doc-approvedlist.component.css']
})
export class LoanDocApprovedlistComponent implements OnInit {

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
    this.GetLoanDocCustList();
  }
  GetLoanDocCustList() {
    this.spinner.show()
    this.workflowtrnsservice.getloandoclist().subscribe((data: any) => {
      this.cutlist = data;
      this.spinner.hide()
    })
  }

  opendocpage(data){
    localStorage.setItem("loanapplicationcustomerid",data.customerId);
    localStorage.setItem("loandocdata",data)
    this.router.navigate(['/loandocumentation']);
  }
}

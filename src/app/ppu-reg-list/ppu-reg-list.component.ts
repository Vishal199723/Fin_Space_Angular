import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from '../Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-ppu-reg-list',
  templateUrl: './ppu-reg-list.component.html',
  styleUrls: ['./ppu-reg-list.component.css']
})
export class PpuRegListComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  cutlist: any;

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
    this.GetPPULoanApplicationCustList();
  }

  GetPPULoanApplicationCustList() {
    this.spinner.show()
    this.workflowtrnsservice.getppuloanapplist().subscribe((data: any) => {
      this.cutlist = data;
      console.log(this.cutlist);
      this.spinner.hide()
    })
  }

  opendocpage(data){
    localStorage.setItem("loanapplicationcustomerid",data.customerId);
    localStorage.setItem("ppuloandocdata",data.ticketId)
    this.router.navigate(['/ppuloandocumentation']);
  }
}

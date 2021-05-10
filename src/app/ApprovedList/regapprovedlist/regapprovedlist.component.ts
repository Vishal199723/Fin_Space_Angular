import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-regapprovedlist',
  templateUrl: './regapprovedlist.component.html',
  styleUrls: ['./regapprovedlist.component.css']
})
export class RegapprovedlistComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  cutlist: any;

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
    this.GetRegCustList();
  }
  GetRegCustList() {
    this.spinner.show()
    this.workflowtrnsservice.getreglist().subscribe((data: any) => {
      this.cutlist = data;
      this.spinner.hide()
    })
  }
  opensbaccoutform(data){
    localStorage.setItem("sbaccntcustomerid",data.customerId);
    localStorage.setItem("sbaccntproposal",data);
    this.router.navigate(['/sbaccntproposal']);
  }
}

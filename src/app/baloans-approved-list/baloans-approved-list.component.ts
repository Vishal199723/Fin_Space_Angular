import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { MailService } from '../Shared/Mail/mail.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';

@Component({
  selector: 'app-baloans-approved-list',
  templateUrl: './baloans-approved-list.component.html',
  styleUrls: ['./baloans-approved-list.component.css']
})
export class BALoansApprovedListComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  loanlist: any;
  ticketid: any;

  constructor(private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService, private messageService: MessageService,private userservice:UserDetailsService) {
      if (localStorage.getItem('IsLoggedIn') == "true") {
        this.uid = localStorage.getItem("userId");
        this.roleid = localStorage.getItem("role");
        this.groupId = localStorage.getItem("groupId");
  
      }
      this.messageService.sendSession('true');

     }

  ngOnInit() {
    this.GetBAloanapprovedlist();
  }
  GetBAloanapprovedlist() {
    this.spinner.show()
    this.workflowtrnsservice.baloanapprovedlist(this.uid).subscribe((data: any) => {
      this.loanlist = data;
      console.log(this.loanlist);
      this.spinner.hide()
    })
  }

  print(){
    document.getElementById("btndiv").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    window.print();
    document.getElementById("btndiv").style.visibility = "visible";
    document.getElementById("chatimgdisplay").style.visibility = "visible";
  }

  download(){
     var data = document.getElementById('print-section');
     this.spinner.show();
     html2canvas(data).then(canvas => {
       var imgWidth = 100;
       var imgHeight = canvas.height * imgWidth / canvas.width;
       const contentDataURL = canvas.toDataURL('image/jpg')
       var data45 = {
         htmlString: contentDataURL,
         TicketId:"Commission Details"
       }
       this.userservice.SavePdfofCommisionDetails(data45).subscribe((data1: any) => {
         var aa = data1;
         window.open(data1);
 
         this.spinner.hide();
 
       })
     });
  }
}

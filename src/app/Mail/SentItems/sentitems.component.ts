import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';

@Component({
  selector: 'app-sentitems',
  templateUrl: './sentitems.component.html',
  styleUrls: ['./sentitems.component.css']
})
export class SentitemsComponent implements OnInit {
  p: number = 1
  uid: string;
  roleid: string;
  groupId: string;
  SentMails: any=[];
  SearchSentItmes:any
  SDate: any;
  EDate: any;
  SentMailsCopy: any=[];
  accepteddate: any;
  fromdate:any
  todate:any
  constructor(private messageService: MessageService,private router: Router,private mailservice: MailService, private spinner: NgxSpinnerService,private Workflowservice: WorkflowtransService, ) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
    }
   }

  ngOnInit() {
    this.GetSentMails();
  }

  GetSentMails() {
    this.spinner.show()
    this.mailservice.getsentmails(this.uid).subscribe((data: any) => {     
      this.SentMails = data;
      this.SentMailsCopy = data;
      this.spinner.hide()
    })
  }

  gotoinbox(){
    this.router.navigate(['/inbox']);
  }
  gotosentitems(){
    this.router.navigate(['/sentitems']);
  }
  gotodeleteitems(){
    this.router.navigate(['/deleteditems']);
  }

  deletemail(data){
    var ids =  data.mailId+","+data.transId;
    this.spinner.show()
    this.mailservice.deletedmail(ids).subscribe((data: any) => {
      this.spinner.hide();
      alert("Deleted Successfully");
      this.GetSentMails();

    })
  }
  onChangefromdate(event: any) {
    this.SentMails = []
    this.SDate = event
    if (this.EDate == null) {
      for (var i = 0; i < this.SentMailsCopy.length; i++) {
        this.accepteddate = this.SentMailsCopy[i].createdOn;
        let res = this.accepteddate.split('T');
        if (res[0] >= this.SDate) {
          this.SentMails.push(this.SentMailsCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.SentMailsCopy.length; i++) {
        this.accepteddate = this.SentMailsCopy[i].createdOn;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.SentMails.push(this.SentMailsCopy[i])
        }
      }
    }
  }
  onChangeTodate(event: any) {
    this.SentMails = []
    this.EDate = event
    if (this.SDate == null) {
      for (var i = 0; i < this.SentMailsCopy.length; i++) {
        this.accepteddate = this.SentMailsCopy[i].createdOn;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate) {
          this.SentMails.push(this.SentMailsCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.SentMailsCopy.length; i++) {
        this.accepteddate = this.SentMailsCopy[i].createdOn;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.SentMails.push(this.SentMailsCopy[i])
        }
      }
    }
  }
  cancel() {
    this.SentMails = this.SentMailsCopy
    this.fromdate=null
    this.todate=null
    this.SDate=null
    this.EDate=null
  }
 
  sortdate = "1";
  
  sortbydate() {
    if (this.sortdate == "1") {
      this.SentMails.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortdate = "2";
    }
    else if (this.sortdate == "2") {
      this.SentMails.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.sortdate = "1";
  
    }
   
  }
}

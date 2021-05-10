import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { MailService } from 'src/app/Shared/Mail/mail.service';

@Component({
  selector: 'app-deleteitems',
  templateUrl: './deleteitems.component.html',
  styleUrls: ['./deleteitems.component.css']
})
export class DeleteitemsComponent implements OnInit {
  p: number = 1
  uid: string;
  roleid: string;
  groupId: string;
  DeletedMails: any=[];
  SearchDeleteItems:any
  DeletedMailsCopy: any=[];
  SDate: any;
  EDate: any;
  accepteddate: any;
  fromdate:any
  todate:any
  constructor(private messageService: MessageService,private router: Router,private mailservice: MailService, private spinner: NgxSpinnerService) {
    this.messageService.sendSession('true');

    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
    }
   }

  ngOnInit() {
    this.GetDeletedMails();
  }
  GetDeletedMails() {
    this.spinner.show()
    this.mailservice.getdeletedmails(this.uid).subscribe((data: any) => {     
      this.DeletedMails = data;
      this.DeletedMailsCopy = data;

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
  onChangefromdate(event: any) {
    this.DeletedMails = []
    this.SDate = event
    if (this.EDate == null) {
      for (var i = 0; i < this.DeletedMailsCopy.length; i++) {
        this.accepteddate = this.DeletedMailsCopy[i].deletedDate;
        let res = this.accepteddate.split('T');
        if (res[0] >= this.SDate) {
          this.DeletedMails.push(this.DeletedMailsCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.DeletedMailsCopy.length; i++) {
        this.accepteddate = this.DeletedMailsCopy[i].deletedDate;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.DeletedMails.push(this.DeletedMailsCopy[i])
        }
      }
    }
  }
  onChangeTodate(event: any) {
    this.DeletedMails = []
    this.EDate = event
    if (this.SDate == null) {
      for (var i = 0; i < this.DeletedMailsCopy.length; i++) {
        this.accepteddate = this.DeletedMailsCopy[i].deletedDate;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate) {
          this.DeletedMails.push(this.DeletedMailsCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.DeletedMailsCopy.length; i++) {
        this.accepteddate = this.DeletedMailsCopy[i].deletedDate;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.DeletedMails.push(this.DeletedMailsCopy[i])
        }
      }
    }
  }
  cancel() {
    this.DeletedMails = this.DeletedMailsCopy
    this.fromdate=null
    this.todate=null
    this.SDate=null
    this.EDate=null
  }
 
  sortdate = "1";
  
  sortbydate() {
    if (this.sortdate == "1") {
      this.DeletedMails.sort((a, b) => a.deletedDate < b.deletedDate ? -1 : a.deletedDate > b.deletedDate ? 1 : 0)
      this.sortdate = "2";
    }
    else if (this.sortdate == "2") {
      this.DeletedMails.sort((a, b) => a.deletedDate > b.deletedDate ? -1 : a.deletedDate < b.deletedDate ? 1 : 0)
      this.sortdate = "1";
  
    }
   
  }
}

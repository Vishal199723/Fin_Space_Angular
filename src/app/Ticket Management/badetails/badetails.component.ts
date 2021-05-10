import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';

@Component({
  selector: 'app-badetails',
  templateUrl: './badetails.component.html',
  styleUrls: ['./badetails.component.css']
})
export class BADetailsComponent implements OnInit {
  uid: string;
  roleid: string;
  groupId: string;
  useremail: string;
  username: string;
  detailss: string;
  alldetails: any;
  individual: boolean;
  company: boolean;
  partnership: boolean;
  BAId: string;
  MailId: any;
  WorkflowId: any;
  WFStatusList: any;
  BAInd: any;
  BACom: any;
  BAPar: any;
  selectedstatusid: any;
  comments: string;

  constructor(private messageService: MessageService,private businessService: BusinessLoanServiceService,
    private spinner: NgxSpinnerService, private userservice: UserDetailsService,  private router: Router, 
    private workflowtransactionservice: WorkflowtransService,  private mailservice: MailService, 
    private httpservice: HttpClient) { 
      localStorage.setItem("Loder", "0");
   if (localStorage.getItem('IsLoggedIn') == "true") {
     this.uid = localStorage.getItem("userId");
     this.roleid = localStorage.getItem("role");
     this.groupId = localStorage.getItem("groupId");
     this.useremail = localStorage.getItem("Email");
     this.username = localStorage.getItem("fullname")
   }
 }

 ngOnInit() {
  this.comments = "";
   this.individual = false;
   this.company = false;
   this.partnership = false;
   this.detailss = localStorage.getItem("badetailsId");
   if (this.detailss != null) {  
     var aa =    this.detailss.split("-")
     this.BAId= aa[0];
     this.MailId=aa[1];
     this.WorkflowId=aa[2];
     this.GetBAdetails();  
     this.GetStatusList();     
   }
     
     
 }
 GetBAdetails() {
  
   this.businessService.getbadetails(this.BAId).subscribe((response: any) => {
     this.alldetails = response;  
     this.spinner.hide()   
     console.log(this.alldetails);
     var aa =  this.alldetails.allRegDetails.serviceProviderType;  
     if(this.alldetails.allRegDetails.businessAssociateType == "1"){
      this.individual = true;
       this.BAInd =this.alldetails.allRegDetails;
     }    
     else  if(this.alldetails.allRegDetails.businessAssociateType == "2"){
       this.BACom =this.alldetails.allRegDetails;       
      this.company = true;     
     } 
     else  if(this.alldetails.allRegDetails.businessAssociateType == "3"){
      this.partnership = true;
       this.BAPar =this.alldetails.allRegDetails;
     } 
     console.log(this.alldetails);
   })
 }
 GetStatusList() {
   this.spinner.show()
   var aa =  this.WorkflowId +","+ this.roleid;
   this.mailservice.GetStatusList(aa).subscribe((data: any) => {
     this.WFStatusList = data;
     this.spinner.hide()
   })
 }

 onSelectStatus(id) {
  this.selectedstatusid = id;
}
SendBAapprovalStatus = function () {
  var mailtocustomer = {
    CustomerId: this.BAId,
    MailId: this.MailId,
    AccountNumber: this.accountnum,
    FromUser: this.uid,
    ToUser: this.BAId,
    WorkflowState: this.selectedstatusid,
    Comments: this.comments, 
  };
  this.spinner.show();
  this.mailservice.postupdatebaStatusList(mailtocustomer).subscribe((data: any) => {
    var result = data;
    this.spinner.hide();
    if (result != null) {       
      alert('Mail Sent Successfully');
      this.router.navigate(['/inbox']);
    }
    else {
      this.spinner.hide();
      alert("Something went wrong!!")
    }
    console.log(data);
    this.spinner.hide()
  })
   
}

}

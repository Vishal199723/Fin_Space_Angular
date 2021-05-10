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
  selector: 'app-spdetails',
  templateUrl: './spdetails.component.html',
  styleUrls: ['./spdetails.component.css']
})
export class SPDetailsComponent implements OnInit {
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
  SPId: string;
  MailId: any;
  WorkflowId: any;
  WFStatusList: any;
  SPInd: any;
  SPCom: any;
  SPPar: any;
  comments:any;
  selectedstatusid: any;
  constructor(private messageService: MessageService,private businessService: BusinessLoanServiceService,private spinner: NgxSpinnerService,
     private userservice: UserDetailsService,    private router: Router, private workflowtransactionservice: WorkflowtransService,
    private mailservice: MailService, private httpservice: HttpClient) { 
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
    this.individual = false;
    this.company = false;
    this.partnership = false;
    this.comments = "";
    this.detailss = localStorage.getItem("spdetailsId");
    if (this.detailss != null) {  
      var aa =    this.detailss.split("-")
      this.SPId= aa[0];
      this.MailId=aa[1];
      this.WorkflowId=aa[2];
      this.GetSPdetails(); 
      this.GetStatusList();      
    }     
    
  }
  GetSPdetails() {
    this.spinner.show()
    this.GetStatusList();     
    this.businessService.getspdetails(this.SPId).subscribe((response: any) => {
      this.alldetails = response;  
       this.spinner.hide()   
      console.log(this.alldetails);
     var aa =  this.alldetails.allRegDetails.serviceProviderType;
     this.spinner.hide()
      if(this.alldetails.allRegDetails.serviceProviderType == "1"){
        this.SPInd =this.alldetails.allRegDetails;
        this.individual = true;   
      }    
      else  if(this.alldetails.allRegDetails.serviceProviderType == "2"){
        this.SPCom =this.alldetails.allRegDetails;
        this.company = true;        
      } 
      else  if(this.alldetails.allRegDetails.serviceProviderType == "3"){
        this.SPPar =this.alldetails.allRegDetails;
        this.partnership = true;
      } 
     
    })
  }
  GetStatusList() {
    this.spinner.show()
    var aa =  this.WorkflowId+","+ this.roleid;
    this.mailservice.GetStatusList(aa).subscribe((data: any) => {
      this.WFStatusList = data;
      console.log(data);
      this.spinner.hide()
    })
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
  }
  SendSPapprovalStatus = function () {
    var mailtocustomer = {
      CustomerId: this.SPId,
      MailId: this.MailId,
      AccountNumber: this.accountnum,
      FromUser: this.uid,
      ToUser: this.SPId,
      WorkflowState: this.selectedstatusid,
      Comments: this.comments, 
    };
    this.spinner.show();
    this.mailservice.postupdatespStatusList(mailtocustomer).subscribe((data: any) => {
      var result = data;
      this.spinner.hide();
      if (result != null) {       
        alert('Mail Sent Successfully');
        this.router.navigate(['/commissionmaster']);
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

import { Component, OnInit } from '@angular/core';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { CustomerApprovalVM } from '../ViewModels/CustomerApprovalVM';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { MailService } from '../Shared/Mail/mail.service';
import { MessageService } from '../MessageService/meaagse.service';
import { HttpClient } from '@angular/common/http';
import html2canvas from 'html2canvas';
import { UserService } from '../Shared/UserMaster/user.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';

@Component({
  selector: 'app-mutualfunddetails',
  templateUrl: './mutualfunddetails.component.html',
  styleUrls: ['./mutualfunddetails.component.css']
})
export class MutualfunddetailsComponent implements OnInit {
  uid: any;
  mutualfunddetails: any;
  alldetails: any;
  userBankDetails: any;
  userBasicDetailsDetails: any;
  fname;
  mname;
  lname;
  placebirth;
  gender;
  marital;
  mobile;
  dob;
  religion;
  caste;
  qualification;
  occupation;
  email;
  designation;
  //Residential Address
  rPostal;
  rCountry;
  rState;
  rDistrict;
  rAddress1;
  rAddress2;
  //permanent Address
  pPostal;
  pCountry;
  pState;
  pDistrict;
  pAddress1;
  pAddress2;
  familyDetails: any;
  customerreqdata: any;
  workflwid: string;
  useremail: string;
  username: string;
  roleid: string;
  groupId: string;
  detailss: string;
  showapprove: boolean;
  baid: any;
  CertificateDisplay: any=[];
  certificates: any;
  allcertificates: any;
  enableothercertificates: boolean;
  certificatesexist:any=false;
  CertificateList: any;
  customerid: string;
  transid: string;
  mailid: string;
  mailticketid: string;
  selectedstatusid: any;
  comments: any;
  ApproveFiles: string | Blob;
  files: any;
  operation: any;
  WFStatusList: Object;
  userdetailsfor: string;
  userBusinessDetails: any;
  funddata: any;
  ticketid: string;
  workflowid: string;
  workflowidfrommail: string;
  ProposID: string;
  role: string;
  constructor(private messageService: MessageService,private businessloanservice: BusinessLoanServiceService, private spinner: NgxSpinnerService, private router: Router,
    private workflowtrnsservice: WorkflowtransService, private mailservice: MailService,private businessService: BusinessLoanServiceService, private httpservice: HttpClient,
    private userservice:UserDetailsService) { 
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
      this.role = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.detailss =  localStorage.getItem("custidwithmailid");
      this.ticketid = localStorage.getItem("TicketId");

    }
    this.uid = localStorage.getItem("userId");

    if (this.uid.includes("USR")) {
      this.showapprove = true;
    }
    else {
      this.showapprove = false;
    }

  }

  ngOnInit() {
 
    this.workflwid = localStorage.getItem("workflowid");
    this.baid = localStorage.getItem("baid");
    this.detailss = localStorage.getItem("custidwithmailid");
    var aa = this.detailss.split('-');
    // if(!aa[0].includes("USR") == undefined){
      this.customerid = aa[0];
    // }
    // else
    // {
    //   this.customerid = this.uid ;
    // 

    this.customerid = aa[0]; 
    this.transid = aa[1];
    this.mailid = aa[2];
    this.mailticketid = aa[3];
    this.workflowid = aa[4];
    if(this.workflowidfrommail=="1"){
      this.ticketid = localStorage.getItem("Prospectdata");
    }
    this.getmutualfunddetails();
    //this.backendServices();
//this.backendServices();
    this.GetDraftData();
  }

  
  onselecttouser(id) {
    this.operation = id;
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
  }
  
  getmutualfunddetails(){
    if (this.mailticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.mailticketid

    }
    this.businessloanservice.getmutualfunddetails(sendid).subscribe((respose: any) => {
      this.alldetails = respose;
      //this.mutualfunddetails = respose;
      if (this.alldetails.mutualFundDetails != null || this.alldetails.mutualFundDetails != undefined) {
        this.mutualfunddetails = this.alldetails.mutualFundDetails;
      }
      if (this.alldetails.customerRequestdata != null || this.alldetails.customerRequestdata != undefined) {
        this.customerreqdata = this.alldetails.customerRequestdata;
      }

      // console.log(this.alldetails)
    });
  }
  toCamelCase(key, value) {
    if (value && typeof value === 'object'){
      for (var k in value) {
        if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
          value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
          delete value[k];
        }
      }
    }
    return value;
  }
  GetDraftData(){
    if (this.mailticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.mailticketid

    }
    this.customerid = localStorage.getItem("customerId");
   // this.ticketid = localStorage.getItem("TicketId");
    var info = {
      userid : this.customerid,
      TicketId:  sendid
    }
     this.spinner.show();
     this.businessloanservice.mutualfunddata(info).subscribe((data1:any)=>{
      let data = JSON.parse(data1,this.toCamelCase);

       this.alldetails = data;  
       this.spinner.hide();

       if (this.alldetails.mutualFundDetails != null || this.alldetails.mutualFundDetails != undefined) {
        this.mutualfunddetails = this.alldetails.mutualFundDetails;
      }
       this.mutualfunddetails = this.alldetails.mutualFundDetails;
       if(this.alldetails.certificates.length!=0){
        this.allcertificates=this.alldetails.certificates
        this.certificatesexist = true

        for (let index = 0; index < this.allcertificates.length; index++) {
          if (this.allcertificates[index].actualCertificateName == null) {
            this.CertificateDisplay.push(this.allcertificates[index]);
          }
        }
        for (let index = 0; index < this.allcertificates.length; index++) {
          if (this.allcertificates[index].actualCertificateName != null) {
            this.enableothercertificates=true
          }
          break
        }
  
      }  
     })
   }
//  backendServices() {
//     this.userdetailsfor = this.customerid + ',' + this.mailticketid;
//     this.businessService.getBusinessLoanDetailsUser(this.userdetailsfor).subscribe((response: any) => {
//       this.alldetails = response;   
//       if(this.alldetails.allCertificateDetails.length!=0){
//         this.allcertificates=this.alldetails.allCertificateDetails
//         this.certificatesexist = true

//         for (let index = 0; index < this.allcertificates.length; index++) {
//           if (this.allcertificates[index].actualCertificateName == null) {
//             this.CertificateDisplay.push(this.allcertificates[index]);
//           }
//         }
//         for (let index = 0; index < this.allcertificates.length; index++) {
//           if (this.allcertificates[index].actualCertificateName != null) {
//             this.enableothercertificates=true
//           }
//           break
//         }
  
//       }

//       console.log(response);
//     })
//   }
  approve() {
    if (this.workflwid == '1008') {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId: null,
        WorkflowId: this.workflwid,
        ComplaintId: this.customerreqdata.complaintId,
        BusinessAssociateId: this.baid
      }
      this.spinner.show();
      this.businessloanservice.customerapprovalandreqticket(inputRequest).subscribe(
        (data: any) => {
          this.spinner.hide();
          this.router.navigate(['/customerdashboard']);
        });
    }
    else {
      const inputRequest: CustomerApprovalVM = {
        CustomerId: localStorage.userId,
        TicketId: null,
        WorkflowId: null,
        ComplaintId: null,
        BusinessAssociateId: null
      }
      this.spinner.show();
      this.businessloanservice.customerapproval(inputRequest).subscribe(
        (data: any) => {
          this.spinner.hide();
          this.router.navigate(['/customerdashboard']);
        });
    }
    this.spinner.show();
    // this.businessService.customerapproval(inputRequest).subscribe(
    //   (data: any) => {
    //     this.spinner.hide();
         this.router.navigate(['/customerdashboard']);
    //   });
  }
  EditMutualfundDetails(){
    this.router.navigate(['Mutualfund/'])
  }
  EditCertificatesDetails(){
    this.router.navigate(['Mutualfund/'])
  //  localStorage.setItem("editloanform", "certificates")
  }
  SendVerificationtoApprover() {

    if (this.roleid == "1011" || this.roleid == "1012") {
      var mailtocustomer = {
        Id: 0,
        CustomerId: this.customerid,
        MailId: this.mailid,
        TransId: this.transid,
        FromUser: this.uid,
        ToUser: this.uid,
        GroupId: null,
        WorkflowState: this.selectedstatusid,
        Comments: this.comments,
        TickedId: this.mailticketid
      };
      console.log(mailtocustomer);
      const frmData = new FormData();
      frmData.append("CustomerData", JSON.stringify(mailtocustomer));

      frmData.append("ApproveFiles", this.ApproveFiles);
      this.spinner.show();

      this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostPPUUpdateWorkflowOfcMail/', frmData).subscribe(
        data => {
          if (data != null) {
            this.WFStatusList = data;
            this.spinner.hide();
            alert('Mail Sent Successfully');
            this.router.navigate(['/inbox']);
          }
          else {
            this.spinner.hide();
            alert("Something went wrong!!")
          }
        });

    }
    else {

      var mailtocustomer = {
        Id: 0,
        CustomerId: this.customerid,
        MailId: this.mailid,
        TransId: this.transid,
        FromUser: this.uid,
        ToUser: this.uid,
        GroupId: null,
        WorkflowState: this.selectedstatusid,
        Comments: this.comments,
        TickedId: this.mailticketid
      };
      console.log(mailtocustomer);
      const frmData = new FormData();
      frmData.append("CustomerData", JSON.stringify(mailtocustomer));

      frmData.append("ApproveFiles", this.ApproveFiles);
      this.spinner.show();

      this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostUpdateWorkflowOfcMail/', frmData).subscribe(
        data => {
          if (data != null) {
            this.WFStatusList = data;
            this.spinner.hide();
            alert('Mail Sent Successfully');
            this.router.navigate(['/inbox']);
          }
          else {
            this.spinner.hide();
            alert("Something went wrong!!")
          }
        });

    }

  }
 

  SendVerificationtoCustomer() {
    var mailtocustomer = {
      Id: 0,
      CustomerId: this.customerid,
      MailId: this.mailid,
      TransId: this.transid,
      FromUser: this.uid,
      ToUser: this.customerid,
      WorkflowState: this.selectedstatusid,
      Comments: this.comments,
      TickedId: this.mailticketid

    };
    const frmData = new FormData();
    frmData.append("CustomerData", JSON.stringify(mailtocustomer));

    frmData.append("ApproveFiles", this.ApproveFiles);
    this.spinner.show();
    this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostUpdateWorkflowMail/', frmData).subscribe(
      data => {
        if (data != null) {
          this.spinner.hide();
          alert('Mail Sent Successfully');
          this.router.navigate(['/inbox']);
        }
        else {
          this.spinner.hide();
          alert("Something went wrong!!")
        }
      });

  }
  onChangeApproveFiles(event) {
    var fileslist = "";
    this.files = [].slice.call(event.target.files);
    console.log(this.files);
    fileslist = this.files[0];
    this.ApproveFiles = fileslist;
  }
  DownloadForm() {
    if (this.mailticketid == null) {
      var sendid = this.ProposID
    }
    else {
      var sendid = this.mailticketid

    }
    // make edit button and uploaded docs to display none
    document.getElementById('downloadid').style.display = 'none';
    
    var data = document.getElementById('print-section');
    html2canvas(data).then(canvas => {
      var imgWidth = 100;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/jpg')
      var data45 = {
        htmlString: contentDataURL,
        TicketId: sendid
      }
      this.spinner.show();
      this.userservice.SavePdf(data45).subscribe((data1: any) => {
        var aa = data1

        // make edit button and uploaded docs to display 

        document.getElementById('downloadid').style.display = 'block';
    
        window.open(data1);

        // var particularclass = document.querySelectorAll('.btn.btn-primary');

        // for (var i = 0; i < particularclass.length; i++) {
        //   (<HTMLButtonElement>particularclass[i]).style.display = "block";
        // }
        this.spinner.hide();

      })
    });
  }
}

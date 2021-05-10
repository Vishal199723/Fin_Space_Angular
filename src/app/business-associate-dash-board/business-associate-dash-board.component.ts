import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketManagerService } from '../Shared/TicketManager/ticket-manager.service';
import { NgxSpinnerService } from 'ngx-spinner';
import getIpAddresses from 'get-ip-addresses';
import getMAC, { isMAC } from 'getmac'
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { MessageService } from '../MessageService/meaagse.service';
import { CustomerDashboardService } from '../Shared/CustomerDashboard/customer-dashboard.service';

@Component({
  selector: 'app-business-associate-dash-board',
  templateUrl: './business-associate-dash-board.component.html',
  styleUrls: ['./business-associate-dash-board.component.css']
})
export class BusinessAssociateDashBoardComponent implements OnInit {
  uid: string;
  prosid: any;
  ShowAssignedDetails: boolean=false;
  ShowCompletedDetails:boolean=false;
  AssignedServicesList: any[];
  AssignSDate: any;
  AssignEDate: any;
  AssignedServicesListCopy: any;
  Assignaccepteddate: any;
  Assigntodate: any;
  Assignfromdate: any;
  ResolvedServiceList: any[];
  CompletedSDate: any;
  CompletedEDate: any;
  ResolvedServiceListCopy: any;
  Completedaccepteddate: any;
  Completedtodate: any;
  Completedfromdate: any;
  SearchCompletedServices:any
  p:number=1
  SearchAssignedServices:any
  PendingApplicationsList: any;
  PendingApplicationsListCopy: any;
  Pendingaccepteddate: any;
  PendingEDate: any;
  PendingSDate: any;
  Pendingtodate: any;
  Pendingfromdate: any;
  ShowPendingApplications: boolean;
  SearchPending:any
  ShowAssignedDetails1: boolean;
  ShowPendingApplications1: boolean;
  ShowCompletedDetails1: boolean;
  constructor(private messageService: MessageService,private Ticketmanagerservice:TicketManagerService,private spinner:NgxSpinnerService,
    private router:Router,private serviceprovservice:ServiceProviderService,private customerdashboardservice:CustomerDashboardService) { 
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if(localStorage.getItem('IsLoggedIn')=="true"){
        this.uid = localStorage.getItem("userId");
      }
      // console.log(getMAC());
      // console.log(getMAC('eth0'));
    }

  ngOnInit() {

  this.AssignedServices();
  this.ResolvedServices();
  this.GetPendingApplications();
  }
  gotoloanapprovedlist(){
    this.router.navigate(["/baloanapprovedlist"])
  }
  gotoinbox(){
    this.router.navigate(["/inbox"])
  }

  GotoBusinessLoan() {    
    var info = {
      Information: "1",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/businessloanform'])
      }
      this.spinner.hide();
    })
    
  }
  GotoFixedDepositLoan() {    
    var info = {
      Information: "1004",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/fdform'])
      }
      this.spinner.hide();
    })
    
  }
  GotoSmallScaleLoan() {
    var info = {
      Information: "4",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/smallscaleloanform'])
      }
      this.spinner.hide();
    })
   
  }

  GotoSuretyLoan() {
    var info = {
      Information: "3",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      this.spinner.hide();

      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/suretyloanform'])
      }
    })
    
  }

  GotoVehicleLoan() {
    var info = {
      Information: "2",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/vehecleloanform'])
      }
      this.spinner.hide();
    })
  }

  GotoVehicleLoanbySBI(){
    var info = {
      Information: "2",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/vehecleloanform'])
        localStorage.setItem("bankname", 'SBI');
      }
      this.spinner.hide();
    })
   
  }

  GotoEducationLoan(){
    var info = {
      Information: "1002",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/Educationloan'])
      }
      this.spinner.hide();
    })
  }

  GotoGoldLoan(){
    var info = {
      Information: "1001",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/Goldloan'])
      }
      this.spinner.hide();
    })
  }

  GotoFixedAssetLoan(){
    var info = {
      Information: "5",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/fixedassetloan'])
      }
      this.spinner.hide();
    })
  }

  GotoProjectLoan(){
    var info = {
      Information: "6",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/Projectloan'])
      }
      this.spinner.hide();
    })
  }

  GotoHomeLoan(){
    var info = {
      Information: "1003",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BALoanFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/homeloan'])
      }
      
    })
  }

  GotoMutualFunds(){   
    var info = {
      Information: "1003",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAMutualfundProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/Mutualfund'])
      }
      
    })
  }

  // print(){
  //   this.ShowAssignedDetails1 = true;
  //   this.ShowAssignedDetails = false;
  //   document.getElementById("ShowAssignedDetails").style.visibility = "hidden";
  //   document.getElementById("btndiv").style.visibility = "hidden";
  //   //document.getElementById("testdiv").style.visibility = "visible";


  //   document.getElementById("chatimgdisplay").style.visibility = "hidden";
  //   document.getElementById("menuslist").style.visibility = "hidden";
  //   window.print();
  //   document.getElementById("btndiv").style.visibility = "visible";
  //   document.getElementById("chatimgdisplay").style.visibility = "visible";
  //   document.getElementById("menuslist").style.visibility = "visible";

  // }
 
  GotoHealthInsurance(){
    var info = {
      Information: "1",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAInsuranceFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/HealthInsurance'])
      }
      
    })
  }

  GotoAccidentInsurance(){
    var info = {
      Information: "5",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAInsuranceFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/AccidentInsurance'])
      }
      
    })
  }
  
  GotoLifeInsurance(){
    var info = {
      Information: "3",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAInsuranceFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/lifeInsurance'])
      }
      
    })
  }

  GotoTermLifeInsurance(){
    var info = {
      Information: "6",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAInsuranceFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/termlifeinsurance'])
      }
      
    })
  }

  GotoHomeInsurance(){
    var info = {
      Information: "2",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAInsuranceFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/HomeInsurance'])
      }
      
    })
  }

  GotoMotorInsurance(){
    var info = {
      Information:"4",
      CusId: this.uid
    }
    this.spinner.show();
    this.serviceprovservice.BAInsuranceFormProId(info).subscribe((data: any) => {
      if (data != null) {
        this.spinner.hide();
        this.prosid = data;
        localStorage.setItem('ProposID', this.prosid);
        this.router.navigate(['/MotorInsurance'])
      }
      
    })
  }
  AssignedServicesTrue() {
    this.ShowAssignedDetails = true;
    this.ShowCompletedDetails = false
    this.ShowPendingApplications=false

  }
  ResolvedServicesTrue() {
    this.ShowAssignedDetails = false;
    this.ShowCompletedDetails = true
    this.ShowPendingApplications=false

  }
  PendingFormTrue() {
    this.ShowPendingApplications=true
    this.ShowAssignedDetails = false;
    this.ShowCompletedDetails = false
  }
  GetPendingApplications() {
    this.spinner.show();
    this.customerdashboardservice.GetPendingApplication(this.uid).subscribe((data: any) => {
      this.PendingApplicationsList = data;
      this.PendingApplicationsListCopy = data;
      this.spinner.hide();

    })
  }
  onChangePendingFormfromdate(event: any) {
    this.PendingApplicationsList = []
    this.PendingSDate = event
    if (this.PendingEDate == null) {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Pendingaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Pendingaccepteddate.split('T');
        if (res[0] >= this.PendingSDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Pendingaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Pendingaccepteddate.split('T');
        if (res[0] <= this.PendingEDate && res[0] >= this.PendingSDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
  }
  onChangePendingFormTodate(event: any) {
    this.PendingApplicationsList = []
    this.PendingEDate = event
    if (this.PendingSDate == null) {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Pendingaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Pendingaccepteddate.split('T');
        if (res[0] <= this.PendingEDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Pendingaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Pendingaccepteddate.split('T');
        if (res[0] <= this.PendingEDate && res[0] >= this.PendingSDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
  }
  cancelPendingForm() {
    this.PendingApplicationsList = this.PendingApplicationsListCopy
    this.Pendingtodate = null
    this.Pendingfromdate = null
    this.PendingSDate=null
    this.AssignSDate=null
  }
  onChangeAssignfromdate(event: any) {
    this.AssignedServicesList = []
    this.AssignSDate = event
    if (this.AssignEDate == null) {
      for (var i = 0; i < this.AssignedServicesListCopy.length; i++) {
        this.Assignaccepteddate = this.AssignedServicesListCopy[i].lastUpdated;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] >= this.AssignSDate) {
          this.AssignedServicesList.push(this.AssignedServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.AssignedServicesListCopy.length; i++) {
        this.Assignaccepteddate = this.AssignedServicesListCopy[i].lastUpdated;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.AssignedServicesList.push(this.AssignedServicesListCopy[i])
        }
      }
    }
  }
  onChangeAssignTodate(event: any) {
    this.AssignedServicesList = []
    this.AssignEDate = event
    if (this.AssignSDate == null) {
      for (var i = 0; i < this.AssignedServicesListCopy.length; i++) {
        this.Assignaccepteddate = this.AssignedServicesListCopy[i].lastUpdated;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate) {
          this.AssignedServicesList.push(this.AssignedServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.AssignedServicesListCopy.length; i++) {
        this.Assignaccepteddate = this.AssignedServicesListCopy[i].lastUpdated;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.AssignedServicesList.push(this.AssignedServicesListCopy[i])
        }
      }
    }
  }
  cancelAssign() {
    this.AssignedServicesList = this.AssignedServicesListCopy
    this.Assigntodate = null
    this.Assignfromdate = null
    this.AssignEDate=null
    this.AssignSDate=null
  }
  onChangeCompletedfromdate(event: any) {
    this.ResolvedServiceList = []
    this.CompletedSDate = event
    if (this.CompletedEDate == null) {
      for (var i = 0; i < this.ResolvedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.ResolvedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] >= this.CompletedSDate) {
          this.ResolvedServiceList.push(this.ResolvedServiceListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.ResolvedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.ResolvedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.ResolvedServiceList.push(this.ResolvedServiceListCopy[i])
        }
      }
    }
  }
  onChangeCompletedTodate(event: any) {
    this.ResolvedServiceList = []
    this.CompletedEDate = event
    if (this.CompletedSDate == null) {
      for (var i = 0; i < this.ResolvedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.ResolvedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate) {
          this.ResolvedServiceList.push(this.ResolvedServiceListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.ResolvedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.ResolvedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.ResolvedServiceList.push(this.ResolvedServiceListCopy[i])
        }
      }
    }
  }
  cancelCompleted() {
    this.ResolvedServiceList = this.ResolvedServiceListCopy
    this.Completedtodate = null
    this.Completedfromdate = null
    this.CompletedEDate=null
    this.CompletedSDate=null
  }
  AssignedServices() {
    this.spinner.show();
    this.Ticketmanagerservice.GetBAAssignedServices(this.uid).subscribe((data: any) => {
      this.AssignedServicesList = data;
      this.AssignedServicesListCopy = data
      this.spinner.hide();
    })
  }
  ResolvedServices() {
    this.spinner.show();
    this.Ticketmanagerservice.GetBAResolvedServices(this.uid).subscribe((data: any) => {
      this.ResolvedServiceList = data;
      this.ResolvedServiceListCopy = data;
      this.spinner.hide();

    })
  }
  sortassignserviceid = "1";
  sortcompletedserviceid = "1";
  sortnewserviceid = "1";

  sortbyserviceid() {

    if (this.sortassignserviceid == "1" && this.ShowPendingApplications == true) {
      this.PendingApplicationsList.sort((a, b) => a.tickedId.toLowerCase() < b.tickedId.toLowerCase() ? -1 : a.tickedId.toLowerCase() > b.tickedId.toLowerCase() ? 1 : 0)
      this.sortassignserviceid = "2";
    }
    else if (this.sortassignserviceid == "2" && this.ShowPendingApplications == true) {
      this.PendingApplicationsList.sort((a, b) => a.tickedId.toLowerCase() > b.tickedId.toLowerCase() ? -1 : a.tickedId.toLowerCase() < b.tickedId.toLowerCase() ? 1 : 0)
      this.sortassignserviceid = "1";

    }
    else if (this.sortnewserviceid == "1" && this.ShowAssignedDetails == true) {
      this.AssignedServicesList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
      this.sortnewserviceid = "2";
    }
    else if (this.sortnewserviceid == "2" && this.ShowAssignedDetails == true) {
      this.AssignedServicesList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
      this.sortnewserviceid = "1";

    }
    else if (this.sortcompletedserviceid == "1" && this.ShowCompletedDetails == true) {
      this.ResolvedServiceList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
      this.sortcompletedserviceid = "2";
    }
    else if (this.sortcompletedserviceid == "2" && this.ShowCompletedDetails == true) {
      this.ResolvedServiceList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
      this.sortcompletedserviceid = "1";

    }
  }
  sortassigndate = "1"
  sortcompleteddate = "1"
  sortnewdate = "1"
  sortbydate() {
    if (this.sortassigndate == "1" && this.ShowPendingApplications == true) {
      this.PendingApplicationsList.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortassigndate = "2";
    }
    else if (this.sortassigndate == "2" && this.ShowPendingApplications == true) {
      this.PendingApplicationsList.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.sortassigndate = "1";

    }
    else if (this.sortnewdate == "1" && this.ShowAssignedDetails == true) {
      this.AssignedServicesList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
      this.sortnewdate = "2";
    }
    else if (this.sortnewdate == "2" && this.ShowAssignedDetails == true) {
      this.AssignedServicesList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
      this.sortnewdate = "1";

    }
    else if (this.sortcompletedserviceid == "1" && this.ShowCompletedDetails == true) {
      this.ResolvedServiceList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
      this.sortcompletedserviceid = "2";
    }
    else if (this.sortcompletedserviceid == "2" && this.ShowCompletedDetails == true) {
      this.ResolvedServiceList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
      this.sortcompletedserviceid = "1";

    }
  }

  GotoForm(details){
    localStorage.setItem("ProposID",details.tickedId);
    this.router.navigate(['/' + details.url])

  }

  print(){
    this.ShowAssignedDetails1 = true;
    this.ShowAssignedDetails = false;
    document.getElementById("ShowAssignedDetails").style.visibility = "hidden";
    document.getElementById("btndiv").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    setTimeout(() => {
      document.getElementById("printnew").click();
    }, 100);   
  }

  printneww(){
    window.print();
    document.getElementById("btndiv").style.visibility = "visible";
    document.getElementById("chatimgdisplay").style.visibility = "visible";
    document.getElementById("menuslist").style.visibility = "visible";
    document.getElementById("menuslist").style.display = "contents";

    this.ShowAssignedDetails1 = false;
    this.ShowAssignedDetails = true;
  }

  print1(){
    this.ShowCompletedDetails1 = true;
    this.ShowCompletedDetails = false;
    document.getElementById("ShowCompletedDetails").style.visibility = "hidden";
    //document.getElementById("btndiv").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    setTimeout(() => {
      document.getElementById("printcompleteddetails").click();
    }, 500);   
  }

  printneww1(){
    window.print();
    document.getElementById("chatimgdisplay").style.visibility = "visible";
    document.getElementById("menuslist").style.visibility = "visible";
    document.getElementById("menuslist").style.display = "contents";

    this.ShowCompletedDetails1 = false;
    this.ShowCompletedDetails = true;
  }

  printpending(){
    this.ShowPendingApplications1 = true;
    this.ShowPendingApplications = false;
    document.getElementById("ShowPendingApplications").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    setTimeout(() => {
      document.getElementById("printpendingdetails").click();
    }, 500);  
  }

  printpend(){
    window.print();
    document.getElementById("chatimgdisplay").style.visibility = "visible";
    document.getElementById("menuslist").style.visibility = "visible";
    document.getElementById("menuslist").style.display = "contents";

    this.ShowPendingApplications1 = false;
    this.ShowPendingApplications = true;
  }
}

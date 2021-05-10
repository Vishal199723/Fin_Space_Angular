import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CustomerDashboardService } from '../Shared/CustomerDashboard/customer-dashboard.service';
import { UserLogin } from '../ViewModels/UserLogin';
import { LoginService } from '../LoginService/login.service';
import { MessageService } from '../MessageService/meaagse.service';
import html2canvas from 'html2canvas';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  closeResult: string;
  LoanTypeList: any;
  data = "aa";
  onSelectedLoanId: any;
  CompletedServiceList: any=[];
  RequestedServicesList: any=[];
  uid: string;
  ShowRequestedDetails: boolean = false;
  ShowCompletedDetails: boolean = false;
  p: number = 1
  Alldetails: any;
  ShowPendingApplications: boolean;
  PendingApplicationsList: any=[];
  isLoggedIn: boolean;
  SearchRequested:any
  SearchCompleted:any
  SearchPending:any
  PendingApplicationsListCopy: any=[];
  CompletedServiceListCopy: any=[];
  RequestedServicesListCopy: any=[];
  AssignSDate: any;
  AssignEDate: any;
  Assignaccepteddate: any;
  Assignfromdate: any;
  Assigntodate: any;
  CompletedSDate: any;
  CompletedEDate: any;
  Completedaccepteddate: any;
  Completedtodate: any;
  Completedfromdate: any;
  NewSDate: any;
  NewEDate: any;
  Newaccepteddate: any;
  Newtodate: any;
  Newfromdate: any;
  ShowAssignedDetails1: boolean;
  ShowRequestedDetails1: boolean;
  ShowCompletedDetails1: boolean;
  ShowPendingApplications1: boolean;


  constructor(private messageService: MessageService, private loginService: LoginService, private router: Router, 
    private spinner: NgxSpinnerService, private customerdashboardservice: CustomerDashboardService,private userservice: UserDetailsService) {
    this.messageService.sendSession('true');

    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
    }
    this.messageService.sendSession('true');

  }
  ngOnInit() {
    this.RequestedServices();
    this.CompletedServices();
    this.GetPendingApplications();

  }
  getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf("edge") > -1:
        return "Edge";
      case agent.indexOf("opr") > -1 && !!(<any>window).opr:
        return "Opera";
      case agent.indexOf("chrome") > -1 && !!(<any>window).chrome:
        return "Chrome";
      case agent.indexOf("trident") > -1:
        return "IE";
      case agent.indexOf("firefox") > -1:
        return "Firefox";
      case agent.indexOf("safari") > -1:
        return "Safari";
      default:
        return "other";
    }
  }
  checkSession() {
    let browser = this.getBrowserName();
    let token = localStorage.getItem("userToken");
    let userid = localStorage.getItem("userId");


    const inp: UserLogin = {
      Browser: browser,
      Token: token,
      UserId: userid,
      Id: 0,
      lastUseddt: null,
      logindt: null,
    };

    this.loginService.CheckSession(inp).subscribe((data: any) => {

      if (data == "1") {
        this.Logout();
      }
    });
  }
  GotoNewService() {
    this.router.navigate(['/newservices'])
  }
  Logout() {
    this.messageService.sendMessage('false');
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
    localStorage.clear();
  }
  GotoBusinessLoan() {
    this.router.navigate(['/businessloanform'])
  }

  GotoSmallScaleLoan() {
    this.router.navigate(['/smallscaleloanform'])
  }

  GotoSuretyLoan() {
    this.router.navigate(['/suretyloanform'])
  }

  GotoVehicleLoan() {
    this.router.navigate(['/vehecleloanform'])
  }

  RequestedServices() {
    this.spinner.show();
    this.customerdashboardservice.GetRequestedServices(this.uid).subscribe((data: any) => {
      this.RequestedServicesList = data;
      this.RequestedServicesListCopy = data;
      this.spinner.hide();
    })
  }
  CompletedServices() {
    this.spinner.show();
    this.customerdashboardservice.GetCompletedServices(this.uid).subscribe((data: any) => {
      this.CompletedServiceList = data;
      this.CompletedServiceListCopy = data;
      this.spinner.hide();

    })
  }
  GetPendingApplications() {
    this.spinner.show();
    this.customerdashboardservice.GetPendingApplication(this.uid).subscribe((data: any) => {
      this.PendingApplicationsList = data;
      this.PendingApplicationsListCopy = data;
      this.spinner.hide();

    })
  }
  GotoCompletedService() {
    this.router.navigate(['/customerdashboarddetails/' + 2])
  }
  GotoRequestedService() {
    this.router.navigate(['/customerdashboarddetails/' + 1])
  }
  GotoPendingApplications(){
    this.router.navigate(['/customerdashboarddetails/' + 3])
  }
  getfulldeatails(details) {
    this.spinner.show();
    this.customerdashboardservice.GetFullDetails(details.complaintId).subscribe((data: any) => {
      this.Alldetails = data;
      this.spinner.hide();

    })
  }
  GetTrackDetails(details){
    this.router.navigate(['/track/' + details.complaintId])
  }
  GotoForm(details){
    localStorage.setItem("TicketId",details.tickedId);
    this.router.navigate(['/' + details.url])

  }
  onChangeAssignfromdate(event: any) {
    this.PendingApplicationsList = []
    this.AssignSDate = event
    if (this.AssignEDate == null) {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Assignaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] >= this.AssignSDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Assignaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
  }
  onChangeAssignTodate(event: any) {
    this.PendingApplicationsList = []
    this.AssignEDate = event
    if (this.AssignSDate == null) {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Assignaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.PendingApplicationsListCopy.length; i++) {
        this.Assignaccepteddate = this.PendingApplicationsListCopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.PendingApplicationsList.push(this.PendingApplicationsListCopy[i])
        }
      }
    }
  }
  cancelAssign() {
    this.PendingApplicationsList = this.PendingApplicationsListCopy
    this.Assigntodate = null
    this.Assignfromdate = null
    this.AssignEDate=null
    this.AssignSDate=null
  }
  onChangeCompletedfromdate(event: any) {
    this.CompletedServiceList = []
    this.CompletedSDate = event
    if (this.CompletedEDate == null) {
      for (var i = 0; i < this.CompletedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.CompletedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] >= this.CompletedSDate) {
          this.CompletedServiceList.push(this.CompletedServiceListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.CompletedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.CompletedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.CompletedServiceList.push(this.CompletedServiceListCopy[i])
        }
      }
    }
  }
  onChangeCompletedTodate(event: any) {
    this.CompletedServiceList = []
    this.CompletedEDate = event
    if (this.CompletedSDate == null) {
      for (var i = 0; i < this.CompletedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.CompletedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate) {
          this.CompletedServiceList.push(this.CompletedServiceListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.CompletedServiceListCopy.length; i++) {
        this.Completedaccepteddate = this.CompletedServiceListCopy[i].lastUpdated;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.CompletedServiceList.push(this.CompletedServiceListCopy[i])
        }
      }
    }
  }
  cancelCompleted() {
    this.CompletedServiceList = this.CompletedServiceListCopy
    this.Completedtodate = null
    this.Completedfromdate = null
    this.CompletedEDate=null
    this.CompletedSDate=null
  }
  onChangeNewfromdate(event: any) {
    this.RequestedServicesList = []
    this.NewSDate = event
    if (this.NewEDate == null) {
      for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
        this.Newaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] >= this.NewSDate) {
          this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
        this.Newaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
          this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
        }
      }
    }
  }
  onChangeNewTodate(event: any) {
    this.RequestedServicesList = []
    this.NewEDate = event
    if (this.NewSDate == null) {
      for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
        this.Newaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate) {
          this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
        this.Newaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
          this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
        }
      }
    }
  }
  cancelNew() {
    this.RequestedServicesList = this.RequestedServicesListCopy
    this.Newtodate = null
    this.Newfromdate = null
    this.NewEDate=null
    this.NewSDate=null
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
    else if (this.sortnewserviceid == "1" && this.ShowRequestedDetails == true) {
      this.RequestedServicesList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
      this.sortnewserviceid = "2";
    }
    else if (this.sortnewserviceid == "2" && this.ShowRequestedDetails == true) {
      this.RequestedServicesList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
      this.sortnewserviceid = "1";

    }
    else if (this.sortcompletedserviceid == "1" && this.ShowCompletedDetails == true) {
      this.CompletedServiceList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
      this.sortcompletedserviceid = "2";
    }
    else if (this.sortcompletedserviceid == "2" && this.ShowCompletedDetails == true) {
      this.CompletedServiceList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
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
    else if (this.sortnewdate == "1" && this.ShowRequestedDetails == true) {
      this.RequestedServicesList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
      this.sortnewdate = "2";
    }
    else if (this.sortnewdate == "2" && this.ShowRequestedDetails == true) {
      this.RequestedServicesList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
      this.sortnewdate = "1";

    }
    else if (this.sortcompletedserviceid == "1" && this.ShowCompletedDetails == true) {
      this.CompletedServiceList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
      this.sortcompletedserviceid = "2";
    }
    else if (this.sortcompletedserviceid == "2" && this.ShowCompletedDetails == true) {
      this.CompletedServiceList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
      this.sortcompletedserviceid = "1";

    }
  }


  print() {
    this.ShowRequestedDetails1 = true;
    this.ShowRequestedDetails = false;
    document.getElementById("ShowRequestedDetails").style.visibility = "hidden";
    //document.getElementById("ShowRequestedDetails1").style.visibility = "visible";

    document.getElementById("btndiv").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    setTimeout(() => {
      document.getElementById("printnew").click();
    }, 100);
  }

  printneww() {
    window.print();
    this.ShowRequestedDetails1 = false;
    this.ShowRequestedDetails = true;
    document.getElementById("btndiv").style.visibility = "visible";
    document.getElementById("chatimgdisplay").style.visibility = "visible";
    document.getElementById("menuslist").style.visibility = "visible";
    document.getElementById("menuslist").style.display = "contents";
    document.getElementById("ShowRequestedDetails").style.visibility = "visible";
    //document.getElementById("ShowRequestedDetails1").style.visibility = "hidden";
  }

  download() {
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    this.ShowRequestedDetails1 = true;
    this.ShowRequestedDetails = false;

    setTimeout(() => {
      var data = document.getElementById("print-section");
      this.spinner.show();
      html2canvas(data).then(canvas => {
        var imgWidth = 100;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/jpg')
        var data45 = {
          htmlString: contentDataURL,
          TicketId: "Requested Services"
        }
        this.userservice.SavePdfofCommisionDetails(data45).subscribe((data1: any) => {
          var aa = data1;
          window.open(data1);

          document.getElementById("menuslist").style.visibility = "visible";
          document.getElementById("menuslist").style.display = "contents";

          this.ShowRequestedDetails1 = false;
          this.ShowRequestedDetails = true;

          this.spinner.hide();

        })
      });

    }, 100);
    //var data = document.getElementById('print-section');

  }

  print1() {
    this.ShowCompletedDetails1 = true;
    this.ShowCompletedDetails = false;
    document.getElementById("ShowCompletedDetails").style.visibility = "hidden";

    document.getElementById("btndiv").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    setTimeout(() => {
      document.getElementById("printnew1").click();
    }, 100);
  }

  printneww1() {
    window.print();
    this.ShowCompletedDetails1 = false;
    this.ShowCompletedDetails = true;
    document.getElementById("btndiv").style.visibility = "visible";
    document.getElementById("chatimgdisplay").style.visibility = "visible";
    document.getElementById("menuslist").style.visibility = "visible";
    document.getElementById("menuslist").style.display = "contents";
    document.getElementById("ShowCompletedDetails").style.visibility = "visible";
  }

  download1() {
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    this.ShowCompletedDetails1 = true;
    this.ShowCompletedDetails = false;

    setTimeout(() => {
      var data = document.getElementById("printnew-section");
      this.spinner.show();
      html2canvas(data).then(canvas => {
        var imgWidth = 100;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/jpg')
        var data45 = {
          htmlString: contentDataURL,
          TicketId: "Completed Services"
        }
        this.userservice.SavePdfofCommisionDetails(data45).subscribe((data1: any) => {
          var aa = data1;
          window.open(data1);

          document.getElementById("menuslist").style.visibility = "visible";
          document.getElementById("menuslist").style.display = "contents";

          this.ShowCompletedDetails1 = false;
          this.ShowCompletedDetails = true;
          this.spinner.hide();

        })
      });
    }, 100);

    //var data = document.getElementById('printnew-section');

  }

  printpendg(){
    this.ShowPendingApplications1 = true;
    this.ShowPendingApplications = false;
    document.getElementById("ShowPendingApplications").style.visibility = "hidden";

    document.getElementById("btndiv").style.visibility = "hidden";
    document.getElementById("chatimgdisplay").style.visibility = "hidden";
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    setTimeout(() => {
      document.getElementById("printnew2").click();
    }, 100);
  }

  printnewwpending(){
    window.print();
    this.ShowPendingApplications1 = false;
    this.ShowPendingApplications = true;
    document.getElementById("btndiv").style.visibility = "visible";
    document.getElementById("chatimgdisplay").style.visibility = "visible";
    document.getElementById("menuslist").style.visibility = "visible";
    document.getElementById("menuslist").style.display = "contents";
    document.getElementById("ShowPendingApplications").style.visibility = "visible";
  }

  downloadpending(){
    document.getElementById("menuslist").style.visibility = "hidden";
    document.getElementById("menuslist").style.display = "none";

    this.ShowPendingApplications1 = true;
    this.ShowPendingApplications = false;

    setTimeout(() => {
      var data = document.getElementById("printpending-section");
      this.spinner.show();
      html2canvas(data).then(canvas => {
        var imgWidth = 100;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/jpg')
        var data45 = {
          htmlString: contentDataURL,
          TicketId: "Pending Services"
        }
        this.userservice.SavePdfofCommisionDetails(data45).subscribe((data1: any) => {
          var aa = data1;
          window.open(data1);
          document.getElementById("menuslist").style.visibility = "visible";
          document.getElementById("menuslist").style.display = "contents";

          this.ShowPendingApplications1 = false;
          this.ShowPendingApplications = true;
          this.spinner.hide();

        })
      });
    }, 100);
  }
}
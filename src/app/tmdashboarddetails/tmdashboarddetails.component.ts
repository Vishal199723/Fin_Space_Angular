import { Component, OnInit } from '@angular/core';
import { TicketManagerService } from '../Shared/TicketManager/ticket-manager.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-tmdashboarddetails',
  templateUrl: './tmdashboarddetails.component.html',
  styleUrls: ['./tmdashboarddetails.component.css']
})

export class TmdashboarddetailsComponent implements OnInit {
    uid: string;
    p: number = 1;
    showhidevalue = false;
    ShowAssignedDetails = false;
    ShowCompletedDetails = false;
    ResolvedServiceList: any = [];
    NewServicesList: any = [];
    AssignedServicesList: any = [];
    notify: string;
    dismissalert: boolean;
    Alldetails: any;
    SearchNewServices: any
    SearchAssignedServices: any
    SearchCompletedServices: any
    AssignSDate: any;
    AssignEDate: any;
    AssignedServicesListCopy: any = [];
    Assignaccepteddate: any;
    Assigntodate: any
    Assignfromdate: any
    NewServicesListCopy: any = [];
    NewSDate: any;
    NewEDate: any;
    Newaccepteddate: any;
    ResolvedServiceListCopy: any = [];
    CompletedSDate: any;
    Completedaccepteddate: any;
    CompletedEDate: any;
    Completedtodate: any
    Completedfromdate: any
    Newfromdate: any
    Newtodate: any
    ShowCompletedDetails1: boolean;
    ShowAssignedDetails1: boolean;
  value: any;
  router: any;
    constructor(private messageService: MessageService, private Ticketmanagerservice: TicketManagerService, private spinner: NgxSpinnerService,
      private route:ActivatedRoute,) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem('IsLoggedIn') == "true") {
        this.uid = localStorage.getItem("userId");
      }
      this.route.params.subscribe(params=>{
        if(params["id"]){
          this.value=(params["id"]);
          this.GetDetails(this.value);
        }
      })
    }
  
    ngOnInit() {
      this.NewServices();
      this.AssignedServices();
      this.ResolvedServices();
    }
    
    GetDetails(id){
      if(id == 1){
        this.AssignedServicesTrue();
      }
  else{
  this.ResolvedServicesTrue();
  }
    }


    NewServices() {
      this.spinner.show();
      this.Ticketmanagerservice.GetNewServices().subscribe((data: any) => {
        this.NewServicesList = data;
        this.NewServicesListCopy = data;
        this.spinner.hide();
  
      })
    }
    AssignedServices() {
      this.spinner.show();
      this.Ticketmanagerservice.GetAssignedServices().subscribe((data: any) => {
        this.AssignedServicesList = data;
        this.AssignedServicesListCopy = data
        this.spinner.hide();
      })
    }
    ResolvedServices() {
      this.spinner.show();
      this.Ticketmanagerservice.GetResolvedServices().subscribe((data: any) => {
        this.ResolvedServiceList = data;
        this.ResolvedServiceListCopy = data;
        this.spinner.hide();
  
      })
    }
    assigntask(details) {
      this.spinner.show();
      this.Ticketmanagerservice.saveAssignedTasks(details.id).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Sent Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.NewServices();
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
        }
      })
    }

    getfulldeatails(details) {
      this.Alldetails = details;
    }
    NewServicesTrue() {
      this.showhidevalue = true;
      this.ShowAssignedDetails = false;
      this.ShowCompletedDetails = false
  
    }
    AssignedServicesTrue() {
      this.ShowAssignedDetails = true;
      this.showhidevalue = false
      this.ShowCompletedDetails = false
  
    }
    ResolvedServicesTrue() {
      this.ShowAssignedDetails = false;
      this.showhidevalue = false
      this.ShowCompletedDetails = true
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
    onChangeNewfromdate(event: any) {
      this.NewServicesList = []
      this.NewSDate = event
      if (this.NewEDate == null) {
        for (var i = 0; i < this.NewServicesListCopy.length; i++) {
          this.Newaccepteddate = this.NewServicesListCopy[i].lastUpdated;
          let res = this.Newaccepteddate.split('T');
          if (res[0] >= this.NewSDate) {
            this.NewServicesList.push(this.NewServicesListCopy[i])
          }
        }
      }
      else {
        for (var i = 0; i < this.NewServicesListCopy.length; i++) {
          this.Newaccepteddate = this.NewServicesListCopy[i].lastUpdated;
          let res = this.Newaccepteddate.split('T');
          if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
            this.NewServicesList.push(this.NewServicesListCopy[i])
          }
        }
      }
    }
    onChangeNewTodate(event: any) {
      this.NewServicesList = []
      this.NewEDate = event
      if (this.NewSDate == null) {
        for (var i = 0; i < this.NewServicesListCopy.length; i++) {
          this.Newaccepteddate = this.NewServicesListCopy[i].lastUpdated;
          let res = this.Newaccepteddate.split('T');
          if (res[0] <= this.NewEDate) {
            this.NewServicesList.push(this.NewServicesListCopy[i])
          }
        }
      }
      else {
        for (var i = 0; i < this.NewServicesListCopy.length; i++) {
          this.Newaccepteddate = this.NewServicesListCopy[i].lastUpdated;
          let res = this.Newaccepteddate.split('T');
          if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
            this.NewServicesList.push(this.NewServicesListCopy[i])
          }
        }
      }
    }
    cancelNew() {
      this.NewServicesList = this.NewServicesListCopy
      this.Newtodate = null
      this.Newfromdate = null
      this.NewEDate=null
      this.NewSDate=null
    }
    sortassignserviceid = "1";
    sortcompletedserviceid = "1";
    sortnewserviceid = "1";
  
    sortbyserviceid() {
  
      if (this.sortassignserviceid == "1" && this.ShowAssignedDetails == true) {
        this.AssignedServicesList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
        this.sortassignserviceid = "2";
      }
      else if (this.sortassignserviceid == "2" && this.ShowAssignedDetails == true) {
        this.AssignedServicesList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
        this.sortassignserviceid = "1";
  
      }
      else if (this.sortnewserviceid == "1" && this.showhidevalue == true) {
        this.NewServicesList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
        this.sortnewserviceid = "2";
      }
      else if (this.sortnewserviceid == "2" && this.showhidevalue == true) {
        this.NewServicesList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
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
      if (this.sortassigndate == "1" && this.ShowAssignedDetails == true) {
        this.AssignedServicesList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
        this.sortassigndate = "2";
      }
      else if (this.sortassigndate == "2" && this.ShowAssignedDetails == true) {
        this.AssignedServicesList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
        this.sortassigndate = "1";
  
      }
      else if (this.sortnewdate == "1" && this.showhidevalue == true) {
        this.NewServicesList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
        this.sortnewdate = "2";
      }
      else if (this.sortnewdate == "2" && this.showhidevalue == true) {
        this.NewServicesList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
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
  }

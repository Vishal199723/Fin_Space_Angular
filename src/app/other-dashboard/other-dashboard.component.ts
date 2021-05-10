import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { AdminDashboardService } from '../Shared/AdminDashboard/admin-dashboard.service';
import { RoleService } from '../Shared/RoleMaster/role.service';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';

@Component({
  selector: 'app-other-dashboard',
  templateUrl: './other-dashboard.component.html',
  styleUrls: ['./other-dashboard.component.css']
})
export class OtherDashboardComponent implements OnInit {
  uid: string;
  role: string;
  NewServicesList: any=[];
  RoleList: any;
  p:number=1
  ShowNewServices: boolean=false
  ShowPendingServices: boolean=false
  ShowCompletedServices: boolean=false
  PendingServicesList: any=[];
  CompletedServicesList: any=[];
  groupId: string;
  cutlist: any=[];
  ShowCustomerDetails: boolean=false;
  NewServicesListCopy: any=[];
  CompletedServicesListCopy: any=[];
  PendingServicesListCopy: any=[];
  cutlistCopy: any=[];
  AssignSDate: any;
  AssignEDate: any;
  Assignaccepteddate: any;
  Assigntodate: any;
  Assignfromdate: any;
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
  SearchUsers:any
  SearchCompletedServices:any
  SearchAssignedServices:any
  SearchNewServices:any
  constructor(private messageService: MessageService,private router:Router,private spinner:NgxSpinnerService,private admindashboardservice:AdminDashboardService,
    private roleService:RoleService,private workflowtrnsservice:WorkflowtransService,private datepipe:DatePipe) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.uid = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
    this.groupId = localStorage.getItem("groupId");

   }

  ngOnInit() {
    this.Roles();
    this.NewServices();
    this.PendingServices();
    this.CompletedServices();
    this.GetRegCustList();
  }
  async GetRegCustList() {
    this.spinner.show()
    this.workflowtrnsservice.getreglist().subscribe((data: any) => {
      this.cutlist = data;
      this.cutlistCopy = data;
      this.spinner.hide()
    })
  }
  opensbaccoutform(data){
    localStorage.setItem("sbaccntcustomerid",data.customerId);
    localStorage.setItem("sbaccntproposal",data);
    this.router.navigate(['/sbaccntproposal']);
  }
  gotoinbox(){
    this.router.navigate(["/inbox"])
  }
  async PendingServices(){
    var data={
      UserId:this.uid,
      GroupId:+this.groupId
    }
    this.spinner.show();
    this.admindashboardservice.GetPendingServices(data).subscribe((data:any)=>{
      this.PendingServicesList = data;
      this.PendingServicesListCopy = data;

      this.spinner.hide();

    })
  }
  async CompletedServices(){
    var data={
      UserId:this.uid,
      GroupId:+this.groupId
    }
    this.spinner.show();
    this.admindashboardservice.GetCompletedServices(data).subscribe((data:any)=>{
      this.CompletedServicesList = data;
      this.CompletedServicesListCopy = data;

      this.spinner.hide();

    })
  }
  async NewServices(){
    var data={
      UserId:this.uid,
      GroupId:+this.groupId
    }
    this.spinner.show();
    this.admindashboardservice.GetNewServices(data).subscribe((data:any)=>{
      this.NewServicesList = data;
      this.NewServicesListCopy = data;

      this.spinner.hide();

    })
  }
  async  Roles() {
    this.spinner.show();
    this.roleService.getUserRoles().subscribe((Data: any) => {
      this.RoleList = Data;
      this.spinner.hide();
    });
  }
  GetRole(id){
    for (let index = 0; index < this.RoleList.length; index++) {
      if(this.RoleList[index].id ==id){
        return this.RoleList[index].roleName;
      }
    }
  }
  NewServicesTrue(){
    this.ShowNewServices=true;
    this.ShowPendingServices=false;
    this.ShowCompletedServices=false;
    this.ShowCustomerDetails=false;

  }
  PendingServicesTrue(){
    this.ShowNewServices=false;
    this.ShowPendingServices=true;
    this.ShowCompletedServices=false;
    this.ShowCustomerDetails=false;

  }
  CompletedServicesTrue(){
    this.ShowNewServices=false;
    this.ShowPendingServices=false;
    this.ShowCompletedServices=true;
    this.ShowCustomerDetails=false;
  }
  CustomerDetailsTrue(){
    this.ShowCustomerDetails=true;
    this.ShowNewServices=false;
    this.ShowPendingServices=false;
    this.ShowCompletedServices=false;
  }
  onChangeAssignfromdate(event: any) {
    this.PendingServicesList = []
    this.AssignSDate = event
    if (this.AssignEDate == null) {
      for (var i = 0; i < this.PendingServicesListCopy.length; i++) {
        this.Assignaccepteddate =this.datepipe.transform(this.PendingServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Assignaccepteddate.split(' ');
        if (res[0] >= this.AssignSDate) {
          this.PendingServicesList.push(this.PendingServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.PendingServicesListCopy.length; i++) {
        this.Assignaccepteddate = this.datepipe.transform(this.PendingServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Assignaccepteddate.split(' ');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.PendingServicesList.push(this.PendingServicesListCopy[i])
        }
      }
    }
  }
  onChangeAssignTodate(event: any) {
    this.PendingServicesList = []
    this.AssignEDate = event
    if (this.AssignSDate == null) {
      for (var i = 0; i < this.PendingServicesListCopy.length; i++) {
        this.Assignaccepteddate = this.datepipe.transform(this.PendingServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Assignaccepteddate.split(' ');
        if (res[0] <= this.AssignEDate) {
          this.PendingServicesList.push(this.PendingServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.PendingServicesListCopy.length; i++) {
        this.Assignaccepteddate =this.datepipe.transform(this.PendingServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Assignaccepteddate.split(' ');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.PendingServicesList.push(this.PendingServicesListCopy[i])
        }
      }
    }
  }
  cancelAssign() {
    this.PendingServicesList = this.PendingServicesListCopy
    this.Assigntodate = null
    this.Assignfromdate = null
    this.AssignEDate=null
    this.AssignSDate=null
  }
  onChangeCompletedfromdate(event: any) {
    this.CompletedServicesList = []
    this.CompletedSDate = event
    if (this.CompletedEDate == null) {
      for (var i = 0; i < this.CompletedServicesListCopy.length; i++) {
        this.Completedaccepteddate = this.datepipe.transform(this.CompletedServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Completedaccepteddate.split(' ');
        if (res[0] >= this.CompletedSDate) {
          this.CompletedServicesList.push(this.CompletedServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.CompletedServicesListCopy.length; i++) {
        this.Completedaccepteddate = this.datepipe.transform(this.CompletedServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Completedaccepteddate.split(' ');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.CompletedServicesList.push(this.CompletedServicesListCopy[i])
        }
      }
    }
  }
  onChangeCompletedTodate(event: any) {
    this.CompletedServicesList = []
    this.CompletedEDate = event
    if (this.CompletedSDate == null) {
      for (var i = 0; i < this.CompletedServicesListCopy.length; i++) {
        this.Completedaccepteddate = this.datepipe.transform(this.CompletedServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Completedaccepteddate.split(' ');
        if (res[0] <= this.CompletedEDate) {
          this.CompletedServicesList.push(this.CompletedServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.CompletedServicesListCopy.length; i++) {
        this.Completedaccepteddate = this.datepipe.transform(this.CompletedServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Completedaccepteddate.split(' ');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.CompletedServicesList.push(this.CompletedServicesListCopy[i])
        }
      }
    }
  }
  cancelCompleted() {
    this.CompletedServicesList = this.CompletedServicesListCopy
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
        this.Newaccepteddate =  this.datepipe.transform(this.NewServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Newaccepteddate.split(' ');
        if (res[0] >= this.NewSDate) {
          this.NewServicesList.push(this.NewServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.NewServicesListCopy.length; i++) {
        this.Newaccepteddate = this.datepipe.transform(this.NewServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Newaccepteddate.split(' ');
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
        this.Newaccepteddate = this.datepipe.transform(this.NewServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Newaccepteddate.split(' ');
        if (res[0] <= this.NewEDate) {
          this.NewServicesList.push(this.NewServicesListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.NewServicesListCopy.length; i++) {
        this.Newaccepteddate = this.datepipe.transform(this.NewServicesListCopy[i].createdOn, 'yyyy-MM-dd hh:mm:ss a');
        let res = this.Newaccepteddate.split(' ');
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

    if (this.sortassignserviceid == "1" && this.ShowPendingServices == true) {
      this.PendingServicesList.sort((a, b) => a.serviceId.toLowerCase() < b.serviceId.toLowerCase() ? -1 : a.serviceId.toLowerCase() > b.serviceId.toLowerCase() ? 1 : 0)
      this.sortassignserviceid = "2";
    }
    else if (this.sortassignserviceid == "2" && this.ShowPendingServices == true) {
      this.PendingServicesList.sort((a, b) => a.serviceId.toLowerCase() > b.serviceId.toLowerCase() ? -1 : a.serviceId.toLowerCase() < b.serviceId.toLowerCase() ? 1 : 0)
      this.sortassignserviceid = "1";

    }
    else if (this.sortnewserviceid == "1" && this.ShowNewServices == true) {
      this.NewServicesList.sort((a, b) => a.serviceId.toLowerCase() < b.serviceId.toLowerCase() ? -1 : a.serviceId.toLowerCase() > b.serviceId.toLowerCase() ? 1 : 0)
      this.sortnewserviceid = "2";
    }
    else if (this.sortnewserviceid == "2" && this.ShowNewServices == true) {
      this.NewServicesList.sort((a, b) => a.serviceId.toLowerCase() > b.serviceId.toLowerCase() ? -1 : a.serviceId.toLowerCase() < b.serviceId.toLowerCase() ? 1 : 0)
      this.sortnewserviceid = "1";

    }
    else if (this.sortcompletedserviceid == "1" && this.ShowCompletedServices == true) {
      this.CompletedServicesList.sort((a, b) => a.serviceId.toLowerCase() < b.serviceId.toLowerCase() ? -1 : a.serviceId.toLowerCase() > b.serviceId.toLowerCase() ? 1 : 0)
      this.sortcompletedserviceid = "2";
    }
    else if (this.sortcompletedserviceid == "2" && this.ShowCompletedServices == true) {
      this.CompletedServicesList.sort((a, b) => a.serviceId.toLowerCase() > b.serviceId.toLowerCase() ? -1 : a.serviceId.toLowerCase() < b.serviceId.toLowerCase() ? 1 : 0)
      this.sortcompletedserviceid = "1";

    }
  }
  sortassigndate = "1"
  sortcompleteddate = "1"
  sortnewdate = "1"
  sortbydate() {
    if (this.sortassigndate == "1" && this.ShowPendingServices == true) {
      this.PendingServicesList.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortassigndate = "2";
    }
    else if (this.sortassigndate == "2" && this.ShowPendingServices == true) {
      this.PendingServicesList.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.sortassigndate = "1";

    }
    else if (this.sortnewdate == "1" && this.ShowNewServices == true) {
      this.NewServicesList.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortnewdate = "2";
    }
    else if (this.sortnewdate == "2" && this.ShowNewServices == true) {
      this.NewServicesList.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.sortnewdate = "1";

    }
    else if (this.sortcompletedserviceid == "1" && this.ShowCompletedServices == true) {
      this.CompletedServicesList.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortcompletedserviceid = "2";
    }
    else if (this.sortcompletedserviceid == "2" && this.ShowCompletedServices == true) {
      this.CompletedServicesList.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.sortcompletedserviceid = "1";

    }
  }
}

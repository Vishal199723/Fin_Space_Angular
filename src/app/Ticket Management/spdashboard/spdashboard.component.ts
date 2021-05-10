/* cSpell:disable */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { RequestTypeService } from 'src/app/Shared/ServiceRequestType/request-type.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-spdashboard',
  templateUrl: './spdashboard.component.html',
  styleUrls: ['./spdashboard.component.css']
})
export class SpdashboardComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('reassignclosebutton') reassignclosebutton
  TicketDetails: any=[];
  information: any;
  contactno: any;
  address: any;
  sdate: any;
  stime: any;
  complaintId: any;
  uid: string;
  EmployeeList: any;
  requiredtime: any
  employeeid: any;
  sid: any;
  spid: string;
  SPEmployees: any;
  ticketid: any;
  WorkflowStates: any;
  roleid: string;
  stateid: any;
  EmployeeAssignedTaskss: any=[];
  CustomerId: any;
  SearchAllServices: any
  SearchAssignedServices: any
  TicketDetailsCopy: any=[];
  EmployeeAssignedTaskssCopy: any=[];
  NewEDate: any;
  NewSDate: any;
  Newaccepteddate: any;
  Newtodate: any;
  Newfromdate: any;
  AssignSDate: any;
  AssignEDate: any;
  Assignaccepteddate: any;
  Assigntodate: any;
  Assignfromdate: any;
  EmployeeName: any;
  ReAssignComplaintId:any
  constructor(private messageService: MessageService, private router: Router, private serviceprovderservice: ServiceProviderService,
    private spinner: NgxSpinnerService, private datepipe: DatePipe, private ServiceRequesttypeservice: RequestTypeService) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
    }
  }

  ngOnInit() {
    this.GetTickets();
    this.GetEmployees();
    this.GetSPEmployees();
    this.GetWorkflowStates();
    this.GetAssignedTaskList();
  }

  RouteToSPEmployees() {
    this.router.navigate(['spemployee/']);
  }
  GetEmployees() {
    this.spinner.show();
    this.serviceprovderservice.GetEmployees(this.uid).subscribe(arg =>
      this.EmployeeList = arg);
    this.spinner.hide();
  }

  GetSPEmployees() {
    this.spinner.show();
    this.spid = this.uid;
    this.ServiceRequesttypeservice.getSPEmployees(this.spid).subscribe((Data: any) => {
      this.SPEmployees = Data;
      this.spinner.hide();
    })
  }

  GetWorkflowStates() {
    this.spinner.show();
    this.ServiceRequesttypeservice.getWorkflowStates(this.roleid).subscribe((Data: any) => {
      this.WorkflowStates = Data;
      this.spinner.hide();
    })
  }


  GetTickets() {
    this.spinner.show();
    this.serviceprovderservice.GetAllTickets(this.uid).subscribe((Data: any) => {
      this.TicketDetails = Data
     this.TicketDetailsCopy =Data

    this.spinner.hide();
  })
  }
  Assigntoemployee(com) {
    let latest_date = this.datepipe.transform(com.lastUpdated, 'dd-MM-yyyy hh:mm:ss a');

    this.ticketid = com.complaintId;
    this.information = com.information;
    this.contactno = com.contactNumber;
    this.address = com.address;
    this.sdate = latest_date;
    this.stime = com.serviceTime;
    this.complaintId = com.complaintId;
    this.sid = com.serviceRequestTypeId,
      this.CustomerId = com.cusId
  }

  onSelectEmployee(id) {
    this.employeeid = id
  }

  onSelectState(id) {
    this.stateid = id
  }

  employeetask() {
    this.spinner.show();
    var data = {
      EmployeeId: this.employeeid,
      ContactNumber: this.contactno,
      Address: this.address,
      Information: this.information,
      ServiceDate: this.sdate,
      ServiceTime: this.stime,
      RequestType: this.sid,
      RequiredTime: this.requiredtime,
      Ticket: this.complaintId,
      FromUser: this.uid,

    };
    this.serviceprovderservice.SendEmployeeTask(data).subscribe((data: any) => {
      alert("sent successfully")
      this.spinner.hide();
      this.GetTickets();

    })
  }

  SendMailToEmployee() {
 
    if(this.employeeid==null ||this.employeeid==undefined){
      alert("Please Select Employee")
    }
    else if(this.stateid==null ||this.stateid==undefined){
      alert("Please Select Workflow State")
    }
    else{
      for (let index = 0; index < this.SPEmployees.length; index++) {
        if(this.employeeid==this.SPEmployees[index].uniqueEmpId){
          this.EmployeeName=this.SPEmployees[index].employeeName
          break;  

        }    
    }
      this.closebutton.nativeElement.click();
      var data = {
        EmployeeId: this.employeeid,
        ContactNumber: this.contactno,
        Address: this.address,
        Information: this.information,
        ServiceDate: this.sdate,
        ServiceTime: this.stime,
        RequestType: this.sid,
        RequiredTime: this.requiredtime,
        Ticket: this.complaintId,
        FromUser: this.uid,
        Workflowstate: this.stateid,
        CustomerId: this.CustomerId
      };
      this.spinner.show();

      this.serviceprovderservice.SendEmployeeTask(data).subscribe((response: any) => {
        if (response != null) {
          alert("Service Id " + this.complaintId + " Assigned to " +  this.EmployeeName)
          this.spinner.hide();
          this.GetTickets();
        }
        this.spinner.hide();
  
      })
   
     }
   }

  SendMailToRV() {
    var data = {
      //EmployeeId: this.employeeid,
      ContactNumber: this.contactno,
      Address: this.address,
      Information: this.information,
      ServiceDate: this.sdate,
      ServiceTime: this.stime,
      RequestType: this.sid,
      RequiredTime: null,
      Ticket: this.complaintId,
      FromUser: this.uid,
      Workflowstate: this.stateid,
      CustomerId: this.CustomerId
    };
    this.spinner.show();
    this.serviceprovderservice.SendtoRv(data).subscribe((response: any) => {
      if (response != null) {
        alert("Sent successfully")
        this.spinner.hide();
        this.GetTickets();
        this.GetAssignedTaskList();
      }
      this.spinner.hide();

    })
  }


  GetAssignedTaskList() {
    this.serviceprovderservice.GetAssignedTasks(this.uid).subscribe((response: any) => {
      if (response != null) {
        this.EmployeeAssignedTaskss = response;
        this.EmployeeAssignedTaskssCopy = response;

      }
    })
  }

  GetAcceptanceStatus(status) {
    var accps = null;
    if (status.acceptanceStatus == true) {
      accps = "Accepted";
    }
    else if (status.acceptanceStatus == false) {
      accps = "Rejected";
    }
    else if (status.acceptanceStatus == null) {
      accps = "Yet to Accept";
    }
    return accps;
  }
  onChangeNewfromdate(event: any) {
    this.TicketDetails = []
    this.NewSDate = event
    if (this.NewEDate == null) {
      for (var i = 0; i < this.TicketDetailsCopy.length; i++) {
        this.Newaccepteddate = this.TicketDetailsCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] >= this.NewSDate) {
          this.TicketDetails.push(this.TicketDetailsCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.TicketDetailsCopy.length; i++) {
        this.Newaccepteddate = this.TicketDetailsCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
          this.TicketDetails.push(this.TicketDetailsCopy[i])
        }
      }
    }
  }
  onChangeNewTodate(event: any) {
    this.TicketDetails = []
    this.NewEDate = event
    if (this.NewSDate == null) {
      for (var i = 0; i < this.TicketDetailsCopy.length; i++) {
        this.Newaccepteddate = this.TicketDetailsCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate) {
          this.TicketDetails.push(this.TicketDetailsCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.TicketDetailsCopy.length; i++) {
        this.Newaccepteddate = this.TicketDetailsCopy[i].lastUpdated;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
          this.TicketDetails.push(this.TicketDetailsCopy[i])
        }
      }
    }
  }
  cancelNew() {
    this.TicketDetails = this.TicketDetailsCopy
    this.Newtodate = null
    this.Newfromdate = null
    this.NewEDate = null
    this.NewSDate = null
  }
  onChangeAssignfromdate(event: any) {
    this.EmployeeAssignedTaskss = []
    this.AssignSDate = event
    if (this.AssignEDate == null) {
      for (var i = 0; i < this.EmployeeAssignedTaskssCopy.length; i++) {
        this.Assignaccepteddate = this.EmployeeAssignedTaskssCopy[i].serviceDate;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] >= this.AssignSDate) {
          this.EmployeeAssignedTaskss.push(this.EmployeeAssignedTaskssCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.EmployeeAssignedTaskssCopy.length; i++) {
        this.Assignaccepteddate = this.EmployeeAssignedTaskssCopy[i].serviceDate;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.EmployeeAssignedTaskss.push(this.EmployeeAssignedTaskssCopy[i])
        }
      }
    }
  }
  onChangeAssignTodate(event: any) {
    this.EmployeeAssignedTaskss = []
    this.AssignEDate = event
    if (this.AssignSDate == null) {
      for (var i = 0; i < this.EmployeeAssignedTaskssCopy.length; i++) {
        this.Assignaccepteddate = this.EmployeeAssignedTaskssCopy[i].serviceDate;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate) {
          this.EmployeeAssignedTaskss.push(this.EmployeeAssignedTaskssCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.EmployeeAssignedTaskssCopy.length; i++) {
        this.Assignaccepteddate = this.EmployeeAssignedTaskssCopy[i].serviceDate;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.EmployeeAssignedTaskss.push(this.EmployeeAssignedTaskssCopy[i])
        }
      }
    }
  }
  cancelAssign() {
    this.EmployeeAssignedTaskss = this.EmployeeAssignedTaskssCopy
    this.Assigntodate = null
    this.Assignfromdate = null
    this.AssignEDate = null
    this.AssignSDate = null
  }
  sortallserviceid="1";
  sortbyallserviceid() {
    if (this.sortallserviceid == "1") {
      this.TicketDetails.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
      this.sortallserviceid = "2";
    }
    else if (this.sortallserviceid == "2") {
      this.TicketDetails.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
      this.sortallserviceid = "1";
  
    }
  
    
  }
  sortassignserviceid="1";
  sortbyassignserviceid() {
    if (this.sortassignserviceid == "1") {
      this.EmployeeAssignedTaskss.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
      this.sortassignserviceid = "2";
    }
    else if (this.sortassignserviceid == "2") {
      this.EmployeeAssignedTaskss.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
      this.sortassignserviceid = "1";
  
    }
  
    
  }
  sortservicedate = "1"

sortbyservicedate() {
  if (this.sortservicedate == "1") {
    this.EmployeeAssignedTaskss.sort((a, b) => a.serviceDate < b.serviceDate ? -1 : a.serviceDate > b.serviceDate ? 1 : 0)
    this.sortservicedate = "2";
  }
  else if (this.sortservicedate == "2") {
    this.EmployeeAssignedTaskss.sort((a, b) => a.serviceDate > b.serviceDate ? -1 : a.serviceDate < b.serviceDate ? 1 : 0)
    this.sortservicedate = "1";

  }
}
GetReAssigndetails(){
  this.spinner.show();
  var sendid= this.uid + "," +this.complaintId
  this.serviceprovderservice.GetReassignDetails(sendid).subscribe((data:any)=>{
    this.spinner.hide();
    if(data==null){  
      alert("Service Id does not exist")
    }
    else{

   
    let latest_date = this.datepipe.transform(data.lastUpdated, 'dd-MM-yyyy hh:mm:ss a');
    this.ticketid = data.complaintId;
    this.information = data.information;
    this.contactno = data.contactNumber;
    this.address = data.address;
    this.sdate = latest_date;
    this.stime = data.serviceTime;
    this.complaintId = data.complaintId;
    this.sid = data.serviceRequestTypeId,
      this.CustomerId = data.cusId
    }
  })
}
makedatanull(){
  this.ticketid = null
  this.information = null
  this.contactno =null
  this.address =null
  this.sdate =null;
  this.stime =null
  this.complaintId = null
  this.sid = null
    this.CustomerId =null
}
ReAssignTask(){

if(this.employeeid==null ||this.employeeid==undefined){
  alert("Please Select Employee")
}
else if(this.stateid==null ||this.stateid==undefined){
  alert("Please Select Workflow State")
}

else if(this.complaintId==null ||this.complaintId==undefined){
  alert("Please Enter Service Id")
}
else{
  for (let index = 0; index < this.SPEmployees.length; index++) {
    if(this.employeeid==this.SPEmployees[index].uniqueEmpId){
      this.EmployeeName=this.SPEmployees[index].employeeName
      break;  

    }    
}
  this.reassignclosebutton.nativeElement.click();
  var data = {
    EmployeeId: this.employeeid,
    ContactNumber: this.contactno,
    Address: this.address,
    Information: this.information,
    ServiceDate: this.sdate,
    ServiceTime: this.stime,
    RequestType: this.sid,
    RequiredTime: this.requiredtime,
    Ticket: this.complaintId,
    FromUser: this.uid,
    Workflowstate: this.stateid,
    CustomerId: this.CustomerId
  };
  this.spinner.show();

  this.serviceprovderservice.SendEmployeeTask(data).subscribe((response: any) => {
    if (response != null) {
      alert("Service Id " + this.complaintId + " ReAssigned to " +  this.EmployeeName)
      this.spinner.hide();
      this.GetTickets();
    }
    this.spinner.hide();

  })

 }
}
DownloadForm(data) {
  if (data.businessAssociateId == null) {
    var sendid = data.complaintId
  }
  else {
    var sendid = data.prosperityId

  }
  localStorage.setItem("previewticketid", data.cusId + "," + sendid);
  if (data.requestType == 1) {
    this.router.navigate(['previewloandetails/' + "home"])
  }
  else if (data.requestType == 3) {
    this.router.navigate(['previewloandetails/' + "vehicle"])

  }
  else if (data.requestType == 13) {
    this.router.navigate(['previewloandetails/' + "business"])

  } 
  else if (data.requestType == 14) {
    this.router.navigate(['previewloandetails/' + "surety"])

  } 
  else if (data.requestType == 15) {
    this.router.navigate(['previewloandetails/' + "smallscale"])

  } 
  else if (data.requestType == 16) {
    this.router.navigate(['previewloandetails/' + "education"])

  } 
  else if (data.requestType == 17) {
    this.router.navigate(['previewloandetails/' + "gold"])

  } 
  else if (data.requestType == 18) {
    this.router.navigate(['previewloandetails/' + "project"])

  } 
  else if (data.requestType == 20) {
    this.router.navigate(['previewloandetails/' + "fixedasset"])

  } 
  else if (data.requestType == 27) {
    this.router.navigate(['previewloandetails/' + "fixeddeposit"])
  }
  else if (data.requestType == 1030) {
    this.router.navigate(['previewloandetails/' + "fixeddeposit"])
  }

  else if (data.requestType == 5) {
    this.router.navigate(['previewinsurancedetails/' + "health"])

  } 
  else if (data.requestType == 7) {
    this.router.navigate(['previewinsurancedetails/' + "life"])

  } 
  else if (data.requestType == 23) {
    this.router.navigate(['previewinsurancedetails/' + "home"])

  } 
  else if (data.requestType == 24) {
    this.router.navigate(['previewinsurancedetails/' + "motor"])

  }
   else if (data.requestType == 25) {
    this.router.navigate(['previewinsurancedetails/' + "accident"])

  } 
  else if (data.requestType == 26) {
    this.router.navigate(['previewinsurancedetails/' + "termloan"])

  }
  else if (data.requestType == 32) {
    var data1 = data.CusId + "-" + null + "-" + null + "-"  + sendid + "-" + null;
    localStorage.setItem("custidwithmailid",data1);
    this.router.navigate(['/mutualfunddetails'])

  }
}
print() {
  document.getElementById("btndiv").style.visibility = "hidden";
  document.getElementById("datediv").style.visibility = "hidden";
  document.getElementById("searchdiv").style.visibility = "hidden";
  document.getElementById("divtwoo").style.visibility = "hidden";
  document.getElementById("maindivv").style.display = "none";
  document.getElementById("divfour").style.visibility = "hidden";
  document.getElementById("chatimgdisplay").style.visibility = "hidden";

  window.print();

  document.getElementById("chatimgdisplay").style.visibility = "visible";
  document.getElementById("btndiv").style.visibility = "visible";
  document.getElementById("datediv").style.visibility = "visible";
  document.getElementById("searchdiv").style.visibility = "visible";
  document.getElementById("divtwoo").style.visibility = "visible";
  document.getElementById("maindivv").style.display = "block";
  document.getElementById("divfour").style.visibility = "visible";

}
}




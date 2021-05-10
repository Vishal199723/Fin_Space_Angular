import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { AdminDashboardService } from '../Shared/AdminDashboard/admin-dashboard.service';
import { CountryService } from '../Shared/country.service';
import { RoleService } from '../Shared/RoleMaster/role.service';
import { TicketManagerService } from '../Shared/TicketManager/ticket-manager.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  ShowRequestedDetails: any=false;
  ShowRegisteredUsers: any=false;
  uid: string;
  UserList: any=[];
  RequestedServicesList: any=[];
  p:number=1;
  RoleList: any;
  searchUsersText:any
  SearchServices:any
  Userfromdate:any
  UserSDate: any;
  UserEDate: any;
  UserListCopy: any=[];
  Useraccepteddate: any;
  Usertodate: any;
  RequestedServicesListCopy: any=[];
  servicefromdate: any;
  servicetodate: any;
  Serviceaccepteddate: any;
  ServiceSDate: any;
  ServiceEDate: any;
  AssignedServicesList: any;
  AssignedServicesListCopy: any;
  ShowPendingServices: boolean=false;
  Assigntodate: any;
  AssignEDate: any;
  AssignSDate: any;
  Assignfromdate: any;
  Assignaccepteddate: any;
  SearchAssignedServices:any
  SPPendingServicesList: any;
  SPCompletedServicesList: any;
  SPCompletedServicesListCopy: any;
  SPPendingServicesListCopy: any;
  ShowSPListCopy: any;
  ShowSPListone: any;
  ShowSPList : boolean;
  SPList: any;
  ShowSPPendingServices: boolean=false;
  ShowBAList: boolean=false;
  ShowcompletedList: boolean=false;
  BAList: any;
  CompletedList: any;
  ShowSPCompletedServices: boolean=false;


  constructor(private spinner:NgxSpinnerService,private admindashboardservcie:AdminDashboardService,
    private roleService:RoleService,private router:Router,private messageService: MessageService,private countryservice:CountryService,
    private Ticketmanagerservice:TicketManagerService) { 
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
    }
        this.messageService.sendSession('true');
    
  }



  ngOnInit() {
   
    this.RequestedServices();
    this.RegisteredUsers();
    this.Roles();
    this.PendingServices();
    this.GetSPList();

    this.GetBAList();
    this.getallcompletedServices();

  }


  GotoRegisteredUsers() {
    this.router.navigate(['/admindashboarddetails/' + 1])
  }
  GotoRequestedService() {
    this.router.navigate(['/admindashboarddetails/' + 2])
  }
  GotoPendingService() {
    this.router.navigate(['/admindashboarddetails/' + 3])
  }
  GotoServiceProviders() {
    this.router.navigate(['/admindashboarddetails/' + 4])
  }
  GotoBAsList() {
    this.router.navigate(['/admindashboarddetails/' + 5])
  }
  GotoCompletedServices() {
    this.router.navigate(['/admindashboarddetails/' + 6])
  }



  GetRole(id){
    for (let index = 0; index < this.RoleList.length; index++) {
      if(this.RoleList[index].id ==id){
        return this.RoleList[index].roleName;
      }
    }
  }
  async  Roles() {
    this.spinner.show();
    this.roleService.getUserRoles().subscribe((Data: any) => {
      this.RoleList = Data;
      this.spinner.hide();
    });
  }
 async RequestedServices() {
    this.spinner.show();
    this.admindashboardservcie.GetRequestedServices().subscribe((data: any) => {
      this.RequestedServicesList = data;
      this.RequestedServicesListCopy = data;
      this.spinner.hide();
    })
  }
  async RegisteredUsers() {
    this.spinner.show();
    this.admindashboardservcie.GetRegisteredUsers().subscribe((data: any) => {
      this.UserList = data;
      this.UserListCopy = data;
      this.spinner.hide();

    })
  }
  async  GetSPList() {
    this.spinner.show();
    this.Ticketmanagerservice.getSPList().subscribe((Data: any) => {
      this.SPList = Data;
      this.spinner.hide();
    });
  }

  async GetBAList() {
    this.spinner.show();
    this.countryservice.getAllBAs().subscribe((Data: any) => {
      this.BAList = Data;
      this.spinner.hide();
    });
  }
  
  GetTrackDetails(details){
    this.router.navigate(['/track/' + details.complaintId])
  }
  onChangeUserfromdate(event: any) {
    this.UserList = []
    this.UserSDate = event
    if (this.UserEDate == null) {
      for (var i = 0; i < this.UserListCopy.length; i++) {
        this.Useraccepteddate = this.UserListCopy[i].createdOn;
        let res = this.Useraccepteddate.split('T');
        if (res[0] >= this.UserSDate) {
          this.UserList.push(this.UserListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.UserListCopy.length; i++) {
        this.Useraccepteddate = this.UserListCopy[i].createdOn;
        let res = this.Useraccepteddate.split('T');
        if (res[0] <= this.UserEDate && res[0] >= this.UserSDate) {
          this.UserList.push(this.UserListCopy[i])
        }
      }
    }
  }
  onChangeUserTodate(event: any) {
    this.UserList = []
    this.UserEDate = event
    if (this.UserSDate == null) {
      for (var i = 0; i < this.UserListCopy.length; i++) {
        this.Useraccepteddate = this.UserListCopy[i].createdOn;
        let res = this.Useraccepteddate.split('T');
        if (res[0] <= this.UserEDate) {
          this.UserList.push(this.UserListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.UserListCopy.length; i++) {
        this.Useraccepteddate = this.UserListCopy[i].createdOn;
        let res = this.Useraccepteddate.split('T');
        if (res[0] <= this.UserEDate && res[0] >= this.UserSDate) {
          this.UserList.push(this.UserListCopy[i])
        }
      }
    }
  }
  cancelUser() {
    this.UserList = this.UserListCopy
    this.Userfromdate=null
    this.Usertodate=null
    this.UserEDate=null
    this.UserSDate=null
  }
 
  sortuserdate = "1";
  
  sortuserbydate() {
    if (this.sortuserdate == "1") {
      this.UserList.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortuserdate = "2";
    }
    else if (this.sortuserdate == "2") {
      this.UserList.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.sortuserdate = "1";
  
    }
   
  }
  sortusername = "1";

sortuserbyname() {
  if (this.sortusername == "1") {
    this.UserList.sort((a, b) => a.userName.toLowerCase() < b.userName.toLowerCase() ? -1 : a.userName.toLowerCase() > b.userName.toLowerCase() ? 1 : 0)
    this.sortusername = "2";
  }
  else if (this.sortusername == "2") {
    this.UserList.sort((a, b) => a.userName.toLowerCase() > b.userName.toLowerCase() ? -1 : a.userName.toLowerCase() < b.userName.toLowerCase() ? 1 : 0)
    this.sortusername = "1";

  }

}
onChangeServicefromdate(event: any) {
  this.RequestedServicesList = []
  this.ServiceSDate = event
  if (this.ServiceEDate == null) {
    for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
      this.Serviceaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
      let res = this.Serviceaccepteddate.split('T');
      if (res[0] >= this.ServiceSDate) {
        this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
      }
    }
  }
  else {
    for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
      this.Serviceaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
      let res = this.Serviceaccepteddate.split('T');
      if (res[0] <= this.ServiceEDate && res[0] >= this.ServiceSDate) {
        this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
      }
    }
  }
}
onChangeServiceTodate(event: any) {
  this.RequestedServicesList = []
  this.ServiceEDate = event
  if (this.ServiceSDate == null) {
    for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
      this.Serviceaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
      let res = this.Serviceaccepteddate.split('T');
      if (res[0] <= this.ServiceEDate) {
        this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
      }
    }
  }
  else {
    for (var i = 0; i < this.RequestedServicesListCopy.length; i++) {
      this.Serviceaccepteddate = this.RequestedServicesListCopy[i].lastUpdated;
      let res = this.Serviceaccepteddate.split('T');
      if (res[0] <= this.ServiceEDate && res[0] >= this.ServiceSDate) {
        this.RequestedServicesList.push(this.RequestedServicesListCopy[i])
      }
    }
  }
}
cancelService() {
  this.RequestedServicesList = this.RequestedServicesListCopy
  this.servicefromdate=null
  this.servicetodate=null
  this.ServiceEDate=null
  this.ServiceSDate=null
}
sortserviceid="1"
sortbyserviceid() {
  if (this.sortserviceid == "1") {
    this.RequestedServicesList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
    this.sortserviceid = "2";
  }
  else if (this.sortserviceid == "2") {
    this.RequestedServicesList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
    this.sortserviceid = "1";

  }

  
}
sortservicedate = "1"

sortbyservicedate() {
  if (this.sortservicedate == "1") {
    this.RequestedServicesList.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
    this.sortservicedate = "2";
  }
  else if (this.sortservicedate == "2") {
    this.RequestedServicesList.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
    this.sortservicedate = "1";

  }

}
PendingServices() {
  this.spinner.show();
  this.Ticketmanagerservice.GetPendingServicesForAdmin().subscribe((data: any) => {
    this.AssignedServicesList = data;
    this.AssignedServicesListCopy = data
    this.spinner.hide();
  })
}

getallcompletedServices(){
  this.spinner.show();
  this.Ticketmanagerservice.getallcompletedservicesforadmin().subscribe((data: any) => {
    this.CompletedList = data;
    this.spinner.hide();
  })
}

getpendingSPServices(id) {
  this.spinner.show();
  this.Ticketmanagerservice.GetSPPendingServicesForAdmin(id).subscribe((data: any) => {
    this.SPPendingServicesList = data;
    this.SPPendingServicesListCopy = data;
    this.ShowSPPendingServices = true;
    this.ShowSPCompletedServices = false;

    this.spinner.hide();
  })
}
getcompletedSPServices(id) {
  this.spinner.show();
  this.Ticketmanagerservice.GetCompletedSPServicesForAdmin(id).subscribe((data: any) => {
    this.SPCompletedServicesList = data;
    this.SPCompletedServicesListCopy = data
    this.ShowSPCompletedServices = true;
    this.ShowSPPendingServices = false
    this.spinner.hide();
  })
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



onChangeSPAssignfromdate(event: any) {
  this.SPPendingServicesList = []
  this.AssignSDate = event
  if (this.AssignEDate == null) {
    for (var i = 0; i < this.SPPendingServicesList.length; i++) {
      this.Assignaccepteddate = this.SPPendingServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] >= this.AssignSDate) {
        this.SPPendingServicesList.push(this.SPPendingServicesList[i])
      }
    }
  }
  else {
    for (var i = 0; i < this.SPPendingServicesList.length; i++) {
      this.Assignaccepteddate = this.SPPendingServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
        this.SPPendingServicesList.push(this.SPPendingServicesList[i])
      }
    }
  }
}
onChangeSPAssignTodate(event: any) {
  this.SPPendingServicesList = []
  this.AssignEDate = event
  if (this.AssignSDate == null) {
    for (var i = 0; i < this.SPPendingServicesList.length; i++) {
      this.Assignaccepteddate = this.SPPendingServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] <= this.AssignEDate) {
        this.SPPendingServicesList.push(this.SPPendingServicesList[i])
      }
    }
  }
  else {
    for (var i = 0; i < this.SPPendingServicesList.length; i++) {
      this.Assignaccepteddate = this.SPPendingServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
        this.SPPendingServicesList.push(this.SPPendingServicesList[i])
      }
    }
  }
}

onChangeSPcompletedAssignfromdate(event: any) {
  this.SPCompletedServicesList = []
  this.AssignSDate = event
  if (this.AssignEDate == null) {
    for (var i = 0; i < this.SPCompletedServicesList.length; i++) {
      this.Assignaccepteddate = this.SPCompletedServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] >= this.AssignSDate) {
        this.SPCompletedServicesList.push(this.SPCompletedServicesList[i])
      }
    }
  }
  else {
    for (var i = 0; i < this.SPCompletedServicesList.length; i++) {
      this.Assignaccepteddate = this.SPCompletedServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
        this.SPCompletedServicesList.push(this.SPCompletedServicesList[i])
      }
    }
  }
}
onChangeSPcompletedAssignTodate(event: any) {
  this.SPCompletedServicesList = []
  this.AssignEDate = event
  if (this.AssignSDate == null) {
    for (var i = 0; i < this.SPCompletedServicesList.length; i++) {
      this.Assignaccepteddate = this.SPCompletedServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] <= this.AssignEDate) {
        this.SPCompletedServicesList.push(this.SPCompletedServicesList[i])
      }
    }
  }
  else {
    for (var i = 0; i < this.SPCompletedServicesList.length; i++) {
      this.Assignaccepteddate = this.SPCompletedServicesList[i].lastUpdated;
      let res = this.Assignaccepteddate.split('T');
      if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
        this.SPCompletedServicesList.push(this.SPCompletedServicesList[i])
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
}

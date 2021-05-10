import { Component, OnInit } from '@angular/core';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { Router } from '@angular/router';
import { MailService } from '../Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-ppu-customer-list',
  templateUrl: './ppu-customer-list.component.html',
  styleUrls: ['./ppu-customer-list.component.css']
})
export class PpuCustomerListComponent implements OnInit {
  cutlist: any=[];
  uid: string;
  roleid: string;
  groupId: string;
  ppucutlist: any=[];
  ppudoccutlist: any=[];
  SearchPpuDocAppList:any
  SearchPpuAppList:any
  SearchPpuCusList:any
  cutlistcopy: any=[];
  ppudoccutlistcopy: any=[];
  AssignSDate: any;
  AssignEDate: any;
  Assignaccepteddate: any;
  CompletedSDate: any;
  CompletedEDate: any;
  Completedaccepteddate: any;
  NewSDate: any;
  NewEDate: any;
  Newaccepteddate: any;
  showhidevalue: boolean;
  ShowCompletedDetails: boolean;
  PPUCusfromdate:any
  PPUCustodate: any;
  ppucutlistcopy: any=[];
  Custodate: any;
  Cusfromdate: any;
  PpuDoctodate: any;
  PpuDocfromdate: any;
  constructor(private messageService: MessageService,private workflowtrnsservice: WorkflowtransService, private router: Router, private mailservice: MailService,
    private spinner: NgxSpinnerService,) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem('IsLoggedIn') == "true") {
        this.uid = localStorage.getItem("userId");
        this.roleid = localStorage.getItem("role");
        this.groupId = localStorage.getItem("groupId");
  
      }
     }

  ngOnInit() {
    this.GetPPUcustlist();
    this.GetPPULoanApplicationCustList();
    this.GetPPUDoccustlist();
  }
  GetPPUcustlist() {
    this.spinner.show()
    this.workflowtrnsservice.getppucustlist().subscribe((data: any) => {
      this.ppucutlist = data;
      this.ppucutlistcopy=data
      console.log(this.ppucutlist);
      this.spinner.hide()
    })
  }

  GetPPULoanApplicationCustList() {
    this.spinner.show()
    this.workflowtrnsservice.getppuloanapplist().subscribe((data: any) => {
      this.cutlist = data;
      this.cutlistcopy=data
      console.log(this.cutlist);
      this.spinner.hide()
    })
  }

  GetPPUDoccustlist() {
    this.spinner.show()
    this.workflowtrnsservice.getppuDoccustlist().subscribe((data: any) => {
      this.ppudoccutlist = data;
      this.ppudoccutlistcopy = data;
      console.log(this.ppudoccutlist);
      this.spinner.hide()
    })
  }
  onChangeppulisfromdate(event: any) {
    this.ppucutlist = []
    this.AssignSDate = event
    if (this.AssignEDate == null) {
      for (var i = 0; i < this.ppucutlistcopy.length; i++) {
        this.Assignaccepteddate = this.ppucutlistcopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] >= this.AssignSDate) {
          this.ppucutlist.push(this.ppucutlistcopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.ppucutlistcopy.length; i++) {
        this.Assignaccepteddate = this.ppucutlistcopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.ppucutlist.push(this.ppucutlistcopy[i])
        }
      }
    }
  }
  onChangeppulisTodate(event: any) {
    this.ppucutlist = []
    this.AssignEDate = event
    if (this.AssignSDate == null) {
      for (var i = 0; i < this.ppucutlistcopy.length; i++) {
        this.Assignaccepteddate = this.ppucutlistcopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate) {
          this.ppucutlist.push(this.ppucutlistcopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.ppucutlistcopy.length; i++) {
        this.Assignaccepteddate = this.ppucutlistcopy[i].createdOn;
        let res = this.Assignaccepteddate.split('T');
        if (res[0] <= this.AssignEDate && res[0] >= this.AssignSDate) {
          this.ppucutlist.push(this.ppucutlistcopy[i])
        }
      }
    }
  }
  cancelppulis() {
    this.ppucutlist = this.ppucutlistcopy
    this.PPUCustodate=null
    this.PPUCusfromdate=null
  }
  onChangecutlistfromdate(event: any) {
    this.cutlist = []
    this.CompletedSDate = event
    if (this.CompletedEDate == null) {
      for (var i = 0; i < this.cutlistcopy.length; i++) {
        this.Completedaccepteddate = this.cutlistcopy[i].createdOn;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] >= this.CompletedSDate) {
          this.cutlist.push(this.cutlistcopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.cutlistcopy.length; i++) {
        this.Completedaccepteddate = this.cutlistcopy[i].createdOn;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.cutlist.push(this.cutlistcopy[i])
        }
      }
    }
  }
  onChangecutlistTodate(event: any) {
    this.cutlist = []
    this.CompletedEDate = event
    if (this.CompletedSDate == null) {
      for (var i = 0; i < this.cutlistcopy.length; i++) {
        this.Completedaccepteddate = this.cutlistcopy[i].createdOn;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate) {
          this.cutlist.push(this.cutlistcopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.cutlistcopy.length; i++) {
        this.Completedaccepteddate = this.cutlistcopy[i].createdOn;
        let res = this.Completedaccepteddate.split('T');
        if (res[0] <= this.CompletedEDate && res[0] >= this.CompletedSDate) {
          this.cutlist.push(this.cutlistcopy[i])
        }
      }
    }
  }
  cancelcutlist() {
    this.cutlist = this.cutlistcopy
    this.Custodate=null
    this.Cusfromdate=null
  }
  onChangeppudocfromdate(event: any) {
    this.ppudoccutlist = []
    this.NewSDate = event
    if (this.NewEDate == null) {
      for (var i = 0; i < this.ppudoccutlistcopy.length; i++) {
        this.Newaccepteddate = this.ppudoccutlistcopy[i].createdOn;
        let res = this.Newaccepteddate.split('T');
        if (res[0] >= this.NewSDate) {
          this.ppudoccutlist.push(this.ppudoccutlistcopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.ppudoccutlistcopy.length; i++) {
        this.Newaccepteddate = this.ppudoccutlistcopy[i].createdOn;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
          this.ppudoccutlist.push(this.ppudoccutlistcopy[i])
        }
      }
    }
  }
  onChangeppudocTodate(event: any) {
    this.ppudoccutlist = []
    this.NewEDate = event
    if (this.NewSDate == null) {
      for (var i = 0; i < this.ppudoccutlistcopy.length; i++) {
        this.Newaccepteddate = this.ppudoccutlistcopy[i].createdOn;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate) {
          this.ppudoccutlist.push(this.ppudoccutlistcopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.ppudoccutlistcopy.length; i++) {
        this.Newaccepteddate = this.ppudoccutlistcopy[i].createdOn;
        let res = this.Newaccepteddate.split('T');
        if (res[0] <= this.NewEDate && res[0] >= this.NewSDate) {
          this.ppudoccutlist.push(this.ppudoccutlistcopy[i])
        }
      }
    }
  }
  cancelppudoc() {
    this.ppudoccutlist = this.ppudoccutlistcopy
    this.PpuDoctodate=null
    this.PpuDocfromdate=null
  }
  sortppuserviceid = "1";


sortPPUbyserviceid() {
  if (this.sortppuserviceid == "1") {
    this.ppucutlist.sort((a, b) => a.ticketId.toLowerCase() < b.ticketId.toLowerCase() ? -1 : a.ticketId.toLowerCase() > b.ticketId.toLowerCase() ? 1 : 0)
    this.sortppuserviceid = "2";
  }
  else if (this.sortppuserviceid == "2") {
    this.ppucutlist.sort((a, b) => a.ticketId.toLowerCase() > b.ticketId.toLowerCase() ? -1 : a.ticketId.toLowerCase() < b.ticketId.toLowerCase() ? 1 : 0)
    this.sortppuserviceid = "1";

  }

}
sortppudate = "1";

sortPPUbydate() {
  if (this.sortppudate == "1") {
    this.ppucutlist.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
    this.sortppudate = "2";
  }
  else if (this.sortppudate == "2") {
    this.ppucutlist.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
    this.sortppudate = "1";

  }
 
}
sortcusserviceid = "1";


sortCusbyserviceid() {
  if (this.sortcusserviceid == "1") {
    this.cutlist.sort((a, b) => a.customerId.toLowerCase() < b.customerId.toLowerCase() ? -1 : a.customerId.toLowerCase() > b.customerId.toLowerCase() ? 1 : 0)
    this.sortcusserviceid = "2";
  }
  else if (this.sortcusserviceid == "2") {
    this.cutlist.sort((a, b) => a.customerId.toLowerCase() > b.customerId.toLowerCase() ? -1 : a.customerId.toLowerCase() < b.customerId.toLowerCase() ? 1 : 0)
    this.sortcusserviceid = "1";

  }

}
sortcusdate = "1";

sortCusbydate() {
  if (this.sortcusdate == "1") {
    this.cutlist.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
    this.sortcusdate = "2";
  }
  else if (this.sortcusdate == "2") {
    this.cutlist.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
    this.sortcusdate = "1";

  }
 
}

sortppudocserviceid = "1";


sortPPUDocbyserviceid() {
  if (this.sortppudocserviceid == "1" ) {
    this.ppudoccutlist.sort((a, b) => a.customerId.toLowerCase() < b.customerId.toLowerCase() ? -1 : a.customerId.toLowerCase() > b.customerId.toLowerCase() ? 1 : 0)
    this.sortppudocserviceid = "2";
  }
  else if (this.sortppudocserviceid == "2" ) {
    this.ppudoccutlist.sort((a, b) => a.customerId.toLowerCase() > b.customerId.toLowerCase() ? -1 : a.customerId.toLowerCase() < b.customerId.toLowerCase() ? 1 : 0)
    this.sortppudocserviceid = "1";

  }

}
sortppudocdate = "1";

sortPPUDocbydate() {
  if (this.sortppudocdate == "1") {
    this.ppudoccutlist.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
    this.sortppudocdate = "2";
  }
  else if (this.sortppudocdate == "2") {
    this.ppudoccutlist.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
    this.sortppudocdate = "1";

  }
 
}

}

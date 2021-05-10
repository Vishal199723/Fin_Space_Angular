import { Component, OnInit, ViewChild } from '@angular/core';
import { MailService } from 'src/app/Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MailData } from 'src/app/ViewModels/MailData';
import { UserService } from 'src/app/Shared/UserMaster/user.service';
import { DatePipe } from '@angular/common';
import { TicketManagerService } from 'src/app/Shared/TicketManager/ticket-manager.service';
import { Router } from '@angular/router';
import { WorkflowtransService } from 'src/app/Shared/Workflow/workflowtrans.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('closebuttonuser') closebuttonuser;

  p: number = 1; q: number = 1;
  uid: string;
  InboxMessages: any = [];
  maildata: any;
  roleid: string;
  selectedstatusid: any;
  selecteduserid: any;
  StatusList: any;
  UserList: any;
  date: string;
  notify: string;
  dismissalert: boolean;
  workflowid: boolean;
  taskassign: boolean;
  res: any;
  ticketid: any;
  UserListForEmployee: any;
  selecteduseridforemp: any;
  tospid: any;
  groupId: string;
  comments: any;
  TicketsList: any;
  files1: any;
  SelectedFiles: any = [];
  useridformail: any;
  selectedticketid: any;
  ToUsersForMail: any;
  subject: any;
  message: any;
  mailsubject: any;
  frmDataa: FormData;
  composemail: boolean;
  MailDetails: any;
  docscount: boolean;
  DocumnetsList: any;
  useridexist: boolean = false;
  SearchInbox: any
  SDate: any;
  EDate: any;
  accepteddate: any;
  InboxMessagesCopy: any = [];
  fromdate: any
  todate: any
  statusandWfId: string;
  workflowids: string;
  MailWorkflowId: any;
  externalemail: any;
  Exticketid: any;
  ExMailWorkflowId: any;
  ExMailId: any;
  ExTransId: any;
  ExFromUser: string;
  constructor(private messageService: MessageService, private mailservice: MailService, private spinner: NgxSpinnerService, private _urls: AppGlobals,
    private userservice: UserService, private datepipe: DatePipe, private Ticketmanagerservice: TicketManagerService,
    private Workflowservice: WorkflowtransService, private router: Router, private httpService: HttpClient) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
    }
    this.composemail = false;
  }

  ngOnInit() {
    this.workflowids = localStorage.getItem("workflowid");
    this.GetInboxMessages();
    this.GetUserList();
    this.GetUserTickets();
    this.GetUsersforMail();
  }
  async GetInboxMessages() {
    this.spinner.show()
    this.mailservice.GetInboxMessages(this.uid).subscribe((data: any) => {
      this.InboxMessages = data;
      this.InboxMessagesCopy = data;

      for (let index = 0; index < this.InboxMessages.length; index++) {
        if (this.InboxMessages[index].workflowId == '1011') {
          this.useridexist = true;
          break;
        }
      }
      this.spinner.hide()

    })
  }
  openMailforExternal(data) {
    this.Exticketid = data.ticketId;
    this.ExMailWorkflowId = data.workflowId;
    this.ExMailId = data.mailId;
    this.ExTransId = data.transId;
    this.ExFromUser = this.uid;

    this.ticketid = data.ticketId;
    this.MailWorkflowId = data.workflowId
    this.GetStatusList();

    const inputRequest: MailData = {
      MailId: data.mailId,
      TransId: data.transId,
      FromUser: this.uid,
      TicketId: data.ticketId,
      TickedId: data.ticketId

    }
    this.spinner.show();
    this.mailservice.sendMail(inputRequest).subscribe((data: any) => {
      this.spinner.hide();
      if (data != null) {
        this.maildata = data;
      }
    }
    );
    this.GetUserListforEmp();
  }
  SendExternalUserMail(data: any) {

    var det = {
      ExternalEmail: this.externalemail,
      Exticketid: this.Exticketid,
      ExMailWorkflowId: this.ExMailWorkflowId,
      ExMailId: this.ExMailId,
      ExTransId: this.ExTransId,
      ExFromUser: this.uid,
    }
    const frmDataaone = new FormData();

    frmDataaone.append("MailData", JSON.stringify(this.maildata));

    frmDataaone.append("MessageData", JSON.stringify(det));


    this.spinner.show();
    this.httpService.post(this._urls.weburl + '/api/EnterPriseRegistration/PostSendDetailsToExternalUser/', frmDataaone).subscribe(
      data => {
        this.spinner.hide();
        alert("Mail Sent to External User Successfully");
        this.mailsubject = "";
        this.message = "";
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }
  GetUserTickets() {
    this.spinner.show()
    this.mailservice.getUserTickets(this.uid).subscribe((data: any) => {
      this.TicketsList = data;
      this.spinner.hide()
    })
  }
  GetUsersforMail() {
    this.spinner.show()
    this.mailservice.getUsersformail(this.uid).subscribe((data: any) => {
      this.ToUsersForMail = data;
      console.log(this.ToUsersForMail);
      this.spinner.hide()
    })
  }



  GetUserList() {
    this.spinner.show()
    this.mailservice.getParticularUsers(this.roleid).subscribe((data: any) => {
      this.UserList = data;
      this.spinner.hide()
    })
  }
  // GetStatusList() {
  //   this.spinner.show()
  //   this.statusandWfId = this.roleid+','+this.workflowids;
  //   this.mailservice.GetStatusList(this.statusandWfId).subscribe((data: any) => {
  //     this.StatusList = data;
  //     this.spinner.hide()
  //   })
  // }
  GetStatusList() {
    this.spinner.show()
    var sendworkflowid = this.MailWorkflowId + "," + this.roleid;
    this.mailservice.GetStatusList(sendworkflowid).subscribe((data: any) => {
      this.StatusList = data;
      this.spinner.hide()
    })
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
  }
  onSelectUser(id) {
    this.selecteduserid = id;
  }

  onSelectUserforemp(id) {
    this.selecteduseridforemp = id;
  }
  GetUserListforEmp() {
    this.spinner.show()
    this.mailservice.getParticularUsersforEmp(this.ticketid).subscribe((data: any) => {
      this.UserListForEmployee = data;
      this.spinner.hide()
    })
  }

  openMail(data) {
    this.ticketid = data.ticketId;
    this.MailWorkflowId = data.workflowId
    this.GetStatusList();

    const inputRequest: MailData = {
      MailId: data.mailId,
      TransId: data.transId,
      FromUser: this.uid,
      TicketId: data.ticketId,
      TickedId: data.ticketId

    }

    this.spinner.show();

    this.mailservice.sendMail(inputRequest).subscribe((data: any) => {
      this.spinner.hide();
      if (data != null) {
        this.maildata = data;
        var data1 = this.uid + "-" + "0" + "-" + "0" + "-" + data.complaintId;
        localStorage.setItem("custidwithmailid", data1);
        localStorage.setItem("workflowid", data.workflowId);
        if (this.maildata.toServiceProvider != "") {
          this.tospid = this.maildata.toServiceProvider;
          this.selecteduserid = this.tospid;
        }
        if (data.workflowId == 1 || data.workflowId == 1008) {
          this.workflowid = true;

        }
        else if (data.workflowId == 2) {
          this.workflowid = false;
        }
        else if (data.workflowId == 3 && data.requestType == 1) {
          this.closebuttonuser.nativeElement.click();
          this.router.navigate(['/Homeloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 3) {
          this.router.navigate(['/vehicaldetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 13) {
          this.router.navigate(['/businessdetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 14) {
          this.closebuttonuser.nativeElement.click();
          this.router.navigate(['/suretyloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 15) {
          this.router.navigate(['/smallscaleloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 16) {
          this.router.navigate(['/Educationloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 17) {
          this.router.navigate(['/Goldloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 18) {
          this.router.navigate(['/projectloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 20) {
          this.router.navigate(['/Fixedassetloandetails']);
        }
        else if (data.workflowId == 3 && data.requestType == 26) {
          this.router.navigate(['/termlifeinsurancedetails']);
        }
        else if (data.workflowId == 1 && data.requestType == 8) {
          this.router.navigate(['/mutualfunddetails']);
        }
        else if (data.workflowId == 1011) {
          this.composemail = true;
          this.GetMailDetails(this.maildata);
          document.getElementById("composemaildetails").click();
        }
        this.date = this.datepipe.transform(this.maildata.lastUpdated, 'dd-MM-yyyy hh:mm:ss a');

      }
    }
    );
    this.GetUserListforEmp();
  }

  GetMailDetails(data) {
    var ids = data.mailId + "," + data.transId + "," + this.uid;
    this.spinner.show()
    this.mailservice.getmaildetails(ids).subscribe((data: any) => {
      this.MailDetails = data;
      var aaa = this.MailDetails.allDetails.documents.length;
      this.DocumnetsList = this.MailDetails.allDetails.documents;
      if (aaa == 0) {
        this.docscount = false;
      }
      else {
        this.docscount = true;
      }
      console.log(data);
      this.spinner.hide();
    })
  }

  assigntask() {
    this.spinner.show();
    var data1 = {
      id: this.maildata.id,
      ToUser: this.selecteduserid,
      Status: this.selectedstatusid,
      FromUser: this.uid,
      MailId: this.maildata.mailId,
      TicketId: this.ticketid,
      TickedId: this.ticketid

    }
    this.Ticketmanagerservice.saveAssignedTasks(data1).subscribe((data: any) => {
      if (data == "success") {
        this.notify = "Sent Successfully!!"
        setTimeout(() => this.dismissalert = true, 100);
        setTimeout(function () {
          this.dismissalert = false;
        }.bind(this), 3000);
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

  AcceptOrRejecttask() {
    if (this.selecteduseridforemp == null || this.selecteduseridforemp == undefined) {
      alert("Please Select To User")
    }
    else if (this.selectedstatusid == null || this.selectedstatusid == undefined) {
      alert("Please Select Status")

    }
    else {
      this.closebutton.nativeElement.click();

      this.spinner.show();
      var data1 = {
        id: this.maildata.id,
        ToUser: this.selecteduseridforemp,
        Status: this.selectedstatusid,
        FromUser: this.uid,
        MailId: this.maildata.mailId,
        TicketId: this.ticketid
      }
      this.Ticketmanagerservice.saveAcceptTasks(data1).subscribe((data: any) => {
        if (data == "success") {
          this.notify = "Sent Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
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
  }
  getpropsdata(id) {
    this.mailservice.getPropsid(id).subscribe((data: any) => {
      if (data != "null") {
        if (data.loanTypeId == "1" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/businessloanform'])
        }
        else if (data.loanTypeId == "4" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/smallscaleloanform'])
        }
        else if (data.loanTypeId == "3" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/suretyloanform'])
        }
        else if (data.loanTypeId == "2" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/vehecleloanform'])
        }
        else if (data.loanTypeId == "1002" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/Educationloan'])
        }
        else if (data.loanTypeId == "1001" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/Goldloan'])
        }
        else if (data.loanTypeId == "5" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/fixedassetloan'])
        }
        else if (data.loanTypeId == "6" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/Projectloan'])
        }
        else if (data.loanTypeId == "1003" && data.serviceTypeId == "4") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/homeloan'])
        }
        else if (data.loanTypeId == "1" && data.serviceTypeId == "6") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/fdform'])
        }
        else if (data.loanTypeId == "2" && data.serviceTypeId == "6") {
          localStorage.setItem('ProposID', id);
          this.router.navigate(['/Mutualfund'])
        }
        
        // if (data == "1") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/businessloanform'])
        // }
        // else if (data == "1004") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/fdform'])
        // }
        // else if (data == "4") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/smallscaleloanform'])
        // }
        // else if (data == "3") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/suretyloanform'])
        // }
        // else if (data == "2") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/vehecleloanform'])
        // }
        // else if (data == "1002") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/Educationloan'])
        // }
        // else if (data == "1001") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/Goldloan'])
        // }
        // else if (data == "5") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/fixedassetloan'])
        // }
        // else if (data == "6") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/Projectloan'])
        // }
        // else if (data == "1003") {
        //   localStorage.setItem('ProposID', id);
        //   this.router.navigate(['/homeloan'])
        // }


      }
    });
  }

  GetInboxData(data) {

    if ((data.prospectId != null && data.prospectId != "")&&data.workflowId == 1011) {
      this.getpropsdata(data.prospectId);
    }
    else if (data.workflowId === 1002 || data.workflowId === 1009) {
      var data1 = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.ticketId + "-" + data.workflowId;
      localStorage.setItem("custidwithmailid", data1);
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);

      if (data.requestType == 1) {
        this.router.navigate(['/Homeloandetails']);
      }
      else if (data.requestType == 3) {
        this.router.navigate(['/vehicaldetails']);
      }
      else if (data.requestType == 13) {
        this.router.navigate(['/businessdetails']);
      }
      else if (data.requestType == 14) {
        this.router.navigate(['/suretyloandetails']);
      }
      else if (data.requestType == 15) {
        this.router.navigate(['/smallscaleloandetails']);
      }
      else if (data.requestType == 16) {
        this.router.navigate(['/Educationloandetails']);
      }
      else if (data.requestType == 17) {
        this.router.navigate(['/Goldloandetails']);
      }
      else if (data.requestType == 18) {
        this.router.navigate(['/projectloandetails']);
      }
      else if (data.requestType == 20) {
        this.router.navigate(['/Fixedassetloandetails']);
      }
      else if (data.workflowId == 3 && data.requestType == 26) {
        this.router.navigate(['/termlifeinsurancedetails']);
      }
      else if (data.workflowId == 1 && data.requestType == 8) {
        this.router.navigate(['/mutualfunddetails']);
      }
      else if (data.requestType == 1030) {
        this.router.navigate(['/fdloandetails']);
      }
    }
    else if (data.workflowId == 1003) {
      var sbadata = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.workflowId;;
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);
      localStorage.setItem("sbaccount", sbadata)
      this.router.navigate(['/sbaccntproposal']);
    }

    else if (data.workflowId == 1004) {
      var ladata = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.workflowId;;
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);
      localStorage.setItem("ladata", ladata)
      this.router.navigate(['/loanapplication']);
    }
    else if (data.workflowId == 1005) {
      var ladata = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.workflowId;;
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);
      localStorage.setItem("ladata", ladata)
      this.router.navigate(['/loandocumentation']);
    }
    else if (data.workflowId == 1006) {
      var ladata = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.workflowId;;
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);
      localStorage.setItem("ladata", ladata)
      this.router.navigate(['/loandisbursement']);
    }
    if (data.workflowId === 1008) {
      var data1 = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.workflowId;;
      localStorage.setItem("custidwithmailid", data1);
      localStorage.setItem("workflowid", data.workflowId);
      localStorage.setItem("baid", data.fromUser);
      localStorage.setItem("ProspectIdtoDisplydata", data.prospectId)
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);

      if (data.requestType == 1) {
        this.router.navigate(['/Homeloandetails']);
      }
      else if (data.requestType == 3) {
        this.router.navigate(['/vehicaldetails']);
      }
      else if (data.requestType == 13) {
        this.router.navigate(['/businessdetails']);
      }
      else if (data.requestType == 14) {
        this.router.navigate(['/suretyloandetails']);
      }
      else if (data.requestType == 15) {
        this.router.navigate(['/smallscaleloandetails']);
      }
      else if (data.requestType == 16) {
        this.router.navigate(['/Educationloandetails']);
      }
      else if (data.requestType == 17) {
        this.router.navigate(['/Goldloandetails']);
      }
      else if (data.requestType == 18) {
        this.router.navigate(['/projectloandetails']);
      }
      else if (data.requestType == 20) {
        this.router.navigate(['/Fixedassetloandetails']);
      }
      else if (data.requestType == 8) {
        this.router.navigate(['/mutualfunddetails']);
      }
      else if (data.requestType == 5) {
        this.router.navigate(['/HealthInsuranceDetails']);
      }
      else if (data.requestType == 7) {
        this.router.navigate(['/dataLifeInsurance']);
      }
      else if (data.requestType == 23) {
        this.router.navigate(['/HomeInsuranceDetails']);
      }
      else if (data.requestType == 24) {
        this.router.navigate(['/MotorInsurancedetails']);
      }
      else if (data.requestType == 25) {
        this.router.navigate(['/accidentinsurancedetails']);
      }
      else if (data.requestType == 26) {
        this.router.navigate(['/termlifeinsurancedetails']);
      }
      else if (data.requestType == 27) {
        this.router.navigate(['/fdloandetails']);
      }
      else if (data.requestType == 1030) {
        this.router.navigate(['/fdloandetails']);
      }
    }
    if (data.workflowId === 1 || data.workflowId === 2) {
      var data1 = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.ticketId + "-" + data.workflowId;;
      localStorage.setItem("custidwithmailid", data1);
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      localStorage.setItem("ProspectIdtoDisplydata", data.prospectId)
      this.ChangeMailStatus(maildata);

      if (data.requestType == 1) {
        this.router.navigate(['/Homeloandetails']);
      }
      else if (data.requestType == 3) {
        this.router.navigate(['/vehicaldetails']);
      }
      else if (data.requestType == 13) {
        this.router.navigate(['/businessdetails']);
      }
      else if (data.requestType == 14) {
        this.router.navigate(['/suretyloandetails']);
      }
      else if (data.requestType == 15) {
        this.router.navigate(['/smallscaleloandetails']);
      }
      else if (data.requestType == 16) {
        this.router.navigate(['/Educationloandetails']);
      }
      else if (data.requestType == 17) {
        this.router.navigate(['/Goldloandetails']);
      }
      else if (data.requestType == 18) {
        this.router.navigate(['/projectloandetails']);
      }
      else if (data.requestType == 20) {
        this.router.navigate(['/Fixedassetloandetails']);
      }
      else if (data.requestType == 8) {
        this.router.navigate(['/mutualfunddetails']);
      }
      else if (data.requestType == 1030) {
        this.router.navigate(['/fdloandetails']);
      }
    }
    else if (data.workflowId === 1) {
      var data1 = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.workflowId;;
      localStorage.setItem("custidwithmailid", data1);
      localStorage.setItem("workflowid", data.workflowId);
      localStorage.setItem("ticketidfrommail", data.ticketId);
      localStorage.setItem("ProspectIdtoDisplydata", data.prospectId)
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid + "-" + data.workflowId;;
      this.ChangeMailStatus(maildata);
      if (data.requestType == 23) {
        this.router.navigate(['/HomeInsuranceDetails']);
      }
      else if (data.requestType == 24) {
        this.router.navigate(['/MotorInsurancedetails']);
      }
      else if (data.requestType == 7) {
        this.router.navigate(['/dataLifeInsurance']);
      }
      else if (data.requestType == 5) {
        this.router.navigate(['/HealthInsuranceDetails']);
      }
      else if (data.requestType == 25) {
        this.router.navigate(['/accidentinsurancedetails']);
      }
      else if (data.requestType == 26) {
        this.router.navigate(['/termlifeinsurancedetails']);
      }
      else if (data.requestType == 8) {
        this.router.navigate(['/mutualfunddetails']);
      }
    }

    else if (data.workflowId == 1010) {
      var ladata = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.ticketId + "-" + data.workflowId;;
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      this.ChangeMailStatus(maildata);
      localStorage.setItem("ladata", ladata)
      this.router.navigate(['/ppuloandocumentation']);
    }
    if (data.workflowId === 1) {
      var data1 = data.customerId + "-" + data.transId + "-" + data.mailId + "-" + data.ticketId + "-" + data.workflowId;;
      localStorage.setItem("custidwithmailid", data1);
      var maildata = data.customerId + "-" + data.transId + "-" + this.uid;
      localStorage.setItem("ProspectIdtoDisplydata", data.prospectId)

      this.ChangeMailStatus(maildata);

      if (data.requestType == 1) {
        this.router.navigate(['/Homeloandetails']);
      }
      else if (data.requestType == 3) {
        this.router.navigate(['/vehicaldetails']);
      }
      else if (data.requestType == 13) {
        this.router.navigate(['/businessdetails']);
      }
      else if (data.requestType == 14) {
        this.router.navigate(['/suretyloandetails']);
      }
      else if (data.requestType == 15) {
        this.router.navigate(['/smallscaleloandetails']);
      }
      else if (data.requestType == 16) {
        this.router.navigate(['/Educationloandetails']);
      }
      else if (data.requestType == 17) {
        this.router.navigate(['/Goldloandetails']);
      }
      else if (data.requestType == 18) {
        this.router.navigate(['/projectloandetails']);
      }
      else if (data.requestType == 20) {
        this.router.navigate(['/Fixedassetloandetails']);
      }
      else if (data.requestType == 8) {
        this.router.navigate(['/mutualfunddetails']);
      }
    }
    else if (data.workflowId == 1011) {
      this.composemail = true;
      this.GetMailDetails(this.maildata);
      document.getElementById("composemaildetails").click();
    }

    else if(data.workflowId == 1013){
      var spid = data.customerId + "-" + data.mailId + "-"+ data.workflowId;
      localStorage.setItem("spdetailsId", spid);     
        this.router.navigate(['/spapproval']);     
    }
    else if(data.workflowId == 1014){
      var baid = data.customerId + "-" + data.mailId + "-"+ data.workflowId;
      localStorage.setItem("badetailsId", baid);     
        this.router.navigate(['/baapproval']);     
    }
  }


  ChangeMailStatus(maildata) {
    this.spinner.show()
    this.Workflowservice.updateMailStatus(maildata).subscribe((data: any) => {
      this.res = data;
      this.spinner.hide()
    })
  }

  sendtoppu(data) {

    var mailtoppu = {
      Id: 0,
      CustomerId: data.customerId,
      MailId: data.mailId,
      TransId: data.transId,
      FromUser: this.uid,
      ToUser: this.groupId,
      GroupId: this.groupId,
      WorkflowState: this.selectedstatusid,
      Comments: "Verify",
      TickedId: data.ticketId
    };

    this.Workflowservice.sendtoPPU(mailtoppu).subscribe((data: any) => {
      this.spinner.hide()
      this.res = data;
      this.spinner.hide()
    })
  }

  GetGroupId(grpid) {
    var groupid = "";
    if (grpid === "1003") {
      groupid = "1004";
    }
    else if (grpid === "1004") {
      groupid = "1005";
    }
    else if (grpid === "1005") {
      groupid = "1006";
    }
    else if (grpid === "1006") {
      groupid = "1007";
    }
    else if (grpid === "1007") {
      groupid = "1008";
    }
    else if (grpid === "1007") {
      groupid = "1008";
    }
    else if (grpid === "1008") {
      groupid = "1009";
    }
    else if (grpid === "1009") {
      groupid = "1010";
    }
    else if (grpid === "1010") {
      groupid = "1014";
    }
    else if (grpid === "1014") {
      groupid = "1015";
    }
    else if (grpid === "1015") {
      groupid = "1016";
    }
    else if (grpid === "1016") {
      groupid = "1017";
    }
    else if (grpid === "1017") {
      groupid = "1018";
    }
    else if (grpid === "1018") {
      groupid = "1019";
    }
    else if (grpid === "1019") {
      groupid = "1018";
    }
    else if (grpid === "1020") {
      groupid = "1021";
    }
    else if (grpid === "1021") {
      groupid = "1020";
    }
    else if (grpid === "1022") {
      groupid = "1023";
    }
    else if (grpid === "1023") {
      groupid = "1024";
    }
    else if (grpid === "1024") {
      groupid = "1024";
    }
    return groupid;
  }


  onChangeDocumnets(event: any) {
    this.frmDataa = new FormData();
    let files = [].slice.call(event.target.files);
    for (var i = 0; i < files.length; i++) {
      this.SelectedFiles.push(files[i]);
      this.frmDataa.append("Docs", files[i]);
    }
  }
  sendmail() {
    var det = {
      TicketId: this.selectedticketid,
      FromId: this.uid,
      ToUser: this.useridformail,
      Subject: this.mailsubject,
      Message: this.message,
    }
    this.frmDataa.append("MessageData", JSON.stringify(det));
    this.spinner.show();
    this.httpService.post(this._urls.weburl + '/api/ComposeMail/PostSaveNewMail/', this.frmDataa).subscribe(
      data => {
        this.spinner.hide();
        alert("Mail Sent Successfully");
        this.mailsubject = "";
        this.message = "";
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }
  onSelectTicket(data) {
    this.selectedticketid = data;
  }
  onSelectUserformail(data) {
    this.useridformail = data;
  }

  gotoinbox() {
    this.router.navigate(['/inbox']);
  }
  gotosentitems() {
    this.router.navigate(['/sentitems']);
  }
  gotodeleteitems() {
    this.router.navigate(['/deleteditems']);
  }
  deletemail(data) {
    var ids = data.mailId + "," + data.transId;
    this.spinner.show()
    this.mailservice.deletedmail(ids).subscribe((data: any) => {
      this.spinner.hide();
      alert("Deleted Successfully");
      this.GetInboxMessages();

    })
  }
  close() {
    document.getElementById("composemaildetails")[0].style = 'hidden';
  }
  onChangefromdate(event: any) {
    this.InboxMessages = []
    this.SDate = event
    if (this.EDate == null) {
      for (var i = 0; i < this.InboxMessagesCopy.length; i++) {
        this.accepteddate = this.InboxMessagesCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] >= this.SDate) {
          this.InboxMessages.push(this.InboxMessagesCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.InboxMessagesCopy.length; i++) {
        this.accepteddate = this.InboxMessagesCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.InboxMessages.push(this.InboxMessagesCopy[i])
        }
      }
    }
  }
  onChangeTodate(event: any) {
    this.InboxMessages = []
    this.EDate = event
    if (this.SDate == null) {
      for (var i = 0; i < this.InboxMessagesCopy.length; i++) {
        this.accepteddate = this.InboxMessagesCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate) {
          this.InboxMessages.push(this.InboxMessagesCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.InboxMessagesCopy.length; i++) {
        this.accepteddate = this.InboxMessagesCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.InboxMessages.push(this.InboxMessagesCopy[i])
        }
      }
    }
  }
  cancel() {
    this.InboxMessages = this.InboxMessagesCopy
    this.fromdate = null
    this.todate = null
    this.SDate = null
    this.EDate = null
  }
  sortname = "1";


  sortbyname() {
    if (this.sortname == "1") {
      this.InboxMessages.sort((a, b) => a.fromUser.toLowerCase() < b.fromUser.toLowerCase() ? -1 : a.fromUser.toLowerCase() > b.fromUser.toLowerCase() ? 1 : 0)
      this.sortname = "2";
    }
    else if (this.sortname == "2") {
      this.InboxMessages.sort((a, b) => a.fromUser.toLowerCase() > b.fromUser.toLowerCase() ? -1 : a.fromUser.toLowerCase() < b.fromUser.toLowerCase() ? 1 : 0)
      this.sortname = "1";

    }

  }
  sortdate = "1";

  sortbydate() {
    if (this.sortdate == "1") {
      this.InboxMessages.sort((a, b) => a.lastUpdated < b.lastUpdated ? -1 : a.lastUpdated > b.lastUpdated ? 1 : 0)
      this.sortdate = "2";
    }
    else if (this.sortdate == "2") {
      this.InboxMessages.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0)
      this.sortdate = "1";

    }

  }
}

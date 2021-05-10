import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { FilerequestService } from 'src/app/Shared/FileRequest/filerequest.service';
import { SendRequest } from 'src/app/ViewModels/SendRequest';
import { CloseRequest } from 'src/app/ViewModels/closerequest';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-file-requests',
  templateUrl: './file-requests.component.html',
  styleUrls: ['./file-requests.component.scss']
})
export class FileRequestsComponent implements OnInit {
  closeResult: string;
  m: any;
  errormsg:any
  theCheckbox:any
  msg: any;
  isLoggedIn: boolean;
  uid: string;
  userName: string;
  roleid: string;
  pid: string;
  usermail: string;
  gridvalue: string;
  Folders: any;
  Requsetingfiles: any;
  FolderName: any;
  requestedfoldername: any;
  Friends: any;
  frndslist: any;
  selectedFriend: any =[];
  ClosedReturnDetails: any=[];
  OpenReturnDetails: any = [];
  requiredalluserss: any;
  marked: any;
  generalprogressbar: boolean;
  folderCreating: boolean;
  Creatingmsg: string;
  public n: any = 20;
  num: any; num1: any;
  users: any[];
  createdmsg: string;
  foldercreated: boolean;
  optionalmsg: string;
  count: number;
  requestingfor: string;
  likes: string;
  notify: string;
  dismissalert: boolean;
  OpenedFiles: any;
  Open: boolean;
  ClosedFiles: any;
  Close: boolean;
  searchfiles: boolean;
  OpenReturnDetails1: any = [];
  NoFileRequests: boolean;
  ClosedReturnDetails1: any = [];
  showper: boolean;
  selectedTab: number;
  OpenedResult: any;
  constructor( private messageService: MessageService,private spinner:NgxSpinnerService,private userservice: UserDetailsService, 
    private filerequestservice:FilerequestService) { 
    window.scrollTo(0,0);
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.isLoggedIn = true;
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.userName = localStorage.getItem("UserName");
      this.pid = localStorage.getItem("parentid");
      this.usermail = localStorage.getItem("MailId");
      this.gridvalue = localStorage.getItem("gridvalue");
    }
  }

  ngOnInit() {
    // this.GetUserFolders();
    // this.GetFriendDetails();
    // this.GetOpenRequest();

  }

  FileRequestpopup() {
   // this.GetUserFolders();

  }

  GetOpenRequest() {
    this.ClosedReturnDetails = [];
    this.OpenReturnDetails = [];
    this.Open = true;
    this.Close = false;
    document.getElementById("openreq").style.backgroundColor = "#36dbe2";
    document.getElementById("closereq").style.backgroundColor = "";
        document.getElementById("openreq").style.color = "white";
        document.getElementById("closereq").style.color = "black";
  
    this.filerequestservice.getopenrequest(this.uid).subscribe((respose: any) => {
      this.OpenedFiles = respose;    
   
    this.searchfiles = false;
    for (let index = 0; index < this.OpenedFiles.length; index++) {
      this.OpenReturnDetails1 = this.OpenedFiles[index].fileRequestList;
      this.OpenReturnDetails.push(this.OpenReturnDetails1[0]);
    }
    if (this.OpenedFiles.length == 0 && this.ClosedReturnDetails.length == 0) {
      this.NoFileRequests = true;
    }
    else if(this.OpenedFiles.length != 0 && this.ClosedReturnDetails.length == 0){
      this.NoFileRequests = false;
    }
    else if(this.OpenedFiles.length == 0 && this.ClosedReturnDetails.length != 0){
      this.NoFileRequests = false;
    }
    this.spinner.hide();
  });
  }

  GetCloseRequest() {
    this.spinner.show();
    this.ClosedReturnDetails = [];
    this.OpenReturnDetails = [];
    this.Open = false;
    this.Close = true;
    document.getElementById("closereq").style.backgroundColor = "#36dbe2";
    document.getElementById("closereq").style.color = "white";
    document.getElementById("openreq").style.backgroundColor = "";
    document.getElementById("openreq").style.color = "black";
        //document.getElementById("openreq").style.color = "white";
    this.filerequestservice.getcloserequest(this.uid).subscribe((respose: any) => {
      this.ClosedFiles = respose;  
      this.searchfiles = false;
      for (let index = 0; index < this.ClosedFiles.length; index++) {
        if (this.ClosedFiles[index].fileRequestList.length != 0) {
          this.ClosedReturnDetails1 = this.ClosedFiles[index].fileRequestList;
          for (let i = 0; i < this.ClosedReturnDetails1.length; i++) {
            this.ClosedReturnDetails.push(this.ClosedReturnDetails1[i]);
          }
        }

      }
      if (this.OpenedFiles.length == 0 && this.ClosedReturnDetails.length == 0) {
        this.NoFileRequests = true;
      }
      else if (this.OpenedFiles.length != 0 && this.ClosedReturnDetails.length == 0) {
        this.NoFileRequests = false;
      }
      else if (this.OpenedFiles.length == 0 && this.ClosedReturnDetails.length != 0) {
        this.NoFileRequests = false;
      }
      this.spinner.hide();
    });
  }

  GetUserFolders() {
    this.spinner.show();
    this.filerequestservice.getuserfolders(this.uid).subscribe((respose: any) => {
      this.Folders = respose;
this.spinner.hide();
    });
  }

  GetFriendDetails() {
    this.spinner.show();
    this.userservice.friendlist(this.uid).subscribe((respose: any) => {
      this.Friends = respose;
      this.frndslist = this.Friends.friendsList;
  
      for(let i =0;i<this.frndslist.length;i++){
        if(this.frndslist[i]['friendId'] == this.uid){
          this.frndslist[i]['friendId'] = this.frndslist[i]['userId']
        }
      }
      this.spinner.hide();
    });
  }
  
  FileReqMembers(data) {
    this.spinner.show();
    for (let index = 0; index < this.frndslist.length; index++) {
     if (this.frndslist[index].uid == data) {
      this.selectedFriend.push(this.frndslist[index])
      break;
     }      
    }   
    this.spinner.hide(); 
  }
  OnSelectFolder(id) {
    this.requestedfoldername = id
  }
  fileandfoldername(form: NgForm) {
    if (form.controls["requestingfor"].value == undefined || form.controls["requestingfor"].value == null) {
      alert("Please Enter File to be requested!")
    }
  
    else {
      this.Requsetingfiles = form.controls["requestingfor"].value
      this.FolderName = this.requestedfoldername
    }
    this.m = this.msg;

  }

  
  OnClickCheckbox(value: any) {
    this.marked = value.target.checked;
  }
  getthePercent(per) {
    return 10;
  }

  SendRequestTo(form: NgForm) {
    // this.spinner.show();
    this.ClosedReturnDetails = [];
    this.OpenReturnDetails = [];
    this.requiredalluserss = this.selectedFriend;
    if (this.requiredalluserss == "" ||this.requiredalluserss == null || this.requiredalluserss == undefined) {
      alert("Please Select atleast one user!!")
    }
    else {
      const inputRequest: SendRequest = {
        Id: 0,
        FromAccountNo: this.uid,
        RegisteredMailIds: this.requiredalluserss,
        RequestingFor: this.Requsetingfiles,
        OptionalMessage: form.controls["optionalmsg"].value,
        RequestedFolderId: this.FolderName,
        CheckboxMarked: this.marked,
        CreatedOn:null,
      }
      this.showper = true;
      this.generalprogressbar = true;
      this.folderCreating = true;
      this.getthePercent(this.n);
      this.Creatingmsg = "Sending File Request ...";
      this.num = setInterval(() => {
        if (this.n <= 90) {
          this.Creatingmsg = "Sending File Request ...";
          this.n = this.n + this.getthePercent(this.n);
          if (this.n == 90) {
            this.n = 90;
            clearInterval(this.num);
          }
        }
      }, 3000);
      console.log(inputRequest);
      this.filerequestservice.sendFileRequest(inputRequest).subscribe(
        (data: any) => {
          this.users = [];
          this.requiredalluserss = [];
          this.selectedFriend = [];
          if (data == 1) {
            this.n = 100;
            this.createdmsg = "File Request Sent Successfully"
            this.folderCreating = false;
            this.foldercreated = true;
            this.optionalmsg = "";
            this.Requsetingfiles = "";
            this.count = 0;
            this.requestingfor = "";
            this.likes = "";
            this.optionalmsg = "";
            setTimeout(function () {
              this.showper = false;
              this.folderCreating = false;
              this.foldercreated = false;
              this.generalprogressbar = false;
              this.errormsg = false;
            }.bind(this), 3000);
            //this.spinner.hide();
// this.spinner.hide();
          }
          else {
            this.requiredalluserss = [];
            this.selectedFriend = [];
            this.notify = "Something went wrong,try again!!";
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.requestingfor = "";
            this.likes = "";
            this.optionalmsg = "";
            this.users = [];
          
          }
        }
      );
    }
  }

  CloseRequest(data) {
    this.searchfiles = false;
    this.ClosedReturnDetails = [];
    this.OpenReturnDetails = [];
    //this.dataa = this.FileRequestedId +"," + latest_date;
    const inp :CloseRequest=
    {
      RqId : data.fileRequestId,
      date : null
    }
    //this.spinner.show();
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getthePercent(this.n);
    this.Creatingmsg = "Closing Request ...";
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Closing Request ...";
        this.n = this.n + this.getthePercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    this.filerequestservice.closefilerequest(inp).subscribe((respose: any) => {
      if(respose != null){
        this.n = 100;
        this.createdmsg = "Closed Successfully!!"
        this.folderCreating = false;
        this.foldercreated = true;
        this.searchfiles = false;
        // this.GetCloseRequest();
        this.GetOpenRequest();
        setTimeout(function () {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);
      }
    });
  }
  OpenRequest(data) {
    this.searchfiles = false;
    this.ClosedReturnDetails = [];
    this.OpenReturnDetails = [];
    const inp :CloseRequest=
    {
      RqId : data.fileRequestId,
      date : null
    }
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getthePercent(this.n);
    this.Creatingmsg = "Open Request ...";
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Open Request ...";
        this.n = this.n + this.getthePercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    this.filerequestservice.openfilerequest(inp).subscribe((respose: any) => {
      if(respose != null){
        this.n = 100;
        this.createdmsg = "Open Successfully!!"
        this.folderCreating = false;
        this.foldercreated = true;
        this.searchfiles = false;
        // this.GetCloseRequest();
        this.GetOpenRequest();
        setTimeout(function () {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);
      }
      this.OpenedResult = respose;
      this.searchfiles = false;
      // this.GetOpenRequest();
      this.GetCloseRequest();
    });
  }
}

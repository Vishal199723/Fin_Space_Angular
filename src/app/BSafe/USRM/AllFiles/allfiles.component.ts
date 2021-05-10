import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { MultiFolderShareVM } from 'src/app/ViewModels/MultiFolderShareVM';
import { MoveFolderOrDocument } from 'src/app/ViewModels/MoveFolderOrDocument';
import { MoveDocData } from 'src/app/ViewModels/MoveDocData';
import { FolderShareToUers } from 'src/app/ViewModels/FolderShareToUers';
import { MoveMultiFolder } from 'src/app/ViewModels/MoveMultiFolder';
import { UserIdVM } from 'src/app/ViewModels/UserIdVM';
import { Friend } from 'src/app/ViewModels/Friend';
import { AddNewFolder } from 'src/app/ViewModels/NewFolder';
import { Search } from 'src/app/ViewModels/Search';
import { Delete } from 'src/app/ViewModels/Delete';
import { DownloadFolderVM } from 'src/app/ViewModels/DownloadFolderVM';
import { ShareOnlyFileVM } from 'src/app/ViewModels/ShareOnlyFileVM';
import { DeleteMulit } from 'src/app/ViewModels/DeleteMulit';
import { MoveService } from 'src/app/Shared/MoveService/move.service';
import { MessageService } from 'src/app/MessageService/meaagse.service';


@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.scss']
})
export class AllfilesComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  allSubFolders: any;
  SelectedFiles: any;
  public isLoggedIn: boolean = false;
  public remove: any = false;
  uid: any; roleid: any;
  fileupload: File = null; fid: any;
  userName: string; sMsg: any;
  ID: any; pdfUrl: any; closeResult: any; pdfUrl1: any; pdfUrl2: any; pdfUrl3: any;
  msg: any; m: string; zzz: any;
  details: any;
  updatemsg: any; u: any; fl: any;
  pid: any; FormData: any; subf: any; Press: any;
  Pid: any; zoom_to: any;
  Friends: any; shareitem: any;
  selected = []; CurrentFiles: any;
  friendid: number; R: any;
  Transcations: any; totaltrans: any;
  FoldID: any; FileFoldID: any;
  searchvalue: any;
  val: any;
  public SearchEnabled: boolean = false;
  public ShowResult: boolean = false;
  SearchResult: any;
  temp: any; doc: string;
  current_url: any; displayUrl: any;
  current_url1: any;
  mail: boolean; inboxmsgs: any;
  MailMessage: string; frmmailpwd: any;
  mailmsg: any; usermail: any;
  FromMailID: string; FromPassword: any;
  ToMailID: any; tomail: any;
  responsemail: any; sub: any;
  alldata: any; importmailpwd: any;
  Particularusermail: string;
  videoplay: any; videodate: any;
  gridvalue: any;
  listvalue: boolean;
  txtUrl: any;
  files1: any;
  deleteitem: boolean;
  selectedDelete = [];
  getMoveData: any;
  getDocData: any;
  destinationFolder: any;
  sourceFolder: any;
  notify: string;
  foladdednotify: boolean;
  storedData: any;
  IsDOCorFolder: any;
  Hash: any;
  DocumentName: any;
  ImageType: any;
  docsize: any;
  DateCreated: any;
  CustId: any;
  FolderName: any;
  CreatedOn: any;
  Res: any;
  downpath: any;
  Docname: any
  shareSubFolderFolderId: any;
  shareSubFolderFolderName: any;
  shareSubFolderFolderType: any;
  shareSubFolderParentID: any;
  shareSubFolderId: any;
  showper: boolean;
  generalprogressbar: boolean;
  folderCreating: boolean;
  Creatingmsg: string;
  createdmsg: string;
  foldercreated: boolean;
  statuschange: string;
  ShareOnlyDoc: any;
  BlockId: any;
  FolderID: any;
  ShareOnlyDocName: any;
  sendFID: any;
  sendBID: any;
  checkenable: boolean;
  multi: boolean;
  sfiles: number;
  sfolder: number;
  deletemulticontent: string;
  allFolders1: any;
  destinationFold: any;
  Showmoveitem: boolean;
  shareUniqueID: any;
  dismissalert: boolean;
  copied1 = false;
  Movetofold: any
  ppopup: any;
  allSubFolders1: any;
  folderid: string;
  DateTime: any;
  allFolders: any;
  frmData1: FormData;
  uploadfolderclicked: boolean;
  sameNames: any;
  SelectedFolderandFiles: any[] = [];
  folderlist: any[] = [];
  sameFolderName: any[] = [];
  replaceFolderid: any[] = [];
  relaceFolderlist: any;
  SelectedFolderName: any;
  SelectedLevel: any;
  crthr: any;
  pathdt: any;
  subf1: any;
  url: string | ArrayBuffer;
  mvlfd: boolean;
  mobile = false;
  accid: any;
  frndrqst: boolean;
  userid: string;
  frndintr: any;
  role: any;
  folderview: any
  client: any
  errormsg: any
  constructor(private messageService: MessageService,private router: ActivatedRoute, private userservice: UserDetailsService, private moveService: MoveService,
    private route: Router, private httpService: HttpClient,
    private domSanitizer: DomSanitizer, private spinner: NgxSpinnerService) {

      this.messageService.sendSession('true');

    this.role = localStorage.getItem("role");

    this.mvlfd = false;
    this.ppopup = true;
    if (localStorage.getItem("copied")) {
      this.copied1 = true;
    }
    this.router.params.subscribe(params => {
      if (params["id"]) {
        this.GetDetails(params["id"]);
        this.GetAllFolders1();

      }
    });
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.isLoggedIn = true;
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.userName = localStorage.getItem("UserName");
      this.pid = localStorage.getItem("parentid");
      this.usermail = localStorage.getItem("MailId");
      this.gridvalue = localStorage.getItem("gridvalue");
    }

    //vishal
    this.userid = localStorage.getItem("userId");


    this.frndrqst = false;

    this.frndintr = setInterval(() => {
      this.GetFriendDetails();
    }, 30000);
  }

  ngOnInit() {
    this.resize();
    window.addEventListener('resize', this.resize);
    this.GetFriendDetails();
    this.GetAllFolders1();
    if (this.gridvalue == "true") {
      this.gridvalue = true;
      this.listvalue = false;
    }
    else {
      this.listvalue = true;
      this.gridvalue = false;
    }
    setTimeout(() => {
      if (this.copied1) {
        var moveid = document.getElementById("moveid");
        if (moveid) {
          moveid.style.display = "block";
        }
        //document.getElementById("moveid").style.display = "block";
      }
      else {
        var moveid = document.getElementById("moveid");
        if (moveid) {
          moveid.style.display = "none";
        }
      }
    }, 1000);

    setTimeout(() => {
      var footer = document.getElementById("footer");
      if (footer) {
        footer.style.display = "none";
      }
    }, 1000);

    if (window.innerWidth < 500) {
      setTimeout(() => {
        var tree = document.getElementById("treeview");

        if (tree) {
          tree.style.display = "none";

        }

        var upload = document.getElementById("view");

        if (upload) {
          upload.style.display = "none";

        }

      }, 100);

      this.mobile = true;
    }
    setTimeout(() => {
      this.spinner.hide();
    }, 6000);
  }

  //vishal
  ngOnDestroy() {
    clearInterval(this.frndintr);
  }




  addfrnd() {
    if (this.frndrqst == true) {
      this.frndrqst = false;
    }
    else {
      this.frndrqst = true;
    }
  }
  cancelshareall = false;
  shareitem1 = false;
  cancelshare() {
    if (this.cancelshareall == true) {
      this.cancelshareall = false;
      this.shareitem1 = false;

    }
    else {
      this.cancelshareall = true;
      this.shareitem1 = true;

    }
  }
  savefrienddetails() {
    this.spinner.show();
    const inputRequest: Friend = {
      Id: 0,
      FriendAccount: this.accid,
      UserId: this.userid,
      Status: 4,
      IsEnabled: true,

    }
    this.userservice.SaveFrienddetails(inputRequest).subscribe((data: any) => {
      if (data == "SameUser") {
        alert("Please Enter your Friend MailId!!");

      }
      else if (data == "alreadyfriends") {
        alert("You are already friends!!");

      }
      else if (data == "NoUserFound") {
        alert("We are sorry " + this.accid + " is not using B-Safe!!");

      }
      else if (data == "SentRequest") {
        alert("You have already sent or recived request from this user!!");

      }
      else if (data == "1") {
        alert("Friend Request Sent successfully");
      }
      else {
        alert("Something went Wrong");
        // this.route.navigate(['/allfolders']);
      }
      this.spinner.hide();
      this.accid = "";
    });
  }

  mob = false;

  resize() {
    if (window.innerWidth > 500) {
      this.mob = true;
    }
    else {
      this.mob = false;
    }
  }
  treeviewba() {
    var tree = document.getElementById("treeview");
    if (tree) {
      if (tree.style.display == "none") {
        tree.style.display = "block";
      }
      else {
        tree.style.display = "none";
      }
    }
  }
  uploadview() {
    var tree = document.getElementById("view");
    if (tree) {
      if (tree.style.display == "none") {
        tree.style.display = "block";
      }
      else {
        tree.style.display = "none";
      }
    }
  }
  GetDetails(id) {
    this.spinner.show();
    this.getpath(id);
    this.FileFoldID = id;
    this.userservice.getsubfolders(id).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.fileName;
      this.fid = this.allSubFolders.parentId;
      // console.log("user", this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );
    });
    this.spinner.hide();

  }


  getpath(id) {
    this.userservice.getpath(id).subscribe((respose: any) => {
      this.pathdt = respose;
    });
  }

  getfolders1(id1) {
    let id = id1.folderID;

    let elem = document.getElementById(id);
    if (elem.childNodes.length < 2) {

      var icn = document.getElementById(id1.id);
      if (icn != null) {
        icn.setAttribute("class", "fa fa-caret-down");

      }

      this.FileFoldID = id;
      this.userservice.getsubfolders(id).subscribe((respose: any) => {
        this.allSubFolders1 = respose;
        this.subf = this.allSubFolders1.fileName;
        this.fid = this.allSubFolders1.parentId;
        // console.log("user", this.allSubFolders1);
        // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
        //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
        //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

        var mdv1 = document.createElement("div");
        for (let i = 0; i < this.allSubFolders1.subFolders.length; i++) {
          var mdv = document.createElement("div");
          mdv.setAttribute("id", this.allSubFolders1.subFolders[i].folderID);
          mdv.setAttribute("style", "padding-left:20px");
          var elm = document.createElement("span");
          var img = document.createElement("img");
          img.setAttribute("src", "./assets/img/folder.png");
          img.setAttribute("width", "30px");
          img.setAttribute("height", "30px");
          var elm1 = document.createElement("span");
          elm1.innerHTML = this.allSubFolders1.subFolders[i].folderName;

          var elm12 = document.createElement("i");

          elm12.setAttribute("class", "fa fa-caret-right");
          elm12.setAttribute("id", this.allSubFolders1.subFolders[i].id);

          elm12.addEventListener('click', this.getfolders1.bind(this, this.allSubFolders1.subFolders[i]));



          elm.appendChild(elm12);
          elm.appendChild(img);
          elm.appendChild(elm1);

          mdv.appendChild(elm);

          img.addEventListener('click', this.gotoFolder2.bind(this, this.allSubFolders1.subFolders[i]));
          elm1.addEventListener('click', this.gotoFolder2.bind(this, this.allSubFolders1.subFolders[i]));


          mdv1.appendChild(mdv);
        }



        elem.appendChild(mdv1);


      });


    }
    else {

      document.getElementById(id1.id).setAttribute("class", "fa fa-caret-right");
      let elem = document.getElementById(id);
      while (elem.childNodes.length > 1) {
        elem.removeChild(elem.lastChild);
      }
    }
  }

  gotoFolder2(data) {
    this.GetDetails(data.folderID);
    this.GetAllFolders1();
    this.folderid = data.folderID;
  }

  gotoFolder1(data) {
    this.folderid = data.folderID;

  }

  sort = "1";

  sortby() {
    if (this.sort == "1") {
      // this.userservice.getfoldersbydate(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
      this.allSubFolders.subFolders.sort((a, b) => a.folderName.toLowerCase() < b.folderName.toLowerCase() ? -1 : a.folderName.toLowerCase() > b.folderName.toLowerCase() ? 1 : 0)
      this.allSubFolders.retData.sort((a, b) => a.documentName.toLowerCase() < b.documentName.toLowerCase() ? -1 : a.documentName.toLowerCase() > b.documentName.toLowerCase() ? 1 : 0)

      this.sort = "2";

    }
    else if (this.sort == "2") {
      // this.userservice.getfoldersbyname(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });

      this.allSubFolders.subFolders.sort((a, b) => a.folderName.toLowerCase() > b.folderName.toLowerCase() ? -1 : a.folderName.toLowerCase() < b.folderName.toLowerCase() ? 1 : 0)
      this.allSubFolders.retData.sort((a, b) => a.documentName.toLowerCase() > b.documentName.toLowerCase() ? -1 : a.documentName.toLowerCase() < b.documentName.toLowerCase() ? 1 : 0)

      this.sort = "1";

    }

  }
  sortname = "1";
  sortbydate() {
    if (this.sortname == "1") {
      // this.userservice.getfoldersbydate(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
      this.allSubFolders.subFolders.sort((a, b) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.allSubFolders.retData.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)

      this.sortname = "2";
    }
    else if (this.sortname == "2") {
      // this.userservice.getfoldersbyname(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });

      this.allSubFolders.subFolders.sort((a, b) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.allSubFolders.retData.sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)

      this.sortname = "1";

    }

  }
  gotoallfolders() {
    this.route.navigate(["/allfolders"]);
  }


  gridview(value) {
    if (value == "1") {
      this.gridvalue = true;
      this.listvalue = false;
      localStorage.setItem("gridvalue", "true");
      setTimeout(() => {
        if (this.copied1) {
          document.getElementById("moveid").style.display = "block";
        }
        else {
          document.getElementById("moveid").style.display = "none";
        }
      }, 500);

    }
    else if (value == "0") {
      this.listvalue = true;
      this.gridvalue = false;
      localStorage.setItem("gridvalue", "false");
      setTimeout(() => {
        if (this.copied1) {
          document.getElementById("moveid").style.display = "block";
        }
        else {
          document.getElementById("moveid").style.display = "none";
        }
      }, 500);

    }
  }


  GetSubfolderdetails(data) {
    this.temp = data;
    this.subf = data.folderName;
    this.FileFoldID = data.folderID;
    this.userservice.getsubfolders(data.folderID).subscribe((respose: any) => {
      this.allSubFolders = respose;
      // this.subf = this.allSubFolders.FolderName;
      var Pid = this.allSubFolders.parentId;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));
      this.getpath(data.folderID);
      // console.log("user", this.allSubFolders);
    });
  }




  GetBack(allSubFolders) {
    if (this.gridvalue == true) {
      localStorage.setItem("gridvalue", "true");
    }
    else {
      localStorage.setItem("gridvalue", "false");
    }
    this.userservice.getbackdata(allSubFolders.parentId).subscribe((respose: any) => {
      this.Press = true;
      this.allSubFolders = respose;
      this.Pid = this.allSubFolders.parentId;
      this.FileFoldID = this.allSubFolders.parentId;
      this.allSubFolders.folderID = this.allSubFolders.parentId;
      if (this.allSubFolders.parentId == "0") {
        localStorage.setItem('formdata', JSON.stringify(this.allSubFolders));
        this.route.navigate(['/allfolders']);
      }
    });
  }


  addSubFolder(allSubFolders) {
    this.m = this.msg;

  }

  savenewSubFolder() {
    if (this.allSubFolders.subFolders.length == 0) {
      this.fl = "0";
    }
    else {
      this.fl = this.allSubFolders.subFolders[0].folderID;
    }
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString()));
    const inputRequest: AddNewFolder = {
      Id: 0,
      FolderID: this.fl,
      RoleId: this.roleid,
      FolderName: this.msg,
      UserId: this.uid,
      Code: "SubFolder",
      ParentID: this.allSubFolders.parentId,
      Click: null,
      date: nd
    }
    this.userservice.addNewFolder(inputRequest).subscribe((data: any) => {
      if (data != null) {


        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();


      }
      else {
        alert("Something went Wrong");
        this.route.navigate(['/allfolders']);
      }
      this.msg = "";
    });
  }

  UpdateSubFolder(folderview) {
    this.details = folderview;
    this.updatemsg = folderview.folderName;
    this.u = this.updatemsg;

  }

  UpdateSubFolderName() {
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString()));
    const inputRequest: AddNewFolder = {
      Id: this.details.id,
      FolderID: this.details.folderID,
      RoleId: this.roleid,
      FolderName: this.updatemsg,
      UserId: this.uid,
      Code: "Folder",
      ParentID: this.details.parentID,
      Click: null,
      date: nd
    }
    this.userservice.UpdateFolder(inputRequest).subscribe((data: any) => {
      if (data == true) {
        this.n = 100;
        this.createdmsg = "Updated Successfully";
        this.pid = data;
        this.folderCreating = false;
        this.foldercreated = true;
        clearInterval(this.num);

        setTimeout(function () {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);
        // alert("Updated Successfully");
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();


      }
      else {
        alert("Something went Wrong");
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();
      }
    });
  }
  shareallallcancel() {
    if (this.selectedFriendcancel == null || this.selectedFriendcancel == undefined || this.selectedFriendcancel == "") {
      alert("Please select a friend");
    }
    else {
      const inputRequest: MultiFolderShareVM = {
        Id: 0,
        ToUsers: null,
        USerId: this.uid,
        Code: "MainFolder",
        SelectedFolders: this.selectedSelected,
        AccessType: null,
        BodyContent: null,
        UserName: this.selectedFriendcancel,
        ModifiedOn: null
      }
      //this.spinner.show();
      this.showper = true;
      this.generalprogressbar = true;
      this.folderCreating = true;
      this.getPercent(this.n);
      this.Creatingmsg = "Withdrawing Shared Items...";
      this.num = setInterval(() => {
        if (this.n <= 90) {
          this.Creatingmsg = "Withdrawing Shared Items...";
          this.n = this.n + this.getPercent(this.n);
          if (this.n == 90) {
            this.n = 90;
            clearInterval(this.num);
          }
        }
      }, 3000);

      this.userservice.withdraw(inputRequest).subscribe(
        (data: any) => {
          if (data != null) {
            this.n = 100;
            this.createdmsg = "Withdraw of Shared files successfull!"
            this.folderCreating = false;
            this.foldercreated = true;
            clearInterval(this.num);
            // this.notify = "Folder Shared Succesfully";
            // setTimeout(() => this.dismissalert = true, 100);
            // setTimeout(function () {
            //   this.dismissalert = false;
            // }.bind(this), 3000);
            // this.spinner.hide();
            setTimeout(function () {
              this.folderCreating = false;
              this.foldercreated = false;
              this.generalprogressbar = false;
              this.errormsg = false;
              this.showper = false;
            }.bind(this), 3000);
            this.selectedSelected = [];
            this.multi = false;
          }
          else {
            //alert("Something went wrong!!please try again");
            this.notify = "Something went wrong!!please try again";
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        });
    }
  }
  shareallall() {
    if (this.selectedFriend == null || this.selectedFriend == undefined || this.selectedFriend == "") {
      alert("Please select a friend");
    }
    else {
      const inputRequest: MultiFolderShareVM = {
        Id: this.shareUniqueID,
        ToUsers: this.selectedFriend,
        USerId: this.uid,
        Code: "MainFolder",
        SelectedFolders: this.selectedSelected,
        AccessType: null,
        BodyContent: null,
        UserName: null,
        ModifiedOn: null
      }
      //this.spinner.show();
      this.showper = true;
      this.generalprogressbar = true;
      this.folderCreating = true;
      this.getPercent(this.n);
      this.Creatingmsg = "Sharing selected items...";
      this.num = setInterval(() => {
        if (this.n <= 90) {
          this.Creatingmsg = "Sharing selected items...";
          this.n = this.n + this.getPercent(this.n);
          if (this.n == 90) {
            this.n = 90;
            clearInterval(this.num);
          }
        }
      }, 3000);

      this.userservice.shareall(inputRequest).subscribe(
        (data: any) => {
          if (data != null) {
            this.n = 100;
            this.createdmsg = "Shared selected items successfully!"
            this.folderCreating = false;
            this.foldercreated = true;
            clearInterval(this.num);
            // this.notify = "Folder Shared Succesfully";
            // setTimeout(() => this.dismissalert = true, 100);
            // setTimeout(function () {
            //   this.dismissalert = false;
            // }.bind(this), 3000);
            // this.spinner.hide();
            setTimeout(function () {
              this.folderCreating = false;
              this.foldercreated = false;
              this.generalprogressbar = false;
              this.errormsg = false;
              this.showper = false;
            }.bind(this), 3000);
            this.selectedSelected = [];
            this.multi = false;
          }
          else {
            //alert("Something went wrong!!please try again");
            this.notify = "Something went wrong!!please try again";
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
        });
    }
  }

  GetFriendDetails() {
    this.userservice.friendlist(this.uid).subscribe((respose: any) => {
      this.Friends = respose;
      this.frndslist = this.Friends.friendsList;
      // console.log(this.frndslist);
      var idd = this.accid;

      for (let i = 0; i < this.frndslist.length; i++) {
        if (idd != undefined) {
          if (idd.includes('@')) {
            if (this.frndslist[i]['email'] == this.accid) {
              for (i = 0; i < 100; i++) {
                window.clearInterval(i);
              }
              alert(this.accid + " has accepted your friend request");
              this.accid = "";
            }
          }
        }
        if (this.frndslist[i]['friendId'] == this.uid) {
          this.frndslist[i]['friendId'] = this.frndslist[i]['userId']
        }
      }
      // console.log(this.frndslist);

    });
  }

  Share() {
    this.shareitem = true;
  }
  CancelShare() {
    this.shareitem = false;
  }
  Deleteitems() {
    this.deleteitem = true;
  }
  CancelDelete() {
    this.deleteitem = false;
  }


  onChange(event: any) {
    var fileslist = "";
    var files = [].slice.call(event.target.files);

    this.files1 = [].slice.call(event.target.files);
    // console.log(this.files1);
    for (let k = 0; k < this.files1.length; k++) {
      fileslist = this.files1[k].name + ",";
    }
    this.SelectedFiles = fileslist.split(',');
  }

  onDrop(event: any) {

    var fileslist = "";
    var files = event;

    this.files1 = files;
    for (let k = 0; k < this.files1.length; k++) {
      if (this.files1[k].type == "") {
        alert("Please Upload only Folders")
        this.files1 = "";
      }
      fileslist = this.files1[k].name + ",";
    }
    this.SelectedFiles = fileslist.split(',');

  }

  Uploaddocs() {
    document.getElementById("cancelUpload").click();

    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Uploading File to B_Safe...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Uploading File to B_Safe...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    const frmData = new FormData();


    for (var i = 0; i < this.files1.length; i++) {
      frmData.append("fileUpload", this.files1[i]);
    }

    //frmData.append("fileUpload", this.files1);
    frmData.append("userId", this.uid);
    frmData.append("username", this.userName);
    frmData.append("folderid", this.allSubFolders.parentId);

    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/UploadDocument/NewDocumentUpload/', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        this.sMsg = data as string;
        // console.log(this.sMsg);
        if (this.sMsg == 0) {
          //document.getElementById("cancelUpload").click();
          this.n = 100;
          this.createdmsg = "File Uploaded Successfully to B_Safe";
          this.pid = data;
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);

          setTimeout(function () {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);


          this.SelectedFiles = null;
          this.GetDetails(this.FileFoldID);
          this.GetAllFolders1();

        }
        else {
        }
      },
      (err: HttpErrorResponse) => {
        alert("Something went wrong. Please try again..!! ")
        // console.log(err.message);    // Show error, if any.
      });
  }


  Delete(data) {
    var res;
    if (data.folderName == null) {
      res = confirm("Do You Want to Delete " + data.documentName + "!!!");
    }
    else {
      res = confirm("Do You Want to Delete " + data.folderName + "!!!");
    }
    if (res == true) {
      if (data.hash) {
        var info = {
          Id: data.id,
          FolderID: data.folderId,
          FolderName: data.folderName,
          UserId: this.uid,
          Code: "Document",
          ParentID: data.folderId,
          RoleId: this.roleid,
          Click: null
        };
      }
      else {
        info = data;
      }
    }
    this.userservice.deletefolder(info).subscribe((data: any) => {
      this.GetDetails(this.FileFoldID);
      this.GetAllFolders1();

    });
  }

  ViewDoc(aa) {
    this.zzz = aa;
    this.m = this.msg;
  }
  canceltree() {
    this.ppopup = true;
  }
  ViewDocument(aa) {
    this.zzz = aa;
    this.m = this.msg;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file);
    console.log(this.pdfUrl);
    this.pdfUrl = this.zzz.file;
    // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";

  }

  ViewDocumentword(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    this.doc = "http://docs.google.com/gview?" + this.zzz.file + "&embedded=true";
    this.m = this.msg;

  }

  ViewDocumenttext(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.txtUrl = this.zzz.file;
    // this.doc = "http://docs.google.com/gview?" + this.zzz.file + "&embedded=true";
    this.m = this.msg;

  }

  ViewxlsDoc(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    console.log(this.pdfUrl);
    // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";
    this.m = this.msg;

  }

  ViewPpt(aa) {
    this.zzz = aa;
    this.current_url1 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";
    this.m = this.msg;

  }

  ViewVideo(cc) {
    this.videoplay = cc.file
    this.videodate = cc.date
    this.m = this.msg;

  }
  audioplay: any;
  audiodate: any;
  Viewaudio(cc) {
    this.audioplay = cc.file
    this.audiodate = cc.date
    this.m = this.msg;

  }

 
  toggle(data) {
    this.CurrentFiles = data;
    if (data != null) {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i].Id == data.Id) {
          var index = this.selected.indexOf(data);
          this.selected.splice(index, 1);
          this.remove = true;
        }
      }
      if (this.remove == false) {
        this.selected.push(data);
      }
    }
    this.remove = false;

  }

  toggleDelete(data) {
    this.CurrentFiles = data;
    if (data != null) {
      // for (var i = 0; i < this.selectedDelete.length; i++) {
      //   if (this.selectedDelete[i].Id == data.Id) {
      //     var index = this.selectedDelete.indexOf(data);
      //     this.selectedDelete.splice(index, 1);
      this.selectedDelete.push(data);
      // }
      // }

    }

  }

  Search() {
    this.val = this.searchvalue;
    if (this.searchvalue.length != 0) {
      this.SearchEnabled = true;
    }
    else {
      this.SearchEnabled = false;
    }
    if (this.searchvalue.length > 1) {
      const inputRequest: Search = {
        Value: this.searchvalue,
        UserId: this.uid
      }

      this.userservice.SearchFiles(inputRequest).subscribe((data: any) => {
        this.SearchResult = data;
        //alert("Deleted Successfully");
        //window.location.reload();

      });
    }
  }



  DeleteFile(id) {
    const inputRequest: Delete = {
      SelectedFiles: this.selectedDelete,
      Message: "Delete"
    }
    var result;
    if (this.selected.length != 0) {
      result = confirm("Do You Want to Delete Selected Files !!!");
    }
    else {
      result = confirm("Do You Want to Delete Selected Files !!!");
    }

    if (result == true)
      this.userservice.DeleteFiles(inputRequest).subscribe((data: any) => {
        this.R = data;
        var fol = this.CurrentFiles;

        this.n = 100;
        this.createdmsg = "Deleted Successfully";
        this.pid = data;
        this.folderCreating = false;
        this.foldercreated = true;
        clearInterval(this.num);

        setTimeout(function () {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

      });
    else {
      this.deleteitem = false;
    }
  }
  onSearchChange(searchValue: string) {

    this.val = searchValue;
    if (this.val.length == 0) {
      setTimeout(() => {
        document.getElementById("moveid").style.display = "none";

      }, 1000);

    }
    if (this.val.length != 0) {
      document.getElementById("moveid").style.display = "none";
      this.SearchEnabled = true;
    }
    else {
      document.getElementById("moveid").style.display = "none";
      this.SearchEnabled = false;
    }
    if (this.val.length > 1) {
      const inputRequest: UserIdVM = {
        Fid: this.val,
        UID: this.uid
      }
      this.userservice.getfolderssearch(inputRequest).subscribe((data: any) => {
        this.SearchResult = data;
        console.log(data);
        //alert("Deleted Successfully");
        //window.location.reload();

      });
    }
  }

  // folder data

  GetSubfolder(data) {
    if (this.SearchEnabled) {
      this.SearchEnabled = false;
    }
    this.subf = data.folderName;
    this.userservice.getsubfolders(data.folderID).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.folderName;
      var Pid = this.allSubFolders.parentId;
      this.ShowResult = true;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));

      // console.log("user", this.allSubFolders);
      this.route.navigate(['allsubfolders/' + data.folderID]);
    });
  }







  MoveDash1() {
    // this.shareitem = true;
    //Folder or SubFolder Data
    var getdata = localStorage.getItem("MoveData");
    this.getMoveData = JSON.parse(getdata);
    var isDOC = localStorage.getItem("IsDOCorFolder");
    //Doc Data
    var docdata = localStorage.getItem("DocData");
    this.getDocData = JSON.parse(docdata);
    if (isDOC == "Doc") {
      this.destinationFolder = this.FileFoldID;
      this.sourceFolder = this.getMoveData.folderID;
      const inputRequest: MoveFolderOrDocument = {
        SourceId: this.sourceFolder,
        DestinationId: this.destinationFolder
      }
      this.moveService.saveMoveFolderOrDocument(inputRequest).subscribe((data: any) => {
        if (data == "1") {
          this.notify = "Moved Successfully";
          setTimeout(() => (this.foladdednotify1 = true), 100);
          setTimeout(
            function () {
              this.foladdednotify1 = false;
            }.bind(this),
            3000)

          document.getElementById("moveid").style.display = "none";
          localStorage.removeItem("copied");
          //this.notify = "Moved Successfully"
          // setTimeout(() => this.foladdednotify = true, 100);
          // setTimeout(function () {
          //   this.foladdednotify = false;
          // }.bind(this), 3000);
          this.pid = data.ParentID;
          // this.GetDetails(this.pid);
          this.GetDetails(this.FileFoldID);
          this.GetAllFolders1();


        }
        else {
          this.GetDetails(this.pid);
          this.GetAllFolders1();

          this.notify = "Something went Wrong"
          setTimeout(() => this.foladdednotify1 = true, 100);
          setTimeout(function () {
            this.foladdednotify1 = false;
          }.bind(this), 3000);
        }
      });
    } else if (isDOC == "Img") {
      const inputRequest1: MoveDocData = {
        AliasUid: this.getDocData.UserID,
        DId: this.FileFoldID,
        SId: this.getDocData.folderId,
        BId: this.getDocData.blockId
      }
      this.moveService.moveDocument(inputRequest1).subscribe((data: any) => {
        if (data == "1") {
          this.notify = "Moved Successfully";
          setTimeout(() => (this.foladdednotify1 = true), 100);
          setTimeout(
            function () {
              this.foladdednotify1 = false;
            }.bind(this),
            3000)

          document.getElementById("moveid").style.display = "none";
          localStorage.removeItem("copied");
          this.GetDetails(this.pid);
          this.GetAllFolders1();

          // setTimeout(() => {
          //   this.route.navigate(['/allfolders'])
          // },500);
        }
        else {
          this.notify = "Something went Wrong"
          setTimeout(() => this.foladdednotify = true, 100);
          setTimeout(function () {
            this.foladdednotify = false;
          }.bind(this), 3000);
        }
      });
    }
  }

  MoveDash(data: any) {
    this.shareitem = true;
    this.destinationFolder = this.storedData;
    this.sourceFolder = this.getMoveData.FolderID;
    const inputRequest: MoveFolderOrDocument = {
      SourceId: this.sourceFolder,
      DestinationId: this.destinationFolder
    }
    this.moveService.saveMoveFolderOrDocument(inputRequest).subscribe((data: any) => {
      if (data != null) {
        this.pid = data.ParentID;
        this.GetDetails(this.pid);
        this.GetAllFolders1();

        this.notify = "Moved Successfully"
        setTimeout(() => this.foladdednotify1 = true, 100);
        setTimeout(function () {
          this.foladdednotify1 = false;
        }.bind(this), 3000);
        localStorage.removeItem("copied");
      }
      else {
        this.GetDetails(this.pid);
        this.GetAllFolders1();

        this.notify = "Something went Wrong"
        setTimeout(() => this.foladdednotify1 = true, 100);
        setTimeout(function () {
          this.foladdednotify1 = false;
        }.bind(this), 3000);
      }
    });
  }
  copied: any;
  foladdednotify1: any;
  MoveTo(data: any, id: any) {
    //this.shareitem = true;
    this.storedData = data;
    this.IsDOCorFolder = id;
    localStorage.setItem("IsDOCorFolder", id);
    localStorage.setItem("MoveData", JSON.stringify(data));
    this.copied = 1;
    localStorage.setItem("copied", this.copied);
    this.notify = "Copied to Clipboard";
    setTimeout(() => (this.foladdednotify1 = true), 100);
    setTimeout(
      function () {
        this.foladdednotify1 = false;
      }.bind(this),
      3000)
    document.getElementById("moveid").style.display = "block";

  }

  MoveDoc(data: any, id: any) {
    localStorage.setItem("IsDOCorFolder", id);
    localStorage.setItem("DocData", JSON.stringify(data));
    this.copied = 1;
    localStorage.setItem("copied", this.copied);
    this.notify = "Copied to Clipboard";
    setTimeout(() => (this.foladdednotify1 = true), 100);
    setTimeout(
      function () {
        this.foladdednotify1 = false;
      }.bind(this),
      3000)
    document.getElementById("moveid").style.display = "block";
  }
  docsize1: any;
  Details(data) {
    this.Hash = data.hash;
    if (this.Hash) {
      this.DocumentName = data.documentName;
      this.ImageType = data.documentType;
      this.docsize = data.documentSize;
      this.DateCreated = data.date;
      this.CustId = data.userID;
    }
    this.docsize1 = this.formatBytes(this.docsize, 2)
    this.FolderName = data.folderName;
    this.CreatedOn = data.createdOn;
    this.CustId = data.userId;
    this.m = this.msg;

  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  // Download Folder
  DownloadFolder(data) {
    const inputRequest: DownloadFolderVM = {
      Id: data.id,
      AUID: this.uid,
      FolderId: data.folderID,
      FolderName: data.folderName
    }
    this.userservice.downloadFolder(inputRequest).subscribe((data: any) => {
      if (data != null) {
        this.downpath = data;
        window.open(this.downpath);
      }
    });

  }

  cancel() {
    localStorage.removeItem("copied");
    document.getElementById("moveid").style.display = "none";
  }



  //subshare

  //Share 

  getPercent(per) {
    return 10;
  }
  ShareFolder(data) {
    this.getSubFolderdata(data);
    this.GetFriendDetails();
    this.m = this.msg;

  }
  SharewithMoreFriends() {
    this.GetFriendDetails();
    this.m = this.msg;

  }
  getSubFolderdata(data) {
    this.shareSubFolderFolderId = data.folderID;
    this.shareSubFolderFolderName = data.folderName;
    this.shareSubFolderFolderType = data.folderType;
    this.shareSubFolderParentID = data.parentID;
    this.shareSubFolderId = data.id;
  }
  frndslist: any = [];
  selectedFriend: any = [];
  ShareFileMembers(data) {
    for (let index = 0; index < this.frndslist.length; index++) {
      if (this.frndslist[index].uid == data) {
        this.selectedFriend.push(this.frndslist[index])
        break;
      }
    }
  }
  selectedFriendcancel;

  ShareFileMembers1(data) {
    for (let index = 0; index < this.frndslist.length; index++) {
      if (this.frndslist[index].uid == data) {
        if (this.frndslist[index].userId == this.uid) {
          this.selectedFriendcancel = this.frndslist[index].friendId;
          break;
        }
        this.selectedFriendcancel = this.frndslist[index].userId;
        break;
      }
    }

  }
  public n: number = 20;
  num: any;
  ShareExsistingSubFolderToUsers() {
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Sharing items secured with blockchain...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Sharing items secured with blockchain...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);

    const inputRequest: FolderShareToUers = {
      Id: "0",
      ToUsers: this.selectedFriend,
      BodyContent: "",
      FolderType: this.shareSubFolderFolderType,
      FolderName: this.shareSubFolderFolderName,
      Code: "SubFolder",
      ParentID: this.shareSubFolderParentID,
      FolderID: this.shareSubFolderFolderId,
      UserId: this.uid,
      AccessType: null,
      UserName: this.userName,
      UserEmail: "",
      CreatedOn: ""
    }
    //this.spinner.show();

    // console.log(inputRequest);
    this.userservice.shareExsistingSubFolder(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {

          this.n = 100;
          this.createdmsg = "Shared items successfully"
          this.pid = data;
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);

          setTimeout(function () {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);

          this.GetDetails(this.shareSubFolderParentID);
          this.GetAllFolders1();

          this.selectedFriend = [];
        }
        else {
          this.notify = "Something went wrong!!please try again";
          setTimeout(function () {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);

          setTimeout(() => this.foladdednotify = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDetails(this.shareSubFolderParentID);
          this.GetAllFolders1();

          this.selectedFriend = [];
          this.accid = "";
        }
      });
  }

  ShareOnlyFile(data: any) {
    this.statuschange = "";
    this.statuschange = data;
    this.ShareOnlyDoc = data.file;
    this.BlockId = data.blockId;
    this.FolderID = data.folderId;
    this.ShareOnlyDocName = data.documentName;

  }

  ShareoneFile(data) {
    this.ShareOnlyFile(data);
    this.GetFriendDetails();
    this.m = this.msg;

  }
  SharOnlyFileToUsers() {
    this.sendFID = this.FolderID;
    this.sendBID = this.BlockId;
    const inputRequest: ShareOnlyFileVM = {
      FolderID: this.FolderID,
      File: this.ShareOnlyDoc,
      BlockID: this.BlockId,
      FromUserId: this.uid,
      ToUsers: this.selectedFriend,
      DocumentName: this.ShareOnlyDocName,
      UserId: this.uid,
      AccessType: null,
      UserName: this.userName,
      BodyContent: null,
      UserEmail: null,
      CreatedOn: null
    }
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Sharing items secured with blockchain...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Sharing items secured with blockchain...";
        this.n = this.n + this.getPercent(this.n);
      }
    }, 3000);
    this.userservice.shareOnlyFile(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.n = 100;
          this.createdmsg = "Shared item successfully within blockchain!";
          this.pid = data;
          this.GetDetails(this.sendFID);
          this.GetAllFolders1();

          this.folderCreating = false;
          this.foldercreated = true;
          this.selectedFriend = [];
          clearInterval(this.num);
          setTimeout(function () {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);

          this.selectedFriend = [];
        }
        else {
          this.notify = "Something went wrong!!please try again";
          setTimeout(() => this.foladdednotify = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
            this.showper = false;
          }.bind(this), 3000);
          this.selectedFriend = [];
        }
      });
  }
  // Share Ends

  // Multi Move
  selectedSelected: any = [];
  toggleSelect(data) {
    this.CurrentFiles = data;
    this.checkenable = true;
    this.multi = true;
    this.sfiles = 0;
    this.sfolder = 0;
    if (data != null) {
      if (this.selectedSelected.length == 0) {
        // document.getElementById(data.Id.toString()).style.backgroundColor = "#36dbe2";
        // document.getElementById(data.Id.toString()).style.color = "white";
        this.selectedSelected.push(data);
      }
      else {
        const index = this.selectedSelected.indexOf(data, 0);
        if (index > -1) {
          this.selectedSelected.splice(index, 1);
          // document.getElementById(data.Id.toString()).style.backgroundColor = "";
          // document.getElementById(data.Id.toString()).style.color = "";
        }
        else {
          this.selectedSelected.push(data);
          // document.getElementById(data.Id.toString()).style.backgroundColor = "#36dbe2";
          // document.getElementById(data.Id.toString()).style.color = "white";
        }
      }
      if (this.selectedSelected.length == 0) {
        this.checkenable = false;
        this.multi = false;
      }
    }

    for (var i = 0; i < this.selectedSelected.length; i++) {
      if (this.selectedSelected[i].folderName != null) {
        this.sfolder = this.sfolder + 1;
      }
      else {
        this.sfiles = this.sfiles + 1;
      }
    }


    if (this.sfolder == 0) {
      this.deletemulticontent = this.sfiles + " Files"
    }
    else if (this.sfiles == 0) {
      this.deletemulticontent = this.sfolder + " Folders"
    }
    else {
      this.deletemulticontent = this.sfolder + " Folders " + this.sfiles + " Files"
    }
  }

  GetAllFolders1() {
    this.userservice.getfolders(this.uid).subscribe((respose: any) => {
      this.allFolders1 = respose;
      this.clicked();
      this.spinner.hide();
    });
  }
  clicked() {
    document.getElementById("ppup12").click();

  }

  getfolders(id1) {

    let id = id1.folderID;
    let elem = document.getElementById(id);
    if (elem.childNodes.length < 2) {

      var icn = document.getElementById(id1.id);
      if (icn != null) {
        icn.setAttribute("class", "fa fa-caret-down");

      }

      this.FileFoldID = id;
      this.userservice.getsubfolders(id).subscribe((respose: any) => {
        this.allSubFolders = respose;
        this.subf = this.allSubFolders.fileName;
        this.fid = this.allSubFolders.parentId;
        // console.log("user", this.allSubFolders);
        // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
        //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
        //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

        var mdv1 = document.createElement("div");
        for (let i = 0; i < this.allSubFolders.subFolders.length; i++) {
          var mdv = document.createElement("div");
          mdv.setAttribute("id", this.allSubFolders.subFolders[i].folderID);
          mdv.setAttribute("style", "padding-left:20px");
          var elm = document.createElement("span");
          var img = document.createElement("img");
          img.setAttribute("src", "./assets/img/folder.png");
          img.setAttribute("width", "30px");
          img.setAttribute("height", "30px");
          var elm1 = document.createElement("span");
          elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;

          var elm12 = document.createElement("i");

          elm12.setAttribute("class", "fa fa-caret-right");
          elm12.setAttribute("id", this.allSubFolders.subFolders[i].id);

          elm12.addEventListener('click', this.getfolders.bind(this, this.allSubFolders.subFolders[i]));



          elm.appendChild(elm12);
          elm.appendChild(img);
          elm.appendChild(elm1);

          mdv.appendChild(elm);

          elm.addEventListener('click', this.gotoFolder.bind(this, this.allSubFolders.subFolders[i]));


          mdv1.appendChild(mdv);
        }
        elem.appendChild(mdv1);


      });


    }
    else {

      document.getElementById(id1.id).setAttribute("class", "fa fa-caret-right");
      let elem = document.getElementById(id);
      while (elem.childNodes.length > 1) {
        elem.removeChild(elem.lastChild);
      }
    }
  }

  gotoFolder(data) {
    this.destinationFold = data;
  }

  gotoFolder12(data) {
    this.folderid = data.folderID;
  }

  Uploaddocs1() {
    this.UploadFolder();

  }

  UploadFolder() {
    document.getElementById("cancelUpload1").click();
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Uploading Folder to B_Safe...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Uploading Folder to B_Safe...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    this.DateTime = new Date().getTimezoneOffset();
    // let latest_date = this.datepipe.transform(this.DateTime, 'MM-dd-yyyy hh:mm:ss a');
    this.uploadfolderclicked = true;
    this.frmData1.append("Level", this.SelectedLevel);
    this.frmData1.append("FolderId", this.folderid);
    this.frmData1.append("FolderName", this.SelectedFolderName);
    this.frmData1.append("UserId", this.uid);
    this.frmData1.append("date", (-(this.DateTime)).toString());

    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/UploadFolder/NewAllFolderUpload/', this.frmData1).subscribe(
      //this.httpService.post('http://localhost:45320/api/UploadFolder/NewFolderUpload/', this.frmData1).subscribe(
      data => {
        if (data == 1) {


        }
        this.n = 100;
        this.createdmsg = "File Uploaded Successfully to B_Safe";
        this.pid = data;
        this.folderCreating = false;
        this.foldercreated = true;
        clearInterval(this.num);

        setTimeout(function () {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);


        this.SelectedFiles = null;
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

        this.ppopup = true;
      },
      (err: HttpErrorResponse) => {
        // console.log(err.message);
        this.ppopup = true;
        alert("Something went wrong!!! Please try again");
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

        // this.spinner.hide();
      });
  }
  cancelupload() {
    this.ppopup = true;
  }
  uploadhere() {
    var uploadhere = document.getElementById("Uploadhere");
    if (uploadhere.style.backgroundColor == "blue") {
      uploadhere.style.backgroundColor = "transparent";
    }
    else {
      uploadhere.style.backgroundColor = "blue";
    }
    let href = window.location.href.split('/');
    let val = href[href.length - 1];
    if (val != "allfolders" && val != "allsubfolders") {
      this.folderid = val;
    }
    else {
      this.folderid = "0";
    }
  }

  getfolders2(id1) {
    this.mvlfd = false;
    let id = id1.folderID;
    let elem = document.getElementById(id);
    if (elem.childNodes.length < 2) {

      var icn = document.getElementById(id1.id);
      if (icn != null) {
        icn.setAttribute("class", "fa fa-caret-down");

      }

      this.FileFoldID = id;
      this.userservice.getsubfolders(id).subscribe((respose: any) => {
        this.allSubFolders = respose;
        this.subf1 = this.allSubFolders.fileName;
        this.fid = this.allSubFolders.parentId;
        // console.log("user", this.allSubFolders);
        // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
        //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
        //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

        var mdv1 = document.createElement("div");
        for (let i = 0; i < this.allSubFolders.subFolders.length; i++) {
          var mdv = document.createElement("div");
          mdv.setAttribute("id", this.allSubFolders.subFolders[i].folderID);
          mdv.setAttribute("style", "padding-left:20px");
          var elm = document.createElement("span");
          var img = document.createElement("img");
          img.setAttribute("src", "./assets/img/folder.png");
          img.setAttribute("width", "30px");
          img.setAttribute("height", "30px");
          var elm1 = document.createElement("span");
          elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;

          var elm12 = document.createElement("i");

          elm12.setAttribute("class", "fa fa-caret-right");
          elm12.setAttribute("id", this.allSubFolders.subFolders[i].id);

          elm12.addEventListener('click', this.getfolders2.bind(this, this.allSubFolders.subFolders[i]));



          elm.appendChild(elm12);
          elm.appendChild(img);
          elm.appendChild(elm1);

          mdv.appendChild(elm);

          img.addEventListener('click', this.gotoFolder12.bind(this, this.allSubFolders.subFolders[i]));
          elm1.addEventListener('click', this.gotoFolder12.bind(this, this.allSubFolders.subFolders[i]));


          mdv1.appendChild(mdv);
        }




        elem.appendChild(mdv1);


      });


    }
    else {

      document.getElementById(id1.id).setAttribute("class", "fa fa-caret-right");
      let elem = document.getElementById(id);
      while (elem.childNodes.length > 1) {
        elem.removeChild(elem.lastChild);
      }
    }
  }

  ShareFileViaMail() {

  }
  ImportFromMail() {

  }
  MotoselectedFolde(Movetofold) {
    this.ppopup = false;
    this.GetAllFolders1();
    this.mvlfd = true;

    document.getElementById("ppup12").click();
  }

  Viewzip(ret) {

  }
  Viewanyfile(ret) {

  }
  MoveMultiFolder(id) {
    document.getElementById("closemove").click();
    this.ppopup = true;
    const inputRequest: MoveMultiFolder = {
      SelectedFiles: this.selectedSelected,
      Message: "Delete",
      DestinationId: id.folderID,
    }
    // if (this.selectedSelected.length == 1) {
    //   this.alert = "Moved " + this.selectedSelected.length + " Item to " + id.FolderName;
    // }
    // else {
    //   this.alert = "Moved " + this.selectedSelected.length + " Items to " + id.FolderName;
    // }
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getPercent(this.n);
    this.Creatingmsg = "Moving selected items...";
    this.num = setInterval(() => {
      if (this.n <= 90) {

        this.Creatingmsg = "Moving selected items...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);

    this.userservice.MoveMultiFileFolders(inputRequest).subscribe((data: any) => {
      this.Res = data;
      var fol = this.CurrentFiles;
      this.n = 100;
      this.createdmsg = "Moved items successfully!"
      this.Showmoveitem = true;
      this.folderCreating = false;
      this.checkenable = false;
      this.foldercreated = true;
      clearInterval(this.num);

      setTimeout(function () {
        this.folderCreating = false;
        this.foldercreated = false;
        this.generalprogressbar = false;
        this.errormsg = false;
        this.showper = false;
      }.bind(this), 3000);
      setTimeout(function () {
        this.Showmoveitem = false;
      }.bind(this), 6000);
      this.selectedSelected = [];
      this.selectedFriend = [];
      this.multi = false;
    });
  }


  DeleteMorecoin() {
    this.m = this.msg;

  }
  Deleteselected() {
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getPercent(this.n);
    this.Creatingmsg = "Deleting selected items";
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Deleting selected items";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    const inputRequest: DeleteMulit = {
      SelectedFiles: this.selectedSelected,
      Message: "Delete",
      UserId: this.uid,
      ModifiedOn: null
    }
    // console.log(inputRequest);
    this.userservice.DeleteMore(inputRequest).subscribe((data: any) => {
      this.Res = data;
      var fol = this.CurrentFiles;
      if (data != null) {
        this.n = 100;
        this.createdmsg = "Deleted selected items successfully!"
        this.pid = data;
        this.folderCreating = false;
        this.foldercreated = true;
        setTimeout(function () {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

        //this.notify = "Deleted Successfully"
        // setTimeout(() => this.foladdednotify = true, 100);
        // setTimeout(function () {
        //   this.foladdednotify = false;
        // }.bind(this), 3000);


        this.selectedSelected = [];
        this.multi = false;
        this.checkenable = false;
        setTimeout(() => {
        }, 500);
        //this.GetAllFolders();
        //this.spinner.hide();
      }
      else {
        this.checkenable = false;
        this.multi = false;
        this.notify = "Something went Wrong"
        setTimeout(() => this.foladdednotify = true, 100);
        setTimeout(function () {
          this.foladdednotify = false;
        }.bind(this), 3000);

        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();
      }
    });

  }
  ShareExsistingMultiFolderToUsers() {

    const inputRequest: MultiFolderShareVM = {
      Id: this.shareUniqueID,
      ToUsers: this.selectedFriend,
      USerId: this.uid,
      Code: "MainFolder",
      SelectedFolders: this.selectedSelected,
      AccessType: null,
      BodyContent: null,
      UserName: this.userName,
      ModifiedOn: null
    }
    //this.spinner.show();
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getPercent(this.n);
    this.Creatingmsg = "Sharing selected items...";
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Sharing selected items...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);

    this.userservice.addMultigMainFolderAndShare(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.n = 100;
          this.createdmsg = "Shared items successfully!"
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);
          // this.notify = "Folder Shared Succesfully";
          // setTimeout(() => this.dismissalert = true, 100);
          // setTimeout(function () {
          //   this.dismissalert = false;
          // }.bind(this), 3000);
          // this.spinner.hide();
          setTimeout(function () {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);
          this.selectedSelected = [];
          this.multi = false;

        }
        else {
          //alert("Something went wrong!!please try again");
          this.notify = "Something went wrong!!please try again";
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
        }
        this.spinner.hide();
      });
  }

  open() {
    this.shareitem = true;

    this.selectedSelected = null;
    this.selectedSelected = this.allFolders1;
    this.selectedFriend = [];
    this.GetFriendDetails();
    this.m = this.msg;

  }
  filesPicked(files) {
    // this.getFoldersforCompare();
    this.frmData1 = null;
    this.sameNames = null;
    this.uploadfolderclicked = true;
    this.frmData1 = new FormData();
    for (let i = 0; i < files.length; i++) {
      this.SelectedFolderandFiles.push(files[i]);
      this.frmData1.append("fileUpload", files[i]);
    }
    //  console.log(files);
    //document.getElementById("OpenModalTreeStructure").click();
    this.uploadfolderclicked = false;
    var folname = files[0].webkitRelativePath.split('/');


    for (var i = 0; i < this.folderlist.length; i++) {
      if (this.folderlist[i].FolderName == folname[0]) {
        this.sameFolderName.push(this.folderlist[i].FolderName);
        this.replaceFolderid.push(this.folderlist[i])
        continue;
      }
    }

    if (this.sameFolderName.length != 0) {
      this.sameNames = this.sameFolderName[0];
    }

    if (this.sameNames) {
      for (let index = 0; index < this.replaceFolderid.length; index++) {
        if (index == 0) {
          this.relaceFolderlist = this.replaceFolderid[index].FolderId;
        }
        else {
          this.relaceFolderlist = this.relaceFolderlist + "," + this.replaceFolderid[index].FolderId;
        }
      }
      //  console.log(this.relaceFolderlist);
      document.getElementById("duplicateFolder1").click();
      //this.GetFolderandSubFolder();  
      this.frmData1.append("replaceFolderid", this.relaceFolderlist);
    }
    else {
      //  this.ViewVideo("folderview", "videocontent");
      //   this.addFriend("addfriendcontent");
      this.ppopup = false;
      var pp = document.getElementById("ppup");
      if (pp) {
        pp.click();
      }
      else {
        console.log("illa");
      }

    }
  }

  openmodal() {
    document.getElementById("openm").click();
  }
  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  savenewClient() {
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString()));
    if (this.client == null || this.client == undefined || this.client == "") {
      alert("Please add your client name");
    }
    else {
      this.spinner.show();
      const inputRequest: AddNewFolder = {
        Id: 0,
        FolderID: "0",
        RoleId: this.roleid,
        FolderName: this.client,
        UserId: this.uid,
        Code: "Client",
        ParentID: "0",
        Click: null,
        date: nd
      }
      this.userservice.addclient(inputRequest).subscribe((dat: any) => {
        if (dat == 1) {
          alert("Added your client default folders successfully in the home page");
        }
        else {
          alert("Something went wrong! Please try again")
        }
        this.spinner.hide();
        this.msg = "";
      });
    }
  }

  addnewFolder(folderview) {
    this.m = this.msg;
  }
}


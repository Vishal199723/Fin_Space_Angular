import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { FilerequestService } from 'src/app/Shared/FileRequest/filerequest.service';
import { ShareIdShow } from 'src/app/ViewModels/shareidshow';
import { UserEncData } from 'src/app/ViewModels/UserEncData';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-uploadfileforrequest',
  templateUrl: './uploadfileforrequest.component.html',
  styleUrls: ['./uploadfileforrequest.component.scss']
})
export class UploadfileforrequestComponent implements OnInit {
  enablecomputer: boolean;
  UserDetails: string;
  userdetails: any;
  RequestedFileDetails: any;
  uid: string;
  currentuser: string;
  UserEmail: any;
  requestedfolderid: any;
  allFolders: any;
  FileFoldID: any;
  allSubFolders: any;
  currentfoldername: any;
  fid: any;
  subfolderdetails: any;
  Pid: any;
  allfoldersdisplay: boolean;
  checkfolid: any;
  splitfolid: any;
  folderdisaply: boolean;
  subfolderdisaply: any;
  pdffile: any;
  pdfdocname: any;
  xlsdata: any;
  xlssignfile: any;
  worddata: any;
  wordsignfile: any;
  videodata: any;
  videofile: any;
  pptdata: any;
  pptfile: any;
  zipdata: any;
  txtdata: any;
  txtfile: any;
  anyfiledata: any;
  imgdata: any;
  imagefile: any;
  selected = []; CurrentFiles: any;
  public remove: any = false;
  SharedResult: any;
  isLoggedIn: boolean;
  uname: string;
  public dismissalert = false;
  notify: string
  imagetrue: boolean;
  UserImage: any;
  TotalData: any;
  DataUsed: any;
  showper: any;
  errormsg: boolean;
  DummyResponse: any;
  timePassed: number;
  filename: any;
  filesize: any;
  public percent: any = 20;
  timetaken: number;
  remainingtime: number;
  showprogressbar: boolean;
  showuploading: boolean;
  showuploaded: boolean;
  public n: any = 20;
  num: any; num1: any;
  startingTime: number;
  time: number;
  showunlimited: boolean;
  TotalSpace: any;
  percentage: number;
  private toggleButton: any;
  private sidebarVisible: boolean;
  mobile_menu_visible: any = 0;
  selectedSelected: any =[];
  DateTime: Date;

  constructor(private router: Router,private element: ElementRef, private userservice: UserDetailsService, private messageService: MessageService, private httpService: HttpClient, private domSanitizer: DomSanitizer,
    private route: ActivatedRoute, private filerequestservice: FilerequestService,  private datepipe:DatePipe,
    private spinner:NgxSpinnerService) {
            this.messageService.sendSession('true');

    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.userdetails = params["id"];
        // localStorage.setItem("UserDetails", this.userdetails);
      }
    });
    window.scrollTo(0,0);

    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.uname = localStorage.getItem("Email");
      this.currentuser = localStorage.getItem("Email");
      this.GetRequestedFiles();
      this.GetUserMailId();
    }
    this.filerequestservice.getfolders(this.uid).subscribe((respose: any) => {
      this.allFolders = respose;
      this.folderdisaply = true;
    });
    this.showper = false;
  }

  ngOnInit() {
      this.enablecomputer = false
    this.allfoldersdisplay = false;
    this.folderdisaply = true;
    this.subfolderdisaply = false;
   
  }

  plans() {
    this.router.navigate(['plans']);
  }




  EditProfile() {
    this.router.navigate(['EditProfile/']);
  }
  Logout() {
    this.messageService.sendMessage('false');
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
    localStorage.clear();
  }
  Install() {
    this.router.navigate(['/install']);
  }
  GetDetails(details) {
    this.folderdisaply = false;
    this.subfolderdisaply = true;
    this.FileFoldID = details.FolderID;
    this.allfoldersdisplay = false;
    const dataaa: ShareIdShow = {
      EID: "",
      Fid: details.FolderID,
      LoginUID: this.uid
    }
    this.userservice.getsubfolders(dataaa).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.currentfoldername = this.allSubFolders.FileName;
      this.fid = this.allSubFolders.ParentId;
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.RetData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.SubFolders));
      for (let i = 0; i < this.allSubFolders.RetData.length; i++) {
        if (this.allSubFolders.RetData[i].file != null) {
          this.allSubFolders.RetData[i].file = this.domSanitizer.bypassSecurityTrustResourceUrl(this.allSubFolders.RetData[i].file)
        }
      }
    });
  }

  // get folders and files from subfolder
  GetSubfolderdetails(data) {
    this.folderdisaply = false;
    this.subfolderdisaply = true;
    this.allfoldersdisplay = false;
    this.subfolderdetails = data;
    this.currentfoldername = data.FolderName;
    this.FileFoldID = data.FolderID;
    const dataaa: ShareIdShow = {
      EID: "",
      Fid: data.FolderID,
      LoginUID: this.uid
    }
    this.userservice.getsubfolders(dataaa).subscribe((respose: any) => {
      this.allSubFolders = respose;
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.RetData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.SubFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.ParentId));
      for (let i = 0; i < this.allSubFolders.RetData.length; i++) {
        if (this.allSubFolders.RetData[i].file != null) {
          this.allSubFolders.RetData[i].file = this.domSanitizer.bypassSecurityTrustResourceUrl(this.allSubFolders.RetData[i].file)
        }
      }

    });
  }
  GetUserMailId() {
    this.filerequestservice.getuseremailid(this.uid).subscribe(
      (data: any) => {
        this.UserEmail = data
      }
    );
  }
  GetRequestedFiles() {
    const inputrequest: UserEncData = {
      UserDetails: this.userdetails
    }
    this.filerequestservice.Getrequestedfile(inputrequest).subscribe(
      (data: any) => {
        this.RequestedFileDetails = data;
        this.requestedfolderid = this.RequestedFileDetails.requestedFolderId


      }
    );
  }

  clickcomputer() {
    this.enablecomputer = true;
  }

  onChange(event: any) {
   
    this.showprogressbar = true;
    this.n = 1;
    this.filesize = 0;
    this.showper = true;
    let files = [].slice.call(event.target.files);
    const frmData = new FormData();
    for (var i = 0; i < files.length; i++) {
      frmData.append("fileUpload", files[i]);
    }
    this.filename = files[0].name;
    for (var j = 0; j < files.length; j++) {
      this.filesize = this.filesize + (files[j].size / 1024);
    }

    frmData.append("FromUserId", this.uid);
    frmData.append("ToUserId", this.RequestedFileDetails.fromAccountNo);
    frmData.append("folderid", this.requestedfolderid);
    frmData.append("filereqid", this.RequestedFileDetails.id);
   // frmData.append("date", latest_date);
    this.showprogressbar = true;
    this.showuploading = true;
    

    this.showper = true;
    this.showprogressbar = true;
    this.showuploading = true;
    this.spinner.show();
        //this.httpService.post('http://analyticals.co/haspitdmsapi/api/Recipient/DocumentUploadForFileRequest/', frmData).subscribe(
        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/Recipient/DocumentUploadForFileRequest/', frmData).subscribe(
          data => {
            if (data == "1") {
              alert("File uploaded Successfully!!")
              this.percent = 100;
              this.showuploading = false;
              this.showuploaded = true;

              setTimeout(function () {
                this.showuploading = false;
                this.showuploaded = false;
                this.showprogressbar = false;
                this.errormsg = false;
                this.percent = 0;
                this.showper = false;
              }.bind(this), 5000);

              clearInterval(this.num);
              this.spinner.hide();

            }
            else {
              this.notify = "Something went wrong. Try again";
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.percent = 0;
              this.spinner.hide();

            }
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
          });
      
  }

  Close() {
    this.showuploading = false;
    this.showuploaded = false;
    this.showprogressbar = false;
    this.errormsg = false;
    this.percent = 0;
  }

  
  GetBack(allSubFolders) {
    this.filerequestservice.getbackdata(allSubFolders.ParentId).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.currentfoldername = this.allSubFolders.FileName
      this.Pid = this.allSubFolders.ParentId;
      this.FileFoldID = this.allSubFolders.ParentId;
      this.allSubFolders.folderID = this.allSubFolders.ParentId;
      if (this.allSubFolders.ParentId == "0" && this.allSubFolders.FolderType == "1") {
        localStorage.setItem('formdata', JSON.stringify(this.allSubFolders));
        this.folderdisaply = true;
        this.subfolderdisaply = false;
      }
    });
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

  toggleSelect(data) {
    this.CurrentFiles = data;
    if (data != null) {
    
      if (this.selectedSelected.length == 0) {
        this.selectedSelected.push(data);
      }
      else {
        const index = this.selectedSelected.indexOf(data, 0);
        if (index > -1) {
          this.selectedSelected.splice(index, 1);
        }
        else {
          this.selectedSelected.push(data);
        }
      }
      if (this.selectedSelected.length == 0) {
      }
    }  
    console.log(this.selectedSelected);
  }

  
//  OnSelecttoShareFiles() {
//   this.DateTime = new Date();
//     let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');
//    // console.log(latest_date);
//   this.showprogressbar = true;
//   this.n = 1;
//   this.filesize = 0;
//   this.showper = true;
//   const inputRequest: ShareThroughHaspit = {
//     SelectedFiles: this.selected,
//     SelectedFolders: this.selectedSelected,
//     FromUserId: this.uid,
//     ToUserId: this.RequestedFileDetails.FromAccountNo,
//     filereqid: this.RequestedFileDetails.Id,
//     folderid: this.requestedfolderid,
//     Createdon:latest_date
//   }
//   if (this.selected.length == 0 && this.selectedSelected.length == 0) {
//     alert("Please Select atleast one file")
//   }
//   else {
//     //this.spinner.show();
//     if (this.selected.length != 0) {
//       this.filename = this.selected[0].DocumentName;
//     }
//     else {
//       this.filename = this.selectedSelected[0].FileName;
//     }
//     for (var j = 0; j < this.selected.length; j++) {
//       this.filesize = this.filesize + (this.selected[j].DocumentSize / 1024);
//     }
//     this.showprogressbar = true;
//     this.showuploading = true;
//     var startingTime = new Date().getTime();
//     var imgdata = "MQkxMDAtMzAwS2IJMTk6MDA6MDguNzk0NDc1Nwk0Nzc5DQoyCTEwMC0zMDBLYgkxOTowMDozOS42NzAyNzMxCTUwNDgNCjMJMTAwLTMwMEtiCTE5OjAwOjUyLjcyNDk5MjUJNTE1MA0KNAkxMDAtMzAwS2IJMTk6MDE6MzcuNDI4NzMwMgk0MDg3DQo1CTEwMC0zMDBLYgkxOTowMjoxMC40NDMxMzYxCTM5NjINCjYJMC0xMDBLYgkxOTowNDo0OS4xNDQzNTMxCTQ2MzUNCjcJMC0xMDBLYgkxOTowNjozMy4zODIwNTI4CTU0NjgNCjgJMC0xMDBLYgkxOTowNzoxNS45NDQxODAxCTM2MDINCjkJMC0xMDBLYgkxOTowODoxMi45Njc0Mjc1CTMzNTYNCjEwCTAtMTAwS2IJMTk6MDk6NDkuNTkwOTU3NwkzOTkxDQoxMQkzMDAtNTAwS2IJMTk6MTE6NDguNDcxODI5Nwk1NDc5DQoxCTEwMC0zMDBLYgkxOTowMDowOC43OTQ0NzU3CTQ3NzkNCjIJMTAwLTMwMEtiCTE5OjAwOjM5LjY3MDI3MzEJNTA0OA0KMwkxMDAtMzAwS2IJMTk6MDA6NTIuNzI0OTkyNQk1MTUwDQo0CTEwMC0zMDBLYgkxOTowMTozNy40Mjg3MzAyCTQwODcNCjUJMTAwLTMwMEtiCTE5OjAyOjEwLjQ0MzEzNjEJMzk2Mg0KNgkwLTEwMEtiCTE5OjA0OjQ5LjE0NDM1MzEJNDYzNQ0KNwkwLTEwMEtiCTE5OjA2OjMzLjM4MjA1MjgJNTQ2OA0KOAkwLTEwMEtiCTE5OjA3OjE1Ljk0NDE4MDEJMzYwMg0KOQkwLTEwMEtiCTE5OjA4OjEyLjk2NzQyNzUJMzM1Ng0KMTAJMC0xMDBLYgkxOTowOTo0OS41OTA5NTc3CTM5OTENCjExCTMwMC01MDBLYgkxOToxMTo0OC40NzE4Mjk3CTU0NzkNCjEJMTAwLTMwMEtiCTE5OjAwOjA4Ljc5NDQ3NTcJNDc3OQ0KMgkxMDAtMzAwS2IJMTk6MDA6MzkuNjcwMjczMQk1MDQ4DQozCTEwMC0zMDBLYgkxOTowMDo1Mi43MjQ5OTI1CTUxNTANCjQJMTAwLTMwMEtiCTE5OjAxOjM3LjQyODczMDIJNDA4Nw0KNQkxMDAtMzAwS2IJMTk6MDI6MTAuNDQzMTM2MQkzOTYyDQo2CTAtMTAwS2IJMTk6MDQ6NDkuMTQ0MzUzMQk0NjM1DQo3CTAtMTAwS2IJMTk6MDY6MzMuMzgyMDUyOAk1NDY4DQo4CTAtMTAwS2IJMTk6MDc6MTUuOTQ0MTgwMQkzNjAyDQo5DQo=";
//     const dataa: phone = {
//       uid: "",
//       phone: imgdata
//     }
//     this.showper = true;
//     this.showprogressbar = true;
//     this.showuploading = true;
//     this.allfilesservice.getdummyresponse(dataa).subscribe((response: any) => {
//       this.timePassed = ((new Date().getTime() - startingTime)) / 1000;
//       console.log(this.timePassed);//timepassed is in milliseconds
//       this.DummyResponse = response;
//       if (this.DummyResponse != null) {
//         this.timetaken = (this.timePassed / 1000) * this.filesize;
      
//         this.remainingtime = (Math.ceil(this.timetaken)) + 5;
//         this.getthePercent(this.timetaken);
//       this.num = setInterval(() => {
//         if (this.n <= 95) {
//           this.n = this.getthePercent(this.n);
//           if (this.remainingtime <= 1) {
//             this.remainingtime = 5;
//           }
//           this.remainingtime = (Math.ceil(this.remainingtime));
//           this.remainingtime = this.remainingtime - 1;
//           if (this.n > 95) {
//             this.n = 95;
//             this.percent = this.n;
//           }
//           this.percent = (Math.ceil(this.n));
//         }
//         else {
//           if (this.remainingtime <= 1) {
//             this.remainingtime = 5;
//           }
//           this.n = 95;
//           this.percent = this.n;
//         }
//       }, 1000);

//       }
//       this.recipientservice.ShareFilesThroughHaspit(inputRequest).subscribe((data: any) => {
//         this.SharedResult = data;
//         if (this.SharedResult == "sent") {
//           this.percent = 100;
//           this.showuploading = false;
//           this.showuploaded = true;

//           setTimeout(function () {
//             this.showuploading = false;
//             this.showuploaded = false;
//             this.showprogressbar = false;
//             this.errormsg = false;
//             this.percent = 0;
//             this.showper = false;
//           }.bind(this), 5000);

//           clearInterval(this.num);
//         }
//         else {
//           this.notify = "Something went wrong. Try again";
//           setTimeout(() => this.dismissalert = true, 100);
//           setTimeout(function () {
//             this.dismissalert = false;
//           }.bind(this), 3000);
//           this.spinner.hide();
//         }
//       });
//     });
//   }

// }


  RouteToPlans() {
    this.router.navigate(['plans/']);
  }

  Logoutfromhaspit() {
    this.messageService.sendMessage('false');
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }

  getthePercent(per) {
    //this.timetaken =this.filesize/(this.timePassed / 1000)
    //this.remainingtime = this.timetaken;
    this.n = this.n + ((100 - this.n) / this.remainingtime);
    //this.n = this.n * 100;
    return (Math.ceil(this.n));
    //*100 is for percentage and /1000 is for converting ms to secs
    //divededby 9 is for 9 divisions of progress bar
  }

  gobackToFR() {
    this.router.navigate(['filerequests']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';

@Component({
  selector: 'app-sharefile',
  templateUrl: './sharefile.component.html',
  styleUrls: ['./sharefile.component.scss']
})
export class SharefileComponent implements OnInit {
  selectedSelected: any[];
  isLoggedIn: boolean;
  uid: string;
  username: string;
  roleid: string;
  gridvalue: string;
  allFolders: any;
  SharedFiles: any;
  subf: any;
  allSubFolders: any;
  videoplay: any;
  zzz: any;
  current_url: any;
  domSanitizer: any;
  pdfUrl: any;
  closeResult: string;
  txtUrl: any;
  m: any;
  msg: any;
  current_url1: any;
  videodate: any;
  doc: string;
  allFolders1: any;
  FileFoldID: any;
  allSubFolders1: any;
  fid: any;
ppopup:any;
multi:any
mobile=false;
shareitem:any
deleteitem:any
folderview:any
Docname:any
  constructor( private messageService: MessageService,private userservice: UserDetailsService, private router: Router,private spinner:NgxSpinnerService) {
    this.ppopup=true;
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.spinner.show();
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.isLoggedIn = true;
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.username = localStorage.getItem("UserName");
      this.gridvalue = localStorage.getItem("gridvalue");
    }
    window.scrollTo(0,0);

   }
  ngOnInit() {
    this.GetAllSharingFolders();
    this.GetAllFolders1();
    setTimeout(() => {
      var footer = document.getElementById("footer");
      if(footer.style.display=="none"){
        footer.style.display = "block";
      }
    }, 1000);
    if(window.innerWidth<500){
      setTimeout(() => {
        var tree = document.getElementById("treeview");
          
          if(tree){
            tree.style.display = "none";
          }
          var upload = document.getElementById("view");
          
          if(upload){
            upload.style.display = "none";
          }
      }, 100);

        this.mobile=true;
      }
      setTimeout(() => {
        this.spinner.hide();
      }, 6000);
  } 
  toggleDelete(a,b){

  }
  ViewDoc(aa){
    this.zzz = aa;

  }
  Viewzip(a){

  }
  Viewanyfile(a){

  }
  treeviewba(){
    var tree = document.getElementById("treeview");
    if(tree){
      if(tree.style.display == "none"){
        tree.style.display = "block";
      }
      else{
        tree.style.display = "none";
      }
    }
  }
  GetAllFolders1() {
    this.userservice.getAllSharingfolders(this.uid).subscribe((respose: any) => {
      this.allFolders1 = respose;
      if (this.allFolders1.length > 0 && this.allFolders1[0].sharedFiles.length != 0 && this.allFolders1[0].TotalMembers == null) {
        this.SharedFiles = this.allFolders1[0].sharedFiles;
      }
      else if (this.allFolders1[0].TotalMembers != null) {
        this.allFolders1 = respose;
        this.SharedFiles = this.allFolders1[0].sharedFiles;
      }
      this.spinner.hide();
    });
  }

  toggle(a,b){

  }

  GetAllSharingFolders() {
    //this.GetallFilesForUplodtoCompare();
    this.selectedSelected = [];
    this.userservice.getAllSharingfolders(this.uid).subscribe((respose: any) => {
      this.allFolders = respose;
      if (this.allFolders.length > 0 && this.allFolders[0].sharedFiles.length != 0 && this.allFolders[0].TotalMembers == null) {
        this.SharedFiles = this.allFolders[0].sharedFiles;
      }
      else if(this.allFolders == null||this.allFolders == undefined || this.allFolders == ""){
        this.spinner.hide();
      }
      else if (this.allFolders[0].TotalMembers != null) {
        this.allFolders = respose;
        this.SharedFiles = this.allFolders[0].sharedFiles;
        
      }
      // this.spinner.hide();
    });
  }
  GetSubfolder(data) {
    this.subf = data.folderName;
    this.userservice.getsubfolders(data.folderId).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.folderName;
      var Pid = this.allSubFolders.parentId;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));
      console.log("user", this.allSubFolders);
      this.router.navigate(['allsubfolders/' + data.folderID]);
    });
  }

  GetSubfolder1(data) {
    this.subf = data.folderName;
    this.userservice.getsubfolders(data.folderID).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.folderName;
      var Pid = this.allSubFolders.parentId;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));
      console.log("user", this.allSubFolders);
      this.router.navigate(['allsubfolders/' + data.folderID]);
    });
  }

  getfolders1(id1) {
    let id = id1.folderID;
   
      let elem = document.getElementById(id);
      if(elem.childNodes.length<2)
      {

   var icn = document.getElementById(id1.id);
   if(icn!=null)
   {
    icn.setAttribute("class","fa fa-chevron-down");

   }

    this.FileFoldID = id;
    this.userservice.getsubfolders(this.FileFoldID).subscribe((respose: any) => {
      this.allSubFolders1 = respose;
      this.subf = this.allSubFolders1.fileName;
      this.fid = this.allSubFolders1.parentId;
      console.log("user", this.allSubFolders1);
     // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

      var mdv1 = document.createElement("div");
for(let i=0;i<this.allSubFolders1.subFolders.length;i++)
{
    var mdv = document.createElement("div");
mdv.setAttribute("id",this.allSubFolders1.subFolders[i].folderID);
    mdv.setAttribute("style","padding-left:20px");
    var elm =document.createElement("span");
    var img = document.createElement("img");
    img.setAttribute("src","./assets/img/folder.png");
    img.setAttribute("width","30px");
    img.setAttribute("height","30px");
    var elm1 =document.createElement("span");
    elm1.innerHTML = this.allSubFolders1.subFolders[i].folderName;

    var elm12 =document.createElement("i");

    elm12.setAttribute("class","fa fa-chevron-right");
    elm12.setAttribute("id",this.allSubFolders1.subFolders[i].id);

    elm12.addEventListener('click', this.getfolders1.bind(this,this.allSubFolders1.subFolders[i]));



    elm.appendChild(elm12);
    elm.appendChild(img);
    elm.appendChild(elm1);

    mdv.appendChild(elm);

    img.addEventListener('click', this.GetSubfolder.bind(this,this.allSubFolders1.subFolders[i]));
    elm1.addEventListener('click', this.GetSubfolder.bind(this,this.allSubFolders1.subFolders[i]));


    mdv1.appendChild(mdv);
}

elem.appendChild(mdv1);
    });


  }
  else{

    document.getElementById(id1.id).setAttribute("class","fa fa-chevron-right");
    let elem = document.getElementById(id);
     while(elem.childNodes.length>1)
     {
         elem.removeChild(elem.lastChild);
     }
  }
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
    this.GetAllSharingFolders();
    this.GetAllFolders1();
  });
}

  ViewDocument(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";
  
  }

  ViewDocumentword(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    this.doc = "http://docs.google.com/gview?" + this.zzz.file + "&embedded=true";

  }

  ViewDocumenttext(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.txtUrl = this.zzz.file;
    // this.doc = "http://docs.google.com/gview?" + this.zzz.file + "&embedded=true";

  }

  ViewxlsDoc(aa) {
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";

   
  }

  ViewPpt(aa) {
    this.zzz = aa;
    this.current_url1 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
   
  }

  ViewVideo(cc) {
    this.videoplay = cc.file
    this.videodate = cc.date

  }
}

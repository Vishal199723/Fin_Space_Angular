import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { RestoredataVM } from 'src/app/ViewModels/RestoredataVM';

@Component({
  selector: 'app-deletedfiles',
  templateUrl: './deletedfiles.component.html',
  styleUrls: ['./deletedfiles.component.scss']
})
export class 
DeletedfilesComponent implements OnInit {
  accid: string;
  name: string;
  deletedlist: any;
  uid: string;

  constructor( private messageService: MessageService,private userservice: UserDetailsService, private router: Router,private spinner:NgxSpinnerService) {
    this.spinner.show();
    window.scrollTo(0,0);
    this.messageService.sendSession('true');

    if (localStorage.getItem("IsLoggedIn") == "true") {

      this.uid = localStorage.getItem("userId");
      this.accid = localStorage.getItem("uid");
      this.name = localStorage.getItem("UserName");
    }
  }

  ngOnInit() {
  this.GetAllDeletedFiles();
  setTimeout(() => {
    var footer = document.getElementById("footer");
    if(footer.style.display=="none"){
      footer.style.display = "block";
    }
  }, 1000);
  }
  GetAllDeletedFiles(){
    this.userservice.Getalldeletetrns(this.uid).subscribe((respose: any) => {
      this.deletedlist = respose;
      this.spinner.hide();
    });
  }
  Restorefile(data){
    
      const inputRequest: RestoredataVM = {
        BlockId : data.blockId,
        FolderId: data.folderID,
        UID: this.uid
      }
      this.userservice.PostRestoredata(inputRequest).subscribe(
        (data: any) => {
          if (data == "1") {
            alert("Restored Succesfully");
            this.GetAllDeletedFiles()
            //this.router.navigate(['/allfolders']);
          }          
          else {
            alert("Something Went Wrong. Try again.!!");
          }
        });
    }
  
}

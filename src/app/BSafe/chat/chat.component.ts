import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserId } from 'src/app/ViewModels/UserId';
import { IndividualChatDetails } from 'src/app/ViewModels/IndividualChatDetails';
import { NgForm } from '@angular/forms';
import { Friend } from 'src/app/ViewModels/Friend';
import { ChatDetail } from 'src/app/ViewModels/ChatDetail';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  b: any[] = [1, 2, 8, 5];

  className: string;
  chatdetail: ChatDetail;
  Users: any = [];
  userid: any;
  isLoggedIn: boolean;
  fullName: string;
  touserid: any;
  chatopen: boolean;
  IndividualChatDetail: any;
  uid: boolean;
  chattoid: any;
  chatvar: any;
  chattouserid: any; chaatto: any;
  aaaaa: ChatDetail;
  IndividualChatRecivedDetails: any;
  IndividualChatSentDetails: any;
  BMid: string;
  touser: any;
  currentuser: string;
  data: any;
  chtnm: any;
  cnnTableData: any = [];
  closeResult: string;
  accid: any;
  m: any;
  Friends: any;
  accountid: string;
  message:any
  userImage: any;
  otheruserimage: any;
  currentuid: string;
  constructor(private userservice: UserDetailsService, private router: Router,  private messageService: MessageService, private spinner: NgxSpinnerService) {
    // this.spinner.hide();
    window.scrollTo(0, 0);
    this.messageService.sendSession('true');

    if (localStorage.getItem("IsLoggedIn") == "true") {

      this.isLoggedIn = true;
      this.currentuid = localStorage.getItem("userId");

      this.userid = localStorage.getItem("userId");
      this.accountid = localStorage.getItem("userId")
    }
    this.isLoggedIn = true;
    //this.userid = Number(localStorage.getItem("userId"));
    this.currentuser = localStorage.getItem("UserName");
    this.BMid = localStorage.getItem("userId")
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.GetDetails();
    }, 3000);
    
  }
  frndrqst = false;
  addfrnd() {
    if (this.frndrqst == true) {
      this.frndrqst = false;
    }
    else {
      this.frndrqst = true;
    }
  }
  scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("nb").style.top = "0";
    } else {
      document.getElementById("nb").style.top = "-50px";
    }
    this.data.sort((a, b) => new Date(b.CREATE_TS).getTime() - new Date(a.CREATE_TS).getTime());
  }

  ngOnInit() {

    this.GetUsers();
    this.loadChatDetail();
    this.GetDetails();
    this.GetCurrentUserImage();
 
  }


  OnSelectUser(id) {
    this.touserid =id;
    this.userservice.GetToUser(this.touserid).subscribe((respose: any) => {
      this.touser = respose;
    });
  }
  messa: any;
  SaveUserChat() {
    const inputRequest: ChatDetail = {
      Chatid: 0,
      ChatFrom: this.userid,
      ChatFromName: this.currentuser,
      ChatTo: this.touserid,
      ChatToName: this.touser.userName,
      ChatMessage: this.messa,
      IsEnabled: true,
      ChatFromUId: this.BMid,
      ChatToUserUId: this.touserid,

    }
    this.userservice.saveuserChat(inputRequest).subscribe((data: any) => {
      if (data != null) {
        alert("Message sent Successfully!");
        this.messa = "";
      }
    })
  }

  GetUsers() {
    const inputRequest: UserId = {
      userid: this.userid
    }
    this.userservice.GetAllUsersExceptMe(inputRequest).subscribe((respose: any) => {
      this.Users = [];
      var Users = respose.friendsList;
      for (let i = 0; i < Users.length; i++) {

        if (Users[i]['friendId'] == this.userid) {
          Users[i]['friendId'] = Users[i]['userId']
        }
        this.Users.push(Users[i]);
      }
      console.log(this.Users)
    });

  }

  GetCurrentUserImage() {
    this.userservice.getCurrentUSerImage(this.currentuid).subscribe((respose: any) => {
      this.userImage = respose;
    });
  }


  loadChatDetail() {
    this.userservice.GetChatforParticularUser(this.userid).subscribe((chat: any) => {
      this.chatdetail = chat
    });
  }
  backup() {
    this.spinner.show();
    this.userservice.chacbackup(this.userid).subscribe((data: any) => {
      if (data == 1) {
        alert("Your chat messages back up was successfull ! Find it in Safe -> My Objects -> Chat Backups");
      }
      else {
        alert("Something went wrong!!! Please try again after sometime");
      }
      this.spinner.hide();
    })
  }
  OpenChatWindow(chat) {

    this.chatvar = chat;
    this.chattouserid = chat.chatFrom;
    this.chaatto = chat.userID;
    this.chatopen = true;
    const inputRequest: IndividualChatDetails = {
      Chatid: chat.id,
      ChatFrom: chat.chatFrom,
      ChatTo: chat.userID
    }
    this.userservice.GetIndividualChatRecivedDetails(inputRequest).subscribe((data: any) => {
      // this.IndividualChatRecivedDetails = data.recivedchatdetails;
      this.IndividualChatSentDetails = data;
      console.log(this.IndividualChatSentDetails);
      for (let i = 0; i < this.IndividualChatSentDetails.length; i++) {
        if (this.IndividualChatSentDetails[i].chatFromName != this.currentuser) {
          console.log(this.IndividualChatSentDetails);
          this.chtnm = this.IndividualChatSentDetails[i].chatFromName;
          this.otheruserimage = this.IndividualChatSentDetails[i].otherUserImage;

          break;
        }

      }

      if (this.userid == chat.chatTo) {
        this.uid = true;

      }
    })

  }
  goto() {
    this.router.navigate(['chat']);
  }
  SendIndividualMessage(form: NgForm) {
    const inputRequest: ChatDetail = {
      Chatid: 0,
      ChatFrom: this.userid,
      ChatFromName: "",
      ChatTo: this.chaatto,
      ChatToName: "",
      ChatMessage: form.controls["individualchatmessage"].value,
      IsEnabled: true,
      ChatFromUId: this.BMid,
      ChatToUserUId: this.chattouserid
    }
    this.aaaaa = inputRequest;
    this.userservice.saveuserChat(inputRequest).subscribe((data: any) => {
      if (data != null) {
        this.OpenChatWindow(this.chatvar);
        (<HTMLInputElement>document.getElementById("individualchatmessage")).value = "";
      }
    })

  }

  CloseChatWindow() {
    this.chatopen = false;

  }
  frndslist: any;
  GetDetails() {
    this.userservice.friendlist(this.userid).subscribe((respose: any) => {
      this.Friends = respose;
      this.frndslist = this.Friends.friendsList;
      var idd = this.accid;
      if (idd) {
        for (let i = 0; i < this.frndslist.length; i++) {

          if (idd.includes('@')) {
            if (this.frndslist[i]['email'] == this.accid) {
              for (i = 0; i < 100; i++) {
                window.clearInterval(i);
              }
              alert(this.accid + " has accepted your friend request");
              this.accid = "";
            }
            this.GetUsers();
          }
        }


      }
      else {
        this.GetUsers();
      }
      this.spinner.hide();
    });
  }


  addFriend() {
    this.m = this.accid;

  }
  savefrienddetails() {
    const inputRequest: Friend = {
      Id: 0,
      FriendAccount: this.accid,
      UserId: this.userid,
      Status: 4,
      IsEnabled: true,

    }
    localStorage.accid = this.accid;
    this.spinner.show();
    this.userservice.SaveFrienddetails(inputRequest).subscribe((data: any) => {
      if (data == "SameUser") {
        alert("Please Enter your Friend MailId!!");
        this.GetDetails();
      }
      else if (data == "alreadyfriends") {
        alert("You are already friends!!");
        this.GetDetails();
      }
      else if (data == "NoUserFound") {
        alert("We are sorry " + this.accid + " is not using B-Safe!!");
        this.GetDetails();
      }
      else if (data == "SentRequest") {
        alert("You have already sent or recived request from this user!!");
        this.GetDetails();
      }
      else if (data == "1") {
        alert("Friend Request Sent successfully!");
        this.GetDetails();
      }
      else {
        alert("Something went Wrong");
        // this.route.navigate(['/allfolders']);
      }
      this.spinner.hide();
      this.accid = "";
    });
  }
  acceptrequest(f) {
    this.userservice.AcceptReq(f).subscribe((data: any) => {
      alert("Accepted Successfully");
      // this.route.navigate(['/allfolders']);
      this.GetDetails();
    });
  }

  ViewDocument(bb, pdfcontent) {
  }


  open(content) {

  }


}

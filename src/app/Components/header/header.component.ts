import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { LoginService } from 'src/app/LoginService/login.service';
import { Auditdata, UserEMail } from 'src/app/ViewModels/Auditdata';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserLogin } from 'src/app/ViewModels/UserLogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  uid: string;
  message: any;
  subscription: Subscription;
  useremail: string;
  username: string;
  dnsIP: any;
  IPAddress: any;
  width = 0;

  clicked = false;
  lists1 = false;
  roleid: any;
  menudata: string;
  usermenus: any;
  groupId: string;
  MastersData: any;
  constructor(private router: Router, private messageService: MessageService, private loginService: LoginService, private http: HttpClient,
    private spinner: NgxSpinnerService) {
      this.messageService.sendSession('true');

    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
      this.useremail = localStorage.getItem("Email");
      this.username = localStorage.getItem("fullname");
      this.roleid = localStorage.getItem("role");
      this.groupId = localStorage.getItem("groupId");
      this.message = true;
      this.isLoggedIn = true;
    }
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      if (this.message.text == "true") {
        // this.isLoggedIn = true;
      }
    });


  }

  ngOnInit() {
    this.menudata = localStorage.getItem("generatemastermenu");
    var mdata = JSON.parse(this.menudata);
    this.usermenus = mdata;
    console.log("mastermenus",this.usermenus)
      if(this.roleid == 1009||this.roleid == 3015){
      this.GetMasters();
    }
  }
 

  GetMasters(){
    this.loginService.getallmastermenusforadmin(this.roleid).subscribe((data: any) => {
      this.MastersData = data;
    });
  }

  Logout() {
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    localStorage.clear();
    this.router.navigate(['/home']);
    this.messageService.sendMessage('false');
  }
  gotoprofile(){
    this.router.navigate(['/updateprofile']);

  }
  gotodashboard(){
    if(this.groupId == "1005" && this.roleid=="1005"){
      this.router.navigate(['/appreg']);
    }
    else if(this.groupId == "1008" && this.roleid=="1005"){
      this.router.navigate(['/sbacc']);
    }
    else if(this.groupId == "1014" && this.roleid=="1005"){
      this.router.navigate(['/loandoc']);
    }
    else if(this.groupId == "1017" && this.roleid=="1005"){
      this.router.navigate(['/loandis']);
    }
  }
  gotootherdashboard(){
    this.router.navigate(['/otherdashboard']);

  }
  gotoppudashboard(){
    this.router.navigate(['/ppudashboard']);

  }
  // Logout() {
  //   const data: UserEMail = {
  //     Email: this.useremail,
  //     uid: localStorage.getItem("userId"),
  //     ipaddress: this.IPAddress,
  //     dnsip: this.dnsIP,
  //     browser: this.getBrowserName(),
  //     transaction: "Signout"
  //   }
  //   this.spinner.show();
  //   this.loginService.Logout(data).subscribe(data => {
  //     if(data == "1"){
  //       this.isLoggedIn = false;
  //       localStorage.setItem("IsLoggedIn", "false");
  //       localStorage.removeItem('userToken');
  //       localStorage.clear();
  //       this.router.navigate(['/home']);
  //       this.spinner.hide();

  //     }
  //     this.spinner.hide();

  //   });
  // }

  checkSession() {
    let browser = this.getBrowserName();
    let token = localStorage.getItem("userToken");
    let userid = localStorage.getItem("userId");


    const inp: UserLogin = {
      Browser: browser,
      Token: token,
      UserId: userid,
      Id: 0,
      lastUseddt: null,
      logindt: null,
    };

    this.loginService.CheckSession(inp).subscribe((data: any) => {

      if (data == "1") {
        this.Logout();
      }
    });
  }
  getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf("edge") > -1:
        return "Edge";
      case agent.indexOf("opr") > -1 && !!(<any>window).opr:
        return "Opera";
      case agent.indexOf("chrome") > -1 && !!(<any>window).chrome:
        return "Chrome";
      case agent.indexOf("trident") > -1:
        return "IE";
      case agent.indexOf("firefox") > -1:
        return "Firefox";
      case agent.indexOf("safari") > -1:
        return "Safari";
      default:
        return "other";
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../LoginService/login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../MessageService/meaagse.service';
import { CookieService } from 'ngx-cookie-service';
import { Auditdata, UserEMail, UEMail } from '../ViewModels/Auditdata';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserLogin } from '../ViewModels/UserLogin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  width1 = 0;
  width2 = 0;
  width3 = 0;
  email = "";
  password = "";
  senduserid: any;
  isLoginError: boolean;
  rememberme = false;
  showper: boolean;
  generalprogressbar: boolean;
  folderCreating: boolean;
  Creatingmsg: string;
  num: any;
  public n: any = 20;
  createdmsg: string;
  foldercreated: boolean;
  dnsIP: any;
  IPAddress: any;
  NoofAttempts: any;
  userselecteddata: string;
  mastermenus: any;
  selectedloanid: string;
  uid: string;
  isLoggedIn: boolean;
  selectedinvestmentsid: any;
  selectedinsurancetype: any;

  constructor(private router: Router, private loginService: LoginService, private messageService: MessageService,
    private cookie: CookieService, private http: HttpClient,private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);

    localStorage.setItem("Loder", "0");
    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.uid = localStorage.getItem("userId");
    }

    var side = document.getElementById("sidebardisp");
    if (side != null) {
      side.style.visibility = "hidden";
    }

    var nav = document.getElementById("navv");
    if (nav != null) {
      nav.style.visibility = "hidden";
    }

    if (localStorage.remember) {

      var email = localStorage.rememberemail;
      var password = localStorage.rememberpassword;
      if (email) {
        this.email = email;
      }
      if (password) {
        this.password = password;
      }

    }
    setTimeout(() => {
      document.getElementById("signin").style.height = window.innerHeight + "px";
    }, 100);

    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      this.dnsIP = data['ip'];
    });

    this.http.get('https://jsonip.com/').subscribe(data => {
      this.IPAddress = data['ip'];
    });

  }
  onResize(event) {
    document.getElementById("signin").style.height = window.innerHeight + "px";

    if (event.target.innerWidth > 500) {
      this.width1 = 1;
      this.width2 = 0;
      this.width3 = 0;
    }
    else if (event.target.innerWidth <= 500 && event.target.innerWidth > 335) {
      this.width2 = 1;
      this.width1 = 0;
      this.width3 = 0;
    }
    else {
      this.width3 = 1;
      this.width2 = 0;
      this.width1 = 0;
    }

    var userseldata = localStorage.getItem("productdata");
    this.userselecteddata = JSON.parse(userseldata);

  }
  ngOnInit() {
    var userseldata = localStorage.getItem("productdata");
    this.userselecteddata = JSON.parse(userseldata);
    this.GetCookies();
    this.RemoveCookies();
    var fp = document.getElementById("footerprivacy");
    if (fp) {
      fp.style.visibility = "visible";
    }
    if (window.innerWidth > 500) {
      this.width1 = 1;
      this.width2 = 0;
      this.width3 = 0;
    }
    else if (window.innerWidth <= 500 && window.innerWidth > 335) {
      this.width2 = 1;
      this.width1 = 0;
      this.width3 = 0;
    }
    else {
      this.width3 = 1;
      this.width2 = 0;
      this.width1 = 0;
    }
  }
  updateEmail(value: any) { this.email = value; }
  updatePassword(value: any) { this.password = value; }
  checkbox(value: any) {
    if (value != undefined) {
      this.rememberme = true;
    }
    else {
      this.rememberme = false;
    }
  }
  //{ this.rememberme = !this.rememberme;}
  signIn() {
    if (this.email == null || this.email == "") {
      alert("Enter Email");
    }
    else if (this.password == null || this.password == "") {
      alert("Enter Password");
    }
    else {
      this.spinner.show();
      
      if (this.rememberme) {
        this.cookie.set("useremail", this.email);
        this.cookie.set("password", this.password);
      }
      this.loginService.userAuthentication(this.email, this.password).subscribe((data: any) => {
        this.spinner.hide();
        var logindata = [data.access_token, this.email, data.roleName, data.refresh_token, true, data.userUid,
        data.fullName, data.username, data.nameofRole, data.departmentname, data.userId, data.uid, data.area, data.IsMember, data.premiumtype];

        localStorage.setItem('IsLoggedIn', "true");
        localStorage.setItem('userToken', data.access_token);
        localStorage.setItem('authorizationData', data);
        localStorage.setItem('Token_type', data.token_type);
        localStorage.setItem("UserName", data.userName);
        localStorage.setItem("role", data.roleId);
        localStorage.setItem("groupId", data.groupid);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("Email", data.mailId);
        localStorage.setItem("fullname", data.fullName);
        this.senduserid = data.userId;
        this.SaveAuditData();
        this.getmenu(data.roleId);
        this.messageService.sendMessage('true');
        let id = localStorage.getItem("userId");

        this.selectedloanid = localStorage.getItem("selectedloantype");
        this.selectedinvestmentsid = localStorage.getItem("selectedmutualfundtype");
        this.selectedinsurancetype = localStorage.getItem("selectedinsurancetype");

        if (data.roleId == "1") {
          if (this.userselecteddata != null || this.userselecteddata != undefined) {
            this.router.navigate(['/sendservicerequest/' + JSON.stringify(this.userselecteddata)])
          }
          else if(this.selectedloanid != null){
            this.router.navigate(['/loansp']);
          }
          else if(this.selectedinsurancetype != null){
            this.router.navigate(['/insurancesp']);
          }
          else if(this.selectedinvestmentsid != null){
            this.router.navigate(['/Mutualfundsp']);
          }
          else {
            // this.router.navigate(['/customerdashboard']);
            this.router.navigate(['/ProductsPage']);
          }
        }
        else if (data.roleId == "2") {
          this.router.navigate(['/spdashboard']);

        }
        else if (data.roleId == "3") {
          this.router.navigate(['/tmdashboard']);
        }
        else if (data.roleId == "4") {
          this.router.navigate(['/tmdashboard']);
        }
        else if (data.roleId == "5") {
          this.router.navigate(['/empdashboard']);
        }
        else if(data.roleId == "1008"){
          this.router.navigate(['/badashboard']);
        }
        else if (data.roleId == "1005" || data.roleId == "1006" || data.roleId == "1007") {
          this.router.navigate(['/inbox']);
        }
        else{
          this.router.navigate(['/home']);
        }
        
      },
        (err: HttpErrorResponse) => {
          this.spinner.hide();
          this.isLoginError = true;
          this.GetRemainingLoginAttempts();
        });
    }
  }

  GetRemainingLoginAttempts() {
    const mdata: UEMail = {
      Email: this.email,
    }
    this.loginService.getRemainingAttempts(mdata).subscribe((data: any) => {

      if (data != null || data != undefined) {
        this.spinner.hide();
        this.NoofAttempts = data.remainingAttempts;
        if (this.NoofAttempts > 0) {
          alert("You only have " + this.NoofAttempts + " attempt(s) left");
        }
        else {
          alert("You Account has blocked..!");
        }
      }
    });
  }


  getmenu(rid){
    if(rid!=null) 
         {
          this.loginService.getmenubasedonreole(rid).subscribe((menudata: any) =>{
            this.mastermenus = menudata;
            localStorage.setItem('generatemastermenu',JSON.stringify(menudata));      
           });   
         }      
    }


  SaveAuditData() {
    const data: Auditdata = {
      uid: localStorage.getItem("userId"),
      ipaddress: this.IPAddress,
      dnsip: this.dnsIP,
      browser: this.getBrowserName(),
      transaction: "Signed In"

    }
    this.loginService.saveAuditData(data).subscribe(data => {
      // if (data != null) {
      //   this.router.navigate(['/']);
      // }
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

  RemoveCookies() {
    setTimeout(() => {
      this.cookie.delete("useremail");
      this.cookie.delete("password");
    }, 8.64e+7);
  }
  // 6.048e+8
  GetCookies() {
    this.email = this.cookie.get("useremail");
    this.password = this.cookie.get("password");
  }

  getthePercent(per) {
    return 10;
  }
  
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
  Logout() {
    this.messageService.sendMessage('false');
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
    localStorage.clear();
  }
}

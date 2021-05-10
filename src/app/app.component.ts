import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './MessageService/meaagse.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { UserLogin } from './ViewModels/UserLogin';
import { LoginService } from './LoginService/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileview: boolean;
  usersession: any;
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  isLoggedIn: boolean=false;
  uid: string;
  message: any;
  subscription: Subscription;
  session: Subscription;
  constructor(private loginService: LoginService,private router: Router, private messageService: MessageService,) {
    if (localStorage.getItem("IsLoggedIn") == "true") {

      this.message = true;
      this.isLoggedIn = true;

    }
    else(localStorage.getItem("IsLoggedIn") == "false")
    {
      this.message = false;
      this.isLoggedIn = false;
    }
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      if (this.message.text == "true") {
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;

      }
    });

    this.session = this.messageService.getSession().subscribe(usersession => {
      this.usersession = usersession;
      if (this.usersession.text == "true") {
        this.checkSession();
      }
    });
    this.isMobileMenu();

  }

  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        if(window.location.href.includes('www.'))
        window.location.href = location.href.replace('http://www.', 'https://');
        else
        window.location.href = location.href.replace('http', 'https');
      }
    }
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
    this.message = false;
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    localStorage.clear();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
       this.mobileview = false;
    }
    else {
      this.mobileview= true;
    }
  };
}

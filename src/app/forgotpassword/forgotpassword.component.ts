import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidation } from '../ViewModels/EmailValidation';
import { SignupService } from '../Shared/Signup/signup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  width1 = 0;
  width2 = 0;
  width3 = 0;
  email = "";
  password = "";
  senduserid: any;
  isLoginError: boolean;
  rememberme = false;
  serchfind: boolean;
  ismailed: boolean;
  useremail: any;
  notify: string;
  dismissalert: boolean = false;
  @ViewChild('openpopup') openpopup;
  showmessage: string;
  idenable: string = "0";

  constructor(private messageService: MessageService, private router: Router, private signupService: SignupService, private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
    this.messageService.sendSession('true');

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
    var side = document.getElementById("sidebardisp");
    if (side != null) {
      side.style.visibility = "hidden";
    }
    var sidebardisp = document.getElementById("footerprivacy");
    if (sidebardisp) {
      sidebardisp.style.visibility = "visible";
    }
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
  }
  ngOnInit() {

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


  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  phoneregexp = new RegExp(/^[6-9]\d{9}$/);

  forgot(value) {
    var forgotnotify = document.getElementById("notification");

    this.serchfind = this.regexp.test(value);
    if (value.includes('@')) {
      if (!this.serchfind) {
        this.idenable = "1";
        this.showmessage = "Please Enter valid Email"
        this.openpopup.nativeElement.click();
      }
      else {
        if (forgotnotify) {
        }
        const emaill: EmailValidation = {
          Email: value
        }
        this.spinner.show();
        this.signupService.sendMail(emaill).subscribe(
          (data: any) => {
            this.spinner.hide();
            if (data == "0") {
              this.idenable = "1";
              this.showmessage = "Email is not registered!!"
              this.openpopup.nativeElement.click();
            }
            else {
              this.idenable = "2";
              this.showmessage = "Check Your mail for further Instruction"
              this.openpopup.nativeElement.click();
            }

          });
      }
    }
    else {
      this.serchfind = this.phoneregexp.test(value);
      if (!this.serchfind) {
        this.idenable = "1";
        this.showmessage = "Please Enter valid Mobile Number"
        this.openpopup.nativeElement.click();
      }
      else {
        if (forgotnotify) {
        }
        const emaill: EmailValidation = {
          Email: value
        }
        this.spinner.show();
        this.signupService.sendMail(emaill).subscribe(
          (data: any) => {
            this.spinner.hide();
            if (data == "0") {
              this.idenable = "1";
              this.showmessage = "Mobile Nuber is not registered!!"
              this.openpopup.nativeElement.click();
            }
            else {
              this.idenable = "2";
              this.showmessage = "Check Your Mobile Number"
              this.openpopup.nativeElement.click();
              //this.router.navigate(['/setpassword/'+value]);
            }
          });
      }
    }
  }
  Routetohome() {
    this.router.navigate(['/home'])

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FilerequestService } from 'src/app/Shared/FileRequest/filerequest.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import * as $ from 'jquery';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { LoginService } from 'src/app/LoginService/login.service';
import { SendEncode } from 'src/app/ViewModels/SendEncode';

var authorizationData;
@Component({
  selector: 'app-logintouploadfiles',
  templateUrl: './logintouploadfiles.component.html',
  styleUrls: ['./logintouploadfiles.component.scss']
})
export class LogintouploadfilesComponent implements OnInit {

  socialusers: any;
  response: any;
  userdetails: any;
  uid: string;
  docdata: any;
  folid: any;
  email: any;
  password: any;
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  result: any;
  mobileview: boolean;
  constructor(private route: ActivatedRoute, private filerequestservice: FilerequestService, private http: HttpClient, private userService: UserDetailsService, private messageService: MessageService, private router: Router, private loginService: LoginService,
    private spinner: NgxSpinnerService) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    var adata = localStorage.getItem('authdata');
    authorizationData = JSON.parse(adata);
    window.scrollTo(0, 0);
    this.isMobileMenu();
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.userdetails = params["id"];
      }
    })


  }
  role: any;
  isLoginError: any;
  ngOnInit() {

  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      this.mobileview = false;
    }
    else {
      this.mobileview = true;
    }
  };
  OnSubmit() {
    localStorage.setItem('loadingpage', "true");

    this.email = this.loginForm.controls["email"].value;
    this.password = this.loginForm.controls["password"].value;
    this.spinner.show();
    if (this.email == null || this.email == "") {
      alert("Please enter Your Email");
    }
    else if (this.password == null || this.password == "") {
      alert("Please enter Your Password");
    }
    else {
      this.loginService.userAuthentication(this.email, this.password).subscribe((data: any) => {
        this.result = data;
        localStorage.setItem('IsLoggedIn', "true");
        localStorage.setItem('userToken', data.access_token);
        localStorage.setItem('authorizationData', data);
        localStorage.setItem('Token_type', data.token_type);
        localStorage.setItem("UserFullName", data.fullName);
        localStorage.setItem("role", data.roleName);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("MailId", data.mailId);
        //   localStorage.setItem('authdata', JSON.stringify(movies));
        this.spinner.hide();

        // send message to subscribers via observable subject
        this.messageService.sendMessage('true');
        this.messageService.sendName(data.userName);

        const inputt: SendEncode = {
          Data: this.userdetails,
          Email: this.email
        }
        this.filerequestservice.getextratSeqlink(inputt).subscribe((response: any) => {
          this.docdata = response;
          var role = localStorage.getItem("role");
          var loggedin = localStorage.getItem("IsLoggedIn");
          var user = localStorage.getItem("userId");

          this.folid = this.docdata.folderId;
          if (this.docdata.linkType == "FR" && loggedin == "true" && user == this.docdata.toUser) {
            var landingUrl = "http://" + window.location.host + "#/uploadfileforrequest/" + this.userdetails;
            window.location.href = landingUrl;
          }
          else if (this.docdata.linkType == "RR" && loggedin == "true" && this.folid != "0" && user == this.docdata.toUser) {

            var landingUrl = "http://" + window.location.host + "#/allsubfolders/" + this.folid;
            window.location.href = landingUrl;
          }
          else if (this.docdata.linkType == "RR" && loggedin == "true" && this.folid == "0" && user == this.docdata.toUser) {

            var landingUrl = "http://" + window.location.host + "#/allfolders/";
            window.location.href = landingUrl;
          }


        });

      },
        (err: HttpErrorResponse) => {
          this.spinner.hide();
          this.isLoginError = true;
        }

      )
    }
  }


  getLinks() {
    var useremail = localStorage.getItem("MailId");
    // localStorage.setItem("ViewFrom", "Email");
    const inputt: SendEncode = {
      Data: this.userdetails,
      Email: useremail
    }
    this.filerequestservice.getextratSeqlink(inputt).subscribe((response: any) => {
      this.docdata = response;
      var role = localStorage.getItem("role");
      var loggedin = localStorage.getItem("IsLoggedIn");
      var user = localStorage.getItem("userId");

      if (this.docdata.linkType == "FR" && loggedin == "true" && user == this.docdata.toUser) {
        var landingUrl = "http://" + window.location.host + "#/uploadfileforrequest/" + this.userdetails;
        window.location.href = landingUrl;
      }

    });
  }

}

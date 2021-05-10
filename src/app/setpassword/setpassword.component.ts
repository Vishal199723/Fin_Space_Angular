import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../Shared/Signup/signup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { ChangePassword } from '../ViewModels/ChangePassword';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  email: any;
  password: any;
  confirmpassword: any;
  notify: string;
  public dismissalert = false;

  signupForm = new FormGroup({
    password: new FormControl(),
    confirmpassword: new FormControl(),

  });
  submitted: boolean;
  width1 = 0;
  width2 = 0;
  width3 = 0;
  DateTime: Date;
  oldpassword: any;
  idenable: string = "0"
  showmessage: string;
  @ViewChild('openpopup') openpopup;

  get f() { return this.signupForm.controls; }
  constructor(private messageService: MessageService,private router: ActivatedRoute, private signUpService: SignupService, private route: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService, private datepipe: DatePipe) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    this.router.params.subscribe(params => {
      if (params["id"]) {
        this.email = (params["id"]);
      }
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
  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      password: "",
      confirmpassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
    });
  }
  updatepassword(value) {
    this.password = value;
    var user = {
      Email: this.email,
      Password: value
    }
    this.spinner.show();
    this.signUpService.checkoldpassword(user).subscribe((data: any) => {
      this.oldpassword = data
      if (this.oldpassword == true) {
        this.idenable = "1"
        this.showmessage = "Your new Password is same as old one, Please Re-enter  Password"
        this.password = "";
        this.openpopup.nativeElement.click();

      }
      this.spinner.hide();

    })
  }
  updateconfirm(value) {
    this.confirmpassword = value;
  }
  setpassword() {
    this.DateTime = new Date();
    let latest_date = this.datepipe.transform(this.DateTime, 'dd-MM-yyyy hh:mm:ss a');

    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    if (this.password != this.confirmpassword) {
      this.idenable = "1"
      this.showmessage = "Passwords do not match"
      this.openpopup.nativeElement.click();

    }

    else {
      const inputRequest: ChangePassword = {
        Email: this.email,
        Password: this.password,
        ConfirmPassword: this.confirmpassword,
        CreatedOn: latest_date
      }
      this.spinner.show();
      this.signUpService.postchangePassword(inputRequest).subscribe(
        (data: any) => {
          if (data == "ok") {
            this.spinner.hide();
            this.idenable = "2"
            this.showmessage = "Your Password Successfully Changed"
            this.openpopup.nativeElement.click();

          } else {
            this.spinner.hide();
            this.showmessage = "Something Went Wrong. Try again.!!"
            this.openpopup.nativeElement.click();

          }
        });

    }
  }
  Routetosignin() {
    this.route.navigate(['/signin']);

  }
}

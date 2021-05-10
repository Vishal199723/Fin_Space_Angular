import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import { ServiceTypeService } from '../Shared/ServiceTypeMaster/service-type.service';
import { SignupService } from '../Shared/Signup/signup.service';

@Component({
  selector: 'app-business-associate-bank-details',
  templateUrl: './business-associate-bank-details.component.html',
  styleUrls: ['./business-associate-bank-details.component.css']
})
export class BusinessAssociateBankDetailsComponent implements OnInit {
  submitted = false;
  bankname: any;
  bankbranch: any;
  ifsccode: any;
  accountname: any;
  accountnumber: any;
  coinaccountnumber: any;
  accounttype: any;
  notify: string;
  dismissalert: boolean;
  BABankDetails = new FormGroup({
    bankname: new FormControl(),
    bankbranch: new FormControl(),
    ifsccode: new FormControl(),
    accountname: new FormControl(),
    accountnumber: new FormControl(),
    coinaccountnumber: new FormControl(),
    accounttype: new FormControl(),
  });
  bankaccounttype: any;
  uid: string;
  bankretails: any;
  get f() { return this.BABankDetails.controls; }
  constructor(private messageService: MessageService,private formBuilder: FormBuilder, private http: HttpClient, private signupservice: SignupService, private spinner: NgxSpinnerService,
    private Servicetypeservice: ServiceTypeService, private httpService: HttpClient, private router: Router, private businessloanservice: BusinessLoanServiceService) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
    }
    this.BABankDetails = formBuilder.group({
      bankname: ['', Validators.required],
      bankbranch: ['', Validators.required],
      ifsccode: ['', Validators.required, Validators.pattern(/^[A-Za-z]{4}[0-9]{6,7}$/)],
      accountname: ['', Validators.required],
      accountnumber: ['', Validators.required],
      coinaccountnumber: ['', Validators.required],
      accounttype: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.getBankdetails();
  }

  ifscrex = new RegExp(/^[A-Za-z]{4}[0-9]{6,7}$/);
  getBankdetails() {
    this.spinner.show()
    this.businessloanservice.getBAbankdetails(this.uid).subscribe((response: any) => {
      if (response != "fail") {
        this.bankretails = response;
        this.bankname = this.bankretails.bankName;
        this.bankbranch = this.bankretails.bankbranch;
        this.ifsccode = this.bankretails.ifsCcode;
        this.accountname = this.bankretails.nameofaccount;
        this.accountnumber = this.bankretails.accountNuber;
        this.coinaccountnumber = this.bankretails.accountNuber;
        this.bankaccounttype = this.bankretails.accountType;


      }
      this.spinner.hide()

    });
  }

  onselectbankaccounttype(id) {
    this.bankaccounttype = id;
  }
  SaveBABankDetails() {
    this.submitted = true;
    if (this.BABankDetails.invalid) {
      return;
    }
    else {
      var bb = this.BABankDetails.controls["ifsccode"].value;
      var ifscvalid = this.ifscrex.test(bb);
      if (this.BABankDetails.controls["accountnumber"].value != this.BABankDetails.controls["coinaccountnumber"].value) {
        alert("Account Number is not Matching")
      }
      else if (!ifscvalid) {
        alert("Enter Valid IFSC code")
      }
      else if (this.bankaccounttype == null || this.bankaccounttype == undefined) {
        alert("Select Account Type")
      }
      else {
        var data = {
          UserId: this.uid,
          BankName: this.BABankDetails.controls["bankname"].value,
          Bankbranch: this.BABankDetails.controls["bankbranch"].value,
          AccountType: this.bankaccounttype,
          Nameofaccount: this.BABankDetails.controls["accountname"].value,
          IFSCcode: this.BABankDetails.controls["ifsccode"].value,
          AccountNuber: this.BABankDetails.controls["accountnumber"].value,
        }
        const frmData = new FormData();
        this.spinner.show();

        frmData.append("RegData", JSON.stringify(data));

        this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/EnterPriseRegistration/PostUpdateBusinessAssociateBankDetails/', frmData).subscribe(
          data => {
            if (data == "success") {
              this.notify = "Business Associate Bank details saved Successfully!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.spinner.hide();
              this.router.navigate(["/badashboard"])
            } else {
              this.notify = "Something Went Wrong. Try again.!!"
              setTimeout(() => this.dismissalert = true, 100);
              setTimeout(function () {
                this.dismissalert = false;
              }.bind(this), 3000);
              this.spinner.hide();
            }
          });
      }
    }
  }
}

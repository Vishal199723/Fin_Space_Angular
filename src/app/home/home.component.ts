import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../Shared/UserMaster/user.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { ServiceProviderService } from '../Shared/ServiceProvider/service-provider.service';
import { MessageService } from '../MessageService/meaagse.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  insurancelist: any;
  loanlist: any;
  name: any;
  email: any;
  subject: any;
  message: any;
  inestments: any;
  lastname: any;
  loder: number;
  
  constructor(private messageService: MessageService,private router: Router, private spinner: NgxSpinnerService, private userservice: UserDetailsService,
    private serviceprovservice: ServiceProviderService) {
      if (localStorage.getItem("IsLoggedIn") == "true") {
        this.message = true;
        this.isLoggedIn = true;
      }
      
  
    var nav = document.getElementById("navv");
    if (nav != null) {
      nav.style.visibility = "show";
    }
  }

  ngOnInit() {
    this.GetallInsuranceList();
    this.GetallLoanList();
    this.GetallInvestmentsList();

    document.addEventListener(
      'DOMContentLoaded',
      function () {
        setTimeout(function () {
          document.getElementById('hero-image').className = 'shrink';
        }, 100);
      },
      false
    );
    var aa =localStorage.getItem("Loder")
    if(aa == "0"){
      this.GetReload();
    }
  }
  GetReload(){
    localStorage.setItem("Loder", "1");
    window.location.reload();
  }

  Logout() {
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
    localStorage.clear();
  }

  openproduct() {
    this.router.navigate(['/loanproducts']);
  }



  SendRequest(id) {

    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedinsurancetype', id);
      this.router.navigate(['/insurancesp']);
    }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   localStorage.setItem('selectedinsurancetype', id);
    //   this.router.navigate(['/insurancesp']);
    // }

    //OLD CODE
    // if (localStorage.getItem('IsLoggedIn') != "true") {
    //   localStorage.setItem('selectedinsurancetype', id);
    //   this.router.navigate(['/signin']);
    // }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   localStorage.setItem('selectedinsurancetype', id);
    //   this.router.navigate(['/insurancesp']);
    // }
  }


  SendLoanRequest(id){
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedloantype', id);
      this.router.navigate(['/loansp']);
    }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   localStorage.setItem('selectedloantype', id);
    //   this.router.navigate(['/loansp']);
    // }

    //OLD CODE
    // if (localStorage.getItem('IsLoggedIn') != "true") {
    //   localStorage.setItem('selectedloantype', id);
    //   this.router.navigate(['/signin']);
    // }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   localStorage.setItem('selectedloantype', id);
    //   this.router.navigate(['/loansp']);
    // }
  }


  SendfundRequest(id) {
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedmutualfundtype', id);
      this.router.navigate(['/Mutualfundsp']);
    }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   this.router.navigate(['/Mutualfundsp']);
    // }

    //OLD CODE
    // if (localStorage.getItem('IsLoggedIn') != "true") {
    //  // localStorage.setItem('selectedmutualfundtype', id);
    //   this.router.navigate(['/signin']);
    // }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   this.router.navigate(['/Mutualfundsp']);
    // }
  }


  SendInvestmentsRequest(id){
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedinvestmenttype', id);
      this.router.navigate(['/investmentssp']);
    }

    // if (localStorage.getItem('IsLoggedIn') == "true") {
    //   localStorage.setItem('selectedinvestmenttype', id);
    //   this.router.navigate(['/investmentssp']);
    // }
  }
  
  GetallInsuranceList() {
    this.spinner.show()
    this.userservice.getinsurancelist().subscribe((data: any) => {
      this.insurancelist = data;
      this.spinner.hide()
    })
  }

  GetallLoanList() {
    this.spinner.show()
    this.userservice.getloantypelist().subscribe((data: any) => {
      this.loanlist = data;
      this.spinner.hide()
    })
  }

  GetallInvestmentsList() {
    this.spinner.show()
    this.userservice.getinvestmentslist().subscribe((data: any) => {
      this.inestments = data;
      this.spinner.hide()
    })
  }
  
  OpenSPlist(id) {
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedloantype', id);
      this.router.navigate(['/signin']);
    }

    if (localStorage.getItem('IsLoggedIn') == "true") {
      localStorage.setItem('selectedloantype', id);
      this.router.navigate(['/loansp']);
    }
  }

  sendenquiry(form:NgForm){
    if(this.name==null  || this.name==""){
      alert("Please Enter FirstName")
    }
    else if(this.email==null  || this.email==""){
      alert("Please Enter Email")
    }
    else if(this.subject==null  || this.subject==""){
      alert("Please Enter Subject")
    }
    else if(this.message==null  || this.message==""){
      alert("Please Enter Message")
    }
    else{ 
    var aa = {
      Name:this.name,
      LastName:this.lastname,
      Email:this.email,
      Subject:this.subject,
      Message:this.message
    }
    this.spinner.show();
    this.userservice.postsaveenquiryform(aa).subscribe((data: any) => {
      this.spinner.hide();
      if(data == "0"){
        alert("Sent Succesfully");
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
      }
      else{
        alert("Something went wrong.");
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
      }
    })
  }
}

  facebook(){
    window.open("https://www.facebook.com/");
  }
  twitter(){
    window.open("https://twitter.com");
  }
  instagram(){
    window.open("https://www.instagram.com/");
  }  
  skype(){
    window.open("https://www.skype.com/");
  }
  linkedin(){
    window.open("https://in.linkedin.com/");
  }

}

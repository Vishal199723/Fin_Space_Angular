import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  loanlist: any;
  uid: string;
  roleid: string;

  constructor(private messageService: MessageService,private router: Router, private spinner: NgxSpinnerService,private userservice: UserDetailsService,) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
    }
   }

  ngOnInit() {
    this.GetallLoanList();
  }
  GetallLoanList() {
    //this.spinner.show()
    this.userservice.getloantypelist().subscribe((data: any) => {
      this.loanlist = data;
      console.log(this.loanlist);
     // this.spinner.hide()
    })
  }
  
  OpenSPlist(id){
    if (localStorage.getItem('IsLoggedIn') != "true") {
      localStorage.setItem('selectedloantype',id);
      this.router.navigate(['/signin']);
    }

    if (localStorage.getItem('IsLoggedIn') == "true") {
      localStorage.setItem('selectedloantype',id);
      this.router.navigate(['/loansp']);
    }
  }


}

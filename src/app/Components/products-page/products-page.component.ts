import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ServiceProviderService } from 'src/app/Shared/ServiceProvider/service-provider.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  insurancelist: any;
  loanlist: any;
  inestments: any;

  constructor(private messageService: MessageService,private router: Router, private spinner: NgxSpinnerService, private userservice: UserDetailsService,
    private serviceprovservice: ServiceProviderService) { }

  ngOnInit() {
    this.GetallInsuranceList();
    this.GetallLoanList();
    this.GetallInvestmentsList();

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

  SendRequest(id,type) {      
    if (localStorage.getItem('IsLoggedIn') == "true") {
      localStorage.setItem('selectedinsurancetype', id);
      localStorage.setItem('selectedinsuranceProducttype', type);
      this.router.navigate(['/throughFlow']);
    }
    else{
      this.router.navigate(['/signin']);
    }
  }
  
  // SendRequest(id,type) {      
  //   localStorage.setItem('selectedinsurancetype', id);
  //   localStorage.setItem('selectedinsuranceProducttype', type);
  //     this.router.navigate(['/throughFlow']);
  // }

  GetallInvestmentsList() {
    this.spinner.show()
    this.userservice.getinvestmentslist().subscribe((data: any) => {
      this.inestments = data;
      this.spinner.hide()
    })
  }
}

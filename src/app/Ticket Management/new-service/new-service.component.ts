import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { CustomerDashboardService } from 'src/app/Shared/CustomerDashboard/customer-dashboard.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {

  closeResult: string;
  LoanTypeList: any;
  data="aa";
  onSelectedLoanId: any;
  
  constructor(private messageService: MessageService,protected cdashboardservice:CustomerDashboardService,private spinner:NgxSpinnerService,
    private router:Router) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
   }

  ngOnInit() {
  }
  GetLoanProviders(){
    this.router.navigate(['/providers/' + 4])
  }
 GetInsuranceProviders(){
  this.router.navigate(['/providers/' + 5])
 }
 GetMutualFundProviders(){
  this.router.navigate(['/providers/' + 6])
 }
}

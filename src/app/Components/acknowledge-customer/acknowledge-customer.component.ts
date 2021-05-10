import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledge-customer',
  templateUrl: './acknowledge-customer.component.html',
  styleUrls: ['./acknowledge-customer.component.css']
})
export class AcknowledgeCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  GotoCdashboard(){
    this.router.navigate(['/customerdashboard']);

  }
}

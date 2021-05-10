import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  width3: number;
  width2: number;
  width1: number;
  email:any;
  signupForm = new FormGroup({
    email:new FormControl,
    firstname:new FormControl,
    lastname:new FormControl
  })

  
  constructor(private messageService: MessageService,) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
   }

  ngOnInit() {
  }
  onResize(event) {
    document.getElementById("signin").style.height= window.innerHeight + "px";

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

}

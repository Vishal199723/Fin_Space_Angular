import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-chat-image',
  templateUrl: './chat-image.component.html',
  styleUrls: ['./chat-image.component.css']
})
export class ChatImageComponent implements OnInit {
  message: any;
  isLoggedIn: boolean=false;
  subscription:Subscription
  constructor(private router: Router,private messageService:MessageService) {
    this.messageService.sendSession('true');

    if (localStorage.getItem("IsLoggedIn") == "true") {
      this.message = true;
      this.isLoggedIn = true;

    }
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      // if (this.message.text == "true") {
      //   this.isLoggedIn = true;
      // }
    });
  }

  ngOnInit() {
  }
  gotochat() {
    if(this.isLoggedIn==true){
      this.router.navigate(['/chat'])
    }
    else{
      this.router.navigate(['/signin'])
    }
  }
}

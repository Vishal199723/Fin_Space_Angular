import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private messageService: MessageService,) {
    this.messageService.sendSession('true');

    window.scrollTo({top:0,behavior:"smooth"});

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  constructor(private messageService: MessageService,) {
    this.messageService.sendSession('true');

    window.scrollTo({top:0,behavior:"smooth"});

   }

  ngOnInit() {
  }

}

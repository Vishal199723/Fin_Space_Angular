import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-businesspartner',
  templateUrl: './businesspartner.component.html',
  styleUrls: ['./businesspartner.component.css']
})
export class BusinesspartnerComponent implements OnInit {

  constructor(private messageService: MessageService,) {
    this.messageService.sendSession('true');

    window.scrollTo({top:0,behavior:"smooth"});

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-tou',
  templateUrl: './tou.component.html',
  styleUrls: ['./tou.component.css']
})
export class TouComponent implements OnInit {

  constructor(private messageService: MessageService,) { 
    this.messageService.sendSession('true');

    window.scrollTo({top:0,behavior:"smooth"});

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-new-sri-meeting',
  templateUrl: './new-sri-meeting.component.html',
  styleUrls: ['./new-sri-meeting.component.css']
})
export class NewSriMeetingComponent implements OnInit {

  constructor(private messageService: MessageService,) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
   }

  ngOnInit() {
  }

}

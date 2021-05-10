import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  converttostringdate: any;

  constructor(private datepipe:DatePipe,private messageService: MessageService,) {
    this.messageService.sendSession('true');

    var date = new Date
      this.converttostringdate = this.datepipe.transform(date, 'yyyy');
  
     }

  ngOnInit() {
  }

}

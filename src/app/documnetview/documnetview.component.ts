import { Component, OnInit } from '@angular/core';
import { MailService } from '../Shared/Mail/mail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-documnetview',
  templateUrl: './documnetview.component.html',
  styleUrls: ['./documnetview.component.css']
})
export class DocumnetviewComponent implements OnInit {
  file: any;
  gotfile: any;
  Document: any;

  constructor(private messageService: MessageService,private mailservice: MailService, private spinner: NgxSpinnerService,) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.file = localStorage.getItem("ViewPdffile");
    this.GetDocumnet();

  }
  GetDocumnet() {
    this.spinner.show();
    var details = {
      CurrentFile: this.file,
    };
    this.mailservice.getdocumnetforview(details).subscribe((respose: any) => {
      this.spinner.hide();
      this.Document = respose;
      if (this.Document != null) {
        this.gotfile = this.Document
      }
    });
  }

}

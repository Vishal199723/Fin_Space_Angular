import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-readmail',
  templateUrl: './readmail.component.html',
  styleUrls: ['./readmail.component.css']
})
export class ReadmailComponent implements OnInit {
  SendRequestForm = new FormGroup({
    fullName: new FormControl(),
    contactnumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    info: new FormControl(),
    date: new FormControl(),
    servicetime: new FormControl(),
  });
  constructor(private messageService: MessageService,private formBuilder: FormBuilder) {
    this.messageService.sendSession('true');

    localStorage.setItem("Loder", "0");
    this.SendRequestForm = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      info: ['', Validators.required],
      date: ['', Validators.required],
      servicetime: ['', Validators.required],
      contactnumber: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999), Validators.pattern(/^[6-9]\d{9}$/)]],

    })
   }

  ngOnInit() {
  }

}

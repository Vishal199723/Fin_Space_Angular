import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusinessLoanServiceService } from '../Shared/BusinessLoan/business-loan-service.service';
import {Location} from '@angular/common';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  pagenum: number;
  gotfile: string;
  uid: string;
  File: string;
  DocumentName: string;
  BlockId: string;
  roleid: string;
  PdfFile: string;
  pagecount: number;

  constructor(private messageService: MessageService,private router: Router, private spinner: NgxSpinnerService,private busiinessservice:BusinessLoanServiceService,
    private _location: Location) {
      this.messageService.sendSession('true');

    this.uid = localStorage.getItem("userId");
    this.File = localStorage.getItem("File");
    this.DocumentName = localStorage.getItem("FileName");
    this.BlockId = localStorage.getItem("BlockId");
    this.roleid = localStorage.getItem("role");

    this.PdfFile = localStorage.getItem("Pdffile");
    if (this.PdfFile == "undefined") {
      this.PdfFile = "null"
    }
    this.gotopdfView();

  }

  ngOnInit() {
  }
  curpagenum() {
    var pg = document.getElementsByClassName("page");
    var sc = window.pageYOffset;
    for (var i = 0; i < pg.length; i++) {
      var pgc = pg[i].getBoundingClientRect();
      if (sc > pgc.top && sc < pgc.bottom) {
        this.pagenum = i + 1;
        break;
      }
    }
  }
  gotopdfView() {
    this.gotfile = "";
    var FileviewVM = {
      File: this.File,
      FileName: this.DocumentName,
      BlockId: this.BlockId,
      AliasUserId: this.uid,
      Pdffile: this.PdfFile,
    }
    this.spinner.show();
    this.busiinessservice.getdocforpdfview(FileviewVM).subscribe((data: any) => {
      if (data != null) {
        var dt = data.pdfFileName.split(',');
        this.gotfile = dt[1];
        localStorage.setItem('ViewPdffile', data.pdfFileName);
        localStorage.setItem('Filename', data.file);
        localStorage.setItem('originafile', data.fileName);
        localStorage.setItem('blockid', data.blockId);
        this.spinner.hide();
        setTimeout(() => {
          var pg = document.getElementsByClassName("page");
          this.pagecount = pg.length;
          window.addEventListener('scroll', this.curpagenum.bind(this));
          // document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
        }, 1000);
      }

      else {
        this.spinner.hide();
        this._location.back();


      }
    });
  }
  goBack() {
    this._location.back();
  }


}

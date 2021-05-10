import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { CustomerDashboardService } from 'src/app/Shared/CustomerDashboard/customer-dashboard.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  value: any;
  TrackDetails: any;

  constructor(private messageService: MessageService,private route:ActivatedRoute,private spinner:NgxSpinnerService,private customerdashboardservice:CustomerDashboardService) { 
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.route.params.subscribe(params=>{
      if(params["id"]){
        this.value=(params["id"]);
        this.GetTrackDetails(this.value);
      }
    })
  }

  ngOnInit() {
  }
  GetTrackDetails(id){
    this.spinner.show();
    this.customerdashboardservice.GetTrackDetails(id).subscribe((data:any)=>{
      this.TrackDetails=data;
      this.spinner.hide();

      if (this.TrackDetails == 1) {
        document.getElementById('step1').className = 'step completed'
        document.getElementById('step2').className = 'step completed'
        document.getElementById('step3').className = 'step'
        document.getElementById('step4').className = 'step'
        document.getElementById('step5').className = 'step'
      }
     else if (this.TrackDetails == 2) {
        document.getElementById('step1').className = 'step completed'
        document.getElementById('step2').className = 'step completed'
        document.getElementById('step3').className = 'step completed'
        document.getElementById('step4').className = 'step'
        document.getElementById('step5').className = 'step'
      }
      else if (this.TrackDetails == 3) {
        document.getElementById('step1').className = 'step completed'
        document.getElementById('step2').className = 'step completed'
        document.getElementById('step3').className = 'step completed'
        document.getElementById('step4').className = 'step completed'
        document.getElementById('step5').className = 'step'
      }
      else if (this.TrackDetails == 4) {
        document.getElementById('step1').className = 'step completed'
        document.getElementById('step2').className = 'step completed'
        document.getElementById('step3').className = 'step completed'
        document.getElementById('step4').className = 'step completed'
        document.getElementById('step5').className = 'step completed'
      }
    })
  }
}

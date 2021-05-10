import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceTypeService } from 'src/app/Shared/ServiceTypeMaster/service-type.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/MessageService/meaagse.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  p: number = 1;
  AceptedRequestList: any = []
  uid: string;
  roleid: string;
  SearchAcceptedServices: any
  fromdate: any
  todate: any
  accepteddate: any;
  SDate: any;
  EDate: any;
  AceptedRequestListCopy: any = [];

  ShowPendingApplications1: boolean;
  ShowPendingApplications: boolean;


  constructor(private messageService: MessageService, private spinner: NgxSpinnerService, private ServiceRequesttypeservice: ServiceTypeService,
    private route: Router) {
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
    }
  }

  ngOnInit() {
    this.ServiceRequestTypes();
    this.ShowPendingApplications = true;
  }

  ServiceRequestTypes() {
    this.spinner.show();
    this.ServiceRequesttypeservice.getacceptedrequestsforemp(this.uid).subscribe((Data: any) => {
      this.AceptedRequestList = Data;
      this.AceptedRequestListCopy = Data
      this.spinner.hide();
    })
  }

  Openloanform(det) {
    localStorage.setItem('TicketId', det.complaintId);
    if (det.requestType == 1) {
      this.route.navigate(['/homeloan']);
    }
    else if (det.requestType == 3) {
      this.route.navigate(['/vehecleloanform']);
    }
    else if (det.requestType == 5) {
      this.route.navigate(['/HealthInsurance']);
    }
    else if (det.requestType == 7) {
      this.route.navigate(['/lifeInsurance']);
    }
    else if (det.requestType == 13) {
      this.route.navigate(['/businessloanform']);
    }
    else if (det.requestType == 14) {
      this.route.navigate(['/suretyloanform']);
    }
    else if (det.requestType == 15) {
      this.route.navigate(['/smallscaleloanform']);
    }
    
    else if (det.requestType == 17) {
      this.route.navigate(['/Goldloan']);
    }
    else if (det.requestType == 16) {
      this.route.navigate(['/Educationloan']);
    }
    else if (det.requestType == 18) {
      this.route.navigate(['/Projectloan']);
    }
    else if(det.requestType == 20){
      this.route.navigate(['/fixedassetloan']);
    }
    else if (det.requestType == 23) {
      this.route.navigate(['/HomeInsurance']);
    }
    else if (det.requestType == 24) {
      this.route.navigate(['/MotorInsurance']);
    }
    else if (det.requestType == 25) {
      this.route.navigate(['/AccidentInsurance']);
    }
    else if (det.requestType == 26) {
      this.route.navigate(['/termlifeinsurance']);
    }
    // else if (det.requestType == 27) {
    //   this.route.navigate(['/fdform']);
    // }
    else if (det.requestType == 29) {
      this.route.navigate(['/Mutualfund']);
    }
    else if (det.requestType == 1030) {
      this.route.navigate(['/fdform']);
    }
  }
  
  // Openloanform(det) {
  //   localStorage.setItem('TicketId', det.complaintId);
  //   if (det.requestType == 1) {
  //     this.route.navigate(['/homeloan']);
  //   }
  //   else if (det.requestType == 3) {
  //     this.route.navigate(['/vehecleloanform']);
  //   }
  //   else if (det.requestType == 13) {
  //     this.route.navigate(['/businessloanform']);
  //   }
  //   else if (det.requestType == 14) {
  //     this.route.navigate(['/suretyloanform']);
  //   }
  //   else if (det.requestType == 15) {
  //     this.route.navigate(['/smallscaleloanform']);
  //   }
  //   else if(det.requestType == 20){
  //     this.route.navigate(['/fixedassetloan']);
  //   }
  //   else if (det.requestType == 17) {
  //     this.route.navigate(['/Goldloan']);
  //   }
  //   else if (det.requestType == 16) {
  //     this.route.navigate(['/Educationloan']);
  //   }
  //   else if (det.requestType == 18) {
  //     this.route.navigate(['/Projectloan']);
  //   }
  //   else if (det.requestType == 26) {
  //     this.route.navigate(['/termlifeinsurance']);
  //   }
  //   else if (det.requestType == 27) {
  //     this.route.navigate(['/fdform']);
  //   }
  // }
  updatestatus(det) {

  }
  onChangefromdate(event: any) {
    this.AceptedRequestList = []
    this.SDate = event
    if (this.EDate == null) {
      for (var i = 0; i < this.AceptedRequestListCopy.length; i++) {
        this.accepteddate = this.AceptedRequestListCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] >= this.SDate) {
          this.AceptedRequestList.push(this.AceptedRequestListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.AceptedRequestListCopy.length; i++) {
        this.accepteddate = this.AceptedRequestListCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.AceptedRequestList.push(this.AceptedRequestListCopy[i])
        }
      }
    }
  }
  onChangeTodate(event: any) {
    this.AceptedRequestList = []
    this.EDate = event
    if (this.SDate == null) {
      for (var i = 0; i < this.AceptedRequestListCopy.length; i++) {
        this.accepteddate = this.AceptedRequestListCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate) {
          this.AceptedRequestList.push(this.AceptedRequestListCopy[i])
        }
      }
    }
    else {
      for (var i = 0; i < this.AceptedRequestListCopy.length; i++) {
        this.accepteddate = this.AceptedRequestListCopy[i].lastUpdated;
        let res = this.accepteddate.split('T');
        if (res[0] <= this.EDate && res[0] >= this.SDate) {
          this.AceptedRequestList.push(this.AceptedRequestListCopy[i])
        }
      }
    }
  }
  cancel() {
    this.AceptedRequestList = this.AceptedRequestListCopy
    this.fromdate=null
    this.todate=null
    this.EDate=null
    this.SDate=null

  }
    
sortname = "1";

sortbyname() {
  if (this.sortname == "1") {
    this.AceptedRequestList.sort((a, b) => a.customerName.toLowerCase() < b.customerName.toLowerCase() ? -1 : a.customerName.toLowerCase() > b.customerName.toLowerCase() ? 1 : 0)
    this.sortname = "2";
  }
  else if (this.sortname == "2") {
    this.AceptedRequestList.sort((a, b) => a.customerName.toLowerCase() > b.customerName.toLowerCase() ? -1 : a.customerName.toLowerCase() < b.customerName.toLowerCase() ? 1 : 0)
    this.sortname = "1";

  }

}
sortserviceid = "1";
sortbyserviceid() {
  if (this.sortserviceid == "1") {
    this.AceptedRequestList.sort((a, b) => a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? 1 : 0)
    this.sortserviceid = "2";
  }
  else if (this.sortserviceid == "2") {
    this.AceptedRequestList.sort((a, b) => a.complaintId.toLowerCase() > b.complaintId.toLowerCase() ? -1 : a.complaintId.toLowerCase() < b.complaintId.toLowerCase() ? 1 : 0)
    this.sortserviceid = "1";

  }

}

printpendg(){
  this.ShowPendingApplications1 = true;
  this.ShowPendingApplications = false;
  document.getElementById("ShowPendingApplications").style.visibility = "hidden";

  document.getElementById("btndiv").style.visibility = "hidden";
  document.getElementById("chatimgdisplay").style.visibility = "hidden";

  setTimeout(() => {
    document.getElementById("printnew2").click();
  }, 100);
}

printnewwpending(){
  window.print();
  this.ShowPendingApplications1 = false;
  this.ShowPendingApplications = true;
  document.getElementById("btndiv").style.visibility = "visible";
  document.getElementById("chatimgdisplay").style.visibility = "visible";
  document.getElementById("ShowPendingApplications").style.visibility = "visible";
}
}


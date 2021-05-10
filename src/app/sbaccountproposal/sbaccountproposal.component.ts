import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';
import { Router } from '@angular/router';
import { MailService } from '../Shared/Mail/mail.service';
import { WorkflowtransService } from '../Shared/Workflow/workflowtrans.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../MessageService/meaagse.service';

@Component({
  selector: 'app-sbaccountproposal',
  templateUrl: './sbaccountproposal.component.html',
  styleUrls: ['./sbaccountproposal.component.css']
})
export class SbaccountproposalComponent implements OnInit {
  CustId: string;
  UserDataforSBProposal: any;
  data: string;
  uid: string;
  roleid: string;
  groupId: string;
  sbprodata: string;
  WFStatusList: any;
  operation: any;
  selectedstatusid: any;
  customerid: any;
  firstname: string;
  dob: any;
  nomineefullname: any;
  Mobile: any;
  emailid: any; branchname: any; Title: any;
  CounterSigned: any; guardian: any; address: any;
  pincode: any; pannumber: any; accntnumber: any;
  cardnumber: any; aadharnum: any;
  form60: any; education: any;
  form61: any; grossannualincome: any;
  relationwithminor: any; Profession: any;
  nomineegender: any; maritalstatus: any;
  gurdiandob: any; Religion: any;
  Category: any; subdistrictcode: any;
  fatherorhus: any; villagecode: any;
  statecode: any; accountdetails: any;
  villageorcity: any; riskcategorization: any;
  District: any; districtcode: any;
  State: any; wardnum: any;
  email: any; blockaccnt: any;
  mobile: any; thersoldlimit: any;
  relationShip: any; witnessone: any;
  printnameonpassbook: any; witnessname: any;
  nomineedateofbirth: any; witnessaddress: any;
  nomineeaddress: any; datee: any;
  nomineevillagecity: any; placee: any;
  nomineedistrict: any; witnessmobile: any;
  nomineestate: any; witnessonesign: any;
  nomineepincode: any; witnesstwo: any;
  fullname: any; witnesstwoname: any;
  addressofappointednominee: any; witnesstwoaddress: any;
  dobofappointednominee: any; witnesstwodate: any;
  signatureoftheapplicant: any; witnesstwoplace: any;
  witnesstwomobile: any; addressofdeclarantone: any;
  witnesstwosign: any; particularsofdeclarantone: any;
  supervisiorofcer: any; amountofofdeclarantone: any;
  fullnameofdeclarant: any; introducername: any;
  addressofdeclarant: any; knowapplicantfo: any;
  particularsoftransaction: any; introducercustomerid: any;
  amountoftransaction: any; introduceraccountnumber: any;
  fullnameofdeclarantone: any; introducerdate: any;
  introducersign: any; nameoffacilitator: any; numberoffacilitator: any;
  signoffacilitator: any; declarationdate: any; declarationplace: any; declarationsign: any;
  gender: any; introducersignverified: any; knowapplicantformonths: any;
  fullnameofappointednominee: any; boardresolution: any; doin: any; IncorporationTypeList: any;
  sbadata: string;
  result: any;
  showaccntnumber: boolean;
  sbcustomerid: string;
  mailid: any;
  transid: any;
  comments: any; accountnum: any;
  files: any;
  ReferenceFiles: string;
  constructor(private messageService: MessageService,private spinner: NgxSpinnerService, private userservice: UserDetailsService,
    private router: Router, private workflowtransactionservice: WorkflowtransService,
    private mailservice: MailService, private httpservice: HttpClient) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
    if (localStorage.getItem('IsLoggedIn') == "true") {
      this.uid = localStorage.getItem("userId");
      this.roleid = localStorage.getItem("role");
      this.sbcustomerid = localStorage.getItem("sbaccntcustomerid");
      this.groupId = localStorage.getItem("groupId");

      this.showaccntnumber = false;
      if (this.roleid == "1007") {
        this.showaccntnumber = true;
      }
    }
  }

  ngOnInit() {
    this.mailid = 0;
    this.transid = 0;
    this.operation = null;
    this.sbprodata = localStorage.getItem("sbaccountdata");
    this.CustId = this.sbcustomerid;

    this.sbadata = localStorage.getItem("sbaccount");
    if (this.sbadata != null) {
      var bb = this.sbadata.split('-');
      this.mailid = bb[2];
      this.transid = bb[1];
      this.CustId = bb[0];
    }
    this.sbcustomerid = this.CustId;
    this.data = this.CustId + "," + this.transid + "," + this.mailid;
    this.GetUserData();
    this.GetStatusList();
  }

  GetUserData() {
    this.spinner.show()
    this.userservice.getdataforsbaccount(this.data).subscribe((respose: any) => {
      this.spinner.hide();
      this.UserDataforSBProposal = respose;
      this.customerid = this.UserDataforSBProposal.customerId;
      this.firstname = this.UserDataforSBProposal.firstName + " " + this.UserDataforSBProposal.lastName;
      this.dob = this.UserDataforSBProposal.dob;
      this.gender = this.UserDataforSBProposal.genderName;
      this.nomineefullname = this.UserDataforSBProposal.familyDetails.allFamilyDetails.nomineeName
      console.log(this.UserDataforSBProposal);
      this.spinner.hide();
    });
  }

  GetStatusList() {
    this.spinner.show()
    this.mailservice.GetStatusList(this.roleid).subscribe((data: any) => {
      this.WFStatusList = data;
      this.spinner.hide()
    })
  }
  onselecttouser(id) {
    this.operation = id;
  }
  onSelectStatus(id) {
    this.selectedstatusid = id;
  }

  SendSBAVerificationtoApprover = function () {
    var mailtocustomer = {
      CustomerId: this.sbcustomerid,
      MailId: this.GetMailId(this.mailid),
      AccountNumber: this.accountnum,
      FromUser: this.uid,
      ToUser: this.GetGroupId(this.groupId),
      WorkflowState: this.selectedstatusid,
      Comments: this.comments,
      TransId: this.transid
    };
    this.spinner.show();
    const frmData = new FormData();
    frmData.append("CustomerData", JSON.stringify(mailtocustomer));
    
    frmData.append("RefernceFiles", this.ReferenceFiles);

    this.httpservice.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/WorkFlow/PostSBAWorkflowMail/', frmData).subscribe(
      data => {
        if (data != null) {
          this.spinner.hide();
          alert('Mail Sent Successfully');
          this.router.navigate(['/inbox']);
        }
        else {
          this.spinner.hide();
          alert("Something went wrong!!")
        }
      });


  }
  GetMailId(data) {
    var mailidd = 0;
    if (data !== undefined) {
      mailidd = data;
    }
    else {
      mailidd = 0;
    }
    return mailidd;
  }
  GetGroupId(grpid) {
    var groupid = "";
    if (grpid === "1003") {
      groupid = "1004";
    }
    else if (grpid === "1004") {
      groupid = "1005";
    }
    else if (grpid === "1005") {
      groupid = "1006";
    }
    else if (grpid === "1006") {
      groupid = "1007";
    }
    else if (grpid === "1007") {
      groupid = "1008";
    }
    else if (grpid === "1007") {
      groupid = "1008";
    }
    else if (grpid === "1008") {
      groupid = "1009";
    }
    else if (grpid === "1009") {
      groupid = "1010";
    }
    else if (grpid === "1010") {
      groupid = "1014";
    }
    else if (grpid === "1014") {
      groupid = "1015";
    }
    else if (grpid === "1015") {
      groupid = "1016";
    }
    else if (grpid === "1016") {
      groupid = "1017";
    }
    else if (grpid === "1017") {
      groupid = "1018";
    }
    else if (grpid === "1018") {
      groupid = "1019";
    }
    else if (grpid === "1019") {
      groupid = "1018";
    }
    else if (grpid === "1020") {
      groupid = "1021";
    }
    else if (grpid === "1021") {
      groupid = "1020";
    }
    else if (grpid === "1022") {
      groupid = "1023";
    }
    else if (grpid === "1023") {
      groupid = "1024";
    }
    else if (grpid === "1024") {
      groupid = "1024";
    }
    return groupid;
  }

  printform() {
    window.print();
  }
  onChange(event: any) {
    var fileslist = "";
    this.files = [].slice.call(event.target.files);
    console.log(this.files);
    fileslist = this.files[0];
    this.ReferenceFiles = fileslist;
  }
}

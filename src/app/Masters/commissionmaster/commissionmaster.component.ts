import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { CountryService } from 'src/app/Shared/country.service';

@Component({
  selector: 'app-commissionmaster',
  templateUrl: './commissionmaster.component.html',
  styleUrls: ['./commissionmaster.component.css']
})
export class CommissionmasterComponent implements OnInit {
  Commissions: any;
  p: number = 1
  public dismissalert = false;
  notify: string
  BusinessAssociates:any;
  ServiceProviders:any;
  showSave: boolean;
  showUpdate: boolean;
  percent:any;
  districtid:any;
  stateid:any;
  Cmsid: any;
  spid: any;
  baid: any;
  selectedbaid: any;
  selectedspid: any;
  rowid: any;
  products: any;
  subproducts: any;
  productid: any;
  subproductid: any;

  constructor(private countryService: CountryService, private spinner: NgxSpinnerService,private messageService: MessageService,) {
    this.messageService.sendSession('true');
   }

  ngOnInit() {
    this.GetCommissions();
    this.GetSPS();
    this.GetAllBAS();
    this.GetAllProducts();
  }

  GetCommissions() {
    this.countryService.getAllCommissionDetails().subscribe((response: any) => {
      this.Commissions = response;
    });
  }

  GetAllBAS() {
    this.countryService.getAllBAs().subscribe((response: any) => {
      this.BusinessAssociates = response;
    });
  }

  GetSPS() {
    this.countryService.getAllSPs().subscribe((response: any) => {
      this.ServiceProviders = response;
    });
  }

  GetAllProducts() {
    this.countryService.getAllproducts().subscribe((response: any) => {
      this.products = response;
    });
  }

  GetAllSubProducts(id) {
    this.countryService.getAllsubproducts(id).subscribe((response: any) => {
      this.subproducts = response;
    });
  }

  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    this.spid=null;
    this.productid= null;
    this.subproductid = null;
    this.baid = null;
    this.percent = "";
  }

  

  editCommission(det){
    this.rowid = det.id;
    this.spid = det.serviceproviderId;
    this.productid = det.productId;
    this.subproductid = det.subproductId;
    this.baid= det.businessassociateId;
    this.percent = det.commissionPersent;
    this.showSave = false;
    this.showUpdate = true;
    this.selectedbaid= det.businessassociateId;
    this.selectedspid= det.serviceproviderId;
  }

  deleteCommissionRow(){
    this.spinner.show();
    this.countryService.deletecommission(this.Cmsid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCommissions();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCommissions();
          this.spinner.hide();
        }
      });
  }

  deleteCommission(data){
    this.Cmsid = data.id;
  }

  SaveCommissionDetails(form: NgForm){  
    var data = {
      SBId:this.selectedspid.toString(),
      // BAId:this.selectedbaid.toString(),
      CommissionPersent:form.controls["percent"].value,
      ProductId: this.productid,
      SubproductId:this.subproductid

    };
    this.spinner.show();
    this.countryService.saveCommissionData(data).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCommissions();
          this.spinner.hide();
        }
      }
    );
  }

  UpdateCommissionDetails(form: NgForm){
    
    var data = {
      Id:this.rowid,
      SBId:this.selectedspid,
      BAId:this.selectedbaid ,
      CommissionPersent:form.controls["percent"].value,
      ProductId: this.productid,
      SubproductId:this.subproductid
    };
    this.spinner.show();
    this.countryService.updateCommissionData(data).subscribe(
      (data: any) => {
        if (data =="success") {
          this.notify = " Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCommissions();
          this.spinner.hide();
         
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetCommissions();
          this.spinner.hide();
         
        }
      }
    );
  }

  onSelectBA(data){
    this.selectedbaid = data;
  }
  onSelectSP(data){
    this.selectedspid = data;
  }
  onSelectproduct(data){
    this.productid = data;
    this.GetAllSubProducts(this.productid)
  }
  onSelectsubproduct(data){
    this.subproductid = data;
  }

}

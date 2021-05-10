import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ProductService } from 'src/app/Shared/ProductMaster/product.service';
import { ServiceProviderProductsService } from 'src/app/Shared/ServiceProviderProducts/service-provider-products.service';
import { SubProductMasterService } from 'src/app/Shared/SubProductMaster/sub-product-master.service';

@Component({
  selector: 'app-service-provider-products-master',
  templateUrl: './service-provider-products-master.component.html',
  styleUrls: ['./service-provider-products-master.component.css']
})
export class ServiceProviderProductsMasterComponent implements OnInit {
  subproduct: any;
  serid: any;
  roleDesc: any;
  rolid: number;
  showSave: any;
  showUpdate: any;
  p: number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  subid: any;
  Serviceid: any;
  ServieTypeList: any;
  loansList: any;
  dataList: any;
  lid: any;
  Serid: any;
  proid: any;
  products: any;
  Productid: any;
  subproductdesc:any;
  SelectedLogoFile: string;
  files1: any;
  serviceid: any;
  Services: any;
  providers: any;
  sid: any;
  providername:any;
  files2: any;
  SelectedDescription: string;
  constructor(private messageService: MessageService, private httpService: HttpClient, private subproductservice: SubProductMasterService, private productService: ProductService,
    private spinner: NgxSpinnerService , private providerproductService: ServiceProviderProductsService) {
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getsubproduct();
    this.Getproductsdata();
    this.Getserviceproductsdata();
    this.Getservicesdata();
    this.subproduct = "";
    this.roleDesc = "";

  }
  onSelectsubproduct(data: any) {
    this.subid = data
  }

  onSelectproduct(data:any){
    this.proid = data
  }
  onSelectservice(data:any){
    this.serviceid = data
  }
  Getproductsdata() {
    this.spinner.show();
    this.productService.getproducts().subscribe((response: any) => {
      this.products = response;
      this.spinner.hide();
    });
  }
  Getproduct(id) {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id == id) {
        return this.products[index].productName;
      }
    }
  }
  Getserviceproductsdata() {
    this.spinner.show();
    this.providerproductService.getserviceproducts().subscribe((response: any) => {
      this.providers = response;
      this.spinner.hide();
    });
  }
  Getservicesdata() {
    this.spinner.show();
    this.providerproductService.getservicesdata().subscribe((response: any) => {
      this.Services = response;
      this.spinner.hide();
    });
  }
  Getservice(id) {
    for (let index = 0; index < this.Services.length; index++) {
      if (this.Services[index].id == id) {
        return this.Services[index].middleName;
      }
    }
  }
  Getsubproduct() {
    this.spinner.show();
    this.subproductservice.getsubproducts().subscribe((response: any) => {
      this.subproduct = response;
      this.spinner.hide();
    });
  }
  Getsubproductdata(id) {
    for (let index = 0; index < this.subproduct.length; index++) {
      if (this.subproduct[index].id == id) {
        return this.subproduct[index].subProductName;
      }
    }
  }
  editRole(data: any) {
    this.showSave = false;
    this.showUpdate = true;
    this.sid = data.id;
  this.serviceid = data.id;
    this.proid =data.id;
   this.subid=data.id;
    this.subproduct = data.productName;
    this.subproductdesc = data.subProductDesc;
    this.createdby = data.createdBy;
    this.createdon = data.createdOn;
  }
  addClick() {
    this.showSave = true;
    this.showUpdate = false;
      
    
  }
  onChangeproductlogo(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    fileslist = this.files1[0];

    this.SelectedLogoFile = fileslist;
  }

  
  onChangeproductdescription(event: any){
    var fileslist1 = "";
    this.files2 = [].slice.call(event.target.files);
    fileslist1 = this.files2[0];

    this.SelectedDescription = fileslist1;
  }

  saveproductsdata(form: NgForm) {
    var data = {
      ServiceProviderId: this.serviceid,
      ProductId: this.proid,
      SubproductId: this.subid,
      ProductName: form.controls["providername"].value,
      CreatedBy: "",
      CreatedOn: "",
    }
    const frmData = new FormData();
    this.spinner.show();

    frmData.append("RegData", JSON.stringify(data));
    frmData.append("LogoFile", this.SelectedLogoFile);
    frmData.append("ProductDescription", this.SelectedDescription);

    this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/ServiceProviderProducts/Postsaveproductdata/', frmData).subscribe(
      data => {
        if (data == "success") {
          alert("Added Successfully!!")
          this.notify = "Added Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
            this.Getserviceproductsdata();
          }.bind(this), 3000);
          this.spinner.hide();
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
        }
      });
  }
  
  Updateproduct(form: NgForm) {
    var data = {
      Id: this.sid,
      ServiceProviderId:this.serviceid,
      ProductId:this.proid,
      SubproductId:this.subid,
      ProductName: form.controls["providername"].value,
      CreatedBy:"",
      CreatedOn:"",      
    }
    const frmData = new FormData();
    this.spinner.show();

    frmData.append("RegData", JSON.stringify(data));
    frmData.append("LogoFile", this.SelectedLogoFile);
    frmData.append("ProductDescription", this.SelectedDescription);

    this.httpService.put('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/ServiceProviderProducts/Putproductdata/', frmData).subscribe(
      data => {
        if (data == "success") {
          alert("Added Successfully!!")
          this.notify = "Added Successfully!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();        
        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.spinner.hide();
        }
      });
  }

  deleteserviceproduct(data: any) {
    this.rolid = data.id;
  }
  deleteserviceproductRow() {
    this.spinner.show();
    this.providerproductService.deleteserviceproductdata(this.rolid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = "Deleted Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getsubproduct();
          this.spinner.hide();

        } else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getsubproduct();
          this.spinner.hide();
        }
      });
  }

  downloadfile(det){
    this.spinner.show();
    window.open(det.productDescriptionLink);
    this.spinner.hide();
  }
}


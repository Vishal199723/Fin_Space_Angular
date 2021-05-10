import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ProductService } from 'src/app/Shared/ProductMaster/product.service';
import { SubProductMasterService } from 'src/app/Shared/SubProductMaster/sub-product-master.service';
import { SpsubproductVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-sub-product-master',
  templateUrl: './sub-product-master.component.html',
  styleUrls: ['./sub-product-master.component.css']
})
export class SubProductMasterComponent implements OnInit {
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
  Loanid: any;
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
  constructor(private messageService: MessageService,  private subproductservice: SubProductMasterService, private productService: ProductService,
    private spinner: NgxSpinnerService) {
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getsubproduct();
    this.Getproductsdata();
    this.subproduct = "";
    this.roleDesc = "";

  }
  onSelectloantype(data: any) {
    this.Loanid = data
  }
  onSelectproduct(data: any) {
    this.Productid = data
    this.subproductservice.getloantypesdata(this.Productid).subscribe((Data: any) => {
      this.loansList = Data;
    })
  }

  GetLoans(id) {
    for (let index = 0; index < this.loansList.length; index++) {
      if (this.loansList[index].id == id) {
        return this.loansList[index].type;
      }
    }
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

  Updatesubproduct(form: NgForm) {
    this.spinner.show();
    const inputRequest1: SpsubproductVM = {
      Id: this.serid,
      ProductId: this.Productid,
      LoanTypeid: this.Loanid,
      SubProductName: form.controls["subproduct"].value,
      SubProductDesc: form.controls["subproductdesc"].value,
      CreatedBy: "",
      CreatedOn: "",

    }
    this.subproductservice.UpdatesubproductRow(inputRequest1).subscribe(
      (data: any) => {
        if (data == "success") {
          this.notify = " Updated Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getsubproduct();
          this.spinner.hide();

        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getsubproduct();
          this.spinner.hide();
        }
      }
    );
  }
  SavesubproductD(form: NgForm) {
    this.spinner.show();
    const inputRequest: SpsubproductVM = {
      Id: 0,
      ProductId: this.Productid,
      LoanTypeid: this.Loanid,
      SubProductName: form.controls["subproduct"].value,
      SubProductDesc: form.controls["subproductdesc"].value,
      CreatedBy: "",
      CreatedOn: ""

    }
    this.subproductservice.savesubproduct(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getsubproduct();
          this.spinner.hide();

        }
        else {
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getsubproduct();
          this.spinner.hide();
        }
      }
    );
  }
  Getsubproduct() {
    this.spinner.show();
    this.subproductservice.getsubproducts().subscribe((response: any) => {
      this.subproduct = response;
      this.spinner.hide();
    });
  }
  editRole(data: any) {
    this.showSave = false;
    this.showUpdate = true;
    this.serid = data.id;
    this.lid = data.loanTypeId;
    this.subproduct = data.subProductName;
    this.subproductdesc = data.subProductDesc;
    this.createdby = data.createdBy;
    this.createdon = data.createdOn;
  }
  addClick() {
    this.showSave = true;
    this.showUpdate = false;
    if (this.subproduct != "") {
      this.subproduct = "";
    }
  }
  deletesubproduct(data: any) {
    this.rolid = data.id;
  }
  deletesubproductRow() {
    this.spinner.show();
    this.subproductservice.deletesubproductdata(this.rolid).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Deleted Succesfully"
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
}


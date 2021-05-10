import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { ProductService } from 'src/app/Shared/ProductMaster/product.service';
import { ProductVM } from 'src/app/ViewModels/Masters';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {

  roleid:any;
  product: string;
  roleDesc: any;
  rolid: number;
  showSave:any;
  showUpdate:any;
  p:number = 1
  public dismissalert = false;
  notify: string
  createdby: any;
  createdon: any;
  products: any;
  productdesc:string;
  constructor(private messageService: MessageService,private productService: ProductService,private spinner: NgxSpinnerService) { 
    this.messageService.sendSession('true');

  }

  ngOnInit() {
    this.Getproducts();
    this.product = "";
    this.roleDesc = "";
  }
  Updateproduct(form: NgForm) {
    this.spinner.show();
    const inputRequest1: ProductVM = {
      Id: this.roleid ,
      ProductName: form.controls["product"].value,
      ProductDesc: form.controls["productdesc"].value,
      CreatedBy:  this.createdby,
      CreatedOn:  this.createdon,
    }
    this.productService.UpdateproductRow(inputRequest1).subscribe(
      (data: any) => {
          if (data == "success") {
            this.notify = " Updated Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getproducts();
            this.spinner.hide();
        
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getproducts();
          this.spinner.hide();
        }
      }
    );
  }
  saveproductsdata(form: NgForm) {
    this.spinner.show();
    const inputRequest: ProductVM = {
      Id: 0,
      ProductName: form.controls["product"].value,
       ProductDesc: form.controls["productdesc"].value,
      CreatedBy:"",
      CreatedOn:"",
    
    }
    this.productService.saveproduct(inputRequest).subscribe(
      (data: any) => {
        if (data != null) {
          this.notify = " Saved Succesfully"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getproducts();
          this.spinner.hide();
         
        }
        else{
          this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getproducts();
          this.spinner.hide();
        }
      }
    );
  }
  Getproducts() {
    this.spinner.show();
    this.productService.getproducts().subscribe((response: any) => {
      this.products = response;
      this.spinner.hide();
    });
  }
  editRole(data:any){
    this.showSave = false;
    this.showUpdate = true;
    this.roleid = data.id;
    this.product = data.productName;    
    this.productdesc = data.productDesc;
    this.createdby=data.createdBy;
    this.createdon=data.createdOn;
  }
  addClick(){
    this.showSave = true;
    this.showUpdate = false;
    if (this.product != "") {
      this.product = "";
    }
  }
  deleteproduct(data:any){
    this.rolid = data.id;
  }
  deleteproductRow(){  
    this.spinner.show();
      this.productService.deleteproductdata(this.rolid).subscribe(
        (data: any) => {
          if (data != null) {
            this.notify = " Deleted Succesfully"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.Getproducts();
            this.spinner.hide();
           
          }else{
            this.notify = "Something Went Wrong. Try again.!!"
          setTimeout(() => this.dismissalert = true, 100);
          setTimeout(function () {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.Getproducts();
          this.spinner.hide();
          } 
        });
    }

}
  // saveproductsdata(form: NgForm) {
  //   var data = {
  //     ProductName: form.controls["product"].value,
  //     ProductDesc: form.controls["productdesc"].value,
  //     CreatedBy:"",
  //     CreatedOn:"",      
  //   }
  //   const frmData = new FormData();
  //   this.spinner.show();

  //   frmData.append("RegData", JSON.stringify(data));
  //   frmData.append("LogoFile", this.SelectedLogoFile);
    
  //   this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/ProductMaster/Postsaveproductdata/', frmData).subscribe(
  //     data => {
  //       if (data == "success") {
  //         alert("Added Successfully!!")
  //         this.notify = "Added Successfully!!"
  //         setTimeout(() => this.dismissalert = true, 100);
  //         setTimeout(function () {
  //           this.dismissalert = false;
  //         }.bind(this), 3000);
  //         this.spinner.hide();        
  //       } else {
  //         this.notify = "Something Went Wrong. Try again.!!"
  //         setTimeout(() => this.dismissalert = true, 100);
  //         setTimeout(function () {
  //           this.dismissalert = false;
  //         }.bind(this), 3000);
  //         this.spinner.hide();
  //       }
  //     });
  // }







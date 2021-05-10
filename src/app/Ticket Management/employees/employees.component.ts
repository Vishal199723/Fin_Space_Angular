import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestTypeService } from 'src/app/Shared/ServiceRequestType/request-type.service';
import { ServiceTypeService } from 'src/app/Shared/ServiceTypeMaster/service-type.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { BusinessLoanServiceService } from 'src/app/Shared/BusinessLoan/business-loan-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  lcdid:any;
  EmployeeUniqueId: any;
  EmployeeName: any;
  ContactNumber: any;
  Email: any;
  Password: any;
  SPId: any;
  selectedservicetype: any;
  ServiceTypeList: any;
  submitted: boolean;
  files1: any;
  SelectedEmpImg: string;
  notify: string;
  dismissalert: boolean;
  spid: string;
  SPEmployees: any;
  delid: any;
  RolesList: any;
  GroupsList: any;
  selectedRole: any;
  selectedGroup: any;
  enablesave: boolean=false;
  enableupdate: boolean=false;
  uid: string;
  useremail: string;
  username: string;
  roleid: string;
  groupId: string;
  editid: any;
  AllGroupsList: any;
  EmployeeUniqueIdCopy: any;
  companyemployeeid:any;
  designations: any;
  desid: any;
  otherdesignation: boolean;
  designationd:any;
  selectedpincode: any;
  Locations: any;


  constructor(private messageService: MessageService,private spinner: NgxSpinnerService, private ServiceRequesttypeservice: RequestTypeService,
    private Servicetypeservice: ServiceTypeService, private httpService: HttpClient,private businessloanservice: BusinessLoanServiceService,) {
      this.messageService.sendSession('true');
      localStorage.setItem("Loder", "0");
      if (localStorage.getItem("IsLoggedIn") == "true") {
        this.uid = localStorage.getItem("userId");
        this.useremail = localStorage.getItem("Email");
        this.username = localStorage.getItem("fullname");
        this.roleid = localStorage.getItem("role");
        this.groupId = localStorage.getItem("groupId");
      }
     }

  ngOnInit() {
    this.GetEmployeeUID();
    this.GetAllServiceTypes();
    this.GetSPEmployees();
    this.GetRoles();
    this.GetAllGroups();
    this.Getdesignation();
    this.GetallLocations();
  }

  GetEmployeeUID() {
    this.spinner.show();
    this.ServiceRequesttypeservice.getEmployeeUniqueId().subscribe((Data: any) => {
      this.EmployeeUniqueId = Data;
      this.EmployeeUniqueIdCopy=Data;
      this.spinner.hide();
    })
  }


  onSelectdesignation(data: any) {
    this.desid = data;
    if (data == 9) {
      this.otherdesignation = true;
    }
    else {
      this.otherdesignation = false;
    }
  }
  
  Getdesignation() {
    this.spinner.show()
    this.businessloanservice.getALldesignation().subscribe((response: any) => {
      this.designations = response;
      this.spinner.hide()

    });
  }

  GetallLocations() {
    this.spinner.show();
    this.Servicetypeservice.getlocations().subscribe((Data: any) => {
      this.Locations = Data;
      this.spinner.hide();
    })
  }

  GetAllServiceTypes() {
    this.spinner.show();
    this.Servicetypeservice.getAllServiceTypes().subscribe((Data: any) => {
      this.ServiceTypeList = Data;
      this.spinner.hide();
    })
  }

  GetRoles() {
    this.spinner.show();
    this.Servicetypeservice.getRoles().subscribe((Data: any) => {
      this.RolesList = Data;
      this.spinner.hide();
    })
  }

  GetGroups() {
    this.spinner.show();
    this.Servicetypeservice.getRoleBasedGroups(this.selectedRole).subscribe((Data: any) => {
      this.GroupsList = Data;
      this.spinner.hide();
    })
  }
  GetAllGroups() {
    this.spinner.show();
    this.Servicetypeservice.getGroups().subscribe((Data: any) => {
      this.AllGroupsList = Data;
      this.spinner.hide();
    })
  }
  GetSPEmployees() {
    this.spinner.show();
    this.spid = this.uid;
    this.ServiceRequesttypeservice.getSPEmployees(this.spid).subscribe((Data: any) => {
      this.SPEmployees = Data;

      this.spinner.hide();
    })
  }

  onSelectRole(id) {
    this.selectedRole = +id;
    this.GetGroups()
  }

  onSelectGroup(id) {
    this.selectedGroup = id;
  }

  onSelectServiceType(id) {
    this.selectedservicetype = id;
  }

  onEmployeeImage(event: any) {
    var fileslist = "";
    this.files1 = [].slice.call(event.target.files);
    fileslist = this.files1[0];

    this.SelectedEmpImg = fileslist;
  }
  SaveServiceProviderEmployee(form: NgForm) {
    var EmployeeName = form.controls["EmployeeName"].value;
    var ContactNumber = form.controls["ContactNumber"].value;
    var Email = form.controls["Email"].value;
    var Password = form.controls["Password"].value;
    var ServiceCompanyId = this.uid;
    var Companyempid = form.controls["companyemployeeid"].value;

    // var RoleId = form.controls["RoleId"].value;
    // var GroupId = form.controls["RoleId"].value;
    this.submitted = true;
    // if (this.NewEmployeeForm.invalid) {
    //   return;
    // }
    if (this.SelectedEmpImg == undefined) {
      alert("Please Select Employee Image!!")
    }
    else if (Companyempid == undefined||Companyempid==null||Companyempid=="") {
      alert("Please enter company employeeid")
    }
    else if (this.desid == null || this.desid == undefined) {
      alert("Please Select Designation");
    }
    else if (this.desid == 9 && (this.designationd == null || this.designationd == undefined)) {
      alert("Please Enter Designation");
    }
    else if (this.selectedpincode ==null || this.selectedpincode == undefined) {
      alert("Please Enter Location");
    }
    else {

      var data = {
        UniqueEmpId: this.EmployeeUniqueId,
        EmployeeName: EmployeeName,
        ContactNumber: ContactNumber,
        Email: Email,
        Password: Password,
        ServiceCompanyId: ServiceCompanyId,
        SelectedServiceType: this.selectedservicetype,
        Role: this.selectedRole,
        GroupId: this.selectedGroup,
        CompanyEmployeeId :Companyempid,
        DesignationId:this.desid,
        Designationother: this.designationd,
        LocationId:this.selectedpincode
      }
      const frmData = new FormData();
      this.spinner.show();

      frmData.append("RegData", JSON.stringify(data));
      frmData.append("EmpImg", this.SelectedEmpImg);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/ServiceProviderEmployee/PostServiceProviderEmpRegistration/', frmData).subscribe(
        data => {
          if (data == "success") {
            this.notify = "Registered Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.GetSPEmployees();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
          this.spinner.hide();
        });
    }

  }
  addnewemployee(){
    this.enablesave=true;
    this.enableupdate=false;
    this.EmployeeName=null;
    this.ContactNumber=null;
    this.Email=null;
    this.selectedRole=null;
    this.selectedservicetype=null;
    this.selectedGroup=null;
    this.selectedpincode=null;
    this.desid=null;
    this.companyemployeeid=null;
    this.GroupsList=[]
    this.EmployeeUniqueId=this.EmployeeUniqueIdCopy
  }
  editEmployee(data) {
    this.enablesave=false;
    this.enableupdate=true;
    this.EmployeeName=data.employeeName;
    this.ContactNumber=data.contactNumber;
    this.Email=data.email;
    this.selectedRole=data.roleId
    this.selectedservicetype=data.serviceTypeId
    this.selectedGroup=data.groupId
    this.editid=data.id
    this.GroupsList=this.AllGroupsList
    this.EmployeeUniqueId=data.uniqueEmpId;
    this.companyemployeeid = data.companyEmployeeId;
    this.selectedpincode = data.locationId;
    this.lcdid= data.locationId;
    this.desid = data.designationId;
    this.designationd = data.designation;
  }
  UpdateServiceProviderEmployee(){
 
      var data = {
        Id:this.editid,
        UniqueEmpId: this.EmployeeUniqueId,
        EmployeeName: this.EmployeeName,
        ContactNumber:  this.ContactNumber,
        Email:  this.Email,
        ServiceCompanyId: this.uid,
        SelectedServiceType: this.selectedservicetype,
        Role: this.selectedRole,
        GroupId: this.selectedGroup,
        DesignationId:this.desid,
        Designationother: this.designationd,
        LocationId:this.selectedpincode,
        CompanyEmployeeId :this.companyemployeeid,
      }
      const frmData = new FormData();
      this.spinner.show();

      frmData.append("RegData", JSON.stringify(data));
      frmData.append("EmpImg", this.SelectedEmpImg);

      this.httpService.post('http://applicationapi-dev.ap-south-1.elasticbeanstalk.com/api/ServiceProviderEmployee/PostUpdateServiceProviderEmpRegistration/', frmData).subscribe(
        data => {
          if (data == "ok") {
            this.notify = "Updated Successfully!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
            this.GetSPEmployees();
          } else {
            this.notify = "Something Went Wrong. Try again.!!"
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function () {
              this.dismissalert = false;
            }.bind(this), 3000);
            this.spinner.hide();
          }
          this.spinner.hide();
        });
    
  }

  deleteEmployee(data) {
    this.spinner.show();
    this.delid = data.id;
    this.ServiceRequesttypeservice.DeleteSPEmployee(this.delid).subscribe((response: any) => {
      if (response != null) {
        alert("Deleted Successfully");
        this.GetSPEmployees();
      }
      this.spinner.hide();
    })
  }
  onSelectLocation(id){
    this.selectedpincode =id;
  }
}

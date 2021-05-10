import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http:HttpClient,private _urls :AppGlobals ) { }
  GetAllProviders(id){
   return(this.http.get(this._urls.weburl + "/api/EnterPriseRegistration/GetAllProviders/" + id));
  }

  SendRequest(data){
    return(this.http.post(this._urls.weburl + "/api/CustomerRequests/PostCustomerRequest/" , data));
  }
  GetUserDetails(id){
    return(this.http.get(this._urls.weburl + "/api/EnterPriseRegistration/GetCurrentUSerDetails/" + id));

  }
  GetAllTickets(id){
    return(this.http.get(this._urls.weburl + "/api/CustomerRequests/GetAllTickets/" + id));
  }

  GetEmployees(id){
    return(this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetSPEmployees/" + id));
  }

  SendEmployeeTask(data){
    return(this.http.post(this._urls.weburl + "/api/EmployeeTasks/PostEmployeeTask/" , data));
  }

  GetAssignedTasks(id){
    return(this.http.get(this._urls.weburl + "/api/ServiceProviderEmployee/GetAssignedTasksList/" + id));
  }
   
  AllFundsproducts(id){
    return(this.http.post(this._urls.weburl + "/api/Products/Productfundlist/" , id));
   }
  
   Allproducts(id){
    return(this.http.post(this._urls.weburl + "/api/Products/Productlist/" , id));
   }
   AllProductsForInsurance(id){
    return(this.http.post(this._urls.weburl + "/api/Products/ProductlistForInsurance/" , id));
   }
   insertticketdetails(id){
    return(this.http.post(this._urls.weburl + "/api/CustomerRequests/PostCustomerRequestbySelfReg/" , id));
   }
   insertmutualticketdetails(id){
    return(this.http.post(this._urls.weburl + "/api/CustomerRequests/PostCustomerRequestmutualfundSelfReg/" , id));
   }
   insertticketdetailsforinsurance(id){
    return(this.http.post(this._urls.weburl + "/api/CustomerRequests/PostCustomerRequestbySelfRegforInsurance/" , id));
   }
  SendtoRv(data){
    return(this.http.post(this._urls.weburl + "/api/EmployeeTasks/PostRegistrationVerifier/" , data));
  }
  getservcieprovider(id){
    return(this.http.get(this._urls.weburl + "/api/CustomerRequests/GetServiceProviderName/"  + id));
  }
  BALoanFormProId(id){
    return(this.http.post(this._urls.weburl + "/api/CustomerRequests/PostBALoanProposeID/" , id));
   }
   BAMutualfundProId(id){
    return(this.http.post(this._urls.weburl + "/api/ustomerRequests/PostMutualFundProposeID/" , id));
   }
   GetReassignDetails(id){
    return(this.http.get(this._urls.weburl + "/api/CustomerRequests/GetReassignTask/"  + id));

   }
   BAInsuranceFormProId(id){
    return(this.http.post(this._urls.weburl + "/api/CustomerRequests/PostBAInsuranceProposeID/" , id));

   }
}

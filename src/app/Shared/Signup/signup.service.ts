import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient,private _urls: AppGlobals) { }
  validateemail(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostValidMail/" , data);

  }
  validateemailormobile(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostValidMailorMobile/" , data);

  }
  validatemobile(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostValidPhoneNumber/" , data);

  }
  sendMail(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostsendLink/" , data);
  }
  postchangePassword(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostForgotPassword/" , data);
  }
  checkoldpassword(id){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostOldPassword/" , id);

  }
  getProfileDetails(id){
    return this.http.get(this._urls.weburl + "/api/EnterPriseRegistration/GetProfileDetails/" + id);

  }
  UpdateFullName(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostUpdateName/" , data);

  }
  SendMobileOTP(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/PostSendMobileOTP/" , data);

  }
  ValidateOTP(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/OTPValidation/" , data);

  }
  ValidateEmailOTP(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/OTPValidationEmail/" , data);

  }
  ValidateOTPRegistration(data){
    return this.http.post(this._urls.weburl + "/api/EnterPriseRegistration/OTPValidationRegistration/" , data);

  }
  getCompanyLogo(id){
    return this.http.get(this._urls.weburl + "/api/EnterPriseRegistration/GetCompanyLogo/" + id);

  }
  GetAllBA(){
    return this.http.get(this._urls.weburl + "/api/EnterPriseRegistration/GetAllBA/");
  }
  GetAllserviceProviders() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/Getserviceproviders/");
  }
  //added
  Getimgverifieddet(id){
    return this.http.get(this._urls.weburl + "/api/User/Getimageverifieddetails/"+id);
  }
  Getsignverifieddet(id){
    return this.http.get(this._urls.weburl + "/api/User/Getsignverifieddetails/"+id);
  }

}

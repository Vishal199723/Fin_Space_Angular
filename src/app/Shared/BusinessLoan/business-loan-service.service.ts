import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';
import { MutualFund } from 'src/app/ViewModels/MutualFund';

@Injectable({
  providedIn: 'root'
})
export class BusinessLoanServiceService {

  constructor(private http: HttpClient, private _urls: AppGlobals) { }
  getgenderdata() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetGender");
  }
  getrelationshiptypedata() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetRelationShipTypes");
  }

  getmaritalstatus() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/Getmaritalstatus");
  }

  getAllreligion() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetReligion");
  }

  getAllqualification() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/Getqualification");
  }
  getALLfanilytype() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetFamilyType");
  }

  getALldesignation() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/Getdesignation");
  }

  getAlloccupatiom() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetOccupation");
  }

  getIncorporationTypes() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetIncorporationTypes");
  }

  getALLmoveable() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/Getmoveableasset");
  }

  getALLfixedasset() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetFixedasset");
  }
  getALLcaste() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetAllcaste");
  }
  getbankaccounttype() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/Getbanktype");
  }
  SaveBasicDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_BasicDetails/PostSaveBasicDetails", data);
  }
  SavefamilyDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_FamilyDetails/PostSaveC_FamilyDetails", data);
  }
  SaveBusinessLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_BusinessLoanDetails/PostSaveBusinessDetails", data);
  }

  SaveHomeDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_HomeVehicleDetailsBlockchain/PostHomeVehicleDetails", data);
  }

  SaveSmallScaleLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_SmallScaleLoanDetails/PostSaveSmallScaleLoanDetails", data);
  }

  SaveSuretyLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_SuretyLoanDetails/PostSaveSuretyLoanDetails", data);
  }

  SaveEducationLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_EducationLoanDetails/PostSaveEducationLoanDetails", data);
  }

  SaveGoldLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_GoldLoanDetails/PostSaveGoldLoanDetails", data);
  }

  SaveFixedAssetLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_FixedAssetLoanDetails/PostSaveFixedAssetLoanDetails", data);
  }

  SaveProjectLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_ProjectLoanDetails/PostSaveProjectLoanDetails", data);
  }

  SaveVehicleLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_VehicleLoanDetails/PostSaveVehicleLoanDetails", data);
  }

  getBusinessLoanDetailsUser(id) {
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetLoanDetails/" + id);
  }
  customerapproval(data) {
    return this.http.post(this._urls.weburl + "/api/UserLoanDetails/CustomerApproval", data);
  }

  customerapprovalandreqticket(data) {
    return this.http.post(this._urls.weburl + "/api/UserLoanDetails/CustomerApprovalandRequestTicket", data);
  }
  SaveHomeLoanDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_HomeLoanDetailsBlockchain/PostHomeVehicleDetails", data);
  }

  SaveMutualFundDetails(data: MutualFund) {
    return this.http.post(this._urls.weburl + "/api/C_MutualFunDetails/PostSaveMutualFundDetails", data);
  }

  SaveAccidentInsuranceDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_AccidentInsurance/PostSaveAccidentInsuranceDetails", data);
  }

  SaveHealthInsuranceDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_HealthInsurance/PostSaveHealthInsuranceDetails", data);
  }

  getmutualfunddetails(uid) {
    return this.http.get(this._urls.weburl + "/api/C_MutualFunDetails/GetMutualfundsDetails/" + uid);
  }

  getAccidentInsurancedetails(uid) {
    return this.http.get(this._urls.weburl + "/api/C_AccidentInsurance/GetAccidentInsuranceDetails/" + uid);
  }

  getCertificates() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetCertificates");
  }

  getUploadedCertificates(id) {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetUploadedCertificatesUsingticketId/"+ id);
  }

  gethealthinsurancedetails(uid) {
    return this.http.get(this._urls.weburl + "/api/C_HealthInsurance/GethealthinsDetails/" + uid);
  }

  SaveterminsDetails(data) {
    return this.http.post(this._urls.weburl + "/api/TermInsurance/SaveTermInsurance", data);
  }
  
  getterminsdetails(uid) {
    return this.http.get(this._urls.weburl + "/api/TermInsurance/GetTermLifeInsureDetails/" + uid);
  }
  GetDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_BusinessLoanDetails/GetBasicDetailsDraftforBusinessLoan/" + id);

  }
  GetVeihcleDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_VehicleLoanDetails/GetVehicleDetailsDraftforVehicleLoan/" + id);

  }
  GetSuretyDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_SuretyLoanDetails/GetSuretyDetailsDraftforSuretyLoan/" + id);

  }

  getBAbankdetails(id) {
    return this.http.get(this._urls.weburl + "/api/EnterPriseRegistration/GetBAbankdetails/" + id);
  }
  getdocforpdfview(data){
    return this.http.post(this._urls.weburl + "/api/C_BusinessLoanDetails/PostFileView", data);

  }
  GetSmallScaleDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_SmallScaleLoanDetails/GetDraftDetailsforSmallScaleLoan/" + id);

  }
  GetFixedassetDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_FixedAssetLoanDetails/GetDraftDetailsforFixedAssetLoan/" + id);

  }
  GetGoldLoanDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_GoldLoanDetails/GetDraftDetailsforGoldLoan/" + id);
  }

  mutualfunddata(id){
    return(this.http.post(this._urls.weburl + "/api/C_MutualFunDetails/PostDetailsDraftforMutualfund/" , id));
   }
  GetGoldLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_GoldLoanDetails/GetEditDetailsforGoldLoan/" + id);

  }
 
  GeteducationDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_EducationLoanDetails/GetDraftDetailsforEducationLoan/" + id);

  }
  GethomeDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_HomeLoanDetailsBlockchain/GetDraftDetailsforHomeLoan/" + id);

  }
  GetbusinessDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_BusinessLoanDetails/GetBasicDetailsDraftforBusinessLoan/" + id);

  }

  GetvehicleDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_VehicleLoanDetails/GetVehicleDetailsDraftforVehicleLoan/" + id);

  }
  GetAccidentInsuranceDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_AccidentInsurance/GetAccidentInsuranceDraftData/" + id);

  }
  GetHomeInsuranceDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_HomeInsurance/GetBasicDetailsDraftforHomeInsurance/" + id);

  }
  GetHealthInsuranceDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_HealthInsurance/GetHealthInsuranceDraftData/" + id);

  }
  GetHealthInsuranceEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_HealthInsurance/GetHealthInsuranceEditData/" + id);

  }
  GetAccidentInsuranceEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_AccidentInsurance/GetAccidentInsuranceEditData/" + id);

  }
  GetTermInsuranceDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/TermInsurance/GetTermInsuranceDraftData/" + id);
  }
  GetProjectDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_ProjectLoanDetails/GetDraftDetailsforProjectLoan/" + id);
  }
  getdeposittypedata() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetDepositTypes");
  }
  getMaturityInstructiontypedata() {
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetMaturityInstructionTypes");
  }
  getInterestpayouttypesList(){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetInterestpayoutdataList");
  }
  getperiodsofdepositeList(){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetPeriodsdata");
  }
  getInterestpayouttypes(id){
    return this.http.get(this._urls.weburl + "/api/AllMasterData/GetInterestpayoutdata/" + id);
  }
  SaveFDDetails(data) {
    return this.http.post(this._urls.weburl + "/api/C_FixedDeposit/PostSaveFixedDepositDetails", data);
  }
  GetFixedDepositDraftdata(id){
    return this.http.get(this._urls.weburl + "/api/C_FixedDeposit/GetDraftDetailsforFixedDeposit/" + id);
  }
  SubmitLoanForm(data){
    return this.http.post(this._urls.weburl + "/api/SubmitLoanForm/PostSubmitLoanForm", data);
  }
  SubmitmutualfundForm(data){
    return this.http.post(this._urls.weburl + "/api/SubmitMutualFund/PostSubmitMutualFund", data);
  }
  GetSuretyLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_SuretyLoanDetails/GetEditDetailsforSuretyLoan/" + id);

  }
  SubmitInsuranceForm(data){
    return this.http.post(this._urls.weburl + "/api/SubmitLoanForm/PostSubmitInsuranceForm", data);

  }

  //added
  GetBusinessLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_BusinessLoanDetails/GetEditDetailsforBusinessLoan/" + id);
  }
  GetFixedDepositLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_FixedDeposit/GetEditDetailsforFixedDepositLoan/" + id);
  }
  GetVehicleLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_VehicleLoanDetails/GetEditDetailsforVehicleLoan/" + id);
  }
  GetSmallScaleLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_SmallScaleLoanDetails/GetEditDetailsforSmallScaleLoan/" + id);
  }
  GetFixedAssetLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_FixedAssetLoanDetails/GetEditDetailsforFixedAssetLoan/" + id);
  }
  GeteducationLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_EducationLoanDetails/GetEditDetailsforEducationLoan/" + id);
  }
  GetprojectLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_ProjectLoanDetails/GetEditDetailsforProjectLoan/" + id);
  }
  GetHomeLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_HomeLoanDetailsBlockchain/GetEditDetailsforHomeLoan/" + id);
  }
  GetProjectLoanEditdata(id){
    return this.http.get(this._urls.weburl + "/api/C_ProjectLoanDetails/GetEditDetailsforProjectLoan/" + id);
  }
  GetEditDetailsforHomeInsurance(id){
    return this.http.get(this._urls.weburl + "/api/C_HomeInsurance/GetEditDetailsforHomeInsurance/" + id);
  }
  GetEditDetailsforMotorInsurance(id){
    return this.http.get(this._urls.weburl + "/api/C_MotorInsurance/GetEditDetailsforMotorInsurance/" + id);
  }
  GetEditDetailsforLifeInsurance(id){
    return this.http.get(this._urls.weburl + "/api/C_LifeInsurance/GetEditDetailsforLifeInsurance/" + id);
  }
  GetEditDetailsforTermInsurance(id){
    return this.http.get(this._urls.weburl + "/api/TermInsurance/GetEditDetailsforTermInsurance/" + id);
  }
  gethomeinsurancedetails(uid) {
    return this.http.get(this._urls.weburl + "/api/C_HomeInsurance/GetHomeInsuranceDetails/" + uid);
  }
  getmotorinsurancedetails(uid) {
    return this.http.get(this._urls.weburl + "/api/C_MotorInsurance/GetMotorInsuranceDetails/" + uid);
  }

  checkGST(data){
    return this.http.post(this._urls.weburl + "/api/C_BusinessLoanDetails/Getvalidategstnumber", data);
  }

  getbasicdetails(id){
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetBasicLoanDetails/" + id);
  }

  getbankdetails(id){
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetBankDetails/" + id);
  }

  getallcertificatedetails(id){
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetCertificateDetails/" + id);
  }

  getfamilydata(id){
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetFamilyDetails/" + id);
  }

  gethomevehicledata(id){
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetHomeVehicleDetails/" + id);
  }

  getparticularLoanDetailsUser(id) {
    return this.http.get(this._urls.weburl + "/api/UserLoanDetails/GetParticularLoanDetails/" + id);
  }
  getspdetails(id) {
    return this.http.get(this._urls.weburl + "/api/AdminDashboard/GetSPdetails/" + id);
  }
  getbadetails(id) {
    return this.http.get(this._urls.weburl + "/api/AdminDashboard/GetBAdetails/" + id);
  }
}

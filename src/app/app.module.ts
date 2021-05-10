//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatStepperModule, MatSlideToggleModule, MatSliderModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { MessageService } from './MessageService/meaagse.service';
import { AppGlobals } from 'src/app.Global';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BusinessLoanComponent } from './LoanForms/business-loan/business-loan.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ServiceTypeComponent } from './Masters/service-type/service-type.component';
import { ServiceProviderRegistrationComponent } from './Ticket Management/service-provider-registration/service-provider-registration.component';
import { CountryComponent } from './Masters/country/country.component';
import { StateMasterComponent } from './Masters/state-master/state-master.component';
import { DistrictMasterComponent } from './Masters/district-master/district-master.component';
import { CityMasterComponent } from './Masters/city-master/city-master.component';
import { ServiceProvidersComponent } from './Ticket Management/service-providers/service-providers.component';
import { TicketManagerDashboardComponent } from './ticket-manager-dashboard/ticket-manager-dashboard.component';
import { SendServiceRequestComponent } from './Ticket Management/send-service-request/send-service-request.component';
import { UserComponent } from './Masters/user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewServiceComponent } from './Ticket Management/new-service/new-service.component';
import { SpdashboardComponent } from './Ticket Management/spdashboard/spdashboard.component';
import { EmployeesComponent } from './Ticket Management/employees/employees.component';
import { DeleteitemsComponent } from './Mail/DeletedItems/deleteitems/deleteitems.component';
import { SentitemsComponent } from './Mail/SentItems/sentitems.component';
import { InboxComponent } from './Mail/Inbox/inbox.component';
import { FileRequestsComponent } from './BSafe/newComponents/file-requests/file-requests.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AllfilesComponent } from './BSafe/USRM/AllFiles/allfiles.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ChatComponent } from './BSafe/chat/chat.component';
import { AcceptfriendComponent } from './BSafe/newComponents/acceptfriend/acceptfriend.component';
import { GroupMasterComponent } from './Masters/group-master/group-master.component';
import { GroupMemberMasterComponent } from './Masters/group-member-master/group-member-master.component';
import { RoleComponent } from './Masters/role/role.component';
import { ReadmailComponent } from './Mail/readmail/readmail.component';
import { AllFoldersComponent } from './BSafe/USRM/allfolders/allfolders.component';
import { EmployeeDashboardComponent } from './Ticket Management/employee-dashboard/employee-dashboard.component';
import { TrackComponent } from './Ticket Management/track/track.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ChatImageComponent } from './Components/chat-image/chat-image.component';
import { VehicleloanformComponent } from './vehicleloanform/vehicleloanform.component';
import { SmallscaleloanComponent } from './smallscaleloan/smallscaleloan.component';
import { SuretyLoanformComponent } from './surety-loanform/surety-loanform.component';
import { FixedassetloanComponent } from './fixedassetloan/fixedassetloan.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { ProjectloanComponent } from './projectloan/projectloan.component';
import { HomeloanformComponent } from './homeloanform/homeloanform.component';
import { BusinessAssociateRegistartionComponent } from './business-associate-registartion/business-associate-registartion.component';
import { BusinessAssociateDashBoardComponent } from './business-associate-dash-board/business-associate-dash-board.component';
import { BusinessloandetailsComponent } from './businessloandetails/businessloandetails.component';
import { TestworkflowComponent } from './Workflow/testworkflow/testworkflow.component';
import { SbacountComponent } from './Workflow/sbacount/sbacount.component';
//import { SbaccountproposalComponent } from './sbaccountproposal/sbaccountproposal.component';
import { RegapprovedlistComponent } from './ApprovedList/regapprovedlist/regapprovedlist.component';
import { LoanapplicationapprovedlistComponent } from './ApprovedList/loanapplicationapprovedlist/loanapplicationapprovedlist.component';
import { LoanDocApprovedlistComponent } from './ApprovedList/loan-doc-approvedlist/loan-doc-approvedlist.component';
import { LoanDisApprovedlistComponent } from './ApprovedList/loan-dis-approvedlist/loan-dis-approvedlist.component';
import { DisburseLoanComponent } from './disburse-loan/disburse-loan.component';
import { LoanapplicationproposalComponent } from './loanapplicationproposal/loanapplicationproposal.component';
import { SanctionedLoansComponent } from './sanctioned-loans/sanctioned-loans.component';
import { VehicleloandetailsComponent } from './vehicleloandetails/vehicleloandetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoanServiceprovidersComponent } from './loan-serviceproviders/loan-serviceproviders.component';
import { SmallscaleloandetailsComponent } from './smallscaleloandetails/smallscaleloandetails.component';
import { SuretyloandetailsComponent } from './suretyloandetails/suretyloandetails.component';
import { GoldloandetailsComponent } from './goldloandetails/goldloandetails.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { DocumnetviewComponent } from './documnetview/documnetview.component';
import { FixedassetloandetailsComponent } from './fixedassetloandetails/fixedassetloandetails.component';
import { ProjectloandetailsComponent } from './projectloandetails/projectloandetails.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { HomeloandetailsComponent } from './homeloandetails/homeloandetails.component';
import { HomeInsuranceComponent } from './Insurance/home-insurance/home-insurance.component';
import { InsuranceServiceProvidersComponent } from './insurance-service-providers/insurance-service-providers.component';
import { HomeInsuranceDetailsComponent } from './Insurance/home-insurance-details/home-insurance-details.component';
import { LifeInsuranceComponent } from './Insurance/life-insurance/life-insurance.component';
import { DataLifeInsuranceComponent } from './Insurance/data-life-insurance/data-life-insurance.component';
import { HealthInsuranceComponent } from './Insurance/health-insurance/health-insurance.component';
import { AccidentInsuranceComponent } from './Insurance/accident-insurance/accident-insurance.component';
import { BusinesspartnerComponent } from './Components/businesspartner/businesspartner.component';
import { TouComponent } from './Components/tou/tou.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { ConsentComponent } from './Components/consent/consent.component';
import { PpuRegListComponent } from './ppu-reg-list/ppu-reg-list.component';
import { PpuLoandocumentationComponent } from './ppu-loandocumentation/ppu-loandocumentation.component';
import { PpuCustomerListComponent } from './ppu-customer-list/ppu-customer-list.component';
import { SbaccountproposalComponent } from './sbaccountproposal/sbaccountproposal.component';
import { MutualfunddetailsComponent } from './mutualfunddetails/mutualfunddetails.component';
import { AccidentInsuranceDetailsComponent } from './Insurance/accident-insurance-details/accident-insurance-details.component';
import { HealthinsurancedetailsComponent } from './Insurance/healthinsurancedetails/healthinsurancedetails.component';
import { TermlifeinsuranceComponent } from './termlifeinsurance/termlifeinsurance.component';
import { TermlifeinsurancedetailsComponent } from './termlifeinsurancedetails/termlifeinsurancedetails.component';
import { MotorInsuranceComponent } from './Insurance/motor-insurance/motor-insurance.component';
import { MotorInsuranceDetailsComponent } from './Insurance/motor-insurance-details/motor-insurance-details.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { BusinessAssociateBankDetailsComponent } from './business-associate-bank-details/business-associate-bank-details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FileViewComponent } from './file-view/file-view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BALoansApprovedListComponent } from './baloans-approved-list/baloans-approved-list.component';
import {WebcamModule} from 'ngx-webcam';
import { PreviewloandetailsComponent } from './previewloandetails/previewloandetails.component';
import { OtherDashboardComponent } from './other-dashboard/other-dashboard.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { DepartmentmasterComponent } from './Masters/departmentmaster/departmentmaster.component';
import { DesignationmasterComponent } from './Masters/designationmaster/designationmaster.component';
import { FamilytypemasterComponent } from './Masters/familytypemaster/familytypemaster.component';
import { PreviewinsurancedetailsComponent } from './previewinsurancedetails/previewinsurancedetails.component';
import { SearchPipe } from './search.pipe';
import { PPUDashboardComponent } from './ppudashboard/ppudashboard.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';
import { MenuMasterComponent } from './Masters/menu-master/menu-master.component';
import { CasteMasterComponent } from './Masters/caste-master/caste-master.component';
import { OccupationMasterComponent } from './Masters/occupation-master/occupation-master.component';
import { QualificationMasterComponent } from './Masters/qualification-master/qualification-master.component';
import { GenderMasterComponent } from './Masters/gender-master/gender-master.component';
import { ReligionMasterComponent } from './Masters/religion-master/religion-master.component';

import { MaritalstatusMasterComponent } from './Masters/maritalstatus-master/maritalstatus-master.component';
import { CertificateMasterComponent } from './Masters/certificate-master/certificate-master.component';
import { AppetiteForRiskMasterComponent } from './Masters/appetite-for-risk-master/appetite-for-risk-master.component';
import { BankAccountTypeMasterComponent } from './Masters/bank-account-type-master/bank-account-type-master.component';
import { FixedDepositLoanDetailsComponent } from './fixed-deposit-loan-details/fixed-deposit-loan-details.component';
import { DepositTypeComponent } from './Masters/deposit-type/deposit-type.component';
import { DisbursementMasterComponent } from './Masters/disbursement-master/disbursement-master.component';
import { FixedAssetComponent } from './Masters/fixed-asset/fixed-asset.component';
import { FolderMasterComponent } from './Masters/folder-master/folder-master.component';
import { TestConvertorFileComponent } from './test-convertor-file/test-convertor-file.component';
import { MutualFundServiceProviderComponent } from './mutual-fund-service-provider/mutual-fund-service-provider.component';
import { FuelTypeMasterComponent } from './Masters/fuel-type-master/fuel-type-master.component';
import { GoldOrnamentsMasterComponent } from './Masters/gold-ornaments-master/gold-ornaments-master.component';
import { GoldReasonMasterComponent } from './Masters/gold-reason-master/gold-reason-master.component';
import { IncorporationTypeMasterComponent } from './Masters/incorporation-type-master/incorporation-type-master.component';
import { InsuranceTypeMasterComponent } from './Masters/insurance-type-master/insurance-type-master.component';
import { IntersetPayoutMasterComponent } from './Masters/interset-payout-master/interset-payout-master.component';
import { LifestageMasterComponent } from './Masters/lifestage-master/lifestage-master.component';
import { LoantypeMasterComponent } from './Masters/loantype-master/loantype-master.component';
import { MaturityinstructorMasterComponent } from './Masters/maturityinstructor-master/maturityinstructor-master.component';
import { MovableassetMasterComponent } from './Masters/movableasset-master/movableasset-master.component';
import { ProductMasterComponent } from './Masters/product-master/product-master.component';
import { ProjectWorkSpanMasterComponent } from './Masters/project-work-span-master/project-work-span-master.component';
import { ProtectionNeedMasterComponent } from './Masters/protection-need-master/protection-need-master.component';
import { RelationshipMasterComponent } from './Masters/relationship-master/relationship-master.component';
import { ServiceRequestTypeComponent } from './Masters/service-request-type/service-request-type.component';
import { ServiceProviderProductsMasterComponent } from './Masters/service-provider-products-master/service-provider-products-master.component';
import { SubProductMasterComponent } from './Masters/sub-product-master/sub-product-master.component';
import { WorkflowmasterComponent } from './Masters/workflowmaster/workflowmaster.component';
import { WorkflowstatemasterComponent } from './Masters/workflowstatemaster/workflowstatemaster.component';
import { AssignRightMasterComponent } from './Masters/assign-right-master/assign-right-master.component';
import { ThroughRouterComponent } from './Components/through-router/through-router.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { AcknowledgeCustomerComponent } from './Components/acknowledge-customer/acknowledge-customer.component';
import { CommissionmasterComponent } from './Masters/commissionmaster/commissionmaster.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SPDetailsComponent } from './Ticket Management/spdetails/spdetails.component';
import { BADetailsComponent } from './Ticket Management/badetails/badetails.component';
import { AdmindashboarddetailsComponent } from './admindashboarddetails/admindashboarddetails.component';
import { TmdashboarddetailsComponent } from './tmdashboarddetails/tmdashboarddetails.component';
import { CustomerdashboarddetailsComponent } from './customerdashboarddetails/customerdashboarddetails.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    ForgotpasswordComponent,
    UserRegistrationComponent,
    SignupComponent,
    SidebarComponent,
    CustomerDashboardComponent,
    BusinessLoanComponent,
    AdminDashboardComponent,
    ServiceTypeComponent,
    ServiceProviderRegistrationComponent,
    CountryComponent,
    StateMasterComponent,
    DistrictMasterComponent,
    CityMasterComponent,
    ServiceProvidersComponent,
    TicketManagerDashboardComponent,
    SendServiceRequestComponent,
    UserComponent,
    NewServiceComponent,
    SpdashboardComponent,
    EmployeesComponent,
    InboxComponent,
    DeleteitemsComponent,
    SentitemsComponent,
    FileRequestsComponent,
    AllfilesComponent,
    ChatComponent,
    AcceptfriendComponent,
    GroupMasterComponent,
    GroupMemberMasterComponent,
    RoleComponent,
    ReadmailComponent,
    AllFoldersComponent,
    EmployeeDashboardComponent,
    TrackComponent,
    SetpasswordComponent,
    FooterComponent,
    ChatImageComponent,
    VehicleloanformComponent,
    SmallscaleloanComponent,
    SuretyLoanformComponent,
    FixedassetloanComponent,
    GoldloanComponent,
    EducationloanComponent,
    ProjectloanComponent,
    HomeloanformComponent,
    BusinessAssociateRegistartionComponent,
    BusinessAssociateDashBoardComponent,
    BusinessloandetailsComponent,
    TestworkflowComponent,
    SbacountComponent,
    VehicleloandetailsComponent,
    SmallscaleloandetailsComponent,
    SuretyloandetailsComponent,
    GoldloandetailsComponent,
    EducationdetailsComponent,
    SbaccountproposalComponent,
    RegapprovedlistComponent,
    LoanapplicationapprovedlistComponent,
    LoanDocApprovedlistComponent,
    LoanDisApprovedlistComponent,
    DisburseLoanComponent,
    LoanapplicationproposalComponent,
    SanctionedLoansComponent,
    VehicleloandetailsComponent,
    DocumnetviewComponent,
    ProductlistComponent,
    LoanServiceprovidersComponent,
    FixedassetloandetailsComponent,
    ProjectloandetailsComponent,
    MutualfundComponent,
    HomeloandetailsComponent,
    HomeInsuranceComponent,
    InsuranceServiceProvidersComponent,
    HomeInsuranceDetailsComponent,
    MotorInsuranceComponent,
    LifeInsuranceComponent,
    DataLifeInsuranceComponent,
    HealthInsuranceComponent,
    AccidentInsuranceComponent,
    BusinesspartnerComponent,
    TouComponent,
    PrivacyComponent,
    ConsentComponent,
    MutualfunddetailsComponent,
    AccidentInsuranceDetailsComponent,
    PpuRegListComponent,
    PpuLoandocumentationComponent,
    PpuCustomerListComponent,
    MutualfunddetailsComponent,
    HealthinsurancedetailsComponent,
    TermlifeinsuranceComponent,
    TermlifeinsurancedetailsComponent,
    MotorInsuranceDetailsComponent,
    ProfileUpdateComponent,
    BusinessAssociateBankDetailsComponent,
    FileViewComponent,
    BALoansApprovedListComponent,
    PreviewloandetailsComponent,
    OtherDashboardComponent,
    FixedDepositComponent,
    DepartmentmasterComponent,
    DesignationmasterComponent,
    FamilytypemasterComponent,
    PreviewinsurancedetailsComponent,
    SearchPipe,
    PPUDashboardComponent,
    MenuMasterComponent,
    CasteMasterComponent,
    OccupationMasterComponent,
    QualificationMasterComponent,
    GenderMasterComponent,
    ReligionMasterComponent,
    MaritalstatusMasterComponent,
    CertificateMasterComponent,
    AppetiteForRiskMasterComponent,
    BankAccountTypeMasterComponent,
    FixedDepositLoanDetailsComponent,

    DepositTypeComponent,

    DisbursementMasterComponent,

    FixedAssetComponent,

    FolderMasterComponent,

    TestConvertorFileComponent,
    MutualFundServiceProviderComponent,

    FuelTypeMasterComponent,

    GoldOrnamentsMasterComponent,

    GoldReasonMasterComponent,

    IncorporationTypeMasterComponent,

    InsuranceTypeMasterComponent,

    IntersetPayoutMasterComponent,

    LifestageMasterComponent,

    LoantypeMasterComponent,

    MaturityinstructorMasterComponent,

    MovableassetMasterComponent,

    ProductMasterComponent,

    ProjectWorkSpanMasterComponent,

    ProtectionNeedMasterComponent,

    RelationshipMasterComponent,

    ServiceRequestTypeComponent,

    ServiceProviderProductsMasterComponent,

    SubProductMasterComponent,

    WorkflowmasterComponent,

    WorkflowstatemasterComponent,

    AssignRightMasterComponent,

    ThroughRouterComponent,

    ProductsPageComponent,

    AcknowledgeCustomerComponent,

    CommissionmasterComponent,

    SPDetailsComponent,

    BADetailsComponent,

    AdmindashboarddetailsComponent,

    TmdashboarddetailsComponent,

    CustomerdashboarddetailsComponent,



 
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxDocViewerModule,
    MatSlideToggleModule,
    MatSliderModule,
    NgMultiSelectDropDownModule.forRoot(),
    PdfViewerModule,
    WebcamModule,
    SignaturePadModule,
    ImageCropperModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DatePipe, MessageService, AppGlobals, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

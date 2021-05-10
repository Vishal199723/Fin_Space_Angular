import { PreviewloandetailsComponent } from './previewloandetails/previewloandetails.component';
import { AccidentInsuranceComponent } from './Insurance/accident-insurance/accident-insurance.component';
import { HealthInsuranceComponent } from './Insurance/health-insurance/health-insurance.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { ProjectloandetailsComponent } from './projectloandetails/projectloandetails.component';
import { FixedassetloandetailsComponent } from './fixedassetloandetails/fixedassetloandetails.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { GoldloandetailsComponent } from './goldloandetails/goldloandetails.component';
import { SuretyloandetailsComponent } from './suretyloandetails/suretyloandetails.component';
import { SmallscaleloandetailsComponent } from './smallscaleloandetails/smallscaleloandetails.component';
import { BusinessloandetailsComponent } from './businessloandetails/businessloandetails.component';
import { HomeloanformComponent } from './homeloanform/homeloanform.component';
import { ProjectloanComponent } from './projectloan/projectloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { FixedassetloanComponent } from './fixedassetloan/fixedassetloan.component';
import { SmallscaleloanComponent } from './smallscaleloan/smallscaleloan.component';
import { SuretyLoanformComponent } from './surety-loanform/surety-loanform.component';
import { VehicleloanformComponent } from './vehicleloanform/vehicleloanform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ServiceProvidersComponent } from './Ticket Management/service-providers/service-providers.component';
import { TicketManagerDashboardComponent } from './ticket-manager-dashboard/ticket-manager-dashboard.component';
import { SendServiceRequestComponent } from './Ticket Management/send-service-request/send-service-request.component';
import { CityMasterComponent } from './Masters/city-master/city-master.component';
import { CountryComponent } from './Masters/country/country.component';
import { DistrictMasterComponent } from './Masters/district-master/district-master.component';
import { StateMasterComponent } from './Masters/state-master/state-master.component';
import { UserComponent } from './Masters/user/user.component';
import { ServiceProviderRegistrationComponent } from './Ticket Management/service-provider-registration/service-provider-registration.component';
import { NewServiceComponent } from './Ticket Management/new-service/new-service.component';
import { SpdashboardComponent } from './Ticket Management/spdashboard/spdashboard.component';
import { EmployeesComponent } from './Ticket Management/employees/employees.component';
import { FileRequestsComponent } from './BSafe/newComponents/file-requests/file-requests.component';
import { AllfilesComponent } from './BSafe/USRM/AllFiles/allfiles.component';
import { ChatComponent } from './BSafe/chat/chat.component';
import { AcceptfriendComponent } from './BSafe/newComponents/acceptfriend/acceptfriend.component';
import { RoleComponent } from './Masters/role/role.component';
import { GroupMasterComponent } from './Masters/group-master/group-master.component';
import { GroupMemberMasterComponent } from './Masters/group-member-master/group-member-master.component';
import { InboxComponent } from './Mail/Inbox/inbox.component';
import { ReadmailComponent } from './Mail/readmail/readmail.component';
import { AllFoldersComponent } from './BSafe/USRM/allfolders/allfolders.component';
import { EmployeeDashboardComponent } from './Ticket Management/employee-dashboard/employee-dashboard.component';
import { TrackComponent } from './Ticket Management/track/track.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { BusinessLoanComponent } from './LoanForms/business-loan/business-loan.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { BusinessAssociateRegistartionComponent } from './business-associate-registartion/business-associate-registartion.component';
import { BusinessAssociateDashBoardComponent } from './business-associate-dash-board/business-associate-dash-board.component';
import { TestworkflowComponent } from './Workflow/testworkflow/testworkflow.component';
import { SbacountComponent } from './Workflow/sbacount/sbacount.component';
//import { SbaccountproposalComponent } from './sbaccountproposal/sbaccountproposal.component';
import { RegapprovedlistComponent } from './ApprovedList/regapprovedlist/regapprovedlist.component';
import { LoanapplicationapprovedlistComponent } from './ApprovedList/loanapplicationapprovedlist/loanapplicationapprovedlist.component';
import { LoanDocApprovedlistComponent } from './ApprovedList/loan-doc-approvedlist/loan-doc-approvedlist.component';
import { LoanDisApprovedlistComponent } from './ApprovedList/loan-dis-approvedlist/loan-dis-approvedlist.component';
import { LoanapplicationproposalComponent } from './loanapplicationproposal/loanapplicationproposal.component';
import { SanctionedLoansComponent } from './sanctioned-loans/sanctioned-loans.component';
import { DisburseLoanComponent } from './disburse-loan/disburse-loan.component';
import { VehicleloandetailsComponent } from './vehicleloandetails/vehicleloandetails.component';
import { DocumnetviewComponent } from './documnetview/documnetview.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoanServiceprovidersComponent } from './loan-serviceproviders/loan-serviceproviders.component';
import { HomeloandetailsComponent } from './homeloandetails/homeloandetails.component';
import { HomeInsuranceComponent } from './Insurance/home-insurance/home-insurance.component';
import { InsuranceServiceProvidersComponent } from './insurance-service-providers/insurance-service-providers.component';
import { HomeInsuranceDetailsComponent } from './Insurance/home-insurance-details/home-insurance-details.component';
import { LifeInsuranceComponent } from './Insurance/life-insurance/life-insurance.component';
import { DataLifeInsuranceComponent } from './Insurance/data-life-insurance/data-life-insurance.component';
import { BusinesspartnerComponent } from './Components/businesspartner/businesspartner.component';
import { TouComponent } from './Components/tou/tou.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { ConsentComponent } from './Components/consent/consent.component';
import { PpuRegListComponent } from './ppu-reg-list/ppu-reg-list.component';
import { SbaccountproposalComponent } from './sbaccountproposal/sbaccountproposal.component';
import { PpuLoandocumentationComponent } from './ppu-loandocumentation/ppu-loandocumentation.component';
import { PpuCustomerListComponent } from './ppu-customer-list/ppu-customer-list.component';
import { MutualfunddetailsComponent } from './mutualfunddetails/mutualfunddetails.component';
import { AccidentInsuranceDetailsComponent } from './Insurance/accident-insurance-details/accident-insurance-details.component';
import { TermlifeinsuranceComponent } from './termlifeinsurance/termlifeinsurance.component';
import { TermlifeinsurancedetailsComponent } from './termlifeinsurancedetails/termlifeinsurancedetails.component';
import { MotorInsuranceComponent } from './Insurance/motor-insurance/motor-insurance.component';
import { MotorInsuranceDetailsComponent } from './Insurance/motor-insurance-details/motor-insurance-details.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { BusinessAssociateBankDetailsComponent } from './business-associate-bank-details/business-associate-bank-details.component';
import { FileViewComponent } from './file-view/file-view.component';
import { DeleteitemsComponent } from './Mail/DeletedItems/deleteitems/deleteitems.component';
import { SentitemsComponent } from './Mail/SentItems/sentitems.component';
import { BALoansApprovedListComponent } from './baloans-approved-list/baloans-approved-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OtherDashboardComponent } from './other-dashboard/other-dashboard.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';

import { ServiceTypeComponent } from './Masters/service-type/service-type.component';
import { DesignationmasterComponent } from './Masters/designationmaster/designationmaster.component';
import { FamilytypemasterComponent } from './Masters/familytypemaster/familytypemaster.component';
import { DepartmentmasterComponent } from './Masters/departmentmaster/departmentmaster.component';
import { PreviewinsurancedetailsComponent } from './previewinsurancedetails/previewinsurancedetails.component';
import { PPUDashboardComponent } from './ppudashboard/ppudashboard.component';
import { MenuMasterComponent } from './Masters/menu-master/menu-master.component';
import { CasteMasterComponent } from './Masters/caste-master/caste-master.component';
import { QualificationMasterComponent } from './Masters/qualification-master/qualification-master.component';
import { OccupationMasterComponent } from './Masters/occupation-master/occupation-master.component';
import { GenderMasterComponent } from './Masters/gender-master/gender-master.component';
import { ReligionMasterComponent } from './Masters/religion-master/religion-master.component';
import { MaritalstatusMasterComponent } from './Masters/maritalstatus-master/maritalstatus-master.component';
import { CertificateMasterComponent } from './Masters/certificate-master/certificate-master.component';
import { AppetiteForRiskMasterComponent } from './Masters/appetite-for-risk-master/appetite-for-risk-master.component';
import { BankAccountTypeMasterComponent } from './Masters/bank-account-type-master/bank-account-type-master.component';
import { FixedDepositLoanDetailsComponent } from './fixed-deposit-loan-details/fixed-deposit-loan-details.component';
import { DepositTypeComponent } from './Masters/deposit-type/deposit-type.component';
import { DisbursementMasterComponent } from './Masters/disbursement-master/disbursement-master.component';
import { FolderMasterComponent } from './Masters/folder-master/folder-master.component';
import { fixedasset } from './ViewModels/Masters';
import { FixedAssetComponent } from './Masters/fixed-asset/fixed-asset.component';
import { HealthinsurancedetailsComponent } from './Insurance/healthinsurancedetails/healthinsurancedetails.component';
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
import { SubProductMasterComponent } from './Masters/sub-product-master/sub-product-master.component';
import { WorkflowmasterComponent } from './Masters/workflowmaster/workflowmaster.component';
import { WorkflowstatemasterComponent } from './Masters/workflowstatemaster/workflowstatemaster.component';
import { ServiceProviderProductsMasterComponent } from './Masters/service-provider-products-master/service-provider-products-master.component';
import { AssignRightMasterComponent } from './Masters/assign-right-master/assign-right-master.component';
import { ThroughRouterComponent } from './Components/through-router/through-router.component';
import { AcknowledgeCustomerComponent } from './Components/acknowledge-customer/acknowledge-customer.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { CommissionmasterComponent } from './Masters/commissionmaster/commissionmaster.component';
import { SPDetailsComponent } from './Ticket Management/spdetails/spdetails.component';
import { BADetailsComponent } from './Ticket Management/badetails/badetails.component';
import { AdmindashboarddetailsComponent } from './admindashboarddetails/admindashboarddetails.component';
import { TmdashboarddetailsComponent } from './tmdashboarddetails/tmdashboarddetails.component';
import { CustomerdashboarddetailsComponent } from './customerdashboarddetails/customerdashboarddetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forgotpw', component: ForgotpasswordComponent },
  { path: 'userregistration', component: UserRegistrationComponent },
  { path: 'customerdashboard', component: CustomerDashboardComponent },
  { path: 'newservices', component: NewServiceComponent },
  { path: 'providers/:id', component: ServiceProvidersComponent },
  { path: 'tmdashboard', component: TicketManagerDashboardComponent },
  { path: 'sendservicerequest/:id', component: SendServiceRequestComponent },
  { path: 'sendservicerequest/:id', component: SendServiceRequestComponent },
  //Masters
  { path: 'citymaster', component: CityMasterComponent },
  { path: 'country', component: CountryComponent },
  { path: 'district', component: DistrictMasterComponent },
  { path: 'state', component: StateMasterComponent },
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  { path: 'groupmaster', component: GroupMasterComponent },
  { path: 'groupmembers', component: GroupMemberMasterComponent },
  { path: 'servicetype', component: ServiceTypeComponent },
  { path: 'designations', component: DesignationmasterComponent },
  { path: 'departments', component: DepartmentmasterComponent },
  { path: 'familytypes', component: FamilytypemasterComponent },

  { path: 'spdashboard', component: SpdashboardComponent },
  { path: 'serviceproviderregistration', component: ServiceProviderRegistrationComponent },
  { path: 'spemployee', component: EmployeesComponent },
  { path: 'filerequest', component: FileRequestsComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'readmail/:id', component: ReadmailComponent },
  { path: 'allfolders', component: AllFoldersComponent },
  { path: 'allsubfolders/:id', component: AllfilesComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'acceptfriendrequest/:id', component: AcceptfriendComponent },
  
  
  { path: 'edashboard', component: EmployeeDashboardComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'setpassword/:id', component: SetpasswordComponent },
  {  path:'businessloanform',component:BusinessLoanComponent},
  { path: 'vehecleloanform', component: VehicleloanformComponent },  
  { path: 'suretyloanform', component: SuretyLoanformComponent },  
  { path: 'smallscaleloanform', component: SmallscaleloanComponent },  
  { path: 'fixedassetloan', component: FixedassetloanComponent }, 
  { path: 'Goldloan', component: GoldloanComponent }, 
  { path: 'Educationloan', component: EducationloanComponent }, 
  { path: 'Projectloan', component: ProjectloanComponent }, 
  { path: 'homeloan', component: HomeloanformComponent }, 
  { path: 'bareg', component: BusinessAssociateRegistartionComponent }, 
  { path: 'badashboard', component: BusinessAssociateDashBoardComponent },
  { path: 'babdetails', component: BusinessAssociateBankDetailsComponent },
  { path: 'businessdetails', component: BusinessloandetailsComponent }, 
  { path: 'test', component: TestworkflowComponent }, 
  { path: 'testone', component: SbacountComponent }, 
  { path: 'empdashboard', component: EmployeeDashboardComponent }, 
  { path: 'vehicledetails', component: VehicleloandetailsComponent }, 
  { path: 'smallscaleloandetails', component: SmallscaleloandetailsComponent }, 
  { path: 'suretyloandetails', component: SuretyloandetailsComponent }, 
  { path: 'Goldloandetails', component: GoldloandetailsComponent }, 
  { path: 'Educationloandetails', component: EducationdetailsComponent }, 
  { path: 'sbaccntproposal', component: SbaccountproposalComponent }, 
  { path: 'appreg', component: RegapprovedlistComponent }, 
  { path: 'sbacc', component: LoanapplicationapprovedlistComponent }, 
  { path: 'loandoc', component: LoanDocApprovedlistComponent }, 
  { path: 'loandis', component: LoanDisApprovedlistComponent }, 
  { path: 'loanapplication', component: LoanapplicationproposalComponent },  
  { path: 'loandocumentation', component: SanctionedLoansComponent }, 
  { path: 'loandisbursement', component: DisburseLoanComponent },
  { path: 'loanproducts', component: ProductlistComponent },
  { path: 'loansp', component: LoanServiceprovidersComponent },
  { path: 'projectloandetails', component: ProjectloandetailsComponent },
  { path: 'Fixedassetloandetails', component: FixedassetloandetailsComponent },
  { path: 'vehicaldetails', component: VehicleloandetailsComponent },
  { path: 'viewdoc', component: DocumnetviewComponent },
  { path: 'Mutualfund', component: MutualfundComponent },
  { path: 'Homeloandetails', component: HomeloandetailsComponent },
  { path: 'HomeInsurance', component: HomeInsuranceComponent },
  { path: 'HomeInsuranceDetails', component: HomeInsuranceDetailsComponent },
  { path: 'insurancesp', component: InsuranceServiceProvidersComponent },
  { path: 'lifeInsurance', component: LifeInsuranceComponent },
  { path: 'dataLifeInsurance', component: DataLifeInsuranceComponent },
  {path:'termlifeinsurance', component: TermlifeinsuranceComponent},
  {path:'termlifeinsurancedetails', component: TermlifeinsurancedetailsComponent},
  { path: 'HealthInsurance', component: HealthInsuranceComponent },
  { path: 'HealthInsuranceDetails', component: HealthinsurancedetailsComponent },
  { path: 'AccidentInsurance', component: AccidentInsuranceComponent },
  { path: 'ppureglist', component: PpuRegListComponent },
  { path: 'businesspartneragreement', component:  BusinesspartnerComponent},   
  { path: 'termsofuse', component: TouComponent },   
  { path: 'privacy', component: PrivacyComponent },   
  { path: 'consent', component: ConsentComponent }, 
  { path: 'ppuloandocumentation', component: PpuLoandocumentationComponent },  
  { path: 'ppucustlist', component: PpuCustomerListComponent },  
  { path: 'mutualfunddetails', component: MutualfunddetailsComponent },
  { path: 'accidentinsurancedetails', component: AccidentInsuranceDetailsComponent },
  { path: 'MotorInsurance', component: MotorInsuranceComponent },
  { path: 'MotorInsurancedetails', component: MotorInsuranceDetailsComponent },
  { path: 'updateprofile', component: ProfileUpdateComponent },
  { path: 'fileview', component: FileViewComponent },
  { path: 'deleteditems', component: DeleteitemsComponent },
  { path: 'sentitems', component: SentitemsComponent },
  { path: 'baloanapprovedlist', component: BALoansApprovedListComponent },
  { path: 'previewloandetails/:id', component: PreviewloandetailsComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'otherdashboard', component: OtherDashboardComponent },
  { path: 'fdform', component: FixedDepositComponent },
  { path: 'previewinsurancedetails/:id', component: PreviewinsurancedetailsComponent },
  { path: 'ppudashboard', component: PPUDashboardComponent },
  { path: 'Menu', component: MenuMasterComponent },
  { path: 'Caste', component: CasteMasterComponent },
  { path: 'Qualification', component: QualificationMasterComponent },
  { path: 'Occupation', component: OccupationMasterComponent },
  { path: 'Gender', component: GenderMasterComponent },
  { path: 'Religion', component: ReligionMasterComponent },
  { path: 'Maritalstatus', component: MaritalstatusMasterComponent },
  { path: 'Certificate', component: CertificateMasterComponent },
  { path: 'AppetiteForRisk', component: AppetiteForRiskMasterComponent },
  { path: 'BankAccountType', component: BankAccountTypeMasterComponent },
  { path: 'DepositType', component: DepositTypeComponent },
  { path: 'Disbursement', component: DisbursementMasterComponent },
  { path: 'Folders', component: FolderMasterComponent },
  { path: 'fixedasset', component: FixedAssetComponent },
  { path: 'testconverter', component: TestConvertorFileComponent },

  { path: 'Mutualfundsp', component: MutualFundServiceProviderComponent },
  { path: 'FueltypeMaster', component: FuelTypeMasterComponent },
  { path: 'Goldornament', component: GoldOrnamentsMasterComponent },
  { path: 'fdloandetails', component: FixedDepositLoanDetailsComponent },
  { path: 'GoldReason', component: GoldReasonMasterComponent },
  { path: 'IncorporationType', component: IncorporationTypeMasterComponent },
  { path: 'InsuranceType', component: InsuranceTypeMasterComponent },
  { path: 'IntersetPayout', component: IntersetPayoutMasterComponent},
  { path: 'LifeStage', component: LifestageMasterComponent},
  { path: 'loanType', component: LoantypeMasterComponent},
  { path: 'Maturityinstructor', component: MaturityinstructorMasterComponent},
  { path: 'Movableasset', component: MovableassetMasterComponent},
  { path: 'Product', component: ProductMasterComponent},
  { path: 'projectWork', component: ProjectWorkSpanMasterComponent},
  { path: 'Protection', component: ProtectionNeedMasterComponent},
  { path: 'Relationship', component: RelationshipMasterComponent},
  { path: 'RequestType', component: ServiceRequestTypeComponent},
  { path: 'Subproduct', component: SubProductMasterComponent},
  { path: 'Workflow', component: WorkflowmasterComponent},
  { path: 'Workflowstate', component: WorkflowstatemasterComponent},
  { path: 'Providerproducts', component: ServiceProviderProductsMasterComponent},
  { path: 'AssignRightMaster', component: AssignRightMasterComponent},
  { path: 'throughFlow', component: ThroughRouterComponent},
  { path: 'Ack', component: AcknowledgeCustomerComponent},
  { path: 'ProductsPage', component: ProductsPageComponent},

  { path: 'terms', component: TouComponent },
  { path: 'privacy', component: PrivacyComponent },


  { path: 'occupations', component: OccupationMasterComponent },
  { path: 'appetitemaster', component: AppetiteForRiskMasterComponent },
  { path: 'assignrights', component: AssignRightMasterComponent },
  { path: 'bankaccounttype', component: BankAccountTypeMasterComponent },
  { path: 'castemaster', component: CasteMasterComponent },
  { path: 'certificcatemaster', component: CertificateMasterComponent },
  { path: 'deposittype', component: DepositTypeComponent },
  { path: 'disbursment', component: DisbursementMasterComponent },
  { path: 'fixedassests', component: FixedAssetComponent },
  { path: 'foldermaster', component: FolderMasterComponent },
  { path: 'fueltype', component: FuelTypeMasterComponent },
  { path: 'genders', component: GenderMasterComponent },
  { path: 'goldornaments', component: GoldOrnamentsMasterComponent },
  { path: 'goldreason', component: GoldReasonMasterComponent },
  { path: 'incorporationtypes', component: IncorporationTypeMasterComponent },
  { path: 'insurancetypes', component: InsuranceTypeMasterComponent },
  { path: 'interestpayouts', component: IntersetPayoutMasterComponent },
  { path: 'lifestages', component: LifestageMasterComponent },
  { path: 'laontypes', component: LoantypeMasterComponent },
  { path: 'maritualstatus', component: MaritalstatusMasterComponent },
  { path: 'menumaster', component: MenuMasterComponent },
  { path: 'movableassests', component: MovableassetMasterComponent },

  { path: 'productmaster', component: ProductMasterComponent },
  { path: 'projectworkspan', component: ProjectWorkSpanMasterComponent },
  { path: 'protectioneeds', component: ProtectionNeedMasterComponent },
  { path: 'qualificatons', component: QualificationMasterComponent },
  { path: 'relationships', component: RelationshipMasterComponent },
  { path: 'religions', component: ReligionMasterComponent },

  { path: 'serivceproviderproducts', component: ServiceProviderProductsMasterComponent },
  { path: 'servicerequesttypes', component: ServiceRequestTypeComponent },

  { path: 'subproducts', component: SubProductMasterComponent },
  { path: 'servicetypes', component: ServiceTypeComponent },

  { path: 'workflowmaster', component: WorkflowmasterComponent },
  { path: 'workflowstates', component: WorkflowstatemasterComponent },

  { path: 'commissionmaster', component: CommissionmasterComponent },

  { path: 'spapproval', component: SPDetailsComponent },
  { path: 'baapproval', component: BADetailsComponent },
  { path: 'admindashboarddetails/:id', component: AdmindashboarddetailsComponent },
  { path: 'TMdashboarddetails/:id', component: TmdashboarddetailsComponent },
  { path: 'customerdashboarddetails/:id', component: CustomerdashboarddetailsComponent },



];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: "enabled"
    })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

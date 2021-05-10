import { AbstractType } from '@angular/core';

export class familytype {
    FamilyTypeId: number;
    FamilyType: any;
    CreatedBy: any;
    CreatedOn: any;
    ModifiedBy: any;
    ModifiedOn: any;
}
export class Designation{
    DesignationId:number;
    DesignationName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Menumaster{
    MenuIdentity:number;
    MenuID:any;
    MenuName:any;   
    Parent_MenuID:any;
    User_Role:any;
    MenuFileName:any;
    MenuURL:any;
    USE_YN:boolean;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class CasteVM {
    Id: number;
    CasteName: any;
    CreatedBy: any;
    CreatedOn: any;
    ModifiedBy: any;
    ModifiedOn: any;
}
export class Qualification{
    QualificationId:number;
    QualificationName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Occupation{
    OccupationId:number;
    OccupationName:any;
    
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Gender{
    GenderId:number;
    GenderName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class maritalstatus{
    MaritalStatusId:number;
    MaritalStatus:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class religion{
    ReligionId:number;
    ReligionName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class AppetiteForRisk{
    Id:number;
    AppetiteForRiskName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class bankaccount{
    BankAccTypeId:number;
    AccountType:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class certificate{
    Id:number;
    CertificateName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class fixedasset{
    FixedAssetId:number;
    FixedAssetName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Depositetype{
    Id:number;
    Depositetype:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Disbursement{
    Id:number;
    Disbursement:any;
    CreatedBy:any;
    CreatedOn:any;
    
}
export class FolderMaster{
    Id : number
    FolderName:string
    Role:string
    CreatedBy:any
    CreatedOn:any
  
}
export class department{
    ID : number
    DepartmentName:string

}
export class Fueltype{
    Id:number;
    FuelType:any;
    CreatedBy:any;
    CreatedOn:any;   
}
export class Goldornaments{
    Id:number;
    Goldornaments:any;
    CreatedBy:any;
    CreatedOn:any;   
}
export class GoldReason{
    Id:number;
    Reasons:any;
    CreatedBy:any;
    CreatedOn:any;

}
export class Incorporation {
    Id:number;
    IncorporationName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Insurance {
    InsuranceTypeId:number;
    InsuranceType:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class Interset {
    Id:number;
    Deposittype:any;
    Interestpayout:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class loantypeVM {
    LoanTypeId:number;
    LoanType:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class lifestageVM {
    Id:number;
    LifeStageName:any;
    CreatedBy:any;
    CreatedOn:any;
 
}
export class InstructionVM {
    Id:number;
    MaturityInstruction:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class movableVM {
    MovableAssetId:number;
    MovableAssetName:any;
    CreatedBy:any;
    CreatedOn:any;
    ModifiedBy:any;
    ModifiedOn:any;
}
export class relationshipVM {
    Id:number;
    RelationShip:any;
    CreatedBy:any;
    LastUpdated:any;
  
}
export class ProtectionVM {
    Id:number;
    ProtectionNeedName:any;
    CreatedBy:any;
    CreatedOn:any;   
}
export class workspanVM {
    Id:number;
    ProjectWorkSpan:any;
    CreatedBy:any;
    CreatedOn:any; 
}
export class ProductVM {
    Id:number;
    ProductName:any;
    ProductDesc:any;
    CreatedBy:any;
    CreatedOn:any;   
}
export class ServicerequestVM {
    Id:number;
    ServiceTypeId:any;
    LoanTypeId:any;
    RequestName:any;
    LastUpdated:any;   
}
export class SpsubproductVM {
    Id:number;
    LoanTypeid:any;
    ProductId:any;
    SubProductName:any;
    SubProductDesc:any;   
    CreatedBy:any;
    CreatedOn:any;   
}
export class workflowVM {
    WorkflowMasterId:number;
    HostId:any;
    WorkflowName:any;
    WorkflowDescription:any;
    CreatedBy:any;   
    CreatedOn:any;
}
export class workflowstatetVM {
    WorkflowStateId:number;
    HostId:any;
    WorkflowId:any;
    RoleId:any;
    WorkflowStateName:any;   
    WorkflowStateDescription:any;
    CreatedBy:any;
    CreatedOn:any;
   
}
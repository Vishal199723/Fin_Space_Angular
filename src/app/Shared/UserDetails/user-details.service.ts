import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddNewFolder } from 'src/app/ViewModels/NewFolder';
import { AppGlobals } from 'src/app.Global';
import { UserDetails } from 'src/app/ViewModels/UserDetails';
import { Friend } from 'src/app/ViewModels/Friend';
import { Delete } from 'src/app/ViewModels/Delete';
import { ShareFileViaMailVM } from 'src/app/ViewModels/ShareFileViaMailVM';
import { ImportFromMailVW } from 'src/app/ViewModels/ImportFromMailVM';
import { Search } from 'src/app/ViewModels/Search';
import { DownloadFolderVM } from 'src/app/ViewModels/DownloadFolderVM';
import { RestoredataVM } from 'src/app/ViewModels/RestoredataVM';
import { UserId } from 'src/app/ViewModels/UserId';
import { IndividualChatDetails } from 'src/app/ViewModels/IndividualChatDetails';
import { ShareMulti } from 'src/app/ViewModels/ShareMulti';
import { MoveMultiFolder } from 'src/app/ViewModels/MoveMultiFolder';
import { FolderShareToUers } from 'src/app/ViewModels/FolderShareToUers';
import { MultiFolderShareVM } from 'src/app/ViewModels/MultiFolderShareVM';
import { DeleteMulit } from 'src/app/ViewModels/DeleteMulit';
import { ShareOnlyFileVM } from 'src/app/ViewModels/ShareOnlyFileVM';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient,private url: AppGlobals) { }
  
  getsubfolders(id) {
    return this.http.get(this.url.weburl + "/api/" + "UploadDocument/Getdocument/" + id);
  }
  getCurrentUSerImage(id){
    return this.http.get(this.url.weburl + "/api/" + "EnterPriseRegistration/GetCurrentUSerImage/" + id);

  }
  getAllUsers(id){
    return this.http.get(this.url.weburl + "/api/" +"User/GetAllUsers/" + id);
  }

  getbackdata(pid) {
    return this.http.get(this.url.weburl + "/api/" + "UploadDocument/GetBackdocument/" + pid);
  }
  getfolders(id) {
    return this.http.get(this.url.weburl + "/api/" + "FolderMasters/GetallFolder/" + id);
  }
  UpdateFolder(data: AddNewFolder) {
    return this.http.post(this.url.weburl + "/api/" + "FolderMasters/PostUpdateContent", data);
  }
  addNewFolder(data: AddNewFolder) {
    return this.http.post(this.url.weburl + "/api/" + "FolderMasters/PostFolderMaster", data);
  }

  deletefolder(aa) {
    return this.http.post(this.url.weburl + "/api/" + "FolderMasters/PostDeleteContent", aa);
  }
 
  friendlist(id) {
  return this.http.get(this.url.weburl + "/api/" + "FriendLists/GetFriendList/" + id);
}
SaveFrienddetails(data: Friend) {
  return this.http.post(this.url.weburl + "/api/" + "FriendLists/PostFriendList", data);
}

DeleteFiles(data: Delete) {
  return this.http.post(this.url.weburl + "/api/" + "FolderMasters/PostDeleteFiles", data);
}

sharefileviamail(data: ShareFileViaMailVM) {
  return this.http.post(this.url.weburl + "/api/" + "ShareFilesViaMail/ShareFilesThroughMail", data);

}
importfilefrommail(data: ImportFromMailVW) {
  return this.http.post(this.url.weburl + "/api/" + "ShareFilesViaMail/ImportFilesFromMail", data);

}


SearchFiles(data: Search) {
  return this.http.post(this.url.weburl + "/api/" + "Search/PostSearch", data);
}
AcceptReq(f) {
  return this.http.post(this.url.weburl + "/api/" + "FriendLists/AcceptRequest", f);
}

getpath(id) {
  return this.http.get(this.url.weburl + "/api/" + "Path/getpath/" + id);
}
updateretailstores(id) {
  return this.http.get(this.url.weburl + "/api/" + "ReturnedOrders/Updateretailstores/" + id);
}


getAllCustomers() {
  return this.http.get(this.url.weburl + "/api/" + "AuManagement/GetA_U_Management");
}
getAllCustomersApplication() {
  return this.http.get(this.url.weburl + "/api/" + "AuManagement/GetA_U_Management");
}

getProfileDetails(data) {
  return this.http.get(this.url.weburl + "/api/" + "AuManagement/GetA_U_Management/" + data);
}


getfoldersbydate(uid){
  return this.http.get(this.url.weburl + "/api/" + "FolderMasters/GetallFoldersByDate/" + uid);
}

getfoldersbyname(uid){
  return this.http.get(this.url.weburl + "/api/" + "FolderMasters/GetallFolderByName/" + uid);
}

getsubfoldersbydate(id) {
  return this.http.get(this.url.weburl + "/api/" + "UploadDocument/GetdocumentbyDate/" + id);
}

getsubfoldersbyname(id) {
  return this.http.get(this.url.weburl + "/api/" + "UploadDocument/GetdocumentbyName/" + id);
}

getCategories()
{
  return this.http.get(this.url.weburl + "/api/" + "AuRoleMaster/GetCategories");
}


downloadFolder(data:DownloadFolderVM){
  return this.http.post(this.url.weburl + "/api/" + "DownloadFolderorFile/PostDownloadFolder", data);
}


Getalldeletetrns(id){
  return this.http.get(this.url.weburl + "/api/" + 'FolderMasters/GetAllDeletedData/' + id);
}
PostRestoredata(data: RestoredataVM){
  return this.http.post(this.url.weburl + "/api/" + "FolderMasters/PostRestoredata", data);
}

//Chat
GetToUser(UserId) {
return this.http.get(this.url.weburl + "/api/" + "UserChat1/GetTouserDetails/"+ UserId);
}

saveuserChat(ChatDetail) {
return this.http.post(this.url.weburl + "/api/" + "ChatContract/PostUserChat", ChatDetail);
}

GetAllUsersExceptMe(data: UserId) {
return this.http.post(this.url.weburl + "/api/" + "UserChat1/GetAllUserExceptMe", data);
}

GetChatforParticularUser(id) {
return this.http.get(this.url.weburl + "/api/" + "ChatContract/GetChatmsg/" + id);
}

GetIndividualChatRecivedDetails(individual: IndividualChatDetails) {
return this.http.post(this.url.weburl + "/api/" + "ChatContract/RecivedIndividualChatDetails/", individual);
}

SharemultiFiles(data: ShareMulti) {
return this.http.post(this.url.weburl + "/api/" + "Mulit/MultiShareFiles", data);
}
MoveMultiFileFolders(data: MoveMultiFolder) {
return this.http.post(this.url.weburl + "/api/" + "Mulit/PostMoveMultiFolderOrDocument", data);
}
addExsistingMainFolderAndShare(data:FolderShareToUers){
return this.http.post(this.url.weburl + "/api/" + "ShareFileFolder/PostExsistingMainFolderShareTOUsers", data);
}
getAllSharingfolders(id) {
return this.http.get(this.url.weburl + "/api/" + "ShareFileFolder/GetallSharingFolder/" + id);
}
withdraw(id){
return this.http.post(this.url.weburl+"/api/ShareAllWithdraw/withdraw",id);
}
addMultigMainFolderAndShare(data: MultiFolderShareVM) {
return this.http.post(this.url.weburl + "/api/" + "ShareFileFolder/PostMultyMainFolderShareTOUsers", data);
}
shareExsistingSubFolder(data:FolderShareToUers){
return this.http.post(this.url.weburl + "/api/" + "ShareFileFolder/PostExsistingSubFolderShareTOUsers", data);
}

DeleteMore(data: DeleteMulit) {
return this.http.post(this.url.weburl + "/api/" + "Mulit/PostDeleteMore", data);
}
shareall(data: any){
return this.http.post(this.url.weburl+'/api/ShareFileFolder/shareall',data);
}

shareOnlyFile(data:ShareOnlyFileVM){
return this.http.post(this.url.weburl + "/api/" + "ShareFileFolder/PostSharingFileOnly", data);
}


getblocks(data:any){
return this.http.get(this.url.weburl+"/api/refer/getblocks/"+data);
}

getFileCount(id){
return this.http.get(this.url.weburl + "/api/" + "UploadDocument/GetFilesUploaded/"+id);
}

acceptfriendrequest(id){
return this.http.get(this.url.weburl+"/api/Account/AcceptFriend/"+id);
}

chacbackup(id){
return this.http.get(this.url.weburl+"/api/ChatContract/chatbackupfiles/"+id);
}

checkInstall(id){
return this.http.get(this.url.weburl+'/api/Account/checkInstall/'+id);
}

getfolderssearch(id) {
return this.http.post(this.url.weburl + "/api/" + "FolderMasters/Searchdata" ,id);
}
addclient(id){
  return this.http.post(this.url.weburl+"/api/Account/addnewClient",id);
  }

  getdataforsbaccount(id){
    return this.http.get(this.url.weburl+"/api/SBAccount/GetDataforSBAccount/"+id);
  }

  getloantypelist() {
    return this.http.get(this.url.weburl + "/api/Products/GetLoanTypes");
  }
  getinsurancelist(){
    return this.http.get(this.url.weburl + "/api/Products/GetInsuranceTypes");

  }
  SavePdf(id){
    return this.http.post(this.url.weburl+"/api/SubmitLoanForm/SaveDocStringAsPDF",id);
  }

  SavePdfofCommisionDetails(id){
    return this.http.post(this.url.weburl+"/api/SubmitLoanForm/DownloadCommissionDetails",id);
  }
  postsaveenquiryform(id){
    return this.http.post(this.url.weburl+"/api/AdminDashboard/PostSaveEnquityForm",id);
  }

  getinvestmentslist(){
    return this.http.get(this.url.weburl + "/api/Products/GetInvestmentsTypes");
  }
}

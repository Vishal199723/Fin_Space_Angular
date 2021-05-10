import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteMulit } from 'src/app/ViewModels/DeleteMulit';
import { ShareOnlyFileVM } from 'src/app/ViewModels/ShareOnlyFileVM';
import { CloseRequest } from 'src/app/ViewModels/closerequest';
import { SendRequest } from 'src/app/ViewModels/SendRequest';
import { AppGlobals } from 'src/app.Global';
import { UserEncData } from 'src/app/ViewModels/UserEncData';

@Injectable({
  providedIn: 'root'
})
export class FilerequestService {

    constructor(private http:HttpClient,private url:AppGlobals) { }

  DeleteMore(data: DeleteMulit) {
    return this.http.post(this.url.weburl + "/api/Mulit/PostDeleteMore", data);
  }
      
  shareOnlyFile(data:ShareOnlyFileVM){
    return this.http.post(this.url.weburl + "/api/ShareFileFolder/PostSharingFileOnly", data);
  }
  //login



getuserfolders(uid){
  return this.http.get(this.url + "/api/Recipient/GetUserFolders/" + uid);
}
getopenrequest(uid){
  return this.http.get(this.url + "/api/Recipient/GetOpenedFileRequests/" + uid);
}
getcloserequest(uid){
  return this.http.get(this.url + "/api/Recipient/GetClosedFileRequests/" + uid);
}
sendFileRequest(data:SendRequest){
  return this.http.post(this.url + "/api/Recipient/PostSaveRequestedFile", data);
}
getextratSeqlink(data){
  return this.http.post(this.url + "/api/Recipient/PostUserlandingPage" , data);
}
getfolders(id) {
  return this.http.get(this.url + "/api/FolderMasters/GetallFolder/" + id);
}
getuseremailid(uid){
  return this.http.get(this.url + "/api/Recipient/GetEmailId/" + uid);
}
Getrequestedfile(data:UserEncData){
  return this.http.post(this.url + "/api/Recipient/RequestedFilesDetails" , data);
}
getbackdata(pid) {
  return this.http.get(this.url + "/api/UploadDocument/GetBackdocument/" + pid);
}
closefilerequest(fileid:CloseRequest){
  return this.http.post(this.url + "/api/Recipient/GetupdatedCloseFileRequests", fileid);
}
openfilerequest(fileid:CloseRequest){
  return this.http.post(this.url + "/api/Recipient/GetUpdatedOpenFileRequests" ,fileid);
}
}

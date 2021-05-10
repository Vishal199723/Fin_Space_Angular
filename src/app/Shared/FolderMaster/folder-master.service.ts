import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { FolderMaster } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class FolderMasterService {

  constructor(private http:HttpClient, private _urls: AppGlobals) { }

  saveFolder(data:FolderMaster){
    return this.http.post(this._urls.weburl+"/api/FolderMaster/PostSaveFolder",data);
  }

  getAllFolders(){
    return this.http.get(this._urls.weburl+"/api/FolderMaster/GetAllFolders");
  }

  deleteFolder(id: number){
    return this.http.get(this._urls.weburl+"/api/FolderMaster/DeleteFolderData/"+ id);
  }

  UpdateFolder(data:FolderMaster){
    return this.http.post(this._urls.weburl+"/api/FolderMaster/PutFolders",data);
  }
}

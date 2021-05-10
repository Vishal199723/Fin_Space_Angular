import { Injectable } from '@angular/core';
import { MoveFolderOrDocument } from 'src/app/ViewModels/MoveFolderOrDocument';
import { MoveDocData } from 'src/app/ViewModels/MoveDocData';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app.Global';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor(private http:HttpClient,private url: AppGlobals ) { }
  saveMoveFolderOrDocument(data: MoveFolderOrDocument) {
    return this.http.post(this.url.weburl + "/api/MoveFolderOrDocument/PostMoveFolderOrDocument", data);
  }
  moveDocument(data: MoveDocData){
    return this.http.post(this.url.weburl + "/api/MoveFolderOrDocument/PostMoveDocument", data);
  }
}

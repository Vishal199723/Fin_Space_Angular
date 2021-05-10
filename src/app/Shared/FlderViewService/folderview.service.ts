import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FolderviewService {

  readonly url = "http://localhost:8540";
 
  //readonly url = "https://bsafeapi.azurewebsites.net";

  constructor(private http: HttpClient) { }

  viewDocument(data){
    return this.http.post(this.url +"/api/UploadDocument/DownloadandViewDocument",data);
  }
  GetDataUsed(id){
    return this.http.get(this.url +"/api/UploadDocument/PostAvailabledataAsync/"+id);
  }
}
          
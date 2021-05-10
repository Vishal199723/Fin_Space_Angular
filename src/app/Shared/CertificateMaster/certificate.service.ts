import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { certificate } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  saveCertificate(Certificate: certificate) {
    return this.http.post(this._urls.weburl + "/api/CertificateMaster/PostSaveCertificate", Certificate);
  }

  getCertificates() {
    return this.http.get(this._urls.weburl + "/api/CertificateMaster/GetAllCertificate");
  }

  UpdateCertificateRow(id:certificate){
    return this.http.post(this._urls.weburl + "/api/CertificateMaster/PutCertificate" , id);
  }

  deleteRoledata(id:number){
    return this.http.get(this._urls.weburl +"/api/CertificateMaster/DeleteCertificateData/"+ id);
  }
}

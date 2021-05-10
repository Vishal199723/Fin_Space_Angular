import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app.Global';
import { InstructionVM } from 'src/app/ViewModels/Masters';

@Injectable({
  providedIn: 'root'
})
export class MaturityinstructorService {

  constructor(private http:HttpClient,private _urls: AppGlobals ) { }
  savematinstructor(matinstructor: InstructionVM) {
    return this.http.post(this._urls.weburl + "/api/Maturityinstructor/PostMaturityinstructor", matinstructor);
  }

  getmatinstructors() {
    return this.http.get(this._urls.weburl + "/api/Maturityinstructor/GetMaturityinstructors");
  }

  UpdatematinstructorRow(id:InstructionVM){
    return this.http.post(this._urls.weburl + "/api/Maturityinstructor/PutMaturityinstructor" , id);
  }

  deleteInstructorsdata(id:number){
    return this.http.get(this._urls.weburl +"/api/Maturityinstructor/DeleteMaturityinstructor/"+ id);
  }
}

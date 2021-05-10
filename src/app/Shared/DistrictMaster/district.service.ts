import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { District } from 'src/app/ViewModels/District';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  //readonly rootUrl = "https://haspit.com/haspitapi";

  //readonly rootUrl = "http://localhost/haspitusrmapi";
  readonly rootUrl = "https://haspit.com/haspitapi";

  constructor(private http: HttpClient) { }
  saveDistrict(state: District) {
    return this.http.post(this.rootUrl + "/api/DistrictMaster/PostSaveDistrict", state);
  }

  getAllDistricts() {
    return this.http.get(this.rootUrl + "/api/DistrictMaster/GetDistricts");
  }

  getStatesFromCountryId(id:any){
    return this.http.get(this.rootUrl +"/api/DistrictMaster/GetStatesFromCountryId/" + id);
  }

  DistrictsFromStateId(id:any){
    return this.http.get(this.rootUrl +"/api/DistrictMaster/GetDistrictsFromStateId/" + id);
  }
  CitiesFromDistrictId(id:any){
    return this.http.get(this.rootUrl +"/api/DistrictMaster/GetCitiesFromDistrictId/" + id);
  }
  getRegionFromCountryId(id:any){
    return this.http.get(this.rootUrl +"/api/DistrictMaster/GetRegionsFromCountryId/" + id);
  }

  UpdateDistrictRow(id:District){
    return this.http.put(this.rootUrl + "/api/DistrictMaster/PutDistrict" , id);
  }

  deleteDistrict(id:number){
    return this.http.delete(this.rootUrl +"/api/DistrictMaster/DeleteDistrict/"+ id);
  }
  getDistrictsFromStateId(id:any){
    return this.http.get(this.rootUrl +"/api/DistrictMaster/GetDistrictsFromStateId/" + id);
  }

  getCitiesFromDistrictId(id:any){
    return this.http.get(this.rootUrl +"/api/DistrictMaster/GetCitiesFromDistrictId/" + id);
  }
}

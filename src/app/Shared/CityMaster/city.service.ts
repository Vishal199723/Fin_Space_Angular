import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/ViewModels/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 // readonly rootUrl = "https://haspit.com/haspitapi";

 // readonly rootUrl = "http://localhost/haspitusrmapi";

 readonly rootUrl = "https://haspit.com/haspitapi";

  constructor(private http: HttpClient) { }
  saveCity(state: City) {
    return this.http.post(this.rootUrl + "/api/CityMaster/PostSaveCity", state);
  }

  getAllCities() {
    return this.http.get(this.rootUrl + "/api/CityMaster/GetCities");
  }

  UpdateCityRow(id:City){
    return this.http.put(this.rootUrl + "/api/CityMaster/PutCity" , id);
  }

  deleteCity(id:number){
    return this.http.delete(this.rootUrl +"/api/CityMaster/DeleteCity/"+ id);
  }
}

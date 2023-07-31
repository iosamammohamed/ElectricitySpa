import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointsService {
  private endpoints: any;

  constructor(private http: HttpClient) { }

  loadEndPoints() {
    return this.http.get('assets/Endpoints.json')
    .toPromise()
    .then(data => {
        this.endpoints = data;
      });
  }


  get ApiBaseUrl() {
    return this.endpoints.ApiBaseUrl;
  }

  get ElectricityUrl() {
    return this.endpoints.ElectricityUrl;
  }

  get GovsUrl() {
    return this.endpoints.GovsUrl;
  }

  get GovUrl() {
    return this.endpoints.GovUrl;
  }

  get CitiesUrl() {
    return this.endpoints.CitiesUrl;
  }
  get CityUrl() {
    return this.endpoints.CityUrl;
  }
  get AreasUrl() {
    return this.endpoints.AreasUrl;
  }




}

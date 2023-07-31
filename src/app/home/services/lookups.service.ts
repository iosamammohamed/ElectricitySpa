import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointsService } from './end-points.service';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private http: HttpClient, private endpointsService: EndPointsService) { }

  GetGovs(){
    return this.http.get(this.endpointsService.ApiBaseUrl + this.endpointsService.ElectricityUrl + this.endpointsService.GovsUrl);
  }

  GetCities(govId: number){
    return this.http.get(this.endpointsService.ApiBaseUrl + this.endpointsService.ElectricityUrl + this.endpointsService.GovUrl
      + "/" + govId +  this.endpointsService.CitiesUrl);
  }

  GetAreas(cityId: number){
    return this.http.get(this.endpointsService.ApiBaseUrl + this.endpointsService.ElectricityUrl + this.endpointsService.CityUrl
      + "/" + cityId +  this.endpointsService.AreasUrl);
  }

}

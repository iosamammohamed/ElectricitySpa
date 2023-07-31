import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndPointsService } from './end-points.service';
import { ElectricityFilter } from '../models/Electricity';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {

  constructor(private http: HttpClient, private endpointsService: EndPointsService) { }

  GetPagedResult(electricityFilter: ElectricityFilter){
    let params = new HttpParams();
    for (const key in electricityFilter) {
      if (electricityFilter.hasOwnProperty(key)) {
        const value = electricityFilter[key];
        if (Array.isArray(value)) {
          value.forEach(item => {
            params = params.append(key, item.toString());
          });
        }else{
          if (typeof value === 'string') {
            params = params.set(key, value);
          } else {
            params = params.set(key, String(value));
          }
        }
      }
    }
    return this.http.get(this.endpointsService.ApiBaseUrl + this.endpointsService.ElectricityUrl
      ,{params: params}
      );
  }

}

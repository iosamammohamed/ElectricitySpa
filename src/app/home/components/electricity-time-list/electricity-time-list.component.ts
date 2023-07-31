import { Component, OnInit } from '@angular/core';
import { State, StateValidator } from '../../models/State';
import { ElectricityFilter, PagedResult } from '../../models/Electricity';
import { ElectricityService } from '../../services/electricity.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LookupsService } from '../../services/lookups.service';
import { Area, City, Gov } from '../../models/Lookups';

@Component({
  selector: 'app-electricity-time-list',
  templateUrl: './electricity-time-list.component.html',
  styleUrls: ['./electricity-time-list.component.css']
})
export class ElectricityTimeListComponent implements OnInit {

  PagedResult!: PagedResult;
  PagedResultState!: State;

  totalRecords: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;

  StateValidator!: StateValidator;

  ElectricityFilter!: ElectricityFilter;

  Govs!: Gov[]
  GovsState!: State;

  Cities!: City[]
  CitiesState!: State;

  Areas!: Area[]
  AreasState!: State;


  constructor(private electricityService: ElectricityService, private lookupsService: LookupsService) {
    this.StateValidator = new StateValidator();
  }

  ngOnInit(): void {
    this.InitSubmitLogFilter();
    this.GetGovs();
    this.GetPagedResult();
  }

  InitSubmitLogFilter(){
    this.ElectricityFilter = new ElectricityFilter();
    this.ElectricityFilter.page = this.currentPage;
    this.ElectricityFilter.pageSize = this.pageSize;
  }

  GetPagedResult() {
    this.PagedResultState = State.Loading;
    this.electricityService
      .GetPagedResult(this.ElectricityFilter)
      .subscribe(
        (response) => {
          this.PagedResult = response as PagedResult;

          this.PagedResult.result.length > 0
            ? (this.PagedResultState = State.Success)
            : (this.PagedResultState = State.Empty);
          this.totalRecords = this.PagedResult.totalRecords;
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.PagedResultState = State.UnAuthorized;
          } else {
            this.PagedResultState = State.Failure;
          }
        }
      );
  }


  GetGovs(){
    this.GovsState = State.Loading;
    this.lookupsService
      .GetGovs()
      .subscribe(
        (response) => {
          this.Govs = response as Gov[];
          this.Govs.length > 0
            ? (this.GovsState = State.Success)
            : (this.GovsState = State.Empty);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.GovsState = State.UnAuthorized;
          } else {
            this.GovsState = State.Failure;
          }
        }
      );
  }

  GetCities(govId: number){
    this.CitiesState = State.Loading;
    this.lookupsService
      .GetCities(govId)
      .subscribe(
        (response) => {
          this.Cities = response as City[];
          this.Cities.length > 0
            ? (this.CitiesState = State.Success)
            : (this.CitiesState = State.Empty);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.CitiesState = State.UnAuthorized;
          } else {
            this.CitiesState = State.Failure;
          }
        }
      );
  }

  GetAreas(cityId: number){
    this.AreasState = State.Loading;
    this.lookupsService
      .GetAreas(cityId)
      .subscribe(
        (response) => {
          this.Areas = response as Area[];
          this.Areas.length > 0
            ? (this.AreasState = State.Success)
            : (this.AreasState = State.Empty);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.AreasState = State.UnAuthorized;
          } else {
            this.AreasState = State.Failure;
          }
        }
      );
  }




}

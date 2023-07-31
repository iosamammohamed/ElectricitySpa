export class PagedResult{
  result!: Result[];
  pageNumber!: number;
  pageSize!: number;
  totalRecords!: number;
}

export class Result{
  govID!: number;
  govName!: string;
  cityID!: number;
  cityName!: string;
  areaID!: number;
  areaName!: string;
  hourFrom!: number;
  minuteFrom!: number;
  hourTo!: number;
  minuteTo!: number;
}

export class ElectricityFilter{
  [key: string]: string | number  | null;
  page!: number| null;
  pageSize!: number| null;
  govId!: number| null;
  cityId!: number| null;
  areaId!: number| null;
  searchText!: string| null;
}

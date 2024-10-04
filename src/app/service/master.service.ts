import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Applcation } from '../model/application.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  addNewApplication(obj: Applcation) : Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication",obj);
  }
}

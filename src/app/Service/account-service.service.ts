import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {IAccountDetails}  from '../../../repo/AccountDetails'
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private url :string = "https://localhost:44352/api/DisplayInfo/9";
  constructor(private http:HttpClient) { }

  getmyData(): Observable<IAccountDetails[]> {

    return this.http.get<IAccountDetails[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {IServicesSubscribed}  from '../../../repo/ServicesSubscribed';

@Injectable({
  providedIn: 'root'
})
export class ServicesSubscribedService {

  private url :string = "https://localhost:44352/api/ServicesSubscribeds";
  constructor(private http:HttpClient) { }

  getmyServicesSubscribed(): Observable<IServicesSubscribed[]> {
    return this.http.get<IServicesSubscribed[]>(this.url);
  }
}

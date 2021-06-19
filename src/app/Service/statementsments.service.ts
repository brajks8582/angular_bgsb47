import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {IStatements}  from '../../../repo/Statements'
@Injectable({
  providedIn: 'root'
})
export class StatementsmentsService {
  private url :string = "https://localhost:44352/api/TransactionsAccount";
  constructor(private http:HttpClient) { }

  getmyStatements(): Observable<IStatements[]> {

    return this.http.get<IStatements[]>(this.url);
  }
}

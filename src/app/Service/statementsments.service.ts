import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {IStatements}  from '../../../repo/Statements';
@Injectable({
  providedIn: 'root'
})
export class StatementsmentsService {
  public mydata:string="";
  myMethod(data:string) {
    console.log("data from service =");
    console.log(data); 
    this.mydata =data;
    this.getmyStatements();
  }
  private url :string = "" ;
  constructor(private http:HttpClient) {
    console.log("url  = ");
    console.log(this.url);
   }

   
  getmyStatements(): Observable<IStatements[]> {
    this.url = "https://localhost:44352/api/TransactionsAccount" + this.mydata;
    console.log("url of get obeserbles = ");
    console.log(this.url);
    return this.http.get<IStatements[]>(this.url);
  }

  getmyMiniStatement(): Observable<IStatements[]> {
    this.url = "https://localhost:44352/api/TransactionsAccount/ministatement";
    console.log("url of get get my ministatement = ");
    console.log(this.url);
    return this.http.get<IStatements[]>(this.url);
  }

  getmyMonthlyStatement(): Observable<IStatements[]> {
    this.url = "https://localhost:44352/api/TransactionsAccount/january";
    console.log("url of get get my ministatement = ");
    console.log(this.url);
    return this.http.get<IStatements[]>(this.url);
  }
 
}

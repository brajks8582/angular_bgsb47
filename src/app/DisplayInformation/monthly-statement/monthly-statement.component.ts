import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {StatementsmentsService} from '../../Service/statementsments.service';
import {IStatements}  from '../../../../repo/Statements';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
@Component({
  selector: 'app-monthly-statement',
  templateUrl: './monthly-statement.component.html',
  styleUrls: ['./monthly-statement.component.css']
})
export class MonthlyStatementComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

  
}

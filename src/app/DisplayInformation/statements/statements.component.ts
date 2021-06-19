import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {StatementsmentsService} from '../../Service/statementsments.service';
import {IStatements}  from '../../../../repo/Statements'
@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent implements OnInit {
  public myStatements:any = [];
  constructor(private statementobj : StatementsmentsService) { }

  ngOnInit(): void {
    this.myStatements=this.statementobj.getmyStatements().subscribe(data=>this.myStatements=data);
  }

}

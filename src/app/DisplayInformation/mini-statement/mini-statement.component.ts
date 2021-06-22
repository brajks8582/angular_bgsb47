import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {StatementsmentsService} from '../../Service/statementsments.service';
import {IStatements}  from '../../../../repo/Statements';
@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {
  public myMiniStatement:any = [];
  constructor(private statementobj : StatementsmentsService) { }

  ngOnInit(): void {
    this.myMiniStatement=this.statementobj.getmyMiniStatement().subscribe(data=>this.myMiniStatement=data);
  }

}

import { Component, Input, OnInit, Output } from '@angular/core';
import {StatementsmentsService} from '../../Service/statementsments.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.css']
})
export class DisplayInformationComponent implements OnInit {
public displayReportsbtngrp=false;
public selectMonthDropdown=false;
public selectPeriod=false;
public primaryId=1;
public data:string ="June";
toggle = true;
status = 'Enable'; 
players = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemember",
  "Decemeber"
];

selected = "" ;
  
  update(e:any){
    this.selected = e.target.value;
  }

constructor(private router: Router, private route: ActivatedRoute,private myService: StatementsmentsService) {
    this.myService.myMethod(this.data);
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{let id =(params.get('selected'))})
  }
   
  btnDisplayMainClick(id:any){
    this.primaryId=id;
    if(id==1){
      this.displayReportsbtngrp =false;
      this.router.navigate(['AccountDetails'],{relativeTo:this.route});
    }
    else{
      this.data="ministatement";
      this.myService.myMethod(this.data);
      this.router.navigate(['MiniStatement'],{relativeTo:this.route});
      this.displayReportsbtngrp=true;
    }
    this.enableDisableRule();
  }


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  btnDisplayChildClick(id:number){
    switch(id){
      case 1:
        console.log("displaychild = 1");
        this.data="ministatement";
        this.router.navigate(['MiniStatement'],{relativeTo:this.route});
        break;

      case 2:
        console.log("displaychild = 2");
        this.selectMonthDropdown = true;
        break;

      case 4:
        console.log("displaychild = 3");
        this.router.navigate(['BalanceEnquiry'],{relativeTo:this.route});
        break;

      case 5:
        console.log("displaychild = 5");
        this.router.navigate(['ServicesSubscribed'],{relativeTo:this.route});
        break;
      default:
        console.log("bad selection");
      
    }
  }


  btnUpdateMonthlyStatement() {
    this.myService.myMethod(this.selected);
      this.router.navigate(['MonthlyStatement'],{relativeTo:this.route});
}
  enableDisableRule() {
    this.toggle = !this.toggle;
}

}

import { Component, Input, OnInit, Output } from '@angular/core';
import {StatementsmentsService} from '../../Service/statementsments.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.css']
})
export class DisplayInformationComponent implements OnInit {
public displayReportsbtn=false;
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
      this.displayReportsbtn =false;
      this.router.navigate(['AccountDetails'],{relativeTo:this.route});
    }
    else{
      this.data="";
      this.myService.myMethod(this.data);
      this.router.navigate(['Statements'],{relativeTo:this.route});
      this.displayReportsbtn=true;
    }
    this.enableDisableRule();
  }

  btnDisplayChildClick(id:number){
    
  }


  btnUpdateMonthlyStatement() {
    this.myService.myMethod(this.selected);
      this.router.navigate(['Statements'],{relativeTo:this.route});
}
  enableDisableRule() {
    this.toggle = !this.toggle;
}

}

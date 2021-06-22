import { Component, OnInit } from '@angular/core';
import { Observable  } from "rxjs/";
import {AccountServiceService} from '../../Service/account-service.service';
import {IAccountDetails} from '../../../../repo/AccountDetails';
@Component({
  selector: 'app-balance-enquiry',
  templateUrl: './balance-enquiry.component.html',
  styleUrls: ['./balance-enquiry.component.css']
})
export class BalanceEnquiryComponent implements OnInit {
  public myBalanceEnquiry:any =[];
  constructor(private serviceobj : AccountServiceService) { }

  ngOnInit(): void {
    this.myBalanceEnquiry=this.serviceobj.getmyData().subscribe(data=>this.myBalanceEnquiry=data);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable  } from "rxjs/";
import {AccountServiceService} from '../../Service/account-service.service';
import {IAccountDetails} from '../../../../repo/AccountDetails'
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  public myAccountDetails:any =[];
  constructor(private serviceobj : AccountServiceService) { 

  }

  ngOnInit(): void {
    this.myAccountDetails=this.serviceobj.getmyData().subscribe(data=>this.myAccountDetails=data);
  }

}

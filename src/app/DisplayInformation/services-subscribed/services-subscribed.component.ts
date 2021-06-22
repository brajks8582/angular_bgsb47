import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/';
import { map, catchError } from 'rxjs/operators';
import {ServicesSubscribedService} from '../../Service/services-subscribed.service';
import {IServicesSubscribed}  from '../../../../repo/ServicesSubscribed';
@Component({
  selector: 'app-services-subscribed',
  templateUrl: './services-subscribed.component.html',
  styleUrls: ['./services-subscribed.component.css']
})
export class ServicesSubscribedComponent implements OnInit {
  public myServices:any = [];
  constructor(private serviceobj : ServicesSubscribedService) { }

  ngOnInit(): void {
    this.myServices=this.serviceobj.getmyServicesSubscribed().subscribe(data=>this.myServices=data);
  }

}

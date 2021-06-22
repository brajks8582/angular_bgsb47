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
  public myServicevess:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}

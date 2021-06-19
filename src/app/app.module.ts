import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './DisplayInformation/account-details/account-details.component';
import { StatementsComponent } from './DisplayInformation/statements/statements.component';
import {AccountServiceService} from './Service/account-service.service';
import {HttpClientModule} from '@angular/common/http';
imports :[BrowserModule, HttpClientModule]

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    StatementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

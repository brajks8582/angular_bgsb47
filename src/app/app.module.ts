import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './DisplayInformation/account-details/account-details.component';
import { StatementsComponent } from './DisplayInformation/statements/statements.component';
import {AccountServiceService} from './Service/account-service.service';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LogoComponent } from './Layout/logo/logo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DisplayInformationComponent } from './DisplayInformation/display-information/display-information.component';
import { ServicesSubscribedComponent } from './DisplayInformation/services-subscribed/services-subscribed.component';
import { MiniStatementComponent } from './DisplayInformation/mini-statement/mini-statement.component';
import { MonthlyStatementComponent } from './DisplayInformation/monthly-statement/monthly-statement.component';
import { PeriodStatementComponent } from './DisplayInformation/period-statement/period-statement.component';
import { BalanceEnquiryComponent } from './DisplayInformation/balance-enquiry/balance-enquiry.component';
import { FormsModule } from '@angular/forms';
imports :[BrowserModule, HttpClientModule]


const appRoutes: Routes = [
  { path: 'account-details', component: AccountDetailsComponent },
  { path: 'Display-information', component: DisplayInformationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    StatementsComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HomepageComponent,
    DisplayInformationComponent,
    ServicesSubscribedComponent,
    MiniStatementComponent,
    MonthlyStatementComponent,
    PeriodStatementComponent,
    BalanceEnquiryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

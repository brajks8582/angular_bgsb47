import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './DisplayInformation/account-details/account-details.component';
import { StatementsComponent } from './DisplayInformation/statements/statements.component';
import {AccountServiceService} from './Service/account-service.service';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LogoComponent } from './Layout/logo/logo.component';
import { HomepageComponent } from './homepage/homepage.component';
imports :[BrowserModule, HttpClientModule]

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    StatementsComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

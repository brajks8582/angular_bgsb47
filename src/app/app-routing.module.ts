import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './DisplayInformation/account-details/account-details.component';
import { StatementsComponent } from './DisplayInformation/statements/statements.component';
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
import { TransactionComponent } from './Transaction/transaction/transaction.component';
import { TransactionDetailsComponent } from './Transaction/transaction-details/transaction-details.component';
import { TransactionAcknowledgementComponent } from './Transaction/transaction-acknowledgement/transaction-acknowledgement.component';
const routes: Routes = [{path: 'HomePage', component:HomepageComponent},
 {path:'AccountDetails', component:AccountDetailsComponent},
{path:"DisplayInformation", component: DisplayInformationComponent,
children: [
  {path: 'Statements',component: StatementsComponent},
  {path:'MiniStatement', component:MiniStatementComponent},
  {path:'MonthlyStatement', component:MonthlyStatementComponent},
  {path:'AccountDetails', component:AccountDetailsComponent},
  {path:'BalanceEnquiry',component:BalanceEnquiryComponent},
  {path:'PeriodStatement',component:PeriodStatementComponent},
  {path:'ServicesSubscribed',component:ServicesSubscribedComponent}
]}, 
{path:"Statements", component: StatementsComponent},
{path:'Transaction', component:TransactionComponent,
children: [
  {path: 'TransactionDetails',component: TransactionDetailsComponent},
  {path:'TransactionAck', component:TransactionAcknowledgementComponent},
]
},
{path:"**", component: HomepageComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 
 }
export const routingcomponents =[HomepageComponent,AccountDetailsComponent,DisplayInformationComponent,StatementsComponent,MiniStatementComponent,MonthlyStatementComponent,BalanceEnquiryComponent,ServicesSubscribedComponent,TransactionComponent,TransactionDetailsComponent,TransactionAcknowledgementComponent]
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


const routes: Routes = [{path: 'HomePage', component:HomepageComponent},
 {path:'AccountDetails', component:AccountDetailsComponent},
{path:"DisplayInformation", component: DisplayInformationComponent,
children: [
  {
     path: 'Statements',
     component: StatementsComponent
  },
  {path:'AccountDetails', component:AccountDetailsComponent}
]}, 

{path:"Statements", component: StatementsComponent},
{path:"**", component: HomepageComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: ‘reload’})],
  exports: [RouterModule]
})

export class AppRoutingModule {
 
 }
export const routingcomponents =[HomepageComponent,AccountDetailsComponent,DisplayInformationComponent,StatementsComponent]
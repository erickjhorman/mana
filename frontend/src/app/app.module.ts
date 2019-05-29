import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { LoginComponent } from './components/auth/login_principal/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { RequestResetComponent } from './components/auth/password-reset/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password-reset/response-reset/response-reset.component';
import {HttpClientModule} from '@angular/common/http'; //To import the service
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup/signup.service';
import { HomeComponent } from './components/home/home.component';
import {Route, RouterModule } from '@angular/router';
import { BeforeLoginService } from './services/canDeactive/before-login.service';
import { AfterLoginService } from './services/canDeactive/after-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CorouselSlideComponent } from './components/partials/corousel-slide/corousel-slide.component';

// /** Routes */
// const appRoutesAuth: Route [] = [
//   {path:'login', component:LoginComponent,  
//   canActivate: BeforeLoginService},
//   {path:'signup',component:SignupComponent,
//    canActivate: AfterLoginService },
//   {path:'dashboard',component:DashboardComponent},
//   {path:'request-password-reset',component:RequestResetComponent},
//   {path:'response-password-reset',component:ResponseResetComponent},
// ]

// const appHomeRutas: Route [] = [
//   {path: '', component: HomeComponent},
//   {path: 'home', component: HomeComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RequestResetComponent,
    ResponseResetComponent,
    HomeComponent,
    CorouselSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    NgbModule

  ],
  providers: [
    LoginService,
    SignupService,
    AfterLoginService,
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }

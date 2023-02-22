import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { MainSectionComponent } from './main-section/main-section.component';

import { UsersService } from './users/users.service';
import { UsersAuthService } from './users-auth.service';
import { UsersGaurdService } from './users-gaurd.service';
import { LoginGaurdService } from './login-gaurd.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInfoComponent,
    UserDetailsComponent,
    NavComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService, UsersAuthService, UsersGaurdService, LoginGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }

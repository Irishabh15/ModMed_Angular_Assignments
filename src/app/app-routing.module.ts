import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginGaurdService } from './login-gaurd.service';
import { LoginComponent } from './login/login.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { UsersGaurdService } from './users-gaurd.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGaurdService]},
  {path: 'main-section', component: MainSectionComponent, canActivate: [UsersGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

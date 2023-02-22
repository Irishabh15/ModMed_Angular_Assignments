import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  user:string = 'rishabh';
  pass:string = '12345';

  constructor(private route:Router, private router: ActivatedRoute, private userauth: UsersAuthService){}

  isAllowed:boolean = false;

  onSubmit(form: NgForm){
    if(this.user===form.value.username && this.pass===form.value.pass){
      // this.isAllowed = true;
      this.userauth.allowedOrNot = true;
      this.route.navigate(['/main-section'], {relativeTo: this.router});
    }

    form.reset();
  }
}

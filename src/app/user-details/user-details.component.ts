import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { UsersService } from '../users/users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  // providers: [UsersService]
})
export class UserDetailsComponent {

  constructor(private userinstance: UsersService){

  }

  @ViewChild('myForm') form: NgForm;
  @ViewChild('degree') dropdown: ElementRef;

  fullname:string;
  collegename:string;
  degree:string;
  specialization:string;

  onSubmit(){
    console.log(this.form);
    this.fullname = this.form.value.fullname;
    this.collegename = this.form.value.cname;
    this.degree = this.form.value.degreechoice;
    this.specialization = this.form.value.specialization;

    if(this.fullname!=null || this.collegename!=null || this.degree!=null || this.specialization!=null){
      this.userinstance.users.push(new User(this.fullname, this.collegename, this.degree, this.specialization));
      this.form.reset();
    }
    
    this.userinstance.printusersarray();
    // console.log(this.degree);
  }

  clearFields(){
    this.form.reset();
  }
}

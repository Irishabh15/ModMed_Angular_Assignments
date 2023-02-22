import { Component } from '@angular/core';
import { User } from '../User';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  users: User[];

  constructor(private userinstance: UsersService){
    this.users = userinstance.users;
    console.log(this.users);
  }
}

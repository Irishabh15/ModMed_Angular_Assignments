import { Component } from '@angular/core';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assignment1';

  isHidden:boolean = true;

  onLogin(){
    this.isHidden = false;
  }

  onLogout(){
    
  }
}

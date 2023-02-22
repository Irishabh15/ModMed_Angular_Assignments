import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No"),new User("Kabir", "GLA", "BTECH","No")];

  constructor() { }

  printusersarray(){
    this.users.forEach(user => {
      console.log(user);
    });
  }
  

}

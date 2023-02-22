import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersAuthService {

  allowedOrNot:boolean = false;
  
  constructor() { }
}

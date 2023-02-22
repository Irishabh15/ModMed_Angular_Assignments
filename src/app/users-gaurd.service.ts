import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersAuthService } from './users-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGaurdService implements CanActivate{

  constructor(private userauth: UsersAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.userauth.allowedOrNot;
  }

  

}

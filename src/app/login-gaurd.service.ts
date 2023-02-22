import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsersAuthService } from "./users-auth.service";

@Injectable()
export class LoginGaurdService implements CanActivate{

    constructor(private userauth: UsersAuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return !this.userauth.allowedOrNot;
    }
}
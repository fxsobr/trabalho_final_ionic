import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router, public jwtHelper: JwtHelperService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('access_token')) {
            if (this.jwtHelper.isTokenExpired()) {
                this.router.navigate(['/login']);
                return false;
            }
            console.log('Data e Hora de Expiração do Token: ', this.jwtHelper.getTokenExpirationDate());
            console.log('Token expirou? ', this.jwtHelper.isTokenExpired());
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}

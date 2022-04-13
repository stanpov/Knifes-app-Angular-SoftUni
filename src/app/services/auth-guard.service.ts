import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,UrlTree, RouterStateSnapshot } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private route:Router, private as: AuthService, public toast: HotToastService ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.as.isLoggedIn) {
      this.route.navigate(['login'])
      this.toast.warning('You are not allow to visit this page.You need to login first.')
      return false
    } else {
      return true
    }
  }
}

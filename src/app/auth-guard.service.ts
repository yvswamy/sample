import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isProfileExists = true;
    if (event) {
      isProfileExists = event.currentTarget['id'] ? false : true;
    }
    if (isProfileExists) {
      this.router.navigate(['/executive-summary']);
      return false;
    } else {
      return true;
    }
  }

}

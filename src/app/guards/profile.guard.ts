import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(
    private profileService: ProfileService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isUserRegistered = this.profileService.isUserRegistered;
    if (!isUserRegistered) {
      this.router.navigate(['/registration']);
      this._snackBar.open(
        'you should register first to access profile page',
        'Dismiss',
        { verticalPosition: 'top' }
      );
    }
    return isUserRegistered;
  }
}

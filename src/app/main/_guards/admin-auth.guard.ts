import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../_services/account.service";
import {UserType} from "../_models/IJWTPayload";

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard {
  constructor(public _accountService: AccountService, public router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    const jwtToken = this._accountService.getTokenDecoded();
    if (!jwtToken) {
      this.router.navigate(['/'])
      return false;
    }

    const userType: UserType | null = jwtToken.userType[0];
    if (!userType) {
      this.router.navigate(['/']);
      return false;
    }

    if (userType.authority && userType.authority === "ADMIN") {
      return true;
    }
    this.router.navigate(['/'])
    return false;
  }
}

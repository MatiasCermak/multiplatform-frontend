import { Injectable } from '@angular/core';
import {IUser} from "../_models/IUser";
import {AuthResourceService} from "../_resources/auth-resource.service";
import jwtDecode from "jwt-decode";
import {JWTPayload} from "../_models/IJWTPayload";
import {observable, Observable} from "rxjs";

const USER_STORAGE_KEY = "multiplatformUserStorage";
const JWT_STORAGE_KEY = "multiplatformJWTStorage";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account: IUser | null = null;
  private token: string = "";

  constructor(private _authService: AuthResourceService ) {

  }


  public performLogin(email: string, password: string) {
    return new Observable<boolean>( subscriber => { this._authService.auth({email, password}).subscribe(({jwttoken, user}) => {
      this.account = user;
      this.token = jwttoken;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.account));
      localStorage.setItem(JWT_STORAGE_KEY, this.token);
      subscriber.next(true);
    })});
  }

  public getAccount() {
    if(!this.account) {
      const storedAccount = localStorage.getItem(USER_STORAGE_KEY);
      if(!storedAccount) {
        return null;
      }

      try {
        this.account = JSON.parse(storedAccount);
      } catch (SyntaxError) {
        return null
      }
    }

    return this.account;
  }

  public getToken() {
    if(!this.token) {
      const storedToken = localStorage.getItem(JWT_STORAGE_KEY);
      if(!storedToken) {
        return "";
      }
      this.token = storedToken;
    }

    return this.token;
  }

  public getTokenDecoded() {
    const token = this.getToken();
    let jwtDecoded : JWTPayload | null = null;
    if(token) {
      try {
        jwtDecoded = jwtDecode(token);

      } catch (InvalidTokenError) {
        return jwtDecoded;
      }
    }
    return jwtDecoded
  }

  logout() {
    this.account = null;
    this.token = "";
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(JWT_STORAGE_KEY);
  }
}

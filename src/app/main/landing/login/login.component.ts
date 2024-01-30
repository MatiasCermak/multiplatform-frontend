import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../_services/account.service";
import {UserType} from "../../_models/IJWTPayload";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _service: AccountService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
      },
    );
  }

  submit() {
    console.log("Submitted")
    if (this.form.valid) {
      console.log(this.form.value);
      const {email, password} = this.form.value;
      this._service.performLogin(email, password).subscribe(() => {
        console.log(this._service.getToken());
        console.log(this._service.getAccount());
        const jwtToken = this._service.getTokenDecoded();
        if(!jwtToken) {
          return;
        }

        const userType : UserType | null = jwtToken.userType[0];
        if(!userType) {
          return;
        }

        if(userType.authority && userType.authority === "ADMIN") {
          this._router.navigate(['admin', 'partners'], {})
        }

        if(userType.authority && userType.authority === "USER") {
          this._router.navigate(['platform', 'home'], {})
        }
      })
    }
  }

  register() {
    this._router.navigate(['landing', 'register'], {})
  }
}

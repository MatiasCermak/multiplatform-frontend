import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IInterest} from "../../_models/IInterests";
import {AuthResourceService} from "../../_resources/auth-resource.service";
import {InterestResourceService} from "../../_resources/interest-resource.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  interestList: IInterest[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _service: AuthResourceService,
    private _interestService: InterestResourceService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.interestList = _interestService.list();

    this.form = this._fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        repeat_password: new FormControl('', [Validators.required]),
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        interests: new FormControl([], [Validators.required]),
      },
    );
  }

  login() {
    this._router.navigate(['landing', 'login'], {})
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log(this.form.value);
      const {email, password, first_name, last_name, interests} = this.form.value;
      this._service.register({email, password, name: first_name, last_name, interests}).subscribe( () => {
        this._router.navigate(['landing', 'login'], {})
      })

    }
  }
}

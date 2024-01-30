import { Component } from '@angular/core';
import {AccountService} from "../../_services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {

  constructor(private _accountService: AccountService, private route: Router) {
  }

  logout() {
    this._accountService.logout();
    this.route.navigate(["landing", "login"])
  }
}

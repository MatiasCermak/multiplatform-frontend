import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private _router: Router) {
    if (this._router.url == '/') {
      this._router.navigate(['welcome']);
    }
  }
}

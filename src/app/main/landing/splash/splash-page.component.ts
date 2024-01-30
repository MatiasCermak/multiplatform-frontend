import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
  standalone: true,
})
export class SplashPageComponent implements OnInit {
  constructor(private _router: Router) {
    setTimeout(() => {
      this._router.navigate(['landing/login']);
    }, 3000);
  }

  ngOnInit(): void {}
}

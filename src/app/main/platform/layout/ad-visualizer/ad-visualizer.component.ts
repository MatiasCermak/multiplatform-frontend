import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../../_services/account.service";
import {IAdvertisement} from "../../../_models/IAdvertisement";

@Component({
  selector: 'ad-visualizer',
  templateUrl: './ad-visualizer.component.html',
  styleUrls: ['./ad-visualizer.component.css'],
  host: { class: 'row align-content-between h-100' },
})
export class AdVisualizerComponent {
  @Input() ads: IAdvertisement[] = [];

  constructor(private _router: Router, private _accountService: AccountService) {

  }
}

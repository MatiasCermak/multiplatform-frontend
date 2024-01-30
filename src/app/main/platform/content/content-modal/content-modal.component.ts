import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface ContentWatchableData {
  contentName: string,
  watchUrl: string;
}

import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss'],
})
export class ContentModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ContentWatchableData, private _route: ActivatedRoute, public _sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }
}

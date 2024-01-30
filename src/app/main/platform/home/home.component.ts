import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IContent} from "../../_models/IContent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {"class": "h-100 align-content-between"}
})
export class HomeComponent implements OnInit {
  contentNewEntries: IContent[] = [];
  contentMostWatched: IContent[] = [];
  contentPromoted: IContent[] = [];

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({contentNewEntries, contentMostWatched, contentPromoted}) => {
      this.contentNewEntries = contentNewEntries;
      this.contentMostWatched = contentMostWatched;
      this.contentPromoted = contentPromoted;
    })
  }

}

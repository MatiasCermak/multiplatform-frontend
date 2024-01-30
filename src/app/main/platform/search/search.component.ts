import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IContent} from "../../_models/IContent";

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  host: {"class": "h-100"}
})
export class SearchComponent implements OnInit {
  searchResults: IContent[] = [];
  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({searchResults}) => {
      this.searchResults = searchResults
      console.log("Search results: ", searchResults);
    })
  }
}

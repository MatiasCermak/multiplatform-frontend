import {Component, Input, OnInit} from '@angular/core';
import {IContent} from "../../../_models/IContent";

@Component({
  selector: 'card-component',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content: IContent = {} as IContent;

  ngOnInit(): void {
  }
}

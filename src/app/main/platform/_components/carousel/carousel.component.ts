import {Component, Input, OnInit} from '@angular/core';
import {IContent} from "../../../_models/IContent";

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() data: IContent[] = {} as IContent[];
  ngOnInit(): void {
  }
}

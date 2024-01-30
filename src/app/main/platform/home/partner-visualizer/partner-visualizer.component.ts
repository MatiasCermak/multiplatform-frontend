import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPartner} from "../../../_models/IPartner";
import {PartnersService} from "../../../_services/partners.service";

@Component({
  selector: 'partner-visualizer',
  templateUrl: './partner-visualizer.component.html',
  styleUrls: ['./partner-visualizer.component.scss'],
  host: {"class": "h-100 align-content-between"}
})
export class PartnerVisualizerComponent implements OnInit {
  partners: IPartner[] = [];

  constructor(private _route: ActivatedRoute, private _partnersService: PartnersService) {
    this.partners = this._partnersService.getPartners();
  }

  ngOnInit(): void {

  }

}

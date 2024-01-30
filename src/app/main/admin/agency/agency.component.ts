import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {Dialog} from "../../_components/dialog/dialog.component";
import {AgencyFormComponent} from "./agency-form/agency-form.component";
import {IAgency} from "../../_models/IAgency";
import {AgencyResourceService} from "../../_resources/agency-resource.service";
import {IAdvertisementPlan} from "../../_models/IAdvertisementPlan";

@Component({
  selector: 'app-partner',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AgencyComponent implements OnInit {
  dataSource : IAgency[] = [];
  advPlans: IAdvertisementPlan[] = [];
  columnsToDisplay = ['agency_id','name', 'protocol', 'url_service', 'advertisement_plan_id'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'edit', 'delete', 'expand'];
  expandedElement: IAgency | null = null;
  constructor(private _route: ActivatedRoute, private _service: AgencyResourceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({agencies, advertisementPlans}) => {
      this.dataSource = agencies;
      this.advPlans = advertisementPlans;
    })
  }

  create() {
    let dialogRef = this.dialog.open(AgencyFormComponent, {
      data: {
        isEdit: false,
        placeholderData: null,
        advertisementPlanData: this.advPlans
      }
    })
    dialogRef.afterClosed().subscribe(value => {
      if(value){
        this._service.create(value).subscribe( value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }

  delete(agencyId: number): void {
    let dialogRef = this.dialog.open(Dialog, {
      data: {
        title: 'Delete Partner',
        text: 'Are you sure you want to delete this partner?',
        leftButton: 'No',
        rightButton: 'Yes',
      }
    });
    dialogRef.afterClosed().subscribe( value => {
      if(value) {
        this._service.delete({agencyId: agencyId}).subscribe(value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }

  console = console;

  update(agency: IAgency) {
    let dialogRef = this.dialog.open(AgencyFormComponent, {
      data: {
        isEdit: true,
        placeholderData: agency,
        advertisementPlanData: this.advPlans
      }
    })
    dialogRef.afterClosed().subscribe(value => {
      if(value)
      {
        this._service.update(value, "", {agencyId: agency.agency_id}).subscribe( value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }
}

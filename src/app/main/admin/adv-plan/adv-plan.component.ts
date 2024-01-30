import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {Dialog} from "../../_components/dialog/dialog.component";
import {AdvPlanFormComponent} from "./adv-plan-form/adv-plan-form.component";
import {IAdvertisementPlan} from "../../_models/IAdvertisementPlan";
import {AdvertisementPlanResourceService} from "../../_resources/advertisement-plan-resource.service";

@Component({
  selector: 'app-partner',
  templateUrl: './adv-plan.component.html',
  styleUrls: ['./adv-plan.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdvPlanComponent implements OnInit {
  dataSource : IAdvertisementPlan[] = [];
  columnsToDisplay = ['advertisement_plan_id','name', 'description', 'price'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'edit', 'delete', 'expand'];
  expandedElement: IAdvertisementPlan | null = null;
  constructor(private _route: ActivatedRoute, private _service: AdvertisementPlanResourceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({advertisementPlans}) => {
      this.dataSource = advertisementPlans;
    })
  }

  create() {
    let dialogRef = this.dialog.open(AdvPlanFormComponent, {
      data: {
        isEdit: false,
        placeholderData: null,
      }
    })
    dialogRef.afterClosed().subscribe(value => {
      this._service.create(value).subscribe( value => {
        this._service.list().subscribe(val => {
          this.dataSource = val;
        })
      })
    })
  }

  delete(advertisementPlanId: number): void {
    let dialogRef = this.dialog.open(Dialog, {
      data: {
        title: 'Delete Advertisement Plan',
        text: 'Are you sure you want to delete this advertisement plan?',
        leftButton: 'No',
        rightButton: 'Yes',
      }
    });
    dialogRef.afterClosed().subscribe( value => {
      if(value) {
        this._service.delete({advertisementPlanId: advertisementPlanId}).subscribe(value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }

  update(advertisementPlan: IAdvertisementPlan) {
    let dialogRef = this.dialog.open(AdvPlanFormComponent, {
      data: {
        isEdit: true,
        placeholderData: advertisementPlan,
      }
    })
    dialogRef.afterClosed().subscribe(value => {
      this._service.update(value, "", {advertisementPlanId: advertisementPlan.advertisement_plan_id}).subscribe( value => {
        this._service.list().subscribe(val => {
          this.dataSource = val;
        })
      })
    })
  }
}

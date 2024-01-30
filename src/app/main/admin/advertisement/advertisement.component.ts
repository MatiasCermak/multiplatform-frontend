import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {Dialog} from "../../_components/dialog/dialog.component";
import {AdvertisementFormComponent} from "./advertisement-form/advertisement-form.component";
import {IAdvertisement} from "../../_models/IAdvertisement";
import {AdvertisementResourceService} from "../../_resources/advertisement-resource.service";
import {IAgency} from "../../_models/IAgency";

@Component({
  selector: 'app-partner',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdvertisementComponent implements OnInit {
  dataSource : IAdvertisement[] = [];
  columnsToDisplay = ['advertisement_id','agency_id', 'start_date', 'end_date', 'file_location', 'file_name', 'status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'edit', 'delete', 'expand'];
  expandedElement: IAdvertisement | null = null;
  agencies: IAgency[] = [];
  constructor(private _route: ActivatedRoute, private _service: AdvertisementResourceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({advertisements, agencies}) => {
      this.dataSource = advertisements;
      this.agencies = agencies;
      console.log(advertisements);
    })
  }

  create() {
    let dialogRef = this.dialog.open(AdvertisementFormComponent, {
      data: {
        isEdit: false,
        placeholderData: null,
        agencyData: this.agencies,
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

  delete(advertisementId: number): void {
    let dialogRef = this.dialog.open(Dialog, {
      data: {
        title: 'Delete Advertisement',
        text: 'Are you sure you want to delete this advertisement?',
        leftButton: 'No',
        rightButton: 'Yes',
      }
    });
    dialogRef.afterClosed().subscribe( value => {
      if(value) {
        this._service.delete({advertisementId: advertisementId}).subscribe(value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }

  update(advertisement: IAdvertisement) {
    let dialogRef = this.dialog.open(AdvertisementFormComponent, {
      data: {
        isEdit: true,
        placeholderData: advertisement,
        agencyData: this.agencies,
      }
    })
    dialogRef.afterClosed().subscribe(value => {
      if(value) {
        this._service.update(value, "", {advertisementId: advertisement.advertisement_id}).subscribe( value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }
}

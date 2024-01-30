import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPartner} from "../../_models/IPartner";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PartnerResourceService} from "../../_resources/partner-resource.service";
import {MatDialog} from "@angular/material/dialog";
import {Dialog} from "../../_components/dialog/dialog.component";
import {PartnerFormComponent} from "./partner-form/partner-form.component";

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PartnerComponent implements OnInit {
  dataSource : IPartner[] = [];
  columnsToDisplay = ['partner_id','name', 'protocol', 'login_fee', 'register_fee'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'edit', 'delete', 'expand'];
  expandedElement: IPartner | null = null;
  constructor(private _route: ActivatedRoute, private _service: PartnerResourceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({partners}) => {
      this.dataSource = partners;
    })
  }

  create() {
    let dialogRef = this.dialog.open(PartnerFormComponent, {
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

  delete(partnerId: number): void {
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
        this._service.delete({partnerId: partnerId}).subscribe(value => {
          this._service.list().subscribe(val => {
            this.dataSource = val;
          })
        })
      }
    })
  }

  console = console;

  update(partner: IPartner) {
    let dialogRef = this.dialog.open(PartnerFormComponent, {
      data: {
        isEdit: true,
        placeholderData: partner,
      }
    })
    dialogRef.afterClosed().subscribe(value => {
      this._service.update(value, "", {partnerId: partner.partner_id}).subscribe( value => {
        this._service.list().subscribe(val => {
          this.dataSource = val;
        })
      })
    })
  }
}

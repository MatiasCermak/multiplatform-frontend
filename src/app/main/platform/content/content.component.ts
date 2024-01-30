import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IContent} from "../../_models/IContent";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PartnerSelector} from "../../_components/partner-selector/partner-selector.component";
import {PartnerResourceService} from "../../_resources/partner-resource.service";
import {AccountService} from "../../_services/account.service";
import {IWatchContent} from "../../_models/IPartner";
import {ContentModalComponent} from "./content-modal/content-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  content: IContent | null = null;

  constructor(private _route: ActivatedRoute, public dialog: MatDialog, private _partnerResourceService: PartnerResourceService, private _accountService: AccountService) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(({content}) => {
      this.content = content;
    })
  }

  async initWatchProces() {
    if (this.content && this.content?.partners.length > 1) {
      let dialogRef = await this.dialog.open(PartnerSelector, {
        data: {
          partners: this.content?.partners,
          title: "Choose Partner",
          text: "You have more than one partner that has this movie in the catalog. Where do you want to watch it?"
        }
      })

      let contentWatchableInformation: IWatchContent | undefined = {status: -1};

      await dialogRef.afterClosed().subscribe(async (value: string) => {
        this._partnerResourceService.watchContent({
          partnerId: Number(value),
          contentId: <number>this.content?.content_id,
          userId: <number>this._accountService.getAccount()?.user_id
        }).subscribe(value => {
          contentWatchableInformation = value
          if (this.content && this.content.name && contentWatchableInformation) {
            let contentWatchRef = this.dialog.open(ContentModalComponent, {
              data: {
                contentName: this.content.name,
                watchUrl: contentWatchableInformation.visualisationLink,
              }
            })
          }
        })
      })

      console.log(contentWatchableInformation.visualisationLink)
    }
  }
}

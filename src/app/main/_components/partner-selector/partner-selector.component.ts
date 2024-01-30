import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {NgForOf, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {PartnersService} from "../../_services/partners.service";

export interface PartnerSelectorData {
  partners: string[],
  title: string;
  text: string;
}

@Component({
  selector: 'partner-selector',
  templateUrl: 'partner-selector.component.html',
  standalone: true,
  imports: [MatDialogModule, NgIf, MatButtonModule, NgForOf],
})
export class PartnerSelector {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PartnerSelectorData, public dialogRef: MatDialogRef<PartnerSelectorData>, public _partnersService: PartnersService) {}

  onSubmit(partnerId: string) {
    this.dialogRef.close(partnerId);
  }
}

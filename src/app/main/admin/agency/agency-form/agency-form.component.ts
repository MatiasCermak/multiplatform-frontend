import {Component, Inject, OnInit} from '@angular/core';
import {IPartner} from "../../../_models/IPartner";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IAgency} from "../../../_models/IAgency";
import {IAdvertisementPlan} from "../../../_models/IAdvertisementPlan";
import {AdvertisementPlanResourceService} from "../../../_resources/advertisement-plan-resource.service";

export interface FormData {
  isEdit: boolean,
  placeholderData: null | IAgency;
  advertisementPlanData: IAdvertisementPlan[];
}

@Component({
  selector: 'app-partner',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css'],
})
export class AgencyFormComponent {
  form: FormGroup;
  advPlans: IAdvertisementPlan[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: FormData, public dialogRef: MatDialogRef<AgencyFormComponent>, private _fb: FormBuilder) {
    const {placeholderData, advertisementPlanData} = data;
    this.advPlans = advertisementPlanData;

    this.form = this._fb.group(
      {
        name: new FormControl(placeholderData? placeholderData.name : '', [Validators.required]),
        protocol: new FormControl(placeholderData? placeholderData.protocol : '', [Validators.required]),
        url_service: new FormControl(placeholderData? placeholderData.url_service : '', [Validators.required]),
        active: new FormControl(placeholderData? placeholderData.active : true, [Validators.required]),
        secret_token: new FormControl(placeholderData? placeholderData.secret_token : "", [Validators.required]),
        advertisement_plan_id: new FormControl(placeholderData? placeholderData.advertisement_plan_id : this.advPlans[0], [Validators.required, Validators.min(1)]),
      },
    );
  }

  submit() {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }
}

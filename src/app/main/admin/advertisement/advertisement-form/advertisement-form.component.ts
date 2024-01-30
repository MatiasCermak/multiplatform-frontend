import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IAgency} from "../../../_models/IAgency";
import {IAdvertisement} from "../../../_models/IAdvertisement";
import {IInterest} from "../../../_models/IInterests";
import {InterestResourceService} from "../../../_resources/interest-resource.service";

export interface FormData {
  isEdit: boolean,
  placeholderData: null | IAdvertisement;
  agencyData: IAgency[];
}

@Component({
  selector: 'app-partner',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css'],
})
export class AdvertisementFormComponent {
  form: FormGroup;
  agencies: IAgency[];
  interestList: IInterest[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: FormData, public dialogRef: MatDialogRef<AdvertisementFormComponent>, private _fb: FormBuilder, private _interestService: InterestResourceService) {
    const {placeholderData, agencyData} = data;
    this.agencies = agencyData;
    this.interestList = _interestService.list();

    this.form = this._fb.group(
      {
        agency_id: new FormControl(placeholderData? placeholderData.agency_id : this.agencies[0], [Validators.required]),
        start_date: new FormControl(placeholderData? new Date(placeholderData.start_date) : new Date(), [Validators.required]),
        end_date: new FormControl(placeholderData? new Date(placeholderData.end_date) : new Date(), [Validators.required]),
        url_image: new FormControl(placeholderData? placeholderData.url_image : '', [Validators.required]),
        file_name: new FormControl(placeholderData? placeholderData.file_name : '', [Validators.required]),
        status: new FormControl(placeholderData? placeholderData.status : '', [Validators.required]),
        provided_url: new FormControl(placeholderData? placeholderData.provided_url : '', [Validators.required]),
        interests: new FormControl(placeholderData? placeholderData.interests.map( val => {val.interest_id}) : [], [Validators.required]),
      },
    );
  }

  submit() {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }

  protected readonly JSON = JSON;
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IAdvertisementPlan} from "../../../_models/IAdvertisementPlan";

export interface FormData {
  isEdit: boolean,
  placeholderData: null | IAdvertisementPlan;
}

@Component({
  selector: 'app-partner',
  templateUrl: './adv-plan-form.component.html',
  styleUrls: ['./adv-plan-form.component.css'],
})
export class AdvPlanFormComponent {
  form: FormGroup;


  constructor(@Inject(MAT_DIALOG_DATA) public data: FormData, public dialogRef: MatDialogRef<AdvPlanFormComponent>, private _fb: FormBuilder) {
    const {placeholderData} = data;

    this.form = this._fb.group(
      {
        name: new FormControl(placeholderData? placeholderData.name : '', [Validators.required]),
        description: new FormControl(placeholderData? placeholderData.description : '', [Validators.required]),
        features: new FormControl(placeholderData? placeholderData.features : '', [Validators.required]),
        price: new FormControl(placeholderData? placeholderData.price : 0, [Validators.required, Validators.min(0)]),
      },
    );
  }

  submit() {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {IPartner} from "../../../_models/IPartner";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface FormData {
  isEdit: boolean,
  placeholderData: null | IPartner;
}

@Component({
  selector: 'app-partner',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css'],
})
export class PartnerFormComponent {
  form: FormGroup;


  constructor(@Inject(MAT_DIALOG_DATA) public data: FormData, public dialogRef: MatDialogRef<PartnerFormComponent>, private _fb: FormBuilder) {
    const {placeholderData} = data;

    this.form = this._fb.group(
      {
        name: new FormControl(placeholderData? placeholderData.name : '', [Validators.required]),
        protocol: new FormControl(placeholderData? placeholderData.protocol : '', [Validators.required]),
        url_service: new FormControl(placeholderData? placeholderData.url_service : '', [Validators.required]),
        login_fee: new FormControl(placeholderData? placeholderData.login_fee : 0, [Validators.required, Validators.min(0)]),
        register_fee: new FormControl(placeholderData? placeholderData.register_fee : 0, [Validators.required]),
        active: new FormControl(placeholderData? placeholderData.active : true, [Validators.required]),
        secret_token: new FormControl(placeholderData? placeholderData.secret_token : "", [Validators.required]),

      },
    );
  }

  submit() {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }
}

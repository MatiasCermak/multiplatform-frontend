import { Injectable } from '@angular/core';
import {IUser} from "../_models/IUser";
import {AuthResourceService} from "../_resources/auth-resource.service";
import jwtDecode from "jwt-decode";
import {JWTPayload} from "../_models/IJWTPayload";
import {observable, Observable} from "rxjs";
import {IPartner} from "../_models/IPartner";

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private partners: IPartner[] = [];

  constructor() {

  }

  setPartners(partners: IPartner[]) {
    this.partners = partners;
  }

  getPartnerByPartnerId(id: String): IPartner | null {
    let selectedPartner: IPartner | null = null;

    this.partners.forEach((partner) => {
      if (partner.partner_id == Number(id)) {
        selectedPartner = partner;
      }
    })
    return selectedPartner;
  }

  getPartners(): IPartner[] {
    return this.partners;
  }

}

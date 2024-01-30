import { ResolveFn } from '@angular/router';
import {IPartner} from "../_models/IPartner";
import {inject} from "@angular/core";
import {PartnerResourceService} from "../_resources/partner-resource.service";

export const partnerResolver: ResolveFn<IPartner[]> = (route, state) => {
  return inject(PartnerResourceService).list();
};

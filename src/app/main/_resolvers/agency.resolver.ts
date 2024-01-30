import { ResolveFn } from '@angular/router';
import {IPartner} from "../_models/IPartner";
import {inject} from "@angular/core";
import {PartnerResourceService} from "../_resources/partner-resource.service";
import {AgencyResourceService} from "../_resources/agency-resource.service";
import {IAgency} from "../_models/IAgency";

export const agencyResolver: ResolveFn<IAgency[]> = (route, state) => {
  return inject(AgencyResourceService).list();
};

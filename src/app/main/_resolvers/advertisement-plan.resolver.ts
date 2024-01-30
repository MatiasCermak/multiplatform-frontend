import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {IAdvertisementPlan} from "../_models/IAdvertisementPlan";
import {AdvertisementPlanResourceService} from "../_resources/advertisement-plan-resource.service";

export const advertisementPlanResolver: ResolveFn<IAdvertisementPlan[]> = (route, state) => {
  return inject(AdvertisementPlanResourceService).list();
};

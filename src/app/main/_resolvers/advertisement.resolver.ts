import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {IAdvertisement} from "../_models/IAdvertisement";
import {AdvertisementResourceService} from "../_resources/advertisement-resource.service";

export const advertisementResolver: ResolveFn<IAdvertisement[]> = (route, state) => {
  return inject(AdvertisementResourceService).list();
};

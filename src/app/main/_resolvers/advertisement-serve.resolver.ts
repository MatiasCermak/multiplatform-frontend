import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {IAdvertisement} from "../_models/IAdvertisement";
import {AdvertisementResourceService} from "../_resources/advertisement-resource.service";
import {AccountService} from "../_services/account.service";

export const AdvertisementServeResolver: ResolveFn<IAdvertisement[]> = (route, state) => {
  let pageType = "";
  state.url.split("/").forEach( (segment) => {
    if (segment == 'home') {
      pageType = "main";
    }
  })

  let accountService: AccountService = inject(AccountService);
  let userId = accountService.getAccount()?.user_id;
  if (!userId) {
    return [];
  }
  return inject(AdvertisementResourceService).getAdvertisements({userId: userId, pageType: pageType});
};

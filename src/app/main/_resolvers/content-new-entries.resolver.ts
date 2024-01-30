import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";

import {AccountService} from "../_services/account.service";
import {ContentsResourceService} from "../_resources/contents-resource.service";
import {IContent} from "../_models/IContent";

export const ContentNewEntriesResolver: ResolveFn<IContent[]> = (route, state) => {
  let accountService: AccountService = inject(AccountService);
  let userId = accountService.getAccount()?.user_id;

  if (!userId) {
    return [];
  }

  return inject(ContentsResourceService).serveNewEntries({userId: userId});
};

import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";

import {AccountService} from "../_services/account.service";
import {ContentsResourceService} from "../_resources/contents-resource.service";
import {IContent} from "../_models/IContent";

export const ContentFilterResolver: ResolveFn<IContent[]> = (route, state) => {
  let accountService: AccountService = inject(AccountService);
  let userId = accountService.getAccount()?.user_id;
  let field: string = "";
  let value: string = "";

  field = <string> route.queryParamMap.get("field");
  value = <string> route.queryParamMap.get("value");
  console.log(field);
  console.log(value)
  if (!userId || !field || !value) {
    return [];
  }

  return inject(ContentsResourceService).filter({userId: userId, field: field, value: value});
};

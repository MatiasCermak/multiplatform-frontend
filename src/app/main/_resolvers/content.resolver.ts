import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";

import {AccountService} from "../_services/account.service";
import {ContentsResourceService} from "../_resources/contents-resource.service";
import {IContent} from "../_models/IContent";

export const ContentResolver: ResolveFn<IContent> = (route, state) => {
  let contentId : number =  parseInt(<string>route.paramMap.get("contentId"));

  return inject(ContentsResourceService).retrieve({contentId: contentId});
};

import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {
  Resource,
  ResourceHandler,
  ResourceParams,
} from "@ngx-resource/core";
import {IInterest} from "../_models/IInterests";

@Injectable({providedIn: 'root'})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/auth`,
})
export class InterestResourceService extends Resource {

  list(): IInterest[] {
    return [{interest_id: 1, name: "Sports", description: ""}, {interest_id: 2, name: "Technology", description: ""}, {interest_id: 3, name: "Nature", description: ""}, {interest_id: 4, name: "Entertainment", description: ""}];
  }
  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

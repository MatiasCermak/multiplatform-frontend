import {Injectable} from '@angular/core';
import {
  IResourceMethodObservable,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestBodyType,
  ResourceRequestMethod,
  ResourceResponseBodyType
} from "@ngx-resource/core";
import {environment} from "../../../environments/environment";
import {IAdvertisementPlan} from "../_models/IAdvertisementPlan";
import {IAgency} from "../_models/IAgency";

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/agencies`,
})
export class AgencyResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  list!: IResourceMethodObservable<void, IAgency[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  create!: IResourceMethodObservable<IAgency, IAgency>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!agencyId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  retrieve!: IResourceMethodObservable<{agencyId: number}, IAgency>;

  @ResourceAction({
    method: ResourceRequestMethod.Patch,
    path: '/{!agencyId}',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  update!: IResourceMethodObservable<IAgency, IAgency>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!agencyId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  delete!: IResourceMethodObservable<{agencyId: number}, IAgency>;
  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

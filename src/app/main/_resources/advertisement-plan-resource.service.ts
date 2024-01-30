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

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/advertisementPlans`,
})
export class AdvertisementPlanResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  list!: IResourceMethodObservable<void, IAdvertisementPlan[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  create!: IResourceMethodObservable<IAdvertisementPlan, IAdvertisementPlan>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!advertisementPlanId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  retrieve!: IResourceMethodObservable<{advertisementPlanId: number}, IAdvertisementPlan>;

  @ResourceAction({
    method: ResourceRequestMethod.Patch,
    path: '/{!advertisementPlanId}',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  update!: IResourceMethodObservable<IAdvertisementPlan, IAdvertisementPlan>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!advertisementPlanId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  delete!: IResourceMethodObservable<{advertisementPlanId: number}, IAdvertisementPlan>;
  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

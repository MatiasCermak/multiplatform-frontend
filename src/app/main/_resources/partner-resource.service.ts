import {Injectable} from '@angular/core';
import {
  IResourceMethodObservable, IResourceMethodPromise, IResourceMethodPromiseFull,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestBodyType,
  ResourceRequestMethod,
  ResourceResponseBodyType
} from "@ngx-resource/core";
import {environment} from "../../../environments/environment";
import {IPartner, IWatchContent} from "../_models/IPartner";

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/partners`,
})
export class PartnerResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  list!: IResourceMethodObservable<void, IPartner[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  create!: IResourceMethodObservable<IPartner, IPartner>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!partnerId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  retrieve!: IResourceMethodObservable<{partnerId: number}, IPartner>;

  @ResourceAction({
    method: ResourceRequestMethod.Patch,
    path: '/{!partnerId}',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  update!: IResourceMethodObservable<IPartner, IPartner>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!partnerId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  delete!: IResourceMethodObservable<{partnerId: number}, IPartner>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!partnerId}/watch-content/{!contentId}/user/{!userId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  watchContent!: IResourceMethodObservable <{partnerId: number, contentId: number, userId: number}, IWatchContent>;

  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

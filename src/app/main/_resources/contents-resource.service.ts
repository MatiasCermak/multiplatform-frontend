import {Injectable} from '@angular/core';
import {
  IResourceMethodObservable, IResourceMethodPromise,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestBodyType,
  ResourceRequestMethod,
  ResourceResponseBodyType
} from "@ngx-resource/core";
import {environment} from "../../../environments/environment";
import {IContent} from "../_models/IContent";

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/contents`,
})
export class ContentsResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/new-entries/{!userId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  serveNewEntries!: IResourceMethodObservable<{userId:number}, IContent[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/promoted/{!userId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  servePromoted!: IResourceMethodObservable<{userId:number}, IContent[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/most-watched/{!userId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  serveMostWatched!: IResourceMethodObservable<{userId:number}, IContent[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!contentId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  retrieve!: IResourceMethodObservable<{contentId:number}, IContent>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/filter/user/{!userId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  filter!: IResourceMethodObservable<{userId: number, field: string, value: string}, IContent[]>;

  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

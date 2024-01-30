import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {IUser} from "../_models/IUser";
import {
  IResourceMethodObservable,
  Resource,
  ResourceAction, ResourceHandler,
  ResourceParams,
  ResourceRequestBodyType,
  ResourceRequestMethod, ResourceResponseBodyType
} from "@ngx-resource/core";
import {IInterest} from "../_models/IInterests";

@Injectable({providedIn: 'root'})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/auth`,
})
export class AuthResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/authenticate',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  auth!: IResourceMethodObservable<{ email: string, password: string }, { jwttoken: string, user: IUser }>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/register',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  register!: IResourceMethodObservable<{ email: string, password: string, name: string, last_name: string, interests: IInterest[]}, IUser>;

  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

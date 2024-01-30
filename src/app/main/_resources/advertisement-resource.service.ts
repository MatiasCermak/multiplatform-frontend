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
import {IAdvertisement} from "../_models/IAdvertisement";

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/advertisements`,
})
export class AdvertisementResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  list!: IResourceMethodObservable<void, IAdvertisement[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  create!: IResourceMethodObservable<IAdvertisement, IAdvertisement>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!advertisementId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  retrieve!: IResourceMethodObservable<{ advertisementId: number }, IAdvertisement>;

  @ResourceAction({
    method: ResourceRequestMethod.Patch,
    path: '/{!advertisementId}',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json,
  })
  update!: IResourceMethodObservable<IAdvertisement, IAdvertisement>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!advertisementId}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  delete!: IResourceMethodObservable<{ advertisementId: number }, IAdvertisement>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/serve?userId={userId}&pageType={pageType}',
    responseBodyType: ResourceResponseBodyType.Json,
  })
  getAdvertisements!: IResourceMethodObservable<{userId: number, pageType: string}, IAdvertisement[]>

  getAdvertisements_Mock(): IAdvertisement[] {
    return [{
      agency_id: 1,
      url_image: "https://media.licdn.com/dms/image/C5622AQHuPpAxP6jCFw/feedshare-shrink_800/0/1678432662201?e=1700697600&v=beta&t=wPGSeWshRCU6jJl2rmoftZwFGeBRqGqTHXlgY6qUPW4",
      provided_url: "https://www.google.com",
      status: "active",
      file_name: "",
      end_date: new Date(),
      start_date: new Date(),
      advertisement_id: 1,
      interests: [],
      created_at: new Date(),
      deleted_at: new Date(),
      updated_at: new Date()
    },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/D4E22AQE9BCMgHYNWYA/feedshare-shrink_800/0/1680849636924?e=1700697600&v=beta&t=qyYreKgt2vV5ED5V7hmRI05zD6fIlcm7T10yFNlSl4o",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 2,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/D4E22AQH9ATiWot4uTQ/feedshare-shrink_800/0/1686437017896?e=1700697600&v=beta&t=JX-W8KgGd2fb6KAu-iQ9bCuBWhg9KAROpLbRXikCGck",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 3,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/D4E22AQFBMu_2HKfvFw/feedshare-shrink_800/0/1684144538618?e=1700697600&v=beta&t=2vHoNukH9fkqXthVYjqqEdmWsK55XwrH2AXGVWQScDM",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 4,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/D4E22AQE2tJr89J0HKg/feedshare-shrink_800/0/1685128198002?e=1700697600&v=beta&t=2qte62tmg2mV0cWNEarmYmahfs_Rz224fTld4fI5gJo",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 5,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/D4E22AQHLF50xp5SQnQ/feedshare-shrink_800/0/1685996545797?e=1700697600&v=beta&t=IfLfs8xVANEmCw2t595Ltaf0p9T6J502bZ-BUaTNuv4",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 6,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/D4E22AQHLDcM97QT0KQ/feedshare-shrink_800/0/1691065430199?e=1700697600&v=beta&t=W0MdDghT21LxwVmOSlr_6nk81jWZrm1ddu0MsS0UQ3E",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 7,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://media.licdn.com/dms/image/C5622AQEFeMpjb2WcOg/feedshare-shrink_1280/0/1592525925983?e=1700697600&v=beta&t=atLXJ2BAN6DQ7sp8e9AEF3BqI7nnOZ0bjD2cZyosrJ4",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 8,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      },
      {
        agency_id: 1,
        url_image: "https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-trusted-by-moms.jpg",
        provided_url: "https://www.google.com",
        status: "active",
        file_name: "",
        end_date: new Date(),
        start_date: new Date(),
        advertisement_id: 9,
        interests: [],
        created_at: new Date(),
        deleted_at: new Date(),
        updated_at: new Date()
      }]
  }

  constructor(handler: ResourceHandler) {
    super(handler);
  }
}

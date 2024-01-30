import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "./layout/layout.component";
import {AdvertisementServeResolver} from "../_resolvers/advertisement-serve.resolver";
import {ContentNewEntriesResolver} from "../_resolvers/content-new-entries.resolver";
import {ContentMostWatchedResolver} from "../_resolvers/content-most-watched.resolver";
import {ContentPromotedResolver} from "../_resolvers/content-promoted.resolver";
import {ContentComponent} from "./content/content.component";
import {ContentResolver} from "../_resolvers/content.resolver";
import {SearchComponent} from "./search/search.component";
import {ContentFilterResolver} from "../_resolvers/content-filter.resolver";
import {partnerResolver} from "../_resolvers/partner.resolver";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {advertisements: AdvertisementServeResolver, partners: partnerResolver},
    runGuardsAndResolvers: "always",
    children: [
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          contentNewEntries: ContentNewEntriesResolver,
          contentMostWatched: ContentMostWatchedResolver,
          contentPromoted: ContentPromotedResolver
        }
      },
      {
        path: 'content/:contentId',
        component: ContentComponent,
        resolve: {
          content: ContentResolver,
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        resolve: {
          searchResults: ContentFilterResolver,
        },
        runGuardsAndResolvers: "always",
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule {
}

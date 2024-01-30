import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {PartnerComponent} from "./partner/partner.component";
import {partnerResolver} from "../_resolvers/partner.resolver";
import {advertisementPlanResolver} from "../_resolvers/advertisement-plan.resolver";
import {AdvPlanComponent} from "./adv-plan/adv-plan.component";
import {agencyResolver} from "../_resolvers/agency.resolver";
import {AgencyComponent} from "./agency/agency.component";
import {AdvertisementComponent} from "./advertisement/advertisement.component";
import {advertisementResolver} from "../_resolvers/advertisement.resolver";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'partners', component: PartnerComponent, resolve: {partners: partnerResolver}},
      {path: 'advertisementPlans', component: AdvPlanComponent, resolve: {advertisementPlans: advertisementPlanResolver}},
      {path: 'agencies', component: AgencyComponent, resolve: {agencies: agencyResolver, advertisementPlans: advertisementPlanResolver}},
      {path: 'advertisements', component: AdvertisementComponent, resolve: {advertisements: advertisementResolver, agencies: agencyResolver}}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

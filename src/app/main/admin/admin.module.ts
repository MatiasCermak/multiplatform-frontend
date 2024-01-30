import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { PartnerComponent } from './partner/partner.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {PartnerFormComponent} from "./partner/partner-form/partner-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AdvPlanComponent} from "./adv-plan/adv-plan.component";
import {AgencyFormComponent} from "./agency/agency-form/agency-form.component";
import {AgencyComponent} from "./agency/agency.component";
import {AdvPlanFormComponent} from "./adv-plan/adv-plan-form/adv-plan-form.component";
import {AdvertisementComponent} from "./advertisement/advertisement.component";
import {AdvertisementFormComponent} from "./advertisement/advertisement-form/advertisement-form.component";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    LayoutComponent,
    PartnerComponent,
    PartnerFormComponent,
    AdvPlanComponent,
    AdvPlanFormComponent,
    AgencyComponent,
    AgencyFormComponent,
    AdvertisementComponent,
    AdvertisementFormComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        ReactiveFormsModule,
        NgbInputDatepicker,
        MatMenuModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule
    ]
})
export class AdminModule { }

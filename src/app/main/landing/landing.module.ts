import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import {SplashPageComponent} from "./splash/splash-page.component";
import {RouterLink, RouterModule} from "@angular/router";
import {LandingRoutingModule} from "./landing-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
  ],
  imports: [
    SplashPageComponent,
    CommonModule,
    RouterLink,
    LandingRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class LandingModule { }

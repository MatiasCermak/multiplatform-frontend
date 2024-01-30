import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientAuthGuard} from "./main/_guards/client-auth.guard";
import {AdminAuthGuard} from "./main/_guards/admin-auth.guard";
import {AdvertisementServeResolver} from "./main/_resolvers/advertisement-serve.resolver";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/landing/splash/splash-page.component').then((m) => m.SplashPageComponent),
    pathMatch: "full",
  },
  {
    path: 'platform',
    loadChildren: () => import('./main/platform/platform.module').then((m) => m.PlatformModule),
    canActivate: [ClientAuthGuard],
  },
  {
    path: 'landing',
    loadChildren: () => import('./main/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./main/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminAuthGuard],
  },
  {
    path: '**',
    redirectTo: '/notfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

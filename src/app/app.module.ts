import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbDateAdapter, NgbDateNativeAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppHttpInterceptor} from "./core/interceptors/app-http.interceptor";
import {AppErrorHandler} from "./core/handlers/app-error-handler";
import {ResourceModule} from "@ngx-resource/handler-ngx-http";
import {TokenInterceptor} from "./core/interceptors/token.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    CoreModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    SlickCarouselModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }

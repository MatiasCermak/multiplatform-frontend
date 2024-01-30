import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./home/home.component";
import {RouterOutlet} from "@angular/router";
import {PlatformRoutingModule} from "./platform-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {AdVisualizerComponent} from "./layout/ad-visualizer/ad-visualizer.component";
import {CarouselComponent} from "./_components/carousel/carousel.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {ContentCardComponent} from "./_components/content-card/content-card.component";
import {ContentComponent} from "./content/content.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {SearchComponent} from "./search/search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {ContentModalComponent, SafePipe} from "./content/content-modal/content-modal.component";
import {PartnerVisualizerComponent} from "./home/partner-visualizer/partner-visualizer.component";

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdVisualizerComponent,
    CarouselComponent,
    ContentCardComponent,
    ContentComponent,
    SearchComponent,
    ContentModalComponent,
    SafePipe,
    PartnerVisualizerComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    PlatformRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgOptimizedImage,
    SlickCarouselModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    NgbDropdownToggle,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownItem,
    ReactiveFormsModule,
  ]
})
export class PlatformModule {
}

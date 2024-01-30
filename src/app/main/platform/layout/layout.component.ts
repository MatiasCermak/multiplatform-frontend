import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../_services/account.service";
import {AdvertisementResourceService} from "../../_resources/advertisement-resource.service";
import {IAdvertisement} from "../../_models/IAdvertisement";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IPartner} from "../../_models/IPartner";
import {PartnersService} from "../../_services/partners.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  host: { class: 'vh-100 d-flex flex-column flex-grow-1' },
})
export class LayoutComponent implements OnInit {
  public leftAds: IAdvertisement[] = [];
  public rightAds: IAdvertisement[] = [];
  public ads: IAdvertisement[] = [];
  public partners: IPartner[] = [];
  form: FormGroup;

  constructor(private _route: ActivatedRoute, private _router: Router, private _accountService: AccountService, private _advertisementService: AdvertisementResourceService, private _fb: FormBuilder, private _partnersService: PartnersService) {

    this.form = this._fb.group(
      {
        value: new FormControl('', [Validators.required]),
        field: new FormControl('name', [Validators.required]),
      },
    );

    if (this._router.url == '/platform/' || this._router.url == '/platform') {
      this._router.navigate(['platform','home']);
    }

  }

  ngOnInit(): void {
    this._route.data.subscribe(({advertisements, partners}) => {
      this.ads = advertisements;
      this.partners = partners;
      this._partnersService.setPartners(this.partners);
    });

    this.ads.forEach((value: IAdvertisement, index) => {
      if(index%2) {
        this.leftAds[this.leftAds.length] = value;
      } else {
        this.rightAds[this.rightAds.length] = value;
      }
    });
  }

  submit(): void {
    if(this.form.valid) {
      this._router.navigate(["platform", "search"], {queryParams: {field: this.form.value["field"], value: this.form.value["value"]}})
        .then(() => this.form.reset({field: "name", value: ""}))
    }
  }

  logout() {
    this._accountService.logout()
    this._router.navigate(["landing", "login"])
  }
}

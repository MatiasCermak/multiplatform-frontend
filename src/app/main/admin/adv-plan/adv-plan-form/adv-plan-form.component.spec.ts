import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvPlanFormComponent } from './adv-plan-form.component';

describe('PartnerComponent', () => {
  let component: AdvPlanFormComponent;
  let fixture: ComponentFixture<AdvPlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvPlanFormComponent]
    });
    fixture = TestBed.createComponent(AdvPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

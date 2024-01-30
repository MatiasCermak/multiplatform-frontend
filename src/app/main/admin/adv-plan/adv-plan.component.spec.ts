import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvPlanComponent } from './adv-plan.component';

describe('PartnerComponent', () => {
  let component: AdvPlanComponent;
  let fixture: ComponentFixture<AdvPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvPlanComponent]
    });
    fixture = TestBed.createComponent(AdvPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

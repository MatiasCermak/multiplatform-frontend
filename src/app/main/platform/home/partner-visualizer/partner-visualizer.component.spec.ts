import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerVisualizerComponent } from './partner-visualizer.component';

describe('SplashPageComponent', () => {
  let component: PartnerVisualizerComponent;
  let fixture: ComponentFixture<PartnerVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdVisualizerComponent } from './ad-visualizer.component';

describe('LayoutComponent', () => {
  let component: AdVisualizerComponent;
  let fixture: ComponentFixture<AdVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdVisualizerComponent]
    });
    fixture = TestBed.createComponent(AdVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisheriesComponent } from './fisheries.component';

describe('FisheriesComponent', () => {
  let component: FisheriesComponent;
  let fixture: ComponentFixture<FisheriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FisheriesComponent]
    });
    fixture = TestBed.createComponent(FisheriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaeLandingComponent } from './uae-landing.component';

describe('UaeLandingComponent', () => {
  let component: UaeLandingComponent;
  let fixture: ComponentFixture<UaeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaeLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UaeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalLandingComponent } from './normal-landing.component';

describe('NormalLandingComponent', () => {
  let component: NormalLandingComponent;
  let fixture: ComponentFixture<NormalLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

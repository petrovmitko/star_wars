import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsPageComponent } from './planet-details-page.component';

describe('PlanetDetailsPageComponent', () => {
  let component: PlanetDetailsPageComponent;
  let fixture: ComponentFixture<PlanetDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

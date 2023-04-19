import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailsPageComponent } from './starship-details-page.component';

describe('StarshipDetailsPageComponent', () => {
  let component: StarshipDetailsPageComponent;
  let fixture: ComponentFixture<StarshipDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

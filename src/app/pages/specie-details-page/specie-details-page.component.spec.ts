import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieDetailsPageComponent } from './specie-details-page.component';

describe('SpecieDetailsPageComponent', () => {
  let component: SpecieDetailsPageComponent;
  let fixture: ComponentFixture<SpecieDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecieDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

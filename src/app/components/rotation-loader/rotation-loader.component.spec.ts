import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationLoaderComponent } from './rotation-loader.component';

describe('RotationLoaderComponent', () => {
  let component: RotationLoaderComponent;
  let fixture: ComponentFixture<RotationLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotationLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

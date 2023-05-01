import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSectionLoaderComponent } from './related-section-loader.component';

describe('RelatedSectionLoaderComponent', () => {
  let component: RelatedSectionLoaderComponent;
  let fixture: ComponentFixture<RelatedSectionLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedSectionLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedSectionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

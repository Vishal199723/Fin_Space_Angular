import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewinsurancedetailsComponent } from './previewinsurancedetails.component';

describe('PreviewinsurancedetailsComponent', () => {
  let component: PreviewinsurancedetailsComponent;
  let fixture: ComponentFixture<PreviewinsurancedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewinsurancedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewinsurancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

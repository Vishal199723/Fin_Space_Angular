import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewloandetailsComponent } from './previewloandetails.component';

describe('PreviewloandetailsComponent', () => {
  let component: PreviewloandetailsComponent;
  let fixture: ComponentFixture<PreviewloandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewloandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

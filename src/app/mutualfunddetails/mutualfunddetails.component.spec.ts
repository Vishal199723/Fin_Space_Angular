import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualfunddetailsComponent } from './mutualfunddetails.component';

describe('MutualfunddetailsComponent', () => {
  let component: MutualfunddetailsComponent;
  let fixture: ComponentFixture<MutualfunddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualfunddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualfunddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallscaleloanComponent } from './smallscaleloan.component';

describe('SmallscaleloanComponent', () => {
  let component: SmallscaleloanComponent;
  let fixture: ComponentFixture<SmallscaleloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallscaleloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallscaleloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

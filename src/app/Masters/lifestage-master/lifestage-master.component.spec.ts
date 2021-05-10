import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestageMasterComponent } from './lifestage-master.component';

describe('LifestageMasterComponent', () => {
  let component: LifestageMasterComponent;
  let fixture: ComponentFixture<LifestageMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestageMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

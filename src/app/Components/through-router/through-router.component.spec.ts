import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughRouterComponent } from './through-router.component';

describe('ThroughRouterComponent', () => {
  let component: ThroughRouterComponent;
  let fixture: ComponentFixture<ThroughRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroughRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

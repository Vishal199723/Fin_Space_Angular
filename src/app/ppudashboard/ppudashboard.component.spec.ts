import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPUDashboardComponent } from './ppudashboard.component';

describe('PPUDashboardComponent', () => {
  let component: PPUDashboardComponent;
  let fixture: ComponentFixture<PPUDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPUDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPUDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

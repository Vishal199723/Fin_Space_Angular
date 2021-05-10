import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketManagerDashboardComponent } from './ticket-manager-dashboard.component';

describe('TicketManagerDashboardComponent', () => {
  let component: TicketManagerDashboardComponent;
  let fixture: ComponentFixture<TicketManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

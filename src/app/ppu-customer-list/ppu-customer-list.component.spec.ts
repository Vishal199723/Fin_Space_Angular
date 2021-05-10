import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpuCustomerListComponent } from './ppu-customer-list.component';

describe('PpuCustomerListComponent', () => {
  let component: PpuCustomerListComponent;
  let fixture: ComponentFixture<PpuCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpuCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpuCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssociateRegistartionComponent } from './business-associate-registartion.component';

describe('BusinessAssociateRegistartionComponent', () => {
  let component: BusinessAssociateRegistartionComponent;
  let fixture: ComponentFixture<BusinessAssociateRegistartionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAssociateRegistartionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAssociateRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

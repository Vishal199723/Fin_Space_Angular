import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytypemasterComponent } from './familytypemaster.component';

describe('FamilytypemasterComponent', () => {
  let component: FamilytypemasterComponent;
  let fixture: ComponentFixture<FamilytypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilytypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilytypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

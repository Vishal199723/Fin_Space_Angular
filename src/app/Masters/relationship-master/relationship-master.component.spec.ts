import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipMasterComponent } from './relationship-master.component';

describe('RelationshipMasterComponent', () => {
  let component: RelationshipMasterComponent;
  let fixture: ComponentFixture<RelationshipMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

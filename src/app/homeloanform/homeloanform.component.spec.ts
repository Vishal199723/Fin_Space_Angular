import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloanformComponent } from './homeloanform.component';

describe('HomeloanformComponent', () => {
  let component: HomeloanformComponent;
  let fixture: ComponentFixture<HomeloanformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloanformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

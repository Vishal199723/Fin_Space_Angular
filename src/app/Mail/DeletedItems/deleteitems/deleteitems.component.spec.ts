import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteitemsComponent } from './deleteitems.component';

describe('DeleteitemsComponent', () => {
  let component: DeleteitemsComponent;
  let fixture: ComponentFixture<DeleteitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

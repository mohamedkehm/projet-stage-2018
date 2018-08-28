import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsdetailsComponent } from './adminsdetails.component';

describe('AdminsdetailsComponent', () => {
  let component: AdminsdetailsComponent;
  let fixture: ComponentFixture<AdminsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

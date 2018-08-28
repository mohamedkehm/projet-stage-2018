import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmenuComponent } from './navbarmenu.component';

describe('NavbarmenuComponent', () => {
  let component: NavbarmenuComponent;
  let fixture: ComponentFixture<NavbarmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

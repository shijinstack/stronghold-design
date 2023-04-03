import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUsersComponent } from './portal-users.component';

describe('PortalUsersComponent', () => {
  let component: PortalUsersComponent;
  let fixture: ComponentFixture<PortalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegionComponent } from './company-region.component';

describe('CompanyRegionComponent', () => {
  let component: CompanyRegionComponent;
  let fixture: ComponentFixture<CompanyRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

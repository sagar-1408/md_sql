import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerStatusComponent } from './business-partner-status.component';

describe('BusinessPartnerStatusComponent', () => {
  let component: BusinessPartnerStatusComponent;
  let fixture: ComponentFixture<BusinessPartnerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerMasterComponent } from './business-partner-master.component';

describe('BusinessPartnerMasterComponent', () => {
  let component: BusinessPartnerMasterComponent;
  let fixture: ComponentFixture<BusinessPartnerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

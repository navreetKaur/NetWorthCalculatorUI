import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthDashboardComponent } from './networth-dashboard.component';

describe('NetworthDashboardComponent', () => {
  let component: NetworthDashboardComponent;
  let fixture: ComponentFixture<NetworthDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworthDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworthDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

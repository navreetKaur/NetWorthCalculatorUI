import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ApplicationMessageSnackBarService } from 'src/app/snackService';
import { UtilService } from 'src/app/util.service';
import { NwCalculatorModule } from '../nw-calculator.module';
import { NwCalculatorService } from '../nw-calculator.service';

import { NetworthDashboardComponent } from './networth-dashboard.component';

describe('NetworthDashboardComponent', () => {
  let component: NetworthDashboardComponent;
  let fixture: ComponentFixture<NetworthDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NwCalculatorModule,
        AppModule
      ]
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

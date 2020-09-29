import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { NwCalculatorModule } from '../nw-calculator.module';
import { NwCalculatorService } from '../nw-calculator.service';

import { FinancialRecordShowComponent } from './financial-record-show.component';

describe('FinancialRecordShowComponent', () => {
  let component: FinancialRecordShowComponent;
  let fixture: ComponentFixture<FinancialRecordShowComponent>;

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
    fixture = TestBed.createComponent(FinancialRecordShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

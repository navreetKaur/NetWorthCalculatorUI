import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { NwCalculatorModule } from '../nw-calculator.module';
import { NwCalculatorService } from '../nw-calculator.service';

import { FinancialRecordPersistComponent } from './financial-record-persist.component';

describe('FinancialRecordPersistComponent', () => {
  let component: FinancialRecordPersistComponent;
  let fixture: ComponentFixture<FinancialRecordPersistComponent>;

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
    fixture = TestBed.createComponent(FinancialRecordPersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.type = 'ASSET';
    component.categories = [
      {"id":1001,"type":"ASSET","subType":"Cash and Investments"},
      {"id":1002,"type":"ASSET","subType":"Long Term Assets"},
      {"id":1003,"type":"LIABILITY","subType":"Long Term Liabilities"},
      {"id":1004,"type":"LIABILITY","subType":"Short Term Liabilities"}
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should load data', () => {
    expect(component.categories.length).toBeGreaterThan(0);
  });
});

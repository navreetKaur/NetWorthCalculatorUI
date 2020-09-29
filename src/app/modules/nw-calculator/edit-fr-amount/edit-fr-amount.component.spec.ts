import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ApplicationMessageSnackBarService } from 'src/app/snackService';
import { FinancialRecord } from '../financial-record';
import { NwCalculatorModule } from '../nw-calculator.module';
import { NwCalculatorService } from '../nw-calculator.service';

import { EditFrAmountComponent } from './edit-fr-amount.component';

describe('EditFrAmountComponent', () => {
  let component: EditFrAmountComponent;
  let fixture: ComponentFixture<EditFrAmountComponent>;

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
    fixture = TestBed.createComponent(EditFrAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.record = new FinancialRecord(
      {"id":1001,"amount":100.5,"title":"Chequing",
      "category":{"id":1001,"type":"ASSET","subType":"Cash and Investments"}
      });
  });

  
});

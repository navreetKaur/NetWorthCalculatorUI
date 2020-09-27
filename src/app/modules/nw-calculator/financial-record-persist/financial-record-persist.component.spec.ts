import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRecordPersistComponent } from './financial-record-persist.component';

describe('FinancialRecordPersistComponent', () => {
  let component: FinancialRecordPersistComponent;
  let fixture: ComponentFixture<FinancialRecordPersistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialRecordPersistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialRecordPersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

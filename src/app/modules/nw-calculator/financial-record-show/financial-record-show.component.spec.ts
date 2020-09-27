import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRecordShowComponent } from './financial-record-show.component';

describe('FinancialRecordShowComponent', () => {
  let component: FinancialRecordShowComponent;
  let fixture: ComponentFixture<FinancialRecordShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialRecordShowComponent ]
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

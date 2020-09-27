import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFrAmountComponent } from './edit-fr-amount.component';

describe('EditFrAmountComponent', () => {
  let component: EditFrAmountComponent;
  let fixture: ComponentFixture<EditFrAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFrAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFrAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

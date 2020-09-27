import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NwCalculatorService} from "../nw-calculator.service";
import {FinancialRecord} from "../financial-record";
import {ApplicationMessageSnackBarService} from "../../../snackService";

@Component({
  selector: 'app-edit-fr-amount',
  templateUrl: './edit-fr-amount.component.html',
  styleUrls: ['./edit-fr-amount.component.css']
})
export class EditFrAmountComponent implements OnInit {

  @Input()
  record:FinancialRecord;

  @Output()
  dataPersisted = new EventEmitter<boolean>();

  recordForm = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.pattern(/^[.\d]+$/)])
  });

  get amount() { return this.recordForm.get('amount'); }

  constructor(private service: NwCalculatorService, private snackMessageService: ApplicationMessageSnackBarService) { }

  ngOnInit(): void {
    this.recordForm.patchValue({['amount'] : this.record.amount});
  }

  amountChanged(updatedValue) {

    // call only if form is valid and amount is changed.
    if (this.recordForm.valid && this.record.amount != updatedValue) {

      this.service.saveFinancialRecord(new FinancialRecord({id: this.record.id, amount: updatedValue}))
        .subscribe((r: FinancialRecord) => {

          this.snackMessageService.showSucessMessageSnackBar('Record saved successfully');
          console.log('Record saved successfully');
          console.log(r);
          this.dataPersisted.emit(true);

        }, error => {
          this.snackMessageService.showErrorMessageSnackBar('Error while saving record');
          console.log(error);
        });

    }
  }

}

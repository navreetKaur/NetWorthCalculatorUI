import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FinancialRecord} from "../financial-record";
import {NwCalculatorService} from "../nw-calculator.service";
import {ApplicationMessageSnackBarService} from "../../../snackService";

@Component({
  selector: 'app-financial-record-show',
  templateUrl: './financial-record-show.component.html',
  styleUrls: ['./financial-record-show.component.css']
})
export class FinancialRecordShowComponent implements OnInit {

  @Input()
  type: string;

  @Output()
  successEmitter = new EventEmitter<boolean>();

  @Input()
  records: FinancialRecord[];

  constructor(private service: NwCalculatorService,
    private snackMessageService: ApplicationMessageSnackBarService) { }

  ngOnInit(): void {
  }

  get subTypes() {

    let sTypes: string[] = [];

    if(this.records) {
        sTypes = this.onlyUnique(this.records.map(i => i.category.subType))
    }

    return sTypes;

  }

  emitSuccess() {
    this.successEmitter.emit(true)
  }

  deleteRecord(id) {

    this.service.deleteFinancialRecord(id)
      .subscribe(
        data => {

          this.snackMessageService.showSucessMessageSnackBar('Record deleted successfully');
          console.log(data);
          this.emitSuccess();

          // Call to reload the data.
        },error => {
          console.log(error);
          this.snackMessageService.showErrorMessageSnackBar('Error while deleting record');
        });
  }

  sav() {

  }

  /**
   *  Get Only Unique
   * @param dupeArray
   */
  onlyUnique(dupeArray): string[] {
   return Array.from(new Set(dupeArray));
  }

  valueChanged(id) {

    console.log('id'+ id);

  }
}

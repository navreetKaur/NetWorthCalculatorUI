import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, FinancialRecord} from "../financial-record";
import {NwCalculatorService} from "../nw-calculator.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApplicationMessageSnackBarService} from "../../../snackService";

@Component({
  selector: 'app-financial-record-persist',
  templateUrl: './financial-record-persist.component.html',
  styleUrls: ['./financial-record-persist.component.css']
})
export class FinancialRecordPersistComponent implements OnInit {

  @Input()
  type: string;

  @Output()
  dataPersisted = new EventEmitter<boolean>();
  @Output()
  cancelEmitter = new EventEmitter<boolean>();

  categories: Category[] = [];

  recordForm = new FormGroup({
    title: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.pattern(/^[.\d]+$/)]),
    category: new FormControl('', Validators.required)
  });


  get title() { return this.recordForm.get('title'); }
  get amount() { return this.recordForm.get('amount'); }
  get category() { return this.recordForm.get('category'); }

  constructor(private service: NwCalculatorService,
              private snackMessageService: ApplicationMessageSnackBarService) { }

  ngOnInit(): void {

    // Call method to load category
    this.loadCategory();
  }

  /**
   *  Method to load categories
   */
  loadCategory() {

    this.service
      .listCategory()
      .subscribe((categories: Category[]) => {

        // Load only categories of given Type
        this.categories = categories.filter(c => c.type === this.type);

      }, error => {
        // TODO show error on UI.
        console.log('error')

      });

  }


  onSubmit() {
    console.log('save records')
    console.log(this.recordForm)

    if(this.recordForm.valid) {

        console.log(this.recordForm.value);

        let record = new FinancialRecord({title: this.recordForm.value.title, amount: this.recordForm.value.amount, category: {id: this.recordForm.value.category}})

        this.service.saveFinancialRecord(record).subscribe((r: FinancialRecord) => {

          this.snackMessageService.showSucessMessageSnackBar('Record saved successfully');
          console.log('Record saved successfully');
          console.log(r);
          this.dataPersisted.emit(true);

        }, error => {
          this.snackMessageService.showErrorMessageSnackBar('Error while saving record');
          console.log(error);
        });





    } else  {

      console.log('Form is invalid')

    }

  }

  cancel() {
      this.cancelEmitter.emit(true);
  }

}

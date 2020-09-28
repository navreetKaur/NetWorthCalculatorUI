import { Component, OnInit } from '@angular/core';
import {FinancialRecord} from "../financial-record";
import {NwCalculatorService} from "../nw-calculator.service";
import {UtilService} from "../../../util.service";
import { Customer } from '../customer';

@Component({
  selector: 'app-networth-dashboard',
  templateUrl: './networth-dashboard.component.html',
  styleUrls: ['./networth-dashboard.component.css']
})
export class NetworthDashboardComponent implements OnInit {

  showAddAsset: boolean;
  showAddLiability: boolean;

  // Holds list of all financial records
  customer: Customer= new Customer();

  constructor(private service: NwCalculatorService, private utilService: UtilService) { }

  ngOnInit(): void {

    // call method to fetch financial records.
    this.loadFinancialRecords()

  }


  loadFinancialRecords() {

    // Call service to fetch financial records.

    this.service
      .listFinancialRecords()
      .subscribe((records: Customer) => {
        this.customer = records;
      }, error => {
        console.log('error')

      });

  }

  get totalAssets() {
    return this.customer.totalAssets;
  }

  get totalLiability() {
    return this.customer.totalLiabilities;
  }


  get assetRecords() {
    return this.filterRecords('ASSET');
  }

  get liabilityRecords() {
    return this.filterRecords('LIABILITY');
  }

  filterRecords(type: string) {

    let records: FinancialRecord[] = [];

    if(this.customer.financialRecords) {

      // Filter only ASSETS
      records = this.customer.financialRecords.filter(r => r.category.type === type);

      // Sort records by subType
      this.utilService.sort(records, 'category.subType', false);

    }

    return records;

  }

}

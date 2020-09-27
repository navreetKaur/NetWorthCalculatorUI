import { Component, OnInit } from '@angular/core';
import {FinancialRecord} from "../financial-record";
import {NwCalculatorService} from "../nw-calculator.service";
import {UtilService} from "../../../util.service";

@Component({
  selector: 'app-networth-dashboard',
  templateUrl: './networth-dashboard.component.html',
  styleUrls: ['./networth-dashboard.component.css']
})
export class NetworthDashboardComponent implements OnInit {


  netWorth: number = 0;
  showAddAsset: boolean;
  showAddLiability: boolean;

  // Holds list of all financial records
  financialRecords: FinancialRecord[] = [];

  constructor(private service: NwCalculatorService, private utilService: UtilService) { }

  ngOnInit(): void {

    // call method to fetch financial records.
    this.loadFinancialRecords()

  }


  loadFinancialRecords() {

    // Call service to fetch financial records.
    //this.financialRecords = this.service.getFinancialRecords()

    this.service
      .listFinancialRecords()
      .subscribe((records: FinancialRecord[]) => {
        this.financialRecords = records;

      }, error => {
          // TODO show error on UI.
        console.log('error')

      });

  }

  get totalAssets() {
    let sum: number = 0;
    this.assetRecords.forEach(a => sum += a.amount);
    return sum
  }

  get totalLiability() {
    let sum: number = 0;
    this.liabilityRecords.forEach(a => sum += a.amount);
    return sum
  }


  get assetRecords() {
    return this.filterRecords('ASSET');
  }

  get liabilityRecords() {
    return this.filterRecords('LIABILITY');
  }

  filterRecords(type: string) {

    let records: FinancialRecord[] = [];

    if(this.financialRecords) {

      // Filter only ASSETS
      records = this.financialRecords.filter(r => r.category.type === type);

      // Sort records by subType
      this.utilService.sort(records, 'category.subType', false);

    }

    return records;

  }

}

import { FinancialRecord } from './financial-record';

export class Customer {
    id: number;  // Auto generated at the backend,  for edit or delete
    name: string; // Name of the Customer
    totalAssets: number; // Sub Type of ASSET OR LIABILITY. i.e. CASH & INVESTMENT, LONG TERM DEBIT etc.
    totalLiabilities: number;
    netWorth: number;
    financialRecords: FinancialRecord[] =[];
    // Constructor
    constructor(object?: any) {
      if (object) {
        for (const prop in object) {
          this[prop] = object[prop];
        }
      }
    }
  }

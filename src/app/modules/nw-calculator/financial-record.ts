export class FinancialRecord {

  id: number;  // Auto generated at the backend,  for edit or delete
  category: Category;
  title : string; // Title of entry
  amount: number;
  createDTTM: Date; // Timestamp of created. we can create another variable as well of update timestapmp
  updateDTTM: Date; // Timestamp of updated

  // Constructor
  constructor(object?: any) {
    if (object) {
      for (const prop in object) {
        this[prop] = object[prop];
      }
    }
  }
}

export class Category {
  id: number;  // Auto generated at the backend,  for edit or delete
  type: string; // Records Type ASSET or LIABILITY
  subType: string; // Sub Type of ASSET OR LIABILITY. i.e. CASH & INVESTMENT, LONG TERM DEBIT etc.

  // Constructor
  constructor(object?: any) {
    if (object) {
      for (const prop in object) {
        this[prop] = object[prop];
      }
    }
  }
}

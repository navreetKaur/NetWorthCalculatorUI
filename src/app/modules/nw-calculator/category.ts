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
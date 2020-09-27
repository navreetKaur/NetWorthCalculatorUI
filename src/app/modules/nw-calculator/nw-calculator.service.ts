import {Category, FinancialRecord} from "./financial-record";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Observable, Subject, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class NwCalculatorService {

  apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) {
  }

  /**
   * Service error handler
   * @param error The error response
   */
  handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else if (error instanceof HttpErrorResponse && error.status === 401) {
      let e = new HttpErrorResponse({error: error, status:error.status, statusText: 'New Session expired, please login again.'});
      return throwError(e);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`${error.status}: ${error.message}`);
    }
    // Return an observable with a user-facing error message
    return throwError('We\'re sorry an unexpected error occurred.');
  }

  /**
   *  Method to fetch records from backend
   */
  getFinancialRecords() {

    let records = [];

    let asset_CashandInvestments = new Category({id: 1, type: 'ASSET', subType: 'Cash and Investments'});
    let asset_LongTermAssets = new Category({id: 2, type: 'ASSET', subType: 'Long Term Assets'});

    records.push(new FinancialRecord({id: 1, category: asset_CashandInvestments, title: 'Chequing',  amount: 10000.00 }));
    records.push(new FinancialRecord({id: 2, category: asset_CashandInvestments, title: 'Savings for Taxes',  amount: 5000.00 }));
    records.push(new FinancialRecord({id: 3, category: asset_LongTermAssets, title: 'Primary Home',  amount: 4550000.00 }));
    records.push(new FinancialRecord({id: 4, category: asset_CashandInvestments, title: 'Investment 2',  amount: 60000.00 }));
    records.push(new FinancialRecord({id: 5, category: asset_CashandInvestments, title: 'Investment 1',  amount: 30000.00 }));

    let liability_stl =  new Category({id: 3, type: 'LIABILITY', subType: 'Short Term Liabilties'});

    records.push(new FinancialRecord({id: 5, category: liability_stl, title: 'Credit Card 1',  amount: 30000.00 }));

    return records;

  }



  /**
   * Method to fetch list of Categories
   */
  listCategory(): Observable<Category[]> {

    const subject = new Subject<Category[]>();
    return this.http
      .get<Category[]>(this.apiEndpoint + '/category');
  }

  /**
   * Method to save Category
   */
  saveCategory(category: Category): Observable<Category> {

      if (category.id) {

        return  this.http
          .put<Category>( `${this.apiEndpoint}/category/${category.id}`, category)
          .pipe(catchError(this.handleError));

        } else {

          return  this.http
            .post<Category>(`${this.apiEndpoint}/category`, category)
            .pipe(catchError(this.handleError));
        }

  }

    /**
     *  Method to delete category
     * @param {number} id
     *
     */
    deleteCategory(id: number): Observable<void> {
      return this.http
        .delete<void>(`${this.apiEndpoint}/category/${id}`)
        .pipe(catchError(this.handleError));
    }

  /**
   * Method to fetch list of Financial Records
   */
  listFinancialRecords(): Observable<FinancialRecord[]> {

    const subject = new Subject<FinancialRecord[]>();
    return this.http
      .get<FinancialRecord[]>(this.apiEndpoint + '/financialRecord');
  }

  /**
   * Method to save FinancialRecord
   */
  saveFinancialRecord(financialRecord: FinancialRecord): Observable<FinancialRecord> {

    if (financialRecord.id) {

      return  this.http
        .put<FinancialRecord>( `${this.apiEndpoint}/financialRecord/${financialRecord.id}`, financialRecord)
        .pipe(catchError(this.handleError));

    } else {

      return  this.http
        .post<FinancialRecord>(`${this.apiEndpoint}/financialRecord`, financialRecord)
        .pipe(catchError(this.handleError));
    }

  }

  /**
   *  Method to delete financialRecord
   * @param {number} id
   *
   */
  deleteFinancialRecord(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiEndpoint}/financialRecord/${id}`)
      .pipe(catchError(this.handleError));
  }

}

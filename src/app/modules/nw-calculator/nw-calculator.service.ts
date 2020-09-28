import {FinancialRecord} from "./financial-record";
import {Category} from "./category";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Observable, Subject, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { Customer } from './customer';

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
    }  else {
      // The backend returned an unsuccessful response code.
      console.error(`${error.status}: ${error.message}`);
    }
    // Return an observable with a user-facing error message
    return throwError('We\'re sorry an unexpected error occurred.');
  }



  /**
   * Method to fetch list of Categories
   */
  listCategory(): Observable<Category[]> {

    const subject = new Subject<Category[]>();
    return this.http
      .get<Category[]>(this.apiEndpoint + '/categories');
  }

  /**
   * Method to save Category
   */
  saveCategory(category: Category): Observable<Category> {

      if (category.id) {

        return  this.http
          .put<Category>( `${this.apiEndpoint}/category`, category)
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
  listFinancialRecords(): Observable<Customer> {

    const subject = new Subject<Customer>();
    return this.http
      .get<Customer>(this.apiEndpoint + '/customer/1/financialRecords');
  }

  /**
   * Method to save FinancialRecord
   */
  saveFinancialRecord(financialRecord: FinancialRecord): Observable<FinancialRecord> {

    if (financialRecord.id) {

      return  this.http
        .put<FinancialRecord>( `${this.apiEndpoint}/customer/1/financialRecord`, 
        {
          "id" :financialRecord.id,
          "amount":financialRecord.amount
        }
        )
        .pipe(catchError(this.handleError));

    } else {

      return  this.http
        .post<FinancialRecord>(`${this.apiEndpoint}/customer/1/financialRecord`, 
        {  
          "amount":financialRecord.amount,
          "title":financialRecord.title,
          "categoryId":financialRecord.category.id
        })
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
      .delete<void>(`${this.apiEndpoint}/customer/1/financialRecord/${id}`)
      .pipe(catchError(this.handleError));
  }

}

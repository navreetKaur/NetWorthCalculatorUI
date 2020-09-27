
import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable()
export class ApplicationMessageSnackBarService {

  CLASS_SUCCESS = 'mdSnacks-success';
  CLASS_ERROR = 'mdSnacks-error';
  CLASS_WARNING = 'mdSnacks-warning';
  CLASS_INFO = 'mdSnacks-info';

  constructor(private snackBar: MatSnackBar) {
  }

  /**
   *  Method to calculate snack bar class.
   * @param {string} status
   * @returns {string}
   */
  private getSnackBarClass(status: string): string {

    let snackClass: string;

    switch (status) {
      case 'success':
        snackClass = this.CLASS_SUCCESS;
        break;
      case 'error':
        snackClass = this.CLASS_ERROR;
        break;
      case 'warning':
        snackClass = this.CLASS_WARNING;
        break;
      case 'info':
        snackClass = this.CLASS_INFO;
        break;
      default :
        snackClass = this.CLASS_INFO;
        break;
    }

    return snackClass;
  }

  /**
   * Method to show snack bar message
   * @param {string} message
   * @param {string} status
   */
  showAppMessageSnackBar(message: string, status: string) {
    // Show Message banner.
    this.snackBar.open(message, '', {
      verticalPosition: 'bottom',
      panelClass: [this.getSnackBarClass(status)],
      duration: 3000
    });
  }

  /**
   * Method to show success message
   * @param {string} message
   */
  showSucessMessageSnackBar(message: string) {
    this.showAppMessageSnackBar(message, 'success');
  }

  /**
   * Method to show error message
   * @param {string} message
   */
  showErrorMessageSnackBar(message: string) {
    this.showAppMessageSnackBar(message, 'error');
  }

  /**
   * Method to show warning message.
   * @param {string} message
   */
  showWarningMessageSnackBar(message: string) {
    this.showAppMessageSnackBar(message, 'warning');
  }

  /**
   * Methdot to show info message
   * @param {string} message
   */
  showInfoMessageSnackBar(message: string) {
    this.showAppMessageSnackBar(message, 'info');
  }

  /**
   * Methdot to show info message
   * @param {string} message
   */
  showMessageSnackBar(message: string) {
    this.showAppMessageSnackBar(message, 'info');
  }
}

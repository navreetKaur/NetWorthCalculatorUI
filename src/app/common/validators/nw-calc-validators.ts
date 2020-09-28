import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NWCalcValidators {
    static maxValue(control:AbstractControl): ValidationErrors| null {
        if (control.value as number > 2147483647) {
            return {maxValue : {
                MaximumValue: 2147483647,
                ActualValue: control.value 
            }}
        }
        return null;
    }
}
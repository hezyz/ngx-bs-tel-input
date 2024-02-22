import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as lpn from 'google-libphonenumber';

export function phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        // Consider empty values valid. Use Validators.required to enforce non-empty values.
        return null;
    }

    // Assuming control.value is an object with { number: string, countryCode: string }
    // Adjust according to your actual value structure.
    const { number, countryCode } = control.value;

    try {
        const phoneUtil = lpn.PhoneNumberUtil.getInstance();
        const phoneNumber = phoneUtil.parse(number, countryCode);

        const isValid = phoneUtil.isValidNumberForRegion(phoneNumber, countryCode);
        if (!isValid) {
            // Return validation error if the phone number is not valid
            return { phoneNumberInvalid: true };
        }
    } catch (error) {
        // Return error if parsing fails
        return { phoneNumberInvalid: true };
    }

    // If the phone number is valid, return null (no errors)
    return null;
}

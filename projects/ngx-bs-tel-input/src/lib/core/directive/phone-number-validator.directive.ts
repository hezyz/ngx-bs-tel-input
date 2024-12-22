import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { phoneNumberValidator } from "../validator/ngx-bs-tel-input.validator";

@Directive({
    selector: '[appPhoneNumberValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true }],
    standalone: false
})
  export class PhoneNumberValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return phoneNumberValidator(control);
    }
  }
  
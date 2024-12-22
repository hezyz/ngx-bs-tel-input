import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxBsTelInputComponent } from '../../projects/ngx-bs-tel-input/src/public-api';
import { SearchCountryField } from '../../projects/ngx-bs-tel-input/src/lib/core/models/search-country-field.enum';
import { CountryISO } from '../../projects/ngx-bs-tel-input/src/lib/core/models/country-iso.enum';
import { PhoneNumberFormat } from '../../projects/ngx-bs-tel-input/src/lib/core/models/phone-number-format.enum';


@Component({
    selector: 'app-root',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxBsTelInputComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngx-bs-tel-input-app';

	//Input maxsimum lengght
	inputMaxLength: string = "20"
	//Specify countries 
	specifiedCountries: string[] = []
	includeDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [
		CountryISO.Israel,
		CountryISO.UnitedStates,
	];

  phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required]),
	});
}

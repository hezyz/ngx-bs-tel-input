import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryISO } from 'projects/ngx-bs-tel-input/src/lib/core/models/country-iso.enum';
import { PhoneNumberFormat } from 'projects/ngx-bs-tel-input/src/lib/core/models/phone-number-format.enum';
import { SearchCountryField } from 'projects/ngx-bs-tel-input/src/lib/core/models/search-country-field.enum';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
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

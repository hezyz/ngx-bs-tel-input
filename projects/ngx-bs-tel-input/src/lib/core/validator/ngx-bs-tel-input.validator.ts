import * as lpn from 'google-libphonenumber';

export const phoneNumberValidator = (control: any) => {
	if (!control.value) {
		return;
	}
	// Find <input> inside injected nativeElement and get its "id".
	const el: HTMLElement = control.nativeElement as HTMLElement;
	var temp: any = el.querySelector('input[type="tel"]')? el.querySelector('input[type="tel"]'): null
	
	const inputBox: HTMLInputElement = temp! 
	if (inputBox) {
		const id = inputBox.id;
		const isCheckValidation = inputBox.getAttribute('validation');
		if (isCheckValidation === 'true') {
			const isRequired = control.errors && control.errors.required === true;
			const error = { validatePhoneNumber: { valid: false } };

			inputBox.setCustomValidity('Invalid field.');

			let number: lpn.PhoneNumber | null = null;

			try {
				number = lpn.PhoneNumberUtil.getInstance().parse(
					control.value.number,
					control.value.countryCode
				);
			} catch (e) {
				if (isRequired === true) {
					return error;
				} else {
					inputBox.setCustomValidity('');
				}
			}
			if (control.value) {
				
				if (!number) {
					return error;
				} else {
					if (
						!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(
							number,
							control.value.countryCode
						)
					) {
						return error;
					} else {
						inputBox.setCustomValidity('');
					}
				}
			}
		} else if (isCheckValidation === 'false') {
			inputBox.setCustomValidity('');

			control.clearValidators();
		} 
	}
	return;
};

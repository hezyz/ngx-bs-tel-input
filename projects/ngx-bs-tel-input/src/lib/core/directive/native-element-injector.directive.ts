import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
	// tslint:disable-next-line: directive-selector
	selector: '[ngModel], [formControl], [formControlName]',
})
export class NativeElementInjectorDirective implements OnInit {
	constructor(
		private control: NgControl,
		private el: ElementRef<HTMLFormElement>
	) {}
	ngOnInit() {
		if (this.control.control) {
			(<any>this.control.control)['nativeElement'] = this.el.nativeElement;
		}
	}
}
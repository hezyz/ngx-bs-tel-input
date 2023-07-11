import { NgModule } from '@angular/core';
import { NgxBsTelInputComponent } from './ngx-bs-tel-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NativeElementInjectorDirective } from './core/directive/native-element-injector.directive';



@NgModule({
  declarations: [
    NgxBsTelInputComponent,
    NativeElementInjectorDirective
  ],
  imports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule
  ],
  exports: [
    NgxBsTelInputComponent,
    NativeElementInjectorDirective
  ]
})
export class NgxBsTelInputModule { }

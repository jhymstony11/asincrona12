import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormContactoComponent
  ]
})
export class FormularioModule { }

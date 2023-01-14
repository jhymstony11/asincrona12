import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent {
   //Crear atributo de tipo FormBuilder
   constructor(private formBuilder : FormBuilder){ }

   // Estructura del formulario reactivo
   registroForm = this.formBuilder.group({
    telefono:['', {validators:[Validators.required, Validators.pattern('[0-9]{9}')]}],
     nombres: ['', Validators.required],
     email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     asunto: ['', Validators.required],
     mensaje: ['', Validators.required],
     });
 
     // Generar un metodo get para cada campo del formularior reactivo
     get telefono(){ return this.registroForm.get('telefono'); }
     get nombres(){ return this.registroForm.get('nombres'); }
     get email(){ return this.registroForm.get('email'); }
     get asunto(){ return this.registroForm.get('asunto'); }
     get mensaje(){ return this.registroForm.get('mensaje'); }
 
 
 
     // Generar el metodo onSubmit para registrar los datos del formulario en un Array
     datos = new Array;
 
     exitoso = false;
 
     onSubmit(){
       if(!this.registroForm.valid){
         alert('Alguna validación no se ha cumplido');
         return;
       }
       this.datos.push({
         'Telefono': this.registroForm.get('telefono')?.value,
         'Nombres': this.registroForm.get('nombres')?.value,
         'Email': this.registroForm.get('email')?.value,
         'Asunto': this.registroForm.get('asunto')?.value,
         'Mensaje': this.registroForm.get('mensaje')?.value,
 
       });
       console.log(this.datos);
       this.exitoso = true;
     }
}

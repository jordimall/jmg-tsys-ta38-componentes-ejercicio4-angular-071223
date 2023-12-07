import { Component, Output, Input, EventEmitter } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css',
})
export class FormularioTareaComponent {
  tareaForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  @Output() addTarea = new EventEmitter();

  public crearTarea = (): void => {
    let title: string = this.validarCamposString(this.tareaForm.value.title);
    let description: string = this.validarCamposString(
      this.tareaForm.value.description
    );
    if (![title, description].includes('')) {
      this.addTarea.emit(new Tarea(title, description));
      this.tareaForm.reset();
    } else {
      alert('Campos invalidos');
    }
  };

  private validarCamposString = (value: any): string => {
    let valueDefect: string = '';
    if (value != null && value != undefined) {
      return value;
    }
    return valueDefect;
  };
}

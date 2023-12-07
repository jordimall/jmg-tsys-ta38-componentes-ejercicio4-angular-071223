import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent {
  @Input() listTareas: any | Tarea;

  @Output() borrarTarea = new EventEmitter();
  @Output() editarTarea = new EventEmitter();

  public eliminarTarea = (index: number): void => {
    this.borrarTarea.emit(index);
  };

  public modificarTarea = (index: number): void => {
    this.editarTarea.emit(index);
  };
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tarea } from './models/tarea';
import { FormularioTareaComponent } from "./formulario-tarea/formulario-tarea.component";
import { ListaTareasComponent } from "./lista-tareas/lista-tareas.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormularioTareaComponent, ListaTareasComponent]
})
export class AppComponent {
  tareas: Tarea[] = [];

  public addTarea = (tarea: Tarea): void => {
    this.tareas.push(tarea);
  };

  public editTarea = (i: number): void => {
    this.tareas[i].revertState();
  };

  public deleteTarea = (i: number): void => {
    this.tareas.splice(i, 1);
  };
}

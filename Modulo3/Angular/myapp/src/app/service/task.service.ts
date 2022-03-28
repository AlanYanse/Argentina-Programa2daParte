import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks'; // Importando la lista de tareas que simula ser una base de datos
import { Task } from 'src/app/Task'; // Importando la interfaz de las tareas
import { Observable, of } from 'rxjs'; // Esto es la libreria de los observables "programación reactiva"


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {}

  getTask(): Observable <Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }

}

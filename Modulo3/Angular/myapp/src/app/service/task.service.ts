import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks'; // Importando la lista de tareas que simula ser una base de datos
import { Task } from 'src/app/Task'; // Importando la interfaz de las tareas
import { Observable, of } from 'rxjs'; // Esto es la libreria de los observables "programación reactiva"
import{ HttpClient, HttpHandler } from "@angular/common/http"; // Esto permite realizar consultas http a la base de datos


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";
  constructor(private http: HttpClient) {}

  getTask(): Observable <Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl); // Para consultar la base de datos
    
  }

}

import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks'; // Importando la lista de tareas que simula ser una base de datos
import { Task } from 'src/app/Task'; // Importando la interfaz de las tareas
import { Observable, of } from 'rxjs'; // Esto es la libreria de los observables "programación reactiva"
import{ HttpClient, HttpHeaders } from "@angular/common/http"; // Esto permite realizar consultas http a la base de datos

const httpOptions = {

  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })

}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";
  constructor(private http: HttpClient) {}

  getTask(): Observable <Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl); // Para consultar la base de datos
    
  }

  deleteTask(task : Task) : Observable <Task>{    // Para eliminar

    const url =  `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);  
  }

  updateTaskReminder(task : Task) : Observable <Task>{ // Para actualizar el reminder

    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);

  }  
  
  addTask(task: Task): Observable <Task>{

    
    return this.http.post<Task>(this.apiUrl, task, httpOptions);

  }

  }

 

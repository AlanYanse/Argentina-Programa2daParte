import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks'; // Importando la lista de tareas que simula ser una base de datos
import { Task } from 'src/app/Task'; // Importando la interfaz de las tareas

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}

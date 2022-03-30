import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    // Like promise
    this.taskService.getTask().subscribe((task) => {
      this.tasks = task;
    } );
  }

  deleteTask(task : Task){

    
    
    this.taskService.deleteTask(task)
    
      .subscribe( 
        
        ()=>{

            this.tasks = this.tasks.filter((t)=>{
            console.log("task deleted");
            return t.id !== task.id
      })

    })
    
  }

}

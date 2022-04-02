import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../../Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

@Output() onAddTask : EventEmitter<Task> = new EventEmitter();

    text : string = "";
     day : string = "";
 reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length == 0){
      alert("please add task");
      return;
    }

    const {text, day, reminder} = this;
    const newTask : any = {text, day, reminder};

    //const newTask : any = this.text
    
    this.onAddTask.emit(newTask);
  }

  

}

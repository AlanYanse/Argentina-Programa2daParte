import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string = "Mi Lista de Tareas";

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(): void{
    alert("toggleAddTask");
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Aparentemente con este imput se puede recibir valores desde las propiedades de la etiqueta del componente
  @Input() text: string = ""; // ??? A veces estos decoradores van de sombrero y a veces adentro de las clases
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{

    this.btnClick.emit();

  }

}

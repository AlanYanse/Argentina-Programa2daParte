import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CatService } from '../shared/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'myapp';
  say: string = '';
  @Input() toSay: string = "";
  catSrc: any = "";

  constructor(private catService: CatService) {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // Es importante google y consultar la docmumentación
    // https://angular.io/api/core/OnChanges
    this.getCat(changes['toSay'].currentValue);
  }

  async getCat(message: string) {
    this.catSrc = await this.catService.get(message);
  }

  onSay(message: string) {
    this.toSay = message;
    alert(message);
    this.getCat(message);
  }

  ngOnInit(): void {
  }

}

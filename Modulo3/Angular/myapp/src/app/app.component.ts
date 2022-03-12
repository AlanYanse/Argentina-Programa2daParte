import { Component, Input, SimpleChanges } from '@angular/core';
import { CatService } from './shared/cat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}

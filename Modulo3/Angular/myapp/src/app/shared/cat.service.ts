import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  cat: string = '';
  catSrc: string = '#';

  constructor() { }

  async get(message: string) {
    if (message.length > 0) {
      return `https://cataas.com/cat/says/${message}`;
    }else{
      return;
    }
  }

  clear() {
    this.cat = '';
  }
}

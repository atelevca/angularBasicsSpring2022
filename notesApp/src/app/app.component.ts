import { Component } from '@angular/core';
import * as data from '../assets/books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: any = (data as any).default;

  closeModal(val: {index: number}){
    this.books.splice(val.index, 1)
  }
}

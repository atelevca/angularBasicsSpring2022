import { Component } from '@angular/core';
import booksData from "../assets/books.json"
import { Book } from './models/book.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'books-app';
  priceSum = 0

  books: Book[] = booksData;

  receivePrice(price:number){
    this.priceSum+=price
  }

  receiveMessage(){
    this.priceSum=0
  }

  constructor(){
  }
}

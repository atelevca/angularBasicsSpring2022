import { Component } from '@angular/core';
import booksData from "../assets/books.json"
import { Book } from './models/book.model';
import { BookDetailsComponent } from './components/book-details/book-details.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'books-app';


  books: Book[] = booksData;

  constructor(){
  }
}

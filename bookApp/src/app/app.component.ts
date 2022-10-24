import { Component, OnInit } from '@angular/core';
import booksJSON from '../assets/books.json';
import { Book } from './models/book.model';
import { SortTypes } from './models/sortTypes.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books: Book[] = booksJSON;
  booksFiltered: Book[] = [...this.books];
  title = 'bookApp';

  sortType: SortTypes = 0;

  ngOnInit(): void {
    this.onFindBooks();
  }

  onFindBooks(value: string = '') {
    const regex = new RegExp(`${value.toLowerCase()}`);
    this.booksFiltered = this.books.filter((book) =>
      regex.test(book.title.toLowerCase())
    );
    this.onChangeSetFilter(this.sortType.toString());
  }

  onChangeSetFilter(value: string) {
    let sortFunction = null;
    switch (+value) {
      case 0:
      default:
        sortFunction = (a: Book, b: Book) => (a.title > b.title ? 1 : -1);
        break;
      case 1:
        sortFunction = (a: Book, b: Book) => (a.title < b.title ? 1 : -1);
        break;
      case 2:
        sortFunction = (a: Book, b: Book) =>
          a.price.value > b.price.value ? 1 : -1;
        break;
      case 3:
        sortFunction = (a: Book, b: Book) =>
          a.price.value < b.price.value ? 1 : -1;
        break;
    }

    this.booksFiltered = this.booksFiltered.sort(sortFunction);
  }
}

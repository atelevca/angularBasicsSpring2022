import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import BooksData from '../../../assets/books.json';
import { BookModel } from '../../models/books.model';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent {
  public books: BookModel[] = BooksData;

  public book: BookModel = {
    ISBN: 0,
    title: '',
    author: '',
    summary: '',
    image: '',
    price: {
      currency: '',
      value: 0,
      displayValue: ''
    }
  }

  public showModal: boolean = false;

  @Output() bookSelected = new EventEmitter<BookModel>();
  @Output() modalOpen = new EventEmitter<boolean>();

  public selectBook(book: BookModel): void {
    this.book = book;
    this.showModal = true;
    this.bookSelected.emit(book);
    this.modalOpen.emit(this.showModal);
  }
}

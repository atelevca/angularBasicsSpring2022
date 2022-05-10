import { Observable, of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { initialValue } from 'src/helper/initial';
import { Book } from 'src/model/Book.model';


@Injectable({
  providedIn: 'root'
})

export class TransferDataService {
  constructor() { }
  actualBook: Book = initialValue

  bookSubject = new Subject<Book>();

  addBook(book: Book) {
    this.actualBook = book
  }

  clearBook(data: Book): void {
    this.actualBook = initialValue
  }

  // getBook(): Observable<Book> {
  //   const book = of(this.actualBook)
  //   return book
  // }
}

import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { initialValue } from 'src/helper/initial'
import { Book } from 'src/model/Book.model'
import dataBooks from 'books.json'

@Injectable({
  providedIn: 'root'
})

export class TransferDataService {
  constructor() { }
  actualBook: Book = initialValue
  dataBooks: Array<Book> = dataBooks

  bookSubjectId = new Subject<number>()
  loginSubject = new Subject<string>()

  addBook(book: Book) {
    this.actualBook = book
  }

  clearBook(): void {
    this.actualBook = initialValue
  }

  getBook(id: number): Book {
    const book = this.dataBooks.find((book: Book) => book.ISBN === id)
    this.loginSubject.next('')
    return book ? book : initialValue
  }

  getAllBook(): Array<Book> {
    return this.dataBooks
  }
}

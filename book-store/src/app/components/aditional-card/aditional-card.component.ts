import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import getRandomNumber from 'src/helper/randomNum';
import { Book } from 'src/model/Book.model';

// type CardBook = Omit<Book, 'price'>

@Component({
  selector: 'app-aditional-card',
  templateUrl: './aditional-card.component.html',
  styleUrls: ['./aditional-card.component.sass']
})
export class AditionalCardComponent implements OnInit {
  constructor() { }
  @Input()
  data: Array<Book> = []

  bookOfTheDay = this.data && this.data.slice(0, 2)

  @Output()
  onHandleBook = new EventEmitter<Book>();

  public handlerBook(book: Book) {
    this.onHandleBook.next(book)
  }

  ngOnInit(): void {
    this.bookOfTheDay = this.data && this.data.slice(0, 2)
  }
}

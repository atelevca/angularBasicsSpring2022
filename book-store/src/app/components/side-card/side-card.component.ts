import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { initialValue } from 'src/helper/initial';
import { Book } from 'src/model/Book.model';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.sass']
})
export class SideCardComponent implements OnInit {
  constructor(){}

  @Input()
  actualBook: Book = initialValue

  @Output()
  onHandleBook = new EventEmitter<Book>();

  public handlerBook() {
    this.onHandleBook.next(initialValue)
  }

  ngOnInit(): void {}
}

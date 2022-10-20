import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookModel} from "../../models/books.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  constructor() { }

  @Input()
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

  @Input()
  public showModal: boolean = false;

  @Output() closeModal = new EventEmitter<boolean>();

  closeModalHandler() {
    this.closeModal.emit(false);
  }
}

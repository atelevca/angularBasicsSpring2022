import { Component } from '@angular/core';
import {BookModel} from "./models/books.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
  }

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

  getBook($event: BookModel) {
    this.book = $event;
  }

  getShowModal($event: boolean) {
    this.showModal = $event;
  }

  closeModal($event: boolean) {
    this.showModal = $event;
  }
}

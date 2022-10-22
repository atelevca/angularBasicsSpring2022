import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  hover: boolean;
  @Input() book : Book = {
    "ISBN": 0,
    "title": "",
    "author": "",
    "summary": "",
    "image": "",
    "price": {
      "currency": "",
      "value": 0,
      "displayValue": ""
    }
  } 

  @Output() bookPrice = new EventEmitter();

  constructor() {
    this.hover = false;
  }

  ngOnInit(): void {
  }

  sendPrice(){
    this.bookPrice.emit(this.book.price.value);
  }
}

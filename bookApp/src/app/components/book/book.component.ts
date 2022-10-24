import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input()
  public book: Book = {
    ISBN: 0,
    title: '',
    author: '',
    summary: '',
    image: '',
    price: { currency: '', value: 0, displayValue: '' },
  };

  
}

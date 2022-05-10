import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { initialValue } from 'src/helper/initial';
import { Book } from 'src/model/Book.model';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.sass']
})
export class SideCardComponent implements OnInit {
  constructor(private dataService: TransferDataService){}

  @Input()
  actualBook: Book = initialValue

  @Output()
  onHandleBook = new EventEmitter<Book>();

  public handlerBook() {
    this.dataService.bookSubject.next(initialValue)
  }

  ngOnInit(): void {
    this.dataService.bookSubject.subscribe(book => this.actualBook = book)
  }
}

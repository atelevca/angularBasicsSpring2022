import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import getRandomNumber from 'src/helper/randomNum';
import { Book } from 'src/model/Book.model';
import { TransferDataService } from 'src/app/service/transfer-data.service';

// type CardBook = Omit<Book, 'price'>

@Component({
  selector: 'app-aditional-card',
  templateUrl: './aditional-card.component.html',
  styleUrls: ['./aditional-card.component.sass']
})
export class AditionalCardComponent implements OnInit {
  constructor(private dataService: TransferDataService) { }

  @Input()
  data: Array<Book> = []

  bookOfTheDay = this.data && this.data.slice(0, 2)

  @Output()
  onHandleBook = new EventEmitter<Book>();

  public handlerBook(bookISBN: number) {
    this.dataService.bookSubjectId.next(bookISBN)
  }

  ngOnInit(): void {
    this.bookOfTheDay = this.data && this.data.slice(0, 2)
  }
}

import { Input, Component, OnInit, Output, EventEmitter  } from '@angular/core'
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { initialValue } from 'src/helper/initial'
import { Book } from 'src/model/Book.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})

export class CardComponent implements OnInit {
  constructor( private dataService: TransferDataService){}

  @Input()
  book: Book = initialValue

  @Output()
  onHandleBook = new EventEmitter<Book>();

  public handlerBook() {
    // this.onHandleBook.next(this.book)
    this.dataService.bookSubject.next(this.book)
  }

  ngOnInit(): void {}

}

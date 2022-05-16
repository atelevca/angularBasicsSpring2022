import { Component, OnInit } from '@angular/core'
import { TransferDataService } from 'src/app/service/transfer-data.service'
import { initialValue } from 'src/helper/initial'
import { Book } from 'src/model/Book.model'

@Component({
  selector: 'app-preview-book',
  templateUrl: './preview-book.component.html',
  styleUrls: ['./preview-book.component.sass']
})

export class PreviewBookComponent implements OnInit {
  constructor(private dataService: TransferDataService) { }

  actualBook: Book = initialValue

  ngOnInit(): void {
    this.dataService.bookSubjectId.subscribe(id => {
      this.actualBook = this.dataService.getBook(id)
    })
  }
}

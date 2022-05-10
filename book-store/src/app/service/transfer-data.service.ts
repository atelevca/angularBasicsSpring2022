import { Observable, of, Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { initialValue } from 'src/helper/initial'
import { Book } from 'src/model/Book.model'

@Injectable({
  providedIn: 'root'
})

export class TransferDataService {
  constructor() { }
  public actualBook = new Observable(observer => {
    const addBook = (book: Book) => {
      observer.next(book)
    }
  })

}

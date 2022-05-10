import { Component, Input } from '@angular/core';
import books from 'books.json'
import { initialValue } from 'src/helper/initial';
import { Book } from 'src/model/Book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  constructor( ){}
  @Input()
  public actualBook: Book = initialValue

  activeTab: number = 0

  public handleActualBook(book: Book){
    this.actualBook = book
  }

  public setActiveTab(tab: number){
    this.activeTab = tab
  }

  initialData: Array<Book> = books
}
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBook} from "../../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  showMore = false

  @Input()
  book: IBook = {title: '', summary: '', author: '', image: '', ISBN: 0, price: {currency: "", displayValue: '', value: 0}}
  @Input()
  i = 0
  @Input()
  favorites: string[] = []

  constructor() { }

  @Output()
  public onToggleFavorite = new EventEmitter<string>()

  public toggleFavorite(){
    this.onToggleFavorite.emit(this.book.title)
  }

  showDescription(){
    this.showMore = !this.showMore
  }

  ngOnInit(): void {

  }

}

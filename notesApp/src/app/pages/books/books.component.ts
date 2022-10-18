import {Component, OnInit} from '@angular/core';
import data from './books.json'
import {IBook} from "../../models/book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: IBook[] | [] = [];
  public searchQuery = ''
  currentStyles = {}
  gridType = ''
  favorites: string[] = []
  oddGridBooks: IBook[] = []
  evenGridBooks: IBook[] = []

  constructor() {
  }

  setCurrentStyles(type: string) {
    this.gridType = type
    this.currentStyles = {
      'display': this.gridType === 'row' ? 'flex' : 'grid',
      'flex-direction': this.gridType === 'row' ? 'column' : null,
      'row-gap': this.gridType === 'row' ? '20px' : "15px",
      'grid-template-columns': this.gridType === 'grid' ? 'repeat(2, 1fr)' : null,
      'column-gap': this.gridType === 'grid' ? '15px' : null
    }
  }

  setGridType(type: string){
    this.setCurrentStyles(type)
    if(type === 'grid'){
      this.books.forEach((book, i) => book.ISBN % 2 === 0 ? this.evenGridBooks.push(book) : this.oddGridBooks.push(book))
    }
  }

  ngOnInit() {
    this.books = data
    this.setCurrentStyles('row')
  }

  public toggleFavorite(title: string){
    if(this.favorites.includes(title)){
      const index = this.favorites.indexOf(title)
      this.favorites.splice(index, 1)
    } else {
      this.favorites = [...this.favorites, title]
    }
  }
}

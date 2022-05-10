import { Component, Input, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core'
import { SwiperComponent } from 'swiper/angular'
import { Book } from 'src/model/Book.model'
import authors from 'src/helper/faces'

import SwiperCore, { EffectCards, SwiperOptions } from 'swiper'

SwiperCore.use([EffectCards])

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {
  constructor() {}

  @Input()
  data: Array<Book> = []
  filteredAuthors: any = {}
  faces: any = authors

  config: SwiperOptions = {
    direction: 'vertical',
    grabCursor: true,
    effect: 'cards'
  }

  authorsNames: Array<string> = ['']

  filterAuthors(data: Array<Book>) {
    const initalData: any = {}
    data.forEach((book: Book) => {
      const {author} = book
      if (author in initalData ) {
        initalData[author].push(book)
      } else {
        initalData[author] = []
        initalData[author].push(book)
      }
    })
    this.filteredAuthors = initalData
    this.authorsNames = Object.keys(initalData)
  }

  ngOnInit(): void {
    this.filterAuthors(this.data)
    console.log(this.filteredAuthors)
  }

}

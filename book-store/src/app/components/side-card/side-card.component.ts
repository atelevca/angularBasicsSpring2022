import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service'

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.sass']
})

export class SideCardComponent implements OnInit {
  constructor(private dataService: TransferDataService) { }

  actualBookId: number = 0
  login: string = ''
  actualTitle: string = ''

  public handlerBook(): void {
    this.dataService.bookSubjectId.next(0)
    this.dataService.loginSubject.next('')
  }

  ngOnInit(): void {
    this.dataService.bookSubjectId.subscribe(id => {
      this.actualBookId = id
      if (id > 0) this.actualTitle = 'About the book'
    })
    this.dataService.loginSubject.subscribe(login => {
      this.login = login
      this.actualTitle = 'Welcome to accout'
    })
  }

  ngDoCheck() {}
}

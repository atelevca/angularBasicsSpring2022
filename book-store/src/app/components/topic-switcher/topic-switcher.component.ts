import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-topic-switcher',
  templateUrl: './topic-switcher.component.html',
  styleUrls: ['./topic-switcher.component.sass']
})
export class TopicSwitcherComponent implements OnInit {
  constructor(private dataService: TransferDataService) {}

  @Input()
  activeTab: number = 0
  categories: Array<string> = ['Books', 'Audiobooks', 'Podcasts']

  @Output()
  handlerActiveTab = new EventEmitter<number>()

  public setActive(item: number): void {
    this.activeTab = item
    this.handlerActiveTab.next(item)
  }

  public loginHandler() {
    this.dataService.loginSubject.next('login')
  }

  ngOnInit(): void {}

}

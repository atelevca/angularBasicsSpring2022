import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topic-switcher',
  templateUrl: './topic-switcher.component.html',
  styleUrls: ['./topic-switcher.component.sass']
})
export class TopicSwitcherComponent implements OnInit {
  constructor() { }

  @Input()
  activeTab: number = 0
  categories: Array<string> = ['Books', 'Audiobooks', 'Podcasts']

  @Output()
  handlerActiveTab = new EventEmitter<number>()

  public setActive(item: number): void {
    this.activeTab = item
    this.handlerActiveTab.next(item)
  }

  ngOnInit(): void {}

}

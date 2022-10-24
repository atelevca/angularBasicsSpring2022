import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() onFindBooks = new EventEmitter<string>();
  @Output() onChangeSetFilter = new EventEmitter<string>();
  onChangeSearchQuery(value: string) {
    this.onFindBooks.emit(value);
  }
  onChangeSelectedFilter(value: string) {
    console.log(value);
    this.onChangeSetFilter.emit(value);
  }

  onChange() {}
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() onChangeSearchQuery = new EventEmitter<string>();
  searchQuery: string = '';

  searchQueryUpdated(value: string) {
    this.onChangeSearchQuery.emit(value);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SortTypes } from 'src/app/models/sortTypes.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() onChangeSelectedFilter = new EventEmitter<string>();
  selectedFilter: SortTypes = 0;
  filterTypes: SortTypes[] = Array.from(Array(4).keys());
  changeValue(e: any) {
    this.onChangeSelectedFilter.emit(e.target.value);
  }
  constructor() {}

  ngOnInit(): void {}
}

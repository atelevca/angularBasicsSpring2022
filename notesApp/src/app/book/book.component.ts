import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() item: any
  @Output() closeModal = new EventEmitter<{ index: number }>();

  close() {
    this.closeModal.emit({ index: this.item.i })
  }
}

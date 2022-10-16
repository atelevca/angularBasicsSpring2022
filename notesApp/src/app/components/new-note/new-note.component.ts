import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note.model';
@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent {
  public note: Note = {
    id: '0',
    label: 'This is',
    data: 'Test note',
    date: new Date() + '',
  };

  @Output() onNoteSubmit = new EventEmitter<Note>();

  public submitNewNote() {
    this.onNoteSubmit.emit(this.note);

    this.note = {
      id: '',
      label: '',
      data: '',
      date: new Date() + '',
    };
  }
}

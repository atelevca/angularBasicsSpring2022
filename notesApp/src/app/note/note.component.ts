import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input()
  public noteItem: Note={ id: '', label: '', data: '', date: ''};

  @Output()
  public onRemove= new EventEmitter<string>();

  public removeNote(){
  this.onRemove.emit(this.noteItem.id);
  }
}
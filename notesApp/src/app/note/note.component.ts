import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input()
  public noteItem: Note={ id: '', label: '', data: ''};

  @Output()
  public onRemove= new EventEmitter<string>();

  public removeNote(){
  this.onRemove.next(this.noteItem.id);
  }
}

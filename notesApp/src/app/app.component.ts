import { Component } from '@angular/core';
import { Note } from './models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public notes: Note[] = [
    {
      id: '0',
      label: 'Welcome to Angular!',
      data: 'Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.',
      date: new Date() + '',
    },
  ];

  public addNewNote(note: Note) {
    this.notes.push({
      ...note,
      id: Math.random() + '',
    });
  }

  public removeNote(id: string) {
    this.notes = this.notes.filter((el: Note) => el.id !== id);
  }
}

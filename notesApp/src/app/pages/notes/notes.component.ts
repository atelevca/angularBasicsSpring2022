import { Component, OnInit } from '@angular/core';
import {Note} from "../../models/note.model";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor() { }

  public notes: Note[] = [
    {
      id: '0',
      label: 'Welcome to Angular!',
      data: 'Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.',
      date: new Date() + '',
    },
  ];

  public addNewNote(note: Note): void {
    this.notes.push({
      ...note,
      id: Math.random() + '',
    });
  }

  public removeNote(id: string): void {
    this.notes = this.notes.filter((el: Note) => el.id !== id);
  }

}

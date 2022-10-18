import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteComponent } from './components/note/note.component';

import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BooksComponent } from './pages/books/books.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { BookComponent } from './components/book/book.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NewNoteComponent,
    NavbarComponent,
    HighlightDirective,
    TruncatePipe,
    BooksComponent,
    NotesComponent,
    SearchFilterPipe,
    BookComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

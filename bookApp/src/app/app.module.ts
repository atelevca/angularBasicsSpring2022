import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { HoverDirective } from './directives/hover.directive';
import { SentecesPipe } from './pipes/senteces.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    NavbarComponent,
    SearchComponent,
    FilterComponent,
    HoverDirective,
    SentecesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardHoverDirective } from 'src/directives/hover.directive';
import { EurToUsd } from 'src/pipes/eurToUsd.pipe';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EurToUsd,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

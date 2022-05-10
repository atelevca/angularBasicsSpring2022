import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwiperModule } from 'swiper/angular'

import { AppComponent } from './app.component'
import { CardComponent } from './components/card/card.component'
import { AditionalCardComponent } from './components/aditional-card/aditional-card.component';
import { SideCardComponent } from './components/side-card/side-card.component';
import { TopicSwitcherComponent } from './components/topic-switcher/topic-switcher.component';
import { AuthorsComponent } from './components/authors/authors.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AditionalCardComponent,
    SideCardComponent,
    TopicSwitcherComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

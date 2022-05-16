import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwiperModule } from 'swiper/angular'
import { HttpClientModule } from '@angular/common/http'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component'
import { CardComponent } from './components/card/card.component'
import { AditionalCardComponent } from './components/aditional-card/aditional-card.component';
import { SideCardComponent } from './components/side-card/side-card.component';
import { TopicSwitcherComponent } from './components/topic-switcher/topic-switcher.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LoginComponent } from './components/login/login.component';
import { PreviewBookComponent } from './components/preview-book/preview-book.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AditionalCardComponent,
    SideCardComponent,
    TopicSwitcherComponent,
    AuthorsComponent,
    LoginComponent,
    PreviewBookComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

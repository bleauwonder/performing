import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MailingListComponent } from './cards/mailing-list-card/mailing-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListenComponent } from './cards/listen-card/listen.component';
import { WatchComponent } from './cards/watch-card/watch.component';
import { AboutCardComponent } from './cards/about-card/about-card.component';
import { PhotoCardComponent } from './cards/photo-card/photo-card.component';
import { ContactCardComponent } from './cards/contact-card/contact-card.component';
import { HeaderTitleComponent } from './cards/header-title-card/header-title.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { GalleryCardComponent } from './cards/gallery-card/gallery-card.component';
import { BioCardComponent } from './cards/bio-card/bio-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    MailingListComponent,
    AboutComponent,
    ContactComponent,
    ListenComponent,
    WatchComponent,
    AboutCardComponent,
    PhotoCardComponent,
    ContactCardComponent,
    HeaderTitleComponent,
    PhotosComponent,
    GalleryCardComponent,
    BioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

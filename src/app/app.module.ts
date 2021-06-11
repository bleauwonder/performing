import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MailingListComponent } from './home-cards/mailing-list-card/mailing-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListenComponent } from './home-cards/listen-card/listen.component';
import { WatchComponent } from './home-cards/watch-card/watch.component';
import { AboutCardComponent } from './home-cards/about-card/about-card.component';
import { PhotoCardComponent } from './home-cards/photo-card/photo-card.component';
import { ContactCardComponent } from './home-cards/contact-card/contact-card.component';
import { HeaderTitleComponent } from './home-cards/header-title-card/header-title.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { GalleryCardComponent } from './page-cards/gallery-card/gallery-card.component';
import { BioCardOneComponent } from './page-cards/bio-card-one/bio-card-one.component';
import { BioPhotoCardComponent } from './page-cards/bio-photo-card/bio-photo-card.component';
import { BioCardTwoComponent } from './page-cards/bio-card-two/bio-card-two.component';
import { BioCardThreeComponent } from './page-cards/bio-card-three/bio-card-three.component';
import { VideosComponent } from './pages/videos/videos.component';
import { MailDialogComponent } from './dialogs/mail-dialog/mail-dialog.component';
import { BioCardHeaderComponent } from './page-cards/bio-card-header/bio-card-header.component';
import { VideoCarouselComponent } from './page-cards/video-carousel/video-carousel.component';
import { ContactPageCardComponent } from './page-cards/contact-page-card/contact-page-card.component';
import { BioCardFourComponent } from './page-cards/bio-card-four/bio-card-four.component';
import { BioCardFiveComponent } from './page-cards/bio-card-five/bio-card-five.component';
import { EpkComponent } from './pages/epk/epk.component';
import { BioCardComponent } from './page-cards/epk-bio-card/epk-bio-card.component';
import { EpkHeaderComponent } from './page-cards/epk-header/epk-header.component';
import { EpkCardComponent } from './home-cards/epk-card/epk-card.component';
import { EpkPhotoCardComponent } from './page-cards/epk-photo-card/epk-photo-card.component';


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
    BioCardOneComponent,
    BioPhotoCardComponent,
    BioCardTwoComponent,
    BioCardThreeComponent,
    VideosComponent,
    MailDialogComponent,
    BioCardHeaderComponent,
    VideoCarouselComponent,
    ContactPageCardComponent,
    BioCardFourComponent,
    BioCardFiveComponent,
    EpkComponent,
    BioCardComponent,
    EpkHeaderComponent,
    EpkCardComponent,
    EpkPhotoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [MailDialogComponent]
})
export class AppModule { }

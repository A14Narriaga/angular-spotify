import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { HomeComponent } from './containers/home/home.component'
import { SearcherComponent } from './components/searcher/searcher.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AlbumCardComponent } from './components/albumCard/albumCard.component'
import { CutPipe } from './pipes/cut.pipe'
import { ArtistCardComponent } from './components/artistCard/artistCard.component'
import { SearchComponent } from './containers/search/search.component'
import { ValidateImgPipe } from './pipes/validateImg.pipe'
import { LoadingComponent } from './components/loading/loading.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { PaginationPipe } from './pipes/pagination.pipe';
import { SecureTrackPipe } from './pipes/secureTrack.pipe';
import { ArtistComponent } from './containers/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearcherComponent,
    NavbarComponent,
    AlbumCardComponent,
    CutPipe,
    ArtistCardComponent,
    SearchComponent,
    ValidateImgPipe,
    LoadingComponent,
    PaginationComponent,
    PaginationPipe,
    ArtistComponent,
    SecureTrackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

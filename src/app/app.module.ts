import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { HomeComponent } from './containers/home/home.component'
import { SearcherComponent } from './components/searcher/searcher.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AlbumComponent } from './components/album/album.component'
import { CutPipe } from './pipes/cut.pipe'
import { ArtistComponent } from './components/artist/artist.component'
import { SearchComponent } from './containers/search/search.component'
import { ValidateImgPipe } from './pipes/validateImg.pipe'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SearcherComponent,
		NavbarComponent,
		AlbumComponent,
		CutPipe,
		ArtistComponent,
		SearchComponent,
		ValidateImgPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

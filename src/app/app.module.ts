import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxPaginationModule } from 'ngx-pagination'
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
import { LoadingComponent } from './components/loading/loading.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { PaginationPipe } from './pipes/pagination.pipe'

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
		LoadingComponent,
		PaginationComponent,
		PaginationPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxPaginationModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

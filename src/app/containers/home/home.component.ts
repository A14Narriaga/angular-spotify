import { SpotifyService } from '../../services/spotify/spotify.service'
import { Component } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
	newReleases: any[]
	constructor(
		private spotifyService: SpotifyService
	) {
		this.newReleases = []
		this.spotifyService
			.getNewReleases()
			.subscribe((data: any) => {
				this.newReleases = data.albums.items
			})
	}
}

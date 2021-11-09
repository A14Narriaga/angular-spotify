import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify/spotify.service'

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.sass'],
})
export class ArtistComponent {
	artist: any = {}

	constructor(
		private spotifyService: SpotifyService,
		private activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(({ id }) =>
			this.getArtist(id)
		)
	}

	getArtist = (id: string) => {
		this.spotifyService
			.getArtist(id)
			.subscribe((data) => (this.artist = data))
	}
}

import { Component, OnInit } from '@angular/core'
import { SpotifyService } from '../../services/spotify/spotify.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
	artists: any[]
	currentSearch: string

	constructor(
		private spotifyService: SpotifyService
	) {
		this.artists = []
		this.currentSearch = ''
	}

	ngOnInit(): void {}

	searchArtists = (value: any) => {
		this.spotifyService
			.getArtists(value)
			.subscribe((data: any) => {
				this.artists = data
			})
		this.currentSearch = value
	}
}

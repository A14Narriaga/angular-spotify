import { SpotifyService } from '../../services/spotify/spotify.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-searcher',
	templateUrl: './searcher.component.html',
	styleUrls: ['./searcher.component.sass'],
})
export class SearcherComponent implements OnInit {
	currentSearch: string
	artists: any[]

	constructor(
		private spotifyService: SpotifyService
	) {
		this.currentSearch = ''
		this.artists = []
	}

	ngOnInit(): void {}

	searchArtists = (searchInput: any) => {
		if (searchInput.value !== '') {
			this.spotifyService
				.getArtists(searchInput.value)
				.subscribe((data: any) => {
					this.artists = data.artists.items
				})
			this.currentSearch = searchInput.value
		}
		searchInput.value = ''
	}
}

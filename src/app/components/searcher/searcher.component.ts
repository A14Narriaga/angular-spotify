import { Component, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'app-searcher',
	templateUrl: './searcher.component.html',
	styleUrls: ['./searcher.component.sass'],
})
export class SearcherComponent {
	@Output() searchText: EventEmitter<string>

	constructor() {
		this.searchText = new EventEmitter()
	}

	searchArtists = (searchInput: any) =>
		searchInput.value !== ''
			? this.searchText.emit(searchInput.value)
			: (searchInput.value = '')
}

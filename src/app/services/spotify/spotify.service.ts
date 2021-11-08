import {
	HttpClient,
	HttpHeaders,
} from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class SpotifyService {
	token =
		'BQCuQsc8uCQbPw79H74aEcjVKY7SHTs372xcT1ke8ANeO4IrBTQbzq0h2ghIBHEYaYggpIM4F-dgoaqF_2k'

	constructor(private httpClient: HttpClient) {}

	getNewReleases = () => {
		const headers = new HttpHeaders({
			Authorization: `Bearer ${this.token}`,
		})
		return this.httpClient.get(
			'https://api.spotify.com/v1/browse/new-releases',
			{ headers }
		)
	}

	getArtists = (value: string) => {
		value = value.replace(' ', '%20')
		const headers = new HttpHeaders({
			Authorization: `Bearer ${this.token}`,
		})
		return this.httpClient.get(
			`https://api.spotify.com/v1/search?q=${value}&type=artist`,
			{ headers }
		)
	}
}

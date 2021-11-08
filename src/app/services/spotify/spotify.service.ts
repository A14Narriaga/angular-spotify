import {
	HttpClient,
	HttpHeaders,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
// Aspersor de agua
import { map } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class SpotifyService {
	token =
		'BQBfobCdE8ZLdWLiAqosP33-cuKRlt8ti4nYLaVkc-nU9omR9jY0Ln-V7j3y_Krz2vMXFdLSEdfSjdb2QQc'

	constructor(private httpClient: HttpClient) {}

	getQuery = (query: string) => {
		const headers = new HttpHeaders({
			Authorization: `Bearer ${this.token}`,
		})
		const url = `https://api.spotify.com/v1/${query}`
		return this.httpClient.get(url, { headers })
	}

	getNewReleases = () =>
		this.getQuery('browse/new-releases').pipe(
			map((data: any) => data.albums.items)
		)

	getArtists = (value: string) =>
		this.getQuery(
			`search?q=${value.replace(
				' ',
				'%20'
			)}&type=artist`
		).pipe(
			map((data: any) => data['artists'].items)
		)
}

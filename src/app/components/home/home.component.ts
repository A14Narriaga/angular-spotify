import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
	paises: any[]
	constructor(private http: HttpClient) {
		this.paises = []
		this.http
			.get(
				'https://restcountries.com/v3.1/lang/spa'
			)
			.subscribe((data: any) => {
				console.log(data)
				this.paises = data
			})
	}

	ngOnInit(): void {}
}

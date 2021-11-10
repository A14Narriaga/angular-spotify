import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent {
	currentPage: number = 1
	pages: number[] = [1]

	@Input() set numOfPages(data: any) {
		if (data) {
			for (let i = 2; i <= data; i++) {
				this.pages.push(i)
			}
		}
	}

	constructor(private router: Router) {}

	movePage = (move: string) => {
		switch (move) {
			case 'last':
				this.currentPage === 1 ? this.currentPage : this.currentPage--
				break
			case 'next':
				this.currentPage === this.pages.length
					? this.currentPage
					: this.currentPage++
				break
		}
		this.router.navigate(['/home', this.currentPage])
	}

	setPage = (page: number) => {
		this.currentPage = page
		this.router.navigate(['/home', this.currentPage])
	}
}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './containers/home/home.component'
import { SearchComponent } from './containers/search/search.component'

const routes: Routes = [
	{
		path: 'home/:pag',
		component: HomeComponent,
	},
	{
		path: 'search',
		component: SearchComponent,
	},
	{
		path: '**',
		redirectTo: 'home/1',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

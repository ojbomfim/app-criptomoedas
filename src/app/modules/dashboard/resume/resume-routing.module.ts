import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ResumeComponent } from './resume.component'
import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
	{
		path: '',
		component: ResumeComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		TranslateModule
	],
	exports: [
		RouterModule,
		TranslateModule
	]
})
export class ResumeRoutingModule { }

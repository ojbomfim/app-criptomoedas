import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ResumeRoutingModule } from './resume-routing.module'
import { ResumeComponent } from './resume.component'
import { ProfitComponent } from './profit/profit.component'
import { ResultsComponent } from './results/results.component'
import { SharedModule } from '../../../shared/shared.module'
import { ChartsModule } from '../../chart/charts.module'
import { AverageQualityTableComponent } from './average-quality-table/average-quality-table.component'
import { RobotsResumeComponent } from './robots-resume/robots-resume.component'
import { TranslateModule } from "@ngx-translate/core"

@NgModule({
	declarations: [
		ResumeComponent,
		ProfitComponent,
		ResultsComponent,
		AverageQualityTableComponent,
		RobotsResumeComponent,
	],
	imports: [
		CommonModule,
		ResumeRoutingModule,
		SharedModule,
		ChartsModule,
		TranslateModule,
	],
	exports: [
		TranslateModule,
	]
})
export class ResumeModule { }

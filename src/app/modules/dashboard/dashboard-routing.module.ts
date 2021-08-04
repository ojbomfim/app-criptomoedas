import { SharedModule } from 'src/app/shared/shared.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { SettingsComponent } from './settings/settings.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'resume'
	},
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'resume',
				loadChildren: () => import('./resume/resume.module').then(
					r => r.ResumeModule
				)
			},
			{
				path: 'my-profile',
				component: MyProfileComponent
			},
			{
				path: 'accounts',
				component: AccountsComponent
			},
			{
				path: 'customers',
				component: CustomersComponent
			},
			{
				path: 'exchanges',
				component: ExchangesComponent
			},
			{
				path: 'settings',
				component: SettingsComponent
			},
			{
				path: 'strategies',
				component: StrategiesComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		TranslateModule
	],
	exports: [
		RouterModule,
		SharedModule,
		TranslateModule
	]
})
export class DashboardRoutingModule { }

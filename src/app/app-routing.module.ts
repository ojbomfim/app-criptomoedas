import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RecoveryPasswordModule } from './modules/recovery-password/recovery-password.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthGuard } from './core/guards/auth.guard';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard/my-profile'
	},
	{
		path: 'authentication',
		loadChildren: () => import('./modules/authentication/authentication.module')
			.then(r => AuthenticationModule)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./modules/dashboard/dashboard.module')
			.then(r => DashboardModule),
		// canActivate: [
		// 	AuthGuard
		// ],
		// canLoad: [
		// 	AuthGuard
		// ]
	},
	{
		path: 'recovery-password',
		loadChildren: () => import('./modules/recovery-password/recovery-password.module')
			.then(r => RecoveryPasswordModule)
	}
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		SharedModule,
		TranslateModule
	],
	exports: [
		RouterModule,
		SharedModule,
		TranslateModule
	]
})
export class AppRoutingModule { }

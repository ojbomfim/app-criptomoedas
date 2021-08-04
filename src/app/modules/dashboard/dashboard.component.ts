import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

	constructor(private translate: TranslateService) {
		translate.setDefaultLang('pt');

	}

	switchLanguage(language: string) {
		this.translate.use(language);
	}

	ngOnInit(): void {
	}


}

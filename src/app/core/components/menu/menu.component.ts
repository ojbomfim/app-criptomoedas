import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faUsersCog, faTools, faHistory } from '@fortawesome/fontawesome-free';


@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

	public toggleMenu = false;
	public active: string;
	public activeUserRoute: boolean;
	public activeUserId: string;
	public isSupport: boolean;
	faUsersCog = faUsersCog;
	faTools = faTools;
	faHistory = faHistory;
	constructor() {

	}

	ngOnInit() {

	}


}

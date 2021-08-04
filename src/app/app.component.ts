import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {


	title = 'Genesis'
	public contLogVersao = 0


	constructor(private translate: TranslateService) {
		translate.setDefaultLang('pt');	
		}

	  switchLanguage(language: string) {
		this.translate.use(language);
	  }


	ngOnInit(): void {
		this.mostrarVersao()
	}

	mostrarVersao() {
		if (this.contLogVersao === 0) {
			this.contLogVersao++

			const versao = environment ? environment.VERSION_APP : '0.0.0'
			const aplicacao = 'Genesis'
			const api = environment.API
			const ambiente = environment.production
				? 'Produção'
				: 'Homologação'

			console.log(
				`%c${api}`,
				'color: hsl(55, 100%, 50%); font-size: 30px'
			)
			console.log(
				`%c${aplicacao}`,
				'color: hsl(55, 100%, 50%); font-size: 20px'
			)
			console.log(
				`%cVersão: ${versao} - ${ambiente}`,
				'color: hsl(55, 100%, 50%); font-size: 15px'
			)
		}


	}
}

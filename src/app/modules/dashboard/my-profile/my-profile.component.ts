import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.styl']
})
export class MyProfileComponent implements OnInit {

  constructor(private translate: TranslateService) {
		translate.setDefaultLang('pt');
	  }
	
	  switchLanguage(language: string) {
		this.translate.use(language);
	  }


  ngOnInit(): void {
  }

}

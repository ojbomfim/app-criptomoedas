import { CustomersComponent } from './modules/dashboard/customers/customers.component';
import { AccountsComponent } from './modules/dashboard/accounts/accounts.component';
import { StrategiesComponent } from './modules/dashboard/strategies/strategies.component';
import { ExchangesComponent } from './modules/dashboard/exchanges/exchanges.component';
import { BrowserModule } from '@angular/platform-browser'
import { AgGridModule } from 'ag-grid-angular';
import { NgModule, LOCALE_ID , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import localePtBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
import { DatehoursPipe } from './shared/pipes/datehours.pipe'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { SharedModule } from 'src/app/shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './modules/dashboard/settings/settings.component';
// import 'ag-grid-enterprise';
import { ProductService } from './modules/dashboard/exchanges/productservice';

import { TooltipModule } from 'primeng/tooltip';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';


export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
  }

registerLocaleData(localePtBr)

@NgModule({

	declarations: [
		AppComponent,
		SettingsComponent,
		ExchangesComponent,
		StrategiesComponent,
		AccountsComponent,
		CustomersComponent
		
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		HttpClientModule,
		SharedModule,
		BrowserAnimationsModule,
		FormsModule,
		TableModule,
		ButtonModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        AutoCompleteModule,
    	CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
		InputTextModule,
		ProgressBarModule,
		FileUploadModule,
		ToolbarModule,
		RatingModule,
		InputNumberModule,
		ConfirmDialogModule,
		InputTextareaModule,
		AgGridModule.withComponents([]),
		TranslateModule.forRoot({
			loader: {
			  provide: TranslateLoader,
			  useFactory: HttpLoaderFactory,
			  deps: [HttpClient]
			}
		  })
	],
	providers: [
		
		DatehoursPipe,
		ProductService,
		MessageService, 
		ConfirmationService
		
	],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	],

	bootstrap: [AppComponent]
})
export class AppModule { }

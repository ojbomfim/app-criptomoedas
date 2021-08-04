import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryPasswordRoutingModule } from './recovery-password-routing.module';
import { RecoveryPasswordComponent } from './recovery-password.component';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [RecoveryPasswordComponent],
  imports: [
    CommonModule,
    RecoveryPasswordRoutingModule,
    TranslateModule
  ]
})
export class RecoveryPasswordModule { }

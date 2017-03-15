import { enableProdMode } from '@angular/core';

import { NgModule } from '@angular/core';
import { AuthModule } from './auth.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from '../routes/app.routes';
import { AppComponent } from '../components/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PaymentService } from '../../payment/services/payment.service';

import { PaymentComponent } from '../../payment/components/payment.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//  Activar modo producción
//  enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

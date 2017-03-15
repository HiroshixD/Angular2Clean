import { Routes } from '@angular/router';

import { PaymentComponent } from '../payment/components/payment.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'payment', pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent },  
];


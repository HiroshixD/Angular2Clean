import { Routes } from '@angular/router';

import { PaymentComponent } from '../../payment/components/payment.component';
import { AuthenticationComponent } from '../../authentication/components/authentication.component'; 

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
  { path: 'checkout', component: PaymentComponent },  
  { path: 'auth', component: AuthenticationComponent }
];


import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'payment',
  templateUrl: '../views/payment.view.html',
})
export class PaymentComponent {
	private usuarios = {};
	private _token = localStorage['token'];
	private data = {
		iso: 'pe',
		event: 2000
	};

	constructor(private paymentService: PaymentService) {  }

  		requestData() {
    		this.paymentService.requestingData(this.data, this._token)
      		.subscribe((data) => {
        		console.log(data)
      		});
  		}

}
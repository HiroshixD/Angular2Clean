import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'payment',
  templateUrl: '../views/payment.view.html',
})
export class PaymentComponent {
	private usuarios = {};
	private _token = '';
	private data = {
		iso: 'pe',
		event: 2000
	};

	constructor(private paymentService: PaymentService) {  }

  		login() {
  			this.usuarios['email'] = 'juangonzaq@gmail.com'
  			this.usuarios['password'] = 'secret'
  			console.log(this.usuarios)
  			this.paymentService.authentication(this.usuarios)
  			.subscribe((data) => {
  				console.log(data)
  				this._token = data.token;
  			});
  		}


  		requestData() {
    		this.paymentService.requestingData(this.data, this._token)
      		.subscribe((data) => {
        		console.log(data)
      		});
  		}

}
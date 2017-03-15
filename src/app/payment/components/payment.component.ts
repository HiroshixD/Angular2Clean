import { Component, ElementRef } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { AuthenticationService } from '../../authentication/services/authentication.service';

@Component({
  selector: 'payment',
  templateUrl: '../views/payment.view.html'
})
export class PaymentComponent {

  private endHour = 'Mar 15, 2017 11:55:00';
	private usuarios = {};
	private _token = '';
	private data = {
		iso: 'pe',
		event: 2000
	};

	constructor(private paymentService: PaymentService, private authenticationService: AuthenticationService, private elementRef:ElementRef) {  }

      ngAfterViewInit() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "app/payment/scripts/payment.script.js";
        this.elementRef.nativeElement.appendChild(script);
      }

      requestLogin() {
        this.usuarios['email'] = 'juangonzaq@gmail.com';
        this.usuarios['password'] = 'secret';
        console.log(this.usuarios);
        this.authenticationService.authentication(this.usuarios)
        .subscribe((data) => {
          console.log(data)
          localStorage['token'] = data.token;
        });        
      }

  		requestData() {
        this._token = localStorage['token'];
    		this.paymentService.requestingData(this.data, this._token)
      		.subscribe((data) => {
        		console.log(data)
      		});
  		}

}
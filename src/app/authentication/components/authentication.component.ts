import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'authentication',
    templateUrl: '../views/authentication.view.html'
})
export class AuthenticationComponent {
	private usuarios = {};

	constructor(private authenticationService: AuthenticationService) {  }
  		login() {
  			this.usuarios['email'] = 'juangonzaq@gmail.com';
  			this.usuarios['password'] = 'secret';
  			console.log(this.usuarios);
  			this.authenticationService.authentication(this.usuarios)
  			.subscribe((data) => {
  				console.log(data)
  				localStorage['token'] = data.token;
  			});
  		}

}
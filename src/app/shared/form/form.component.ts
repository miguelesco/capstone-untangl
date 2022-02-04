import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user/user.interface';

@Component({
  selector: 'app-form',
  template: `
  <div class="form-group">
    <label for="email"> Email address </label>
    <input type="email" 
    class="form-control" 
    id="email" 
    placeholder="Enter email" 
    [(ngModel)]="user.email">
  </div>
  <div class="form-group">
    <label for="password"> Password </label>
    <input type="password" 
    class="form-control" 
    id="email" 
    placeholder="Password" 
    [(ngModel)]="user.password">
  </div>
  <button class="btn btn-primary" (click)="onSubmit()">{{ btnText }}</button>
  `,
})
export class FormComponent {

  @Input() btnText : string = ''

  user: User = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) {}

  onSubmit() {
    if(this.btnText === 'LOGIN') {
      this.auth.signIn(this.user)
    } else if(this.btnText === 'REGISTER') {
      this.auth.signUp(this.user)
    }
  }

}

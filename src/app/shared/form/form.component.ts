import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


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
  
  

  ngOnInit(): void {
  }

}

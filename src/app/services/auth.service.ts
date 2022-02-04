import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) { 
    
  }

  async signUp({ email, password }: User) {
    if(!email || !password) window.alert('please remember supply all the info');
    const user = this.auth.createUserWithEmailAndPassword(email, password)
    await user
    window.alert("you have been succesfully register!");
    console.log(user);
    
  }

  async signIn({ email , password }: User) {
    if(!email || !password) window.alert('please remember supply all the info');
    const user = this.auth.signInWithEmailAndPassword(email, password)
    await user;
    this.router.navigate(['/home'])
    console.log(user);
  }

  logout () {
    this.auth.signOut;
  }
}

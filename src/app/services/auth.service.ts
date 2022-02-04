import { Injectable } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  user,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User as UserSimple } from '../user/user.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<User | null>;

  constructor(public auth: Auth, private router: Router) { 
    this.userData = user(auth)
  }

  async signUp({ email, password }: UserSimple) {
    if(!email || !password) window.alert('please remember supply all the info');
    const user = createUserWithEmailAndPassword(this.auth, email, password)
    await user
    window.alert("you have been succesfully register!");
    this.router.navigate(['/home'])
    
  }

  async signIn({ email , password }: UserSimple) {
    if(!email || !password) window.alert('please remember supply all the info');
    const user = signInWithEmailAndPassword(this.auth, email, password)
    await user;
    this.router.navigate(['/home'])
    console.log(user);
  }

  logout () {
    signOut(this.auth);
    this.router.navigate(['/login'])
  }
}

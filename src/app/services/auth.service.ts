import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  user: firebase.User;
  isLogged: boolean;

  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState;
    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }
  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }
  loginWithEmail(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }
  loginWithGoogle() {
    return this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.afa.signOut();
  }
}

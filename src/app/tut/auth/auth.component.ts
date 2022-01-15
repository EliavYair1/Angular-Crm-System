import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, observable } from 'rxjs';
import firebase from 'firebase';

import 'firebase/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };
  user$: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState;
  }
  createUser() {
    this.afa.createUserWithEmailAndPassword(
      this.form.email,
      this.form.password
    );
  }
  loginUser() {
    this.afa.signInWithEmailAndPassword(this.form.email, this.form.email);
  }
  loginWithGooglePop() {
    this.afa.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginWithGoogleRedirect() {
    this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afa.signOut();
  }
  ngOnInit(): void {}
}

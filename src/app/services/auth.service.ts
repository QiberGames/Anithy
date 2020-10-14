import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from './user.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  async EmailSignin(email:string,password:string) {
    const credential = await this.afAuth.signInWithEmailAndPassword(email,password);
    return this.updateUserData(credential.user);
  }
  async EmailSignup(email:string,password:string) {
    const credential = await this.afAuth.signInWithEmailAndPassword(email,password);
    return this.updateUserData(credential.user);
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.id,
      email: user.email,
      photoURL: user.photoURL,
      username: user.username,
      birth: user.birth,
      gender: user.gender,
      country: user.coutry,
      phone:{
        number:user.phone.number,
        country:user.phone.country
      },
      displayName:user.displayName
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}

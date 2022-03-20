import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {BehaviorSubject, map, Observable} from 'rxjs';
import { Router } from '@angular/router'
import {of as observableOf } from 'rxjs'

import { UserData } from '../shared/types/interfaces'
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false
  constructor(private auth: AngularFireAuth, private afs: AngularFirestore, private router: Router,private toast: HotToastService) { }

  register(email:string,password: string) {
    this.auth.createUserWithEmailAndPassword(email,password).then(() => {
      this.toast.success('Registration is successfull!')
      this.router.navigate(['/login'])
    }).catch(err => {
      this.toast.error(`${err}`)
    })
  }

  login(email:string,password: string) {
    this.auth.signInWithEmailAndPassword(email,password).then(() => {
      this.toast.success('Logged in successfully')
      this.isLoggedIn = true
      this.router.navigate(['/'])
    }).catch(err => {
      this.toast.error(`${err}`)
    })
  }

  logOut() {
    this.auth.signOut()
    .then(() => {   
      this.isLoggedIn = false
      this.toast.success('User successfully logged out.')
      this.router.navigate(['/'])
    }).catch(err => {
      this.toast.error(`${err}`)
    })
  }

}



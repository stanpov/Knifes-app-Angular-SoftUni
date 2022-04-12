import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { questionData } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private afs: AngularFirestore, public toast: HotToastService, public route: Router) { }

  addQuestion(name: string, phone: number, email: string, questions: string) {
    this.afs.collection('QA').doc().set({
      name: name,
      phone: phone,
      email: email,
      questions: questions
    }).then(() => {
      this.toast.success('Your message is successfully send.')
      this.route.navigate(['/'])
    }).catch((err) => {
      this.toast.error(`${err}`)
    })
  }

  getAllMessages(): Observable<any> {
    return this.afs.collection<questionData>('QA').snapshotChanges()
  }

  deleteMessage(id: string) {
    this.afs.collection('QA').doc(id).delete()
    this.toast.success('Message deleted successfully.')
  }
}

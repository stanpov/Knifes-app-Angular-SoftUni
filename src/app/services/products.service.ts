import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { carouselImages } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore) { }

  getCaroulselImages(): Observable<any> {
    return this.afs.collection<carouselImages>('best-knifes').snapshotChanges()
  }
}

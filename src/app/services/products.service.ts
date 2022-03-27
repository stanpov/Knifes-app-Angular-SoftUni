import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { carouselImages, knifesData } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore) { }

  getCaroulselImages(): Observable<any> {
    return this.afs.collection<carouselImages>('news').snapshotChanges()
  }

  getAllProductsWithArgument(argument: string | null): Observable<any> {
    return this.afs.collection<knifesData>('all').snapshotChanges()
  }
  
 }

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { cardDataProduct, carouselImages, knifesData } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cardProducts: cardDataProduct[] = []
  priceToPay: number = 0
  constructor(private afs: AngularFirestore, private router: Router) { }

  getCaroulselImages(): Observable<any> {
    return this.afs.collection<carouselImages>('news').snapshotChanges()
  }

  getAllProductsByOptionalQuerry(argument?: string | null): Observable<any> {
    return this.afs.collection<knifesData>('all').snapshotChanges()
  }

  getProduct(prodId: string): Observable<knifesData | undefined> {
    return this.afs.collection<knifesData>('all').doc(prodId).valueChanges()
  }

  addToCard(product: knifesData, quantity: number) {
    this.cardProducts.push({product: {...product,quantity: quantity}})
  }

  getAllQuantity() {
    if (this.cardProducts.length > 0) {
      this.cardProducts
    }
  }

  clearAllCard() {
    this.cardProducts = []
  }

  removeItemFromCard(itemId: string) {
    let filteredItems = this.cardProducts.filter(item => item.product.id !== itemId)
    this.cardProducts = filteredItems
    return this.cardProducts
  }
  
 }

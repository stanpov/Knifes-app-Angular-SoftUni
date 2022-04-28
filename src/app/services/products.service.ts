import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { cardDataProduct, carouselImages, knifesData } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cardProducts: cardDataProduct[] = []
  priceToPay: number = 0
  constructor(private afs: AngularFirestore, private router: Router, public toast: HotToastService) { }

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

  deleteItem(itemId: string) {
    this.afs.collection('all').doc(itemId).delete().then(() => {
      this.toast.success('Item successfully deleted!')
      this.router.navigate(['/allProducts'])
    }).catch((err) => {
      this.toast.error(err)
    })
  }

  adminAddItem(img: string, price: number, quality: number, description: string, category: string) {
    let data = {
      img: img,
      price: price,
      quality: quality,
      description: description,
      category: category
    }
    this.afs.collection('all').doc().set(data).then(() => {
      this.toast.success('Item is successfully added!')
      this.router.navigate(['/'])
    }).catch(err => {
      this.toast.error(err)
    })
  }
  
 }

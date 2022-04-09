import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { cardDataProduct } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, DoCheck{

  myCard: cardDataProduct[] = []
  totalToPay: number = 0
  allowToPay: boolean = true
  constructor(public ps: ProductsService,public router: Router) { }

  ngOnInit(): void {
   this.myCard = this.ps.cardProducts
   this.myCard.forEach((el) => {
     this.totalToPay += el.product.price
   })
   console.log(this.totalToPay)
  }
  ngDoCheck(): void {
    if (this.myCard.length > 0) {
      this.allowToPay = false
    } else {
      this.allowToPay = true
    }
  }

  clearCard() {
    this.ps.clearAllCard()
    this.myCard = this.ps.cardProducts
  }

  removeFromCard(productId: string) {
  this.totalToPay = 0
  this.myCard = this.ps.removeItemFromCard(productId)
  
  this.myCard.forEach((el) => {
    this.totalToPay += el.product.price
  })
    
  }

  payNow() {
    this.ps.clearAllCard() 
    this.router.navigate(['checkout'])
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { knifesData } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: knifesData | undefined
  productId: string | null = null
  quantity: number = 1
  isLoggedIn: boolean = false
  constructor(private af: ProductsService, private ar: ActivatedRoute,public as: AuthService) { 
  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((param) => {
      this.productId = param.get('id')
    })
    if (this.productId) {
      this.af.getProduct(this.productId).subscribe((data) => {
        this.product = data
      })
    }
    if (this.as.isLoggedIn) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  addToCard(product: knifesData, quantity: number) {
    console.log(quantity)
    this.af.addToCard(product, quantity)
  }

}

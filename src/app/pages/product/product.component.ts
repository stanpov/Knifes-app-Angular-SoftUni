import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private af: ProductsService, private ar: ActivatedRoute) { 
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
    
  }

  addToCard(product: knifesData, quantity: number) {
    console.log(quantity)
    this.af.addToCard(product, quantity)
  }

}

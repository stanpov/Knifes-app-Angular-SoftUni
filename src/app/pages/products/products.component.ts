import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { knifesData } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  orderByPrice: boolean = false
  options: string[] = [
    'Price',
    'Views',
    'Orders',
    'Quality'
  ]
  products: knifesData[] = []
  constructor(private productServ: ProductsService) { }

  ngOnInit(): void {
    this.productServ.getAllProductsNoFilters().subscribe((response) => {
      response.forEach((el: any) => {
        this.products.push({
          ...el.payload.doc.data(),
          id: el.payload.doc.id
        })
      })
    })
  }

}

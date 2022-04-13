import { Component, OnInit,DoCheck } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { knifesData } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,DoCheck {

  products: knifesData[] = []
  queryParam: string | null = null
  isLoggedIn: boolean = false

  constructor(private productServ: ProductsService, private router: Router, private ar: ActivatedRoute,public as: AuthService) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe((param) => {
      this.queryParam = param['category']
      this.products = []
      if (this.queryParam !== undefined) {
        this.productServ.getAllProductsByOptionalQuerry(this.queryParam).subscribe((response) => {
          response.forEach((el: any) => {
            let data = el.payload.doc.data()
            let prodId = el.payload.doc.id
            if (data.category === this.queryParam) {
              this.products.push({
                ...data,
                id: prodId
              })
            }
          })
        })
      } else {
        this.productServ.getAllProductsByOptionalQuerry().subscribe((resp) => {
          resp.forEach((el: any) => {
            let data = el.payload.doc.data()
            let prodId = el.payload.doc.id
              this.products.push({
                ...data,
                id: prodId
              })
          })
        })
      }
      
    })
    if (this.as.isLoggedIn) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }
  ngDoCheck(): void {
  }

  addToCard(product: knifesData, quantity: number) {
    this.productServ.addToCard(product,quantity)
  }

}

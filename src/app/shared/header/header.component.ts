import { Component, OnDestroy, OnInit, DoCheck,  } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{
  
  numberProducts: number = 0
  constructor(public auth: AuthService, public af: ProductsService) { 
  }

  ngOnInit(): void {
   this.numberProducts = this.af.cardProducts.length
  }

  ngDoCheck(): void {
    if (this.numberProducts !== this.af.cardProducts.length) {
      this.numberProducts = this.af.cardProducts.length
    }
  }

  logOut() {
    this.auth.logOut()
  }

  
}

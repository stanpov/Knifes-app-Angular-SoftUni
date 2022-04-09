import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { cardDataProduct } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  myCard: cardDataProduct[] = []
  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }

  startAgain() {
    this.authServ.logOut()
  }

}

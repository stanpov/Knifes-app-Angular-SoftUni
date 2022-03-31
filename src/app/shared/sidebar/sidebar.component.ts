import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private prodSer: ProductsService) { }

  ngOnInit(): void {
  }

  scroolTop() {
    window.scroll(0,0)
  }

  goTo(param: string) {
    this.router.navigate(['allProducts'],{ queryParams: { category: param } })
  }


}

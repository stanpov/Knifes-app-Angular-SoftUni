import { Component, Input, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ProductsService } from 'src/app/services/products.service';
import { carouselImages } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
 images: carouselImages[] = []
 category: string[] = [
   'All',
   'Kitchen',
   'Sword',
   'Hunting',
   'Special',
   'Axes'
 ]
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getCaroulselImages().subscribe((img) => {
      img.forEach((el: any) => {
        this.images.push({
          ...el.payload.doc.data(),
          id: el.payload.doc.id,
        })
      })
    })
    console.log(this.images)
  }

}

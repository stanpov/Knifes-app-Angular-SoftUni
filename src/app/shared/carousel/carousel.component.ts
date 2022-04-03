import { Component, Input, OnInit } from '@angular/core';
import { carouselImages } from '../types/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImages[] = []
  @Input() indicators: boolean = true
  @Input() controls: boolean = true
  @Input() autoSlide: boolean = false
  @Input() slideInterval: number = 3000
  selectedIndex = 0
  constructor() { }

  selectImage(index: number) {
    this.selectedIndex = index
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1
    } else {
      this.selectedIndex = this.selectedIndex - 1
    }
    
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length -1 ) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex = this.selectedIndex + 1
    }
  }

  autoSlideImages() {
    setInterval(() => {
      this.onNextClick()
    }, this.slideInterval)
  }

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages()
    }
  }

}

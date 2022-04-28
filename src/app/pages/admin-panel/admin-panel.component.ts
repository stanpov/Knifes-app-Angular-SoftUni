import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  uploadForm!: FormGroup
  categoryValues: string[] = ['kitchen','hunting','sword','tools','combat']
  constructor(public toast: HotToastService, private afs: ProductsService) { }

  ngOnInit(): void {
    this.uploadForm = new FormGroup({
      'imgSrc': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, Validators.required),
      'quality': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(!this.uploadForm.valid) {
      this.uploadForm.reset()
      this.toast.error('All fields should be populated')
      return
    } else {
      const { category, price, quality, imgSrc, description} = this.uploadForm.value
     this.afs.adminAddItem(imgSrc,price,quality,description,category)
    }
  }
}

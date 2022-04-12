import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private contactServ: ContactService, public toast: HotToastService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'questions': new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(!this.contactForm.valid) {
      this.contactForm.reset()
      this.toast.error('All field must be populated before submit')
      return
    } 
    else {
      const { email, name, phone, questions } = this.contactForm.value
      this.contactServ.addQuestion(name,phone,email,questions)
      this.contactForm.reset()
    }
  }

}

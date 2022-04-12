import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { questionData } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  allMessages: questionData[] = []
  constructor(public contactS: ContactService) { }

  ngOnInit(): void {
    this.contactS.getAllMessages().subscribe((response) => {
      response.forEach((el: any) => {
        let data = el.payload.doc.data()
        let messId = el.payload.doc.id
          this.allMessages.push({
            ...data,
            id: messId
          })
      })
    })
  }

  deleteMessage(id: string) {
    this.contactS.deleteMessage(id)
    this.allMessages = []
    
  }

}

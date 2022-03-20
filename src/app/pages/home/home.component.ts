import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  images = [
    {
      imageSrc: 'https://media.istockphoto.com/photos/tulips-flowers-blue-floral-background-closeup-nature-picture-id1334403300?b=1&k=20&m=1334403300&s=170667a&w=0&h=bd-J5Wc-cqjzsKr5sEsrYHCgE0g5i3yyTZ3XqB4cJL4=',
      imageAlt: 'flower1'
    },
    {
      imageSrc: 'https://media.istockphoto.com/photos/floral-seamless-pattern-multicolored-flowers-peonies-on-a-black-picture-id1337260312?b=1&k=20&m=1337260312&s=170667a&w=0&h=BbEqdzmEelLDkqaX_VhXUy-DveCT05JL95hwge6RD_o=',
      imageAlt: 'flower2'
    },
    {
      imageSrc: 'https://media.istockphoto.com/photos/chinese-new-year-festival-decorations-made-from-plum-blossom-on-a-red-picture-id1291315339?b=1&k=20&m=1291315339&s=170667a&w=0&h=QWfvb5zf4nnMBCBqKLdodZZBauqlUOwtqTfOD4AtiOg=',
      imageAlt: 'flower3'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

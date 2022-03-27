import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  scroolTop() {
    window.scroll(0,0)
  }

  goTo(param: string) {
    this.router.navigate(['products'],{ queryParams: { category: param } })
  }


}

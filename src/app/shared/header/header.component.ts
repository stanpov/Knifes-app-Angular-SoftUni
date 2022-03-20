import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(public auth: AuthService) { 
  }

  ngOnInit(): void {
  }

  logOut() {
    this.auth.logOut()
  }

  
}

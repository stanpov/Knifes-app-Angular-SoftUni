import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog'
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  

  constructor(public authService: AuthService, public mat: MatDialog) {
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
  }

  submit() {
   if(!this.loginForm.valid) {
     this.loginForm.reset()
     return
   }
   const { email, password } = this.loginForm.value
    this.authService.login(email,password)
    this.loginForm.reset()
 }

 openRegister() {
  const dialogRef = this.mat.open(RegisterComponent, {
    role: 'dialog',
    height: '480px',
    width: '480px'
  })

  dialogRef.afterClosed().subscribe(result => {
    const {email,password} = result

    if (result !== undefined) {
      this.authService.register(email,password)
    }
    return
  })
 }

}

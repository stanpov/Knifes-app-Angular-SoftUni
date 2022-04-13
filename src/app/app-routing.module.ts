import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CardComponent } from './pages/card/card.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'allProducts', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product/:id', pathMatch: 'full', component: ProductComponent},
  {path: 'card', component: CardComponent,canActivate:[AuthGuardService]},
  {path: 'checkout', component: CheckoutComponent,canActivate:[AuthGuardService]},
  {path: 'contacts', component: ContactsComponent},
  {path: 'messages', component: MessagesComponent,canActivate:[AuthGuardService]},
  {path: 'payment-methods', component: PaymentMethodsComponent},
  {path: 'shipping-policy', component: ShippingPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

<<<<<<< HEAD
import { NgModule} from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { LayoutComponent } from './layout.component'; 
import { LoginComponent } from './login.component'; 
import { RegisterComponent } from './register.component'; 
import { VerifyEmailComponent } from './verify-email.component'; 
import { Forgot Password Component } from './forgot-password.component'; 
import { ResetPassword Component } from './reset-password.component'; 

const routes: Routes = [ 
    { 
        path: '', component: LayoutComponent, 
        children: [ 
            { path: 'login', component: LoginComponent }, 
            { path: 'register', component: RegisterComponent }, 
            { path: 'verify-email', component: VerifyEmailComponent }, 
            { path: 'forgot-password', component: Forgot PasswordComponent }, 
            { path: 'reset-password', component: ResetPassword Component } 
        ]
    }
];
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { VerifyEmailComponent } from './verify-email.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
>>>>>>> bd1e17f9b1500808be443ab6ac997db51054fabc

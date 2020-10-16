import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './guest/forgot-password/forgot-password.component';

//Components imports
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { VerifyEmailComponent } from './guest/verify-email/verify-email.component';

import { HomeComponent } from './guest/home/home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectToDashboard) },
  { path: 'register', component: RegisterComponent, ...canActivate(redirectToDashboard) },
  { path: 'forgot-password', component: ForgotPasswordComponent, ...canActivate(redirectToDashboard) },
  { path: 'verify-email-address', component: VerifyEmailComponent, ...canActivate(redirectToDashboard) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

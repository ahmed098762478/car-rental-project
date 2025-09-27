import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {WebsiteComponent} from './components/website/website.component';

export const routes: Routes = [
    { path : 'car-rental', component: WebsiteComponent },
    { path : 'login', component: LoginComponent },
    { path : '', redirectTo: 'car-rental', pathMatch: 'full' },
    { path : '**', redirectTo: 'car-rental', pathMatch: 'full' }
  ];

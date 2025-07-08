import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {
    path: "signup",
    component: SignupComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path: "**",
        redirectTo:"home"
    }
];
